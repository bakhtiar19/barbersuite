"use client";

import React from "react";
import { Check, X, Sparkles, Zap, ShieldCheck } from "lucide-react";

interface MokaComparisonProps {
  onOpenPayment?: () => void;
}

export default function MokaComparison({ onOpenPayment }: MokaComparisonProps) {
  const comparisonItems = [
    {
      feature: "Biaya / Skema Pembayaran",
      moka: "Rp 299.000 / Bulan (Rp 3.588.000 / Tahun)",
      mokaGood: false,
      barberSuite: "Cuma Rp 50.000 Sekali Bayar Selamanya",
      barberSuiteGood: true,
    },
    {
      feature: "Ketergantungan Internet",
      moka: "Wajib Online — Sering error saat sinyal drop",
      mokaGood: false,
      barberSuite: "100% Offline-First (Mesin SQLite Lokal)",
      barberSuiteGood: true,
    },
    {
      feature: "Bagi Hasil & Komisi Barber",
      moka: "Pengaturan rumit & butuh paket tambahan",
      mokaGood: false,
      barberSuite: "Hitung Otomatis per Barber & Shift Transparan",
      barberSuiteGood: true,
    },
    {
      feature: "Follow-Up WhatsApp Pelanggan",
      moka: "Fitur SMS berbayar tambahan per pesan",
      mokaGood: false,
      barberSuite: "Filter >30 Hari & Template WhatsApp Gratis",
      barberSuiteGood: true,
    },
    {
      feature: "Privasi & Kepemilikan Data",
      moka: "Data omset tersimpan di server cloud pihak ketiga",
      mokaGood: false,
      barberSuite: "Data 100% Milik Anda di HP + Backup .bms SHA-256",
      barberSuiteGood: true,
    },
    {
      feature: "Ekspor Laporan Keuangan",
      moka: "Harus login via website dashboard terpisah",
      mokaGood: false,
      barberSuite: "Ekspor Langsung PDF & CSV (Excel) dari HP",
      barberSuiteGood: true,
    },
  ];

  return (
    <section id="komparasi" className="py-24 bg-white border-y border-stone-200/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 text-red-900 text-xs font-black mb-3 border border-red-200">
            <Zap className="w-3.5 h-3.5 text-red-700" />
            <span>MENGAPA LEBIH UNGGUL DARI MOKA POS?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Kelebihan Barber Suite dibanding Software Langganan
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Moka POS bagus untuk restoran besar dengan anggaran jutaan rupiah per tahun.
            Namun untuk barbershop & salon mandiri, **Barber Suite adalah pemenangnya**.
          </p>
        </div>

        {/* Head-to-Head Comparison Card */}
        <div className="rounded-3xl border-2 border-stone-300 overflow-hidden shadow-lg bg-[#FAF8F5]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100 text-xs uppercase tracking-wider font-bold">
                  <th className="p-4 sm:p-5 w-1/3 text-stone-700">Fitur & Kriteria</th>
                  <th className="p-4 sm:p-5 w-1/3 bg-amber-200/90 text-amber-950 font-black border-x-2 border-amber-400">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-700" />
                      <span className="text-sm">Barber Suite Pro</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 w-1/3 text-stone-500">
                    Moka POS / Pawoon / Majoo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr
                    key={item.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}
                  >
                    <td className="p-4 sm:p-5 font-bold text-stone-900">
                      {item.feature}
                    </td>

                    {/* Barber Suite (Highlighted) */}
                    <td className="p-4 sm:p-5 bg-amber-50/70 font-black text-stone-950 border-x-2 border-amber-400">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-300">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{item.barberSuite}</span>
                      </div>
                    </td>

                    {/* Moka POS */}
                    <td className="p-4 sm:p-5 text-stone-500">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{item.moka}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Banner */}
          <div className="p-5 bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-bold text-sm text-amber-300">
                💰 Hemat lebih dari Rp 3.500.000 setiap tahun bersama Barber Suite
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                Investasi sekali Rp 50.000, tidak ada tagihan kartu kredit bulanan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenPayment?.()}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs uppercase tracking-wider shrink-0 transition-colors shadow-xs cursor-pointer"
            >
              Beli Sekarang — Rp 50.000
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
