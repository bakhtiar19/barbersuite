"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function WhatsAppFloat() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
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

  return (
    <div className="fixed z-40 flex flex-col items-end gap-3 right-5 sm:right-6 bottom-20 md:bottom-6 pointer-events-none">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Kembali ke atas"
            className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 border border-neutral-700 hover:border-amber-500/50 flex items-center justify-center shadow-xl backdrop-blur-md transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <div className="relative group pointer-events-auto">
        {/* Tooltip on Hover (Desktop) */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-neutral-950/95 text-white text-xs font-semibold whitespace-nowrap border border-neutral-800 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:flex items-center gap-1.5">
          <span>Chat via WhatsApp</span>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* TODO: Ganti nomor WA */}
        <motion.a
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20aplikasi%20POS%20Barbershop.%20Bisa%20info%20lebih%20lanjut%3F"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Hubungi WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-colors"
        >
          <MessageCircle className="w-7 h-7 fill-white text-white" />
        </motion.a>
      </div>
    </div>
  );
}
