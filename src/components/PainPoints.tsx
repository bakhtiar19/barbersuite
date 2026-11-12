"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, TrendingDown, Users, Package, AlertTriangle } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: FileText,
    accentColor: "border-amber-300/80",
    iconBg: "bg-amber-100 text-amber-800",
    tag: "Administrasi Ribet",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
    title: "Pencatatan Masih Pakai Buku / Nota Kertas",
    description:
      "Nota kertas mudah hilang, sobek, atau terkena air. Di akhir bulan, Anda pusing berjam-jam menghitung tumpukan kertas nota yang tidak jelas.",
  },
  {
    icon: TrendingDown,
    accentColor: "border-rose-300/80",
    iconBg: "bg-rose-100 text-rose-800",
    tag: "Omset Kabur",
    tagColor: "bg-rose-50 text-rose-800 border-rose-200",
    title: "Tidak Tahu Keuntungan Bersih Secara Real-Time",
    description:
      "Berapa omset hari ini? Berapa porsi komisi kapster? Karena tidak ada sistem kasir digital, Anda cuma bisa mengira-ngira apakah barbershop untung atau tekor.",
  },
  {
    icon: Users,
    accentColor: "border-blue-300/80",
    iconBg: "bg-blue-100 text-blue-800",
    tag: "Pelanggan Hilang",
    tagColor: "bg-blue-50 text-blue-800 border-blue-200",
    title: "Susah Menghubungi Kembali Pelanggan Lama",
    description:
      "Tamu yang puas datang memotong rambut, tapi Anda tidak menyimpan nomor WhatsApp mereka. Akhirnya tidak bisa mengirimkan promo diskon saat sepi.",
  },
  {
    icon: Package,
    accentColor: "border-emerald-300/80",
    iconBg: "bg-emerald-100 text-emerald-800",
    tag: "Stok Boncos",
    tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    title: "Persediaan Pomade & Shaving Cream Tiba-Tiba Habis",
    description:
      "Tamu ingin membeli pomade tapi stoknya kosong tanpa disadari. Anda kehilangan potensi penjualan produk sampingan yang sebenarnya sangat menguntungkan.",
  },
];

export default function PainPoints() {
  return (
    <section id="masalah" className="py-20 bg-[#f5f2eb] border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/90 text-rose-800 text-xs font-bold mb-3 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>KENDALA NYATA PEMILIK BARBERSHOP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Apakah Hal-Hal Ini Masih Menghambat Bisnis Anda?
          </h2>

          <p className="mt-3 text-stone-600 text-base">
            Mengelola barbershop seharusnya fokus ke kualitas potongan rambut dan
            kepuasan tamu, bukan pusing urusan pembukuan manual.
          </p>
        </div>

        {/* 4 Cards Grid with Color Accents */}
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
                className={`bg-white rounded-2xl p-6 sm:p-7 border-2 ${item.accentColor} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center font-bold`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
