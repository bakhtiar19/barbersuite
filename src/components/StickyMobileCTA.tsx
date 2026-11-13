"use client";

import { motion } from "framer-motion";
import { Zap, Scissors } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenPayment?: () => void;
}

export default function StickyMobileCTA({ onOpenPayment }: StickyMobileCTAProps) {
  return (
    <aside
      aria-label="Penawaran Cepat Mobile"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF7F2]/98 backdrop-blur-md border-t border-stone-300 px-4 py-2.5 shadow-xl"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Info: Product name & Price Coret */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Scissors className="w-3 h-3 text-amber-800 -rotate-45" />
            <span className="text-[11px] font-black text-stone-900 tracking-wide font-serif">
              Barber Suite Pro
            </span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-black text-stone-950">Rp 55.700</span>
            <span className="text-[10px] text-stone-400 font-bold line-through">Rp 111.400</span>
          </div>
        </div>

        {/* Right CTA Button (No direct price in button) */}
        <motion.button
          type="button"
          onClick={() => onOpenPayment?.()}
          whileTap={{ scale: 0.95 }}
          className="flex-1 max-w-[150px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md active:bg-amber-500 transition-colors cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-stone-950" />
          <span>Beli Sekarang</span>
        </motion.button>
      </div>
    </aside>
  );
}
