"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scissors, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// DUMMY: Ganti dengan data real navigasi jika ada perubahan menu
interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#pricing" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // TODO: Ganti dengan value real jika ingin mengubah harga pada CTA
  const priceDisplay = "Rp 50.000";

  // Track scroll position to adjust background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <Scissors className="w-5 h-5 text-neutral-950 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                POS <span className="text-amber-400">Barbershop</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold -mt-1">
                Aplikasi Kasir Digital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-md shadow-amber-500/30 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <Sparkles className="w-4 h-4 text-neutral-950" />
              <span>Beli Sekarang — {priceDisplay}</span>
              <ArrowRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[65px] z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl border-t border-neutral-800 md:hidden flex flex-col justify-between px-6 py-8"
          >
            {/* Navigation List */}
            <div className="flex flex-col space-y-4 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 px-3">
                Menu Utama
              </p>
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-3.5 rounded-xl text-lg font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900/80 active:bg-neutral-800 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 pt-6 border-t border-neutral-800/80 pb-6"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#121218] border border-amber-500/20 text-center">
                <span className="text-xs text-amber-400 font-semibold block mb-1">
                  Promo Spesial Peluncuran
                </span>
                <p className="text-sm text-neutral-300">
                  Sekali bayar, aktif selamanya tanpa biaya bulanan
                </p>
              </div>

              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "#pricing")}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 active:scale-95 transition-transform"
              >
                <Sparkles className="w-5 h-5 text-neutral-950" />
                <span>Beli Sekarang — {priceDisplay}</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
