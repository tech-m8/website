import Link from 'next/link';

export const metadata = {
  title: 'job-hunter Browser Extension Privacy Policy | TechM8',
  description: 'The job-hunter ingest browser extension sends page content only to a job-hunter server on your own machine. No accounts, no third-party servers, no tracking. Read the full privacy policy.',
};

const sections = [
  {
    title: 'Data we collect',
    body: (
      <p>
        <strong className="text-white">None.</strong> The job-hunter ingest extension does not
        collect, store on any server we control, or transmit your personal data to us or any
        third party. There is no account system, no login, no analytics, and no advertising.
      </p>
    ),
  },
  {
    title: 'What the extension does',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>When you click <strong className="text-white">Send current page</strong>, the
          extension reads the HTML of the tab you are actively viewing, strips out scripts,
          styles, and SVG markup, and sends the cleaned page content to a job-hunter server.</li>
        <li>That server runs on <strong className="text-white">your own machine</strong> — the
          default address is
          <code className="mx-1 px-1.5 py-0.5 rounded bg-white/10 text-violet-200 text-xs">http://127.0.0.1:7777</code>.
          The captured page is used by job-hunter to parse the posting into a structured job
          record on your machine.</li>
        <li>The extension is useless on its own. It is purely a bridge to the self-hosted
          job-hunter app you already run locally.</li>
      </ul>
    ),
  },
  {
    title: 'Network access',
    body: (
      <p>
        The extension sends captured page content only to the job-hunter server address you
        configure — by default, a server on your own computer (localhost). It does not contact
        TechM8 servers or any third-party service. If you change the address in the popup
        settings to point at a server you host elsewhere, the data goes only to that server you
        chose.
      </p>
    ),
  },
  {
    title: 'Data we store on your device',
    body: (
      <p>
        The only thing the extension stores is a single preference: the job-hunter server
        address, kept in
        <code className="mx-1 px-1.5 py-0.5 rounded bg-white/10 text-violet-200 text-xs">chrome.storage.sync</code>.
        This follows your signed-in Chrome profile and can be cleared at any time. No page
        content or browsing history is stored by the extension.
      </p>
    ),
  },
  {
    title: 'Permissions',
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white">activeTab</strong> — read the page you are actively
          viewing, only at the moment you click Send.</li>
        <li><strong className="text-white">scripting</strong> — inject a one-shot function that
          serializes the current page's DOM so the posting text can be captured.</li>
        <li><strong className="text-white">storage</strong> — save the single server-address
          preference described above.</li>
        <li><strong className="text-white">host access to 127.0.0.1 / localhost</strong> — send
          the captured page to the job-hunter server on your own machine. No remote hosts are
          contacted.</li>
      </ul>
    ),
  },
  {
    title: "Children's privacy",
    body: (
      <p>
        The extension does not collect data from anyone, including children, and is suitable for
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
        <a href="mailto:masnun@tech-m8.solutions" className="text-violet-300 hover:text-violet-200 underline">
          masnun@tech-m8.solutions
        </a>.
      </p>
    ),
  },
];

export default function JobHunterPrivacyPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link href="/products/job-hunter" className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            job-hunter
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Extension Privacy <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: 14 June 2026</p>
          <p className="text-gray-300 leading-relaxed">
            The job-hunter ingest browser extension sends the job posting you are viewing to a
            job-hunter server running on your own machine, so it can be parsed into a structured
            job record. This policy explains what the extension does and does not do with your
            information. In short: <strong className="text-white">page content goes only to a
            server on your own machine, and the extension collects nothing for us.</strong>
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
          <p className="text-gray-600 text-xs text-center pt-4">job-hunter by Tech M8.</p>
        </div>
      </section>
    </div>
  );
}
