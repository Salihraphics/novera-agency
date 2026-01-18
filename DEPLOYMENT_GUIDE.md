# 🚀 NOVERA AGENCY - DEPLOYMENT REHBERI

## 📋 ADIM ADIM YAYINA ÇIKMA

### **AŞAMA 1: GOOGLE FORMS ENTEGRASYONU** ✅

#### 1.1 Google Forms Oluştur
1. [Google Forms](https://forms.google.com) açınız
2. Yeni form oluşturun: "Novera İletişim Formu"
3. Şu alanları ekleyin:
   - **Adınız** (Kısa yanıt)
   - **Email** (Kısa yanıt)
   - **Telefon Numarası** (Kısa yanıt)
   - **Konu** (Birden fazla seçim veya açılır liste)
   - **Mesajınız** (Uzun yanıt)

#### 1.2 Form ID ve Entry ID'lerini Al
1. Form sayfasını "Cevaplar" sekmesinden açın
2. Sağ üstteki "3 nokta" → "Yanıtları Google Sheets'te göster"
3. Sheets'i açın, görmek için F12 → Console
4. Aşağıdaki kodu çalıştırın:
```javascript
// YÖNTEM 1: Otomatik (Eğer çalışırsa)
document.querySelectorAll('[name^="entry"]').forEach(el => {
  console.log(`${el.name}`);
});

// YÖNTEM 2: Manuel (Eğer YÖNTEM 1 çalışmazsa)
// Inspect Element (F12) aç → Sağ Tıkla → Copy
// name="entry.XXXXXXXXXXXX" bul
// Herbir input field için bunu yap
```

**EĞER YÖNTEM 1 "undefined" DIYORSA:**

Şu kodu kullanınız:
```javascript
// YÖNTEM 3: Daha güvenilir yol
let entries = {};
document.querySelectorAll('[name^="entry"]').forEach(el => {
  entries[el.name] = el;
});
console.table(entries);
// Veya sadece name'leri listele:
Array.from(document.querySelectorAll('[name^="entry"]')).map(el => el.name).forEach(name => console.log(name));
```

**EĞER BUNLAR DA ÇALIŞMAZSA - MANUEL YÖNTEM:**
```
1. Form'ı F12 ile inspect et (Sağ Tıkla → Inspect)
2. name="entry.XXXXXXXXXXXX" ara
3. Her input field için bunu not et:
   - Adınız field → entry.123456
   - Email field → entry.234567
   - vb.
4. Tüm entry ID'lerini topla
```

#### 1.3 Kodu Güncelle
`src/app/contact/page.tsx` dosyasında:
```typescript
const GOOGLE_FORM_ID = 'YOUR_FORM_ID'; // https://forms.google.com/d/e/FORM_ID/viewform
const FORM_FIELDS = {
  name: 'entry.1234567890',      // Adınız entry ID'si
  email: 'entry.1234567891',     // Email entry ID'si
  phone: 'entry.1234567892',     // Telefon entry ID'si
  subject: 'entry.1234567893',   // Konu entry ID'si
  message: 'entry.1234567894',   // Mesaj entry ID'si
};
```

---

### **AŞAMA 2: VERCEL'E DEPLOY ETME** (RECOMMENDED)

#### 2.1 GitHub'a Push Et
```bash
git init
git add .
git commit -m "Initial commit - Novera Agency"
git remote add origin https://github.com/YOUR_USERNAME/novera-agency.git
git branch -M main
git push -u origin main
```

#### 2.2 Vercel'e Bağla
1. [Vercel.com](https://vercel.com) → Sign up (GitHub ile)
2. "Add New Project" → GitHub repo seç
3. Framework: **Next.js**
4. Deploy! ✨

#### 2.3 Domain Bağla
1. Vercel Dashboard → Settings → Domains
2. "Add Domain" → `noveragency.net` yazın
3. Nameserver'ları güncelle (domain sağlayıcında):
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
4. 24-48 saat bekle (DNS propagation)

**VEYA**

```bash
# Vercel CLI ile deploy et
npm i -g vercel
vercel
# Prompts takip et
```

---

### **AŞAMA 3: GOOGLE CLOUD'A DEPLOY ETME** (İSTEĞE BAĞLI)

#### 3.1 Cloud Run'a Deploy Et
```bash
# Cloud SDK yükle
curl https://sdk.cloud.google.com | bash

# Google Cloud'a giriş yap
gcloud auth login

# Project oluştur
gcloud projects create novera-agency --name="Novera Agency"

# Dockerfile oluştur (mevcut yoksa)
echo 'FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]' > Dockerfile

# Deploy et
gcloud run deploy novera-agency \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### 3.2 Domain Bağla (Google Cloud)
1. Google Domains → DNS → Custom Records
2. CNAME record ekle:
   - Name: `www`
   - Value: `ghs.googledomains.com`

---

### **AŞAMA 4: CUSTOM DOMAIN AYARI** 🌐

#### Option A: Vercel (EN KOLAY)
```
Vercel Dashboard → Settings → Domains → Add Domain
Domain: noveragency.net
Nameservers otomatik güncellenir
```

#### Option B: Google Domains
1. [Google Domains](https://domains.google.com) → Sign in
2. `noveragency.net` ara ve satın al
3. DNS Ayarları:
   - **A Record:**
     - Name: `@`
     - Type: A
     - Value: `76.76.19.165` (Vercel IP)
   - **CNAME Record:**
     - Name: `www`
     - Type: CNAME
     - Value: `cname.vercel-dns.com`

#### Option C: Namecheap, GoDaddy vb.
1. Domain satın al
2. Nameservers'ı Vercel'de göster şekilde ayarla

---

### **AŞAMA 5: ENVIRONMENT VARİABLERLERİ**

#### .env.local Oluştur
```env
# Production URLs
NEXT_PUBLIC_SITE_URL=https://noveragency.net
NEXT_PUBLIC_GOOGLE_FORM_ID=your_google_form_id_here

# Email (isteğe bağlı)
NEXT_PUBLIC_CONTACT_EMAIL=info@noveragency.net
```

#### Vercel Dashboard'a Ekle
Settings → Environment Variables
- `NEXT_PUBLIC_GOOGLE_FORM_ID` = `YOUR_FORM_ID`

---

### **AŞAMA 6: EMAIL BİLDİRİMLERİ** (OPSİYONEL)

#### Google Sheets Notification Kurması
1. Google Forms → Ayarlar → Bildirimler
2. "E-posta özeti al" seç
3. Frekans: Günde 1 kez

**VEYA**

#### SendGrid / Mailgun API
```bash
npm install nodemailer
```

`src/app/api/contact/route.ts` oluştur:
```typescript
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'info@noveragency.net',
    subject: 'Yeni İletişim İsteği',
    text: message,
  });

  return Response.json({ success: true });
}
```

---

### **AŞAMA 7: SEO & META TAGS**

#### sitemap.xml Ekle
`public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://noveragency.net</loc>
    <lastmod>2026-01-18</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://noveragency.net/services</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://noveragency.net/packages</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://noveragency.net/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noveragency.net/contact</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

#### robots.txt Ekle
`public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://noveragency.net/sitemap.xml
```

---

### **AŞAMA 8: ANALYTICS & MONITORING**

#### Google Analytics
1. [Google Analytics](https://analytics.google.com) → Yeni Property
2. Web sitesi seç → noveragency.net
3. Tracking code'u al
4. `src/app/layout.tsx`'e ekle:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Vercel Analytics
Otomatik olur. Settings → Integrations → Enable Web Vitals

---

### **AŞAMA 9: SSL/HTTPS**

✅ Otomatik! Vercel ve Google Cloud otomatik SSL sertifikası veriyor.

Kontrol:
```bash
# Terminal'de
curl -I https://noveragency.net
# HTTP/2 200 görmelisiniz
```

---

### **AŞAMA 10: PERFORMANS OPTİMİZASYONU**

#### next.config.ts Güncelle
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
```

#### Lighthouse Test
1. Chrome DevTools → Lighthouse
2. Mobile test çalıştır
3. Performance > 90 hedef

---

## 📊 DEPLOYMENT CHECKLIST

- [ ] Google Forms oluşturdum
- [ ] Form ID ve Entry ID'lerini aldım
- [ ] `contact/page.tsx`'i güncelledim
- [ ] GitHub'a push ettim
- [ ] Vercel'e bağladım
- [ ] Domain ayarladım
- [ ] SSL çalışıyor
- [ ] Sitemap ve robots.txt ekledim
- [ ] Google Analytics kurdum
- [ ] Email notifications'ı test ettim
- [ ] Lighthouse test: 90+ puanı aldım

---

## 🆘 TROUBLESHOOTING

### Domain gösterilmiyor
```bash
# DNS kontrol et
nslookup noveragency.net
# veya
dig noveragency.net
```

### Google Forms veri almıyor
- Form ID ve Entry ID'leri kontrol et
- Browser Console'da hata var mı kontrol et
- Form'ın "Yanıtları kabul et" ayarı açık mı?

### Vercel build hatası
```bash
npm run build
# Local'de çalışırsa, Vercel'e push et
```

---

## 🎉 TAMAMLANINCA

```bash
# Final test
npm run build
npm run start
# http://localhost:3000 açıp kontrol et

# Canlı sitede test
# https://noveragency.net açıp kontrol et
```

---

**Sorular? İhtiyacında code help? Hemen söyle!** 🚀
