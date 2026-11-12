"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import SavingsCalculator from "@/components/SavingsCalculator";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import AppPreview from "@/components/AppPreview";
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

        {/* 3. Features — Bento Grid 2.0 dengan modul terintegrasi */}
        <Features />

        {/* 4. Interactive Savings / ROI Calculator — Hitung penghematan tahunan */}
        <SavingsCalculator />

        {/* 5. Comparison Table — Perbandingan transparan vs software bulanan */}
        <ComparisonTable />

        {/* 6. Why Choose Us — Nilai lebih + Dark Stone Luxury Ribbon */}
        <WhyChooseUs />

        {/* 7. App Preview — Tab tampilan nyata dashboard & laporan */}
        <AppPreview />

        {/* 8. Pricing — Kartu harga Rp 50.000 seumur hidup */}
        <Pricing onOpenPayment={handleOpenPayment} />

        {/* 9. Testimonials — Cerita nyata pemilik barbershop */}
        <Testimonials />

        {/* 10. FAQ — Tanya jawab lengkap seputar instalasi & fitur */}
        <FAQ />

        {/* 11. Closing CTA — Penutup hardselling + countdown timer */}
        <CTAFinal />
      </main>

      <Footer />

      {/* Floating Concierge Assistant & Mobile Bar */}
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
