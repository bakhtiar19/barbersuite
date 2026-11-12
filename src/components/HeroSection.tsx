"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Scissors,
  ArrowRight,
  ShieldCheck,
  Flame,
  Star,
} from "lucide-react";
import InteractivePOSDemo from "./InteractivePOSDemo";

const TRUST_BADGES = [
  { text: "Sekali Bayar Rp 50.000 Selamanya", icon: CheckCircle2, color: "text-emerald-800 bg-emerald-50 border-emerald-200" },
  { text: "Tanpa Biaya Bulanan / Langganan", icon: ShieldCheck, color: "text-amber-900 bg-amber-50 border-amber-200" },
  { text: "Rating 4.9★ (500+ Barbershop)", icon: Star, color: "text-blue-800 bg-blue-50 border-blue-200" },
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
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-amber-100/50 via-[#faf8f5] to-[#f5f2eb] overflow-hidden">
      {/* Background glow blur */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-amber-300/20 via-orange-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-amber-100 border border-amber-300/90 text-amber-950 text-xs font-bold mb-6 shadow-2xs"
          >
            <Flame className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>Satu-satunya Kasir Barbershop Android Tanpa Biaya Bulanan</span>
          </motion.div>

          {/* World-class Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[1.08]"
          >
            Sistem Kasir Barbershop yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 underline decoration-amber-400 decoration-wavy">
              Cepat, Rapi & Hemat.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-2xl text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Tinggalkan buku nota kertas. Kelola kasir, bagi hasil kapster, dan
            laporan omset harian langsung dari HP. Cuma{" "}
            <strong className="text-stone-950 font-black bg-amber-200/70 px-2 py-0.5 rounded">
              Rp 50.000
            </strong>{" "}
            sekali bayar seumur hidup!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#pricing"
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-500 hover:to-amber-400 shadow-md shadow-amber-500/25 hover:shadow-lg transition-all active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              <span>Beli Lisensi Sekarang — Rp 50.000</span>
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
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {TRUST_BADGES.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${badge.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* FEATURED SHOWCASE: The Live Interactive POS Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Subtle Label on Top of Demo */}
          <div className="text-center mb-3">
            <span className="text-xs font-bold text-stone-500 tracking-wider uppercase bg-white border border-stone-200 px-3 py-1 rounded-full shadow-2xs">
              👇 Coba Langsung Simulasi Kasir di Bawah Ini
            </span>
          </div>

          <InteractivePOSDemo />
        </motion.div>
      </div>
    </section>
  );
}
