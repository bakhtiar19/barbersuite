"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import AppPreview from "@/components/AppPreview";
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
        {/* Hero — Full viewport, headline + CTA + mockup */}
        <HeroSection />

        {/* Pain Points — Masalah yang dialami pemilik barbershop */}
        <PainPoints />

        {/* Features — Solusi dengan fitur-fitur POS Barbershop */}
        <Features />

        {/* Why Choose Us — Keunggulan + counter statistik */}
        <WhyChooseUs />

        {/* App Preview — Tab carousel screenshot aplikasi */}
        <AppPreview />

        {/* Pricing — Kartu harga + CTA pembelian */}
        <Pricing onOpenPayment={handleOpenPayment} />

        {/* Testimonials — Carousel testimoni pelanggan */}
        <Testimonials />

        {/* FAQ — Accordion pertanyaan umum */}
        <FAQ />

        {/* CTA Final — Closing section + countdown timer */}
        <CTAFinal />
      </main>

      <Footer />

      {/* Floating Elements */}
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
