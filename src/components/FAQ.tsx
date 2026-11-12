"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Apakah perlu koneksi internet?",
    answer:
      "Tidak! POS Barbershop bisa digunakan secara offline. Data tersimpan di device kamu. Koneksi internet hanya diperlukan untuk sinkronisasi dan backup data ke cloud.",
  },
  {
    id: 2,
    question: "Bisa dipakai di berapa device?",
    answer:
      "Satu pembelian berlaku untuk 1 device. Jika ingin menggunakan di device lain, cukup beli lisensi tambahan dengan harga yang sama.",
  },
  {
    id: 3,
    question: "Bagaimana cara install aplikasinya?",
    answer:
      "Sangat mudah! Setelah pembayaran berhasil, kamu akan mendapatkan file APK yang bisa langsung di-install di HP Android kamu. Kami juga sediakan panduan lengkap via WhatsApp.",
  },
  {
    id: 4,
    question: "Apakah data saya aman?",
    answer:
      "100% aman. Data tersimpan di device kamu dan bisa di-backup ke cloud. Kami menggunakan enkripsi untuk melindungi semua data transaksi dan pelanggan kamu.",
  },
  {
    id: 5,
    question: "Ada garansi uang kembali?",
    answer:
      "Ya! Kami memberikan garansi uang kembali 7 hari. Jika kamu tidak puas dengan aplikasinya, hubungi kami via WhatsApp dan kami akan refund 100%.",
  },
  {
    id: 6,
    question: "Bisa untuk salon juga, bukan hanya barbershop?",
    answer:
      "Tentu! POS Barbershop dirancang untuk barbershop DAN salon. Fitur-fiturnya fleksibel dan bisa disesuaikan dengan jenis layanan apapun.",
  },
  {
    id: 7,
    question: "Bagaimana cara mendapatkan update?",
    answer:
      "Update otomatis! Setiap ada versi baru, kamu akan mendapat notifikasi dan bisa langsung update. Semua update gratis selamanya.",
  },
  {
    id: 8,
    question: "Bagaimana jika saya butuh bantuan teknis?",
    answer:
      "Tim support kami siap 24/7 via WhatsApp. Langsung chat, dan kami akan bantu selesaikan masalah kamu secepat mungkin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0f172a] text-white overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Tanya Jawab Seputar Aplikasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Pertanyaan yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Sering Ditanyakan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Punya keraguan sebelum membeli? Simak jawaban pertanyaan umum para pemilik barbershop dan salon di bawah ini.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/95 border-amber-500/40 shadow-lg shadow-amber-500/5"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-3">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${isOpen ? "bg-amber-500 text-black font-extrabold" : "bg-slate-800 text-slate-400"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                      isOpen
                        ? "bg-amber-500/20 border-amber-500/40 text-amber-400"
                        : "bg-slate-800 border-slate-700 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-neutral-900 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Masih punya pertanyaan lain?
            </h3>
            <p className="text-sm text-slate-400">
              Tim support kami siap menjelaskan langsung detail teknis dan alur instalasi.
            </p>
          </div>

          {/* TODO: Ganti nomor WA */}
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20seputar%20aplikasi%20POS%20Barbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat CS via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
