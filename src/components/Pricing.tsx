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
  "Kasir Digital Cepat & Praktis",
  "Laporan Omset & Bagi Hasil Kapster",
  "Database Pelanggan & Riwayat Cukur",
  "Kontrol Stok Pomade & Produk",
  "Manajemen Antrean & Jadwal Kapster",
  "Mendukung Pembayaran QRIS & Tunai",
  "Gratis Update Fitur Selamanya",
  "Bantuan Konsultasi via WhatsApp",
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
      "Halo Admin POS Barbershop! Saya ingin membeli Lifetime License seharga Rp 50.000. Mohon info rekening pembayarannya."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="harga" className="py-24 bg-slate-50 border-y border-slate-200/70">
      <div id="pricing" className="scroll-mt-24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>PENAWARAN TERBATAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Investasi Sekali, Nikmati Selamanya
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Tanpa langganan bulanan. Cuma Rp 50.000 untuk lisensi seumur hidup.
          </p>
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-3xl border-2 border-amber-400 p-8 sm:p-12 shadow-xl max-w-lg mx-auto"
        >
          {/* Top Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wide shadow-md">
              <span>🔥 DISKON 67% HARI INI</span>
            </span>
          </div>

          {/* Title & Plan */}
          <div className="text-center pt-2 pb-6 border-b border-slate-100">
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
              Lifetime License
            </span>

            <h3 className="text-2xl font-black text-slate-900 mt-2">
              POS Barbershop
            </h3>

            {/* Price display */}
            <div className="mt-5 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 line-through text-base font-semibold">
                  Rp 150.000
                </span>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  Hemat Rp 100.000
                </span>
              </div>

              <div className="mt-1 text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                Rp 50.000
              </div>

              <span className="mt-1 text-xs sm:text-sm font-semibold text-emerald-700">
                ✓ Sekali bayar, aktif selamanya tanpa biaya bulanan
              </span>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="py-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              Semua Fitur Sudah Termasuk:
            </p>

            <ul className="space-y-3">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-800 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handlePayment}
              className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-base flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Beli Sekarang — Rp 50.000</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-800 text-center">
              <Clock className="w-3.5 h-3.5" />
              <span>Harga promo dapat berubah sewaktu-waktu</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garansi 7 hari uang kembali jika tidak puas</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <div className="flex items-center justify-center gap-1 text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
              <Lock className="w-3 h-3" />
              <span>Mendukung Pembayaran Aman:</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {PAYMENT_METHODS.join(" • ")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
