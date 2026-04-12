import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col items-center text-center gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">TechM8</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            TechM8 is a leading software development agency dedicated to helping businesses succeed in the digital world. We create digital solutions that are innovative, reliable, and designed for growth.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/service' },
            { label: 'Products', href: '/products' },
            { label: 'Team', href: '/team' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="text-gray-400 text-sm hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact icons row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a href="mailto:masnun@tech-m8.solutions" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
            <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            masnun@tech-m8.solutions
          </a>
          <a href="tel:+8801711960803" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
            <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +8801711 960803
          </a>
          <span className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            84, Abu Ahmed Road, Khulna - 9100
          </span>
        </div>

        {/* Divider + copyright */}
        <div className="w-full border-t border-white/10 pt-6 text-gray-500 text-xs">
          © {new Date().getFullYear()} TechM8. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
