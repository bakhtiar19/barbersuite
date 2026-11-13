import React from "react";
import Link from "next/link";
import { Scissors, Mail, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#181614] border-t border-amber-950/40 text-stone-400 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-stone-950 font-black shadow-sm">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <span className="text-base font-black text-white font-serif tracking-tight">
                Barber <span className="text-amber-500 font-sans font-black">Suite</span>
              </span>
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-normal">
              Aplikasi kasir praktis khusus barbershop & salon pria. Tanpa sewa bulanan, tetap lancar tanpa internet, dan bagi hasil kapster dihitung otomatis.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Barber Suite by Kriakarya 2026</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#preview" className="hover:text-amber-400 transition-colors">
                  Tampilan Aplikasi
                </a>
              </li>
              <li>
                <a href="#komparasi" className="hover:text-amber-400 transition-colors">
                  Perbandingan vs Software Lain
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-amber-400 transition-colors">
                  Cerita Pemilik Barbershop
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">
              Kontak & Bantuan
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li className="flex items-center gap-2 text-stone-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Lisensi Permanen Sekali Bayar</span>
              </li>
              <li>
                <a
                  href="mailto:kriakarya@gmail.com"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>Email: kriakarya@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kriakarya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Globe className="w-4 h-4 text-amber-500" />
                  <span>Instagram: @kriakarya</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© 2026 Barber Suite by Kriakarya. Hak cipta dilindungi.</p>
          <p className="font-medium text-stone-400">Dukungan Pembayaran: QRIS, BCA, Mandiri, BRI, BNI, GoPay, OVO, ShopeePay, DANA</p>
        </div>
      </div>
    </footer>
  );
}
