"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  FileSpreadsheet,
  Users2,
  TrendingUp,
  Scissors,
  CheckCircle2,
  Calendar,
  CreditCard,
} from "lucide-react";

const TABS = [
  { id: "dashboard", label: "Dashboard Utama", icon: LayoutDashboard },
  { id: "kasir", label: "Menu Kasir", icon: ShoppingCart },
  { id: "laporan", label: "Laporan Keuangan", icon: FileSpreadsheet },
  { id: "pelanggan", label: "Data Pelanggan", icon: Users2 },
];

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section id="preview" className="py-24 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            TAMPILAN NYATA APLIKASI
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Antarmuka Bersih & Menyenangkan Dilihat
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Semua menu dan tombol didesain ergonomis untuk layar HP Android kasir Anda.
          </p>
        </div>

        {/* Tab Buttons Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-[#f5f2eb] p-1.5 rounded-2xl border border-stone-200/80 max-w-2xl mx-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-400 text-stone-950 shadow-sm"
                    : "text-stone-600 hover:text-stone-950 hover:bg-white/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Preview Frame with Warm Ivory Container */}
        <div className="rounded-3xl border-2 border-stone-200 bg-white p-4 sm:p-8 shadow-md">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#faf8f5] rounded-2xl border border-stone-200 p-6 space-y-6"
              >
                {/* Header inside mockup */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-stone-200 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center font-bold text-stone-950 shadow-xs">
                      <Scissors className="w-5 h-5 -rotate-45" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-stone-900">
                        Dashboard Gentleman Barbershop
                      </h4>
                      <p className="text-[11px] text-stone-500 font-medium">
                        Rekap Operasional Shift Pagi • 12 November 2026
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Kasir Aktif
                  </span>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-amber-100/70 border border-amber-300/80">
                    <span className="text-xs font-bold text-amber-900">Omset Hari Ini</span>
                    <div className="text-2xl font-black text-stone-900 mt-1">
                      Rp 1.450.000
                    </div>
                    <span className="text-[10px] text-emerald-800 font-bold flex items-center gap-1 mt-1 bg-white/80 px-2 py-0.5 rounded-md inline-flex border border-emerald-200">
                      <TrendingUp className="w-3 h-3 text-emerald-600" /> +18.4% dari kemarin
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-stone-200">
                    <span className="text-xs font-bold text-stone-600">Total Tamu Cukur</span>
                    <div className="text-2xl font-black text-stone-900 mt-1">
                      24 Tamu
                    </div>
                    <span className="text-[11px] text-stone-500 mt-1 block font-medium">
                      3 Kapster aktif mencukur
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-stone-200">
                    <span className="text-xs font-bold text-stone-600">Paling Laris</span>
                    <div className="text-lg font-black text-stone-900 mt-1">
                      Fade Cut + Cuci
                    </div>
                    <span className="text-[11px] text-amber-700 mt-1 block font-semibold">
                      14 pesanan (58%)
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "kasir" && (
              <motion.div
                key="kasir"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#faf8f5] rounded-2xl border border-stone-200 p-6 space-y-4"
              >
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <h4 className="text-sm font-bold text-stone-900">
                    Pilih Layanan Cukur / Produk
                  </h4>
                  <span className="text-xs text-amber-800 font-bold bg-amber-100 px-2.5 py-0.5 rounded-full">
                    Kategori: Haircut & Styling
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { title: "Gentleman Haircut", price: "Rp 50.000", badge: "Populer" },
                    { title: "Haircut + Cuci Rambut", price: "Rp 65.000", badge: "Paket Hemat" },
                    { title: "Cukur Jenggot & Kumis", price: "Rp 35.000", badge: "Grooming" },
                    { title: "Coloring / Pewarnaan", price: "Rp 120.000", badge: "Treatment" },
                  ].map((srv) => (
                    <div
                      key={srv.title}
                      className="p-3.5 rounded-xl border border-stone-200 hover:border-amber-400 bg-white flex items-center justify-between shadow-2xs transition-colors"
                    >
                      <div>
                        <span className="font-bold text-stone-900 block">{srv.title}</span>
                        <span className="text-[10px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded font-medium mt-1 inline-block">
                          {srv.badge}
                        </span>
                      </div>
                      <span className="font-black text-amber-700 text-base">{srv.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "laporan" && (
              <motion.div
                key="laporan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#faf8f5] rounded-2xl border border-stone-200 p-6 space-y-4"
              >
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <h4 className="text-sm font-bold text-stone-900">
                    Rekapitulasi Keuangan & Komisi Kapster
                  </h4>
                  <span className="text-xs bg-stone-200 text-stone-800 px-3 py-1 rounded-full font-bold">
                    Periode: Bulan Ini
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex justify-between items-center">
                    <span className="font-semibold text-stone-600">Total Pemasukan (480 Tamu)</span>
                    <span className="font-black text-stone-900 text-sm">Rp 26.400.000</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex justify-between items-center">
                    <span className="font-semibold text-stone-600">Total Komisi Kapster (40%)</span>
                    <span className="font-bold text-amber-800 text-sm">Rp 10.560.000</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-950 font-bold flex justify-between items-center border border-emerald-300">
                    <span className="text-emerald-900">Laba Bersih Masuk ke Pemilik (60%)</span>
                    <span className="text-emerald-800 font-black text-base">Rp 15.840.000</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "pelanggan" && (
              <motion.div
                key="pelanggan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#faf8f5] rounded-2xl border border-stone-200 p-6 space-y-3"
              >
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <h4 className="text-sm font-bold text-stone-900">
                    Database Pelanggan Tetap (340 Tamu)
                  </h4>
                  <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Kirim Promo WhatsApp Aktif
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    {
                      name: "Budi Santoso",
                      wa: "0812-3456-7890",
                      cut: "Fade Low Cut (Kapster Rian)",
                      date: "Kemarin",
                      status: "Member Loyal",
                    },
                    {
                      name: "Reza Rahardian",
                      wa: "0857-1122-3344",
                      cut: "Pompadour Side Part",
                      date: "3 hari lalu",
                      status: "Member Baru",
                    },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-stone-900 text-sm">{c.name}</p>
                          <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.2 rounded-full">
                            {c.status}
                          </span>
                        </div>
                        <p className="text-stone-500 text-[11px] mt-0.5">{c.wa} • {c.cut}</p>
                      </div>
                      <span className="text-[11px] text-stone-400 font-medium">{c.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
