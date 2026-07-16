#!/bin/sh
#
# uninstall.sh — one-line uninstaller for job-hunter (macOS).
#
#   curl -fsSL https://tech-m8.solutions/downloads/job-hunter/uninstall.sh | sh
#
# Removes the installed app and its transient caches. Your data and license
# in ~/.job-hunter are KEPT by default so a reinstall stays activated — pass
# --purge to delete them too.
#
#   macOS  -> removes JobHunter.app from /Applications and ~/Applications
#
# It first stops any running background daemon so nothing keeps holding
# 127.0.0.1:7777 or the files being deleted.
#
# Flags:
#   --purge, --all   also delete ~/.job-hunter (db, license, profile, samples,
#                    jobs, and any multi-GB downloaded local models)
#
# Overridable via env:
#   JOB_HUNTER_HOME     data directory        (default: ~/.job-hunter)
#   JOB_HUNTER_LICENSE  license file          (default: $JOB_HUNTER_HOME/license.key)
#   APP_DIR             extra macOS app dir to check (beyond the defaults)

set -eu

PURGE=0
for arg in "$@"; do
  case "$arg" in
    --purge|--all) PURGE=1 ;;
    -h|--help)
      sed -n '2,25p' "$0" | sed 's/^# \{0,1\}//'
      exit 0 ;;
    *) echo "uninstall: unknown argument '$arg'" >&2; exit 1 ;;
  esac
done

info() { echo "==> $*"; }
note() { echo "    $*"; }

HOME_DIR="${JOB_HUNTER_HOME:-$HOME/.job-hunter}"

removed=0
rm_path() {
  # rm_path <label> <path>  — remove if present, report either way.
  if [ -e "$1" ] || [ -L "$1" ]; then
    rm -rf "$1"
    info "removed $1"
    removed=$((removed + 1))
  fi
}

# --- stop a running daemon so it isn't holding files or the port -----------
# The macOS app spawns `job-hunter daemon` as a child process (no launchd).
# Best-effort; ignore if not found.
if command -v pkill >/dev/null 2>&1; then
  pkill -f 'job-hunter daemon' 2>/dev/null && info "stopped running daemon" || true
fi

# --- macOS: the .app bundle (which contains the bundled Go binary) ----------
os="$(uname -s)"
if [ "$os" = "Darwin" ]; then
  rm_path /Applications/JobHunter.app
  rm_path "$HOME/Applications/JobHunter.app"
  [ -n "${APP_DIR:-}" ] && rm_path "$APP_DIR/JobHunter.app"
  # transient headless-Chrome scraping profiles, orphaned on a crash/kill.
  rm_path "$HOME/Library/Caches/job-hunter"
fi

# --- data directory: kept unless --purge -----------------------------------
if [ "$PURGE" = "1" ]; then
  rm_path "$HOME_DIR"
  # honor a license path relocated outside the data dir.
  [ -n "${JOB_HUNTER_LICENSE:-}" ] && rm_path "$JOB_HUNTER_LICENSE"
else
  if [ -d "$HOME_DIR" ]; then
    note "kept your data + license in $HOME_DIR"
    note "(reinstalling stays activated — rerun with --purge to delete it)"
  fi
fi

echo
if [ "$removed" = "0" ]; then
  info "nothing to remove — job-hunter does not appear to be installed"
else
  info "job-hunter uninstalled"
fi
