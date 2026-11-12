"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  DollarSign,
  Zap,
  MessageCircle,
  RefreshCw,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Receipt,
  Headphones,
} from "lucide-react";

// TODO: Ganti nomor WA
const WHATSAPP_NUMBER = "6281234567890";

interface AdvantageCard {
  id: number;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  accentGradient: string;
  highlightText?: string;
  hasWhatsAppLink?: boolean;
}

const advantageCards: AdvantageCard[] = [
  {
    id: 1,
    icon: DollarSign,
    badge: "Hemat 100%",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGradient: "from-amber-400 to-amber-600",
    title: "Sekali Bayar, Selamanya",
    desc: "Nggak ada biaya langganan bulanan. Bayar Rp 50.000 sekali, pakai seumur hidup. Kompetitor lain? Minimal Rp 200.000/bulan!",
    highlightText: "Hemat hingga Rp 2,4 Juta / tahun",
  },
  {
    id: 2,
    icon: Zap,
    badge: "Langsung Pakai",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    accentGradient: "from-blue-400 to-cyan-500",
    title: "Mudah Dipakai",
    desc: "Tanpa training khusus. Install, buka, langsung pakai. Interface intuitif yang bisa dipahami siapa saja dalam 5 menit.",
    highlightText: "Desain simpel & anti ribet",
  },
  {
    id: 3,
    icon: MessageCircle,
    badge: "Fast Response",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGradient: "from-emerald-400 to-teal-500",
    title: "Support WhatsApp 24/7",
    desc: "Ada kendala? Langsung chat kami di WhatsApp. Tim support kami siap membantu kapan saja, termasuk hari libur.",
    highlightText: "Respon rata-rata < 5 menit",
    hasWhatsAppLink: true,
  },
  {
    id: 4,
    icon: RefreshCw,
    badge: "Lifetime Update",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    accentGradient: "from-purple-400 to-indigo-500",
    title: "Gratis Update Selamanya",
    desc: "Fitur baru terus ditambahkan secara berkala. Kamu dapat update gratis tanpa biaya tambahan. Aplikasi makin canggih, kamu nggak bayar lagi.",
    highlightText: "Akses fitur versi terbaru",
  },
];

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  comment?: string;
  icon: React.ElementType;
}

function AnimatedCounter({ value, suffix = "", decimals = 0, label, icon: Icon }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(current) {
        if (decimals > 0) {
          setDisplayValue(current.toFixed(decimals));
        } else {
          const rounded = Math.floor(current);
          setDisplayValue(rounded.toLocaleString("id-ID"));
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, decimals]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-amber-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center justify-center gap-0.5">
        <span>{displayValue}</span>
        <span className="text-amber-400">{suffix}</span>
      </div>

      <div className="mt-2 text-sm sm:text-base font-semibold text-zinc-300">
        {label}
      </div>
      <div className="text-xs text-zinc-500 mt-0.5">Terverifikasi & Aktif</div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="keunggulan"
      className="relative py-24 sm:py-32 bg-[#0f172a] text-zinc-100 overflow-hidden"
    >
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Framer Motion scroll animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenapa Kami Berbeda</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Kenapa Harus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              POS Barbershop?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
          >
            Solusi kasir barbershop paling masuk akal: harga bersahabat, fitur lengkap tanpa beban bulanan selamanya.
          </motion.p>
        </div>

        {/* 4 Glassmorphism Cards: 4 on desktop, 2x2 tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantageCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.18)]"
              >
                {/* Glow accent overlay on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-110 group-hover:border-amber-500/40 group-hover:text-amber-300 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-zinc-300/90 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Highlight / Action */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  {card.hasWhatsAppLink ? (
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin,%20saya%20ingin%20tanya%20tentang%20POS%20Barbershop`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Chat WhatsApp Sekarang</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400/90">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{card.highlightText}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counters Row */}
        <div className="mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Bukti Nyata Kepercayaan Mitra
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1">
              Dipercaya Barbershop & Salon di Seluruh Indonesia
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* DUMMY: Ganti dengan data real */}
            <AnimatedCounter
              value={500}
              suffix="+"
              label="Barbershop"
              icon={Users}
            />

            {/* DUMMY: Ganti dengan data real */}
            <AnimatedCounter
              value={10000}
              suffix="+"
              label="Transaksi"
              icon={Receipt}
            />

            {/* DUMMY: Ganti dengan data real */}
            <AnimatedCounter
              value={4.9}
              decimals={1}
              suffix="★"
              label="Rating"
              icon={Star}
            />

            {/* Special counter for 24/7 Support */}
            <AnimatedCounter
              value={24}
              suffix="/7"
              label="Support"
              icon={Headphones}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
