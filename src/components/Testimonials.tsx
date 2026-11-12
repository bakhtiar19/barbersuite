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
    avatarColor: "bg-amber-500 text-stone-950",
    text: "Sebelumnya saya catat omset di buku tulis dan sering selisih uang kas. Sejak pakai Barber Suite, pembukuan rapi banget dan kapster bisa lihat bagian komisinya sendiri.",
  },
  {
    name: "Rizky Hidayat",
    barbershop: "Urban Cut Studio",
    city: "Surabaya",
    rating: 5,
    avatarColor: "bg-blue-600 text-white",
    text: "Aplikasinya simpel sekali. Kapster saya yang gaptek langsung paham cuma dalam 5 menit. Harga Rp 50.000 sekali bayar ini bener-bener penolong pemilik UMKM.",
  },
  {
    name: "Budi Santoso",
    barbershop: "Kings Barbershop",
    city: "Bandung",
    rating: 5,
    avatarColor: "bg-emerald-600 text-white",
    text: "Fitur laporan keuangannya sangat membantu. Setiap malam saya bisa cek omset harian langsung dari HP tanpa repot menghitung nota manual satu per satu.",
  },
  {
    name: "Dimas Arya",
    barbershop: "Fresh Cut Barbershop",
    city: "Yogyakarta",
    rating: 5,
    avatarColor: "bg-purple-600 text-white",
    text: "Dulu pernah langganan aplikasi kasir lain Rp 200.000 per bulan, lumayan membebani. Barber Suite ini bayar Rp 50.000 sekali aja, fiturnya malah lebih pas buat barbershop.",
  },
  {
    name: "Fajar Rahman",
    barbershop: "The Blade Barbershop",
    city: "Medan",
    rating: 5,
    avatarColor: "bg-rose-600 text-white",
    text: "Support WhatsApp-nya responsif sekali saat saya tanya cara atur harga layanan. Dibimbing sampai paham. Sangat recommended!",
  },
  {
    name: "Gilang Maulana",
    barbershop: "Classic Cuts",
    city: "Semarang",
    rating: 5,
    avatarColor: "bg-teal-600 text-white",
    text: "Database nomor WA pelanggan berguna banget buat kirim promo pas tanggal tua. Tamu jadi rajin balik potong rambut ke sini.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 border border-amber-200">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            <span>KATA MEREKA YANG SUDAH PAKAI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Cerita Nyata Pemilik Barbershop
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Bergabunglah bersama ratusan pemilik barbershop yang telah menaikkan level
            bisnisnya.
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
              className="bg-white border border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <div
                  className={`w-9 h-9 rounded-full ${t.avatarColor} font-black flex items-center justify-center text-xs shadow-2xs`}
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
