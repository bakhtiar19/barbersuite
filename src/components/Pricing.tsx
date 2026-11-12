"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react";

// TODO: Ganti nomor WA
const WHATSAPP_NUMBER = "6281234567890";

// DUMMY: Ganti dengan data real
interface PricingFeature {
  title: string;
  description: string;
}

// DUMMY: Ganti dengan data real fitur checklist
const FEATURES: PricingFeature[] = [
  {
    title: "Kasir Digital Super Cepat",
    description: "Input transaksi hitungan detik, hemat waktu antrean kasir.",
  },
  {
    title: "Laporan Keuangan Otomatis",
    description: "Rekap omset harian, bulanan, & bagi hasil kapster instan.",
  },
  {
    title: "Manajemen Pelanggan",
    description: "Database member, histori cukur, & program loyalitas pelanggan.",
  },
  {
    title: "Kontrol Stok Produk",
    description: "Pantau stok pomade, tonic, & kebutuhan barbershop tanpa tekor.",
  },
  {
    title: "Jadwal & Booking",
    description: "Atur jadwal kapster dan reservasi tanpa antrean bentrok.",
  },
  {
    title: "Multi Metode Pembayaran",
    description: "Terima QRIS, transfer bank, e-wallet, dan tunai dengan mudah.",
  },
  {
    title: "Gratis Update Selamanya",
    description: "Nikmati update fitur terbaru tanpa tambahan biaya langganan.",
  },
  {
    title: "Support WhatsApp 24/7",
    description: "Bantuan teknis responsif siap sedia saat operasional berjalan.",
  },
];

// DUMMY: Ganti dengan data real daftar pembayaran
const PAYMENT_METHODS = [
  "BCA",
  "Mandiri",
  "BRI",
  "BNI",
  "GoPay",
  "OVO",
  "DANA",
  "ShopeePay",
  "QRIS",
];

interface PricingProps {
  onOpenPayment?: () => void;
}

export default function Pricing({ onOpenPayment }: PricingProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Handler checkout / pembayaran
  const handlePayment = () => {
    if (onOpenPayment) {
      onOpenPayment();
      return;
    }

    // Fallback direct WhatsApp checkout
    const message = encodeURIComponent(
      "Halo Admin POS Barbershop! Saya ingin membeli Lifetime License seharga Rp 50.000. Mohon info rekening pembayarannya."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="harga"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] text-white overflow-hidden selection:bg-amber-500 selection:text-black"
    >
      {/* Anchor alias untuk kompatibilitas navigasi #pricing */}
      <div id="pricing" className="absolute -top-20" />

      {/* Background Radial Glow Effect (Gold/Amber) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[850px] h-[340px] sm:h-[650px] lg:h-[850px] bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-[120px] sm:blur-[160px] -z-0"
      />

      {/* Decorative dark ambient grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 -z-0"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm shadow-amber-500/10"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>PENAWARAN SPESIAL TERBATAS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Investasi Kecil,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Untung Besar
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-neutral-400"
          >
            Harga yang nggak akan bikin kantong bolong
          </motion.p>
        </div>

        {/* ONE Prominent Pricing Card (Centered, Large, Glassmorphic with Gold Glow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative max-w-xl mx-auto rounded-3xl bg-neutral-900/80 backdrop-blur-2xl border transition-all duration-500 p-6 sm:p-10 lg:p-12 ${
            isHovered
              ? "border-amber-400/60 shadow-[0_0_80px_-10px_rgba(245,158,11,0.4)]"
              : "border-amber-500/35 shadow-[0_0_55px_-15px_rgba(245,158,11,0.25)]"
          }`}
        >
          {/* Discount Badge at Top with Pulsing Animation */}
          <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
                  "0 10px 30px -3px rgba(245, 158, 11, 0.6)",
                  "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase border border-red-400/40"
            >
              <span className="text-base leading-none">🔥</span>
              <span>DISKON 67% — TERBATAS!</span>
            </motion.div>
          </div>

          {/* Product Header */}
          <div className="text-center pt-2 sm:pt-4 pb-6 border-b border-neutral-800/90">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lifetime License</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              POS Barbershop
            </h3>

            <p className="mt-1 text-sm text-neutral-400">
              Solusi kasir & manajemen barbershop lengkap tanpa ribet.
            </p>

            {/* Price section */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 line-through text-lg sm:text-xl font-medium">
                  {/* TODO: Ganti dengan value real harga normal */}
                  Rp 150.000
                </span>
                <span className="text-xs font-bold text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                  Hemat 67%
                </span>
              </div>

              {/* Harga sekarang: Rp 50.000 very large, bold, gold color with glow */}
              <div className="mt-1 flex items-baseline justify-center gap-2">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 tracking-tight drop-shadow-[0_4px_16px_rgba(245,158,11,0.4)]">
                  Rp 50.000
                </span>
              </div>

              <p className="mt-2 text-sm sm:text-base font-semibold text-amber-300/90 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 inline" />
                <span>Sekali bayar, pakai selamanya!</span>
              </p>
            </div>
          </div>

          {/* Feature Checklist with Green Checkmark Icons */}
          <div className="py-7 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4 px-1">
              Semua Fitur Premium Termasuk:
            </p>

            <ul className="space-y-3.5 sm:space-y-4">
              {FEATURES.map((feature, idx) => (
                <motion.li
                  key={feature.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * idx }}
                  className="flex items-start gap-3 text-left group"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/25 group-hover:scale-110 transition-all">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors">
                      {feature.title}
                    </span>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button & Urgency Info */}
          <div className="pt-2 pb-4 space-y-4">
            <motion.button
              type="button"
              onClick={handlePayment}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group overflow-hidden py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-neutral-950 font-black text-lg sm:text-xl shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:shadow-[0_0_50px_rgba(245,158,11,0.55)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              aria-label="Beli Sekarang — Rp 50.000"
            >
              {/* Shimmer light sweep */}
              <span className="absolute inset-0 w-full h-full bg-white/25 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

              <Sparkles className="w-5 h-5 fill-neutral-950 text-neutral-950" />
              <span>Beli Sekarang — Rp 50.000</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Urgency Text */}
            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-amber-400/90 text-center">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span>⏰ Harga bisa naik kapan saja tanpa pemberitahuan</span>
            </div>

            {/* Money-Back Guarantee Text */}
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 text-neutral-300 text-xs sm:text-sm text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>💰 Garansi uang kembali 7 hari jika tidak puas</span>
            </div>
          </div>

          {/* Payment Method Icons Row (Text-based, gray color) */}
          <div className="mt-6 pt-5 border-t border-neutral-800/80 text-center">
            <div className="flex items-center justify-center gap-1.5 text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Pembayaran Aman & Terverifikasi:</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide leading-relaxed">
              {PAYMENT_METHODS.join(" • ")}
            </p>
          </div>
        </motion.div>

        {/* Small trust indicator under card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-neutral-500">
            Aktivasi instan setelah pembayaran terkonfirmasi. Butuh bantuan?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
            >
              Chat CS via WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
