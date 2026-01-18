'use client';

import Link from 'next/link';
import { PackageQuiz } from '@/components/PackageQuiz';

export default function Packages() {
  const packages = [
    {
      id: 1,
      icon: '🔹',
      name: 'BAŞLANGIÇ PAKETİ',
      subtitle: 'Yeni markalar ve solo girişimciler için',
      tagline: "Online'da profesyonel bir duruş inşa ediyoruz.",
      setupPrice: '₺12.500',
      monthlyPrice: '₺6.000',
      setupLabel: 'Tek seferlik kurulum',
      monthlyLabel: 'Aylık devam',
      features: [
        'Web Site Tasarımı',
        'Mobil & Teknik Optimizasyon',
        'Temel SEO',
        'Aylık 5 Video Edit',
      ],
      excluded: [
        'Sosyal Medya Yönetimi',
        'Meta Reklam Yönetimi',
        'İçerik & Sayfa Güncellemeleri',
        'Öncelikli Destek & İletişim',
      ],
      highlighted: false,
    },
    {
      id: 2,
      icon: '⭐',
      name: 'PROFESYONEL PAKET',
      subtitle: 'Yeni ve gelişen işletmeler için',
      badge: 'EN POPÜLER',
      tagline: 'Web, sosyal medya ve içerik odaklı çözümler.',
      setupPrice: '₺20.000',
      monthlyPrice: '₺10.000',
      setupLabel: 'Tek seferlik kurulum',
      monthlyLabel: 'Aylık devam',
      features: [
        'Web Site Tasarımı (gelişmiş)',
        'Mobil & Teknik Optimizasyon',
        'Gelişmiş SEO',
        'Aylık 15 Video Edit',
        'Sosyal Medya Yönetimi',
        'İçerik & Sayfa Güncellemeleri (sınırlı)',
      ],
      excluded: [
        'Meta Reklam Yönetimi',
        'Öncelikli Destek & İletişim',
      ],
      highlighted: true,
    },
    {
      id: 3,
      icon: '🏢',
      name: 'KURUMSAL PAKET',
      subtitle: 'Kurumsal markalar için',
      tagline: 'Büyüme odaklı, tam dijital çözüm.',
      setupPrice: '₺35.000',
      monthlyPrice: '₺15.000',
      setupLabel: 'Tek seferlik kurulum',
      monthlyLabel: 'Aylık devam',
      features: [
        'Web Site Tasarımı (özel tasarım)',
        'Mobil & Teknik Optimizasyon',
        'Gelişmiş SEO',
        'Aylık 25 Video Edit',
        'Sosyal Medya Yönetimi',
        'Meta Reklam Yönetimi',
        'İçerik & Sayfa Güncellemeleri (öncelikli)',
        'Öncelikli Destek & İletişim',
      ],
      excluded: [],
      highlighted: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Page Title */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Hizmet <span className="gradient-text dark:gradient-text-dark">Paketleri</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Markaınızın ihtiyacına uygun paket seçeneğini bulun
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full ${
                  pkg.highlighted
                    ? 'bg-gradient-accent text-white scale-105 shadow-2xl'
                    : 'bg-white border border-slate-200 text-slate-900 hover:shadow-lg'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-white text-purple-600 px-4 py-2 rounded-bl-2xl text-sm font-bold">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon & Name */}
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-3xl">{pkg.icon}</span>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                  </div>

                  {/* Subtitle */}
                  <p className={`text-sm mb-2 ${pkg.highlighted ? 'text-white/90' : 'text-slate-600'}`}>
                    {pkg.subtitle}
                  </p>

                  {/* Tagline */}
                  <p className={`text-sm font-semibold mb-6 italic ${pkg.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                    "{pkg.tagline}"
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b" style={{ borderColor: pkg.highlighted ? 'rgba(255,255,255,0.2)' : '' }}>
                    <div className="space-y-2">
                      <div>
                        <p className={`text-xs font-semibold mb-1 ${pkg.highlighted ? 'text-white' : 'text-slate-600'}`}>
                          {pkg.setupLabel}
                        </p>
                        <p className={`text-2xl font-bold ${pkg.highlighted ? 'text-white' : ''}`}>{pkg.setupPrice}</p>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold mb-1 ${pkg.highlighted ? 'text-white' : 'text-slate-600'}`}>
                          {pkg.monthlyLabel}
                        </p>
                        <p className={`text-2xl font-bold ${pkg.highlighted ? 'text-white' : ''}`}>{pkg.monthlyPrice}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className={`text-xs font-bold mb-3 uppercase tracking-widest ${pkg.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                      İçerik:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-white' : 'text-purple-600'}`}>✓</span>
                          <span className={`text-sm ${pkg.highlighted ? 'text-white/95' : 'text-slate-700'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  {pkg.excluded.length > 0 && (
                    <div className="mb-6 pb-6 border-b" style={{ borderColor: pkg.highlighted ? 'rgba(255,255,255,0.2)' : 'rgb(226, 232, 240)' }}>
                      <h4 className={`text-xs font-bold mb-2 uppercase tracking-widest ${pkg.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                        Dahil değil:
                      </h4>
                      <ul className="space-y-1">
                        {pkg.excluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-white/60' : 'text-slate-400'}`}>✗</span>
                            <span className={`text-sm ${pkg.highlighted ? 'text-white/70' : 'text-slate-500'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="px-8 -mt-2 pb-6 flex justify-center">
                  <Link
                    href="/contact"
                    className={`py-4 px-8 rounded-lg font-bold text-xl text-center transition-all duration-200 ${
                      pkg.highlighted
                        ? 'bg-white text-purple-600 hover:bg-slate-100 hover:scale-105 shadow-lg'
                        : 'btn-primary'
                    }`}
                  >
                    Detaylı Bilgi Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Quiz */}
      <PackageQuiz />

      {/* FAQ */}
      <section className="py-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Çalışma süreci nasıl ilerliyor?', answer: 'İlk görüşmede ihtiyaçlarınızı netleştiriyoruz. Ardından size özel bir yol haritası çıkarıyoruz ve onay sonrası çalışmaya başlıyoruz. Süreç boyunca şeffaf ilerliyor, her aşamada bilgilendirme yapıyoruz.' },
              { title: 'Paketler sabit mi, özelleştirilebilir mi?', answer: 'Paketler bir başlangıç çerçevesidir. İhtiyacınıza göre içerik eklenip çıkarılabilir. Gereksiz hizmet satmayız, sadece gerçekten işinize yarayacak çözümleri sunarız.' },
              { title: 'Çalışma süresi ve teslim zamanları ne kadar?', answer: 'Projenin kapsamına göre değişir. Küçük ölçekli işler kısa sürede tamamlanırken, daha kapsamlı projeler planlı şekilde aşama aşama ilerler. Net teslim süresi proje başında belirlenir.' },
              { title: 'Çalışmaya başladıktan sonra ek talepler olursa ne olur?', answer: 'Paket kapsamındaki düzenlemeler ücretsiz olarak yapılır. Paket dışı talepler için ise işin kapsamına göre ek planlama ve fiyatlandırma uygulanır.' },
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{faq.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
