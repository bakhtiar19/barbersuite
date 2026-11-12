"use client";

import { motion } from "framer-motion";
import { Zap, Scissors } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <aside
      aria-label="Penawaran Cepat Mobile"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-neutral-800/90 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Info: Product name & price */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
              POS Barbershop
            </span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-black text-amber-400">Rp 50.000</span>
            <span className="text-[10px] text-neutral-500 line-through">Rp 250.000</span>
          </div>
        </div>

        {/* Right CTA Button */}
        <motion.a
          href="#pricing"
          whileTap={{ scale: 0.95 }}
          className="flex-1 max-w-[170px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-neutral-950 font-black text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 active:brightness-95 transition-all"
        >
          <Zap className="w-3.5 h-3.5 fill-black" />
          <span>Beli Sekarang</span>
        </motion.a>
      </div>
    </aside>
  );
}
