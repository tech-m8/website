#!/bin/sh
#
# install.sh — one-line installer for job-hunter (macOS + Linux).
#
#   curl -fsSL https://tech-m8.solutions/downloads/job-hunter/install.sh | sh
#
# Detects your OS/arch, downloads the matching archive, verifies its sha256
# against the published checksums file (fails closed on mismatch), and installs.
#
#   macOS  -> the native JobHunter.app bundle into /Applications
#   Linux  -> the job-hunter CLI binary onto your PATH
#
# Either way it strips the Gatekeeper quarantine flag so the unsigned artifact
# runs without the "cannot be opened" prompt.
#
# Overridable via env:
#   BASE_URL   where to fetch artifacts from (default: the tech-m8 site)
#   VERSION    which version to install      (default: latest)
#   BIN_DIR    Linux install directory       (default: /usr/local/bin or ~/.local/bin)
#   APP_DIR    macOS install directory       (default: /Applications or ~/Applications)

set -eu

BASE_URL="${BASE_URL:-https://dl.tech-m8.solutions/job-hunter}"
VERSION="${VERSION:-latest}"

err() { echo "install: $*" >&2; exit 1; }
info() { echo "==> $*"; }

# --- detect platform -------------------------------------------------------
os="$(uname -s)"
case "$os" in
  Darwin) os="darwin" ;;
  Linux)  os="linux"  ;;
  *) err "unsupported OS '$os' — see $BASE_URL for manual downloads" ;;
esac

arch="$(uname -m)"
case "$arch" in
  x86_64|amd64)   arch="amd64" ;;
  arm64|aarch64)  arch="arm64" ;;
  *) err "unsupported arch '$arch' — see $BASE_URL for manual downloads" ;;
esac

# --- pick a downloader -----------------------------------------------------
if command -v curl >/dev/null 2>&1; then
  dl() { curl -fsSL "$1" -o "$2"; }
elif command -v wget >/dev/null 2>&1; then
  dl() { wget -qO "$2" "$1"; }
else
  err "need curl or wget"
fi

# --- resolve version -------------------------------------------------------
# The site publishes a plain-text VERSION file naming the current release so we
# can build the versioned archive names. Fall back to a 'latest' alias if absent.
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT INT TERM

if [ "$VERSION" = "latest" ]; then
  if dl "$BASE_URL/VERSION" "$tmp/VERSION" 2>/dev/null; then
    VERSION="$(tr -d ' \t\r\n' < "$tmp/VERSION")"
  else
    err "could not resolve latest version from $BASE_URL/VERSION — set VERSION explicitly"
  fi
fi

# macOS ships a per-arch .dmg produced by `cargo tauri build` (release.sh).
# Linux ships a per-arch CLI tarball.
if [ "$os" = "darwin" ]; then
  archive="JobHunter_${VERSION}_macos_${arch}.dmg"
else
  archive="job-hunter_${VERSION}_${os}_${arch}.tar.gz"
fi
checksums="job-hunter_${VERSION}_checksums.txt"

info "installing job-hunter $VERSION ($os/$arch)"

# --- download archive + checksums -----------------------------------------
dl "$BASE_URL/$archive"   "$tmp/$archive"   || err "download failed: $BASE_URL/$archive"
dl "$BASE_URL/$checksums" "$tmp/$checksums" || err "download failed: $BASE_URL/$checksums"

# --- verify sha256 (fail closed) ------------------------------------------
expected="$(grep " $archive\$" "$tmp/$checksums" | awk '{print $1}')"
[ -n "$expected" ] || err "no checksum for $archive in $checksums"

if command -v shasum >/dev/null 2>&1; then
  actual="$(shasum -a 256 "$tmp/$archive" | awk '{print $1}')"
elif command -v sha256sum >/dev/null 2>&1; then
  actual="$(sha256sum "$tmp/$archive" | awk '{print $1}')"
else
  err "need shasum or sha256sum to verify the download"
fi

[ "$expected" = "$actual" ] || err "checksum mismatch — aborting (expected $expected, got $actual)"
info "checksum ok"

if [ "$os" = "darwin" ]; then
  # --- macOS: install the JobHunter.app bundle -----------------------------
  # Mount the .dmg, copy the .app out, then detach. Tauri's `.dmg` is built on
  # the same macOS host, so the bundled .app matches the host arch the user
  # picked via `uname -m`.
  command -v hdiutil >/dev/null 2>&1 || err "need hdiutil to install the macOS app"

  # -nobrowse: don't show in Finder sidebar; -readonly: safety.
  mount_out="$(hdiutil attach -nobrowse -readonly -mountroot "$tmp" "$tmp/$archive" 2>&1)" \
    || err "could not mount $archive: $mount_out"

  # hdiutil emits lines like:
  #   /dev/disk5s1            Apple_HFS                          <mount-point>
  # Older macOS versions always mount under /Volumes/; newer ones honor
  # -mountroot and mount under the requested dir (e.g. $tmp). The mount point
  # can contain spaces ("Job Hunter") so we can't just awk-split on
  # whitespace — use a regex that captures the rest of the line after the
  # device node. Anything under /dev/ is excluded; the mount-point is the
  # first such path we find.
  mount_point="$(printf '%s\n' "$mount_out" \
    | sed -nE 's|^/dev/[[:print:]]+[[:space:]]+[[:graph:]]+[[:space:]]+(/[^[:space:]].*)$|\1|p' \
    | head -1)"
  [ -n "$mount_point" ] || err "could not determine mount point from hdiutil output: $mount_out"

  # Tauri names the bundle with the productName from tauri.conf.json
  # ("Job Hunter" — note the space). Accept either that or the legacy
  # SwiftUI name (no space) so an old .dmg still installs cleanly.
  app_in_dmg=""
  for candidate in "Job Hunter.app" "JobHunter.app"; do
    if [ -d "$mount_point/$candidate" ]; then app_in_dmg="$candidate"; break; fi
  done
  [ -n "$app_in_dmg" ] || err "mounted image did not contain Job Hunter.app or JobHunter.app (mount=$mount_point)"

  # strip quarantine off the whole bundle so the unsigned app launches cleanly.
  if command -v xattr >/dev/null 2>&1; then
    xattr -dr com.apple.quarantine "$mount_point/$app_in_dmg" 2>/dev/null || true
  fi

  if [ -n "${APP_DIR:-}" ]; then
    :
  elif [ -w /Applications ] 2>/dev/null; then
    APP_DIR="/Applications"
  else
    APP_DIR="$HOME/Applications"
  fi
  mkdir -p "$APP_DIR"

  # The .app we install is always `JobHunter.app` (no space) on disk — a
  # stable path that the rest of the system (Spotlight, Dock, uninstall.sh)
  # can rely on, regardless of the productName-with-space in the .dmg.
  install_app="$APP_DIR/JobHunter.app"

  # replace any prior install so we never merge stale files into the bundle.
  rm -rf "$install_app"
  # -R preserves the bundle's symlinks/dirs (Contents/Resources/etc).
  cp -R "$mount_point/$app_in_dmg" "$install_app"
  # Detach BEFORE the trap tears down $tmp — otherwise the trap's `rm -rf`
  # races the kernel and prints "Resource busy" / "Read-only file system".
  hdiutil detach "$mount_point" >/dev/null 2>&1 || true
  info "installed to $install_app"

  cat <<EOF

JobHunter $VERSION installed. Next:

  open "$APP_DIR/JobHunter.app"     # or launch it from Launchpad / Spotlight

Paste your license key on the activation screen to unlock features.
Need one? Email masnun@gmail.com (subject: Job Hunter license).
EOF
  exit 0
fi

# --- Linux: install the CLI binary -----------------------------------------
tar -xzf "$tmp/$archive" -C "$tmp"
[ -f "$tmp/job-hunter" ] || err "archive did not contain a job-hunter binary"
chmod +x "$tmp/job-hunter"

# --- choose install dir ----------------------------------------------------
if [ -n "${BIN_DIR:-}" ]; then
  :
elif [ -w /usr/local/bin ] 2>/dev/null; then
  BIN_DIR="/usr/local/bin"
else
  BIN_DIR="$HOME/.local/bin"
fi
mkdir -p "$BIN_DIR"

mv "$tmp/job-hunter" "$BIN_DIR/job-hunter"
info "installed to $BIN_DIR/job-hunter"

case ":$PATH:" in
  *":$BIN_DIR:"*) ;;
  *) echo "    note: $BIN_DIR is not on your PATH — add it to your shell profile" ;;
esac

# --- next steps ------------------------------------------------------------
cat <<EOF

job-hunter $VERSION installed. Next:

  job-hunter           # open the web app at http://127.0.0.1:7777

Paste your license key on the activation screen to unlock features.
Need one? Email masnun@gmail.com (subject: Job Hunter license).
EOF
