"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Scissors,
  ArrowRight,
  ShieldCheck,
  Star,
  Printer,
  ChevronRight,
  Zap,
  Receipt,
  Clock,
  Smartphone,
  BarChart3,
  Users2,
  FileSpreadsheet,
  WifiOff,
  Database,
} from "lucide-react";

type ScreenKey = "kasir" | "beranda" | "pelanggan" | "laporan";

interface ScreenMeta {
  id: ScreenKey;
  label: string;
  icon: React.ElementType;
  imageSrc: string;
  badge: string;
  desc: string;
}

const SCREENS: ScreenMeta[] = [
  {
    id: "kasir",
    label: "Kasir Kilat",
    icon: Zap,
    imageSrc: "/screenshots/kasir.jpg",
    badge: "MODUL TRANSAKSI",
    desc: "Input layanan + durasi, pilih barber Irfan, dan selesaikan bayar via QRIS/Tunai.",
  },
  {
    id: "beranda",
    label: "Dashboard Omset",
    icon: BarChart3,
    imageSrc: "/screenshots/beranda.jpg",
    badge: "REAL-TIME ANALYTICS",
    desc: "Pantau omset harian Rp 1.450.000, grafik tren 30 hari, dan rata-rata belanja tamu.",
  },
  {
    id: "pelanggan",
    label: "CRM WhatsApp",
    icon: Users2,
    imageSrc: "/screenshots/pelanggan.jpg",
    badge: "RETENSI PELANGGAN",
    desc: "Filter tamu > 30 hari belum potong rambut, kirim template WhatsApp 1-klik.",
  },
  {
    id: "laporan",
    label: "Laporan & PDF",
    icon: FileSpreadsheet,
    imageSrc: "/screenshots/laporan.jpg",
    badge: "REKAP FINANSIAL",
    desc: "Ekspor rekapan omset dan bagi hasil per kapster ke format CSV Excel & PDF.",
  },
];

export default function HeroSection() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("kasir");

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282145773753";
  const whatsappMessage = encodeURIComponent(
    "Halo Admin Barber Suite, saya tertarik dengan aplikasi kasir Barber Suite (Rp 50.000). Mau tanya info lebih lanjut."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingElement = document.querySelector("#pricing");
    if (pricingElement) {
      const navbarHeight = 85;
      const elementPosition = pricingElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const currentScreenMeta = SCREENS.find((s) => s.id === activeScreen) || SCREENS[0];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#FDFBF7] to-[#F5EFE6] overflow-hidden">
      {/* Precision architectural ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-amber-200/20 via-orange-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-[-10%] w-[450px] h-[450px] bg-stone-300/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Ultra-subtle geometric hairline grid lines for high-end studio feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e2d9_1px,transparent_1px),linear-gradient(to_bottom,#e7e2d9_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Left Value Proposition + Right Luxury Workstation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Prestigious & Authoritative Editorial Copy */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Jewel-like Refined Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-stone-200/90 text-stone-800 text-xs font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="tracking-wider uppercase text-[11px] font-mono text-stone-700 font-bold">
                BARBER SUITE PRO V4.2.0 • LISENSI SEUMUR HIDUP
              </span>
            </motion.div>

            {/* Grand Editorial Headline with Refined Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-stone-900 tracking-tight leading-[1.12]">
                Sistem Kasir Modern untuk{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                  Barbershop Berkelas.
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-600 to-amber-400 rounded-full opacity-70" />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with Clear Economic & Operational Advantage */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              Tinggalkan buku nota kertas yang mudah robek dan hilang. Barber Suite
              menghadirkan kasir kilat berdurasi, bagi hasil kapster otomatis, cetak struk
              thermal Bluetooth, dan rekap omset harian. 100% offline SQLite, tanpa langganan
              bulanan. Cuma{" "}
              <strong className="text-stone-950 font-black bg-amber-200/60 px-2 py-0.5 rounded text-base sm:text-lg">
                Rp 50.000
              </strong>{" "}
              sekali bayar selamanya.
            </motion.p>

            {/* CTA Button Row with High-End Tactile Finish */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary Luxury CTA */}
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-[0_12px_28px_-6px_rgba(217,119,6,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(217,119,6,0.48)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Miliki Barber Suite — Rp 50.000</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Secondary Concierge CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </motion.div>

            {/* Social Proof & Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-stone-600"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {["#b45309", "#1d4ed8", "#15803d", "#6d28d9"].map((c, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black text-white shadow-2xs"
                      style={{ backgroundColor: c }}
                    >
                      ★
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber-500 pl-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-black text-stone-900">4.9/5.0</span>
                <span className="text-stone-400">(500+ Barbershop)</span>
              </div>

              <span className="text-stone-300 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 font-bold text-stone-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Tanpa Biaya Bulanan Selamanya</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: World-Class Interactive Workstation Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Interactive Screen Selector Switcher (Glass Tabs) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 z-30 inline-flex flex-wrap items-center justify-center gap-1.5 bg-white/95 backdrop-blur-xl p-1.5 rounded-2xl border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] max-w-full"
            >
              {SCREENS.map((s) => {
                const IconComponent = s.icon;
                const isActive = activeScreen === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveScreen(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-stone-900 text-amber-400 shadow-sm shadow-stone-900/20 scale-[1.02]"
                        : "text-stone-600 hover:text-stone-950 hover:bg-stone-100/70"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{s.label}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Center Device + Flanking Satellite Cards Container */}
            <div className="relative w-full flex items-center justify-center py-4">
              {/* Ambient radial halo behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[550px] bg-gradient-to-tr from-amber-400/20 via-orange-300/15 to-transparent rounded-[50px] blur-2xl pointer-events-none" />

              {/* SATELLITE CARD 1 (LEFT): Authentic Thermal Bluetooth Receipt */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -3 }}
                animate={{ opacity: 1, x: 0, rotate: -2, y: [-4, 4, -4] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  opacity: { duration: 0.6, delay: 0.3 },
                  x: { duration: 0.6, delay: 0.3 },
                }}
                className="absolute -left-4 sm:-left-12 lg:-left-10 top-10 z-20 hidden md:block w-[220px] bg-[#FAF9F5] text-stone-800 p-3.5 rounded-2xl border border-stone-200/90 shadow-[0_15px_35px_-8px_rgba(0,0,0,0.12)] font-mono text-[10px] leading-snug"
              >
                {/* Serrated receipt top edge indicator */}
                <div className="text-center pb-2 border-b border-dashed border-stone-300">
                  <div className="flex items-center justify-center gap-1.5 text-stone-900 font-black text-xs font-sans">
                    <Scissors className="w-3.5 h-3.5 text-amber-700" />
                    <span>MODAL GANTENG</span>
                  </div>
                  <p className="text-[9px] text-stone-500 font-sans">TRX-20261112-003 • Kasir: Irfan</p>
                </div>

                {/* Items */}
                <div className="py-2 space-y-1 border-b border-dashed border-stone-300">
                  <div className="flex justify-between">
                    <span>1x Haircut + Wash</span>
                    <span className="font-bold">65.000</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>1x Pomade Matte</span>
                    <span className="font-bold">75.000</span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-2 space-y-1">
                  <div className="flex justify-between font-black text-stone-900 text-xs">
                    <span>TOTAL</span>
                    <span>Rp 140.000</span>
                  </div>
                  <div className="flex justify-between text-[9px] text-stone-500">
                    <span>QRIS Statis</span>
                    <span className="text-emerald-700 font-bold">LUNAS ✓</span>
                  </div>
                </div>

                {/* Hardware print badge */}
                <div className="mt-2 pt-2 border-t border-stone-200/80 flex items-center justify-between text-[9px] font-sans">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Printer className="w-3 h-3" /> Bluetooth 58mm
                  </span>
                  <span className="text-stone-400">Tercetak 🖨️</span>
                </div>
              </motion.div>

              {/* SATELLITE CARD 2 (RIGHT): Executive Analytics & Barber Commission */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 2, y: [4, -4, 4] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  opacity: { duration: 0.6, delay: 0.4 },
                  x: { duration: 0.6, delay: 0.4 },
                }}
                className="absolute -right-4 sm:-right-12 lg:-right-10 bottom-8 z-20 hidden md:block w-[240px] bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-2xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.14)] text-left space-y-3"
              >
                {/* Real-time Omset */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-2xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">
                        Omset Hari Ini
                      </p>
                      <p className="text-sm font-black text-stone-900 leading-none">
                        Rp 1.450.000
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    +24% vs lalu
                  </span>
                </div>

                {/* Automatic Barber Commission Split */}
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold text-stone-700">
                    <span>Bagi Hasil (40% Kapster)</span>
                    <span className="text-stone-900">Irfan: Rp 580rb</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden flex">
                    <div className="bg-amber-500 h-full w-[40%]" />
                    <div className="bg-stone-900 h-full w-[60%]" />
                  </div>
                  <div className="flex justify-between text-[9px] text-stone-500 font-medium">
                    <span>Kapster: Rp 580.000</span>
                    <span>Laba Toko: Rp 870.000</span>
                  </div>
                </div>

                {/* 100% Offline SQLite Engine */}
                <div className="flex items-center justify-between text-[10px] pt-1 border-t border-stone-100">
                  <span className="flex items-center gap-1.5 text-stone-700 font-semibold">
                    <Database className="w-3.5 h-3.5 text-amber-600" />
                    <span>100% SQLite Lokal</span>
                  </span>
                  <span className="text-[9px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-mono font-bold">
                    Tanpa Kuota
                  </span>
                </div>
              </motion.div>

              {/* MAIN DEVICE: Luxury Smartphone Mockup Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative z-10 w-full max-w-[290px] sm:max-w-[325px] rounded-[46px] bg-[#0c0a09] p-2.5 sm:p-3 border-[8px] border-[#1c1917] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.35),0_10px_25px_-5px_rgba(0,0,0,0.15)] ring-1 ring-white/20"
              >
                {/* Dynamic Island Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1c1917] rounded-full z-30 flex items-center justify-end pr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-800" />
                </div>

                {/* Screen Area with Crossfade Motion */}
                <div className="relative w-full aspect-[9/19.5] rounded-[36px] overflow-hidden bg-stone-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentScreenMeta.imageSrc}
                        alt={`Barber Suite - ${currentScreenMeta.label}`}
                        fill
                        sizes="(max-width: 768px) 290px, 325px"
                        className="object-cover object-top"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Glossy Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Caption & Screen Context description pill below device */}
            <motion.div
              key={currentScreenMeta.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/90 border border-stone-200/80 shadow-xs max-w-md text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {currentScreenMeta.badge}
                </span>
                <span className="text-xs font-bold text-stone-800">
                  {currentScreenMeta.label}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                {currentScreenMeta.desc}
              </p>
            </motion.div>
          </div>
        </div>

        {/* 4-Pillar Luxury Trust & Advantage Strip below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-stone-300/70 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100/80 border border-amber-300/50 flex items-center justify-center text-amber-900 shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-900">
                Rp 50.000 Beli Putus
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                Lisensi seumur hidup tanpa beban biaya langganan bulanan Rp 299rb.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-300/60 flex items-center justify-center text-stone-900 shrink-0 shadow-2xs">
              <WifiOff className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-900">
                100% Offline SQLite
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                Tetap bisa mencatat transaksi dan cetak nota walau internet mati total.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100/80 border border-amber-300/50 flex items-center justify-center text-amber-900 shrink-0 shadow-2xs">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-900">
                Thermal Bluetooth Ready
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                Cetak struk kasir rapi ke printer thermal 58mm & 80mm dalam hitungan detik.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-300/60 flex items-center justify-center text-stone-900 shrink-0 shadow-2xs">
              <Scissors className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-900">
                Bagi Hasil Kapster Otomatis
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-snug">
                Komisi barber langsung terhitung otomatis per layanan tanpa hitung manual.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
