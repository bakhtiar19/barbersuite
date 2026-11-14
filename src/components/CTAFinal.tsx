"use client";

import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import {
  Zap,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";

interface CTAFinalProps {
  onOpenPayment?: () => void;
}

export default function CTAFinal({ onOpenPayment }: CTAFinalProps) {
  const timeLeft = useCountdown();

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF7F2] via-amber-100/50 to-[#F5ECE0] border-t border-stone-300/80 text-stone-900 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black uppercase tracking-wider mb-5 shadow-md">
          <Flame className="w-4 h-4 text-white animate-pulse" />
          <span>PENAWARAN SPESIAL TERBATAS • DISKON 50%</span>
        </div>

        {/* High-Converting Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight max-w-2xl mx-auto">
          Mulai Buat Barbershop Anda Lebih Rapi & Menguntungkan
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-xl mx-auto font-normal">
          Tinggalkan nota kertas yang rawan hilang dan sistem sewa bulanan yang menguras kas toko Anda.
        </p>

        {/* Unified Price + Countdown Banner (Countdown diletakkan langsung di sebelah harga) */}
        <div className="max-w-xl mx-auto mt-8 mb-8 p-5 sm:p-6 rounded-3xl bg-white border-2 border-amber-300 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Price Area */}
          <div className="flex items-center gap-3.5">
            <div className="text-left">
              <p className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Harga Normal</p>
              <p className="text-sm sm:text-base font-bold text-stone-400 line-through">Rp 111.400</p>
            </div>
            <div className="h-9 w-px bg-stone-200" />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] text-amber-800 uppercase font-black tracking-wider">Promo Spesial</p>
                <span className="text-[9px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded-full uppercase">Hemat 50%</span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-stone-950">Rp 55.700</p>
            </div>
          </div>

          {/* Countdown Placed Directly Beside Price */}
          <div className="w-full sm:w-auto p-3 rounded-2xl bg-[#FAF7F2] border border-amber-200 flex items-center justify-center gap-2.5">
            <Clock className="w-4 h-4 text-red-600 animate-pulse shrink-0" />
            <div className="text-left">
              <p className="text-[9px] uppercase font-black text-amber-950 tracking-wider">Promo Berakhir Dalam:</p>
              <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-black text-stone-950">
                <span className="bg-white px-1.5 py-0.5 rounded border border-amber-200 shadow-2xs">{timeLeft.hours}</span>
                <span>:</span>
                <span className="bg-white px-1.5 py-0.5 rounded border border-amber-200 shadow-2xs">{timeLeft.minutes}</span>
                <span>:</span>
                <span className="bg-white px-1.5 py-0.5 rounded border border-amber-200 shadow-2xs text-red-600">{timeLeft.seconds}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button (No direct price text) */}
        <div className="flex items-center justify-center max-w-md mx-auto">
          <button
            type="button"
            onClick={() => onOpenPayment?.()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-base sm:text-lg shadow-xl shadow-amber-500/30 hover:scale-102 transition-all active:scale-98 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-stone-950" />
            <span>Beli Sekarang</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-6 border-t border-amber-300/60 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-700 font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-700" />
            <span>Sekali Bayar Selamanya</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Garansi 7 Hari Uang Kembali</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>Tanpa Biaya Bulanan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
