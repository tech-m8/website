'use client';

import { useState } from 'react';

// CopyCommand renders a terminal command in a <pre> with a clearly visible
// copy-to-clipboard button below it. `border` lets each page keep its accent.
export default function CopyCommand({ text, border = 'border-white/10' }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable (insecure context) — no-op
    }
  };

  return (
    <div>
      <pre className={`rounded-lg bg-black/50 border ${border} p-4 overflow-x-auto text-xs sm:text-sm text-violet-100`}>
        <code>{text}</code>
      </pre>
      <div className="flex justify-end mt-2">
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? 'Copied' : 'Copy command'}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            copied
              ? 'bg-green-500/15 border border-green-500/40 text-green-300'
              : 'bg-violet-500/90 hover:bg-violet-500 border border-violet-400/50 text-white shadow-sm shadow-violet-500/25'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
