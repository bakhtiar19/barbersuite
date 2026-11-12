import { Scissors, MessageCircle, Mail, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-neutral-900 overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black shadow-lg shadow-amber-500/20">
                <Scissors className="w-5 h-5 text-neutral-950" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  POS <span className="text-amber-400">BARBERSHOP</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                  Sistem Kasir Modern
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Aplikasi kasir digital #1 untuk barbershop & salon di Indonesia. Dirancang khusus untuk mempermudah operasional harian, bagi hasil capster, dan pencatatan omset tanpa ribet.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Offline-ready • 100% Aman & Terpercaya</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500/80">›</span> Fitur Utama
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500/80">›</span> Preview Tampilan
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500/80">›</span> Paket Harga
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500/80">›</span> Testimoni Barbershop
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500/80">›</span> FAQ (Tanya Jawab)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Hubungi Kami
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Punya pertanyaan seputar produk atau butuh demo? Hubungi kami langsung melalui saluran resmi di bawah ini:
            </p>

            <ul className="space-y-3 text-sm">
              <li>
                {/* TODO: Ganti nomor WA */}
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20tanya%20tentang%20POS%20Barbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">WhatsApp Official</span>
                    <span className="font-semibold">+62 812-3456-7890</span>
                  </div>
                </a>
              </li>

              <li>
                {/* TODO: Ganti email */}
                <a
                  href="mailto:support@posbarbershop.com"
                  className="group flex items-center gap-3 text-neutral-300 hover:text-blue-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Email Support</span>
                    <span className="font-semibold">support@posbarbershop.com</span>
                  </div>
                </a>
              </li>

              <li>
                {/* TODO: Ganti Instagram */}
                <a
                  href="https://instagram.com/posbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-neutral-300 hover:text-pink-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Instagram</span>
                    <span className="font-semibold">@posbarbershop</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-800/80 my-8" />

        {/* Payment Methods Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center md:text-left mb-6">
          <span className="font-semibold text-neutral-300">
            Metode Pembayaran Yang Didukung:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">QRIS</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">BCA</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">Mandiri</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">BRI</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">BNI</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">GoPay</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">OVO</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">DANA</span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">ShopeePay</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>© 2025 POS Barbershop. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Dibuat untuk memajukan barbershop & salon lokal Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
