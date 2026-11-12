"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenPayment?: () => void;
}

export default function HeroSection({ onOpenPayment }: HeroSectionProps) {
  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPayment) {
      onOpenPayment();
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual Showcase (Moka POS style: Warm Card + Stylish Capster + 1 App Screenshot) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[480px]">
              {/* Warm Golden/Amber Card Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[14/11] rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-amber-400 via-amber-400 to-amber-500 overflow-hidden shadow-xl shadow-amber-500/15">
                {/* Stylish Capster Image on Right/Center */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/barber-hero.jpg"
                    alt="Capster Barbershop Stylish"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                  {/* Subtle warm gradient overlay to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Single Phone Mockup Overlapping Left Side (Just like Moka POS) */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -15 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="absolute -left-3 sm:-left-6 -bottom-5 sm:-bottom-8 w-[145px] sm:w-[195px] md:w-[220px] aspect-[9/19.5] rounded-[26px] sm:rounded-[34px] bg-[#0c0a09] p-1.5 sm:p-2 border-[5px] sm:border-[6px] border-[#1c1917] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/20 z-20"
              >
                {/* Dynamic Island Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-2.5 sm:h-3.5 bg-[#1c1917] rounded-full z-30" />

                {/* 1 Real App Screenshot Inside */}
                <div className="relative w-full h-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-stone-900">
                  <Image
                    src="/screenshots/kasir.jpg"
                    alt="Layar Kasir Barber Suite"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text & Value Proposition (Moka POS style: Clean, bold, brief highlight) */}
          <div className="lg:col-span-6 order-2 lg:order-1 text-left space-y-5">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200/80 text-amber-950 text-xs font-black tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>BARBER SUITE POS</span>
            </div>

            {/* Bold Punchy Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
              Kelola kasir & operasional barbershop lebih cepat, rapi, dan otomatis
            </h1>

            {/* Brief Highlight Paragraph (Moka POS style) */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Sistem kasir digital modern khusus barbershop. Catat transaksi kilat
              berdurasi, hitung bagi hasil kapster otomatis, cetak struk Bluetooth
              thermal, dan pantau keuangan dari satu layar. 100% offline SQLite — cuma{" "}
              <strong className="text-stone-950 font-black bg-amber-200/70 px-1.5 py-0.5 rounded">
                Rp 50.000
              </strong>{" "}
              sekali bayar seumur hidup.
            </p>

            {/* Single Hard-Sell Buy Button (NO WhatsApp consultation!) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBuyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-[0_12px_28px_-6px_rgba(217,119,6,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(217,119,6,0.48)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Beli Barber Suite — Rp 50.000</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Clean Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-600 font-semibold">
              <div className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sekali Bayar Selamanya</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Offline SQLite</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Garansi 7 Hari Uang Kembali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
