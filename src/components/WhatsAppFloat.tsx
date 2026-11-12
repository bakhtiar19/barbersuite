"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, X, Sparkles, Send } from "lucide-react";

export default function WhatsAppFloat() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"; // TODO: Ganti nomor WA

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = (customText?: string) => {
    const defaultText =
      "Halo Tim Barber Suite! Saya tertarik dengan aplikasi kasir seharga Rp 50.000. Mau tanya-tanya lebih lanjut.";
    const text = encodeURIComponent(customText || defaultText);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed z-40 flex flex-col items-end gap-3 right-4 sm:right-6 bottom-20 md:bottom-6 pointer-events-none">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Kembali ke atas"
            className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 flex items-center justify-center shadow-md transition-colors cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Concierge Interactive Chat Bubble Card */}
      <AnimatePresence>
        {isBubbleOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto max-w-[280px] sm:max-w-[320px] bg-white border-2 border-stone-200/90 rounded-2xl p-4 shadow-xl text-stone-900 relative"
          >
            {/* Close mini badge */}
            <button
              type="button"
              onClick={() => setIsBubbleOpen(false)}
              className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700 p-1 rounded-full hover:bg-stone-100 cursor-pointer transition-colors"
              aria-label="Tutup pesan bantuan"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Agent Info */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-amber-400 text-stone-950 font-black flex items-center justify-center text-xs shadow-2xs">
                  CS
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900 leading-tight">
                  Konsultan Barber Suite
                </p>
                <span className="text-[10px] text-emerald-700 font-medium">
                  Online • Siap Membantu
                </span>
              </div>
            </div>

            {/* Message Bubble */}
            <p className="text-xs text-stone-600 leading-relaxed bg-[#FAF8F5] p-2.5 rounded-xl border border-stone-200/80 mb-3">
              👋 Ada pertanyaan tentang cara install atau fitur bagi hasil kapster?
              Konsultasikan gratis sekarang!
            </p>

            {/* Quick Prompt Buttons */}
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Halo CS, mau tanya apakah aplikasi POS Barbershop bisa cetak nota kasir lewat printer Bluetooth?"
                  )
                }
                className="w-full text-left text-[11px] font-semibold text-stone-700 bg-stone-50 hover:bg-amber-50 hover:text-amber-900 border border-stone-200 p-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Bisa cetak printer Bluetooth?</span>
                <Send className="w-3 h-3 text-stone-400" />
              </button>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Halo CS, mau tanya apakah bisa dipakai untuk salon kecantikan / pangkas rambut biasa?"
                  )
                }
                className="w-full text-left text-[11px] font-semibold text-stone-700 bg-stone-50 hover:bg-amber-50 hover:text-amber-900 border border-stone-200 p-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Bisa untuk salon / pangkas rambut?</span>
                <Send className="w-3 h-3 text-stone-400" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Floating Button */}
      <div className="relative group pointer-events-auto">
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <motion.button
          type="button"
          onClick={() => {
            if (!isBubbleOpen) setIsBubbleOpen(true);
            else openWhatsApp();
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Buka Chat WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-colors cursor-pointer"
        >
          <MessageCircle className="w-7 h-7 fill-white text-white" />
        </motion.button>
      </div>
    </div>
  );
}
