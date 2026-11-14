"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, MessageCircle, ArrowLeft, AlertTriangle } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282145773753";

  // If no order_id is provided, show warning
  if (!orderId) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border-2 border-stone-200 rounded-[28px] p-7 sm:p-8 text-center shadow-xl text-stone-900">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-5 border border-amber-200">
            <AlertTriangle className="w-9 h-9" />
          </div>
          <h1 className="text-xl font-black text-stone-900 mb-2">
            Halaman Tidak Valid
          </h1>
          <p className="text-stone-600 text-sm mb-6">
            Halaman ini hanya dapat diakses setelah pembayaran berhasil. Jika Anda sudah melakukan pembayaran, silakan hubungi admin via WhatsApp.
          </p>
          <div className="space-y-3">
            <a
              href={`https://wa.me/${waNumber}?text=Halo%20Admin%2C%20saya%20sudah%20membeli%20Barber%20Suite%20tapi%20belum%20mendapatkan%20akses.%20Mohon%20bantuannya.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl transition-colors text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Admin via WhatsApp</span>
            </a>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full py-3 text-stone-500 hover:text-stone-900 transition-colors text-xs font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Halaman Utama</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-md w-full bg-white border-2 border-stone-200 rounded-[28px] p-7 sm:p-8 text-center shadow-xl text-stone-900"
      >
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-5 border border-emerald-200">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h1 className="text-2xl font-black text-stone-900 mb-2">
          Pembayaran Berhasil! 🎉
        </h1>

        <p className="text-stone-600 text-sm mb-2 font-normal">
          Terima kasih telah bergabung bersama Barber Suite.
        </p>

        <p className="text-xs text-stone-400 mb-6 font-mono">
          Order ID: <span className="font-bold text-stone-800">{orderId}</span>
        </p>

        {/* Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href={`https://wa.me/${waNumber}?text=Halo%20Admin%2C%20saya%20sudah%20membeli%20Barber%20Suite%20Pro%20dengan%20Order%20ID%3A%20${orderId}.%20Mohon%20kirimkan%20link%20download%20APK-nya.%20Terima%20kasih!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl transition-colors text-sm shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Minta Link Download via WhatsApp</span>
          </a>
        </div>

        {/* Installation Steps */}
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-4 text-left text-xs text-stone-600 space-y-1.5 mb-6">
          <p className="font-bold text-stone-800 mb-1">
            📱 Cara Pasang di HP Android:
          </p>
          <p>1. Minta link download APK via tombol WhatsApp di atas.</p>
          <p>2. Buka link tersebut di HP Android Anda.</p>
          <p>3. Izinkan &ldquo;Install dari sumber ini&rdquo; jika diminta sistem Android.</p>
          <p>4. Buka aplikasi dan kasir barbershop Anda langsung aktif!</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Halaman Utama</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center text-stone-500 text-sm">
          Memuat...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
