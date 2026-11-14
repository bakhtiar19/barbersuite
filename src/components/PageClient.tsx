"use client";

import { CHECKOUT_URL } from "@/config/site";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppScreenshotsShowcase from "@/components/AppScreenshotsShowcase";
import MokaComparison from "@/components/MokaComparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function PageClient() {
  const handleOpenPayment = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <>
      <Navbar onOpenPayment={handleOpenPayment} />

      <main>
        {/* 1. Hero: Capster dengan Smartphone + Heading Copywriting + Beli Sekarang */}
        <HeroSection onOpenPayment={handleOpenPayment} />

        {/* 2. Tampilan Asli Aplikasi: Bukti Visual Nyata Tanpa Bahasa Teknis Rumit */}
        <AppScreenshotsShowcase onOpenPayment={handleOpenPayment} />

        {/* 3. Komparasi Ringkas vs Moka POS: Super Padat & Bebas Scroll */}
        <MokaComparison onOpenPayment={handleOpenPayment} />

        {/* 4. Testimoni: Kisah Nyata Pemilik Barbershop */}
        <Testimonials />

        {/* 5. Tanya Jawab (FAQ): Menjawab Keraguan dengan Bahasa Ramah */}
        <FAQ />

        {/* 6. Penawaran Promo Terbatas: Harga Coret Rp 111.400 -> Rp 55.700 */}
        <CTAFinal onOpenPayment={handleOpenPayment} />
      </main>

      <Footer />

      {/* Bar Beli Cepat Khusus Mobile */}
      <StickyMobileCTA onOpenPayment={handleOpenPayment} />
    </>
  );
}
