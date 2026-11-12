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
} from "lucide-react";

export default function CTAFinal() {
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
    <section className="py-24 bg-gradient-to-b from-amber-50/70 via-orange-50/40 to-white border-t border-slate-200/70 text-slate-900 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>PROMO SPESIAL TERBATAS</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Jangan Sampai Barbershop Sebelah{" "}
          <span className="text-amber-600 underline decoration-amber-400/50 decoration-wavy">
            Lebih Maju
          </span>{" "}
          dari Anda
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Mulai digitalkan pembukuan dan kasir barbershop Anda hari ini. Cuma{" "}
          <strong className="text-slate-900 font-extrabold">Rp 50.000</strong> sekali
          bayar seumur hidup.
        </p>

        {/* Clean Countdown Timer */}
        <div className="mt-8 mb-10 inline-block p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2.5">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Harga Promo Berakhir Dalam:</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 font-mono">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  {timeLeft.hours}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-sans font-semibold mt-1">
                Jam
              </span>
            </div>

            <span className="text-lg font-bold text-slate-300 pb-4">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  {timeLeft.minutes}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-sans font-semibold mt-1">
                Menit
              </span>
            </div>

            <span className="text-lg font-bold text-slate-300 pb-4">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-amber-600">
                  {timeLeft.seconds}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-sans font-semibold mt-1">
                Detik
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-base shadow-sm hover:shadow transition-all active:scale-98"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Beli Sekarang — Rp 50.000</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20POS%20Barbershop%20dan%20mau%20konsultasi%20dulu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-base border border-slate-200 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-1.5 font-medium">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Sekali Bayar Selamanya</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Garansi 7 Hari Uang Kembali</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Gratis Update Selamanya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
