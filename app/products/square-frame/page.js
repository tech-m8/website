import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Square Frame — No-Crop Photo Borders | TechM8',
  description: 'Square Frame pads your photos onto a clean white square — never cropped — with a thin black frame and soft shadow, then saves or shares square JPEGs. Batch a whole shoot, or frame your latest shots in one tap from the home-screen widget. On-device, no account, no cloud.',
};

const features = [
  {
    title: 'No crop — your whole photo',
    desc: 'Every shot is scaled to fit, never cropped, and sits on a clean white square with a thin black hairline frame and a soft drop shadow. Portrait or landscape, the whole frame stays.',
  },
  {
    title: 'Quick Frame widget',
    desc: 'A home-screen widget frames a whole shoot in one tap. “Recent” squares your latest photos automatically; “Pick” opens the photo picker — no need to open the app first.',
  },
  {
    title: 'Save or share',
    desc: 'Frame a batch and save full-resolution square JPEGs to your gallery, or send the framed copies straight to a share sheet — sharing frames without saving anything to your gallery.',
  },
  {
    title: 'On-device & private',
    desc: 'No account, no network, nothing uploaded. Picking photos uses the Android Photo Picker (no permission); the widget’s “Recent” reads only your most recent photos to frame them.',
  },
];

const steps = [
  {
    title: 'Install the app',
    body: 'Download the APK on an Android 10+ (API 29) phone and open it to sideload. You may need to allow installs from your browser or file manager the first time. On first launch you land on the Editor tab.',
    images: [],
    cta: { href: '#downloads', label: 'Jump to download' },
  },
  {
    title: 'Pick photos or grab your recent shots',
    body: 'Tap Add Photos to multi-select with the Android Photo Picker — no storage permission needed — or tap Recent Photos to pull in your latest shots automatically. Either way the whole batch loads into the editor.',
    images: [
      { src: '/screenshots/square-frame-picker.png', alt: 'Android Photo Picker with several photos selected', w: 1080, h: 2340 },
    ],
  },
  {
    title: 'Preview, then Save or Share',
    body: 'The live Preview shows the squared white-frame result, and a thumbnail strip lets you swap between photos in the batch. Tap Save to write full-resolution squares to Pictures/SquareFrame, or Share to send the framed copies straight to a share sheet — Share frames without saving to your gallery.',
    images: [
      { src: '/screenshots/square-frame-editor.png', alt: 'Square Frame editor with the squared preview, batch thumbnail strip, and Save · Share · Remove All buttons', w: 1080, h: 2340 },
    ],
  },
  {
    title: 'One tap from your home screen',
    body: 'Add the Quick Frame widget to your home screen. “Recent” frames your latest shots in a single tap and saves the squares to your gallery; “Pick” jumps straight to the photo picker. No need to open the app.',
    images: [
      { src: '/screenshots/square-frame-widget.png', alt: 'Quick Frame home-screen widget with Recent and Pick buttons', w: 1080, h: 2340 },
    ],
  },
];

const downloads = [
  {
    platform: 'Android',
    name: 'Square Frame APK',
    desc: 'Install on Android 10+ (API 29) phones. Sideload via the APK.',
    href: '/downloads/square-frame.apk',
    filename: 'square-frame.apk',
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m-11.046 0a1.04 1.04 0 110-2.08 1.04 1.04 0 010 2.08m11.42-6.122l2.076-3.595a.42.42 0 00-.726-.42l-2.1 3.638A12.94 12.94 0 0012 7.5c-1.844 0-3.587.387-5.147 1.082L4.753 4.944a.42.42 0 00-.726.42l2.076 3.595C2.474 11.054 0 14.27 0 17.998h24c0-3.728-2.473-6.944-6.103-8.78" />
      </svg>
    ),
  },
];

export default function SquareFramePage() {
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
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Square Frame</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            No-crop white borders for your photos. Pad each shot onto a clean white square, then save or share square JPEGs — batch a whole shoot, or frame your latest shots in one tap from the home-screen widget. All on-device, no account, no cloud.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#downloads"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
            >
              Get Square Frame
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
                The output is a 2160×2160 white square. Your photo is scaled to fit — never cropped — centered with even white margins, and wrapped in a thin black hairline frame with a soft drop shadow. Exported as a full-resolution JPEG, ready for a feed.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Real export from the app — a portrait shot squared with no crop.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-2xl shadow-black/50 p-2 max-w-sm w-full">
                <Image
                  src="/screenshots/square-frame-result.png"
                  alt="Example Square Frame export — a cloud photo padded onto a white square with a thin black frame"
                  width={967}
                  height={967}
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
              Download <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Square Frame</span>
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
            <p className="text-gray-400 text-sm">From install to a saved batch in four steps. Screenshots from the real app.</p>
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
          <Link href="/products/square-frame/privacy" className="text-violet-300 hover:text-violet-200 text-sm">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
