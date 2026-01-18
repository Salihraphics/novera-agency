'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="min-h-[calc(50vh-40px)] flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 dark:from-slate-900 dark:via-purple-950/10 dark:to-slate-900">
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Markanızı Dijital Dünyada{' '}
            <span className="gradient-text dark:gradient-text-dark">
              Güçlü Kılına
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Novera Agency, markaların dijital dünyada başarılı olması için web tasarım, sosyal medya yönetimi ve dijital pazarlama hizmetleri sunuyoruz.
          </p>
          
          <div className="flex flex-row gap-4 justify-center mb-4 flex-wrap">
            <Link 
              href="/services" 
              className="px-10 py-3.5 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap text-base"
            >
              Hizmetleri Keşfet
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-3.5 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 whitespace-nowrap text-base"
            >
              Bize Ulaşın
            </Link>
          </div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-section">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Sunduğumuz Hizmetler
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Dijital dönüşüm yolculuğunuzda yanınızda olmak için kapsamlı bir hizmet yelpazesi sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Web Tasarım
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                Modern, responsive ve kullanıcı dostu web siteleri tasarladığımız ve geliştiriyoruz.
              </p>
              <Link
                href="/services"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
              >
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">📱</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Sosyal Medya
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                Instagram ve Facebook hesaplarının kurulumu ve profesyonel yönetimi hizmeti veriyoruz.
              </p>
              <Link
                href="/services"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
              >
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">🎬</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Video Düzenleme
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                Reels, Shorts ve reklam videoları düzenleyerek marka görünürlüğünü artırıyoruz.
              </p>
              <Link
                href="/services"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
              >
                Detaylı Bilgi →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-block">
              Tüm Hizmetleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '✓',
                title: 'Profesyonel Ekip',
                description: 'Deneyimli tasarımcı ve geliştirici ekibimiz, projenizi başarıya götürmek için çalışıyor.',
              },
              {
                icon: '💰',
                title: 'Uygun Fiyatlandırma',
                description: 'Küçük işletmeler ve startuplar için uygun paket seçenekleri sunuyoruz.',
              },
              {
                icon: '📊',
                title: 'Sonuç Odaklı',
                description: 'Dijital büyüme ve measurable sonuçlara odaklanarak stratejiler geliştiriyoruz.',
              },
              {
                icon: '🤝',
                title: 'Uzun Vadeli İlişki',
                description: 'Müşterilerimizle uzun vadeli ortaklıklar kurmak ve birlikte büyümek istiyoruz.',
              },
            ].map((item, index) => (
              <div key={index} className="card flex gap-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="card border-2 border-purple-200 dark:border-purple-800">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Projenizi Başlatmaya Hazırız
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Markanızın dijital yolculuğunu birlikte başlatalım. İlk görüşmemiz tamamen ücretsiz.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Şimdi İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

