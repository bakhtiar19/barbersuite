"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const FAQS = [
  {
    q: "Apakah aplikasi ini memerlukan koneksi internet untuk kasir?",
    a: "Tidak! POS Barbershop dapat digunakan secara offline untuk transaksi sehari-hari. Koneksi internet hanya dibutuhkan saat sinkronisasi backup data ke cloud atau melakukan update fitur.",
  },
  {
    q: "Bisa digunakan di berapa device / HP?",
    a: "Satu pembelian lisensi Rp 50.000 berlaku untuk 1 device (Android). Jika Anda memiliki beberapa cabang barbershop atau kasir berbeda, Anda cukup membeli lisensi tambahan dengan harga yang sama.",
  },
  {
    q: "Bagaimana cara instalasi aplikasinya?",
    a: "Sangat mudah! Setelah pembayaran berhasil, Anda langsung mendapatkan link download file APK. Cukup buka di HP Android Anda dan klik Install. Tim kami juga siap membantu memandu via WhatsApp.",
  },
  {
    q: "Apakah data transaksi dan pelanggan saya aman?",
    a: "100% aman. Data transaksi utama tersimpan di memori perangkat Anda sendiri dan bisa dicadangkan sewaktu-waktu. Tidak ada data yang disalahgunakan atau dibagikan ke pihak ketiga.",
  },
  {
    q: "Apakah ada garansi uang kembali?",
    a: "Ya! Kami memberikan garansi 7 hari uang kembali 100% jika Anda merasa aplikasi ini tidak cocok atau kurang membantu operasional barbershop Anda.",
  },
  {
    q: "Bisa digunakan untuk salon wanita atau pangkas rambut biasa?",
    a: "Tentu bisa! Nama layanan, daftar produk, dan harga bisa Anda sesuaikan bebas untuk barbershop, pangkas rambut, maupun salon kecantikan.",
  },
  {
    q: "Bagaimana jika ada update fitur baru?",
    a: "Semua pembaruan fitur di masa depan diberikan secara gratis selamanya. Anda tidak perlu membayar biaya langganan bulanan lagi.",
  },
  {
    q: "Bagaimana jika saya butuh bantuan teknis?",
    a: "Tim bantuan kami siap menjawab dan membantu kendala teknis Anda melalui WhatsApp resmi kami setiap hari.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>TANYA JAWAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Punya pertanyaan lain? Anda juga bisa langsung menanyakannya ke WhatsApp kami.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base hover:text-amber-700 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
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
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Masih ada pertanyaan yang belum terjawab?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Hubungi customer service kami via WhatsApp, kami siap membantu Anda.
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya-tanya%20tentang%20aplikasi%20POS%20Barbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
