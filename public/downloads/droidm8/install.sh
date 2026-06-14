#!/bin/sh
#
# install.sh — one-line installer for Droid M8 (macOS menu-bar app).
#
#   curl -fsSL https://tech-m8.solutions/downloads/droidm8/install.sh | sh
#
# Downloads the Droid M8.app bundle, verifies its sha256 against the published
# checksum (fails closed on mismatch), installs it into /Applications, and
# launches it. Because the bundle is fetched with curl — not a browser — macOS
# never attaches the com.apple.quarantine flag, so Gatekeeper does NOT block the
# unsigned app on first launch. We strip quarantine anyway, defensively.
#
# Overridable via env:
#   BASE_URL   where to fetch artifacts from (default: the tech-m8 site)
#   APP_DIR    install directory             (default: /Applications)

set -eu

BASE_URL="${BASE_URL:-https://tech-m8.solutions/downloads}"
ARCHIVE="DroidM8-mac.tar.gz"
APP_NAME="Droid M8.app"

err()  { echo "install: $*" >&2; exit 1; }
info() { echo "==> $*"; }

# --- macOS only ------------------------------------------------------------
[ "$(uname -s)" = "Darwin" ] || err "Droid M8 for Mac runs on macOS only — for Android grab the APK at $BASE_URL/droidm8.apk"

# --- pick a downloader -----------------------------------------------------
if command -v curl >/dev/null 2>&1; then
  dl() { curl -fsSL "$1" -o "$2"; }
elif command -v wget >/dev/null 2>&1; then
  dl() { wget -qO "$2" "$1"; }
else
  err "need curl or wget"
fi

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT INT TERM

info "downloading Droid M8 for Mac"
dl "$BASE_URL/$ARCHIVE"          "$tmp/$ARCHIVE"          || err "download failed: $BASE_URL/$ARCHIVE"
dl "$BASE_URL/$ARCHIVE.sha256"   "$tmp/$ARCHIVE.sha256"   || err "download failed: $BASE_URL/$ARCHIVE.sha256"

# --- verify sha256 (fail closed) ------------------------------------------
expected="$(awk '{print $1}' "$tmp/$ARCHIVE.sha256")"
[ -n "$expected" ] || err "could not read published checksum"

if command -v shasum >/dev/null 2>&1; then
  actual="$(shasum -a 256 "$tmp/$ARCHIVE" | awk '{print $1}')"
elif command -v sha256sum >/dev/null 2>&1; then
  actual="$(sha256sum "$tmp/$ARCHIVE" | awk '{print $1}')"
else
  err "need shasum or sha256sum to verify the download"
fi

[ "$expected" = "$actual" ] || err "checksum mismatch — aborting (expected $expected, got $actual)"
info "checksum ok"

# --- unpack ----------------------------------------------------------------
tar -xzf "$tmp/$ARCHIVE" -C "$tmp"
[ -d "$tmp/$APP_NAME" ] || err "archive did not contain $APP_NAME"

# --- install ---------------------------------------------------------------
APP_DIR="${APP_DIR:-/Applications}"
if [ ! -w "$APP_DIR" ] 2>/dev/null; then
  APP_DIR="$HOME/Applications"
fi
mkdir -p "$APP_DIR"

# Quit a running copy so the replace doesn't race a live process.
pkill -f "$APP_NAME/Contents/MacOS/" 2>/dev/null || true

rm -rf "$APP_DIR/$APP_NAME"
mv "$tmp/$APP_NAME" "$APP_DIR/$APP_NAME"

# Defensive: strip quarantine in case the bundle ever arrives flagged.
xattr -dr com.apple.quarantine "$APP_DIR/$APP_NAME" 2>/dev/null || true

info "installed to $APP_DIR/$APP_NAME"

# --- launch ----------------------------------------------------------------
open "$APP_DIR/$APP_NAME" || err "installed, but could not auto-launch — open it from $APP_DIR"

cat <<EOF

Droid M8 is installed and launching. It lives in your menu bar.

Next:
  1. Click the Droid M8 menu-bar icon → note the 6-digit pairing PIN.
  2. On your Android phone (Droid M8 app → Settings → Devices), enter the PIN.
  3. Grant Full Disk Access on the Mac for Mac → Phone notification mirroring.

Setup guide: https://tech-m8.solutions/products/droidm8#tutorial
EOF
