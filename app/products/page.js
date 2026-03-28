import Image from 'next/image';

const partners = [
  {
    name: 'Gadget & Gear',
    desc: 'Lorem ipsum dolor sit amet',
    logo: '/logo/gadget-and-gear.png',
  },
  {
    name: 'Creative Institute',
    desc: 'Lorem ipsum dolor sit amet',
    logo: '/logo/creative-institute.png',
  },
  {
    name: 'Pathao',
    desc: 'Lorem ipsum dolor sit amet',
    logo: '/logo/pathao.png',
  },
  {
    name: 'KFC',
    desc: 'Lorem ipsum dolor sit amet',
    logo: '/logo/kfc.png',
  },
  {
    name: '10 Minute School',
    desc: 'Lorem ipsum dolor sit amet',
    logo: '/logo/10-minute-school.png',
  },
  {
    name: 'Meena Sweet',
    desc: 'Lorem ipsum dolor sit amet',
    logo: '/logo/meena-sweet.png',
  },
];

export const metadata = {
  title: 'Our Solutions & Partnerships | TechM8',
  description: 'Meet our trusted partners and client solutions.',
};

function PartnerCard({ name, desc, logo }) {
  return (
    <div className="bg-indigo-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
      {/* Logo + Name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
          <Image
            src={logo}
            alt={name}
            width={56}
            height={56}
            className="object-contain w-full h-full"
          />
        </div>
        <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
      </div>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-blue-600">Solutions</span> &amp;{' '}
          <span className="text-blue-600">Partnerships</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
