"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase (Moka POS style: Rounded Card + Capster Holding Phone + Real App Screen) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[480px]">
              {/* Warm Golden/Amber Card Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[14/11] rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-amber-400 via-amber-400 to-amber-500 overflow-hidden shadow-2xl shadow-amber-500/20">
                {/* Stylish Capster Photo with daylight ambient */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/capster-holding-phone.jpg"
                    alt="Capster Barbershop Stylish Membuka Aplikasi"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                  {/* Subtle warm gradient overlay to blend into card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Overlapping Crisp Smartphone Mockup (Shows the real Barber Suite Kasir App) */}
              <motion.div
                initial={{ opacity: 0, y: 25, x: -15 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="absolute -left-3 sm:-left-6 -bottom-5 sm:-bottom-8 w-[150px] sm:w-[200px] md:w-[225px] aspect-[9/19.5] rounded-[28px] sm:rounded-[36px] bg-[#0c0a09] p-1.5 sm:p-2 border-[5px] sm:border-[7px] border-[#1c1917] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/25 z-20"
              >
                {/* Dynamic Island Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-2.5 sm:h-3.5 bg-[#1c1917] rounded-full z-30" />

                {/* Real Barber Suite Kasir Screenshot Inside */}
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

          {/* Heading & Buy Button Only (Moka POS style: Pure, Clean, Minimalist, No Walls of Text) */}
          <div className="lg:col-span-6 order-2 lg:order-1 text-left space-y-6 sm:space-y-7">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200/90 text-amber-950 text-xs sm:text-sm font-black tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Barber Suite</span>
            </div>

            {/* Bold Punchy Headline (Moka style) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-stone-900 tracking-tight leading-[1.12]">
              Kelola pesanan lebih cepat & akurat dengan{" "}
              <span className="italic font-black text-stone-900 underline decoration-amber-400 decoration-4 underline-offset-4">
                Barber Suite
              </span>
            </h1>

            {/* Hard-Sell Buy Button with Price Only (No long paragraph!) */}
            <div className="pt-2">
              <motion.button
                type="button"
                onClick={handleBuyClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_12px_28px_-6px_rgba(217,119,6,0.35)] transition-all cursor-pointer"
              >
                <span>Beli Sekarang — Cuma Rp 50.000</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
