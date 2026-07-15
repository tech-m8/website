#!/bin/sh
#
# install.sh — one-line installer for Droid M8 (macOS menu-bar app).
#
#   curl -fsSL https://tech-m8.solutions/downloads/droidm8/install.sh | sh
#
# Resolves the latest release from a plain-text VERSION file on the download
# CDN, downloads the matching archive, verifies its sha256 against the published
# checksums file (fails closed on mismatch), unpacks the Droid M 8.app bundle
# into /Applications (or ~/Applications if /Applications isn't writable), and
# launches it.
#
# Because the bundle is fetched with curl — not a browser — macOS never
# attaches the com.apple.quarantine flag, so Gatekeeper does NOT block the
# unsigned app on first launch. We strip quarantine anyway, defensively.
#
# Overridable via env:
#   BASE_URL   where to fetch artifacts from (default: the tech-m8 site)
#   VERSION    which version to install      (default: latest)
#   APP_DIR    macOS install directory       (default: /Applications or ~/Applications)

set -eu

BASE_URL="${BASE_URL:-https://dl.tech-m8.solutions/droidm8}"
VERSION="${VERSION:-latest}"

APP_BUNDLE="Droid M 8.app"
ARCHIVE_BASE="DroidM8-mac"

err() { echo "install: $*" >&2; exit 1; }
info() { echo "==> $*"; }

# --- macOS only ------------------------------------------------------------
[ "$(uname -s)" = "Darwin" ] || err "Droid M 8 for Mac runs on macOS only — for Android grab the APK at $BASE_URL/../droidm8-android.apk (or visit the setup guide)"

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

# --- resolve version -------------------------------------------------------
# The site publishes a plain-text VERSION file naming the current release so we
# can build the versioned archive names. Fall back to a 'latest' alias if absent.
if [ "$VERSION" = "latest" ]; then
  if dl "$BASE_URL/VERSION" "$tmp/VERSION" 2>/dev/null; then
    VERSION="$(tr -d ' \t\r\n' < "$tmp/VERSION")"
  else
    err "could not resolve latest version from $BASE_URL/VERSION — set VERSION explicitly"
  fi
fi

archive="${ARCHIVE_BASE}_${VERSION}.tar.gz"
checksums="droidm8_${VERSION}_checksums.txt"

info "installing Droid M 8 $VERSION"

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

# --- unpack ----------------------------------------------------------------
tar -xzf "$tmp/$archive" -C "$tmp"
[ -d "$tmp/$APP_BUNDLE" ] || err "archive did not contain $APP_BUNDLE"

# --- install ---------------------------------------------------------------
if [ -n "${APP_DIR:-}" ]; then
  :
elif [ -w /Applications ] 2>/dev/null; then
  APP_DIR="/Applications"
else
  APP_DIR="$HOME/Applications"
fi
mkdir -p "$APP_DIR"

# Quit a running copy so the replace doesn't race a live process.
pkill -f "$APP_BUNDLE/Contents/MacOS/" 2>/dev/null || true

rm -rf "$APP_DIR/$APP_BUNDLE"
mv "$tmp/$APP_BUNDLE" "$APP_DIR/$APP_BUNDLE"

# Defensive: strip quarantine in case the bundle ever arrives flagged.
xattr -dr com.apple.quarantine "$APP_DIR/$APP_BUNDLE" 2>/dev/null || true

info "installed to $APP_DIR/$APP_BUNDLE"

# --- launch ----------------------------------------------------------------
open "$APP_DIR/$APP_BUNDLE" || err "installed, but could not auto-launch — open it from $APP_DIR"

cat <<EOF

Droid M 8 is installed and launching. It lives in your menu bar.

Next:
  1. Click the Droid M 8 menu-bar icon → note the 6-digit pairing PIN.
  2. On your Android phone (Droid M 8 app → Settings → Devices), enter the PIN.
  3. Grant Full Disk Access on the Mac for Mac → Phone notification mirroring.

Setup guide: https://tech-m8.solutions/products/droidm8#tutorial
EOF