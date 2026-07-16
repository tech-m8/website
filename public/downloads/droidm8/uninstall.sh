#!/bin/sh
#
# uninstall.sh — one-line uninstaller for Droid M8 (macOS).
#
#   curl -fsSL https://tech-m8.solutions/downloads/droidm8/uninstall.sh | sh
#
# Removes the installed Droid M8.app bundle from /Applications (or
# ~/Applications) and stops any running instance so files aren't held open.
# Your pairing PIN, clipboard history, and rule/suppress lists live in the
# Droid M8 app's sandbox (or in adb-side DataStore) and are removed with
# the app — pass --purge to also remove the macOS Read-Only Notification
# Center DB cache used for Mac → Phone forwarding.
#
# Flags:
#   --purge, --all   also remove the macOS usernoted DB mirror at
#                    ~/Library/Application Support/DroidM8 (if present)
#
# Overridable via env:
#   APP_DIR   extra macOS app dir to check (beyond the defaults)

set -eu

PURGE=0
for arg in "$@"; do
  case "$arg" in
    --purge|--all) PURGE=1 ;;
    -h|--help)
      sed -n '2,18p' "$0" | sed 's/^# \{0,1\}//'
      exit 0 ;;
    *) echo "uninstall: unknown argument '$arg'" >&2; exit 1 ;;
  esac
done

info() { echo "==> $*"; }
note() { echo "    $*"; }

APP_BUNDLE="Droid M8.app"

# --- stop a running instance so files aren't held open ----------------------
if command -v pkill >/dev/null 2>&1; then
  pkill -f "Droid M8.app/Contents/MacOS/" 2>/dev/null && info "stopped running Droid M8" || true
fi

removed=0
rm_path() {
  # rm_path <label> <path>  — remove if present, report either way.
  if [ -e "$1" ] || [ -L "$1" ]; then
    rm -rf "$1"
    info "removed $1"
    removed=$((removed + 1))
  fi
}

# --- macOS only -------------------------------------------------------------
os="$(uname -s)"
if [ "$os" != "Darwin" ]; then
  echo "uninstall: Droid M8 ships for macOS only — on Android, uninstall via Settings → Apps." >&2
  exit 1
fi

# --- the .app bundle --------------------------------------------------------
rm_path "/Applications/$APP_BUNDLE"
rm_path "$HOME/Applications/$APP_BUNDLE"
[ -n "${APP_DIR:-}" ] && rm_path "$APP_DIR/$APP_BUNDLE"

# --- purge: app-specific cache (only if --purge) ---------------------------
if [ "$PURGE" = "1" ]; then
  rm_path "$HOME/Library/Application Support/DroidM8"
  rm_path "$HOME/Library/Caches/DroidM8"
else
  note "your pairing PIN, clipboard history, and rules live with the app and were removed with it"
  note "(rerun with --purge to also remove the app's macOS cache)"
fi

echo
if [ "$removed" = "0" ]; then
  info "nothing to remove — Droid M8 does not appear to be installed"
else
  info "Droid M8 uninstalled"
fi