"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  BarChart3,
  UserCheck,
  Package,
  Printer,
  WifiOff,
  QrCode,
  Sparkles,
  Check,
  CheckCircle2,
  Percent,
} from "lucide-react";

export default function Features() {
  const [kapsterSplit, setKapsterSplit] = useState<number>(40); // 40% komisi

  return (
    <section id="fitur" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-black mb-3 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>ARSITEKTUR FITUR MODERN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Dirancang Sesuai Ritme Asli Kerja Barbershop
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Semua modul dibuat saling terhubung otomatis: kasir, bagi hasil kapster,
            stok barang, hingga pencatatan nomor WhatsApp pelanggan.
          </p>
        </div>

        {/* Bento Grid Layout (World-Class standard) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Item 1: Large Featured Card (Span 7 cols) - Kasir & Printer Bluetooth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 bg-white rounded-3xl p-7 sm:p-8 border-2 border-stone-200 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-200">
                  Modul Utama
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Support Printer Thermal Bluetooth</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-stone-900 mb-2">
                Kasir Cepat 3 Detik & Cetak Nota Kasir
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-normal">
                Input potongan rambut atau produk cukup dengan 1 sentuhan.
                Hubungkan langsung dengan printer thermal 58mm / 80mm via Bluetooth
                tanpa kabel yang merepotkan.
              </p>
            </div>

            {/* Interactive Visual Element */}
            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-stone-700 w-full sm:w-auto">
                <p className="font-bold text-stone-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Struk Cetak Rapi & Profesional</span>
                </p>
                <p className="text-[11px] text-stone-500">
                  Tercetak logo barbershop, nama kapster, dan QRIS pembayaran
                </p>
              </div>

              <span className="shrink-0 text-xs font-black bg-stone-900 text-amber-300 px-4 py-2 rounded-xl">
                Cetak Struk Instan 🖨️
              </span>
            </div>
          </motion.div>

          {/* Bento Item 2: Interactive Kapster Commission Split (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border-2 border-stone-200 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                  Transparansi Gaji
                </span>
                <Percent className="w-4 h-4 text-blue-600" />
              </div>

              <h3 className="text-xl font-black text-stone-900 mb-2">
                Bagi Hasil Kapster Otomatis
              </h3>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                Set persentase bagi hasil kapster sesuai kesepakatan. Sistem
                otomatis menghitung komisi tiap akhir shift.
              </p>

              {/* Interactive Split Selector */}
              <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex justify-between text-xs font-bold text-stone-700">
                  <span>Porsi Komisi Kapster:</span>
                  <span className="text-amber-800 font-black">{kapsterSplit}%</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[35, 40, 50].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setKapsterSplit(val)}
                      className={`py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        kapsterSplit === val
                          ? "bg-stone-900 text-amber-300 border-stone-900"
                          : "bg-white text-stone-700 border-stone-200"
                      }`}
                    >
                      {val} : {100 - val}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-stone-500 text-center pt-1 font-medium">
                  Contoh: Dari omset Rp 100.000, Kapster dapat Rp{" "}
                  {(1000 * kapsterSplit).toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Offline-First Engine (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border-2 border-stone-200 shadow-sm hover:border-amber-400 transition-all"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
              <WifiOff className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-2">
              100% Offline-First Engine
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Sinyal internet lemot atau listrik padam? Kasir Anda tetap bisa
              melayani pelanggan tanpa gangguan sedikit pun. Data aman di HP.
            </p>
          </motion.div>

          {/* Bento Item 4: Database WhatsApp Tamu (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border-2 border-stone-200 shadow-sm hover:border-amber-400 transition-all"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4">
              <UserCheck className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Retensi Tamu via WhatsApp
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Simpan nomor HP dan riwayat model cukur tiap tamu. Anda bisa kirimkan
              promo personal yang membuat pelanggan kembali lagi dan lagi.
            </p>
          </motion.div>

          {/* Bento Item 5: Multi Payment & QRIS (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border-2 border-stone-200 shadow-sm hover:border-amber-400 transition-all"
          >
            <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
              <QrCode className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Terima QRIS & Semua Pembayaran
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Mendukung QRIS semua e-wallet (GoPay, OVO, ShopeePay, DANA) dan transfer
              bank. Rekap harian tanpa selisih di laci uang kasir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
