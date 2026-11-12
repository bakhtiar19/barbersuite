"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import AppScreenshotsShowcase from "@/components/AppScreenshotsShowcase";
import MokaComparison from "@/components/MokaComparison";
import SavingsCalculator from "@/components/SavingsCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
      <Navbar />

      <main>
        {/* 1. Hero — Editorial Headline + Live Interactive POS Simulator */}
        <HeroSection />

        {/* 2. Pain Points — Masalah riil yang dialami pemilik barbershop */}
        <PainPoints />

        {/* 3. Features — Bento Grid 2.0 dengan modul kasir, komisi, printer thermal */}
        <Features />

        {/* 4. App Screenshots Showcase — Tampilan Asli Aplikasi Barber Suite v4.2.0 */}
        <AppScreenshotsShowcase />

        {/* 5. Head-to-Head vs Moka POS — Kenapa Barber Suite Lebih Unggul & Hemat */}
        <MokaComparison />

        {/* 6. Interactive Savings / ROI Calculator — Hitung penghematan tahunan */}
        <SavingsCalculator />

        {/* 7. Why Choose Us — Nilai lebih + Dark Stone Luxury Ribbon */}
        <WhyChooseUs />

        {/* 8. Pricing — Kartu harga Barber Suite Pro v4.2.0 (Rp 50.000 seumur hidup) */}
        <Pricing onOpenPayment={handleOpenPayment} />

        {/* 9. Testimonials — Cerita nyata pemilik barbershop */}
        <Testimonials />

        {/* 10. FAQ — Tanya jawab lengkap seputar instalasi, offline engine & fitur */}
        <FAQ />

        {/* 11. Closing CTA — Penutup hardselling + countdown timer */}
        <CTAFinal />
      </main>

      <Footer />

      {/* Floating Concierge Assistant & Mobile Sticky Bar */}
      <WhatsAppFloat />
      <StickyMobileCTA />

      {/* Midtrans Snap / WhatsApp Checkout Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePayment}
      />
    </>
  );
}
