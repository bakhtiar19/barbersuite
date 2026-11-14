"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scissors, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CHECKOUT_URL } from "@/config/site";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Tampilan Aplikasi", href: "#preview" },
  { label: "Beda vs Software Lain", href: "#komparasi", badge: "Hemat 98%" },
  { label: "Cerita Pemilik", href: "#testimoni" },
  { label: "Tanya Jawab", href: "#faq" },
];

interface NavbarProps {
  onOpenPayment?: () => void;
}

export default function Navbar({ onOpenPayment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-stone-300/80 shadow-[0_4px_25px_rgba(28,25,23,0.06)] py-2.5"
          : "bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/70 py-3.5 sm:py-4"
      }`}
    >
      {/* Authentic Barber Pole Accent Strip (Red, White, Blue Barbershop Signature) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[repeating-linear-gradient(45deg,#b91c1c,#b91c1c_10px,#ffffff_10px,#ffffff_20px,#1d4ed8_20px,#1d4ed8_30px,#ffffff_30px,#ffffff_40px)] opacity-95 shadow-xs" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo Barbershop Vintage Modern */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform active:scale-95 shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 flex items-center justify-center text-amber-100 shadow-md shadow-amber-900/20 group-hover:rotate-6 transition-transform border border-amber-500/30">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-stone-900 flex items-center gap-1 leading-tight font-serif">
                Barber <span className="text-amber-700 font-sans font-black">Suite</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-stone-500">
                Sistem Kasir Barbershop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full px-3.5 border bg-white/90 border-stone-200 shadow-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-1 text-xs font-bold text-stone-700 hover:text-stone-950 hover:bg-[#F4F0E8] rounded-full transition-all flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded-full font-black">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={CHECKOUT_URL}
              onClick={(e) => {
                if (onOpenPayment) {
                  e.preventDefault();
                  onOpenPayment();
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 border border-amber-500/30 transition-all shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beli Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-stone-900" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bg-[#FAF7F2] border-b border-stone-300 md:hidden p-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-2.5 text-sm font-bold text-stone-800 hover:text-amber-800 border-b border-stone-200/80 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}

              <div className="pt-3">
                <a
                  href={CHECKOUT_URL}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (onOpenPayment) {
                      e.preventDefault();
                      onOpenPayment();
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Beli Sekarang</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
