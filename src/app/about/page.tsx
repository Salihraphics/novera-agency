'use client';

import Link from 'next/link';

export default function About() {
  const principles = [
    { icon: '✨', title: 'Sadelik', description: 'Karmaşık şeyler basit bir şekilde anlatıyoruz. Müşterilerimiz her zaman neler yapıldığını, neden yapıldığını ve nasıl yardımcı olduğunu bilirler.' },
    { icon: '🎯', title: 'Sonuç Odaklı', description: 'Güzel tasarımlar önemlidir ama sonuçlar daha da önemlidir. Her projede measurable hedefler belirleyip, bunları takip ediyoruz.' },
    { icon: '💬', title: 'İletişim', description: 'Açık ve düzenli iletişim hayata geçirmek. Müşterilerimiz projelerinin her aşamasında bilgilendirilir.' },
    { icon: '🚀', title: 'İnovasyon', description: 'Dijital dünya hızlı değişiyor. En son teknolojileri takip ediyor, müşterilerimizi rekabette öne çıkarmaya çalışıyoruz.' },
    { icon: '🤝', title: 'Ortaklık', description: 'Biz sadece hizmet sağlayıcı değiliz, markanızın dijital büyümesinde ortağız. Uzun vadeli ilişkiler kurmak istiyoruz.' },
    { icon: '⭐', title: 'Kalite', description: 'Her proje, her detay en yüksek kaliteyle hayata geçirilir. Müşteri memnuniyeti ve profesyonellik bizim garantimizdir.' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Our Story Section */}
      <section className="py-section bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Biz Kimiz?
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Novera Agency, dijital büyüme odaklı bir creative & performance agency'dir. Küçük işletmelerden büyük kuruluşlara kadar, markaların dijital dünyada başarılı olmasına yardımcı olmak için kuruluştu.
            </p>
            <p>
              Misyonumuz basit ama güçlü: <span className="text-slate-900 dark:text-slate-100 font-semibold">"Fazlalık yok, laf kalabalığı yok."</span> Müşterilerimize net, anlaşılır ve sonuç odaklı çözümler sunuyoruz. Dijital stratejilerden tasarıma, geliştirmeden pazarlamaya kadar, markanızın tüm ihtiyaçlarını karşılamaya hazırız.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                🎯 Vizyonumuz
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Türkiye'de ve dünyada, markaların dijital dönüşümünde en güvenilir ve en yenilikçi ortağı olmak. Her işletmenin, boyutu ne olursa olsun, dijital dünyada güçlü bir varlık hakkına sahip olduğuna inanıyoruz.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                💼 Misyonumuz
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Müşterilerimizin dijital hedeflerine ulaşmasında en etkili ve uygun çözümleri sunmak. Basit, net ve sonuç odaklı bir anlayışla çalışıyor, müşteri memnuniyetini her zaman öncelik tutuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principles Section */}
      <section className="py-section bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
            Çalışma <span className="gradient-text dark:gradient-text-dark">Prensipleri</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div key={idx} className="card">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Yaklaşımımız
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Başlangıç: Anlamak',
                description: 'Her proje bir danışmanlık seansıyla başlar. Markanızı, hedef kitlenizi, rakiplerini ve dijital hedeflerinizi derinlemesine anlarız.',
              },
              {
                title: 'Strateji: Planlamak',
                description: 'Anladıklarımıza dayanarak, markanız için en uygun dijital strateji ve taktikleri geliştiririz.',
              },
              {
                title: 'Uygulama: Hayata Geçirmek',
                description: 'Stratejiye dayanarak, tasarım, geliştirme ve pazarlama çalışmalarını profesyonelce hayata geçiririz.',
              },
              {
                title: 'Ölçüm: Sonuçları Takip Etmek',
                description: 'Düzenli raporlarla ve analizlerle, projenin başarısını ölçüyor ve gerekli iyileştirmeleri yapıyoruz.',
              },
            ].map((step, idx) => (
              <div key={idx} className="card">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

