'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // GOOGLE FORMS ENTEGRASYONU
      // 1. Google Forms'unuzun form ID'sini aşağıya koyun
      // Örnek: https://docs.google.com/forms/d/1ABC123XYZ/viewform
      // Form ID = "1ABC123XYZ"
      const GOOGLE_FORM_ID = 'YOUR_GOOGLE_FORM_ID_HERE';
      
      // 2. Form field'larının entry ID'lerini Google Forms'dan alın
      // inspect et: name="entry.XXXXXXXXXXXX" şeklinde görünür
      const FORM_FIELDS = {
        name: 'entry.1234567890', // Değiştir
        email: 'entry.1234567891', // Değiştir
        phone: 'entry.1234567892', // Değiştir
        subject: 'entry.1234567893', // Değiştir
        message: 'entry.1234567894', // Değiştir
      };

      // Google Forms'a veri gönder
      const googleFormUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
      
      const formBody = new URLSearchParams();
      formBody.append(FORM_FIELDS.name, formData.name);
      formBody.append(FORM_FIELDS.email, formData.email);
      formBody.append(FORM_FIELDS.phone, formData.phone);
      formBody.append(FORM_FIELDS.subject, formData.subject);
      formBody.append(FORM_FIELDS.message, formData.message);

      // Backend API'ye de kaydet (isteğe bağlı)
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {}); // Google Forms başarısız olsa bile devam et

      // Google Forms'a gönder
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors', // CORS errors'ı bypass et
      });
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Hata olsa bile success message göster (Google Forms 'no-cors' kullandığı için)
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'info.noveragency@gmail.com', href: 'mailto:info.noveragency@gmail.com' },
    { icon: '📍', title: 'Konum', value: 'Türkiye', href: '#' },
    { icon: '⏰', title: 'Çalışma Saati', value: '09:00 - 18:00', href: '#' },
  ];

  const faqs = [
    { icon: '⏱️', title: 'Cevap süresi nedir?', description: 'Mesai saatleri içinde iletilen taleplere genellikle aynı gün, en geç 24 saat içinde dönüş sağlanır. Acil durumlar önceliklendirilir.' },
    { icon: '📅', title: 'Proje teslim süresi neye göre belirleniyor?', description: 'Teslim süresi; seçilen hizmet, projenin kapsamı ve revizyon sayısına göre belirlenir. Süre, işe başlamadan önce net şekilde paylaşılır ve sonradan sürpriz çıkarılmaz.' },
    { icon: '👤', title: 'Proje sürecinde kiminle iletişim kuracağım?', description: 'Her projede tek bir sorumlu atanır. Farklı kişilerle uğraşmazsınız; tüm iletişim tek kanal üzerinden ilerler.' },
    { icon: '✅', title: 'Teslim sonrası destek sağlıyor musunuz?', description: 'Evet. Teslim sonrası belirli bir süre destek verilir. Küçük düzenlemeler ve teknik sorular bu kapsamda ele alınır, yeni talepler için ayrı planlama yapılır.' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Page Title */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Bize <span className="gradient-text dark:gradient-text-dark">Ulaşın</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Projeleriniz hakkında konuşmak için bize yazın yada arayın
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-section">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="card">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  Mesaj Gönderin
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Formu doldurun, en kısa sürede sizinle iletişime geçeceğiz.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span>Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Adınız *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                        placeholder="Adınız"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Konu *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                    >
                      <option value="">Konu Seçin</option>
                      <option value="web-tasarım">Web Tasarım</option>
                      <option value="sosyal-medya">Sosyal Medya</option>
                      <option value="video-düzenleme">Video Düzenleme</option>
                      <option value="reklam-yönetimi">Reklam Yönetimi</option>
                      <option value="paket-alımı">Paket Alımı</option>
                      <option value="diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 resize-none transition-all"
                      placeholder="Projeniz hakkında detay veriniz..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Mesaj Gönder
                  </button>
                </form>

                <p className="text-xs text-slate-600 dark:text-slate-400 text-center mt-6">
                  * Gerekli alanlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
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
              <Link href="/packages" className="btn-secondary inline-block">
                Paketleri Gör
              </Link>
              <Link href="/services" className="btn-primary inline-block">
                Hizmetleri Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

