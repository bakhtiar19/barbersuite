"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";

interface HeroSectionProps {
  onOpenPayment?: () => void;
}

export default function HeroSection({ onOpenPayment }: HeroSectionProps) {
  const countdown = useCountdown();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPayment) {
      onOpenPayment();
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase (Barbershop Aesthetic: Warm Card + Capster Holding Phone + Real App Dashboard) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[480px]">
              {/* Warm Vintage Barbershop Card Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[14/11] rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 overflow-hidden shadow-2xl shadow-amber-900/20 border-2 border-amber-400/40">
                {/* Stylish Capster Photo with daylight ambient */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/capster-holding-phone.jpg"
                    alt="Capster Barbershop Stylish Membuka Aplikasi Barber Suite"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                  {/* Subtle warm gradient overlay to blend into card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Overlapping Crisp Smartphone Mockup (Shows real Barber Suite App Dashboard) */}
              <motion.div
                initial={{ opacity: 0, y: 25, x: -15 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="absolute -left-3 sm:-left-6 -bottom-5 sm:-bottom-8 w-[150px] sm:w-[200px] md:w-[225px] aspect-[9/19.5] rounded-[28px] sm:rounded-[36px] bg-[#0c0a09] p-1.5 sm:p-2 border-[5px] sm:border-[7px] border-[#1c1917] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/25 z-20"
              >
                {/* Dynamic Island Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-2.5 sm:h-3.5 bg-[#1c1917] rounded-full z-30" />

                {/* Real Barber Suite Screenshot Inside */}
                <div className="relative w-full h-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-stone-900">
                  <Image
                    src="/screenshots/hero-dashboard.png"
                    alt="Layar Beranda & Omset Barber Suite"
                    fill
                    sizes="225px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle Screen Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.15] pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Heading & High-Converting Copy (Professional Marketing Copywriting) */}
          <div className="lg:col-span-6 order-2 lg:order-1 text-left space-y-5 sm:space-y-6">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs sm:text-sm font-black tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>APLIKASI KASIR KHUSUS BARBERSHOP</span>
            </div>

            {/* Bold Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-stone-900 tracking-tight leading-[1.14]">
              Kelola pesanan lebih cepat & akurat dengan{" "}
              <span className="italic font-black text-stone-900 underline decoration-amber-500 decoration-4 underline-offset-4">
                Barber Suite
              </span>
            </h1>

            {/* Short Benefit-Driven Copy (Easy to understand, non-technical) */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Bebas repot nota kertas dan hitung komisi kapster manual. Transaksi cepat,
              cetak struk langsung, dan tetap jalan lancar walau{" "}
              <strong className="text-stone-900 font-bold">tanpa koneksi internet</strong>.
            </p>

            {/* Action Area: Clear price block + countdown right beside price, followed by CTA button */}
            <div className="pt-2 space-y-3.5">
              {/* Price Presentation: Strikethrough Rp 111.400 -> Rp 55.700 with Countdown Timer Directly Beside It */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-stone-700">
                <span className="text-xs sm:text-sm text-stone-400 font-bold line-through">
                  Rp 111.400
                </span>
                <span className="text-xl sm:text-2xl font-black text-stone-950">
                  Rp 55.700
                </span>
                <span className="text-[10px] sm:text-[11px] bg-red-600 text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Hemat 50%
                </span>

                {/* Countdown Timer Placed Right Next to Price */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-100/90 border border-amber-300 text-stone-900 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-red-600 animate-pulse shrink-0" />
                  <span className="text-[10px] font-black uppercase text-amber-950">Berakhir:</span>
                  <div className="flex items-center gap-0.5 font-mono text-xs font-black text-stone-950">
                    <span className="bg-white px-1 py-0.2 rounded border border-amber-200">{countdown.hours}</span>
                    <span>:</span>
                    <span className="bg-white px-1 py-0.2 rounded border border-amber-200">{countdown.minutes}</span>
                    <span>:</span>
                    <span className="bg-white px-1 py-0.2 rounded border border-amber-200 text-red-600">{countdown.seconds}</span>
                  </div>
                </div>
              </div>

              {/* Action Button without raw price */}
              <motion.button
                type="button"
                onClick={handleBuyClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_12px_28px_-6px_rgba(217,119,6,0.35)] transition-all cursor-pointer"
              >
                <span>Beli Sekarang</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </motion.button>
            </div>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-600">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Bisa Offline Tanpa Kuota</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garansi 7 Hari Uang Kembali</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
