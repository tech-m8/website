'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/service' },
  { label: 'Products', href: '/products' },
  { label: 'Team', href: '/team' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — single SVG source of truth (public/briefcase.svg). Inlined
            so Next.js' static export ships it without an extra request, and
            so the navbar matches the favicon + the desktop app icon. */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg
            className="w-8 h-8"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="7" fill="#7c3aed" />
            <path d="M 13.5 9 Q 12.75 9 12.75 9.75 L 12.75 12.5 L 7.5 12.5 Q 6 12.5 6 14 L 6 22.5 Q 6 24 7.5 24 L 14.25 24 L 14.25 25 Q 14.25 25.6 14.85 25.6 L 17.15 25.6 Q 17.75 25.6 17.75 25 L 17.75 24 L 24.5 24 Q 26 24 26 22.5 L 26 14 Q 26 12.5 24.5 12.5 L 19.25 12.5 L 19.25 9.75 Q 19.25 9 18.5 9 Z" fill="#ffffff" />
          </svg>
          <span className="font-bold text-white text-lg">TechM8</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/10 border-l-2 border-violet-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
