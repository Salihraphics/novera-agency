# 📝 DEPLOYMENT ÖZETİ - NOVERA AGENCY

## ✅ YAPILAN İŞLER

### Code Modifications
- ✅ Google Forms entegrasyonu eklendi (`contact/page.tsx`)
- ✅ Backend API route oluşturdu (`api/contact/route.ts`)
- ✅ Environment variables yapısı hazırlandı (`.env.example`)
- ✅ Deployment guides hazırlandı

### Documentation
- ✅ `DEPLOYMENT_GUIDE.md` - Detaylı rehber
- ✅ `DEPLOYMENT_QUICK_START.md` - Hızlı başlangıç
- ✅ README.md güncellendi

---

## 🎯 YAPMAN GEREKENLER (SIRASIYA)

### 1️⃣ GOOGLE FORMS OLUŞTUR (5 dakika)

#### Adımlar:
```
1. https://forms.google.com açınız
2. "+" → Yeni form oluştur
3. Başlık: "Novera İletişim Formu"
4. Şu alanları ekleyin:
   - Adınız (Kısa yanıt)
   - Email (Kısa yanıt)  
   - Telefon Numarası (Kısa yanıt)
   - Konu (Açılır liste veya Birden fazla seçim)
   - Mesajınız (Uzun yanıt)
5. Form linkini alınız
```

#### Form ID Almak:
```
Form linkinde: https://docs.google.com/forms/d/1ABC123XYZ/viewform
Form ID = 1ABC123XYZ
```

#### Entry ID'lerini Almak:
```
1. Form sayfasında F12 basınız
2. Console'da şunu çalıştırınız (birini deneyin):

   // YÖNTEM 1:
   document.querySelectorAll('[name^="entry"]').forEach(el => console.log(el.name));
   
   // YÖNTEM 2 (Eğer YÖNTEM 1 çalışmazsa):
   Array.from(document.querySelectorAll('[name^="entry"]')).map(el => el.name).forEach(name => console.log(name));
   
   // YÖNTEM 3 (Manuel - F12'de Inspect açarak):
   // Sağ Tıkla → Inspect → name="entry.XXXX" ara
```

#### Örnek Output:
```
entry.1234567890
entry.1234567891
entry.1234567892
entry.1234567893
entry.1234567894
```

**Bu entry ID'lerini şu sıraya koy:**
- 1. entry ID → name
- 2. entry ID → email
- 3. entry ID → phone
- 4. entry ID → subject
- 5. entry ID → message

---

### 2️⃣ KOD GÜNCELLEMESI (2 dakika)

#### File: `src/app/contact/page.tsx`

Satır ~29'da bul:
```typescript
const GOOGLE_FORM_ID = 'YOUR_GOOGLE_FORM_ID_HERE';
```

Şu şekilde değiştir:
```typescript
const GOOGLE_FORM_ID = '1ABC123XYZ'; // Senin form ID'sini koy
```

Satır ~32'de bul:
```typescript
const FORM_FIELDS = {
  name: 'entry.1234567890',
  email: 'entry.1234567891',
  phone: 'entry.1234567892',
  subject: 'entry.1234567893',
  message: 'entry.1234567894',
};
```

Senin entry ID'lerini koy:
```typescript
const FORM_FIELDS = {
  name: 'entry.YOUR_NAME_ID',      // Aldığın entry ID
  email: 'entry.YOUR_EMAIL_ID',    // Aldığın entry ID
  phone: 'entry.YOUR_PHONE_ID',    // Aldığın entry ID
  subject: 'entry.YOUR_SUBJECT_ID', // Aldığın entry ID
  message: 'entry.YOUR_MESSAGE_ID', // Aldığın entry ID
};
```

---

### 3️⃣ GITHUB'A PUSH ET (2 dakika)

```bash
# Terminal'de çalıştır
cd ~/Documents/novera
git add .
git commit -m "Add Google Forms integration - ready for production"
git push origin main
```

---

### 4️⃣ VERCEL'E DEPLOY ET (1 dakika)

**SEÇENEK A: CLI ile (EN KOLAY)**
```bash
npm install -g vercel
vercel
# Prompts takip et → Deploy!
```

**SEÇENEK B: Web'den**
1. https://vercel.com açınız
2. "Add New" → "Project"
3. GitHub repo seçiniz (novera-agency)
4. "Deploy" button'a tıklayınız
5. Bekleme... ✨

**URL alacaksın:** https://novera-agency-yourname.vercel.app

---

### 5️⃣ DOMAIN AYARLA (5 dakika + 24-48 saat DNS)

#### Google Domains'te:
```
1. Google Domains → Satın Al → noveragency.net
2. DNS Ayarları → Nameservers
3. Custom nameservers ekle:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
4. Kaydet
5. 24-48 saat bekle
```

#### Vercel'de:
```
1. Vercel Dashboard
2. Project → Settings → Domains
3. "Add Domain" → noveragency.net
4. Otomatik bağlanacak
```

---

### 6️⃣ TEST ET (5 dakika)

#### Local Test:
```bash
npm run dev
# http://localhost:3000 açınız
```

Checklist:
- [ ] Site açılıyor mu?
- [ ] Form doldur
- [ ] Submit button'a tıkla
- [ ] Success message görünüyor mu?
- [ ] Google Forms'da veri var mı?

#### Canlı Test:
```
1. https://noveragency.net açınız
2. Form doldur
3. Submit et
4. Google Forms'da kontrol et
```

---

## 🔧 ENVIRONMENT SETUP (İsteğe Bağlı)

### .env.local Oluştur:
```bash
# Proje kök klasöründe
cp .env.example .env.local
```

Düzenle:
```env
NEXT_PUBLIC_GOOGLE_FORM_ID=1ABC123XYZ
NEXT_PUBLIC_SITE_URL=https://noveragency.net
NEXT_PUBLIC_CONTACT_EMAIL=info@noveragency.net
```

---

## 📞 GOOGLE FORMS NOTIFICATIONS (OPSİYONEL)

### Email Bildirimleri Al:
```
1. Google Forms → Ayarlar ⚙️
2. "Yanıtlar" tab'ında
3. "E-posta özeti al" → Enable
4. Frekans: Günde 1 kez veya hemen
5. Email adres gir
```

### Veya Google Sheets'e Otomatik Kaydet:
```
1. Form Ayarları
2. "Cevapları Google Sheets'te göster"
3. Yeni sheet oluştur
4. Otomatik doldurulacak
```

---

## 🌐 DOMAIN SATINLAMA

### Seçenekler:
1. **Google Domains** (EN KOLAY)
   - Vercel ile direkt entegrasyon
   - $12/yıl
   
2. **Namecheap**
   - Daha ucuz (~$8/yıl)
   - Manual DNS setup
   
3. **GoDaddy**
   - Ünlü ama karmaşık
   - Canlı destek var

**Recommendation:** Google Domains kullan!

---

## 📊 FINAL CHECKLIST

```
SETUP:
☐ Google Forms oluşturdum
☐ Form ID aldım
☐ Entry ID'lerini aldım
☐ Code güncelledim

DEPLOYMENT:
☐ GitHub'a push ettim
☐ Vercel'e deploy ettim
☐ URL aldım (vercel.app)
☐ Local test yaptım

DOMAIN:
☐ Domain satın aldım (noveragency.net)
☐ Nameservers ayarladım
☐ 24-48 saat bekledim
☐ Canlı sitede test yaptım

VERIFICATION:
☐ Site açılıyor
☐ Form çalışıyor
☐ Google Forms'a veri gidiyor
☐ HTTPS/SSL çalışıyor
```

---

## 🆘 TROUBLESHOOTING

### Domain açılmıyor
```bash
# Terminal'de DNS check
nslookup noveragency.net
# Sonucun ns1.vercel-dns.com göstermesi gerekir
```

### Form veri almıyor
- [ ] Form ID doğru mu?
- [ ] Entry ID'ler doğru mu?
- [ ] Google Forms açık mı?
- [ ] Browser console'da hata var mı?

### Vercel build hatası
```bash
npm run build  # Local'de test et
git push       # Push et
vercel        # Veya manual deploy et
```

---

## 🎉 BAŞARIYLA TAMAMLADIĞINDE

```
https://noveragency.net açınız
Sitede form doldur ve gönder
Google Forms'da veri görün
Kutlama 🎊
```

---

## 📚 EK KAYNAKLAR

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detaylı rehber
- [Vercel Docs](https://vercel.com/docs)
- [Google Forms API](https://developers.google.com/forms)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Herhangi sorun? DM at! 👨‍💻**

Last Updated: 2026-01-18
Status: ✅ Production Ready
