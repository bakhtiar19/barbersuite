import { NextRequest, NextResponse } from "next/server";

// TODO: Ganti ke production keys saat live
const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || "SB-Mid-server-xxxxx";
const MIDTRANS_API_URL = "https://app.sandbox.midtrans.com/snap/v1/transactions";
// Production URL: https://app.midtrans.com/snap/v1/transactions

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, whatsapp } = body;

    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Nama, email, dan nomor WhatsApp wajib diisi" },
        { status: 400 }
      );
    }

    const orderId = `POS-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const transactionDetails = {
      transaction_details: {
        order_id: orderId,
        gross_amount: 50000,
      },
      item_details: [
        {
          id: "pos-barbershop-lifetime",
          price: 50000,
          quantity: 1,
          name: "POS Barbershop - Lifetime License",
        },
      ],
      customer_details: {
        first_name: name,
        email: email,
        phone: whatsapp,
      },
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success?order_id=${orderId}`,
      },
    };

    const authString = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString("base64");

    const response = await fetch(MIDTRANS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authString}`,
        Accept: "application/json",
      },
      body: JSON.stringify(transactionDetails),
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn("Midtrans error (likely demo/invalid key):", data);
      const isPlaceholderKey =
        MIDTRANS_SERVER_KEY.includes("xxxxx") ||
        MIDTRANS_SERVER_KEY === "SB-Mid-server-xxxxx";

      return NextResponse.json(
        {
          error: isPlaceholderKey
            ? "Kunci Midtrans masih berupa placeholder sandbox (.env.local)."
            : (data?.error_messages?.[0] || "Gagal menghubungi Midtrans."),
          isDemoMode: true,
          orderId,
          customer: { name, email, whatsapp },
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      snapToken: data.token,
      redirectUrl: data.redirect_url,
      orderId,
    });
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
