export const metadata = {
  title: 'Our Team | TechM8',
  description: 'Meet the talented team behind TechM8.',
};

const members = [
  { name: 'Mr.y', role: 'Team Leader', initials: 'MY' },
  { name: 'Mr.xyz', role: 'Software Engineer', initials: 'MX' },
  { name: 'Ayesha', role: 'UI/UX Designer', initials: 'AY' },
  { name: 'Mr.abc', role: 'Backend Developer', initials: 'MA' },
  { name: 'Sonia', role: 'Software Engineer', initials: 'SO' },
  { name: 'Me.wyz', role: 'Assistant', initials: 'MW' },
];

function HexCard({ name, role, initials }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-32 sm:w-36 sm:h-40">
        {/* Shadow hex */}
        <div
          className="absolute inset-0 translate-y-2 bg-slate-300/60"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        {/* Main hex */}
        <div
          className="absolute inset-0 bg-indigo-50 flex items-center justify-center"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400 flex items-center justify-center text-white font-bold text-base sm:text-lg">
            {initials}
          </div>
        </div>
      </div>
      <p className="font-semibold text-gray-900 mt-3 text-sm">{name}</p>
      <p className="text-gray-500 text-xs">{role}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our <span className="text-blue-600">Members</span>
        </h1>

        {/* Mobile: 2-col grid | Desktop: pyramid layout */}
        <div className="md:hidden grid grid-cols-2 gap-8 justify-items-center">
          {members.map((m) => (
            <HexCard key={m.name} {...m} />
          ))}
        </div>

        {/* Desktop pyramid */}
        <div className="hidden md:block">
          {/* Row 1 — 1 member */}
          <div className="flex justify-center mb-8">
            <HexCard {...members[0]} />
          </div>

          {/* Row 2 — 3 members */}
          <div className="flex justify-center gap-10 mb-8">
            <HexCard {...members[1]} />
            <HexCard {...members[2]} />
            <HexCard {...members[3]} />
          </div>

          {/* Row 3 — 2 members */}
          <div className="flex justify-center gap-10">
            <HexCard {...members[4]} />
            <HexCard {...members[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
