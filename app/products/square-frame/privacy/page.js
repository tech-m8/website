import Link from 'next/link';

export const metadata = {
  title: 'Square Frame Privacy Policy | TechM8',
  description: 'Square Frame collects no data. All photo processing happens on-device, with no account, no network, and no tracking. Read the full privacy policy.',
};

const sections = [
  {
    title: 'Data we collect',
    body: (
      <p>
        <strong className="text-white">None.</strong> Square Frame does not collect, store on
        any server, or transmit your personal data. There is no account system, no login,
        no analytics, and no advertising.
      </p>
    ),
  },
  {
    title: 'How your photos are used',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>When you tap Add Photos or Pick, you choose which photos to open with the Android
          Photo Picker — the app only accesses the photos you explicitly select.</li>
        <li>When you tap Recent Photos (or the widget’s “Recent”), the app reads your most
          recent photos so it can frame them automatically — see Permissions below.</li>
        <li>The app reads each photo only to render the squared white frame. All image
          processing happens locally on your device; your photos are never uploaded anywhere.</li>
        <li>Tapping Save writes the framed copies to your gallery in the
          <code className="mx-1 px-1.5 py-0.5 rounded bg-white/10 text-violet-200 text-xs">Pictures/SquareFrame</code>
          folder. Tapping Share hands the framed copies to the Android share sheet so you can
          send them to an app of your choice — this does not save them to your gallery. The app
          keeps no separate copy.</li>
      </ul>
    ),
  },
  {
    title: 'Network access',
    body: (
      <p>
        Square Frame does not send your photos or any other information over the internet. The
        app works fully offline.
      </p>
    ),
  },
  {
    title: 'Google Play In-App Review',
    body: (
      <p>
        After you successfully export images, the app may show Google Play’s in-app review
        prompt. This is provided by Google Play services; the interaction is handled by
        Google, and any rating you submit goes to Google Play, not to us. Square Frame does not
        receive your review content or any identifying information from it. See Google’s{' '}
        <a href="https://policies.google.com/privacy" className="text-violet-300 hover:text-violet-200 underline">
          Privacy Policy
        </a>{' '}
        for how Google handles that interaction.
      </p>
    ),
  },
  {
    title: 'Permissions',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white">Add Photos / Pick</strong> grant photo access
          per-selection through the system Photo Picker, and saving uses the system media store —
          neither requires a storage permission.</li>
        <li><strong className="text-white">Recent Photos / the widget’s “Recent”</strong> use the
          <code className="mx-1 px-1.5 py-0.5 rounded bg-white/10 text-violet-200 text-xs">READ_MEDIA_IMAGES</code>
          permission so the app can read your most recent photos and frame them in one tap
          without a manual pick. The app reads those images only to render the frames — it does
          not browse, copy, or transmit your library. You can deny this permission and still use
          Add Photos / Pick.</li>
      </ul>
    ),
  },
  {
    title: 'Children’s privacy',
    body: (
      <p>
        Square Frame does not collect data from anyone, including children, and is suitable for
        general audiences.
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>
        If this policy changes, the updated version will be posted on this page with a new
        “Last updated” date.
      </p>
    ),
  },
  {
    title: 'Contact',
    body: (
      <p>
        Questions about this policy? Contact us at{' '}
        <a href="mailto:masnun@gmail.com" className="text-violet-300 hover:text-violet-200 underline">
          masnun@gmail.com
        </a>.
      </p>
    ),
  },
];

export default function SquareFramePrivacyPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link href="/products/square-frame" className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Square Frame
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: 6 June 2026</p>
          <p className="text-gray-300 leading-relaxed">
            Square Frame pads your photos onto a clean white square — never cropped — then saves
            or shares them. This policy explains what the app does and does not do with your
            information. In short: <strong className="text-white">everything happens on your
            device, and Square Frame collects nothing.</strong>
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
          <p className="text-gray-600 text-xs text-center pt-4">Square Frame by Tech M8.</p>
        </div>
      </section>
    </div>
  );
}
