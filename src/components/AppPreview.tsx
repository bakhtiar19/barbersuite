"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  FileSpreadsheet,
  Users2,
  CheckCircle,
  TrendingUp,
  Receipt,
  Scissors,
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
    <section id="preview" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
            TAMPILAN APLIKASI
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Desain Bersih, Simpel, dan Mudah Dipahami
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Tidak ada menu yang rumit. Semua informasi penting bisa diakses dalam 1 sentuhan.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-amber-400 text-slate-950 shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Preview Frame */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-8 shadow-sm">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-slate-950">
                      <Scissors className="w-4 h-4 -rotate-45" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Dashboard Barbershop
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Ringkasan Operasional Hari Ini
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-md">
                    Kasir Buka (09:00 - 21:00)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                    <span className="text-xs text-slate-600">Omset Hari Ini</span>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      Rp 1.450.000
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +18.4% dari kemarin
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-600">Tamu Cukur Selesai</span>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      24 Tamu
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Rata-rata 25 menit / orang
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-600">Kapster Bertugas</span>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      3 Kapster
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Semua kursi aktif
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
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4"
              >
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">
                    Menu Kasir Transaksi Baru
                  </h4>
                  <span className="text-xs text-slate-500">Pilih Layanan</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { title: "Gentleman Haircut", price: "Rp 50.000" },
                    { title: "Haircut + Cuci Rambut", price: "Rp 65.000" },
                    { title: "Cukur Jenggot & Kumis", price: "Rp 35.000" },
                    { title: "Pewarnaan Rambut (Coloring)", price: "Rp 120.000" },
                  ].map((srv) => (
                    <div
                      key={srv.title}
                      className="p-3 rounded-lg border border-slate-200 hover:border-amber-400 flex items-center justify-between cursor-pointer bg-slate-50/50"
                    >
                      <span className="font-medium text-slate-800">{srv.title}</span>
                      <span className="font-bold text-amber-700">{srv.price}</span>
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
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4"
              >
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">
                    Laporan Omset & Komisi Kapster
                  </h4>
                  <span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    Bulan Ini (November)
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 flex justify-between">
                    <span className="text-slate-600">Total Transaksi (480 Tamu)</span>
                    <span className="font-bold text-slate-900">Rp 26.400.000</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 flex justify-between">
                    <span className="text-slate-600">Total Komisi Kapster (40%)</span>
                    <span className="font-bold text-slate-900">Rp 10.560.000</span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50 text-emerald-900 font-bold flex justify-between border border-emerald-200/60">
                    <span>Laba Bersih Pemilik</span>
                    <span>Rp 15.840.000</span>
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
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3"
              >
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">
                    Daftar Member & Riwayat Cukur
                  </h4>
                  <span className="text-xs text-amber-700 font-semibold">
                    340 Member Aktif
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    {
                      name: "Budi Santoso",
                      wa: "0812-3456-7890",
                      cut: "Fade Low Cut (Barber Rian)",
                      date: "Kemarin",
                    },
                    {
                      name: "Reza Rahardian",
                      wa: "0857-1122-3344",
                      cut: "Pompadour Side Part",
                      date: "3 hari lalu",
                    },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-bold text-slate-900">{c.name}</p>
                        <p className="text-slate-500 text-[11px]">{c.wa} • {c.cut}</p>
                      </div>
                      <span className="text-[10px] text-slate-400">{c.date}</span>
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
