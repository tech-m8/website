# install.ps1 — one-line installer for job-hunter (Windows amd64).
#
#   irm https://tech-m8.solutions/downloads/job-hunter/install.ps1 | iex
#
# Downloads the Windows archive, verifies its sha256 against the published
# checksums file (aborts on mismatch), installs job-hunter.exe under
# %LOCALAPPDATA%\Programs\job-hunter, and adds it to your user PATH.
#
# Overridable via env vars before piping to iex:
#   $env:BASE_URL  artifact base url (default: the tech-m8 site)
#   $env:VERSION   version to install (default: latest)

$ErrorActionPreference = 'Stop'

$BaseUrl = if ($env:BASE_URL) { $env:BASE_URL } else { 'https://tech-m8.solutions/downloads/job-hunter' }
$Version = if ($env:VERSION)  { $env:VERSION }  else { 'latest' }

function Fail($msg) { Write-Error "install: $msg"; exit 1 }

# job-hunter ships windows for amd64 only.
$arch = 'amd64'

# --- resolve version -------------------------------------------------------
if ($Version -eq 'latest') {
  try {
    $Version = (Invoke-RestMethod -Uri "$BaseUrl/VERSION").Trim()
  } catch {
    Fail "could not resolve latest version from $BaseUrl/VERSION — set `$env:VERSION explicitly"
  }
}

$archive   = "job-hunter_${Version}_windows_${arch}.zip"
$checksums = "job-hunter_${Version}_checksums.txt"

Write-Host "==> installing job-hunter $Version (windows/$arch)"

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
  if ($expected -ne $actual) { Fail "checksum mismatch — aborting (expected $expected, got $actual)" }
  Write-Host "==> checksum ok"

  # --- install ------------------------------------------------------------
  $dest = Join-Path $env:LOCALAPPDATA 'Programs\job-hunter'
  New-Item -ItemType Directory -Path $dest -Force | Out-Null
  Expand-Archive -Path $zipPath -DestinationPath $dest -Force
  Write-Host "==> installed to $dest\job-hunter.exe"

  # --- add to user PATH ---------------------------------------------------
  $userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
  if ($userPath -notlike "*$dest*") {
    [Environment]::SetEnvironmentVariable('Path', "$userPath;$dest", 'User')
    Write-Host "==> added $dest to your user PATH (restart your terminal to pick it up)"
  }
} finally {
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "job-hunter $Version installed. Next:"
Write-Host "  job-hunter setup     # check detected AI CLIs + data dir"
Write-Host "  job-hunter serve     # open the web app at http://127.0.0.1:7777"
Write-Host ""
Write-Host "Windows may warn that the app is unsigned (SmartScreen) — choose 'More info' > 'Run anyway'."
Write-Host "Paste your license key on the activation screen to unlock features."
Write-Host "Need one? Email masnun@gmail.com (subject: Job Hunter license)."
