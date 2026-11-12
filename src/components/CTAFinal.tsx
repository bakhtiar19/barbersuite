"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  MessageCircle,
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
  const [timeLeft, setTimeLeft] = useState({
    hours: "08",
    minutes: "42",
    seconds: "15",
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = Math.max(0, endOfDay.getTime() - now.getTime());

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf8f5] via-amber-100/60 to-amber-200/50 border-t border-stone-200/80 text-stone-900 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Flame className="w-4 h-4 text-white animate-pulse" />
          <span>PROMO SPESIAL TERBATAS • DISKON 67%</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
          Jangan Sampai Barbershop Sebelah{" "}
          <span className="text-amber-700 underline decoration-amber-400 decoration-2">
            Lebih Maju
          </span>{" "}
          dari Anda!
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl text-stone-700 max-w-2xl mx-auto font-normal">
          Tinggalkan cara manual, mulai digitalkan kasir barbershop Anda hari ini.
          Cuma{" "}
          <strong className="text-stone-950 font-black bg-amber-300/80 px-2 py-0.5 rounded">
            Rp 50.000
          </strong>{" "}
          sekali bayar seumur hidup!
        </p>

        {/* Countdown Timer Block */}
        <div className="mt-8 mb-10 inline-block p-6 rounded-3xl bg-white border-2 border-amber-300 shadow-md">
          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-900 font-bold uppercase tracking-wider mb-3">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>Harga Promo Berakhir Dalam:</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 font-mono">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-18 h-16 sm:h-18 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200 flex items-center justify-center shadow-xs">
                <span className="text-2xl sm:text-3xl font-black text-stone-900">
                  {timeLeft.hours}
                </span>
              </div>
              <span className="text-[10px] text-stone-500 font-sans font-bold mt-1">
                Jam
              </span>
            </div>

            <span className="text-2xl font-black text-stone-400 pb-5">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-18 h-16 sm:h-18 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200 flex items-center justify-center shadow-xs">
                <span className="text-2xl sm:text-3xl font-black text-stone-900">
                  {timeLeft.minutes}
                </span>
              </div>
              <span className="text-[10px] text-stone-500 font-sans font-bold mt-1">
                Menit
              </span>
            </div>

            <span className="text-2xl font-black text-stone-400 pb-5">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-18 h-16 sm:h-18 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200 flex items-center justify-center shadow-xs">
                <span className="text-2xl sm:text-3xl font-black text-amber-600 animate-pulse">
                  {timeLeft.seconds}
                </span>
              </div>
              <span className="text-[10px] text-stone-500 font-sans font-bold mt-1">
                Detik
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons (Hard-sell: Only Buy Option) */}
        <div className="flex items-center justify-center max-w-md mx-auto">
          <button
            type="button"
            onClick={() => onOpenPayment?.()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black text-base sm:text-lg shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all active:scale-98 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-stone-950" />
            <span>Beli Barber Suite — Cuma Rp 50.000</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-6 border-t border-amber-300/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-stone-700 font-semibold">
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
            <span>Gratis Update Selamanya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
