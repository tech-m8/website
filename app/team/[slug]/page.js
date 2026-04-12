import Link from 'next/link';
import { members } from '@/lib/team';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const member = members.find((m) => m.slug === params.slug);
  if (!member) return {};
  return {
    title: `${member.name} | TechM8 Team`,
    description: member.bio.split('\n')[0],
  };
}

export default function MemberProfile({ params }) {
  const member = members.find((m) => m.slug === params.slug);
  if (!member) notFound();

  const paragraphs = member.bio.split('\n').filter(Boolean);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Back */}
        <Link href="/team" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-10 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Team
        </Link>

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-3xl md:text-4xl">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
                ) : member.initials}
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full">
                {member.role}
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{member.name}</h1>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {member.email}
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <h2 className="text-white font-semibold mb-4">About</h2>
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-white font-semibold mb-4">Skills &amp; Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span key={skill} className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm px-4 py-1.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other Members */}
        <div className="mt-12">
          <h2 className="text-white font-semibold mb-6">Other Team Members</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {members.filter((m) => m.slug !== member.slug).map((m) => (
              <Link key={m.slug} href={`/team/${m.slug}`} className="group">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 group-hover:scale-105 transition-transform">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} className="w-full h-full rounded-full object-cover" />
                    ) : m.initials}
                  </div>
                  <p className="text-white text-xs font-semibold truncate">{m.name}</p>
                  <p className="text-gray-500 text-xs truncate">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
