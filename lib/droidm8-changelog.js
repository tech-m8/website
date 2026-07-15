// Single source of truth for Droid M8's version + release notes.
// Used by the product page (latest release + version badge) and the dedicated
// changelog page (full history). Newest release first.

export const droidm8Changelog = [
  {
    version: 'v0.1.0',
    date: '2026-07-15',
    changes: [
      'Initial public release. Bridge your Android phone with your Mac over the local network — notification mirroring, clipboard sync, per-app DND-bypass rules, and a suppression list, all end-to-end encrypted with a PIN you control.',
      'macOS menu-bar agent with a single one-line installer (no Apple Developer ID required — see the setup guide for details).',
      'Optional Shizuku path for Samsung One UI to read the clipboard in the background.',
    ],
  },
];

// The current release — newest entry. Drives the version badge and install copy.
export const droidm8LatestVersion = droidm8Changelog[0].version;
