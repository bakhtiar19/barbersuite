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
  Wifi,
  Battery,
  ShieldCheck,
} from "lucide-react";

// DUMMY: Ganti dengan data real statistik jika tersedia
const TRUST_BADGES = [
  "Sekali bayar, selamanya",
  "Tanpa langganan bulanan",
  "Gratis update",
  "500+ barbershop",
];

// DUMMY: Ganti dengan data transaksi real untuk mockup
const MOCKUP_TRANSACTIONS = [
  {
    name: "Dimas Pratama",
    service: "Fade Haircut + Wash",
    price: "Rp 60.000",
    time: "10:24",
    status: "Lunas",
  },
  {
    name: "Rizky Firmansyah",
    service: "Pompadour Cut & Styling",
    price: "Rp 75.000",
    time: "10:05",
    status: "Lunas",
  },
  {
    name: "Fajar Maulana",
    service: "Beard Trim & Shave",
    price: "Rp 40.000",
    time: "09:42",
    status: "Lunas",
  },
];

export default function HeroSection() {
  // TODO: Ganti nomor WA
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    "Halo Admin, saya tertarik dengan POS Barbershop. Mau tanya lebih lanjut mengenai aplikasinya."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Smooth scroll handler for anchor links
  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingElement = document.querySelector("#pricing");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Grid Pattern & Mesh Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, #000 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, #000 70%, transparent 100%)",
          }}
        />

        {/* Ambient Top Glow (Gold) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-amber-500/20 to-yellow-600/10 rounded-full blur-[130px] -z-10" />

        {/* Ambient Secondary Glow (Deep Blue) */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] -z-10" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Dot 1 */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
        />

        {/* Floating Dot 2 */}
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-[18%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        />

        {/* Floating Dot 3 */}
        <motion.div
          animate={{
            y: [-25, 25, -25],
            x: [15, -15, 15],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-[12%] w-3.5 h-3.5 rounded-full bg-amber-400/90 shadow-[0_0_14px_rgba(245,158,11,0.8)]"
        />

        {/* Floating Ring Decor */}
        <motion.div
          animate={{
            rotate: 360,
            y: [-12, 12, -12],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 right-[8%] w-12 h-12 rounded-full border border-amber-500/20 border-dashed"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subheadline, CTAs, Trust Badges */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-neutral-900 to-neutral-800 border border-amber-500/30 mb-6 shadow-sm shadow-amber-500/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Software Kasir Modern Khusus Barbershop
              </span>
            </motion.div>

            {/* Headline with Stagger Reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="space-y-2 mb-6"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
              >
                Barbershop Kamu Masih Pakai Nota Kertas?
              </motion.h1>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent pb-1"
              >
                Saatnya Naik Level! 🚀
              </motion.div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed"
            >
              Kelola barbershop kamu dengan aplikasi kasir digital yang simpel,
              cepat, dan powerful. Cuma{" "}
              <strong className="text-amber-400 font-bold">Rp 50.000</strong> —
              sekali bayar, selamanya.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* Primary CTA Button (Pulse Animation) */}
              <motion.a
                href="#pricing"
                onClick={handleScrollToPricing}
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(245, 158, 11, 0.35)",
                    "0 0 30px rgba(245, 158, 11, 0.65)",
                    "0 0 15px rgba(245, 158, 11, 0.35)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 cursor-pointer overflow-hidden group"
              >
                <Sparkles className="w-5 h-5 text-neutral-950" />
                <span>Beli Sekarang — Cuma Rp 50.000</span>
              </motion.a>

              {/* Secondary CTA Button (WhatsApp Outline) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-neutral-900/90 border border-neutral-700/80 hover:bg-neutral-800 hover:border-amber-400/50 hover:text-amber-300 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="w-full pt-6 border-t border-neutral-800/80"
            >
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-neutral-300">
                {TRUST_BADGES.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Phone Mockup with 3D Perspective */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[340px] sm:max-w-[360px]"
              style={{ perspective: "1200px" }}
            >
              {/* Phone Halo Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/25 via-amber-600/10 to-blue-600/20 rounded-[50px] blur-2xl -z-10" />

              {/* Animated Floating Container with 3D Tilt */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotateX: [6, 4, 6],
                  rotateY: [-8, -5, -8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-[42px] border-[6px] border-neutral-800 bg-neutral-950 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.15)] ring-1 ring-white/10 overflow-hidden"
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 rounded-full z-30 flex items-center justify-center gap-2 border border-neutral-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                </div>

                {/* Smartphone Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] text-neutral-400 font-semibold z-20 relative">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Mockup App Screen Content */}
                <div className="p-4 space-y-4 bg-gradient-to-b from-[#111827] to-[#0a0a0a] min-h-[580px] text-left">
                  {/* App Header */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                        <Scissors className="w-4 h-4 text-neutral-950 -rotate-45" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">
                          Gentlemen Barbershop
                        </p>
                        <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Kasir Aktif
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
                      Shift Pagi
                    </span>
                  </div>

                  {/* Daily Revenue Card */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800/80 border border-amber-500/30 shadow-md">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                      <span>Total Omset Hari Ini</span>
                      <span className="text-emerald-400 flex items-center gap-0.5 font-semibold">
                        <TrendingUp className="w-3 h-3" /> +18.4%
                      </span>
                    </div>
                    <div className="text-2xl font-black text-amber-400 tracking-tight">
                      Rp 1.450.000
                    </div>
                    <div className="flex items-center gap-4 mt-2 pt-2 border-t border-neutral-700/60 text-[10px] text-neutral-300">
                      <div>
                        <span className="text-neutral-500">Total Tamu:</span> 24
                      </div>
                      <div>
                        <span className="text-neutral-500">Metode QRIS:</span> 16
                      </div>
                    </div>
                  </div>

                  {/* Fast Action Quick Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center justify-center gap-1">
                      <CreditCard className="w-4 h-4 text-amber-400" />
                      <span className="text-[10px] font-medium text-neutral-200">
                        Bayar Cepat
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] font-medium text-neutral-200">
                        Antrean (4)
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center justify-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-medium text-neutral-200">
                        Cek Laporan
                      </span>
                    </div>
                  </div>

                  {/* Recent Transactions List */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-400 px-0.5">
                      <span>Transaksi Terkini</span>
                      <span className="text-amber-400 text-[10px]">Semua &rarr;</span>
                    </div>

                    <div className="space-y-1.5">
                      {MOCKUP_TRANSACTIONS.map((tx, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800/80 flex items-center justify-between text-xs"
                        >
                          <div>
                            <p className="font-semibold text-neutral-200 text-[11px]">
                              {tx.name}
                            </p>
                            <p className="text-[10px] text-neutral-400">
                              {tx.service} • {tx.time}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-amber-300 text-[11px] block">
                              {tx.price}
                            </span>
                            <span className="inline-block px-1.5 py-0.2 rounded text-[9px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                              {tx.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom POS Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30 pointer-events-none"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Catat Transaksi Baru</span>
                    </button>
                  </div>
                </div>

                {/* Smartphone Home Indicator Bar */}
                <div className="py-2 flex justify-center bg-neutral-950">
                  <div className="w-24 h-1 bg-neutral-600 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
