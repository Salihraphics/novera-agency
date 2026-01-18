'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ServiceModal } from '@/components/ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const services = [
    {
      id: 1,
      title: 'Web Tasarım ve Geliştirme',
      icon: '🌐',
      description: 'Markanızın çevrimiçi varlığı için modern, responsive ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz.',
      detailedDescription: 'İlk izlenim önemlidir. Profesyonel bir web sitesi, müşterilerinizin sizin hakkında olumlu bir fikir oluşturmasına yardımcı olur. Mobil cihazlarda mükemmel görünen, hızlı yüklenen ve arama motorlarında kolayca bulunabilen siteler tasarlarız.',
      features: [
        'Responsive Tasarım',
        'SEO Optimizasyonu',
        'Hızlı Yükleme Süreleri',
        'Mobil Uyumlu',
        'Modern Teknolojiler',
      ],
    },
    {
      id: 2,
      title: 'Kurumsal Web Siteleri',
      icon: '🏢',
      description: 'Şirketinizin profesyonelliğini yansıtan, müşteri güveni kazandıran kurumsal web siteleri oluşturuyoruz.',
      detailedDescription: 'Kurumsal kimliğinizi dijital ortamda en güzel şekilde sunmak için özelleştirilmiş web siteleri geliştiririz. Markanız, değerleriniz ve hizmetlerinizin tamamını bir platform üzerinde etkili bir şekilde sunabilirsiniz.',
      features: [
        'Brand İdentitesi Entegrasyonu',
        'İçerik Yönetim Sistemi',
        'İletişim Formları',
        'Analitik Entegrasyonu',
        'Güvenlik',
      ],
    },
    {
      id: 3,
      title: 'Sosyal Medya Kurulumu ve Yönetimi',
      icon: '📱',
      description: 'Instagram, Facebook ve diğer sosyal medya platformlarında profesyonel hesap kurulumu ve günlük yönetimi hizmetleri sunuyoruz.',
      detailedDescription: 'Sosyal medya, markanızla müşterileriniz arasında köprü kuran güçlü bir araçtır. Hesaplarınızı profesyonel şekilde kurar, iyileştiririz ve düzenli olarak etkileşimli içerik paylaşarak takipçi tabanınızı büyütmemize yardımcı oluruz.',
      features: [
        'Hesap Kurulumu',
        'Profil Optimizasyonu',
        'İçerik Planlama',
        'Günlük Paylaşımlar',
        'Takipçi Etkileşimi',
      ],
    },
    {
      id: 4,
      title: 'Video Düzenleme',
      icon: '🎬',
      description: 'Reels, Shorts ve profesyonel reklam videoları düzenleyerek markanızın görünürlüğünü ve etkisini artırıyoruz.',
      detailedDescription: 'Video içerik günümüzde en etkili pazarlama aracıdır. Ürünlerinizi tanıtan, müşteri hikayeleri anlatan ve marka değerlerinizi yansıtan profesyonel videolar hazırlayarak sosyal medyada görünürlüğünüzü dramatik şekilde artırırız.',
      features: [
        'Instagram Reels',
        'TikTok Shorts',
        'Reklam Videoları',
        'Ürün Tanıtım Videoları',
        'Müzik ve Efektler',
      ],
    },
    {
      id: 5,
      title: 'Meta Reklam Yönetimi',
      icon: '📊',
      description: 'Instagram ve Facebook reklam kampanyalarını stratejik şekilde yönetip hedef kitlenize ulaşan reklamlar oluşturuyoruz.',
      detailedDescription: 'Doğru kişilere ulaşmak pazarlamanın anahtarıdır. Meta\'nın güçlü hedefleme seçeneklerini kullanarak, tam olarak aradığınız müşterileri hedef alan reklam kampanyaları oluşturup yönetir, bütçenizi en verimli şekilde kullanırız.',
      features: [
        'Kampanya Stratejisi',
        'Hedef Kitle Analizi',
        'Bütçe Optimizasyonu',
        'Performans Raporlama',
        'A/B Testing',
      ],
    },
    {
      id: 6,
      title: 'Dijital Marka Konumlandırması',
      icon: '⭐',
      description: 'Markanızın dijital dünyada doğru konumunu belirleyip, rakiplerinden farklı kılacak stratejiler geliştiriyoruz.',
      detailedDescription: 'Başarılı bir marka, hedef kitlesinin zihninde benzersiz bir yere sahiptir. Pazar analizini yaparak, rakiplerinizi inceleyerek ve müşteri ihtiyaçlarını anlayarak markanızı konumlandırırız. Böylece dijital dünyada güçlü ve ayırt edici bir varlık oluşturursunuz.',
      features: [
        'Marka Stratejisi',
        'Pazarlama Analizi',
        'Konumlandırma',
        'Mesajlaşma Stratejisi',
        'Danışmanlık',
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Page Title */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Sunduğumuz <span className="gradient-text dark:gradient-text-dark">Hizmetler</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Markaları dijital dünyada güçlü kılmak için sunduğumuz kapsamlı hizmetler
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="card hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500 group flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header: Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex-grow">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-widest">
                    Kapsamında:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-purple-600 dark:text-purple-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button - Always at bottom */}
                <button
                  onClick={() => handleServiceClick(service)}
                  className="btn-primary w-full text-center block mt-auto"
                >
                  Bilgi Al
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </div>
  );
}

