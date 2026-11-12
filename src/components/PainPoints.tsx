"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FileText, TrendingDown, Users, Package, AlertCircle } from "lucide-react";

// DUMMY: Ganti dengan data real jika ada penambahan poin masalah barbershop
interface PainPoint {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
}

const PAIN_POINTS: PainPoint[] = [
  {
    id: "01",
    icon: FileText,
    title: "Pencatatan Manual yang Ribet",
    description:
      "Masih pakai buku catatan atau nota kertas? Rentan hilang, rusak, dan susah direkap. Waktu habis hanya untuk administrasi.",
    highlight: "Risiko nota robek & salah hitung",
  },
  {
    id: "02",
    icon: TrendingDown,
    title: "Nggak Tahu Omset Real-Time",
    description:
      "Berapa pendapatan hari ini? Minggu ini? Bulan ini? Tanpa sistem digital, kamu hanya bisa menebak-nebak.",
    highlight: "Sulit evaluasi performa kapster",
  },
  {
    id: "03",
    icon: Users,
    title: "Susah Tracking Pelanggan",
    description:
      "Pelanggan loyal datang tapi kamu nggak punya datanya. Nggak bisa kasih promo atau follow-up secara personal.",
    highlight: "Kehilangan pelanggan setia",
  },
  {
    id: "04",
    icon: Package,
    title: "Stok Produk Berantakan",
    description:
      "Pomade, oil, shampoo — stok sering habis tanpa kamu sadari. Pelanggan kecewa, revenue hilang.",
    highlight: "Penjualan produk ritel bocor",
  },
];

// Variants for scroll-triggered stagger animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PainPoints() {
  return (
    <section
      id="masalah"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a] overflow-hidden"
    >
      {/* Background Subtle Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-950/10 rounded-full blur-[160px] -z-10" />
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-amber-600/5 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 mb-4 shadow-sm"
          >
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">
              Tantangan Bisnis Barbershop
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4"
          >
            Masalah yang Sering Dialami{" "}
            <span className="bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Pemilik Barbershop
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-400 font-medium"
          >
            Apakah kamu juga mengalami ini?
          </motion.p>
        </div>

        {/* 4 Pain Points Grid (2x2 on Desktop, 1 Column on Mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {PAIN_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative p-8 sm:p-10 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-red-500/40 hover:shadow-[0_0_35px_rgba(239,68,68,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Card Glow on Hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-red-500/10 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 group-hover:scale-105 group-hover:text-red-300 transition-all duration-300 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-neutral-700 group-hover:text-neutral-500 transition-colors font-mono">
                      {item.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="text-xs font-semibold text-red-400/90 uppercase tracking-wider">
                    {item.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transition Hint to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-sm sm:text-base text-neutral-300">
            💡 <span className="font-semibold text-white">Kabar baiknya:</span> Semua
            kerumitan di atas bisa kamu selesaikan hanya dengan satu aplikasi
            kasir digital simpel seharga <span className="text-amber-400 font-bold">Rp 50.000</span>.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
