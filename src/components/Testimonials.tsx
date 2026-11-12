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
    text: "Sebelumnya saya catat omset di buku tulis dan sering selisih uang kas. Sejak pakai POS Barbershop, pembukuan rapi banget dan kapster bisa lihat bagian komisinya sendiri.",
  },
  {
    name: "Rizky Hidayat",
    barbershop: "Urban Cut Studio",
    city: "Surabaya",
    rating: 5,
    text: "Aplikasinya simpel sekali. Kapster saya yang gaptek langsung paham cuma dalam 5 menit. Harga Rp 50.000 sekali bayar ini bener-bener penolong pemilik UMKM.",
  },
  {
    name: "Budi Santoso",
    barbershop: "Kings Barbershop",
    city: "Bandung",
    rating: 5,
    text: "Fitur laporan keuangannya sangat membantu. Setiap malam saya bisa cek omset harian langsung dari HP tanpa repot menghitung nota manual satu per satu.",
  },
  {
    name: "Dimas Arya",
    barbershop: "Fresh Cut Barbershop",
    city: "Yogyakarta",
    rating: 5,
    text: "Dulu pernah langganan aplikasi kasir lain Rp 200.000 per bulan, lumayan membebani. POS Barbershop ini bayar Rp 50.000 sekali aja, fiturnya malah lebih pas buat barbershop.",
  },
  {
    name: "Fajar Rahman",
    barbershop: "The Blade Barbershop",
    city: "Medan",
    rating: 5,
    text: "Support WhatsApp-nya responsif sekali saat saya tanya cara atur harga layanan. Dibimbing sampai paham. Sangat recommended!",
  },
  {
    name: "Gilang Maulana",
    barbershop: "Classic Cuts",
    city: "Semarang",
    rating: 5,
    text: "Database nomor WA pelanggan berguna banget buat kirim promo pas tanggal tua. Tamu jadi rajin balik potong rambut ke sini.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>TESTIMONI PENGGUNA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cerita Sukses Rekan Barbershop
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Ratusan pemilik barbershop di Indonesia telah beralih ke kasir digital kami.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-slate-50/60 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-sm transition-shadow"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/70">
                <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center text-xs">
                  {t.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">
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
