// Single source of truth for Job Hunter's version + release notes.
// Used by the product page (latest release + version badge) and the dedicated
// changelog page (full history). Newest release first.

export const changelog = [
  {
    version: 'v0.1.7',
    date: '2026-06-30',
    changes: [
      'Native macOS app: the one-line installer now delivers the JobHunter.app to your Applications folder instead of a command-line binary.',
      'Task list rows now show each task’s ID, so a running or finished task is easy to reference.',
    ],
  },
  {
    version: 'v0.1.5',
    date: '2026-06-21',
    changes: [
      'Debug mode: an opt-in log of AI requests/responses and web fetches, with an in-app viewer to troubleshoot failed tasks.',
      'Fixed tool fallback — picking a specific tool after a failure now actually runs that tool instead of the next one in line.',
      'Per-task token usage tracking, plus support for the Antigravity CLI.',
      'Model selection across every tool, with a cleaner grouped settings UI.',
      'Longer, more narrative job summaries.',
    ],
  },
  {
    version: 'v0.1.4',
    date: '2026-06-19',
    changes: [
      'Run the web app directly — simpler one-command start.',
      'Floating WhatsApp support button for quick help.',
    ],
  },
  {
    version: 'v0.1.3',
    date: '2026-06-15',
    changes: [
      'Cloud API-key providers: Anthropic, Gemini, and OpenAI — each key tested with a live call before it is saved.',
      'Chrome extension extracts the real job text client-side; added a capture link to the Jobs view.',
      'In-house fetch and extraction; ingestion now focuses on PDF and text files.',
      'Embedded local model works for crawl-based profile builds.',
    ],
  },
  {
    version: 'v0.1.2',
    date: '2026-06-15',
    changes: [
      'More reliable embedded-model setup: retry the llama.cpp release API on transient errors.',
    ],
  },
  {
    version: 'v0.1.1',
    date: '2026-06-14',
    changes: [
      'First-run onboarding wizard to get set up fast.',
      'Profile auto-rebuilds as you add sources.',
      'View and remove your license from Settings.',
      'Predictive crawling, assisted bot-wall solving, and a crawl debugger.',
    ],
  },
];

// The current release — newest entry. Drives the version badge and install copy.
export const latestVersion = changelog[0].version;
