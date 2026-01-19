'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const footerLinks = {
    quick: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hizmetler', href: '/services' },
      { label: 'Hakkımızda', href: '/about' },
      { label: 'İletişim', href: '/contact' },
    ],
    services: [
      { label: 'Web Tasarım', href: '/services' },
      { label: 'Sosyal Medya', href: '/services' },
      { label: 'Video Düzenleme', href: '/services' },
      { label: 'Paketler', href: '/packages' },
    ],
  };

  const socialLinks = [
    { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/novera-agency' },
    { icon: 'ig', label: 'Instagram', href: 'https://www.instagram.com/novera_agency_?igsh=eXFqazljZHdpNXk0' },
    { icon: 'tw', label: 'Twitter/X', href: 'https://x.com/NoveraAgency' },
    { icon: 'yt', label: 'YouTube', href: 'https://www.youtube.com/@NoveraAgency' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white overflow-hidden mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Brand Statement */}
        <div className="border-b border-white/10 py-8">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Novera Agency</h3>
            <p className="text-slate-300 text-sm">Markaların dijital kimliğini güçlendirir</p>
          </div>
        </div>
        {/* Main Footer Grid */}
        <div className="container mx-auto max-w-7xl px-4 pt-16 pb-8">
          {/* Three Columns - Links, Services, Social */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">
                Linkler
              </h4>
              <div className="flex flex-col gap-2">
                {footerLinks.quick.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-purple-500/50 transition-all duration-200 inline-block w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">
                Hizmetler
              </h4>
              <div className="flex flex-col gap-2">
                {footerLinks.services.map((link, index) => (
                  <Link
                    key={`${link.href}-${index}`}
                    href={link.href}
                    className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-pink-500/50 transition-all duration-200 inline-block w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">
                Sosyal
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={`${link.label}-${index}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 hover:border-purple-500 hover:bg-gradient-accent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 font-semibold text-xs hover:shadow-lg hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6">
            <p className="text-xs text-slate-400 text-center">
              © {currentYear} Novera Agency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
