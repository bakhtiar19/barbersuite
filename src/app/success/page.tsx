"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"; // TODO: Ganti nomor WA

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-md w-full bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 text-center shadow-xl text-slate-900"
      >
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h1 className="text-2xl font-black text-slate-900 mb-2">
          Pembayaran Dikonfirmasi! 🎉
        </h1>

        <p className="text-slate-600 text-sm mb-2">
          Terima kasih telah bergabung bersama POS Barbershop.
        </p>

        {orderId && (
          <p className="text-xs text-slate-400 mb-6 font-mono">
            Order ID: <span className="font-bold text-slate-700">{orderId}</span>
          </p>
        )}

        {/* Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href="#" // TODO: Ganti link APK
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl transition-colors shadow-xs text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download File APK Sekarang</span>
          </a>

          <a
            href={`https://wa.me/${waNumber}?text=Halo%20Admin%2C%20saya%20sudah%20membeli%20POS%20Barbershop%20dengan%20Order%20ID%3A%20${orderId || ""}.%20Mohon%20bantuannya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl transition-colors text-sm shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konfirmasi & Bantuan via WhatsApp</span>
          </a>
        </div>

        {/* Installation Steps */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 space-y-1.5 mb-6">
          <p className="font-bold text-slate-800 mb-1">
            📱 Cara Install di HP Android:
          </p>
          <p>1. Klik tombol download APK di atas.</p>
          <p>2. Buka file hasil unduhan di notifikasi atau folder Download.</p>
          <p>3. Izinkan &ldquo;Install dari sumber ini&rdquo; jika diminta.</p>
          <p>4. Buka aplikasi dan kasir Anda langsung siap dipakai!</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-xs font-semibold"
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
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 text-sm">
          Memuat...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
