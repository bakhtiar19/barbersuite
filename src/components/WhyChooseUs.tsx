"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Zap, MessageCircle, RefreshCw, Award } from "lucide-react";

const ADVANTAGES = [
  {
    icon: DollarSign,
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "Sekali Bayar, Milik Selamanya",
    desc: "Cukup bayar Rp 50.000 sekali saja. Tanpa biaya langganan bulanan atau potongan transaksi. Hemat jutaan rupiah dibanding software kasir lain.",
  },
  {
    icon: Zap,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Sangat Mudah Digunakan",
    desc: "Tanpa panduan tebal. Tampilan dibuat sesederhana mungkin sehingga siapa pun bisa mengoperasikannya hanya dalam 5 menit.",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Konsultasi & Support WhatsApp",
    desc: "Mengalami kendala instalasi atau pertanyaan teknis? Tim kami siap mendampingi Anda via WhatsApp kapan pun dibutuhkan.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-purple-50 text-purple-600",
    title: "Gratis Update Selamanya",
    desc: "Setiap penambahan fitur baru dan perbaikan performa bisa Anda nikmati secara gratis tanpa tambahan biaya sepeser pun.",
  },
];

const STATS = [
  { number: "500+", label: "Barbershop Menggunakan" },
  { number: "10.000+", label: "Transaksi Diproses" },
  { number: "4.9 ★", label: "Kepuasan Pelanggan" },
  { number: "24/7", label: "Bantuan via WhatsApp" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="keunggulan" className="py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>KENAPA PILIH KAMI?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Alasan Mengapa POS Barbershop Paling Tepat untuk Anda
          </h2>

          <p className="mt-3 text-slate-600 text-base">
            Bandingkan dengan aplikasi kasir konvensional yang membebani biaya tiap bulan.
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
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center font-bold mb-4`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div
          ref={ref}
          className="bg-white rounded-2xl border border-slate-200 p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xs"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-600">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
