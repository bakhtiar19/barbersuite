"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Users,
  Smartphone,
  TrendingUp,
  Clock,
  CheckCircle2,
  Scissors,
  Search,
  Sparkles,
  Wifi,
  Battery,
  Signal,
  CreditCard,
  Printer,
  ChevronRight,
  UserCheck,
  Award,
} from "lucide-react";

type TabKey = "dashboard" | "kasir" | "laporan" | "pelanggan";

interface TabItem {
  id: TabKey;
  label: string;
  badge: string;
  icon: typeof LayoutDashboard;
  description: string;
  features: string[];
}

const TABS: TabItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    badge: "Ringkasan Bisnis",
    icon: LayoutDashboard,
    description: "Pantau denyut bisnis barbershop Anda secara real-time dalam satu layar yang ringkas dan informatif.",
    features: [
      "Total omset harian & bulanan otomatis",
      "Jumlah antrean pelanggan hari ini",
      "Peringkat layanan paling laris",
      "Grafik tren kunjungan per jam sibuk",
    ],
  },
  {
    id: "kasir",
    label: "Kasir",
    badge: "Input Cepat 15 Detik",
    icon: Receipt,
    description: "Proses transaksi kilat tanpa ribet. Pilih barber, pilih model cukur atau produk, langsung cetak struk.",
    features: [
      "Katalog layanan & produk dengan foto",
      "Pemisahan komisi barber otomatis per nota",
      "Dukung pembayaran Tunai, QRIS, & Transfer",
      "Koneksi instan ke printer thermal Bluetooth",
    ],
  },
  {
    id: "laporan",
    label: "Laporan",
    badge: "Rekap Otomatis",
    icon: BarChart3,
    description: "Hilangkan stres hitung komisi manual di akhir bulan. Semua bagi hasil barber tercatat transparan.",
    features: [
      "Hitung otomatis komisi per capster/barber",
      "Laporan laba bersih & perputaran pomade/produk",
      "Ekspor laporan transaksi ke Excel & PDF",
      "Kirim rekap harian langsung ke WhatsApp Owner",
    ],
  },
  {
    id: "pelanggan",
    label: "Pelanggan",
    badge: "Database & Retensi",
    icon: Users,
    description: "Ketahui preferensi gaya rambut tiap pelanggan dan bangun hubungan loyalitas agar mereka selalu kembali.",
    features: [
      "Catatan gaya potongan & nomor sepatu clipper",
      "Riwayat kunjungan & total belanja pelanggan",
      "Sistem poin reward dan diskon member",
      "Kirim pesan pengingat cukur via WhatsApp",
    ],
  },
];

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const currentTabInfo = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section id="preview" className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tampilan Aplikasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Lihat Langsung <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Tampilannya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400"
          >
            Interface yang bersih, modern, dan mudah digunakan
          </motion.p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md overflow-x-auto max-w-full">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive ? "text-black font-semibold" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 rounded-xl shadow-lg shadow-amber-500/25"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive App Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Phone Frame Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Phone Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Outer decorative phone shell */}
              <div className="relative rounded-[44px] p-3 sm:p-3.5 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-950 border border-neutral-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.15)]">
                {/* Physical buttons on phone frame */}
                <div className="absolute -left-[5px] top-24 w-[3px] h-10 bg-neutral-600 rounded-l" />
                <div className="absolute -left-[5px] top-38 w-[3px] h-10 bg-neutral-600 rounded-l" />
                <div className="absolute -right-[5px] top-28 w-[3px] h-14 bg-neutral-600 rounded-r" />

                {/* Inner Phone Screen */}
                <div className="relative w-full h-[620px] sm:h-[650px] rounded-[34px] bg-[#0c0f17] overflow-hidden flex flex-col border border-neutral-800 text-neutral-200 select-none">
                  {/* Status Bar */}
                  <div className="h-7 px-6 pt-2 flex items-center justify-between text-[11px] text-neutral-400 font-medium z-30">
                    <span>09:41</span>
                    {/* Dynamic Island Pill */}
                    <div className="w-20 h-4 bg-black rounded-full mx-auto flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 mr-2" />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>

                  {/* Screen Content Switcher */}
                  <div className="relative flex-1 overflow-hidden p-3 pt-2">
                    <AnimatePresence mode="wait">
                      {activeTab === "dashboard" && (
                        <motion.div
                          key="tab-dashboard"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="h-full flex flex-col space-y-3"
                        >
                          {/* DUMMY: Ganti dengan data real */}
                          {/* TODO: Ganti dengan screenshot real */}
                          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">POS Barbershop</p>
                              <h3 className="text-sm font-bold text-white">Kingsman Barber Studio</h3>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Buka
                            </div>
                          </div>

                          {/* Metric 1 */}
                          <div className="p-3 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800">
                            <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                              <span>Total Omset Hari Ini</span>
                              <span className="text-emerald-400 text-[10px] font-semibold flex items-center gap-0.5">
                                <TrendingUp className="w-3 h-3" /> +28%
                              </span>
                            </div>
                            <div className="text-xl font-black text-amber-400 tracking-tight">Rp 1.450.000</div>
                            <p className="text-[9px] text-neutral-500 mt-0.5">18 Transaksi terselesaikan</p>
                          </div>

                          {/* 2 Mini Cards */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                              <div className="text-[10px] text-neutral-400">Antrean Aktif</div>
                              <div className="text-lg font-bold text-white mt-0.5">4 Orang</div>
                              <span className="text-[9px] text-amber-400 font-medium">~15 mnt tunggu</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                              <div className="text-[10px] text-neutral-400">Capster On Duty</div>
                              <div className="text-lg font-bold text-white mt-0.5">3 Barber</div>
                              <span className="text-[9px] text-blue-400 font-medium">Siap melayani</span>
                            </div>
                          </div>

                          {/* Quick Action Grid */}
                          <div>
                            <div className="text-[10px] font-semibold text-neutral-400 mb-1.5">Aksi Cepat</div>
                            <div className="grid grid-cols-3 gap-1.5">
                              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                                <Receipt className="w-4 h-4 mx-auto text-amber-400 mb-1" />
                                <span className="text-[9px] font-medium text-neutral-200 leading-tight block">Kasir Baru</span>
                              </div>
                              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                                <Clock className="w-4 h-4 mx-auto text-blue-400 mb-1" />
                                <span className="text-[9px] font-medium text-neutral-200 leading-tight block">Antrean</span>
                              </div>
                              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                                <BarChart3 className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                                <span className="text-[9px] font-medium text-neutral-200 leading-tight block">Rekap</span>
                              </div>
                            </div>
                          </div>

                          {/* Recent Orders List */}
                          <div className="flex-1 flex flex-col justify-end">
                            <div className="text-[10px] font-semibold text-neutral-400 mb-1">Transaksi Terakhir</div>
                            <div className="space-y-1.5">
                              <div className="p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-[11px]">
                                <div>
                                  <div className="font-semibold text-white">Classic Cut + Wash</div>
                                  <div className="text-[9px] text-neutral-400">Barber Reza • QRIS</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-amber-400">Rp 65.000</div>
                                  <div className="text-[9px] text-emerald-400">Sukses</div>
                                </div>
                              </div>
                              <div className="p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-[11px]">
                                <div>
                                  <div className="font-semibold text-white">Beard Trim & Massage</div>
                                  <div className="text-[9px] text-neutral-400">Barber Budi • Tunai</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-amber-400">Rp 45.000</div>
                                  <div className="text-[9px] text-emerald-400">Sukses</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Mockup Indicator Tag */}
                          <div className="mt-auto pt-2 text-center border-t border-neutral-800/80">
                            {/* TODO: Ganti dengan screenshot real */}
                            <span className="text-[10px] text-amber-400/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              Screenshot Dashboard Preview
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "kasir" && (
                        <motion.div
                          key="tab-kasir"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="h-full flex flex-col space-y-2.5"
                        >
                          {/* DUMMY: Ganti dengan data real */}
                          {/* TODO: Ganti dengan screenshot real */}
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800">
                            <div>
                              <div className="text-[9px] text-neutral-400">POS Kasir #TRX-1082</div>
                              <h3 className="text-xs font-bold text-white">Pilih Layanan & Bayar</h3>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold">
                              Barber Dimas
                            </span>
                          </div>

                          {/* Service Cart Items */}
                          <div className="space-y-1.5 flex-1">
                            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                  <Scissors className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-[11px] font-semibold text-white">Gentleman Cut & Wash</div>
                                  <div className="text-[9px] text-neutral-400">1x • Komisi Capster Rp 25.000</div>
                                </div>
                              </div>
                              <div className="text-[11px] font-bold text-amber-400">Rp 65.000</div>
                            </div>

                            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                  <Sparkles className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-[11px] font-semibold text-white">Beard Sculpt & Towel</div>
                                  <div className="text-[9px] text-neutral-400">1x • Komisi Capster Rp 15.000</div>
                                </div>
                              </div>
                              <div className="text-[11px] font-bold text-amber-400">Rp 35.000</div>
                            </div>

                            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                  <Award className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-[11px] font-semibold text-white">Matte Clay Pomade</div>
                                  <div className="text-[9px] text-neutral-400">1x Produk Ritel</div>
                                </div>
                              </div>
                              <div className="text-[11px] font-bold text-amber-400">Rp 85.000</div>
                            </div>
                          </div>

                          {/* Payment Summary */}
                          <div className="p-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-1 text-[11px]">
                            <div className="flex justify-between text-neutral-400 text-[10px]">
                              <span>Subtotal</span>
                              <span>Rp 185.000</span>
                            </div>
                            <div className="flex justify-between text-emerald-400 text-[10px]">
                              <span>Diskon Member Loyal</span>
                              <span>-Rp 15.000</span>
                            </div>
                            <div className="flex justify-between font-bold text-white pt-1 border-t border-neutral-800">
                              <span>Total Bayar</span>
                              <span className="text-amber-400 text-sm">Rp 170.000</span>
                            </div>
                          </div>

                          {/* Quick Payment Selection */}
                          <div className="grid grid-cols-3 gap-1.5">
                            <button className="py-1.5 px-2 rounded-lg bg-amber-500 text-black text-[10px] font-bold text-center">
                              QRIS
                            </button>
                            <button className="py-1.5 px-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-medium text-center">
                              Tunai
                            </button>
                            <button className="py-1.5 px-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-medium text-center">
                              Debit
                            </button>
                          </div>

                          {/* Action Button */}
                          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
                            <Printer className="w-3.5 h-3.5" />
                            Cetak Struk Bluetooth
                          </button>

                          {/* Mockup Indicator Tag */}
                          <div className="pt-1 text-center">
                            {/* TODO: Ganti dengan screenshot real */}
                            <span className="text-[10px] text-amber-400/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              Screenshot Kasir POS
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "laporan" && (
                        <motion.div
                          key="tab-laporan"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="h-full flex flex-col space-y-2.5"
                        >
                          {/* DUMMY: Ganti dengan data real */}
                          {/* TODO: Ganti dengan screenshot real */}
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800">
                            <div>
                              <div className="text-[9px] text-neutral-400">Laporan Penjualan & Komisi</div>
                              <h3 className="text-xs font-bold text-white">Bulan Berjalan (November)</h3>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold">
                              Bulan Ini
                            </span>
                          </div>

                          {/* Big Stat */}
                          <div className="p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                            <span className="text-[10px] text-neutral-400">Total Omset Kotor</span>
                            <div className="text-xl font-black text-amber-400">Rp 18.750.000</div>
                            <div className="flex items-center justify-between text-[9px] text-neutral-400 mt-1">
                              <span>312 Transaksi</span>
                              <span className="text-emerald-400 font-semibold">+18.4% vs bln lalu</span>
                            </div>
                          </div>

                          {/* Chart Representation */}
                          <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                            <div className="text-[10px] font-semibold text-neutral-300 mb-2">Tren Mingguan</div>
                            <div className="flex items-end justify-between h-16 px-2 gap-2">
                              <div className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-neutral-800 rounded-t h-8" />
                                <span className="text-[8px] text-neutral-500">M1</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-neutral-800 rounded-t h-10" />
                                <span className="text-[8px] text-neutral-500">M2</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-neutral-800 rounded-t h-12" />
                                <span className="text-[8px] text-neutral-500">M3</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-gradient-to-t from-amber-500 to-yellow-400 rounded-t h-16 shadow-lg shadow-amber-500/20" />
                                <span className="text-[8px] text-amber-400 font-bold">M4</span>
                              </div>
                            </div>
                          </div>

                          {/* Barber Commission Breakdown */}
                          <div className="flex-1 space-y-1">
                            <div className="text-[10px] font-semibold text-neutral-400">Bagi Hasil Komisi Capster</div>
                            <div className="p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-[11px]">
                              <div>
                                <div className="font-semibold text-white">Reza Fahlevi (Head Barber)</div>
                                <div className="text-[9px] text-neutral-400">124 Jasa • Komisi 40%</div>
                              </div>
                              <div className="text-right font-bold text-amber-400">Rp 2.480.000</div>
                            </div>
                            <div className="p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-[11px]">
                              <div>
                                <div className="font-semibold text-white">Budi Santoso (Barber)</div>
                                <div className="text-[9px] text-neutral-400">98 Jasa • Komisi 40%</div>
                              </div>
                              <div className="text-right font-bold text-amber-400">Rp 1.960.000</div>
                            </div>
                          </div>

                          {/* Export button */}
                          <button className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-neutral-700">
                            Download Laporan Excel / PDF
                          </button>

                          {/* Mockup Indicator Tag */}
                          <div className="pt-1 text-center">
                            {/* TODO: Ganti dengan screenshot real */}
                            <span className="text-[10px] text-amber-400/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              Screenshot Laporan
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "pelanggan" && (
                        <motion.div
                          key="tab-pelanggan"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="h-full flex flex-col space-y-2.5"
                        >
                          {/* DUMMY: Ganti dengan data real */}
                          {/* TODO: Ganti dengan screenshot real */}
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800">
                            <div>
                              <div className="text-[9px] text-neutral-400">Database & Member</div>
                              <h3 className="text-xs font-bold text-white">348 Pelanggan Aktif</h3>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                              Auto-Sync WA
                            </span>
                          </div>

                          {/* Search bar inside mockup */}
                          <div className="relative">
                            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-neutral-500" />
                            <input
                              type="text"
                              disabled
                              value="Rian Pratama"
                              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-neutral-200"
                            />
                          </div>

                          {/* Customer cards */}
                          <div className="space-y-1.5 flex-1">
                            <div className="p-2.5 rounded-xl bg-neutral-900 border border-amber-500/40 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                                  <span>Rian Pratama</span>
                                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px]">VIP Gold</span>
                                </div>
                                <span className="text-[9px] text-neutral-400">14x Potong</span>
                              </div>
                              <div className="text-[9px] text-neutral-400">
                                Model favorit: <span className="text-neutral-200">Low Fade Taper (No. 1.5)</span>
                              </div>
                              <div className="flex items-center justify-between pt-1 border-t border-neutral-800/80 text-[9px]">
                                <span className="text-neutral-400">Terakhir: 4 hari lalu</span>
                                <span className="text-emerald-400 font-medium">Barber Reza</span>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="text-[11px] font-semibold text-white">Bagus Santoso</div>
                                <span className="text-[9px] text-neutral-400">8x Potong</span>
                              </div>
                              <div className="text-[9px] text-neutral-400">
                                Model favorit: <span className="text-neutral-200">Side Part Pompadour</span>
                              </div>
                              <div className="flex items-center justify-between pt-1 border-t border-neutral-800/80 text-[9px]">
                                <span className="text-neutral-400">Terakhir: 2 minggu lalu</span>
                                <span className="text-amber-400 font-medium">Reminder Siap Kirim</span>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="text-[11px] font-semibold text-white">Aditia Wijaya</div>
                                <span className="text-[9px] text-neutral-400">5x Potong</span>
                              </div>
                              <div className="text-[9px] text-neutral-400">
                                Model favorit: <span className="text-neutral-200">Buzz Cut + Shave</span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Broadcast Button */}
                          <button className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md">
                            Kirim Promo WhatsApp ke 348 Member
                          </button>

                          {/* Mockup Indicator Tag */}
                          <div className="pt-1 text-center">
                            {/* TODO: Ganti dengan screenshot real */}
                            <span className="text-[10px] text-amber-400/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              Screenshot Pelanggan
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Phone Home Indicator Bar */}
                  <div className="h-4 pb-2 flex items-center justify-center">
                    <div className="w-28 h-1 bg-neutral-700 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Explanation & Key Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase">
              {currentTabInfo.badge}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Fitur {currentTabInfo.label} yang Bikin Operasional Mulus
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                {currentTabInfo.description}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              {currentTabInfo.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-neutral-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick Tab Selector Pills on Mobile/Tablet */}
            <div className="pt-4 flex flex-wrap gap-2">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === t.id
                      ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20"
                      : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white"
                  }`}
                >
                  Buka {t.label} →
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
