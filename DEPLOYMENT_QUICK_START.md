# 🚀 NOVERA AGENCY - YAYINA ÇIKMA ÖZET

## KÜLÇÜk ADIMLAR

### 1. Google Forms Oluştur (5 dakika)
```
✅ https://forms.google.com açınız
✅ Form ID'sini alınız (URL'de var)
✅ Entry ID'lerini alsınız (F12 console'da)
✅ src/app/contact/page.tsx'te değerler güncelleyin
```

### 2. GitHub'a Push (2 dakika)
```bash
git add .
git commit -m "Deployment ready"
git push origin main
```

### 3. Vercel'e Deploy (1 dakika)
```
✅ vercel.com açınız
✅ GitHub repo seçiniz
✅ Deploy! ✨
```

### 4. Domain Bağla (5 dakika)
```
✅ noveragency.net satınız
✅ Nameservers Vercel'e ayarlayınız
✅ 24-48 saat bekleyiniz
```

**TOTAL: ~15 dakika!** 🎉

---

## QUICK REFERENCE

| Görev | Zaman | Zorluk |
|-------|-------|--------|
| Google Forms Setup | 5 min | ⭐ Çok Kolay |
| GitHub Push | 2 min | ⭐ Çok Kolay |
| Vercel Deploy | 1 min | ⭐ Çok Kolay |
| Domain Setup | 5 min | ⭐⭐ Kolay |
| **TOTAL** | **~15 min** | **Çok Kolay** |

---

## GOOGLE FORMS ENTRY ID'LERİ BULMAK

### Yöntem 1: F12 Console (Kolay)
```javascript
// Google Forms sayfasında F12 → Console:
document.querySelectorAll('[name^="entry"]').forEach(el => {
  console.log(`${el.previousElementSibling?.textContent}: ${el.name}`);
});
```

### Yöntem 2: Manuel (Hard-core)
```
Form View'dan Inspect Element yapın
name="entry.XXXXXXXXXXXX" bul
Her field için bunu yap
```

---

## FORM FIELD MAPPING

| Site Form | Google Forms | Entry ID |
|-----------|-------------|----------|
| Adınız | Adınız (Kısa yanıt) | entry.123... |
| Email | Email (Kısa yanıt) | entry.456... |
| Telefon | Telefon (Kısa yanıt) | entry.789... |
| Konu | Konu (Açılır liste) | entry.101... |
| Mesaj | Mesaj (Uzun yanıt) | entry.121... |

---

## FILE UPDATES YAPILDI

```
✅ src/app/contact/page.tsx - Google Forms integration
✅ src/app/api/contact/route.ts - Backend route
✅ .env.example - Environment variables
✅ DEPLOYMENT_GUIDE.md - Full deployment guide
```

---

## TESTING CHECKLIST

```bash
# Local test
npm run dev
# http://localhost:3000 açın

# Form test
□ Form doldur
□ Submit button'a tıkla
□ Success message görünür mü?
□ Google Forms'da veri var mı?

# Vercel deploy test
□ Build success?
□ Site erişiliyor mu?
□ Form çalışıyor mu?

# Domain test
□ noveragency.net açılıyor mu?
□ SSL çalışıyor mu?
□ Form çalışıyor mu?
```

---

## NEXT STEPS (İleride)

| Feature | Zorluk | Zaman |
|---------|--------|-------|
| Email Notifications | ⭐⭐ Kolay | 30 min |
| Analytics | ⭐ Çok Kolay | 10 min |
| SMS Alerts | ⭐⭐⭐ Orta | 1 saat |
| Blog | ⭐⭐⭐ Orta | 2 saat |
| E-commerce | ⭐⭐⭐⭐ Hard | 1 gün |

---

## SUPPORT

**İhtiyacında yardım?** DEPLOYMENT_GUIDE.md'yi oku!

Herhangi soru? Problemi oldu? Direkt sor! 👨‍💻

---

**Made with ❤️ by Novera Agency**
