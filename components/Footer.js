import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* Brand */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-xl font-bold text-white mb-4">TechM8</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              TechM8 is a leading software development agency dedicated to helping businesses succeed in the digital world. With years of experience and a passionate team of developers and designers, we create digital solutions that are innovative, reliable, and designed for growth.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              If you are starting a new business, improving an existing web application, or building a custom software product, TechM8 is here to support your journey.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Pages</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/service' },
                { label: 'Products', href: '/products' },
                { label: 'Team', href: '/team' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:masnun@tech-m8.solutions" className="hover:text-white transition-colors">masnun@tech-m8.solutions</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+8801711960803" className="hover:text-white transition-colors">+8801711 960803</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>84, Abu Ahmed Road, Gollamari,<br />Khulna - 9100</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} TechM8. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
