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
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Scissors,
  Clock,
  ArrowUpRight,
  QrCode,
  Bell,
  Smartphone,
  ChevronRight,
  Award,
} from "lucide-react";

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
  badge: string;
  accent: string;
  mockup: "cashier" | "report" | "customer" | "inventory" | "booking" | "payment";
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: Monitor,
    badge: "Point of Sale Modern",
    accent: "from-amber-500 to-amber-600",
    title: "Kasir Digital Super Cepat",
    desc: "Proses transaksi dalam hitungan detik. Pilih layanan, tambah produk, terima pembayaran — semua dalam satu sentuhan. Antrian pelanggan nggak akan lama lagi.",
    mockup: "cashier",
  },
  {
    id: 2,
    icon: BarChart3,
    badge: "Analitik & Keuangan",
    accent: "from-blue-500 to-cyan-500",
    title: "Laporan Keuangan Otomatis",
    desc: "Lihat omset harian, mingguan, dan bulanan secara real-time. Grafik visual yang mudah dipahami. Nggak perlu lagi hitung manual pakai kalkulator.",
    mockup: "report",
  },
  {
    id: 3,
    icon: UserCheck,
    badge: "Loyalitas & CRM",
    accent: "from-amber-400 to-orange-500",
    title: "Manajemen Pelanggan",
    desc: "Database pelanggan lengkap dengan riwayat kunjungan dan preferensi. Kirim promo ke pelanggan loyal. Tingkatkan retensi hingga 3x lipat.",
    mockup: "customer",
  },
  {
    id: 4,
    icon: Package,
    badge: "Inventori & Gudang",
    accent: "from-emerald-500 to-teal-500",
    title: "Kontrol Stok Produk",
    desc: "Monitor stok pomade, oil, shampoo, dan produk lainnya secara real-time. Notifikasi otomatis saat stok menipis. Nggak ada lagi pelanggan kecewa karena produk habis.",
    mockup: "inventory",
  },
  {
    id: 5,
    icon: Calendar,
    badge: "Reservasi Mandiri",
    accent: "from-indigo-500 to-purple-500",
    title: "Jadwal & Booking Online",
    desc: "Terima booking dari pelanggan langsung di aplikasi. Atur jadwal barber dengan mudah. Kurangi antrian dan tingkatkan kepuasan pelanggan.",
    mockup: "booking",
  },
  {
    id: 6,
    icon: CreditCard,
    badge: "Semua Channel Bayar",
    accent: "from-amber-500 to-yellow-500",
    title: "Multi Metode Pembayaran",
    desc: "Terima cash, transfer bank, e-wallet, bahkan QRIS. Semua tercatat otomatis tanpa selisih. Pelanggan happy, pembukuan rapi.",
    mockup: "payment",
  },
];

// DUMMY: Ganti dengan data real preview transaksi
const CashierMockup = () => (
  <div className="h-full flex flex-col justify-between text-zinc-200">
    <div>
      {/* Top bar */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Scissors className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white leading-tight">Order #B-104</div>
            <div className="text-[10px] text-zinc-400">Barber: Dimas S.</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          Kasir Aktif
        </span>
      </div>

      {/* Quick service selector */}
      <div className="mt-3">
        <div className="text-[11px] font-medium text-zinc-400 mb-1.5 flex items-center justify-between">
          <span>Layanan Terpilih</span>
          <span className="text-[10px] text-amber-400 font-medium">3 Layanan</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">1x</span>
              <span className="text-xs text-white font-medium">Gentleman Haircut</span>
            </div>
            <span className="text-xs text-amber-400 font-semibold">Rp 50.000</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">1x</span>
              <span className="text-xs text-white font-medium">Beard Trim & Hot Towel</span>
            </div>
            <span className="text-xs text-amber-400 font-semibold">Rp 30.000</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">1x</span>
              <span className="text-xs text-white font-medium">Waterbased Pomade</span>
            </div>
            <span className="text-xs text-amber-400 font-semibold">Rp 65.000</span>
          </div>
        </div>
      </div>
    </div>

    {/* Checkout footer */}
    <div className="pt-3 border-t border-zinc-800 space-y-2.5">
      <div className="flex justify-between items-center text-xs">
        <span className="text-zinc-400">Total Pembayaran</span>
        <span className="text-base font-extrabold text-white">Rp 145.000</span>
      </div>
      <button
        type="button"
        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:brightness-110 transition"
      >
        <span>Proses Pembayaran Cepat</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// DUMMY: Ganti dengan data real analitik keuangan
const ReportMockup = () => (
  <div className="h-full flex flex-col justify-between text-zinc-200">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Laporan Hari Ini</div>
            <div className="text-[10px] text-zinc-400">Update otomatis 2 menit lalu</div>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
          <ArrowUpRight className="w-3 h-3" /> +28.4%
        </span>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-gradient-to-br from-blue-950/40 via-zinc-900/60 to-zinc-900 border border-blue-500/20">
        <div className="text-[11px] text-zinc-400">Total Omset Bersih</div>
        <div className="text-xl font-black text-white tracking-tight mt-0.5">Rp 2.850.000</div>
        <div className="text-[10px] text-zinc-400 mt-1 flex items-center gap-2">
          <span>Target harian: <span className="text-blue-400 font-semibold">114%</span></span>
          <span className="text-zinc-600">•</span>
          <span>42 Pelanggan</span>
        </div>
      </div>

      {/* Mini Bar Chart */}
      <div className="mt-3">
        <div className="text-[10px] text-zinc-400 mb-2 flex justify-between">
          <span>Grafik Omset 7 Hari Terakhir</span>
          <span className="text-zinc-500">Sen - Min</span>
        </div>
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {[
            { day: "S", h: "45%", val: "1.8M" },
            { day: "S", h: "55%", val: "2.1M" },
            { day: "R", h: "40%", val: "1.6M" },
            { day: "K", h: "65%", val: "2.4M" },
            { day: "J", h: "85%", val: "3.2M" },
            { day: "S", h: "100%", val: "3.8M", active: true },
            { day: "M", h: "90%", val: "3.4M" },
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                style={{ height: bar.h }}
                className={`w-full rounded-t-md transition-all ${
                  bar.active
                    ? "bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              />
              <span className={`text-[9px] ${bar.active ? "text-cyan-400 font-bold" : "text-zinc-500"}`}>
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-zinc-800 grid grid-cols-2 gap-2 text-[10px]">
      <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
        <div className="text-zinc-400">Komisi Kapster</div>
        <div className="text-xs font-bold text-white mt-0.5">Rp 855.000</div>
      </div>
      <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
        <div className="text-zinc-400">Margin Produk</div>
        <div className="text-xs font-bold text-white mt-0.5">48.5%</div>
      </div>
    </div>
  </div>
);

// DUMMY: Ganti dengan data real CRM & member
const CustomerMockup = () => (
  <div className="h-full flex flex-col justify-between text-zinc-200">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <UserCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Profil Pelanggan</div>
            <div className="text-[10px] text-zinc-400">ID: #CUS-8821</div>
          </div>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
          <Award className="w-3 h-3 text-amber-400" /> VIP Member
        </span>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold flex items-center justify-center text-sm shadow-md shadow-amber-500/20">
            BS
          </div>
          <div>
            <div className="text-xs font-bold text-white">Budi Santoso</div>
            <div className="text-[10px] text-zinc-400">0812-9988-xxxx • Kunjungan ke-12</div>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-zinc-800/80 grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <span className="text-zinc-500 block">Gaya Rambut Favorit</span>
            <span className="text-zinc-200 font-medium">Low Taper + Slick Back</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Produk Pilihan</span>
            <span className="text-zinc-200 font-medium">Matte Clay Strong</span>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        <div className="text-[10px] text-zinc-400 font-medium">Riwayat Kunjungan Terakhir</div>
        <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center justify-between text-[11px]">
          <div>
            <div className="text-zinc-200 font-medium">Haircut + Hairwash</div>
            <div className="text-[9px] text-zinc-500">24 Okt 2026 • Barber Dimas</div>
          </div>
          <span className="text-amber-400 font-semibold text-xs">Rp 50.000</span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-zinc-800">
      <button
        type="button"
        className="w-full py-2 px-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500/25 transition"
      >
        <span>Kirim Voucher Promo WA</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);

// DUMMY: Ganti dengan data real inventori produk
const InventoryMockup = () => (
  <div className="h-full flex flex-col justify-between text-zinc-200">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Package className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Inventori & Stok</div>
            <div className="text-[10px] text-zinc-400">Total 34 Item Terdata</div>
          </div>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
          <Bell className="w-3 h-3" /> 2 Menipis
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-rose-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-amber-400">
              CL
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Styling Matte Clay</div>
              <div className="text-[10px] text-rose-400 font-medium">Sisa 2 pcs (Restok segera!)</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-rose-500/20 text-rose-300">
            Kritis
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
              PM
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Heavy Hold Pomade</div>
              <div className="text-[10px] text-zinc-400">Sisa 19 pcs di etalase</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-400">
            Aman
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
              SH
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Menthol Hair Tonic</div>
              <div className="text-[10px] text-zinc-400">Sisa 14 botol</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-400">
            Aman
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px]">
      <span className="text-zinc-400">Valuasi Stok Etalase</span>
      <span className="font-bold text-white">Rp 4.250.000</span>
    </div>
  </div>
);

// DUMMY: Ganti dengan data real jadwal booking
const BookingMockup = () => (
  <div className="h-full flex flex-col justify-between text-zinc-200">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Jadwal Barber</div>
            <div className="text-[10px] text-zinc-400">Hari ini, 12 Nov 2026</div>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-full border border-indigo-500/30">
          5 Antrian
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="p-2.5 rounded-xl bg-zinc-900/90 border-l-4 border-l-emerald-500 border border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-emerald-400" /> 14:00 - 14:45
            </div>
            <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              Sedang Cukur
            </span>
          </div>
          <div className="text-[11px] text-zinc-300 font-medium mt-1">Pelanggan: Rendy (Fade + Wash)</div>
          <div className="text-[10px] text-zinc-500">Barber: Dimas • Kursi 01</div>
        </div>

        <div className="p-2.5 rounded-xl bg-zinc-900/90 border-l-4 border-l-amber-500 border border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-amber-400" /> 15:00 - 15:45
            </div>
            <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
              Booking Masuk
            </span>
          </div>
          <div className="text-[11px] text-zinc-300 font-medium mt-1">Pelanggan: Faisal (Premium Beard)</div>
          <div className="text-[10px] text-zinc-500">Barber: Reza • Kursi 02</div>
        </div>

        <div className="p-2 rounded-lg bg-zinc-900/50 border border-dashed border-zinc-800 flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
          <Clock className="w-3 h-3 text-zinc-500" /> Slot Kosong: 16:30 - Kursi 01
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-zinc-800">
      <div className="flex justify-between items-center text-[10px] text-zinc-400">
        <span>Slot Terisi: <strong className="text-white">8/10 Kursi</strong></span>
        <span className="text-emerald-400 font-medium">Kapasitas 80%</span>
      </div>
    </div>
  </div>
);

// DUMMY: Ganti dengan data real transaksi QRIS & payment
const PaymentMockup = () => (
  <div className="h-full flex flex-col justify-between text-zinc-200">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <CreditCard className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Metode Pembayaran</div>
            <div className="text-[10px] text-zinc-400">Pilih channel pembayaran</div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Auto Sync
        </span>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-center">
        <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">QRIS Dinamis Instan</div>
        <div className="my-2 p-2 bg-white rounded-lg inline-block shadow-lg">
          <QrCode className="w-16 h-16 text-black" />
        </div>
        <div className="text-xs font-black text-amber-400">Total: Rp 80.000</div>
        <div className="text-[9px] text-zinc-400 mt-0.5">Scan BCA, Mandiri, GoPay, OVO, Dana</div>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 font-semibold text-zinc-300">
          💵 Tunai
        </div>
        <div className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 font-semibold text-zinc-300">
          📱 QRIS
        </div>
        <div className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 font-semibold text-zinc-300">
          💳 EDC/Card
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-zinc-800 flex items-center justify-center gap-1.5 text-[10px] text-emerald-400">
      <CheckCircle2 className="w-3.5 h-3.5" />
      <span>Settlement Realtime Tanpa Selisih</span>
    </div>
  </div>
);

export default function Features() {
  const renderMockup = (type: Feature["mockup"]) => {
    switch (type) {
      case "cashier":
        return <CashierMockup />;
      case "report":
        return <ReportMockup />;
      case "customer":
        return <CustomerMockup />;
      case "inventory":
        return <InventoryMockup />;
      case "booking":
        return <BookingMockup />;
      case "payment":
        return <PaymentMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="fitur" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden text-zinc-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-blue-600/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Framer Motion scroll animation */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solusi Lengkap Barbershop Modern</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight sm:leading-tight"
          >
            Semua Masalah Itu Selesai dengan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              POS Barbershop
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed"
          >
            Fitur lengkap yang dirancang khusus untuk barbershop & salon
          </motion.p>
        </div>

        {/* 6 Features in alternating left-right layout */}
        <div className="space-y-20 sm:space-y-32">
          {featuresData.map((feature, index) => {
            const isImageLeft = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Mockup Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full flex justify-center ${
                    isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                    {/* Glowing backlight */}
                    <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-r from-amber-500/20 via-blue-500/10 to-amber-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />

                    {/* Outer Phone Frame */}
                    <div className="relative aspect-[9/17] sm:aspect-[9/16.5] w-full rounded-[2.8rem] p-3.5 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border-2 border-zinc-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                      {/* Phone Hardware Details */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-zinc-900 rounded-b-xl flex items-center justify-center gap-2 border-b border-zinc-700/40 z-20">
                        <div className="w-10 h-1 bg-zinc-700 rounded-full" />
                        <div className="w-2 h-2 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
                      </div>

                      {/* Screen Glass Area */}
                      <div className="relative h-full w-full rounded-[2.1rem] bg-zinc-950 p-4 pt-6 border border-zinc-800/80 overflow-hidden flex flex-col justify-between shadow-inner">
                        {/* Top Screen Status Bar */}
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2 px-1">
                          <span className="font-semibold text-white">09:41</span>
                          <div className="flex items-center gap-1.5">
                            <Smartphone className="w-2.5 h-2.5" />
                            <span className="text-[9px] font-bold text-emerald-400">5G</span>
                          </div>
                        </div>

                        {/* Interactive UI Mockup Content */}
                        <div className="flex-1 overflow-hidden py-1">
                          {renderMockup(feature.mockup)}
                        </div>

                        {/* Phone Home Bar */}
                        <div className="w-24 h-1 bg-zinc-700/80 rounded-full mx-auto mt-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col justify-center ${
                    isImageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-amber-400/90 tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {feature.badge}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">0{feature.id} / 06</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shadow-lg shadow-black/60 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed font-normal mb-6">
                    {feature.desc}
                  </p>

                  {/* Feature Highlights Pill List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-zinc-800/80">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Instan & tanpa lemot</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Data otomatis aman tersinkron</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
