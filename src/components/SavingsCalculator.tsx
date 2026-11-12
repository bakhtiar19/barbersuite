"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Sparkles, DollarSign } from "lucide-react";

export default function SavingsCalculator() {
  const [chairs, setChairs] = useState<number>(2); // Default 2 kursi barber
  const [competitorMonthly, setCompetitorMonthly] = useState<number>(250000); // 250k/bulan

  // Kalkulasi dinamis: Jumlah kursi * biaya bulanan * 12 bulan
  const annualCompetitorCost = competitorMonthly * chairs * 12;
  const barberSuiteCost = 50000; // Sekali bayar seumur hidup
  const annualSavings = annualCompetitorCost - barberSuiteCost;

  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f2eb] via-[#faf8f5] to-[#f5f2eb] border-y border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black mb-3 border border-emerald-300">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>KALKULATOR PENGHEMATAN BIAYA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Hitung Berapa Juta Anda Hemat Setiap Tahun
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Bandingkan biaya berlangganan software kasir konvensional dengan sistem sekali bayar
            Barber Suite.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Jumlah Kursi Barber */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Jumlah Kursi / Kapster Aktif:
                  </label>
                  <span className="text-base font-black text-stone-900 bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full border border-amber-200">
                    {chairs} Kursi Barber
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={chairs}
                  onChange={(e) => setChairs(Number(e.target.value))}
                  onInput={(e) => setChairs(Number((e.target as HTMLInputElement).value))}
                  className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                {/* Quick-select pills for chairs */}
                <div className="flex justify-between text-[11px] text-stone-500 mt-2 font-semibold">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setChairs(num)}
                      className={`px-2 py-0.5 rounded-md cursor-pointer transition-all ${
                        chairs === num
                          ? "bg-amber-400 text-stone-950 font-black shadow-2xs scale-105"
                          : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                      }`}
                    >
                      {num} Kursi
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Biaya Software Lain */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Rata-rata Biaya Software Kasir Bulanan Lain:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Rp 150.000 / bln", value: 150000 },
                    { label: "Rp 250.000 / bln", value: 250000 },
                    { label: "Rp 350.000 / bln", value: 350000 },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setCompetitorMonthly(opt.value)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                        competitorMonthly === opt.value
                          ? "bg-stone-900 text-white border-stone-900 shadow-2xs"
                          : "bg-[#FAF8F5] text-stone-700 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comparison Breakdown Details */}
              <div className="space-y-2 pt-3 border-t border-stone-100 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>
                    Biaya Software Lain ({chairs} Kursi x Rp{" "}
                    {competitorMonthly.toLocaleString("id-ID")}/bln x 12 bln):
                  </span>
                  <span className="font-bold text-stone-800 line-through">
                    Rp {annualCompetitorCost.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Barber Suite (Seumur Hidup):</span>
                  <span className="font-bold text-emerald-700">
                    Cuma Rp 50.000 (Sekali Saja)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: High Impact Savings Display */}
            <div className="lg:col-span-5 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-300 p-6 sm:p-8 rounded-2xl border border-amber-400 text-stone-950 flex flex-col justify-between text-center relative overflow-hidden shadow-xs">
              <div className="absolute top-2 right-2 opacity-10">
                <DollarSign className="w-24 h-24" />
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider bg-stone-950 text-amber-300 px-3 py-1 rounded-full inline-block mb-3">
                  UANG YANG ANDA HEMAT DI TAHUN PERTAMA
                </span>

                <motion.div
                  key={`${chairs}-${competitorMonthly}`}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight my-2"
                >
                  Rp {annualSavings.toLocaleString("id-ID")}
                </motion.div>

                <p className="text-xs text-stone-800 font-medium leading-relaxed mt-2">
                  Uang penghematan ini bisa Anda gunakan untuk membeli clipper baru,
                  menambah stok pomade, atau bonus untuk kapster Anda!
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-900/10">
                <a
                  href="#pricing"
                  className="w-full py-3 px-4 rounded-xl bg-stone-950 hover:bg-stone-900 text-amber-300 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Amankan Lisensi Rp 50.000 Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
