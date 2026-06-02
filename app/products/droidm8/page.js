import Link from 'next/link';

export const metadata = {
  title: 'DroidM8 — Bridge Android & Mac | TechM8',
  description: 'DroidM8 mirrors Android notifications and syncs clipboard with macOS over your local network. Download the APK and Mac app.',
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

const downloads = [
  {
    platform: 'Android',
    name: 'DroidM8 APK',
    desc: 'Install on Android 9+ phones. Sideload via the APK.',
    href: '/downloads/droidm8.apk',
    filename: 'droidm8.apk',
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m-11.046 0a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m11.42-6.122l2.076-3.595a.42.42 0 00-.726-.42l-2.1 3.638A12.94 12.94 0 0012 7.5c-1.844 0-3.587.387-5.147 1.082L4.753 4.944a.42.42 0 00-.726.42l2.076 3.595C2.474 11.054 0 14.27 0 17.998h24c0-3.728-2.473-6.944-6.103-8.78" />
      </svg>
    ),
  },
  {
    platform: 'macOS',
    name: 'DroidM8 for Mac',
    desc: 'Menu-bar companion for macOS 15+. Apple Silicon and Intel.',
    href: '/downloads/DroidM8-mac.zip',
    filename: 'DroidM8-mac.zip',
    icon: (
      <svg className="w-7 h-7 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
];

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
          <a
            href="#downloads"
            className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
          >
            Get DroidM8
          </a>
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
      <section id="downloads" className="relative pb-20 md:pb-28 scroll-mt-24">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Download <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">DroidM8</span>
            </h2>
            <p className="text-gray-400 text-sm">Install both apps and pair them with a PIN.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
}
