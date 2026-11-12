"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scissors, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Fitur", href: "#fitur" },
  { label: "Tampilan Nyata", href: "#preview" },
  { label: "vs Moka POS", href: "#komparasi", badge: "Hemat 98%" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
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
          ? "bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Refined Barber Pole Hairline Accent at very top of navbar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[repeating-linear-gradient(45deg,#dc2626,#dc2626_8px,#ffffff_8px,#ffffff_16px,#2563eb_16px,#2563eb_24px,#ffffff_24px,#ffffff_32px)] opacity-85" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-stone-950 shadow-sm shadow-amber-500/20 group-hover:rotate-6 transition-transform">
              <Scissors className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-stone-900 flex items-center gap-1.5 leading-tight">
                Barber <span className="text-amber-600">Suite</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-stone-500 font-bold">
                Kasir Barbershop Modern
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Moka POS style pill container) */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 border border-stone-200/80 p-1.5 rounded-full px-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-1 text-xs font-bold text-stone-700 hover:text-stone-950 hover:bg-white rounded-full transition-all flex items-center gap-1.5"
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
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-stone-950 bg-amber-400 hover:bg-amber-300 border border-amber-500/30 transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beli Lisensi — Rp 50.000</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 hover:bg-stone-200 transition-colors focus:outline-none"
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
            className="fixed inset-x-0 top-[68px] bg-[#faf8f5] border-b border-stone-200 md:hidden p-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-2.5 text-base font-bold text-stone-800 hover:text-amber-700 border-b border-stone-100 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}

              <div className="pt-4">
                <a
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, "#pricing")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-black text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Beli Barber Suite — Rp 50.000</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
