import Link from "next/link";

export const metadata = {
  title: "TechM8 | Transform Your Ideas Into Digital Products",
  description:
    "TechM8 is a software agency helping businesses build digital products.",
};

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Security",
    desc: "Lorem ipsum dolor sit amet consectetur. In ut facilisis vestibulum non fermentum lacus.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Creative Thoughts",
    desc: "Lorem ipsum dolor sit amet consectetur. In ut facilisis vestibulum non fermentum lacus.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Fast Development",
    desc: "Lorem ipsum dolor sit amet consectetur. In ut facilisis vestibulum non fermentum lacus.",
  },
];

const agencyPoints = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 md:py-32">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

        {/* Floating dots grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Software Development Agency
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Turn Your Ideas Into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Scalable Digital Solutions
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            TechM8 is a leading software development agency that builds web applications, custom software, and mobile apps to help businesses grow faster and stand out online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Get Started
            </Link>
            <Link
              href="/service"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all backdrop-blur-sm"
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-gray-400 text-sm mt-1">Projects Delivered</p>
            </div>
            <div className="hidden sm:block w-px bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">220+</p>
              <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
            </div>
            <div className="hidden sm:block w-px bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-gray-400 text-sm mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Software Agency */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left — Agency Image */}
          <div className="flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/agency-image.png"
              alt="Best Software Agency"
              className="w-full h-auto"
            />
          </div>

          {/* Right */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
              Best <span className="text-blue-600">Software Agency</span>
              <br />
              In Town
            </h2>
            <p className="text-gray-400 text-sm mb-2">Science 2017</p>
            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. In ut facilisis vestibulum
              non fermentum lacus.
            </p>
            <ul className="space-y-2 mb-6">
              {agencyPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/service"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-sm font-medium transition-colors inline-block"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
