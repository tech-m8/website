import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Job Hunter — AI Job-Hunting Agent | TechM8',
  description: 'Job Hunter is a local-first AI job-hunting agent. It researches a job post and company, scores your honest fit, and writes a tailored cover letter, email, or CV in your own voice — every claim fact-checked. Runs on your own AI CLIs (Claude, Gemini, Codex) with no API keys. All data stays on your machine.',
};

const features = [
  {
    title: 'Your own AI CLIs — no API keys',
    desc: 'Routes each task to your locally-installed Claude, Gemini, or Codex CLI, signed in with your own accounts. Nothing to provision, no keys to leak. If your primary tool fails it pauses and asks before switching.',
  },
  {
    title: 'Honest fit score + gap coach',
    desc: 'Parses a posting, scores your real fit, and lays out which must-haves you meet and which you miss — then coaches the gaps instead of inflating the match.',
  },
  {
    title: 'Writes in your voice',
    desc: 'Ingests your portfolio to build a voice fingerprint, then drafts a tailored cover letter, email, or CV that sounds like you — with a truthfulness guard that fact-checks every claim against your dossier.',
  },
  {
    title: 'Company research + redaction',
    desc: 'Researches the company on the web to sharpen your angle, with a PII scrub and egress audit so nothing sensitive leaves with the request.',
  },
  {
    title: 'Interview prep',
    desc: 'Generate likely interview questions for the specific role and company, with strong answers grounded only in your real experience — STAR where it fits.',
  },
  {
    title: 'Local-first & private',
    desc: 'A single Go binary boots a web app at 127.0.0.1:7777. All data lives in ~/.job-hunter on your machine — no cloud, no account, no telemetry.',
  },
];

const steps = [
  {
    title: 'Install and run',
    body: 'Download the binary, run ./job-hunter serve, and open http://127.0.0.1:7777 in your browser. Everything happens in the local web app. On first run, job-hunter setup checks which AI CLIs it detected and where your data lives.',
    images: [],
    cta: { href: '#downloads', label: 'Jump to download' },
  },
  {
    title: 'Build your profile and voice',
    body: 'Drop in your CV, portfolio docs, and writing samples. Job Hunter builds a candidate dossier and a voice fingerprint, then runs an authenticity check so generated drafts sound like you — not like a template.',
    images: [
      { src: '/screenshots/job-hunter-profile.png', alt: 'Job Hunter Profile & Voice Studio with the candidate dossier and voice fingerprint', w: 1600, h: 1000 },
    ],
  },
  {
    title: 'Add a job → see your honest match',
    body: 'Paste a job posting. Job Hunter parses it, scores your real fit, and shows the must-haves you meet and the ones you miss — with a gap coach that tells you how to close them rather than papering over them.',
    images: [
      { src: '/screenshots/job-hunter-match.png', alt: 'Job Hunter Match Explainer showing fit score and must-haves met versus missed', w: 1600, h: 1000 },
    ],
  },
  {
    title: 'Generate in your voice',
    body: 'Produce a tailored cover letter, email, or CV in your own writing voice. The truthfulness guard fact-checks every claim against your dossier, and you can spin multiple A/B angles before exporting a versioned draft to PDF.',
    images: [
      { src: '/screenshots/job-hunter-generate.png', alt: 'Job Hunter generation view with a tailored cover letter and truthfulness check', w: 1600, h: 1000 },
    ],
  },
];

const JH_VERSION = '0.1.0';
const DL_BASE = '/downloads/job-hunter';

const installCmdUnix = `curl -fsSL https://tech-m8.solutions/downloads/job-hunter/install.sh | sh`;
const installCmdWin = `irm https://tech-m8.solutions/downloads/job-hunter/install.ps1 | iex`;

// Direct archive links, for people who would rather not pipe a script to a shell.
const directDownloads = [
  { label: 'macOS · Apple Silicon', file: `job-hunter_${JH_VERSION}_darwin_arm64.tar.gz` },
  { label: 'macOS · Intel', file: `job-hunter_${JH_VERSION}_darwin_amd64.tar.gz` },
  { label: 'Linux · arm64', file: `job-hunter_${JH_VERSION}_linux_arm64.tar.gz` },
  { label: 'Linux · amd64', file: `job-hunter_${JH_VERSION}_linux_amd64.tar.gz` },
  { label: 'Windows · amd64', file: `job-hunter_${JH_VERSION}_windows_amd64.zip` },
];

export default function JobHunterPage() {
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
            macOS · Linux · Windows · Local-first
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Job Hunter</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            An AI job-hunting agent that runs on your own machine. It researches a job post and company, scores your honest fit, and writes a tailored cover letter, email, or CV in your voice — every claim fact-checked. Runs on your own AI CLIs, no API keys.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#downloads"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
            >
              Get Job Hunter
            </a>
            <a
              href="#tutorial"
              className="inline-block bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 px-8 py-3 rounded-lg text-sm font-semibold transition-all"
            >
              How it works
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Get <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Job Hunter</span>
            </h2>
            <p className="text-gray-400 text-sm">One command installs the binary. Then activate it with your license key.</p>
          </div>

          {/* Primary install — one-liners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-3">macOS &amp; Linux</div>
              <pre className="rounded-lg bg-black/50 border border-white/10 p-4 overflow-x-auto text-xs text-violet-100"><code>{installCmdUnix}</code></pre>
              <p className="text-gray-500 text-xs mt-3">Detects your CPU, verifies the checksum, installs to your PATH, and clears the macOS quarantine flag automatically.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-3">Windows (PowerShell)</div>
              <pre className="rounded-lg bg-black/50 border border-white/10 p-4 overflow-x-auto text-xs text-violet-100"><code>{installCmdWin}</code></pre>
              <p className="text-gray-500 text-xs mt-3">Installs under your user profile and adds it to PATH. Windows SmartScreen may warn on the unsigned binary — choose &ldquo;More info&rdquo; &rarr; &ldquo;Run anyway&rdquo;.</p>
            </div>
          </div>

          {/* Direct downloads */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
            <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-4">Or download directly · v{JH_VERSION}</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {directDownloads.map((d) => (
                <li key={d.file}>
                  <a
                    href={`${DL_BASE}/${d.file}`}
                    download
                    className="flex items-center gap-2 text-gray-300 hover:text-white text-sm py-1.5 transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs mt-4">
              Verify against <a href={`${DL_BASE}/job-hunter_${JH_VERSION}_checksums.txt`} className="underline hover:text-gray-300">checksums.txt</a>. On macOS, unpack then clear quarantine: <code className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200">xattr -d com.apple.quarantine job-hunter</code>.
            </p>
          </div>

          {/* License note */}
          <div role="alert" className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-amber-200 font-bold text-base mb-2">After installing</h3>
                <p className="text-amber-100/90 text-sm leading-relaxed mb-2">
                  Start the app, then open <code className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-100">http://127.0.0.1:7777</code>:
                </p>
                <pre className="mb-3 rounded-lg bg-black/40 border border-amber-500/30 p-3 overflow-x-auto text-xs text-amber-100"><code>job-hunter setup     # check detected AI CLIs + data dir
job-hunter serve     # open the web app</code></pre>
                <p className="text-amber-100/70 text-xs leading-relaxed">
                  Features are gated behind a license key. Don&apos;t have one yet? <a href="mailto:masnun@gmail.com?subject=Job%20Hunter%20license" className="underline hover:text-amber-100">Request access</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial */}
      <section id="tutorial" className="relative pb-20 md:pb-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              How it <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">works</span>
            </h2>
            <p className="text-gray-400 text-sm">From install to a tailored application in four steps.</p>
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
                              isPhone ? 'max-w-[200px]' : 'max-w-[520px] flex-1'
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
