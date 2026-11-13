"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenPayment?: () => void;
}

export default function StickyMobileCTA({ onOpenPayment }: StickyMobileCTAProps) {
  const [countdown, setCountdown] = useState({
    hours: "07",
    minutes: "42",
    seconds: "15",
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = Math.max(0, endOfDay.getTime() - now.getTime());

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setCountdown({
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Penawaran Cepat Mobile"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF7F2]/98 backdrop-blur-md border-t border-stone-300 px-3.5 py-2.5 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Left Info: Price + Countdown Directly Beside/Below It */}
        <div className="flex flex-col shrink-0">
          {/* Price Row: Rp 55.700 + Coret */}
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className="text-base sm:text-lg font-black text-stone-950">
              Rp 55.700
            </span>
            <span className="text-[10px] text-stone-400 font-bold line-through">
              Rp 111.400
            </span>
          </div>

          {/* Countdown Timer Row Directly Beside Price */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-stone-900 shadow-2xs">
              <Clock className="w-2.5 h-2.5 text-red-600 animate-pulse shrink-0" />
              <span className="font-mono text-[10px] font-black text-stone-950">
                {countdown.hours}:{countdown.minutes}:{countdown.seconds}
              </span>
            </div>
            <span className="text-[9px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded uppercase">
              -50%
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <motion.button
          type="button"
          onClick={() => onOpenPayment?.()}
          whileTap={{ scale: 0.95 }}
          className="flex-1 max-w-[145px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-stone-950" />
          <span>Beli Sekarang</span>
        </motion.button>
      </div>
    </aside>
  );
}
