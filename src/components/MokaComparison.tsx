"use client";

import React from "react";
import { Check, X, Sparkles, Zap, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/config/site";

interface MokaComparisonProps {
  onOpenPayment?: () => void;
}

export default function MokaComparison({ onOpenPayment }: MokaComparisonProps) {
  const comparisonItems = [
    {
      feature: "Biaya Aplikasi",
      barberSuite: "Cuma Rp 55.700 sekali bayar (Hemat 98%)",
      moka: "Rp 299.000/bulan (~Rp 3,6 Jt tiap tahun)",
    },
    {
      feature: "Koneksi Internet",
      barberSuite: "100% bebas offline tanpa kuota/sinyal",
      moka: "Wajib online, transaksi macet saat internet drop",
    },
    {
      feature: "Bagi Hasil Kapster",
      barberSuite: "Dihitung otomatis per barber & transparan",
      moka: "Rumit diatur & butuh biaya paket tambahan",
    },
    {
      feature: "Data & Omset Toko",
      barberSuite: "100% milik Anda, tersimpan aman di HP",
      moka: "Tersimpan di server cloud pihak ketiga",
    },
  ];

  return (
    <section id="komparasi" className="py-12 sm:py-16 bg-[#F5F1E8] border-y border-stone-300/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Compact */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-[11px] font-black mb-2 border border-red-200">
            <Zap className="w-3.5 h-3.5 text-red-700" />
            <span>MENGAPA LEBIH UNGGUL DARI SOFTWARE LAIN?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight leading-tight">
            Lebih Hemat & Praktis Khusus Barbershop
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            Tak perlu bayar sewa mahal jutaan rupiah per tahun hanya untuk kasir pangkas rambut.
          </p>
        </div>

        {/* Ultra-Compact Head-to-Head Comparison Card (Zero-Scroll for both Web & Mobile) */}
        <div className="rounded-2xl border-2 border-amber-800/20 overflow-hidden shadow-md bg-white">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-stone-900 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider p-2.5 sm:p-3 items-center">
            <div className="col-span-4 sm:col-span-4 pl-1 text-stone-300">Kebutuhan</div>
            <div className="col-span-4 sm:col-span-4 text-amber-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Barber Suite</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-stone-400">Software Lain</div>
          </div>

          {/* 4 Super-Compact Comparison Rows */}
          <div className="divide-y divide-stone-100 text-xs sm:text-sm">
            {comparisonItems.map((item, idx) => (
              <div
                key={item.feature}
                className={`grid grid-cols-12 p-2.5 sm:p-3.5 items-center gap-1 sm:gap-2 ${
                  idx % 2 === 0 ? "bg-[#FAF7F2]/60" : "bg-white"
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-4 font-bold text-stone-900 text-[11px] sm:text-xs pr-1 leading-snug">
                  {item.feature}
                </div>

                {/* Barber Suite Advantage */}
                <div className="col-span-4 font-bold text-emerald-950 bg-amber-100/70 p-1.5 rounded-lg border border-amber-300/60 flex items-start gap-1 sm:gap-1.5 leading-snug text-[11px] sm:text-xs">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item.barberSuite}</span>
                </div>

                {/* Other Software Downside */}
                <div className="col-span-4 text-stone-500 p-1 rounded-lg flex items-start gap-1 sm:gap-1.5 leading-snug text-[10px] sm:text-xs">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>{item.moka}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Bottom Banner with Action Button */}
          <div className="p-3 sm:p-3.5 bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="text-center sm:text-left">
              <span className="font-black text-xs text-amber-300">
                💰 Hemat Rp 3.500.000+ setiap tahun tanpa tagihan bulanan
              </span>
            </div>
            <a
              href={CHECKOUT_URL}
              onClick={(e) => {
                if (onOpenPayment) {
                  e.preventDefault();
                  onOpenPayment();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <span>Ambil Promo Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
