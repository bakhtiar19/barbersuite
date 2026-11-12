"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  BarChart3,
  UserCheck,
  Package,
  Calendar,
  CreditCard,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: Monitor,
    iconColor: "text-amber-800 bg-amber-100",
    badge: "KASIR KILAT",
    badgeColor: "bg-amber-100 text-amber-900",
    title: "Kasir Digital Super Cepat & Praktis",
    desc: "Input transaksi hitungan detik. Cukup sentuh layanan potong rambut, cuci, atau pomade, lalu pilih pembayaran. Antrean kasir selesai dalam sekejap.",
    previewTitle: "Menu Kasir Sentuh Cepat",
    previewItems: [
      { name: "Gentleman Classic Cut", price: "Rp 50.000", tag: "Laris" },
      { name: "Haircut + Cuci & Pijat", price: "Rp 70.000", tag: "Favorit" },
      { name: "Pomade Oilbased 100g", price: "Rp 85.000", tag: "Produk" },
    ],
  },
  {
    icon: BarChart3,
    iconColor: "text-emerald-800 bg-emerald-100",
    badge: "LAPORAN OMSET",
    badgeColor: "bg-emerald-100 text-emerald-900",
    title: "Laporan Keuangan & Komisi Kapster Otomatis",
    desc: "Bagi hasil kapster dihitung otomatis sesuai persentase yang Anda tentukan (misal 40:60). Tidak ada kecurigaan atau selisih hitung antar kapster.",
    previewTitle: "Rekap Pembagian Komisi",
    previewItems: [
      { name: "Total Omset Hari Ini", price: "Rp 1.450.000", tag: "Kas" },
      { name: "Komisi 3 Kapster (40%)", price: "Rp 580.000", tag: "Otomatis" },
      { name: "Pendapatan Bersih Owner", price: "Rp 870.000", tag: "Bersih" },
    ],
  },
  {
    icon: UserCheck,
    iconColor: "text-blue-800 bg-blue-100",
    badge: "DATABASE MEMBER",
    badgeColor: "bg-blue-100 text-blue-900",
    title: "Manajemen Data Tamu & Histori Model Cukur",
    desc: "Catat nomor WhatsApp dan preferensi gaya rambut tiap tamu. Ketika mereka datang lagi, kapster langsung tahu model rambut langganannya.",
    previewTitle: "Buku Member (340 Tamu)",
    previewItems: [
      { name: "Andi Wijaya", price: "Fade Low Cut", tag: "12x Datang" },
      { name: "Bagas Pratama", price: "Pompadour Sidepart", tag: "Member VIP" },
      { name: "Doni Kusuma", price: "French Crop Textured", tag: "Kemarin" },
    ],
  },
  {
    icon: Package,
    iconColor: "text-purple-800 bg-purple-100",
    badge: "KONTROL INVENTORI",
    badgeColor: "bg-purple-100 text-purple-900",
    title: "Pantau Stok Pomade & Perlengkapan Cukur",
    desc: "Lacak jumlah botol pomade, tonik rambut, dan silet cukur secara live. Dapatkan peringatan otomatis ketika persediaan sisa sedikit.",
    previewTitle: "Status Stok Barbershop",
    previewItems: [
      { name: "Waterbased Matte Clay", price: "18 pcs", tag: "Aman" },
      { name: "Hair Styling Powder", price: "3 pcs", tag: "Kritis" },
      { name: "Tonic Penyubur Rambut", price: "12 pcs", tag: "Aman" },
    ],
  },
  {
    icon: Calendar,
    iconColor: "text-rose-800 bg-rose-100",
    badge: "JADWAL & ANTREAN",
    badgeColor: "bg-rose-100 text-rose-900",
    title: "Atur Kursi Barber & Reservasi Tamu",
    desc: "Atur jadwal kerja kapster agar tidak ada antrean bertumpuk di ruang tunggu. Tamu juga bisa booking jam cukur favoritnya lebih awal.",
    previewTitle: "Status Kursi Barber Live",
    previewItems: [
      { name: "Kursi 1 — Barber Rian", price: "Sedang Cukur", tag: "Aktif" },
      { name: "Kursi 2 — Barber Eko", price: "Tersedia", tag: "Siap Tamu" },
      { name: "Kursi 3 — Barber Arief", price: "Booking 14:00", tag: "Reservasi" },
    ],
  },
  {
    icon: CreditCard,
    iconColor: "text-teal-800 bg-teal-100",
    badge: "MULTI PAYMENT",
    badgeColor: "bg-teal-100 text-teal-900",
    title: "Mendukung QRIS, Transfer & Tunai",
    desc: "Tamu bisa membayar lewat QRIS semua bank dan e-wallet (GoPay, OVO, ShopeePay, DANA) maupun uang tunai dengan perhitungan kembalian otomatis.",
    previewTitle: "Metode Kasir Aktif",
    previewItems: [
      { name: "QRIS All E-Wallet & Bank", price: "Terintegrasi", tag: "Instan" },
      { name: "Transfer Bank BCA / BRI", price: "Otomatis Rekap", tag: "Online" },
      { name: "Uang Pas & Hitung Kembalian", price: "Cegah Selisih", tag: "Tunai" },
    ],
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>SOLUSI LENGKAP SEKALI PAKAI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Fitur Canggih yang Dibuat Simpel & Mudah Dipakai
          </h2>

          <p className="mt-3 text-stone-600 text-base">
            Tanpa istilah teknis yang memusingkan. Semua kapster Anda bisa langsung
            mengoperasikannya dalam waktu 5 menit.
          </p>
        </div>

        {/* 6 Grid Cards with Vibrant Micro Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${feat.iconColor} flex items-center justify-center font-bold`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${feat.badgeColor}`}
                    >
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5 font-normal">
                    {feat.desc}
                  </p>
                </div>

                {/* Micro UI Preview Snippet with Colored Tags */}
                <div className="bg-[#FAF8F5] rounded-xl p-3 border border-stone-200/80 text-xs">
                  <p className="font-bold text-stone-800 text-[11px] mb-2 pb-1.5 border-b border-stone-200 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{feat.previewTitle}</span>
                    </span>
                    <span className="text-[10px] text-stone-400 font-normal">Live</span>
                  </p>
                  <div className="space-y-1.5 text-stone-700">
                    {feat.previewItems.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px]">
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-stone-900">
                            {item.price}
                          </span>
                          <span className="text-[9px] bg-white border border-stone-200 px-1.5 py-0.2 rounded text-stone-600 font-semibold">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    ))}
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
