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
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF8F5]/98 backdrop-blur-md border-t border-stone-300 px-4 py-3 shadow-lg"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Info: Product name & price */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-xs font-black text-stone-900 tracking-wide">
              Barber Suite Pro
            </span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-black text-stone-900">Rp 50.000</span>
            <span className="text-[10px] text-stone-400 line-through">Rp 150.000</span>
          </div>
        </div>

        {/* Right CTA Button */}
        <motion.button
          type="button"
          onClick={() => onOpenPayment?.()}
          whileTap={{ scale: 0.95 }}
          className="flex-1 max-w-[160px] py-2.5 px-4 rounded-xl bg-amber-400 text-stone-950 font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-xs active:bg-amber-500 transition-colors cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-stone-950" />
          <span>Beli Sekarang</span>
        </motion.button>
      </div>
    </aside>
  );
}
