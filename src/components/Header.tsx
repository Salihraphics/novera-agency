'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/services', label: 'Hizmetler' },
    { href: '/packages', label: 'Paketler' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/contact', label: 'İletişim' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-[61px] px-4 max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12 flex items-center justify-center rounded-lg">
            <img 
              src="/assets/logo.png" 
              alt="Novera Agency" 
              width={50} 
              height={50} 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="text-3xl font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
            NOVERA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-slate-700 hover:text-purple-600 transition-all duration-300 font-medium group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-slate-200 text-slate-800 hover:bg-slate-300 hover:shadow-lg transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 border-t border-slate-200 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2 max-w-7xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
