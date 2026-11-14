"use client";

import { useState, useEffect } from "react";

interface CountdownTime {
  hours: string;
  minutes: string;
  seconds: string;
}

/**
 * Shared countdown hook — counts down to end of today (23:59:59).
 * Used by HeroSection, CTAFinal, and StickyMobileCTA.
 */
export function useCountdown(): CountdownTime {
  const [time, setTime] = useState<CountdownTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = Math.max(0, endOfDay.getTime() - now.getTime());

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTime({
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
