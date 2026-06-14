'use client';

import { useState } from 'react';

// CopyCommand renders a terminal command in a <pre> with a copy-to-clipboard
// button in the corner. `border` lets each page keep its own accent.
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
    <div className="relative">
      <pre className={`rounded-lg bg-black/50 border ${border} p-4 pr-12 overflow-x-auto text-xs sm:text-sm text-violet-100`}>
        <code>{text}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy command'}
        title={copied ? 'Copied' : 'Copy'}
        className="absolute top-2.5 right-2.5 inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
      >
        {copied ? (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
