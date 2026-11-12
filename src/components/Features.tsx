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
    badge: "KASIR KILAT",
    title: "Kasir Digital Super Cepat & Praktis",
    desc: "Proses transaksi dalam hitungan detik. Cukup pilih layanan potong rambut, styling, atau produk perawatan, lalu klik bayar. Antrean pelanggan jadi tertib dan cepat selesai.",
    previewTitle: "Tampilan Menu Kasir",
    previewItems: [
      { name: "Gentleman Classic Cut", price: "Rp 50.000" },
      { name: "Hair Tattoo / Design", price: "Rp 35.000" },
      { name: "Clay Matte Pomade 100g", price: "Rp 85.000" },
    ],
  },
  {
    icon: BarChart3,
    badge: "LAPORAN KEUANGAN",
    title: "Laporan Omset & Bagi Hasil Otomatis",
    desc: "Ketahui omset harian, mingguan, dan bulanan secara akurat tanpa kalkulator manual. Sistem otomatis menghitung komisi kapster sesuai persentase yang disepakati.",
    previewTitle: "Rekap Pendapatan Mingguan",
    previewItems: [
      { name: "Total Omset Minggu Ini", price: "Rp 8.450.000" },
      { name: "Bagi Hasil 3 Kapster", price: "Rp 3.380.000" },
      { name: "Laba Bersih Barbershop", price: "Rp 5.070.000" },
    ],
  },
  {
    icon: UserCheck,
    badge: "DATABASE MEMBER",
    title: "Manajemen Data Pelanggan & Histori Cukur",
    desc: "Simpan nomor WhatsApp, preferensi model rambut, dan riwayat kunjungan tamu. Kirimkan pesan promo atau ucapan ulang tahun langsung ke WhatsApp mereka.",
    previewTitle: "Member Terdaftar (340 Tamu)",
    previewItems: [
      { name: "Andi Wijaya (VIP)", price: "12x Kunjungan" },
      { name: "Bagas Pratama", price: "Preferensi: Fade Cut" },
      { name: "Doni Kusuma", price: "Poin Loyalitas: 120" },
    ],
  },
  {
    icon: Package,
    badge: "MANAJEMEN STOK",
    title: "Kontrol Stok Pomade & Produk Anti-Tekor",
    desc: "Pantau stok persediaan pomade, tonic rambut, silet, dan hair powder secara akurat. Dapatkan notifikasi otomatis saat persediaan mulai menipis.",
    previewTitle: "Status Stok Gudang",
    previewItems: [
      { name: "Waterbased Pomade", price: "Sisa 18 pcs" },
      { name: "Hair Powder Styling", price: "Sisa 4 pcs (Kritis)" },
      { name: "Beard Oil Organic", price: "Sisa 12 pcs" },
    ],
  },
  {
    icon: Calendar,
    badge: "RESERVASI & ANTREAN",
    title: "Jadwal Kapster & Reservasi Online",
    desc: "Atur jadwal kerja dan giliran kursi setiap kapster tanpa bentrok. Pelanggan bisa booking waktu cukur lebih awal sehingga tidak perlu menumpuk antre di lokasi.",
    previewTitle: "Jadwal Kursi Barber Hari Ini",
    previewItems: [
      { name: "Kursi 1 — Barber Rian", price: "Slot 13:00 (Booked)" },
      { name: "Kursi 2 — Barber Eko", price: "Tersedia Langsung" },
      { name: "Kursi 3 — Barber Arief", price: "Slot 14:30 (Booked)" },
    ],
  },
  {
    icon: CreditCard,
    badge: "MULTI PEMBAYARAN",
    title: "Dukungan QRIS, Transfer & Tunai",
    desc: "Terima pembayaran QRIS semua bank & e-wallet (GoPay, OVO, ShopeePay, DANA) maupun tunai. Semua riwayat tersimpan rapi tanpa selisih kas di akhir shift.",
    previewTitle: "Metode Pembayaran",
    previewItems: [
      { name: "QRIS All Payment", price: "Otomatis Tercatat" },
      { name: "Transfer BCA / Mandiri / BRI", price: "Terverifikasi" },
      { name: "Tunai & Uang Pas", price: "Hitung Kembalian" },
    ],
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>FITUR LENGKAP & PRAKTIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Semua Kebutuhan Barbershop, Selesai dalam Satu Aplikasi
          </h2>

          <p className="mt-3 text-slate-600 text-base">
            Dirancang sesederhana mungkin agar kapster dan kasir Anda bisa langsung
            pakai tanpa perlu kursus berhari-hari.
          </p>
        </div>

        {/* Feature Cards Grid (3 columns on desktop, 1 on mobile) */}
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
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/80 hover:bg-amber-50/20 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {feat.desc}
                  </p>
                </div>

                {/* Mini Preview Box */}
                <div className="bg-white rounded-xl p-3 border border-slate-200 text-xs">
                  <p className="font-bold text-slate-800 text-[11px] mb-2 pb-1.5 border-b border-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{feat.previewTitle}</span>
                  </p>
                  <div className="space-y-1.5 text-slate-600">
                    {feat.previewItems.map((item, i) => (
                      <div key={i} className="flex justify-between text-[11px]">
                        <span>{item.name}</span>
                        <span className="font-semibold text-slate-900">
                          {item.price}
                        </span>
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
