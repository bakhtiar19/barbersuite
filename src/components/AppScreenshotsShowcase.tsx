"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  BarChart3,
  Users2,
  FileSpreadsheet,
  Scissors,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { CHECKOUT_URL } from "@/config/site";

interface ShowcaseTab {
  id: string;
  label: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
}

const TABS: ShowcaseTab[] = [
  {
    id: "kasir",
    label: "Kasir Kilat",
    icon: Smartphone,
    badge: "MODUL KASIR MUDAH",
    title: "Layar Kasir Cepat dengan Durasi Pengerjaan",
    description:
      "Tampilan kasir yang simpel dan tidak bikin bingung. Pilih barber yang bertugas, pilih model cukur atau perawatan rambut, lalu langsung selesaikan pembayaran tunai maupun QRIS.",
    highlights: [
      "Pilih nama kapster yang mencukur dalam 1 ketukan",
      "Perkiraan durasi otomatis untuk atur antrean pelanggan",
      "Pencarian cepat layanan & produk terlaris",
      "Langsung cetak struk nota via printer Bluetooth",
    ],
    imageSrc: "/screenshots/kasir.jpg",
  },
  {
    id: "beranda",
    label: "Pantau Omset",
    icon: BarChart3,
    badge: "GRAFIK OMSET REAL-TIME",
    title: "Lihat Omset Harian & Tren Penjualan Tiap Saat",
    description:
      "Ketahui persis berapa keuntungan barbershop Anda hari ini, berapa tamu yang sudah dicukur, serta grafik perkembangan omset bulanan secara rapi.",
    highlights: [
      "Total uang masuk harian langsung terlihat di layar utama",
      "Grafik tren omset 30 hari untuk evaluasi kemajuan usaha",
      "Daftar layanan potong rambut paling favorit",
      "Riwayat semua transaksi yang selesai hari ini",
    ],
    imageSrc: "/screenshots/beranda.jpg",
  },
  {
    id: "laporan",
    label: "Laporan Keuangan",
    icon: FileSpreadsheet,
    badge: "REKAP PEMBUKUAN",
    title: "Laporan Keuangan Rapi Siap Cetak & Ekspor Excel",
    description:
      "Tinggalkan buku tulis manual. Rekap pemasukan per kasir, komisi kapster, hingga rincian pembayaran tunai dan QRIS bisa langsung Anda download ke format Excel maupun file PDF siap cetak.",
    highlights: [
      "Download laporan keuangan ke Excel (CSV) & PDF dalam 1 klik",
      "Rincian komisi per kapster untuk hitung bagi hasil tanpa curiga",
      "Pemisahan uang tunai di laci kasir vs uang masuk QRIS/Transfer",
      "Pilihan filter harian, mingguan, maupun bulanan",
    ],
    imageSrc: "/screenshots/laporan.jpg",
  },
  {
    id: "pelanggan",
    label: "Database Tamu",
    icon: Users2,
    badge: "PELANGGAN BALIK LAGI",
    title: "Database Pelanggan & Sapaan WhatsApp Otomatis",
    description:
      "Simpan nomor dan riwayat potong rambut tamu Anda. Cari tamu yang sudah lebih dari sebulan belum potong rambut, lalu sapa kembali via WhatsApp agar jadwal cukurnya kembali terisi.",
    highlights: [
      "Otomatis tandai pelanggan yang lama tidak berkunjung",
      "Template pesan ramah WhatsApp siap kirim",
      "Catat model rambut favorit dan nomor kontak tamu",
      "Pencarian nama atau nomor pelanggan super cepat",
    ],
    imageSrc: "/screenshots/pelanggan.jpg",
  },
  {
    id: "barber",
    label: "Bagi Hasil Kapster",
    icon: Scissors,
    badge: "KOMISI TRANSPARAN",
    title: "Atur Tim Kapster & Bagi Hasil Adil Tanpa Selisih",
    description:
      "Cegah kesalahpahaman bagi hasil antara pemilik dan tukang cukur. Semua jumlah kepala yang dicukur dan total komisi tercatat otomatis dan transparan.",
    highlights: [
      "Pantau berapa tamu yang dicukur oleh masing-masing kapster",
      "Hitungan bagi hasil otomatis sesuai kesepakatan komisi",
      "Bebas tambah kapster baru tanpa batas",
      "Status kapster aktif atau sedang libur shift",
    ],
    imageSrc: "/screenshots/barber.jpg",
  },
  {
    id: "backup",
    label: "Aman & Bebas Offline",
    icon: ShieldCheck,
    badge: "PRIVASI 100% AMAN",
    title: "Bisa Dipakai Tanpa Internet & Data Toko Milik Anda Penuh",
    description:
      "Aplikasi tetap bisa melayani kasir meski sinyal ponsel hilang atau sedang mati lampu. Semua data tersimpan aman di HP Anda sendiri tanpa diintip server luar, lengkap dengan kunci PIN pengaman.",
    highlights: [
      "100% tetap jalan walau tanpa kuota maupun jaringan Wi-Fi",
      "Data finansial toko aman tersimpan di HP Anda",
      "Fitur kunci PIN agar staf kasir tidak sembarangan buka pembukuan",
      "Cadangkan (backup) data toko dengan mudah kapan pun",
    ],
    imageSrc: "/screenshots/backup.jpg",
  },
];

interface AppScreenshotsShowcaseProps {
  onOpenPayment?: () => void;
}

export default function AppScreenshotsShowcase({ onOpenPayment }: AppScreenshotsShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState<string>("kasir");
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section id="preview" className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-stone-300/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-black text-amber-950 bg-amber-200/90 border border-amber-300/80 px-4 py-1.5 rounded-full uppercase tracking-wider">
            TAMPILAN ASLI APLIKASI
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Lihat Langsung Kemudahan Barber Suite
          </h2>

          <p className="mt-3 sm:mt-4 text-stone-600 text-sm sm:text-base lg:text-lg">
            Antarmuka yang bersih, mudah dipahami, dan dirancang khusus agar kasir barbershop Anda bekerja cepat tanpa antrean menumpuk.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-stone-900 text-amber-300 shadow-md scale-102 border border-amber-400/40"
                    : "bg-white text-stone-700 hover:text-stone-950 hover:bg-[#F2ECE1] border border-stone-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-stone-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Showcase Card */}
        <div className="bg-white rounded-3xl border-2 border-stone-300/80 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Feature Narrative */}
              <div className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
                <span className="inline-block text-[11px] font-black tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase">
                  {activeTab.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight leading-tight">
                  {activeTab.title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Highlights List */}
                <div className="pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-3">
                    Keunggulan Fitur Ini:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeTab.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="font-semibold">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button (No direct price text) */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-4">
                  <a
                    href={CHECKOUT_URL}
                    onClick={(e) => {
                      if (onOpenPayment) {
                        e.preventDefault();
                        onOpenPayment();
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-6 py-3 rounded-xl shadow-md shadow-amber-500/20 transition-all cursor-pointer hover:scale-102"
                  >
                    <span>Dapatkan Akses Sekarang</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Real Screenshot in Sleek Smartphone Frame */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-[280px] sm:max-w-[310px] rounded-[36px] bg-stone-950 p-2.5 border-[6px] border-stone-900 shadow-2xl overflow-hidden ring-1 ring-stone-800">
                  {/* Smartphone dynamic notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-stone-900 rounded-full z-20" />

                  {/* Real Screenshot Image */}
                  <div className="relative w-full aspect-[9/19.5] rounded-[26px] overflow-hidden bg-stone-100">
                    <Image
                      src={activeTab.imageSrc}
                      alt={activeTab.title}
                      fill
                      sizes="(max-width: 768px) 280px, 310px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
