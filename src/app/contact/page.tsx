'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'info.noveragency@gmail.com',
    href: 'mailto:info.noveragency@gmail.com',
  },
  {
    icon: '📍',
    title: 'Konum',
    value: 'Türkiye',
    href: '',
  },
  {
    icon: '⏰',
    title: 'Çalışma Saati',
    value: '09:00 - 18:00',
    href: '',
  },
];

const faqs = [
  {
    icon: '⏱️',
    title: 'Cevap süresi nedir?',
    description:
      'Mesai saatleri içinde iletilen taleplere genellikle aynı gün, en geç 24 saat içinde dönüş sağlanır.',
  },
  {
    icon: '📅',
    title: 'Proje teslim süresi neye göre belirleniyor?',
    description:
      'Teslim süresi; seçilen hizmet, projenin kapsamı ve revizyon sayısına göre belirlenir.',
  },
  {
    icon: '👤',
    title: 'Proje sürecinde kiminle iletişim kuracağım?',
    description:
      'Her projede tek bir sorumlu atanır. Tüm iletişim tek kanal üzerinden ilerler.',
  },
  {
    icon: '✅',
    title: 'Teslim sonrası destek sağlıyor musunuz?',
    description:
      'Evet. Teslim sonrası belirli bir süre destek verilir.',
  },
];

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Page Title */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Bize <span className="gradient-text dark:gradient-text-dark">Ulaşın</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Projeleriniz hakkında konuşmak için bize yazın ya da arayın
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-section">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="space-y-12">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-5xl">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right – TALLY */}
            <div className="card">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Mesaj Gönderin
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Formu doldurun, en kısa sürede sizinle iletişime geçeceğiz.
              </p>

              <div className="w-full min-h-[500px]">
                {mounted && (
                  <iframe
                    data-tally-src="https://tally.so/embed/aQ4p4X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    frameBorder="0"
                    title="Bize Ulaşın"
                    className="w-full rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Sık Sorulan Sorular
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card">
                <div className="text-3xl mb-3">{faq.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {faq.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {faq.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="card border-2 border-purple-200 dark:border-purple-800">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Başlamaya Hazırız
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Markanızın dijital yolculuğunun sonraki adımını beraber atalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="btn-secondary">
                Paketleri Gör
              </Link>
              <Link href="/services" className="btn-primary">
                Hizmetleri Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
