"use client";

import React from "react";
import { Check, X, Sparkles, Scale } from "lucide-react";

interface ComparisonRow {
  feature: string;
  posBarbershop: string;
  posBarbershopCheck: boolean;
  competitors: string;
  competitorsCheck: boolean;
  manualPaper: string;
  manualPaperCheck: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Skema Harga & Biaya",
    posBarbershop: "Rp 50.000 Beli Putus Selamanya",
    posBarbershopCheck: true,
    competitors: "Rp 200rb - Rp 400rb / Bulan (Jutaan/Th)",
    competitorsCheck: false,
    manualPaper: "Beli Buku Nota Terus-menerus",
    manualPaperCheck: false,
  },
  {
    feature: "Mode Kasir Offline (Tanpa Internet)",
    posBarbershop: "Bisa 100% Offline Tanpa Gangguan",
    posBarbershopCheck: true,
    competitors: "Sering Macet / Error saat Sinyal Hilang",
    competitorsCheck: false,
    manualPaper: "Offline (Tapi Rentan Hilang)",
    manualPaperCheck: false,
  },
  {
    feature: "Bagi Hasil Kapster Otomatis",
    posBarbershop: "Hitung Otomatis & Transparan",
    posBarbershopCheck: true,
    competitors: "Terkadang Butuh Biaya Tambahan Add-on",
    competitorsCheck: false,
    manualPaper: "Hitung Manual Pakai Kalkulator",
    manualPaperCheck: false,
  },
  {
    feature: "Database WhatsApp Tamu",
    posBarbershop: "Tersimpan Rapi & Siap Kirim Promo",
    posBarbershopCheck: true,
    competitors: "Terbatas / Wajib Beli Kuota SMS",
    competitorsCheck: false,
    manualPaper: "Tidak Ada Riwayat Kontak",
    manualPaperCheck: false,
  },
  {
    feature: "Kontrol Stok Pomade & Shaving",
    posBarbershop: "Notifikasi Otomatis saat Stok Menipis",
    posBarbershopCheck: true,
    competitors: "Ada (Tergantung Paket)",
    competitorsCheck: true,
    manualPaper: "Sering Kebobolan Stok Habis",
    manualPaperCheck: false,
  },
  {
    feature: "Waktu Adaptasi Karyawan",
    posBarbershop: "Cukup 5 Menit Langsung Bisa",
    posBarbershopCheck: true,
    competitors: "Perlu Training 1-2 Minggu",
    competitorsCheck: false,
    manualPaper: "Ribet dan Memakan Waktu",
    manualPaperCheck: false,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-3 border border-amber-200">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            <span>PERBANDINGAN TERBUKA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Kenapa Barber Suite Jauh Lebih Masuk Akal?
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Bandingkan sendiri fitur, skema harga, dan kepemilikan data sebelum Anda
            mengeluarkan uang jutaan rupiah untuk software langganan.
          </p>
        </div>

        {/* Table Container */}
        <div className="rounded-3xl border-2 border-stone-200 overflow-hidden shadow-sm bg-[#FAF8F5]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/90 text-stone-900 text-xs uppercase tracking-wider font-bold">
                  <th className="p-4 sm:p-5 w-2/5">Fitur & Manfaat</th>
                  <th className="p-4 sm:p-5 w-2/5 bg-amber-100/80 text-amber-950 font-black border-x border-amber-300">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Barber Suite</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 w-1/5 text-stone-500">
                    Software Bulanan Lain
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}
                  >
                    {/* Feature Name */}
                    <td className="p-4 sm:p-5 font-bold text-stone-800">
                      {row.feature}
                    </td>

                    {/* POS Barbershop (Highlighted Column) */}
                    <td className="p-4 sm:p-5 bg-amber-50/60 font-bold text-stone-950 border-x border-amber-300/80">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-300">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{row.posBarbershop}</span>
                      </div>
                    </td>

                    {/* Competitors */}
                    <td className="p-4 sm:p-5 text-stone-500">
                      <div className="flex items-center gap-2">
                        {row.competitorsCheck ? (
                          <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        )}
                        <span>{row.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
