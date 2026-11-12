"use client";

import { useState, useEffect, useRef, useCallback, type TouchEvent } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  MessageCircle,
} from "lucide-react";

// TODO: Ganti nomor WA
const WHATSAPP_NUMBER = "6281234567890";

interface TestimonialItem {
  id: number;
  name: string;
  barbershop: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
  avatarGradient: string;
}

// DUMMY: Ganti dengan data real
const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Andi Prasetyo",
    barbershop: "Gentleman Barbershop",
    city: "Jakarta",
    rating: 5,
    text: "Sebelum pakai POS Barbershop, saya catat semua transaksi di buku. Sekarang semua otomatis. Omset naik 30% karena bisa tracking pelanggan loyal!",
    initials: "AP",
    avatarGradient: "from-amber-400 to-amber-600",
  },
  {
    id: 2,
    name: "Rizky Hidayat",
    barbershop: "Urban Cut Studio",
    city: "Surabaya",
    rating: 5,
    text: "Aplikasinya simpel banget. Karyawan saya yang gaptek aja bisa langsung pakai. Worth it banget cuma Rp 50.000!",
    initials: "RH",
    avatarGradient: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    name: "Budi Santoso",
    barbershop: "Kings Barbershop",
    city: "Bandung",
    rating: 5,
    text: "Fitur laporannya juara! Sekarang saya tahu persis berapa pendapatan harian tanpa hitung manual. Game changer!",
    initials: "BS",
    avatarGradient: "from-emerald-500 to-emerald-700",
  },
  {
    id: 4,
    name: "Dimas Arya",
    barbershop: "Fresh Cut Barbershop",
    city: "Yogyakarta",
    rating: 5,
    text: "Saya sudah coba 3 aplikasi kasir lain, semuanya langganan bulanan. POS Barbershop sekali bayar dan fiturnya lebih lengkap!",
    initials: "DA",
    avatarGradient: "from-orange-500 to-amber-600",
  },
  {
    id: 5,
    name: "Fajar Rahman",
    barbershop: "The Blade Barbershop",
    city: "Medan",
    rating: 5,
    text: "Support-nya responsif banget. Jam 11 malam chat WA, 10 menit dijawab. Top!",
    initials: "FR",
    avatarGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    name: "Gilang Maulana",
    barbershop: "Classic Cuts",
    city: "Semarang",
    rating: 5,
    text: "Booking online-nya membantu banget. Pelanggan bisa booking dari rumah, antrian jadi teratur. Pelanggan happy, saya juga happy!",
    initials: "GM",
    avatarGradient: "from-violet-500 to-purple-700",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive cards per view calculation (1 mobile, 2 tablet, 3 desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);

  // Auto-scroll handler
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll interval with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // Swiped left -> next
      handleNext();
    } else if (diff < -50) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimoni"
      className="relative py-24 sm:py-32 bg-[#111827] text-white overflow-hidden selection:bg-amber-500 selection:text-black"
    >
      {/* Background radial glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] -z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[160px] -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Framer Motion Animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>KISAH SUKSES PENGGUNA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Apa Kata Mereka yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Sudah Pakai?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Barbershop di seluruh Indonesia sudah merasakan manfaatnya
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden py-4 -my-4 px-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {TESTIMONIALS.map((item, index) => (
                <div
                  key={item.id}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="h-full group relative flex flex-col justify-between rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-gray-800/80 hover:border-amber-500/40 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
                  >
                    {/* Top row: Star Rating & Decorative Quote Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        {/* 5 Gold Star Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>

                        {/* Quote icon */}
                        <Quote className="w-7 h-7 text-amber-500/25 group-hover:text-amber-500/50 transition-colors" />
                      </div>

                      {/* Testimonial Text in Quotes */}
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>

                    {/* Author & Barbershop Details */}
                    <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-800/80">
                      {/* Avatar Placeholder: Colored circle with initials */}
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.avatarGradient} flex items-center justify-center font-bold text-neutral-950 text-sm shadow-md ring-2 ring-amber-500/30 shrink-0`}
                      >
                        {item.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-white font-bold text-sm sm:text-base truncate group-hover:text-amber-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs font-semibold text-amber-400 truncate">
                          {item.barbershop}
                        </p>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                          <span className="truncate">{item.city}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation Controls (Arrows & Indicator Dots) */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Auto-scroll status hint */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 order-2 sm:order-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {isPaused
                  ? "Auto-scroll dijeda (arahkan kursor keluar untuk melanjutkan)"
                  : "Auto-scroll aktif • Geser atau klik panah untuk melihat"}
              </span>
            </div>

            {/* Navigation Buttons and Dots */}
            <div className="flex items-center gap-4 order-1 sm:order-2">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Testimoni sebelumnya"
                className="w-10 h-10 rounded-xl bg-gray-800/80 hover:bg-amber-500 text-neutral-300 hover:text-neutral-950 border border-gray-700/80 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Buka slide testimoni ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === dotIdx
                        ? "w-8 bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm shadow-amber-500/50"
                        : "w-2.5 bg-gray-700 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Testimoni berikutnya"
                className="w-10 h-10 rounded-xl bg-gray-800/80 hover:bg-amber-500 text-neutral-300 hover:text-neutral-950 border border-gray-700/80 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Consultation Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800/70 to-gray-900 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Ingin Barbershop Anda Jadi Cerita Sukses Berikutnya?
              </h4>
              <p className="text-sm text-neutral-400 mt-0.5">
                Konsultasikan kebutuhan kasir & operasional barbershop Anda
                bersama tim kami.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Halo, saya ingin bertanya lebih lanjut tentang POS Barbershop."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <span>Tanya Kami di WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
