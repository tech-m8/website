import Link from 'next/link';
import { members } from '@/lib/team';

export const metadata = {
  title: 'Our Team | TechM8',
  description: 'Meet the talented team behind TechM8.',
};

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            The People Behind TechM8
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Our team of passionate designers, developers, and strategists work together to deliver exceptional digital solutions that help businesses grow and succeed.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Founder - full width card */}
          <div className="mb-6">
            <Link href={`/team/${members[0].slug}`} className="group block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                    {members[0].photo ? (
                      <img src={members[0].photo} alt={members[0].name} className="w-full h-full rounded-full object-cover" />
                    ) : members[0].initials}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full mb-2">
                      {members[0].role}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{members[0].name}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{members[0].bio}</p>
                    <div className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium group-hover:gap-2 transition-all">
                      View Profile
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of team - 2 col then 2 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {members.slice(1).map((member) => (
              <Link key={member.slug} href={`/team/${member.slug}`} className="group">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-105 transition-transform">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
                      ) : member.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full mb-1">
                        {member.role}
                      </div>
                      <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {member.bio.split('\n')[0]}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-2.5 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-blue-400 text-xs font-medium group-hover:gap-2 transition-all">
                    View Profile
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
