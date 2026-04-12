export const metadata = {
  title: 'Our Solutions & Partnerships | TechM8',
  description: 'We create, secure, and modernise digital products. Reducing technical difficulties and maximising the value of your business.',
};

const partners = [
  {
    name: 'Gadget & Gear',
    desc: 'TechM8 partnered with Gadget & Gear to create modern digital solutions that improve customer experience and strengthen their online presence. From user-friendly interfaces to high-performing systems, we helped support their growth in the technology and electronics industry.',
    logo: '/logo/gadget-and-gear.png',
  },
  {
    name: 'Creative Institute',
    desc: 'For Creative Institute, we developed digital tools and creative solutions designed to support learning, communication, and brand visibility. Our partnership focused on delivering a smooth and engaging experience for students and visitors.',
    logo: '/logo/creative-institute.png',
  },
  {
    name: 'Pathao',
    desc: 'We worked with Pathao to provide reliable and scalable technology solutions that support fast-growing businesses. Our team focused on improving performance, usability, and efficiency to help deliver a better experience for users.',
    logo: '/logo/pathao.png',
  },
  {
    name: 'KFC',
    desc: 'TechM8 collaborated with KFC to create digital experiences that make it easier for customers to connect with the brand. From improving online accessibility to creating modern solutions, our goal was to help strengthen customer engagement.',
    logo: '/logo/kfc.png',
  },
  {
    name: '10 Minute School',
    desc: 'For 10 Minute School, we delivered technology solutions that support online education and improve the learning experience. Our work focused on creating a simple, accessible, and engaging platform for students.',
    logo: '/logo/10-minute-school.png',
  },
  {
    name: 'Meena Sweet',
    desc: 'We partnered with Meena Sweet to build a stronger digital presence and create better customer interactions. Through modern design and effective technology, we helped showcase their brand more engagingly.',
    logo: '/logo/meena-sweet.png',
  },
];

const whyPoints = [
  'Custom digital solutions tailored to every industry',
  'Experienced team of developers, designers, and strategists',
  'Scalable technology built for long-term growth',
  'Reliable support and transparent communication',
  'Strong focus on performance, security, and user experience',
];

export default function ProductsPage() {
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
            Solutions & Partnerships
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span> &amp; Partnerships
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We create, secure, and modernise digital products. Reducing technical difficulties and maximising the value of your business.
          </p>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Partners</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-white text-lg">{partner.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose TechM8 */}
      <section className="relative pb-20 md:pb-28">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Why Businesses Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">TechM8</span>
            </h2>
            <ul className="space-y-3">
              {whyPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
