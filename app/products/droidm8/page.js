import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'DroidM8 — Bridge Android & Mac | TechM8',
  description: 'DroidM8 mirrors Android notifications and syncs clipboard with macOS over your local network. Setup walkthrough, screenshots, and downloads for both apps.',
};

const features = [
  {
    title: 'Notification mirroring',
    desc: 'See Android notifications on your Mac as native banners. Reply, dismiss, and act without picking up the phone.',
  },
  {
    title: 'Clipboard sync',
    desc: 'Copy on one device, paste on the other. End-to-end encrypted with a PIN you control.',
  },
  {
    title: 'Local-network only',
    desc: 'No cloud, no account, no telemetry. Your data never leaves your LAN.',
  },
  {
    title: 'Rules & suppression',
    desc: 'Per-app blacklists, suppression rules, and history — keep noisy apps out of your flow.',
  },
];

const steps = [
  {
    title: 'Install both apps',
    body: 'Grab the APK on your Android phone and install the Mac app with the one-line Terminal command below. The Android app needs Android 9+. The Mac app needs macOS 13+ and runs from the menu bar.',
    images: [],
    cta: { href: '#downloads', label: 'Jump to downloads' },
  },
  {
    title: 'Open Droid M8 on your Mac',
    body: 'First launch opens a window with three tabs. Go to Devices — you\'ll see a 6-digit pairing PIN. Keep this window open; the phone needs that number next.',
    images: [
      { src: '/screenshots/mac-04-devices.png', alt: 'Droid M8 Mac app Devices tab showing pairing PIN', w: 760, h: 802 },
    ],
  },
  {
    title: 'Find the app from your menu bar',
    body: 'Droid M8 lives in the menu bar. Click the icon any time to reopen the window, send the clipboard, or jump to recent items. The pairing PIN also shows under Clipboard in the main menu.',
    images: [
      { src: '/screenshots/mac-05-menu-pin.png', alt: 'Droid M8 menu bar dropdown showing pairing PIN and quick actions', w: 600, h: 500 },
    ],
  },
  {
    title: 'Pair from your phone',
    body: 'Open Droid M8 on your phone, tap Settings (bottom-right), then the Devices tab. Type in the PIN from your Mac. Status flips to Connected once the two apps agree on the PIN.',
    images: [
      { src: '/screenshots/android-03-settings.png', alt: 'Droid M8 Android Settings showing connected status', w: 600, h: 1300 },
    ],
  },
  {
    title: 'Grant Android permissions',
    body: 'Tap Notifications in the bottom nav, then the Settings sub-tab, then the Permissions chip. Tap each row — Read Notifications, Send Notification, DND policy access — and approve in Android system settings.',
    images: [
      { src: '/screenshots/android-08-permissions-tab.png', alt: 'Droid M8 Android Permissions screen', w: 600, h: 1300 },
    ],
  },
  {
    title: 'Grant Full Disk Access on the Mac',
    body: 'For Mac → Phone notification mirroring, the Mac app needs Full Disk Access (it reads macOS\'s notification database). Open the Notifications tab on the Mac → click "Open Full Disk Access settings" → toggle Droid M8 on.',
    images: [
      { src: '/screenshots/mac-03-notifications.png', alt: 'Droid M8 Mac Notifications tab with Full Disk Access prompt', w: 760, h: 802 },
    ],
  },
  {
    title: 'You\'re paired — copy & paste across devices',
    body: 'Copy text on either device — it shows up on the other within a second, end-to-end encrypted with your PIN. The Clipboard tab on either side keeps a history you can re-copy or resend.',
    images: [
      { src: '/screenshots/android-01-syncing-clipboard.png', alt: 'Droid M8 Android Clipboard tab', w: 600, h: 1300 },
      { src: '/screenshots/mac-02-clipboard.png', alt: 'Droid M8 Mac Clipboard tab', w: 760, h: 802 },
    ],
  },
  {
    title: 'Bonus: DND-bypass rules',
    body: 'Add a rule under Notifications → DND Bypass to make specific apps + keywords re-alert your phone even when Do Not Disturb is on. Pick the app, add keywords, pick a sound.',
    images: [
      { src: '/screenshots/android-05-rules.png', alt: 'Droid M8 Android DND Bypass rules', w: 600, h: 1300 },
      { src: '/screenshots/android-09-rule-editor.png', alt: 'Droid M8 Android rule editor', w: 600, h: 1300 },
    ],
  },
  {
    title: 'Bonus: suppress noisy apps + back up rules',
    body: 'Suppress quietly cancels notifications from chosen apps and logs them to history. Backup writes your rules to a JSON file on Google Drive so reinstalling doesn\'t wipe them.',
    images: [
      { src: '/screenshots/android-06-suppress.png', alt: 'Droid M8 Android Suppress tab', w: 600, h: 1300 },
      { src: '/screenshots/android-04-backup.png', alt: 'Droid M8 Android Backup tab', w: 600, h: 1300 },
    ],
  },
];

const downloads = [
  {
    platform: 'Android',
    name: 'DroidM8 APK',
    desc: 'Install on Android 9+ phones. Sideload via the APK. Signed release build — if you installed an earlier test build, uninstall it first (different signature).',
    href: '/downloads/droidm8.apk',
    filename: 'droidm8.apk',
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m-11.046 0a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m11.42-6.122l2.076-3.595a.42.42 0 00-.726-.42l-2.1 3.638A12.94 12.94 0 0012 7.5c-1.844 0-3.587.387-5.147 1.082L4.753 4.944a.42.42 0 00-.726.42l2.076 3.595C2.474 11.054 0 14.27 0 17.998h24c0-3.728-2.473-6.944-6.103-8.78" />
      </svg>
    ),
  },
];

const MAC_INSTALL_CMD = 'curl -fsSL https://tech-m8.solutions/downloads/droidm8/install.sh | sh';

export default function DroidM8Page() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link href="/products" className="inline-flex items-center justify-center gap-1 text-violet-300 hover:text-violet-200 text-sm mb-6 w-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All products
          </Link>
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            Android + macOS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">DroidM8</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Bridge your Android phone with your Mac. Notification mirroring, clipboard sync, and more — all over your local network. No cloud, no account.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#downloads"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
            >
              Get DroidM8
            </a>
            <a
              href="#tutorial"
              className="inline-block bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 px-8 py-3 rounded-lg text-sm font-semibold transition-all"
            >
              Setup guide
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            What it <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">does</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="relative pb-20 md:pb-24 scroll-mt-24">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Download <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">DroidM8</span>
            </h2>
            <p className="text-gray-400 text-sm">Install both apps and pair them with a PIN.</p>
          </div>
          <div className="mb-8 rounded-2xl border border-violet-500/40 bg-violet-500/10 p-6 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-1">macOS 13+ · Apple Silicon &amp; Intel</div>
                <h3 className="text-white font-bold text-lg mb-2">Install Droid M8 for Mac</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Paste this in <strong>Terminal</strong> (Applications → Utilities, or Spotlight → “Terminal”) and press Return. It downloads the app, verifies its checksum, installs it to <code className="px-1.5 py-0.5 rounded bg-white/10 text-violet-100">/Applications</code>, and launches it.
                </p>
                <pre className="rounded-lg bg-black/50 border border-violet-500/30 p-4 overflow-x-auto text-xs sm:text-sm text-violet-100"><code>{MAC_INSTALL_CMD}</code></pre>
                <p className="text-gray-400 text-xs leading-relaxed mt-4">
                  No Gatekeeper warning: a <code className="px-1 py-0.5 rounded bg-white/10 text-violet-100">curl</code> download isn’t quarantined the way a browser download is, so the app — though not signed with an Apple Developer ID — launches without the “Apple could not verify…” block.
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mt-2">
                  Inspect first: <a href="/downloads/droidm8/install.sh" className="underline hover:text-violet-200">install.sh</a> · <a href="/downloads/DroidM8-mac.tar.gz.sha256" className="underline hover:text-violet-200">SHA-256 checksum</a>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {downloads.map((d) => (
              <div key={d.platform} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold">{d.platform}</div>
                    <h3 className="font-bold text-white text-lg">{d.name}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{d.desc}</p>
                <a
                  href={d.href}
                  download={d.filename}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial */}
      <section id="tutorial" className="relative pb-20 md:pb-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Setup <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">walkthrough</span>
            </h2>
            <p className="text-gray-400 text-sm">Pair the two apps in a few minutes. Screenshots from the real app.</p>
          </div>
          <ol className="space-y-12">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-violet-500/25">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                  {step.cta && (
                    <a
                      href={step.cta.href}
                      className="inline-flex items-center gap-1 mt-4 text-violet-300 hover:text-violet-200 text-sm font-medium"
                    >
                      {step.cta.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="md:col-span-7">
                  {step.images.length > 0 && (
                    <div className={`flex flex-wrap gap-4 justify-center ${step.images.length === 1 ? 'md:justify-end' : ''}`}>
                      {step.images.map((img) => {
                        const isPhone = img.h > img.w;
                        return (
                          <div
                            key={img.src}
                            className={`bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/40 ${
                              isPhone ? 'max-w-[200px]' : 'max-w-[420px] flex-1'
                            }`}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={img.w}
                              height={img.h}
                              className="rounded-xl w-full h-auto"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
