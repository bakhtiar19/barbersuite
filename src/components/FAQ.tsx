"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const FAQS = [
  {
    q: "Apakah aplikasi ini bisa digunakan secara offline tanpa internet?",
    a: "Bisa! Barber Suite dapat digunakan untuk input transaksi dan cetak nota secara offline. Koneksi internet hanya dibutuhkan saat backup database ke cloud atau mengunduh pembaruan fitur.",
  },
  {
    q: "Bisa dipakai di berapa HP / tablet?",
    a: "Satu lisensi Rp 50.000 berlaku untuk 1 perangkat Android. Jika Anda memiliki cabang barbershop lain, Anda cukup membeli lisensi tambahan dengan harga promo yang sama.",
  },
  {
    q: "Bagaimana cara instalasi aplikasinya?",
    a: "Sangat praktis. Begitu pembayaran selesai, link download file APK langsung tersedia. Anda tinggal unduh di HP Android Anda dan klik Pasang / Install. Tim kami siap memandu via WhatsApp.",
  },
  {
    q: "Apakah data pelanggan dan transaksi saya aman?",
    a: "100% aman. Data tersimpan di memori perangkat Anda sendiri. Tidak ada data pelanggan atau omset Anda yang dibagikan atau dijual ke pihak lain.",
  },
  {
    q: "Apakah ada garansi uang kembali?",
    a: "Ya! Kami memberikan garansi uang kembali 100% dalam 7 hari jika Anda merasa aplikasi ini tidak cocok untuk operasional barbershop Anda.",
  },
  {
    q: "Bisa dipakai untuk salon wanita atau pangkas rambut biasa?",
    a: "Tentu bisa! Nama layanan, daftar harga, dan produk bisa Anda ganti dan tambah sesuka hati sesuai kebutuhan usaha Anda.",
  },
  {
    q: "Apakah ada biaya langganan bulanan di kemudian hari?",
    a: "Sama sekali tidak ada! Cukup bayar Rp 50.000 sekali saja di awal, aplikasi bisa dipakai seumur hidup tanpa biaya tersembunyi.",
  },
  {
    q: "Bagaimana jika saya membutuhkan bantuan teknis?",
    a: "Tim customer support kami siap melayani dan mendampingi pertanyaan Anda melalui WhatsApp setiap hari.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#f5f2eb] border-t border-stone-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/90 text-amber-950 text-xs font-bold mb-3 border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>TANYA JAWAB UMUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Pertanyaan yang Kerap Ditanyakan
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Masih ada pertanyaan yang belum tercantum? Tim kami siap menjawab via WhatsApp.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
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
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 font-normal">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-black text-stone-900">
              Masih ingin konsultasi seputar fitur kasir?
            </h4>
            <p className="text-xs text-stone-600 mt-1">
              Hubungi CS kami di WhatsApp, kami bantu jawab dengan senang hati.
            </p>
          </div>
          <a
            href="https://wa.me/6282145773753?text=Halo%2C%20saya%20mau%20tanya-tanya%20tentang%20aplikasi%20Barber%20Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-xs transition-colors shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-stone-950" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
