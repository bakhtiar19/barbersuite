# 🚀 Panduan Deploy Barber Suite ke Berbagai Hosting

Project ini telah dikonfigurasi agar **bisa dideploy di jenis hosting apa pun** (cPanel/Shared Hosting, VPS/Node.js, maupun Cloud Hosting modern).

---

## 📁 Opsi 1: cPanel / Shared Hosting Biasa (Paling Mudah & Populer)

Cocok untuk hosting biasa seperti **Niagahoster, Hostinger, DomaiNesia, IDCloudHost, Rumahweb**, dll.

### Langkah-langkah:
1. **Build Static Export:**
   Di terminal lokal, jalankan perintah:
   ```bash
   npm run export
   ```
   Perintah ini akan membuat folder `./out` yang berisi file HTML, CSS, JavaScript, gambar, dan `.htaccess`.

2. **Kompres Jadi ZIP:**
   Kompres semua isi di dalam folder `./out` menjadi file ZIP (misalnya `barbersuite-cpanel-ready.zip`).
   *(Catatan: pastikan mengompres **isi di dalam** folder `out`, bukan folder `out`-nya).*

3. **Upload ke cPanel:**
   * Login ke cPanel hosting Anda.
   * Buka menu **File Manager** $\rightarrow$ masuk ke folder **`public_html`** (atau folder subdomain Anda).
   * Klik tombol **Upload**, lalu upload file ZIP tersebut.
   * Klik kanan pada file ZIP $\rightarrow$ pilih **Extract**.
   * Pastikan file `index.html` dan `.htaccess` berada langsung di dalam `public_html`.
   * **Selesai!** Website Anda langsung live dan semua link checkout Lynk.id berfungsi 100%.

> [!NOTE]
> File `.htaccess` sudah otomatis disertakan untuk mengatur kompresi Gzip, caching browser, clean URLs, dan keamanan.

---

## ⚡ Opsi 2: Cloud Hosting Gratis (Vercel / Netlify / Cloudflare Pages)

Jika teman Anda ingin deploy otomatis menggunakan repository GitHub:

### Menggunakan Vercel (Rekomendasi 1-Klik Gratis):
1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub.
2. Klik **Add New...** $\rightarrow$ **Project**.
3. Import repository: `https://github.com/bakhtiar19/barbersuite`.
4. Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
5. Klik **Deploy**. Selesai dalam 1 menit dengan free SSL dan CDN global.

### Menggunakan Netlify:
1. Buka [netlify.com](https://netlify.com) $\rightarrow$ **Add new site** $\rightarrow$ **Import an existing project** $\rightarrow$ GitHub.
2. Pilih repo `bakhtiar19/barbersuite`.
3. Klik **Deploy barbersuite**. Konfigurasi `netlify.toml` sudah tersedia.

---

## 🖥️ Opsi 3: VPS / Node.js Server / cPanel "Setup Node.js App"

Jika hosting teman Anda mendukung Node.js server:

1. **Clone repository:**
   ```bash
   git clone https://github.com/bakhtiar19/barbersuite.git
   cd barbersuite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build:**
   ```bash
   npm run build
   ```

4. **Jalankan:**
   * Menggunakan npm:
     ```bash
     npm start
     ```
   * Menggunakan PM2 (Process Manager):
     ```bash
     pm2 start npm --name "barbersuite" -- start
     pm2 save
     ```
   Website akan aktif di port 3000 (bisa di-reverse proxy menggunakan Nginx/Apache).

---

## 🔧 File Konfigurasi Penting:
* `src/config/site.ts`: Mengatur URL tombol checkout (default: `https://lynk.id/kriakarya/602rzv9v0637/checkout`).
* `public/.htaccess`: Konfigurasi server Apache/LiteSpeed di cPanel.
* `scripts/export.js`: Script otomatis untuk membuat static HTML export.
