import Link from 'next/link';

export const metadata = {
  title: 'DroidM8 Privacy Policy | TechM8',
  description: 'DroidM8 mirrors Android notifications and syncs clipboard with macOS over your local network only. No cloud, no account, no telemetry. Read the full privacy policy.',
  alternates: { canonical: 'https://tech-m8.solutions/products/droidm8/privacy' },
};

const sections = [
  {
    title: 'Data we collect',
    body: (
      <p>
        DroidM8 does <strong className="text-white">not</strong> collect, store on any server, or
        transmit your personal data to us or to any third party. There is no account system, no
        login, no analytics SDK, no crash reporter, no remote configuration, and no
        advertising. Everything happens between the two devices you pair — your Android phone
        and your Mac — over your own local network.
      </p>
    ),
  },
  {
    title: 'What stays on your devices',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white">Clipboard contents.</strong> When clipboard sync is
          enabled, the app reads the text you copy on one device and writes it to the other.
          The text is also saved to a short local history (Android: in the app&apos;s Room
          database; macOS: in <code className="mx-1 px-1.5 py-0.5 rounded bg-white/10 text-violet-200 text-xs">UserDefaults</code>)
          so you can re-copy past items. Both are kept on-device.</li>
        <li><strong className="text-white">Notifications.</strong> With notification access
          granted, the app reads posted notifications to mirror them to the paired Mac (and to
          match your DND-bypass rules on-device). Notification text never leaves your local
          network.</li>
        <li><strong className="text-white">Pairing PIN, device name, and host/port.</strong> A
          6-digit PIN you set or accept; a friendly device name; and the local network
          endpoint of your paired device. Stored locally on both apps. The PIN is used as the
          password for an AES-GCM key derived via PBKDF2-HMAC-SHA256 (120,000 iterations) —
          see &ldquo;Encryption&rdquo; below.</li>
        <li><strong className="text-white">DND-bypass rules and suppression lists.</strong> Per-app
          rules, keywords, and suppression entries you create. Stored in the Android app&apos;s
          Room database. Optionally backed up to a file you choose via the system file picker
          — never uploaded by the app.</li>
      </ul>
    ),
  },
  {
    title: 'What is sent over the local network',
    body: (
      <p>
        When the two apps are paired, they communicate over a TCP connection on your local
        network (Bonjour-discovered, port assigned by the OS). The only payload is the
        clipboard text you copied and the notifications you choose to mirror. No other
        identifiers, telemetry, or diagnostic data are transmitted.
      </p>
    ),
  },
  {
    title: 'Encryption',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Each frame is encrypted with AES-GCM (256-bit key, 96-bit nonce, 128-bit tag) using
          a key derived from your PIN via PBKDF2-HMAC-SHA256 with 120,000 iterations and a
          fixed salt.</li>
        <li>The key is never sent over the network — both sides derive it independently from
          the same PIN + salt.</li>
        <li>The PIN is stored locally in the app&apos;s encrypted preferences; the derived key
          is held only in memory.</li>
      </ul>
    ),
  },
  {
    title: 'Permissions on Android',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white">Notification access</strong> — used to read posted
          notifications so the app can mirror them to your Mac and match your DND-bypass
          rules on-device.</li>
        <li><strong className="text-white">Accessibility service</strong> — used to read your
          clipboard in the background so the &ldquo;auto-send&rdquo; flow works without a
          foreground app. Disabled by default; opt-in only.</li>
        <li><strong className="text-white">DND policy access</strong> — required to post
          high-importance re-alerts that bypass Do Not Disturb for your matched rules.</li>
        <li><strong className="text-white">Companion device pairing</strong> — used on Samsung
          One UI to read the clipboard in the background without the accessibility service.
          Optional.</li>
        <li><strong className="text-white">Shizuku</strong> — used on Samsung One UI as an
          alternative path to read the clipboard in the background. Optional.</li>
        <li><strong className="text-white">Local network</strong> — used to discover and
          connect to your paired Mac over Bonjour.</li>
      </ul>
    ),
  },
  {
    title: 'Permissions on macOS',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white">Full Disk Access</strong> — required for Mac →
          Phone notification mirroring (the app reads macOS&apos;s notification database,
          which is protected by TCC).</li>
        <li><strong className="text-white">Local Network</strong> — required on macOS 14+
          for Bonjour discovery of your paired phone.</li>
        <li><strong className="text-white">Notifications</strong> — required to display the
          mirrored Android notifications as native banners.</li>
      </ul>
    ),
  },
  {
    title: 'Children\u2019s privacy',
    body: (
      <p>
        DroidM8 does not collect data from anyone, including children, and is suitable for
        general audiences.
      </p>
    ),
  },
  {
    title: 'Open source',
    body: (
      <p>
        DroidM8&apos;s code is open source. You can audit exactly what the app does — the
        network protocol, encryption, and storage. See the project repository for the
        Android client and the macOS companion.
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>
        If this policy changes, the updated version will be posted on this page with a new
        &ldquo;Last updated&rdquo; date.
      </p>
    ),
  },
  {
    title: 'Contact',
    body: (
      <p>
        Questions about this policy? Contact us at{' '}
        <a href="mailto:masnun@tech-m8.solutions" className="text-violet-300 hover:text-violet-200 underline">
          masnun@tech-m8.solutions
        </a>.
      </p>
    ),
  },
];

export default function DroidM8PrivacyPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link href="/products/droidm8" className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to DroidM8
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: 15 July 2026</p>
          <p className="text-gray-300 leading-relaxed">
            DroidM8 bridges your Android phone and your Mac — mirroring notifications and
            syncing clipboard over your local network. This policy explains what the app does
            and does not do with your information. In short:{' '}
            <strong className="text-white">everything stays on your devices and your LAN. No
            cloud, no account, no telemetry.</strong>
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-bold text-white mb-3">{s.title}</h2>
              <div className="text-gray-400 text-sm leading-relaxed">{s.body}</div>
            </div>
          ))}
          <p className="text-gray-600 text-xs text-center pt-4">DroidM8 by Tech M8.</p>
        </div>
      </section>
    </div>
  );
}