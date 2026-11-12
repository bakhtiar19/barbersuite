"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
        {/* 1. Hero: Full Background Stylish Capster + 1 App Cashier Mockup + Elegant Highlight */}
        <HeroSection onOpenPayment={handleOpenPayment} />

        {/* 2. App Screenshots Showcase: Tampilan Nyata Aplikasi Barber Suite v4.2.0 */}
        <AppScreenshotsShowcase onOpenPayment={handleOpenPayment} />

        {/* 3. Head-to-Head vs Moka POS: Kenapa Barber Suite Lebih Unggul & Hemat */}
        <MokaComparison onOpenPayment={handleOpenPayment} />

        {/* 4. Why Choose Us: 4 Nilai Lebih + Statistik */}
        <WhyChooseUs />

        {/* 5. Testimonials: Cerita nyata pemilik barbershop */}
        <Testimonials />

        {/* 6. FAQ: Tanya jawab lengkap seputar instalasi & offline engine */}
        <FAQ />

        {/* 7. Closing CTA: Penutup Beli Langsung (Hard-sell) */}
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
