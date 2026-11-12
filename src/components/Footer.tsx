import React from "react";
import Link from "next/link";
import { Scissors, MessageCircle, Mail, Globe } from "lucide-react";

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"; // TODO: Ganti nomor WA

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
                POS <span className="text-amber-700">Barbershop</span>
              </span>
            </Link>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm font-normal">
              Solusi sistem kasir digital Android tanpa langganan bulanan.
              Dirancang untuk memajukan barbershop, salon, dan pangkas rambut di Indonesia.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#fitur" className="hover:text-amber-700 transition-colors">
                  Fitur Kasir
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-amber-700 transition-colors">
                  Tampilan Antarmuka
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-700 transition-colors">
                  Harga Lisensi (Rp 50.000)
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-amber-700 transition-colors">
                  Testimoni Pelanggan
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
              Kontak Layanan
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-700 transition-colors text-stone-800 font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +{whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@posbarbershop.com" // TODO: Ganti email
                  className="flex items-center gap-2 hover:text-stone-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-stone-500" />
                  <span>Email: support@posbarbershop.com</span>
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
                  <span>Instagram: @posbarbershop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© 2025 POS Barbershop. Hak cipta dilindungi.</p>
          <p className="font-medium">Mendukung QRIS, BCA, Mandiri, BRI, BNI, GoPay, OVO, ShopeePay, DANA</p>
        </div>
      </div>
    </footer>
  );
}
