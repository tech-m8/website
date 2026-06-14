#!/bin/sh
#
# install.sh — one-line installer for job-hunter (macOS + Linux).
#
#   curl -fsSL https://tech-m8.solutions/downloads/job-hunter/install.sh | sh
#
# Detects your OS/arch, downloads the matching archive, verifies its sha256
# against the published checksums file (fails closed on mismatch), and installs
# the binary onto your PATH. On macOS it strips the Gatekeeper quarantine flag
# so the unsigned binary runs without the "cannot be opened" prompt.
#
# Overridable via env:
#   BASE_URL   where to fetch artifacts from (default: the tech-m8 site)
#   VERSION    which version to install      (default: latest)
#   BIN_DIR    install directory             (default: /usr/local/bin or ~/.local/bin)

set -eu

BASE_URL="${BASE_URL:-https://tech-m8.solutions/downloads/job-hunter}"
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

archive="job-hunter_${VERSION}_${os}_${arch}.tar.gz"
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

# --- unpack ----------------------------------------------------------------
tar -xzf "$tmp/$archive" -C "$tmp"
[ -f "$tmp/job-hunter" ] || err "archive did not contain a job-hunter binary"
chmod +x "$tmp/job-hunter"

# strip macOS quarantine so the unsigned binary launches cleanly.
if [ "$os" = "darwin" ] && command -v xattr >/dev/null 2>&1; then
  xattr -d com.apple.quarantine "$tmp/job-hunter" 2>/dev/null || true
fi

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

  job-hunter setup     # check detected AI CLIs + data dir
  job-hunter serve     # open the web app at http://127.0.0.1:7777

Paste your license key on the activation screen to unlock features.
Need one? Email masnun@gmail.com (subject: Job Hunter license).
EOF
