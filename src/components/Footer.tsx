import React from "react";
import Link from "next/link";
import { Scissors, MessageCircle, Mail, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282145773753";

  return (
    <footer className="bg-[#f5f2eb] border-t border-stone-200 text-stone-600 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-300/80">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-black">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <span className="text-base font-black text-stone-900">
                Barber <span className="text-amber-700">Suite</span>
              </span>
            </Link>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm font-normal">
              Aplikasi kasir digital barbershop & salon modern tanpa biaya langganan bulanan.
              Didukung mesin SQLite offline-first, ekspor laporan PDF/Excel, dan integrasi WhatsApp.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Barber Suite v4.2.0 by Kriakarya 2026</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#fitur" className="hover:text-amber-700 transition-colors">
                  Fitur Utama
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-amber-700 transition-colors">
                  Tampilan Asli Aplikasi
                </a>
              </li>
              <li>
                <a href="#komparasi" className="hover:text-amber-700 transition-colors">
                  Perbandingan vs Moka POS
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-700 transition-colors">
                  Harga Lisensi (Rp 50.000 Sekali Bayar)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-700 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">
              Bantuan & Layanan
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li className="flex items-center gap-2 text-stone-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Lisensi Seumur Hidup (Beli Putus)</span>
              </li>
              <li>
                <a
                  href="mailto:support@barbersuite.com" // TODO: Ganti email
                  className="flex items-center gap-2 hover:text-stone-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-stone-500" />
                  <span>Email: support@barbersuite.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com" // TODO: Ganti Instagram
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-800 transition-colors"
                >
                  <Globe className="w-4 h-4 text-stone-500" />
                  <span>Instagram: @barbersuite.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© 2026 Barber Suite by Kriakarya. Hak cipta dilindungi.</p>
          <p className="font-medium">Mendukung QRIS, BCA, Mandiri, BRI, BNI, GoPay, OVO, ShopeePay, DANA</p>
        </div>
      </div>
    </footer>
  );
}
