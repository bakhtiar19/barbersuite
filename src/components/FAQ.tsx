"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Apakah aplikasi ini bisa digunakan tanpa koneksi internet (offline)?",
    a: "Bisa sekali! Barber Suite dirancang agar transaksi kasir dan cetak nota Bluetooth tetap berjalan normal meski sinyal internet drop atau sedang mati lampu. Anda tidak bergantung pada kuota internet.",
  },
  {
    q: "Bisa dipakai di berapa smartphone atau tablet?",
    a: "Satu lisensi berlaku untuk 1 perangkat Android. Jika Anda memiliki cabang barbershop atau tablet tambahan, Anda cukup membeli lisensi tambahan dengan harga promo yang sama.",
  },
  {
    q: "Bagaimana cara memasang (instalasi) aplikasinya?",
    a: "Sangat mudah dan cepat. Begitu pembayaran selesai, link unduh aplikasi langsung dikirimkan. Anda tinggal buka di HP Android dan klik pasang (install). Tim kami juga siap memandu via WhatsApp sampai aplikasi aktif.",
  },
  {
    q: "Apakah data omset dan pelanggan saya aman?",
    a: "100% aman dan rahasia. Semua data pembukuan tersimpan langsung di memori HP Anda sendiri, tidak dikirim atau dijual ke server luar mana pun.",
  },
  {
    q: "Apakah ada garansi jika tidak cocok?",
    a: "Ada! Kami memberikan garansi 100% uang kembali dalam 7 hari jika Anda merasa aplikasi ini kurang sesuai untuk alur kerja barbershop Anda.",
  },
  {
    q: "Bisa dipakai untuk salon rambut atau pangkas rambut biasa?",
    a: "Tentu bisa! Nama layanan, daftar harga paket cukur, durasi, hingga produk pomade atau pewarna rambut bisa Anda sesuaikan dengan bebas.",
  },
  {
    q: "Apakah ada biaya langganan bulanan di kemudian hari?",
    a: "Sama sekali tidak ada! Cukup bayar satu kali di awal saat harga promo, aplikasi menjadi milik Anda selamanya tanpa biaya tersembunyi.",
  },
  {
    q: "Bagaimana jika saya butuh bantuan teknis?",
    a: "Tim bantuan kami siap mendampingi pertanyaan Anda melalui WhatsApp setiap hari.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#F5F1E8] border-t border-stone-300/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black mb-3 border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
            <span>TANYA JAWAB UMUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Semua hal yang perlu Anda ketahui tentang kemudahan menggunakan Barber Suite.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border-2 border-stone-200/90 overflow-hidden bg-white shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-amber-100 text-amber-900 rotate-180"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
