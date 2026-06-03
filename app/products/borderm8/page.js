import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'BorderM8 — Batch Photo Borders | TechM8',
  description: 'BorderM8 pads your photos onto a clean white square, adds a two-line caption with EXIF camera details, and exports square JPEGs. On-device, no permissions, no cloud. Setup guide, screenshots, and APK download.',
};

const features = [
  {
    title: 'Square white border',
    desc: 'Each photo is scaled to fit — never cropped — and sits on a white square with a thin black frame and soft shadow. A two-line caption goes underneath, ready for a feed.',
  },
  {
    title: 'Caption from EXIF',
    desc: 'Two text lines under the photo. Drop in variables like {camera}, {lens}, {aperture}, {shutter}, {iso} and BorderM8 fills them from each photo’s EXIF.',
  },
  {
    title: 'Batch in one tap',
    desc: 'Pick a whole batch, set per-photo text or a shared default, then export them all at once to your gallery as square q95 JPEGs.',
  },
  {
    title: 'On-device & private',
    desc: 'Uses the Android Photo Picker — no storage permission, no account, no network. Nothing leaves your phone.',
  },
];

const steps = [
  {
    title: 'Install the app',
    body: 'Download the APK on an Android 10+ (API 29) phone and open it to sideload. You may need to allow installs from your browser or file manager the first time. On first launch you land on the Editor tab.',
    images: [
      { src: '/screenshots/borderm8-launch.png', alt: 'BorderM8 Editor tab on first launch with Pick photos button', w: 1080, h: 2340 },
    ],
    cta: { href: '#downloads', label: 'Jump to download' },
  },
  {
    title: 'Pick your photos',
    body: 'Tap Pick photos. The Android Photo Picker lets you multi-select — no storage permission needed. Choose your shots and tap Done; the button then shows how many you picked.',
    images: [
      { src: '/screenshots/borderm8-picker.png', alt: 'Android Photo Picker with three photos selected', w: 1080, h: 2340 },
    ],
  },
  {
    title: 'Set the caption text (optional)',
    body: 'Captions are entirely up to you — skip this and you get a clean white border with no text. If you do want a caption, fill Title (line 1) and Description (line 2) for each photo, or leave a field blank to fall back to the default from Settings. The live Preview shows the framed square result, a thumbnail strip lets you swap between photos, and the big button saves the whole batch.',
    images: [
      { src: '/screenshots/borderm8-editor.png', alt: 'BorderM8 Editor with a title typed, live square preview, and photo strip', w: 1080, h: 2340 },
    ],
  },
  {
    title: 'Use EXIF variables (optional)',
    body: 'Type variables like {camera}, {lens}, {aperture}, {shutter}, {iso}, {focal}, {date} in any text field — each is replaced with that photo’s EXIF value. Tap the variables link to open the full reference with examples.',
    images: [
      { src: '/screenshots/borderm8-variables.png', alt: 'BorderM8 Variables reference listing EXIF tokens', w: 1080, h: 2340 },
    ],
  },
  {
    title: 'Set defaults & fonts (optional)',
    body: 'Open the Settings tab (⚙). Default Texts sets the line 1 / line 2 used when a photo’s field is blank — here {camera} and {lens}, with a live preview. The Fonts tab picks the typeface for each line, applied to every export.',
    images: [
      { src: '/screenshots/borderm8-defaults.png', alt: 'BorderM8 Settings Default Texts with camera and lens variables and a live preview', w: 1080, h: 2340 },
      { src: '/screenshots/borderm8-fonts.png', alt: 'BorderM8 Settings Fonts tab with per-line typeface pickers', w: 1080, h: 2340 },
    ],
  },
  {
    title: 'Add borders & save',
    body: 'Back on the Editor tab, tap Add borders & save. The whole batch is rendered to 2160×2160 squares and written to Pictures/BorderM8 in your gallery — a counter shows progress, then a Saved confirmation.',
    images: [],
  },
];

const downloads = [
  {
    platform: 'Android',
    name: 'BorderM8 APK',
    desc: 'Install on Android 10+ (API 29) phones. Sideload via the APK.',
    href: '/downloads/borderm8.apk',
    filename: 'borderm8.apk',
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m-11.046 0a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m11.42-6.122l2.076-3.595a.42.42 0 00-.726-.42l-2.1 3.638A12.94 12.94 0 0012 7.5c-1.844 0-3.587.387-5.147 1.082L4.753 4.944a.42.42 0 00-.726.42l2.076 3.595C2.474 11.054 0 14.27 0 17.998h24c0-3.728-2.473-6.944-6.103-8.78" />
      </svg>
    ),
  },
];

export default function BorderM8Page() {
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
            Android
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">BorderM8</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Batch white borders for your photos. Pad each shot onto a clean white square, add a caption with your camera details, and export square JPEGs — all on-device, no permissions, no cloud.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#downloads"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
            >
              Get BorderM8
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

      {/* The result */}
      <section className="relative pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                A clean <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">square frame</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The output is a 2160×2160 white square. Your photo is scaled to fit (never cropped), bottom-aligned with white margins, and wrapped in a thin black hairline frame with a soft drop shadow. The two caption lines sit centered just below.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Real export from the app — Title in Averia Serif Libre, the lens line pulled straight from EXIF.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-2xl shadow-black/50 p-2 max-w-sm w-full">
                <Image
                  src="/screenshots/borderm8-result.jpg"
                  alt="Example BorderM8 export — red Ixora flowers on a white square with caption"
                  width={2160}
                  height={2160}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="relative pb-20 md:pb-24 scroll-mt-24">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Download <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">BorderM8</span>
            </h2>
            <p className="text-gray-400 text-sm">Sideload the APK on an Android 10+ phone.</p>
          </div>
          <div className="grid grid-cols-1 max-w-md mx-auto gap-6">
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
              How to <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">use it</span>
            </h2>
            <p className="text-gray-400 text-sm">From install to a saved batch in six steps. Screenshots from the real app.</p>
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

      {/* Footer */}
      <footer className="relative pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link href="/products/borderm8/privacy" className="text-violet-300 hover:text-violet-200 text-sm">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
