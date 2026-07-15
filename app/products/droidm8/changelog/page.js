import Link from 'next/link';
import { droidm8Changelog } from '@/lib/droidm8-changelog';

export const metadata = {
  title: 'DroidM8 — Changelog | TechM8',
  description: 'Release notes and version history for DroidM8, the local-first bridge between Android and macOS.',
  alternates: { canonical: 'https://tech-m8.solutions/products/droidm8/changelog' },
};

export default function DroidM8ChangelogPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link href="/products/droidm8" className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 text-sm mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to DroidM8
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Changelog</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-12">Every release of DroidM8, newest first.</p>

          <ol className="relative border-l border-white/10 space-y-12">
            {droidm8Changelog.map((rel) => (
              <li key={rel.version} className="ml-6">
                <span className="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 ring-4 ring-slate-900" />
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <h2 className="text-xl font-bold text-white">{rel.version}</h2>
                  <span className="text-xs font-medium text-gray-400">{rel.date}</span>
                </div>
                <ul className="space-y-2">
                  {rel.changes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}