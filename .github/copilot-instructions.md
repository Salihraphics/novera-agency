# Novera Agency Web Sitesi - Proje Yönergeleri

## Proje Özeti

Novera Agency, markaların dijital dünyada güçlü bir kimlik kazanmasını hedefleyen modern bir dijital ajanstır. Bu proje, Next.js ve React kullanarak oluşturulmuş, minimalist ve profesyonel bir kurumsal web sitesidir.

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Header, Footer, ThemeProvider ile)
│   ├── globals.css        # Global stiller ve tema değişkenleri
│   ├── page.tsx           # Ana sayfa
│   ├── services/page.tsx  # Hizmetler sayfası
│   ├── packages/page.tsx  # Paketler sayfası
│   ├── about/page.tsx     # Hakkımızda sayfası
│   └── contact/page.tsx   # İletişim sayfası
├── components/
│   ├── Header.tsx         # Navigasyon ve tema toggle
│   └── Footer.tsx         # Alt bilgi bölümü
└── providers/
    └── ThemeProvider.tsx  # Dark/Light mode yönetimi
```

## Tema Sistemi

- **Karanlık Tema**: Siyah (#0a0a0a) + Altın Accent (#d4af37)
- **Aydınlık Tema**: Beyaz (#ffffff) + Mor Accent (#8b5cf6)
- localStorage'da kullanıcı tercihi kaydedilir
- Sistem tema tercihine otomatik fallback

## Temel Özellikler

✅ Responsive design (mobile-first)
✅ Dark/Light mode toggle
✅ TypeScript ile tip güvenliği
✅ Tailwind CSS ile styling
✅ SEO optimized metadata
✅ Contact form (frontend)
✅ Accessible navigation
✅ Fast performance (Next.js)

## Sayfa İçeriği

1. **Ana Sayfa**: Hero, hizmet özeti, avantajlar, CTA
2. **Hizmetler**: 6 hizmet kartı detaylı açıklamalarla
3. **Paketler**: 3 paket seçeneği, fiyatlandırma, SSS
4. **Hakkımızda**: Vizyon, misyon, prensiplik, yaklaşım
5. **İletişim**: Form, bilgiler, SSS, sosyal linkler

## Geliştirme Kuralları

- Tüm yeni bileşenler TypeScript'te yazılmalı
- Tailwind CSS kullanarak stil verin
- Responsive design'ı her zaman kontrol edin
- Dark mode uyumluluğunu sağlayın
- Accessibility en iyi uygulamaları takip edin
- Componentleri küçük ve yeniden kullanılabilir tutun

## Önemli Dosyalar

- `tailwind.config.ts` - Renk paletı ve tema
- `src/providers/ThemeProvider.tsx` - Tema mantığı
- `src/app/globals.css` - Global stiller
- `src/components/Header.tsx` - Navigasyon
- `src/components/Footer.tsx` - Alt bilgi

## Düzenleme Noktaları

İçeriği güncellemek için:
- Sayfaları `src/app/[page]/page.tsx` dosyalarında düzenleyin
- İletişim bilgisini `src/components/Footer.tsx` ve `src/app/contact/page.tsx` dosyalarında güncelleyin
- Renkleri `tailwind.config.ts` ve `src/app/globals.css` dosyalarında değiştirin

## Çalıştırma

```bash
npm run dev        # Development
npm run build      # Production build
npm run start      # Production start
npm run lint       # ESLint check
```

## Sonraki Adımlar

- [ ] Email API entegrasyonu
- [ ] Blog bölümü
- [ ] Portfolio/Portfolyo sayfası
- [ ] Analytics setup
- [ ] Meta tag optimizasyonu
- [ ] Sitemap.xml
- [ ] robots.txt
