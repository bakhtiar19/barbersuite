"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Zap, MessageCircle, RefreshCw, Award, Check } from "lucide-react";

const ADVANTAGES = [
  {
    icon: DollarSign,
    iconBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    title: "Sekali Bayar Rp 50.000, Milik Selamanya",
    desc: "Tidak ada biaya bulanan, tidak ada bagi hasil persentase dari omset Anda. Sekali beli, aplikasi aktif seumur hidup tanpa biaya tersembunyi.",
  },
  {
    icon: Zap,
    iconBg: "bg-amber-100 text-amber-800 border-amber-200",
    title: "Langsung Pakai Tanpa Training Rumit",
    desc: "Dirancang khusus mengikuti alur kerja asli kasir barbershop. Siapa pun kapster Anda bisa langsung menggunakannya dalam hitungan 5 menit.",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-blue-100 text-blue-800 border-blue-200",
    title: "Dukungan Penuh & Bantuan via WhatsApp",
    desc: "Ada kendala teknis atau pertanyaan cara rekap? Tim teknis kami siap memandu langsung melalui pesan WhatsApp setiap hari.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-purple-100 text-purple-800 border-purple-200",
    title: "Gratis Update Fitur Selamanya",
    desc: "Setiap penambahan fitur baru dan peningkatan kecepatan aplikasi kami berikan secara cuma-cuma tanpa pungutan biaya tambahan.",
  },
];

const STATS = [
  { number: "500+", label: "Barbershop Aktif", sub: "Di seluruh Indonesia" },
  { number: "10.000+", label: "Transaksi Sukses", sub: "Dicatat tiap bulan" },
  { number: "4.9 ★", label: "Rating Kepuasan", sub: "Dari pemilik barbershop" },
  { number: "100%", label: "Garansi Uang Kembali", sub: "7 hari tanpa ribet" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="keunggulan" className="py-24 bg-[#f5f2eb] border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold mb-3 border border-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>NILAI LEBIH UNTUK BISNIS ANDA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Kenapa Ratusan Barbershop Memilih POS Barbershop?
          </h2>

          <p className="mt-3 text-stone-600 text-base">
            Bandingkan dengan software kasir lain yang menagih biaya Rp 200.000 setiap
            bulan. Di sini Anda hemat jutaan rupiah!
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ADVANTAGES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} border flex items-center justify-center font-bold mb-4`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-Contrast Punch Stats Ribbon (Dark Stone Luxury Ribbon) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-stone-900 border border-stone-800 p-8 sm:p-10 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400 tracking-tight">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm font-bold text-stone-100 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
