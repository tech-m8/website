# install.ps1 - one-line installer for the Job Hunter desktop app (Windows x64).
#
#   irm https://tech-m8.solutions/downloads/job-hunter/install.ps1 | iex
#
# Downloads the Windows desktop-app archive, verifies its sha256 against the
# published checksums file (aborts on mismatch), installs the app under
# %LOCALAPPDATA%\Programs\JobHunter, adds Start Menu + Desktop shortcuts, and
# registers an uninstall entry (Settings > Apps / Control Panel). This mirrors
# the macOS installer, which drops the native JobHunter.app into /Applications.
#
# Overridable via env vars before piping to iex:
#   $env:BASE_URL  artifact base url (default: the tech-m8 R2 bucket)
#   $env:VERSION   version to install (default: latest)

$ErrorActionPreference = 'Stop'

$BaseUrl = if ($env:BASE_URL) { $env:BASE_URL } else { 'https://dl.tech-m8.solutions/job-hunter' }
$Version = if ($env:VERSION)  { $env:VERSION }  else { 'latest' }

function Fail($msg) { Write-Error "install: $msg"; exit 1 }

# --- resolve version -------------------------------------------------------
if ($Version -eq 'latest') {
  try {
    $Version = (Invoke-RestMethod -Uri "$BaseUrl/VERSION").Trim()
  } catch {
    Fail "could not resolve latest version from $BaseUrl/VERSION - set `$env:VERSION explicitly"
  }
}

# The desktop app ships as a self-contained x64 folder zipped as
# JobHunter_<ver>_windows_x64.zip (JobHunter.exe + bundled daemon + runtime).
$archive   = "JobHunter_${Version}_windows_x64.zip"
$checksums = "job-hunter_${Version}_checksums.txt"

Write-Host "==> installing Job Hunter $Version (windows/x64 desktop app)"

$tmp = Join-Path $env:TEMP ("job-hunter-" + [System.Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $tmp -Force | Out-Null

try {
  $zipPath = Join-Path $tmp $archive
  $sumPath = Join-Path $tmp $checksums
  Invoke-WebRequest -Uri "$BaseUrl/$archive"   -OutFile $zipPath
  Invoke-WebRequest -Uri "$BaseUrl/$checksums" -OutFile $sumPath

  # --- verify sha256 (fail closed) ----------------------------------------
  $line = Select-String -Path $sumPath -Pattern ([regex]::Escape($archive)) | Select-Object -First 1
  if (-not $line) { Fail "no checksum for $archive in $checksums" }
  $expected = ($line.Line -split '\s+')[0].ToLower()
  $actual   = (Get-FileHash -Algorithm SHA256 -Path $zipPath).Hash.ToLower()
  if ($expected -ne $actual) { Fail "checksum mismatch - aborting (expected $expected, got $actual)" }
  Write-Host "==> checksum ok"

  # --- install ------------------------------------------------------------
  $dest = Join-Path $env:LOCALAPPDATA 'Programs\JobHunter'

  # Close any running instance so its files aren't locked, then replace the
  # folder wholesale - never merge a new build onto stale files.
  Get-Process JobHunter -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
  Start-Sleep -Milliseconds 500
  if (Test-Path $dest) { Remove-Item -Recurse -Force $dest -ErrorAction SilentlyContinue }
  New-Item -ItemType Directory -Path $dest -Force | Out-Null
  Expand-Archive -Path $zipPath -DestinationPath $dest -Force

  $exe = Join-Path $dest 'JobHunter.exe'
  if (-not (Test-Path $exe)) { Fail "archive did not contain JobHunter.exe" }

  # Strip the "downloaded from the internet" mark off every extracted file so
  # SmartScreen doesn't re-flag the app on launch (the Windows analogue of the
  # macOS quarantine strip).
  Get-ChildItem -Recurse -File $dest | Unblock-File -ErrorAction SilentlyContinue
  Write-Host "==> installed to $dest"

  # --- Start Menu + Desktop shortcuts -------------------------------------
  $shell = New-Object -ComObject WScript.Shell
  $startMenu = Join-Path $env:APPDATA 'Microsoft\Windows\Start Menu\Programs'
  foreach ($lnkDir in @($startMenu, [Environment]::GetFolderPath('Desktop'))) {
    $lnkPath = Join-Path $lnkDir 'Job Hunter.lnk'
    $lnk = $shell.CreateShortcut($lnkPath)
    $lnk.TargetPath = $exe
    $lnk.WorkingDirectory = $dest
    $lnk.Description = 'Job Hunter'
    # Point the icon explicitly at the exe. JobHunter.exe embeds the app icon,
    # so index 0 is correct; being explicit (rather than the default empty
    # ",0") makes Windows re-read it instead of trusting a stale cache entry.
    $lnk.IconLocation = "$exe,0"
    $lnk.Save()
  }
  Write-Host "==> added Start Menu and Desktop shortcuts"

  # Reinstalling over the same path leaves Windows showing the OLD (or blank)
  # cached shortcut icon. Tell the shell associations changed and rebuild the
  # per-user icon cache so the new icon shows without a sign-out.
  Add-Type -Namespace Win -Name Shell -MemberDefinition @'
[System.Runtime.InteropServices.DllImport("shell32.dll")]
public static extern void SHChangeNotify(int e, uint f, System.IntPtr a, System.IntPtr b);
'@ -ErrorAction SilentlyContinue
  try { [Win.Shell]::SHChangeNotify(0x08000000, 0, [IntPtr]::Zero, [IntPtr]::Zero) } catch {}
  Start-Process -FilePath "$env:SystemRoot\System32\ie4uinit.exe" -ArgumentList '-show' -WindowStyle Hidden -ErrorAction SilentlyContinue

  # --- register uninstall (Settings > Apps / Control Panel) ---------------
  # Drop a self-contained uninstaller beside the app; it re-launches itself from
  # TEMP so it can delete its own install directory without locking it.
  $uninstallPs1 = Join-Path $dest 'uninstall.ps1'
  @'
# uninstall.ps1 - remove Job Hunter (files, shortcuts, registry entry).
$ErrorActionPreference = 'SilentlyContinue'
$dest = Join-Path $env:LOCALAPPDATA 'Programs\JobHunter'
# Re-launch from TEMP so we can delete $dest without locking this running script.
if ($PSCommandPath -and $PSCommandPath.StartsWith($dest, [StringComparison]::OrdinalIgnoreCase)) {
  $relocated = Join-Path $env:TEMP ('jobhunter-uninstall-' + [guid]::NewGuid().ToString() + '.ps1')
  Copy-Item -LiteralPath $PSCommandPath -Destination $relocated -Force
  Start-Process powershell -ArgumentList '-NoProfile','-WindowStyle','Hidden','-ExecutionPolicy','Bypass','-File',('"' + $relocated + '"')
  return
}
Get-Process JobHunter,job-hunter -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Milliseconds 700
Remove-Item (Join-Path $env:APPDATA 'Microsoft\Windows\Start Menu\Programs\Job Hunter.lnk') -Force
Remove-Item (Join-Path ([Environment]::GetFolderPath('Desktop')) 'Job Hunter.lnk') -Force
Remove-Item 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\JobHunter' -Recurse -Force
Remove-Item -Recurse -Force $dest
'@ | Set-Content -Path $uninstallPs1 -Encoding ascii

  $rk = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\JobHunter'
  New-Item -Path $rk -Force | Out-Null
  $sizeKb = [int](((Get-ChildItem $dest -Recurse -File | Measure-Object -Property Length -Sum).Sum) / 1024)
  $uninstCmd = 'powershell -NoProfile -ExecutionPolicy Bypass -File "' + $uninstallPs1 + '"'
  $props = @{
    DisplayName          = 'Job Hunter'
    DisplayVersion       = $Version.TrimStart('v')
    Publisher            = 'Tech M8'
    DisplayIcon          = $exe
    InstallLocation      = $dest
    UninstallString      = $uninstCmd
    QuietUninstallString = $uninstCmd
    URLInfoAbout         = 'https://tech-m8.solutions/products/job-hunter'
  }
  foreach ($k in $props.Keys) { New-ItemProperty -Path $rk -Name $k -Value $props[$k] -PropertyType String -Force | Out-Null }
  New-ItemProperty -Path $rk -Name 'EstimatedSize' -Value $sizeKb -PropertyType DWord -Force | Out-Null
  New-ItemProperty -Path $rk -Name 'NoModify' -Value 1 -PropertyType DWord -Force | Out-Null
  New-ItemProperty -Path $rk -Name 'NoRepair' -Value 1 -PropertyType DWord -Force | Out-Null
  Write-Host "==> registered uninstaller (Settings > Apps)"
} finally {
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Job Hunter $Version installed. Launch it from the Start Menu (search 'Job Hunter')"
Write-Host "or the new Desktop shortcut."
Write-Host ""
Write-Host "Windows may warn that the app is unsigned (SmartScreen) - choose 'More info' > 'Run anyway'."
Write-Host "Paste your license key on the activation screen to unlock features."
Write-Host "Need one? Email masnun@gmail.com (subject: Job Hunter license)."
