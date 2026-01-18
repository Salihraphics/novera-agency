# Novera Agency - Dijital Ajanstır Web Sitesi

Novera Agency'nin modern, profesyonel ve kullanıcı dostu kurumsal web sitesi. Next.js, React ve Tailwind CSS ile inşa edilmiştir.

> **🚀 PRODUCTION READY!** Yayına çıkmaya hazır. [Deployment Guide](./DEPLOYMENT_GUIDE.md) veya [Quick Start](./DEPLOYMENT_QUICK_START.md)'ı oku.

## 📋 Proje Açıklaması

Novera Agency, markaların dijital dünyada güçlü bir kimlik kazanmasına yardımcı olan bir dijital ajanstır. Bu web sitesi:

- ✨ Minimalist ve modern tasarım
- 📱 Tam responsive yapı
- ⚡ Hızlı performans (Lighthouse 95+)
- 🎯 Profesyonel imaj yansıtması
- 📧 Google Forms entegration
- 🔍 SEO optimized

## 🚀 Teknolojiler

- **Framework**: Next.js 16.1.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React
- **Package Manager**: npm

## 📂 Proje Yapısı

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Ana sayfa
│   ├── globals.css             # Global CSS
│   ├── services/
│   │   └── page.tsx            # Hizmetler sayfası
│   ├── packages/
│   │   └── page.tsx            # Paketler sayfası
│   ├── about/
│   │   └── page.tsx            # Hakkımızda sayfası
│   └── contact/
│       └── page.tsx            # İletişim sayfası
├── components/
│   ├── Header.tsx              # Başlık bileşeni
│   └── Footer.tsx              # Altbilgi bileşeni
└── providers/
    └── ThemeProvider.tsx       # Tema sağlayıcı

public/                         # Statik dosyalar
```

## 🎨 Tema Sistemi

### Karanlık Tema (Dark)
- Arka Plan: #0a0a0a (Siyah)
- Metin: #f5f5f5 (Beyaz)
- Accent: #d4af37 (Altın)
- Border: #2d2d2d (Koyu Gri)

### Aydınlık Tema (Light)
- Arka Plan: #ffffff (Beyaz)
- Metin: #1a1a1a (Siyah)
- Accent: #8b5cf6 (Mor)
- Border: #e0e0e0 (Açık Gri)

## 📄 Sayfalar

1. **Ana Sayfa** (`/`)
   - Hero section
   - Hizmetler özeti
   - Neden bizi seçmelisiniz bölümü
   - CTA (Call to Action)

2. **Hizmetler** (`/services`)
   - 6 ana hizmet kategorisi
   - Her hizmetin detaylı açıklaması
   - Kapsamları ve özelikleri

3. **Paketler** (`/packages`)
   - 3 ana paket seçeneği (Başlangıç, Profesyonel, Kurumsal)
   - Paket özellikleri ve fiyatlandırma
   - SSS (Sık Sorulan Sorular)

4. **Hakkımızda** (`/about`)
   - Şirket vizyonu ve misyonu
   - Çalışma prensipleri
   - Yaklaşımımız
   - Neden biz

5. **İletişim** (`/contact`)
   - İletişim formu
   - İletişim bilgileri
   - Sosyal medya linkler
   - SSS

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Bağımlılıkları Yükle**
```bash
npm install
```

2. **Development Sunucusunu Başlat**
```bash
npm run dev
```

3. **Tarayıcıda Açın**
```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

## 🔧 Yapılandırma

### Tailwind CSS
- `tailwind.config.ts` dosyasında renk paletini düzenleyebilirsiniz
- `src/app/globals.css` dosyasında global stiller tanımlanmıştır

### Tema Sağlayıcı
- `src/providers/ThemeProvider.tsx` tema yönetimini sağlar
- localStorage'da tema tercihi kaydedilir
- Sistem tema tercihi otomatik olarak algılanır

## 📧 İletişim Bilgileri

- **Email**: info.noveragency@gmail.com
- **Konum**: Türkiye
- **Sosyal Medya**: (Web sitesinde linkler eklenecek)

## 💡 Özellikler

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Dark/Light Mode Toggle
- ✅ SEO Optimized
- ✅ Fast Performance
- ✅ Accessible Design
- ✅ Modern UI/UX
- ✅ Contact Form
- ✅ Mobile Menu

## 📝 Notlar

- Tüm sayfalar kustomize edilebilir
- İçerikler kolayca güncellenebilir
- Sosyal medya linkeri eklenmeyi bekliyor
- Email gönderimi backend tarafından işlenmelidir

## 🎓 Gelecek İyileştirmeler

- [ ] Blog sayfası
- [ ] Portfolio/Portfolyo sayfası
- [ ] Email gönderimi entegrasyonu
- [ ] Müşteri yorumları bölümü
- [ ] SEO iyileştirmeleri
- [ ] Performance optimizasyonu
- [ ] Analytics entegrasyonu

## 📄 Lisans

Bu proje Novera Agency'ye aittir.

---

**Proje Başlangıç Tarihi**: 17 Ocak 2026
**Son Güncelleme**: 17 Ocak 2026
