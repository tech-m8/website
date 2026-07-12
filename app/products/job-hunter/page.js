import Link from 'next/link';
import CopyCommand from '@/components/CopyCommand';
import JsonLd from '@/components/JsonLd';
import { changelog, latestVersion } from '@/lib/changelog';

export const metadata = {
  title: 'Job Hunter — AI Job-Hunting Agent | TechM8',
  description: 'Job Hunter is a local-first AI job-hunting agent. It researches a job post and company, scores your honest fit, and writes a tailored cover letter, email, or CV in your own voice — every claim fact-checked. Run it on your own AI CLIs (Claude, Gemini, Codex) or your own cloud API keys (Anthropic, Gemini, OpenAI). All data stays on your machine.',
  alternates: { canonical: '/products/job-hunter' },
  openGraph: {
    title: 'Job Hunter — AI Job-Hunting Agent | TechM8',
    description: 'Local-first AI job-hunting agent: scores your honest fit and writes a tailored cover letter, email, or CV in your voice — every claim fact-checked. Runs on your own AI CLIs or API keys.',
    url: 'https://tech-m8.solutions/products/job-hunter',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Job Hunter',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'macOS, Linux, Windows',
  url: 'https://tech-m8.solutions/products/job-hunter',
  description:
    'Local-first AI job-hunting agent that scores your honest fit and writes a tailored cover letter, email, or CV in your voice — every claim fact-checked. Runs on your own AI CLIs or cloud API keys.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'TechM8' },
};

const features = [
  {
    title: 'Your CLIs or your API keys',
    desc: 'Route each task to your locally-installed Claude, Gemini, or Codex CLI — signed in with your own accounts, nothing to provision — or add a cloud API key for Anthropic, Gemini, or OpenAI. Every key is tested with a live call before it’s saved and stored only on your machine. Mix and match per task; a bundled local model is the last-resort fallback.',
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
    title: 'One-click job capture',
    desc: 'A companion Chrome extension grabs a posting from any job board and sends it straight to the app — pulling the real job text client-side so only what matters reaches the agent. Or just paste a URL.',
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
    desc: 'A single Go binary boots a web app at 127.0.0.1:7777. Your documents, drafts, and API keys all live in ~/.job-hunter on your machine — no cloud account, no telemetry.',
  },
];

const installCmdUnix = `curl -fsSL https://tech-m8.solutions/downloads/job-hunter/install.sh | sh`;
const installCmdWin = `irm https://tech-m8.solutions/downloads/job-hunter/install.ps1 | iex`;

// Beta tester license key — valid through August 30, 2026.
const betaLicenseKey = `jh.eyJuYW1lIjoiQmV0YSBUZXN0ZXIiLCJleHBpcmVzX2F0IjoiMjAyNi0wOC0zMFQwODo1MDozOC44ODg3NTFaIn0.9raqLqOEf5Cqjkz02GgcMWU0EJPiqwtO0u1BUt_p-rzfGFpLNHdrGq-wXutdckifq7NHMK1VizTYTs2Z2_TUDQ`;

export default function JobHunterPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      <JsonLd data={softwareSchema} />
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
          <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              macOS · Linux · Windows · Local-first
            </div>
            <Link
              href="/products/job-hunter/changelog"
              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-medium px-4 py-2 rounded-full transition-all"
            >
              {latestVersion}
              <span className="text-gray-500">· What&rsquo;s new</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Job Hunter</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            An AI job-hunting agent that runs on your own machine. It researches a job post and company, scores your honest fit, and writes a tailored cover letter, email, or CV in your voice — every claim fact-checked. Run it on your own AI CLIs or bring your own cloud API key — your choice.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#downloads"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
            >
              Get Job Hunter
            </a>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="relative overflow-hidden pb-20 md:pb-24 scroll-mt-24">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Job Hunter</span>
            </h2>
            <p className="text-gray-400 text-sm">One command installs Job Hunter. Then activate it with your license key.</p>
          </div>

          {/* Primary install — one-liners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-3">macOS &amp; Linux</div>
              <CopyCommand text={installCmdUnix} />
              <p className="text-gray-500 text-xs mt-3">Detects your OS and CPU and verifies the checksum. macOS installs the native app to your Applications folder; Linux installs the CLI to your PATH — the macOS quarantine flag is cleared automatically.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-3">Windows (PowerShell)</div>
              <CopyCommand text={installCmdWin} />
              <p className="text-gray-500 text-xs mt-3">Installs the desktop app under your user profile and adds Start Menu &amp; Desktop shortcuts. Windows SmartScreen may warn on the unsigned app — choose &ldquo;More info&rdquo; &rarr; &ldquo;Run anyway&rdquo;.</p>
            </div>
          </div>

          {/* Beta tester key */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-left mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-emerald-200 font-bold text-base">Free beta tester key</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-200">Expires August 30, 2026</span>
                </div>
                <p className="text-emerald-100/90 text-sm leading-relaxed mb-3">
                  Try every feature free during the beta. Paste this key into the app when prompted for a license.
                </p>
                <CopyCommand text={betaLicenseKey} border="border-emerald-500/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest release */}
      <section id="whats-new" className="relative pb-20 md:pb-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl md:text-2xl font-bold text-white">What&rsquo;s new</h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-200">
                  {changelog[0].version}
                </span>
                <span className="text-xs text-gray-500">{changelog[0].date}</span>
              </div>
              <Link
                href="/products/job-hunter/changelog"
                className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 text-sm font-medium"
              >
                Full changelog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <ul className="space-y-2.5">
              {changelog[0].changes.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section id="quickstart" className="relative pb-20 md:pb-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Quick <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">start</span>
            </h2>
            <p className="text-gray-400 text-sm">Up and running in five steps — everything else lives in the local web app.</p>
          </div>
          <ol className="space-y-3">
            {[
              { t: 'Install', d: <>Run the one-liner above for your OS to drop the <code className="px-1.5 py-0.5 rounded bg-white/10 text-violet-200">job-hunter</code> binary on your PATH.</> },
              { t: 'Launch the app', d: <>Run <code className="px-1.5 py-0.5 rounded bg-white/10 text-violet-200">job-hunter</code> and open <code className="px-1.5 py-0.5 rounded bg-white/10 text-violet-200">http://127.0.0.1:7777</code>.</> },
              { t: 'Activate', d: <>Paste the free beta key when prompted to unlock every feature.</> },
              { t: 'Pick your AI', d: <>In Settings, sign in to a local CLI (Claude, Gemini, Codex) or add a cloud API key — it&rsquo;s tested with a live call before saving.</> },
              { t: 'Add your profile, then a job', d: <>Drop in your CV and writing samples, capture a posting with the Chrome extension or a URL, and generate a tailored draft in your voice.</> },
            ].map((s, i) => (
              <li key={s.t} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-violet-500/25">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white text-sm mb-0.5">{s.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Support box */}
          <div id="support" className="mt-10 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6 md:p-8 text-center scroll-mt-24">
            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-5">
              Are you having issues installing or getting it up? Did you find a bug? Please report to us.
            </p>
            <a
              href="https://wa.me/8801410960803"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact support on WhatsApp"
              className="inline-flex items-center gap-2.5 bg-violet-500 hover:bg-violet-400 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-violet-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
              </svg>
              WhatsApp +8801410960803
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

    </div>
  );
}
