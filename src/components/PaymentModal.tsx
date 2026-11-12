"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Loader2,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";

// Declare Midtrans Snap type
declare global {
  interface Window {
    snap?: {
      pay: (
        token: string,
        options: {
          onSuccess?: (result: Record<string, unknown>) => void;
          onPending?: (result: Record<string, unknown>) => void;
          onError?: (result: Record<string, unknown>) => void;
          onClose?: () => void;
        }
      ) => void;
    };
  }
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [demoOrderId, setDemoOrderId] = useState<string | null>(null);

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"; // TODO: Ganti nomor WA

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setDemoOrderId(null);

    try {
      const response = await fetch("/api/payment/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal membuat transaksi");
      }

      // Check if server is running in demo/sandbox mode without real Midtrans key
      if (data.isDemoMode) {
        setDemoOrderId(data.orderId);
        setIsLoading(false);
        return;
      }

      // Open Midtrans Snap popup
      if (window.snap && data.snapToken) {
        window.snap.pay(data.snapToken, {
          onSuccess: (result) => {
            console.log("Payment success:", result);
            window.location.href = `/success?order_id=${data.orderId}`;
          },
          onPending: (result) => {
            console.log("Payment pending:", result);
            alert(
              "Pembayaran sedang diproses. Kami akan mengirim konfirmasi via WhatsApp setelah pembayaran berhasil."
            );
            onClose();
          },
          onError: (result) => {
            console.error("Payment error:", result);
            setError("Pembayaran gagal. Silakan coba lagi atau bayar via WhatsApp.");
          },
          onClose: () => {
            console.log("Payment popup closed");
          },
        });
      } else if (data.redirectUrl) {
        // Fallback: redirect to Midtrans payment page
        window.open(data.redirectUrl, "_blank");
      } else {
        setDemoOrderId(data.orderId);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan koneksi");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSimulateSuccess = () => {
    if (demoOrderId) {
      window.location.href = `/success?order_id=${demoOrderId}`;
    }
  };

  const handlePayViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Admin POS Barbershop! Saya ingin membeli aplikasi kasir (Rp 50.000).\n\nData Pembeli:\n• Nama: ${formData.name}\n• Email: ${formData.email}\n• WhatsApp: ${formData.whatsapp}\n• Order ID: ${demoOrderId || "POS-" + Date.now()}\n\nMohon petunjuk rekening atau QRIS pembayarannya. Terima kasih!`
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-2xl z-10 my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4 shadow-lg shadow-amber-500/25">
                <CreditCard className="w-7 h-7 text-neutral-950" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Checkout POS Barbershop
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Lisensi seumur hidup tanpa biaya langganan bulanan
              </p>
              <div className="mt-3 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5">
                <span className="text-amber-400 font-extrabold text-lg">
                  Rp 50.000
                </span>
                <span className="text-neutral-500 text-xs line-through">
                  Rp 150.000
                </span>
                <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold uppercase">
                  Diskon 67%
                </span>
              </div>
            </div>

            {/* DEMO MODE SCREEN (If Midtrans keys are placeholders during prototype) */}
            {demoOrderId ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-bold mb-1">Mode Preview / Prototype</p>
                    <p className="text-neutral-300">
                      Form berhasil diproses dengan Order ID:{" "}
                      <span className="font-mono text-amber-300 font-semibold">{demoOrderId}</span>.
                      Silakan pilih opsi uji coba alur di bawah ini:
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSimulateSuccess}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Simulasi Sukses & Buka Halaman Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handlePayViaWhatsApp}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lanjutkan Pembayaran via WhatsApp</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setDemoOrderId(null)}
                  className="w-full text-center text-xs text-neutral-400 hover:text-white pt-2 transition-colors"
                >
                  &larr; Kembali ke Form
                </button>
              </motion.div>
            ) : (
              /* Regular Checkout Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-neutral-800/90 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Alamat Email (Untuk Lisensi)
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-neutral-800/90 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-neutral-800/90 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    placeholder="081234567890"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-neutral-950 font-black text-base rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-neutral-950" />
                      <span>Menyiapkan Pembayaran...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Bayar Sekarang — Rp 50.000</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Garansi uang kembali 7 hari • Enkripsi 256-bit</span>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
