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

      if (data.isDemoMode) {
        setDemoOrderId(data.orderId);
        setIsLoading(false);
        return;
      }

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
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs" />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#FAF8F5] border-2 border-stone-300 rounded-[28px] p-6 sm:p-7 shadow-2xl z-10 my-8 text-stone-900"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 transition-colors rounded-full hover:bg-stone-200"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-200 text-amber-950 mb-3 font-black shadow-xs">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-stone-900 tracking-tight">
                Beli Lisensi POS Barbershop
              </h3>
              <p className="text-stone-500 text-xs mt-1 font-medium">
                Lisensi seumur hidup tanpa biaya langganan bulanan
              </p>
              <div className="mt-3 inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 rounded-full px-4 py-1">
                <span className="text-amber-950 font-black text-base">
                  Rp 50.000
                </span>
                <span className="text-stone-400 text-xs line-through">
                  Rp 150.000
                </span>
                <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold uppercase">
                  Hemat 67%
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
                <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300 text-xs text-stone-800 leading-relaxed flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">
                      Mode Preview / Prototype
                    </p>
                    <p className="text-stone-600 font-normal">
                      Form pesanan berhasil dibuat dengan Order ID:{" "}
                      <span className="font-mono text-amber-900 font-bold">
                        {demoOrderId}
                      </span>
                      . Silakan pilih opsi uji coba:
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  <button
                    type="button"
                    onClick={handleSimulateSuccess}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Simulasi Sukses & Halaman Download APK</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handlePayViaWhatsApp}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim Pesanan ke WhatsApp Admin</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setDemoOrderId(null)}
                  className="w-full text-center text-xs text-stone-500 hover:text-stone-900 pt-2 transition-colors cursor-pointer"
                >
                  &larr; Kembali ke Form
                </button>
              </motion.div>
            ) : (
              /* Regular Checkout Form */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-stone-700 mb-1"
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
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500 transition-all text-sm font-medium"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-stone-700 mb-1"
                  >
                    Alamat Email (Untuk Pengiriman Lisensi)
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500 transition-all text-sm font-medium"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-xs font-bold text-stone-700 mb-1"
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
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500 transition-all text-sm font-medium"
                    placeholder="081234567890"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-100 border border-red-200 text-red-800 text-xs text-center font-medium">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black text-sm rounded-xl transition-all duration-150 shadow-md shadow-amber-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                      <span>Menyiapkan Pembayaran...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Bayar Sekarang — Rp 50.000</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Garansi uang kembali 7 hari • Enkripsi aman</span>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
