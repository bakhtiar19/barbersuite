"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890"; // TODO: Ganti nomor WA

const FEATURES = [
  "Aplikasi Android Barber Suite Pro v4.2.0 Lengkap",
  "Kasir Kilat dengan Durasi Pengerjaan (30m, 45m, 60m, 90m)",
  "Laporan Keuangan dengan Ekspor PDF & Excel CSV (UTF-8 BOM)",
  "Perhitungan Komisi & Omset per Barber Otomatis",
  "CRM Pelanggan & Filter Cerdas (Belum Berkunjung >30 Hari)",
  "Template Pesan Follow-Up WhatsApp Dinamis",
  "100% Offline-First Engine (SQLite Lokal, Bebas Internet)",
  "Sistem Backup Data .bms dengan Checksum SHA-256",
  "Fitur Pengaman PIN Aplikasi & Footer Struk Kustom",
  "Dukungan Cetak Struk Printer Thermal Bluetooth 58mm/80mm",
  "Gratis Update Fitur Selamanya Tanpa Biaya Tambahan",
  "Bantuan Teknis & Panduan Instalasi via WhatsApp",
];

const PAYMENT_METHODS = [
  "BCA",
  "Mandiri",
  "BRI",
  "BNI",
  "GoPay",
  "OVO",
  "DANA",
  "ShopeePay",
  "QRIS",
];

interface PricingProps {
  onOpenPayment?: () => void;
}

export default function Pricing({ onOpenPayment }: PricingProps) {
  const handlePayment = () => {
    if (onOpenPayment) {
      onOpenPayment();
      return;
    }

    const message = encodeURIComponent(
      "Halo Admin Barber Suite! Saya ingin membeli Lifetime License seharga Rp 50.000. Mohon info nomor rekening pembayarannya."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="harga" className="py-24 bg-[#f5f2eb] border-y border-stone-200/90">
      <div id="pricing" className="scroll-mt-24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-200 text-amber-950 text-xs font-black mb-3 border border-amber-300">
            <Zap className="w-3.5 h-3.5 text-amber-700" />
            <span>PENAWARAN PELUNCURAN RESMI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Sekali Bayar Rp 50.000, Milik Anda Selamanya
          </h2>

          <p className="mt-4 text-stone-600 text-base">
            Tanpa biaya bulanan Rp 299.000 seperti Moka POS. Lisensi penuh, data lokal aman,
            dan gratis update seumur hidup.
          </p>
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-[32px] border-2 border-amber-400 p-7 sm:p-12 shadow-xl max-w-xl mx-auto overflow-hidden"
        >
          {/* Top Banner Discount Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white font-black text-xs uppercase tracking-wide shadow-md">
              <span>🔥 DISKON 67% — PROMO SPESIAL</span>
            </span>
          </div>

          {/* Title & Product Info */}
          <div className="text-center pt-3 pb-6 border-b border-stone-200">
            <span className="text-xs font-black text-amber-950 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Lifetime License (Android APK)
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-3">
              Barber Suite Pro v4.2.0
            </h3>

            {/* Price Box */}
            <div className="mt-5 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="text-stone-400 line-through text-lg font-bold">
                  Rp 150.000
                </span>
                <span className="text-xs font-black text-red-700 bg-red-100 border border-red-200 px-2.5 py-0.5 rounded-full">
                  Hemat Rp 100.000
                </span>
              </div>

              <div className="mt-1 text-5xl sm:text-6xl font-black text-stone-900 tracking-tight">
                Rp 50.000
              </div>

              <span className="mt-2 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-4 h-4 stroke-[3]" />
                Sekali bayar, pakai seumur hidup tanpa biaya langganan
              </span>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="py-7">
            <p className="text-xs font-black uppercase tracking-wider text-stone-500 mb-4">
              Semua Fitur Premium Sudah Termasuk:
            </p>

            <ul className="space-y-3.5">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-800 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-stone-900 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handlePayment}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all cursor-pointer active:scale-98"
            >
              <Sparkles className="w-5 h-5 text-stone-950" />
              <span>Beli Barber Suite — Rp 50.000</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-900 text-center">
              <Clock className="w-3.5 h-3.5" />
              <span>Harga lisensi Rp 50.000 dapat naik kapan saja</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-stone-700 text-xs text-center font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garansi 7 hari uang kembali 100% jika Anda tidak puas</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-5 border-t border-stone-200 text-center">
            <div className="flex items-center justify-center gap-1 text-stone-400 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Lock className="w-3 h-3" />
              <span>Mendukung Pembayaran Instan & Aman:</span>
            </div>
            <p className="text-xs text-stone-600 font-semibold tracking-wide">
              {PAYMENT_METHODS.join(" • ")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
