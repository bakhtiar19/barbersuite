"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Scissors,
  Users,
  CreditCard,
  PlusCircle,
  ShieldCheck,
  Receipt,
  ArrowRight,
} from "lucide-react";

const TRUST_BADGES = [
  "Sekali bayar, selamanya",
  "Tanpa biaya bulanan",
  "Gratis update",
  "Dipakai 500+ barbershop",
];

const MOCKUP_TRANSACTIONS = [
  {
    name: "Dimas Pratama",
    service: "Haircut + Cuci Rambut",
    price: "Rp 60.000",
    time: "10:24",
    status: "Lunas (QRIS)",
  },
  {
    name: "Rizky Firmansyah",
    service: "Cut & Pomade Styling",
    price: "Rp 75.000",
    time: "10:05",
    status: "Lunas (Tunai)",
  },
  {
    name: "Fajar Maulana",
    service: "Cukur Jenggot & Kumis",
    price: "Rp 40.000",
    time: "09:42",
    status: "Lunas (Transfer)",
  },
];

export default function HeroSection() {
  const whatsappNumber = "6281234567890"; // TODO: Ganti nomor WA
  const whatsappMessage = encodeURIComponent(
    "Halo Admin, saya tertarik dengan aplikasi POS Barbershop (Rp 50.000). Mau tanya info lebih lanjut."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingElement = document.querySelector("#pricing");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Aplikasi Kasir Barbershop & Salon #1</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Barbershop Masih Pakai Nota Kertas?{" "}
              <span className="text-amber-600 underline decoration-amber-400/50 decoration-wavy">
                Saatnya Naik Level.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Kelola kasir, catat omset real-time, dan simpan data pelanggan dengan
              aplikasi kasir digital yang simpel & cepat. Cuma{" "}
              <strong className="text-slate-900 font-bold">Rp 50.000</strong> sekali
              bayar seumur hidup.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm hover:shadow transition-all active:scale-98"
              >
                <span>Beli Sekarang — Cuma Rp 50.000</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600"
            >
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Clean Light Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[340px] rounded-3xl bg-white border border-slate-200 shadow-xl p-4 text-slate-900"
            >
              {/* App Screen Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-bold">
                    <Scissors className="w-4 h-4 -rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">
                      Gentlemen Barbershop
                    </h3>
                    <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Kasir Siap Transaksi
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  Shift Pagi
                </span>
              </div>

              {/* Today Omset Card */}
              <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/60">
                <div className="flex items-center justify-between text-[11px] text-slate-600">
                  <span>Omset Hari Ini</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +18.4%
                  </span>
                </div>
                <div className="mt-1 text-2xl font-black text-slate-900">
                  Rp 1.450.000
                </div>
                <div className="mt-2 pt-2 border-t border-amber-200/50 flex justify-between text-[10px] text-slate-600">
                  <span>24 Tamu Selesai</span>
                  <span>16 via QRIS / E-Wallet</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                  <CreditCard className="w-4 h-4 mx-auto text-amber-600 mb-0.5" />
                  <span className="text-[10px] font-semibold text-slate-700 block">
                    Bayar Cepat
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                  <Users className="w-4 h-4 mx-auto text-blue-600 mb-0.5" />
                  <span className="text-[10px] font-semibold text-slate-700 block">
                    Antrean (3)
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                  <Receipt className="w-4 h-4 mx-auto text-emerald-600 mb-0.5" />
                  <span className="text-[10px] font-semibold text-slate-700 block">
                    Laporan
                  </span>
                </div>
              </div>

              {/* Transactions List */}
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 px-0.5">
                  <span>Transaksi Terakhir</span>
                  <span className="text-amber-600 text-[10px] cursor-pointer">
                    Lihat Semua
                  </span>
                </div>

                {MOCKUP_TRANSACTIONS.map((tx, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-semibold text-slate-900 text-[11px]">
                        {tx.name}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {tx.service} • {tx.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900 text-[11px] block">
                        {tx.price}
                      </span>
                      <span className="text-[9px] text-emerald-700 font-medium">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Button */}
              <div className="mt-3">
                <button
                  type="button"
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>+ Catat Transaksi Baru</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
