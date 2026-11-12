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
  Receipt,
  ArrowRight,
  ShieldCheck,
  Flame,
} from "lucide-react";

const TRUST_BADGES = [
  { text: "Sekali Bayar Selamanya", icon: CheckCircle2, color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  { text: "Tanpa Biaya Bulanan", icon: ShieldCheck, color: "text-amber-800 bg-amber-50 border-amber-200" },
  { text: "Dipakai 500+ Barbershop", icon: Sparkles, color: "text-blue-700 bg-blue-50 border-blue-200" },
];

const MOCKUP_TRANSACTIONS = [
  {
    name: "Dimas Pratama",
    service: "Gentleman Cut + Cuci",
    price: "Rp 60.000",
    time: "10:24",
    status: "QRIS",
    statusColor: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "Rizky Firmansyah",
    service: "Fade Cut & Pomade",
    price: "Rp 75.000",
    time: "10:05",
    status: "Tunai",
    statusColor: "bg-amber-100 text-amber-800",
  },
  {
    name: "Fajar Maulana",
    service: "Cukur Kumis & Jenggot",
    price: "Rp 40.000",
    time: "09:42",
    status: "Transfer",
    statusColor: "bg-blue-100 text-blue-800",
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
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-amber-100/40 via-[#faf8f5] to-[#f5f2eb] overflow-hidden">
      {/* Warm ambient background elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-300/20 via-orange-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-amber-100 border border-amber-300/80 text-amber-950 text-xs font-bold mb-6 shadow-xs"
            >
              <Flame className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              <span>Satu-satunya Kasir Barbershop Tanpa Biaya Bulanan</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.12]"
            >
              Barbershop Masih Catat Manual?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 underline decoration-amber-400 decoration-wavy">
                Saatnya Beralih ke Digital.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl font-normal"
            >
              Kelola kasir cepat, hitung bagi hasil kapster otomatis, dan pantau
              omset harian dari HP. Cuma{" "}
              <strong className="text-stone-950 font-bold bg-amber-200/60 px-1.5 py-0.5 rounded">
                Rp 50.000
              </strong>{" "}
              sekali bayar seumur hidup!
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-500 hover:to-amber-400 shadow-md shadow-amber-500/25 hover:shadow-lg transition-all active:scale-98"
              >
                <span>Beli Sekarang — Cuma Rp 50.000</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-stone-800 bg-white hover:bg-stone-50 border-2 border-stone-200 shadow-xs transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Badges Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${badge.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Vivid App Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Floating Live Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-white border border-stone-200 rounded-2xl p-3 shadow-lg flex items-center gap-2.5 text-xs font-bold text-stone-900"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-stone-500 font-normal">Omset Hari Ini</p>
                <p className="text-emerald-700 font-extrabold">+Rp 1.450.000</p>
              </div>
            </motion.div>

            {/* Phone Mockup Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[350px] rounded-[36px] bg-stone-900 border-[7px] border-stone-800 shadow-2xl p-3 text-stone-900"
            >
              {/* Dynamic Island / Notch */}
              <div className="mx-auto w-24 h-4 bg-stone-950 rounded-full mb-2" />

              {/* Screen Body */}
              <div className="rounded-[26px] bg-[#FAF8F5] p-3.5 space-y-3 min-h-[520px]">
                {/* App Screen Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-black shadow-xs">
                      <Scissors className="w-4 h-4 -rotate-45" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-stone-900">
                        Gentleman Barbershop
                      </h3>
                      <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Kasir Siap Transaksi
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
                    Shift Pagi
                  </span>
                </div>

                {/* Today Omset Card with Warm Gold Gradient */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-300 border border-amber-400/80 shadow-xs text-stone-950">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-800">
                    <span>Total Omset Shift Ini</span>
                    <span className="bg-stone-950 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" /> +18.4%
                    </span>
                  </div>
                  <div className="mt-1 text-2xl font-black text-stone-950 tracking-tight">
                    Rp 1.450.000
                  </div>
                  <div className="mt-2 pt-2 border-t border-stone-900/10 flex justify-between text-[10px] font-medium text-stone-800">
                    <span>24 Tamu Selesai</span>
                    <span className="font-bold">16 via QRIS</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-white border border-stone-200 text-center shadow-2xs hover:bg-amber-50 transition-colors">
                    <CreditCard className="w-4 h-4 mx-auto text-amber-600 mb-0.5" />
                    <span className="text-[10px] font-bold text-stone-800 block">
                      Bayar Cepat
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-stone-200 text-center shadow-2xs hover:bg-blue-50 transition-colors">
                    <Users className="w-4 h-4 mx-auto text-blue-600 mb-0.5" />
                    <span className="text-[10px] font-bold text-stone-800 block">
                      Antrean (3)
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-stone-200 text-center shadow-2xs hover:bg-emerald-50 transition-colors">
                    <Receipt className="w-4 h-4 mx-auto text-emerald-600 mb-0.5" />
                    <span className="text-[10px] font-bold text-stone-800 block">
                      Laporan
                    </span>
                  </div>
                </div>

                {/* Live Transactions List */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-black text-stone-800 px-0.5">
                    <span>Transaksi Terakhir</span>
                    <span className="text-amber-700 text-[10px] font-bold">
                      Lihat Semua &rarr;
                    </span>
                  </div>

                  {MOCKUP_TRANSACTIONS.map((tx, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-center justify-between shadow-2xs"
                    >
                      <div>
                        <p className="font-bold text-stone-900 text-[11px]">
                          {tx.name}
                        </p>
                        <p className="text-[10px] text-stone-500 font-medium">
                          {tx.service} • {tx.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-stone-900 text-[11px] block">
                          {tx.price}
                        </span>
                        <span
                          className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold ${tx.statusColor}`}
                        >
                          {tx.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom POS Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-black text-xs flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>+ Catat Transaksi Baru</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
