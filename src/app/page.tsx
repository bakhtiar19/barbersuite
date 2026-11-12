"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import AppScreenshotsShowcase from "@/components/AppScreenshotsShowcase";
import MokaComparison from "@/components/MokaComparison";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PaymentModal from "@/components/PaymentModal";

export default function Home() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleOpenPayment = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <Navbar onOpenPayment={handleOpenPayment} />

      <main>
        {/* 1. Hero — Moka POS Style: Stylish Capster + 1 App Screenshot + Brief Highlight */}
        <HeroSection onOpenPayment={handleOpenPayment} />

        {/* 2. Features — Modul kasir kilat, komisi kapster, printer thermal, offline engine */}
        <Features />

        {/* 3. App Screenshots Showcase — Tampilan Asli Aplikasi Barber Suite v4.2.0 */}
        <AppScreenshotsShowcase />

        {/* 4. Head-to-Head vs Moka POS — Kenapa Barber Suite Lebih Unggul & Hemat */}
        <MokaComparison onOpenPayment={handleOpenPayment} />

        {/* 5. Why Choose Us — 4 Nilai Lebih + Statistik */}
        <WhyChooseUs />

        {/* 6. Testimonials — Cerita nyata pemilik barbershop */}
        <Testimonials />

        {/* 7. FAQ — Tanya jawab lengkap seputar instalasi & offline engine */}
        <FAQ />

        {/* 8. Closing CTA — Penutup Beli Langsung (Hard-sell) */}
        <CTAFinal onOpenPayment={handleOpenPayment} />
      </main>

      <Footer />

      {/* Sticky Mobile Buy Bar */}
      <StickyMobileCTA onOpenPayment={handleOpenPayment} />

      {/* Direct Buy / Checkout Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePayment}
      />
    </>
  );
}
