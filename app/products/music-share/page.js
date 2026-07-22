import Link from 'next/link';
import CopyCommand from '@/components/CopyCommand';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'MusicShare — Your music as your Slack status | TechM8',
  description:
    'MusicShare reads your currently-playing track on Android and updates your Slack status or posts to a channel on every song change. Setup walkthrough and download.',
  alternates: { canonical: '/products/music-share' },
  openGraph: {
    title: 'MusicShare — Your music as your Slack status | TechM8',
    description:
      'Turn your now-playing track into your Slack status, or post it to a channel — automatically, on every song change. Tokens stay encrypted on your phone.',
    url: 'https://tech-m8.solutions/products/music-share',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MusicShare',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Android',
  url: 'https://tech-m8.solutions/products/music-share',
  description:
    'Reads your currently-playing track on Android and updates your Slack status or posts to a channel on every song change. Tokens are stored encrypted on-device; no backend.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'TechM8' },
};

const features = [
  {
    title: 'Status that follows your music',
    desc: 'Every track change sets your Slack status — song, artist, and an emoji you pick. Skips are debounced so rapid-fire changes don’t spam.',
  },
  {
    title: 'Or post to a channel',
    desc: 'Prefer a feed? MusicShare can post “Now playing” messages to any channel your bot is invited to. Enable either action, or both.',
  },
  {
    title: 'Works with any player',
    desc: 'Spotify, YouTube Music, Apple Music, podcasts — anything that publishes an Android media session. No per-app integration needed.',
  },
  {
    title: 'Your tokens stay yours',
    desc: 'Slack tokens are stored encrypted on-device and sent straight to Slack. No middle-man server, no account, no telemetry.',
  },
  {
    title: 'Verify before you trust',
    desc: 'Paste a token and MusicShare calls Slack to confirm it works — showing the user and workspace — before saving anything.',
  },
  {
    title: 'One-tap pause',
    desc: 'A master switch at the top pauses all sharing instantly. Track detection keeps running; nothing reaches Slack until you flip it back on.',
  },
];

const scopes = [
  { name: 'users.profile:write', where: 'User Token Scopes', why: 'updates your status' },
  { name: 'chat:write', where: 'Bot Token Scopes', why: 'posts to a channel' },
  { name: 'channels:read', where: 'Bot Token Scopes', why: 'lists your channels in the picker' },
];

const steps = [
  {
    title: 'Open MusicShare & grant notification access',
    body: 'Open MusicShare on your Android phone and grant Notification access when prompted. That permission lets it read the active media session — the same info your lock screen shows — to know what’s playing.',
  },
  {
    title: 'Create a Slack app',
    body: 'Go to api.slack.com/apps → Create New App → From scratch. Name it MusicShare and pick your workspace. It’s your own private app — nobody else sees it and it isn’t submitted to any directory.',
  },
  {
    title: 'Add the permissions',
    body: 'In your app, open OAuth & Permissions → Scopes. Add the scopes below to the lists shown. Placement matters: users.profile:write must go under User Token Scopes, because setting your status acts as you, not a bot. Only updating status? You just need that one. channels:read is optional — add it only if you want to pick your channel from a list instead of pasting an ID.',
    scopes: true,
  },
  {
    title: 'Install to your workspace & copy the token(s)',
    body: 'On the same page click Install to Workspace → Allow. Slack then shows your tokens: the User OAuth Token (xoxp-…) drives status updates, the Bot User OAuth Token (xoxb-…) posts to channels. Copy whichever you need.',
  },
  {
    title: 'Paste & verify in the app',
    body: 'In MusicShare, paste your token(s) and tap Verify & save. The app calls Slack to confirm each token and shows the connected user and workspace. Only tokens that pass are stored — encrypted — on your device.',
  },
  {
    title: 'For channel posts: invite the bot & pick the channel',
    body: 'Skip this if you only want status updates. Otherwise, in your target Slack channel type /invite @MusicShare. Then in MusicShare, if you added the channels:read scope, tap Refresh and pick the channel from the list — it shows only channels the bot can post to. No scope? Paste the channel ID instead (click the channel name → it’s at the bottom, like C0123ABCD).',
  },
  {
    title: 'Press play',
    body: 'Turn Sharing ON, choose Update status and/or Post to channel, set your emoji. Start any track — after a ~5-second debounce, your Slack updates. The app’s Now Playing and Activity cards show what was sent and when.',
  },
];

// Optional: a YouTube Data API key so channel posts link to the exact track.
const youtubeSteps = [
  {
    title: 'Create a Google Cloud project',
    body: 'Open the Google Cloud Console and create a project (or pick an existing one). It’s free and takes a moment.',
    link: { href: 'https://console.cloud.google.com/projectcreate', label: 'Google Cloud Console' },
  },
  {
    title: 'Enable the YouTube Data API v3',
    body: 'In the console, go to APIs & Services → Library, search for “YouTube Data API v3”, and click Enable.',
    link: {
      href: 'https://console.cloud.google.com/apis/library/youtube.googleapis.com',
      label: 'Enable the API',
    },
  },
  {
    title: 'Create an API key',
    body: 'Go to APIs & Services → Credentials → Create credentials → API key. Copy the key that appears.',
    link: {
      href: 'https://console.cloud.google.com/apis/credentials',
      label: 'Credentials page',
    },
  },
  {
    title: 'Recommended: restrict the key',
    body: 'On the key, set API restrictions to “YouTube Data API v3”, and Application restrictions to Android apps (package com.masnun.musicshare). This makes a leaked key useless elsewhere.',
  },
  {
    title: 'Paste it into MusicShare',
    body: 'In the app, go to Settings → On track change → “YouTube API key”. Paste the key. Channel posts now link the song title straight to the top YouTube Music result; results are cached per song to save quota (~100 lookups/day).',
  },
];

export default function MusicSharePage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      <JsonLd data={softwareSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-1 text-violet-300 hover:text-violet-200 text-sm mb-6 w-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All products
          </Link>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              Android + Slack
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              MusicShare
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Turn whatever you&rsquo;re listening to into your Slack status &mdash; or post it to a
            channel &mdash; automatically, on every song change. Tokens stay encrypted on your
            phone. No backend, no account.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#tutorial"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-violet-500/25"
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
            What it{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              does
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial */}
      <section id="tutorial" className="relative pb-20 md:pb-28 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Connect it to{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Slack
              </span>
            </h2>
            <p className="text-gray-400 text-sm">
              A one-time setup, about five minutes. No coding, no backend.
            </p>
          </div>
          <ol className="space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-violet-500/25">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
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
                  {step.scopes && (
                    <div className="mt-5 space-y-3">
                      {scopes.map((s) => (
                        <div
                          key={s.name}
                          className="rounded-xl border border-violet-500/30 bg-violet-500/5 p-4"
                        >
                          <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
                            <code className="text-violet-100 text-sm font-semibold">{s.name}</code>
                            <span className="text-xs text-gray-500">
                              add under <span className="text-violet-300">{s.where}</span>
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs mb-3">{s.why}</p>
                          <CopyCommand text={s.name} border="border-violet-500/30" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-violet-500/40 bg-violet-500/10 p-6 text-center max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-lg mb-2">That&rsquo;s it &mdash; press play</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              On each track change, MusicShare waits ~5 seconds (to ride out skips), then updates
              your Slack status and/or posts to your channel. Nothing happening? Check that
              Notification access is on, the right token is saved, and &mdash; for channel posts
              &mdash; the bot was invited to that channel.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Data API (optional) */}
      <section id="youtube" className="relative pb-20 md:pb-28 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
              Optional
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Link songs to{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                YouTube Music
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              By default the song title links to a YouTube Music search. Add a free YouTube Data
              API key and it links straight to the top result instead.
            </p>
          </div>
          <ol className="space-y-10">
            {youtubeSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-violet-500/25">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-violet-300 hover:text-violet-200 text-sm font-medium"
                    >
                      {step.link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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
