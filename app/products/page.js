import Link from 'next/link';

export const metadata = {
  title: 'Our Products | TechM8',
  description: 'Apps and tools built by TechM8.',
};

const products = [
  {
    slug: 'droidm8',
    name: 'DroidM8',
    tagline: 'Bridge your Android phone with your Mac.',
    desc: 'Notification mirroring, clipboard sync, and more — all over your local network. No cloud, no account.',
    badge: 'Android + macOS',
  },
  {
    slug: 'square-frame',
    name: 'Square Frame',
    tagline: 'Batch white borders for your photos.',
    desc: 'Pad photos to a clean white square, add a caption with your camera details, and export square JPEGs — all on-device.',
    badge: 'Android',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            Our Products
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products built by <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">TechM8</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Software we ship and stand behind.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-violet-400/40 transition-all"
              >
                <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {product.badge}
                </div>
                <h3 className="font-bold text-white text-xl mb-2 group-hover:text-violet-300 transition-colors">{product.name}</h3>
                <p className="text-violet-200/80 text-sm mb-3">{product.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{product.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 group-hover:text-violet-200">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
