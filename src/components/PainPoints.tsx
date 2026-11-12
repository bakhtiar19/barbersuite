"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, TrendingDown, Users, Package, AlertCircle } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: FileText,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    title: "Pencatatan Manual yang Ribet",
    description:
      "Masih pakai buku tulis atau nota kertas? Rentan hilang, kotor, dan pusing saat rekap akhir bulan. Waktu habis sia-sia hanya untuk urusan kasir.",
  },
  {
    icon: TrendingDown,
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
    title: "Nggak Tahu Omset Real-Time",
    description:
      "Berapa omset hari ini? Siapa kapster yang paling laris? Tanpa sistem digital, kamu cuma menebak-nebak keuangan bisnismu sendiri.",
  },
  {
    icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Susah Tracking Pelanggan Loyal",
    description:
      "Pelanggan sering datang tapi kamu tidak punya nomor kontak dan histori cukurnya. Akhirnya tidak bisa kirim promo atau sapaan ulang tahun.",
  },
  {
    icon: Package,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    title: "Stok Pomade & Produk Berantakan",
    description:
      "Pomade, tonic, dan shampoo habis tanpa disadari. Pelanggan kecewa mau beli produk tapi stok kosong, potensi cuan melayang.",
  },
];

export default function PainPoints() {
  return (
    <section id="masalah" className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>TANTANGAN OPERASIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Masalah yang Sering Bikin Pemilik Barbershop Pusing
          </h2>

          <p className="mt-3 text-slate-600 text-base">
            Apakah barbershop atau salon Anda masih mengalami kendala-kendala ini?
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAIN_POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
