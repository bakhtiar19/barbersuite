"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Plus,
  Trash2,
  CheckCircle2,
  CreditCard,
  QrCode,
  Banknote,
  Sparkles,
  RotateCcw,
  Receipt,
  User,
  Clock,
  Search,
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  isPopular?: boolean;
}

const MENU_ITEMS: ServiceItem[] = [
  { id: "1", name: "Haircut", duration: "30 mnt", price: 50000, isPopular: true },
  { id: "2", name: "Haircut + Wash", duration: "45 mnt", price: 65000 },
  { id: "3", name: "Haircut + Massage", duration: "60 mnt", price: 80000 },
  { id: "4", name: "Hair Coloring", duration: "90 mnt", price: 150000 },
];

const BARBER_LIST = ["Irfan", "Rian", "Eko"];

export default function InteractivePOSDemo() {
  const [cart, setCart] = useState<{ item: ServiceItem; qty: number }[]>([
    { item: MENU_ITEMS[0], qty: 1 },
  ]);
  const [selectedBarber, setSelectedBarber] = useState(BARBER_LIST[0]);
  const [selectedPayment, setSelectedPayment] = useState<"QRIS" | "Tunai" | "Transfer">("QRIS");
  const [activeFilter, setActiveFilter] = useState<"Terlaris" | "A-Z" | "Harga">("Terlaris");
  const [isSuccess, setIsSuccess] = useState(false);

  const addToCart = (item: ServiceItem) => {
    setIsSuccess(false);
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setIsSuccess(false);
    setCart((prev) => prev.filter((i) => i.item.id !== id));
  };

  const resetCart = () => {
    setIsSuccess(false);
    setCart([{ item: MENU_ITEMS[0], qty: 1 }]);
  };

  const totalAmount = cart.reduce((sum, i) => sum + i.item.price * i.qty, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const barberCommission = Math.round(totalAmount * 0.4); // 40% komisi barber
  const ownerNetProfit = totalAmount - barberCommission;

  const handleCheckout = () => {
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white border-2 border-stone-300 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden text-stone-900">
      {/* Barber Suite Top App Bar with Barber Pole Accent */}
      <div className="bg-[#111827] text-white px-5 py-3 flex items-center justify-between text-xs font-semibold relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#dc2626,#dc2626_10px,#ffffff_10px,#ffffff_20px,#2563eb_20px,#2563eb_30px,#ffffff_30px,#ffffff_40px)]" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-amber-400">Modal Ganteng</span>
          </div>
          <span className="text-stone-400 hidden sm:inline">•</span>
          <span className="text-stone-300 hidden sm:inline font-mono">
            TRX-20261112-0003
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">
            Barber Suite v4.2.0
          </span>
          <span className="text-amber-400 font-bold hidden sm:inline">
            ✨ Coba Langsung
          </span>
        </div>
      </div>

      {/* Main Cashier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        {/* Left Side: Services List (Matches App Screenshot 14) */}
        <div className="md:col-span-7 p-5 sm:p-6 border-b md:border-b-0 md:border-r border-stone-200 bg-[#FAF8F5] flex flex-col justify-between">
          <div>
            {/* Barber Selector Bar (Matches Screenshot 14) */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase text-stone-500 tracking-wider">
                  BARBER:
                </span>
                <div className="flex items-center gap-2 bg-[#111827] text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xs">
                  <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center text-[10px] font-black">
                    I
                  </span>
                  <select
                    value={selectedBarber}
                    onChange={(e) => setSelectedBarber(e.target.value)}
                    className="bg-transparent font-bold text-white outline-none cursor-pointer pr-1"
                  >
                    {BARBER_LIST.map((b) => (
                      <option key={b} value={b} className="bg-stone-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filter Pills: Terlaris, A-Z, Harga (Matches Screenshot 14) */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 text-[10px] font-bold">
                {(["Terlaris", "A-Z", "Harga"] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${
                      activeFilter === filter
                        ? "bg-amber-400 text-stone-950 font-black shadow-2xs"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid (Matches Screenshot 14 & 12) */}
            <div className="grid grid-cols-2 gap-2.5">
              {MENU_ITEMS.map((item) => {
                const inCart = cart.find((c) => c.item.id === item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => addToCart(item)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer active:scale-97 ${
                      inCart
                        ? "bg-amber-50/90 border-2 border-amber-500 shadow-xs"
                        : "bg-white border-stone-200 hover:border-amber-300 hover:bg-stone-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-stone-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-stone-400" />
                          {item.duration}
                        </span>
                        {inCart ? (
                          <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-black flex items-center justify-center">
                            {inCart.qty}
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                            <Plus className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-stone-900 leading-snug">
                        {item.name}
                      </p>
                    </div>

                    <p className="text-xs font-black text-amber-800 mt-2">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
            <span>Sentuh menu di atas untuk menambah pesanan</span>
            <button
              type="button"
              onClick={resetCart}
              className="text-stone-600 hover:text-stone-950 font-bold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Layar
            </button>
          </div>
        </div>

        {/* Right Side: Order Summary & Checkout (Matches Screenshot 14) */}
        <div className="md:col-span-5 p-5 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-stone-700" />
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-900">
                  Keranjang Kasir
                </h4>
              </div>
              <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                Barber: {selectedBarber}
              </span>
            </div>

            {/* Items List */}
            <div className="py-3 space-y-2 max-h-[170px] overflow-y-auto">
              <AnimatePresence>
                {cart.length === 0 ? (
                  <p className="text-xs text-stone-400 py-6 text-center italic">
                    Keranjang kosong. Pilih layanan di samping!
                  </p>
                ) : (
                  cart.map(({ item, qty }) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-stone-100"
                    >
                      <div>
                        <p className="font-bold text-stone-900">{item.name}</p>
                        <p className="text-[10px] text-stone-400 font-medium">
                          {qty}x @ Rp {item.price.toLocaleString("id-ID")} • {item.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900">
                          Rp {(item.price * qty).toLocaleString("id-ID")}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-300 hover:text-rose-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Split Info Barbershop */}
            {cart.length > 0 && (
              <div className="mt-2 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[11px] space-y-1">
                <div className="flex justify-between text-stone-600">
                  <span>Komisi Barber {selectedBarber} (40%)</span>
                  <span className="font-bold text-stone-800">
                    Rp {barberCommission.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Laba Bersih Barbershop (60%)</span>
                  <span className="font-bold text-emerald-700">
                    Rp {ownerNetProfit.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Area with Bottom Bar (Matches Screenshot 14) */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            {/* Payment Mode Selector */}
            <div className="flex gap-1.5">
              {[
                { id: "QRIS", icon: QrCode, label: "QRIS" },
                { id: "Tunai", icon: Banknote, label: "Tunai" },
                { id: "Transfer", icon: CreditCard, label: "Transfer" },
              ].map((m) => {
                const Icon = m.icon;
                const isSelected = selectedPayment === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedPayment(m.id as any)}
                    className={`flex-1 py-1.5 px-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#111827] text-white border-[#111827] shadow-2xs"
                        : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Black Bottom Bar Button like Screenshot 14: "1 Lanjut Bayar Rp 50.000" */}
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Transaksi Lunas! Cetak Struk Bluetooth Berhasil</span>
                </motion.div>
              ) : (
                <button
                  key="btn"
                  type="button"
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#0a1128] hover:bg-[#111827] text-white font-black text-sm flex items-center justify-between shadow-md active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center text-xs font-black">
                      {totalItems}
                    </span>
                    <span>Lanjut Bayar ({selectedPayment})</span>
                  </div>
                  <span className="text-amber-400 font-black text-base">
                    Rp {totalAmount.toLocaleString("id-ID")}
                  </span>
                </button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
