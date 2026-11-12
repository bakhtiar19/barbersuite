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
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: "Cukur" | "Perawatan" | "Produk";
  price: number;
}

const MENU_ITEMS: ServiceItem[] = [
  { id: "1", name: "Gentleman Haircut", category: "Cukur", price: 50000 },
  { id: "2", name: "Haircut + Cuci & Pijat", category: "Cukur", price: 75000 },
  { id: "3", name: "Cukur Jenggot & Kumis", category: "Perawatan", price: 35000 },
  { id: "4", name: "Pewarnaan / Hair Color", category: "Perawatan", price: 120000 },
  { id: "5", name: "Matte Clay Pomade 100g", category: "Produk", price: 85000 },
  { id: "6", name: "Hair Styling Powder", category: "Produk", price: 60000 },
];

const KAPSTER_LIST = ["Barber Rian", "Barber Eko", "Barber Arief"];

export default function InteractivePOSDemo() {
  const [cart, setCart] = useState<{ item: ServiceItem; qty: number }[]>([
    { item: MENU_ITEMS[0], qty: 1 },
    { item: MENU_ITEMS[4], qty: 1 },
  ]);
  const [selectedKapster, setSelectedKapster] = useState(KAPSTER_LIST[0]);
  const [selectedPayment, setSelectedPayment] = useState<"QRIS" | "Tunai" | "Transfer">("QRIS");
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
  const kapsterCommission = Math.round(totalAmount * 0.4); // 40% komisi kapster
  const ownerProfit = totalAmount - kapsterCommission;

  const handleCheckout = () => {
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white border border-stone-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] overflow-hidden text-stone-900">
      {/* Top OS Bar */}
      <div className="bg-stone-900 text-stone-200 px-6 py-3.5 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-stone-400 font-mono pl-2">
            POS Barbershop Simulator v2.4 • Coba Sentuh Layanan di Bawah
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Demo Langsung Interaktif</span>
        </div>
      </div>

      {/* Main Grid: Left Menu Items | Right Live Receipt */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        {/* Left Side: Service & Product Selector */}
        <div className="md:col-span-7 p-6 sm:p-7 border-b md:border-b-0 md:border-r border-stone-200/90 bg-[#FAF8F5]/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-amber-600" />
                  <span>Katalog Layanan & Produk</span>
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Klik item untuk menambahkan ke nota kasir
                </p>
              </div>

              {/* Kapster Selector */}
              <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-xl px-2.5 py-1 text-xs shadow-2xs">
                <User className="w-3.5 h-3.5 text-stone-500" />
                <select
                  value={selectedKapster}
                  onChange={(e) => setSelectedKapster(e.target.value)}
                  className="bg-transparent font-bold text-stone-800 outline-none cursor-pointer"
                >
                  {KAPSTER_LIST.map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Menu Buttons Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {MENU_ITEMS.map((item) => {
                const isInCart = cart.some((c) => c.item.id === item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => addToCart(item)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer active:scale-97 ${
                      isInCart
                        ? "bg-amber-50/70 border-amber-400/90 shadow-2xs"
                        : "bg-white border-stone-200 hover:border-amber-300 hover:bg-stone-50/70"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-stone-400 uppercase">
                          {item.category}
                        </span>
                        <span className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-stone-700">
                          <Plus className="w-3 h-3" />
                        </span>
                      </div>
                      <p className="text-xs font-bold text-stone-900 leading-snug line-clamp-2">
                        {item.name}
                      </p>
                    </div>
                    <p className="text-xs font-black text-amber-700 mt-2">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
            <span>💡 Mode simulasi langsung tanpa instalasi</span>
            <button
              type="button"
              onClick={resetCart}
              className="text-stone-600 hover:text-stone-950 font-bold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Nota
            </button>
          </div>
        </div>

        {/* Right Side: Live Digital Receipt */}
        <div className="md:col-span-5 p-6 sm:p-7 bg-white flex flex-col justify-between">
          <div>
            {/* Receipt Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-stone-700" />
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-900">
                  Nota Transaksi Kasir
                </h4>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                {selectedKapster}
              </span>
            </div>

            {/* Cart Items List */}
            <div className="py-3 space-y-2 max-h-[170px] overflow-y-auto">
              <AnimatePresence>
                {cart.length === 0 ? (
                  <p className="text-xs text-stone-400 py-6 text-center italic">
                    Belum ada layanan yang dipilih. Klik menu di samping!
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
                      <div className="pr-2">
                        <p className="font-bold text-stone-900 leading-tight">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-stone-400">
                          {qty}x @ Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
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

            {/* Automatic Split Breakdown (World-class feature!) */}
            {cart.length > 0 && (
              <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] space-y-1">
                <div className="flex justify-between text-stone-500">
                  <span>Bagi Hasil Kapster (40%)</span>
                  <span className="font-bold text-stone-700">
                    Rp {kapsterCommission.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Pendapatan Bersih Barbershop</span>
                  <span className="font-bold text-emerald-700">
                    Rp {ownerProfit.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Checkout & Total Area */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            {/* Payment Method Selector */}
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
                        ? "bg-stone-900 text-white border-stone-900 shadow-2xs"
                        : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Total Row */}
            <div className="flex items-baseline justify-between pt-1">
              <span className="text-xs font-bold text-stone-500 uppercase">
                Total Tagihan:
              </span>
              <span className="text-2xl font-black text-stone-950">
                Rp {totalAmount.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Process Button / Success Feedback */}
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Transaksi Lunas! Cetak Nota Bluetooth Otomatis</span>
                </motion.div>
              ) : (
                <button
                  key="btn"
                  type="button"
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>Selesaikan Transaksi ({selectedPayment})</span>
                </button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
