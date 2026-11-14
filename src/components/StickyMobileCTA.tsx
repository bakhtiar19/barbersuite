"use client";

import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";
import { CHECKOUT_URL } from "@/config/site";

interface StickyMobileCTAProps {
  onOpenPayment?: () => void;
}

export default function StickyMobileCTA({ onOpenPayment }: StickyMobileCTAProps) {
  const countdown = useCountdown();

  return (
    <aside
      aria-label="Penawaran Cepat Mobile"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF7F2]/98 backdrop-blur-md border-t border-stone-300 px-3 py-2 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Left Info: Harga dan Countdown Tepat BERDAMPINGAN (Horizontal di Samping Harga, Bukan di Bawah) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Harga Utama & Coret */}
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black text-stone-950 leading-tight">
              Rp 55.700
            </span>
            <span className="text-[10px] text-stone-400 font-bold line-through leading-none">
              Rp 111.400
            </span>
          </div>

          {/* Countdown Timer Tepat di Samping Harga */}
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-100 border border-amber-300 text-stone-900 shadow-2xs">
            <Clock className="w-3 h-3 text-red-600 animate-pulse shrink-0" />
            <span className="font-mono text-[11px] font-black text-stone-950 tracking-tight">
              {countdown.hours}:{countdown.minutes}:{countdown.seconds}
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <motion.a
          href={CHECKOUT_URL}
          onClick={(e) => {
            if (onOpenPayment) {
              e.preventDefault();
              onOpenPayment();
            }
          }}
          whileTap={{ scale: 0.95 }}
          className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <Zap className="w-3.5 h-3.5 fill-stone-950" />
          <span>Beli Sekarang</span>
        </motion.a>

      </div>
    </aside>
  );
}
