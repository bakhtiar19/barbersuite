"use client";

import { useState, useEffect } from "react";
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

export default function CTAFinal() {
  // DUMMY: Timer untuk urgency - Menghitung mundur sisa waktu promo harian
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
    <section className="relative py-28 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Dramatic Radial Amber/Gold Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.18) 0%, rgba(180, 83, 9, 0.08) 35%, rgba(10, 10, 10, 0.95) 75%)",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/15 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgent Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-8 shadow-lg shadow-amber-500/10"
        >
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Promo Terbatas • Diskon 80% Hanya Hari Ini</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight sm:leading-none max-w-4xl mx-auto"
        >
          Jangan Sampai Barbershop Sebelah{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 underline decoration-amber-500/40 decoration-wavy decoration-from-font">
            Lebih Maju
          </span>{" "}
          dari Kamu!
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-2xl text-neutral-300 font-medium max-w-3xl mx-auto"
        >
          Mulai digitalkan barbershop kamu <span className="text-amber-400 font-bold">SEKARANG</span>. Cuma{" "}
          <span className="text-white font-black underline decoration-amber-400 decoration-2">Rp 50.000</span> sekali bayar.
        </motion.p>

        {/* Countdown Timer Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 mb-12 inline-block p-6 sm:p-7 rounded-3xl bg-neutral-900/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl shadow-amber-500/10"
        >
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-300 font-semibold tracking-wide uppercase mb-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Harga promo berakhir dalam:</span>
          </div>

          {/* DUMMY: Timer untuk urgency */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 font-mono">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shadow-inner">
                <span className="text-2xl sm:text-4xl font-black text-amber-400">{timeLeft.hours}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-1.5 font-sans font-semibold">
                Jam
              </span>
            </div>

            <span className="text-2xl sm:text-3xl font-black text-amber-500/60 pb-5">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shadow-inner">
                <span className="text-2xl sm:text-4xl font-black text-amber-400">{timeLeft.minutes}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-1.5 font-sans font-semibold">
                Menit
              </span>
            </div>

            <span className="text-2xl sm:text-3xl font-black text-amber-500/60 pb-5">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shadow-inner">
                <span className="text-2xl sm:text-4xl font-black text-amber-400 animate-pulse">{timeLeft.seconds}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-1.5 font-sans font-semibold">
                Detik
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          {/* Primary CTA with glowing pulse */}
          <motion.a
            href="#pricing"
            animate={{
              boxShadow: [
                "0 0 20px rgba(245, 158, 11, 0.35)",
                "0 0 35px rgba(245, 158, 11, 0.6)",
                "0 0 20px rgba(245, 158, 11, 0.35)",
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-neutral-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl transition-all"
          >
            <Zap className="w-5 h-5 fill-black" />
            <span>Beli Sekarang — Rp 50.000</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Secondary CTA */}
          {/* TODO: Ganti nomor WA */}
          <motion.a
            href="https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20POS%20Barbershop%20dan%20mau%20konsultasi%20dulu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-5 rounded-2xl bg-neutral-900/80 hover:bg-neutral-850 text-white font-bold text-base border border-neutral-700 hover:border-neutral-500 flex items-center justify-center gap-2.5 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Konsultasi Gratis via WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Sekali Bayar Selamanya</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garansi 7 Hari Uang Kembali</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Update Gratis Selamanya</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
