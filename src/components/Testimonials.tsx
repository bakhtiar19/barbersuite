"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Andi Prasetyo",
    barbershop: "Gentleman Barbershop",
    city: "Jakarta Selatan",
    rating: 5,
    avatarColor: "bg-amber-600 text-stone-950",
    text: "Sebelumnya saya catat omset di buku tulis dan sering selisih uang kas. Sejak pakai Barber Suite, pembukuan rapi banget dan kapster bisa lihat bagian komisinya sendiri tanpa saling curiga.",
  },
  {
    name: "Rizky Hidayat",
    barbershop: "Urban Cut Studio",
    city: "Surabaya",
    rating: 5,
    avatarColor: "bg-amber-700 text-white",
    text: "Aplikasinya simpel sekali. Kapster saya yang gaptek langsung paham cuma dalam 5 menit. Sistem sekali bayar tanpa sewa bulanan ini bener-bener ramah buat pemilik UMKM.",
  },
  {
    name: "Budi Santoso",
    barbershop: "Kings Barbershop",
    city: "Bandung",
    rating: 5,
    avatarColor: "bg-emerald-700 text-white",
    text: "Fitur laporan keuangannya sangat membantu. Setiap malam saya bisa cek omset harian langsung dari HP tanpa repot menghitung nota kertas satu per satu.",
  },
  {
    name: "Dimas Arya",
    barbershop: "Fresh Cut Barbershop",
    city: "Yogyakarta",
    rating: 5,
    avatarColor: "bg-stone-800 text-amber-300",
    text: "Dulu pernah langganan aplikasi kasir lain ratusan ribu per bulan, lumayan membebani kas toko. Barber Suite ini cukup sekali bayar di awal, fiturnya malah jauh lebih pas buat operasional barbershop.",
  },
  {
    name: "Fajar Rahman",
    barbershop: "The Blade Barbershop",
    city: "Medan",
    rating: 5,
    avatarColor: "bg-red-800 text-white",
    text: "Support WhatsApp-nya responsif sekali saat saya tanya cara atur harga dan cetak struk Bluetooth. Dibimbing ramah sampai jalan lancar. Mantap!",
  },
  {
    name: "Gilang Maulana",
    barbershop: "Classic Cuts",
    city: "Semarang",
    rating: 5,
    avatarColor: "bg-stone-900 text-white",
    text: "Database nomor kontak tamu berguna banget buat sapa pelanggan yang sudah sebulan belum potong rambut. Kursi pangkas jadi selalu terisi jadwal.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-stone-300/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black mb-3 border border-amber-300">
            <MessageSquare className="w-3.5 h-3.5 text-amber-800" />
            <span>KATA MEREKA YANG SUDAH PAKAI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Cerita Nyata Pemilik Barbershop
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Bergabunglah bersama ratusan pemilik barbershop yang telah membuat operasional kasirnya lebih rapi dan menguntungkan.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white border-2 border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <div
                  className={`w-9 h-9 rounded-full ${t.avatarColor} font-black flex items-center justify-center text-xs shadow-xs border border-amber-500/20`}
                >
                  {t.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{t.name}</h4>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {t.barbershop} • {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
