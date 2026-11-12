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
  ExternalLink,
} from "lucide-react";

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
    badge: "MODUL KASIR",
    title: "Layar Kasir Cepat dengan Durasi Pengerjaan",
    description:
      "Tampilan kasir yang simpel dan responsif. Pilih barber yang bertugas, pilih layanan (Haircut 30m, Wash 45m, Massage 60m, Coloring 90m), lalu langsung selesaikan pembayaran dengan QRIS, Tunai, atau Transfer.",
    highlights: [
      "Penugasan barber per transaksi (contoh: Barber Irfan)",
      "Pilihan durasi layanan otomatis untuk kelola antrean",
      "Filter Terlaris, A-Z, dan Urut Harga",
      "Dukungan cetak struk Bluetooth thermal instan",
    ],
    imageSrc: "/screenshots/kasir.jpg",
  },
  {
    id: "beranda",
    label: "Dashboard & Omset",
    icon: BarChart3,
    badge: "DASHBOARD REAL-TIME",
    title: "Pantau Omset Harian & Grafik Tren 30 Hari",
    description:
      "Dashboard utama yang memperlihatkan omset hari ini, jumlah transaksi selesai, rata-rata belanja per tamu, serta grafik batang tren omset 30 hari secara visual.",
    highlights: [
      "Angka omset harian dan jumlah transaksi real-time",
      "Grafik tren omset 30 hari (harian & bulanan)",
      "Layanan terlaris bulan ini",
      "Daftar transaksi terkini lengkap dengan metode pembayaran",
    ],
    imageSrc: "/screenshots/beranda.jpg",
  },
  {
    id: "laporan",
    label: "Laporan & Ekspor",
    icon: FileSpreadsheet,
    badge: "ANALITIK BISNIS",
    title: "Laporan Keuangan dengan Ekspor PDF & Excel CSV",
    description:
      "Rekap keuangan lengkap dengan pemisahan omset per layanan, komisi per barber, dan metode pembayaran. Anda bisa langsung mengunduh laporan dalam format CSV (Excel UTF-8 BOM) dan dokumen PDF siap cetak.",
    highlights: [
      "Ekspor 1-klik ke format CSV (Excel) & PDF",
      "Rincian pendapatan per barber untuk hitung gaji transparan",
      "Pemisahan transaksi QRIS, Transfer Bank, dan Tunai",
      "Filter fleksibel: Harian, Mingguan, Bulanan, dan Rentang Kustom",
    ],
    imageSrc: "/screenshots/laporan.jpg",
  },
  {
    id: "pelanggan",
    label: "CRM & WhatsApp",
    icon: Users2,
    badge: "RETENSI PELANGGAN",
    title: "Database Pelanggan & Follow-Up WhatsApp Cerdas",
    description:
      "Simpan histori transaksi tiap tamu. Filter otomatis tamu yang 'Belum berkunjung > 30 hari' dan sapa mereka kembali dengan template pesan WhatsApp dinamis agar kembali potong rambut di barbershop Anda.",
    highlights: [
      "Filter cerdas: Tamu yang belum berkunjung > 30 hari",
      "Template WhatsApp dinamis: 'Halo {nama}, sudah {minggu} minggu...'",
      "Riwayat total nominal belanja dan frekuensi kunjungan tiap tamu",
      "Pencarian cepat berdasarkan nama atau nomor WhatsApp",
    ],
    imageSrc: "/screenshots/pelanggan.jpg",
  },
  {
    id: "barber",
    label: "Manajemen Barber",
    icon: Scissors,
    badge: "PERFORMA TIM",
    title: "Kelola Tim Kapster & Pantau Performa Individu",
    description:
      "Ketahui persis kontribusi setiap barber. Pantau berapa jumlah transaksi yang ditangani, jumlah pelanggan unik, serta total omset yang dihasilkan masing-masing kapster tanpa saling curiga.",
    highlights: [
      "Status aktif / nonaktif untuk tiap kapster",
      "Pelacakan jumlah tamu unik yang dicukur tiap barber",
      "Rekap total omset per barber untuk memudahkan bagi hasil",
      "Tambah dan atur profil kapster tanpa batas",
    ],
    imageSrc: "/screenshots/barber.jpg",
  },
  {
    id: "backup",
    label: "Offline & Keamanan",
    icon: ShieldCheck,
    badge: "KEAMANAN MAKSIMAL",
    title: "100% Offline-First SQLite Lokal & Backup Terenkripsi",
    description:
      "Data tersimpan 100% di memori perangkat Anda dengan mesin SQLite lokal. Tidak ada server cloud luar yang mengintip data finansial Anda. Buat backup file .bms dengan checksum SHA-256 dan kunci akses dengan PIN aplikasi.",
    highlights: [
      "100% offline — Tidak butuh koneksi internet untuk beroperasi",
      "Ekspor file cadangan .bms dengan verifikasi checksum SHA-256",
      "Snapshot otomatis lokal sebagai jaring pengaman data",
      "PIN Aplikasi opsional untuk mencegah akses tidak berwenang",
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
    <section id="preview" className="py-24 bg-[#FAF8F5] border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Moka POS style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-amber-950 bg-amber-200/80 border border-amber-300 px-4 py-1 rounded-full uppercase tracking-wider">
            TAMPILAN ASLI APLIKASI
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Lihat Langsung Tampilan Nyata Barber Suite
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Antarmuka yang bersih, modern, dan dirancang khusus untuk kenyamanan layar
            HP Android kasir barbershop Anda.
          </p>
        </div>

        {/* Feature Navigation Tabs (Pill Bar) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white/80 p-2 rounded-2xl border border-stone-200 max-w-3xl mx-auto shadow-xs">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#111827] text-amber-400 shadow-sm"
                    : "text-stone-600 hover:text-stone-950 hover:bg-stone-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display: Left Details, Right Real Screenshot */}
        <div className="bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-10 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Feature Explanation */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
                    {activeTab.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-4 leading-tight">
                    {activeTab.title}
                  </h3>

                  <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                    {activeTab.description}
                  </p>
                </div>

                {/* Highlights List with Green Checkmarks */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-black uppercase tracking-wider text-stone-500">
                    Keunggulan Modul Ini:
                  </p>
                  <ul className="space-y-2.5">
                    {activeTab.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-semibold">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA for this feature */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenPayment?.()}
                    className="inline-flex items-center gap-2 text-xs font-black text-stone-900 bg-amber-400 hover:bg-amber-300 px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Dapatkan Fitur Ini — Rp 50.000</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Real Screenshot in Sleek Smartphone Frame */}
              <div className="lg:col-span-5 flex justify-center">
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
