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
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-lg w-full bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 text-center shadow-2xl"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 15 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          Pembayaran Berhasil! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mb-2"
        >
          Terima kasih telah membeli POS Barbershop!
        </motion.p>

        {orderId && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500 mb-6"
          >
            Order ID: <span className="text-gray-300 font-mono">{orderId}</span>
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3 mb-8"
        >
          {/* Download button */}
          <a
            href="#" // TODO: Ganti dengan link download APK real
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25"
          >
            <Download className="w-5 h-5" />
            Download APK Sekarang
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${waNumber}?text=Halo%2C%20saya%20sudah%20membeli%20POS%20Barbershop.%20Order%20ID%3A%20${orderId || ""}%0AMohon%20bantu%20proses%20pengiriman%20APK.%20Terima%20kasih!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi via WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 mb-6"
        >
          <h3 className="text-sm font-semibold text-white mb-2">
            📱 Langkah Selanjutnya:
          </h3>
          <ol className="text-left text-sm text-gray-400 space-y-1.5">
            <li>1. Download file APK di atas</li>
            <li>2. Buka file APK di HP Android kamu</li>
            <li>3. Izinkan instalasi dari sumber tidak dikenal</li>
            <li>4. Install dan buka aplikasi POS Barbershop</li>
            <li>5. Mulai kelola barbershop kamu! 🚀</li>
          </ol>
        </motion.div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Halaman Utama
        </Link>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-amber-500" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
