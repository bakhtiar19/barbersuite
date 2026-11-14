import { NextRequest, NextResponse } from "next/server";

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;
const MIDTRANS_API_URL =
  process.env.MIDTRANS_API_URL || "https://app.sandbox.midtrans.com/snap/v1/transactions";

// Price in Rupiah — must match what's displayed in the UI
const PRODUCT_PRICE = 55700;

export async function POST(request: NextRequest) {
  try {
    // Validate server key exists
    if (!MIDTRANS_SERVER_KEY) {
      console.error("MIDTRANS_SERVER_KEY is not configured in environment variables");
      return NextResponse.json(
        { error: "Payment gateway belum dikonfigurasi. Hubungi admin." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, whatsapp } = body;

    // Validate required fields
    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Nama, email, dan nomor WhatsApp wajib diisi" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    // Basic phone number validation (Indonesian format)
    const phoneRegex = /^(\+?62|0)[0-9]{8,13}$/;
    if (!phoneRegex.test(whatsapp.replace(/[\s-]/g, ""))) {
      return NextResponse.json(
        { error: "Format nomor WhatsApp tidak valid" },
        { status: 400 }
      );
    }

    const orderId = `BS-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const transactionDetails = {
      transaction_details: {
        order_id: orderId,
        gross_amount: PRODUCT_PRICE,
      },
      item_details: [
        {
          id: "barber-suite-pro-lifetime",
          price: PRODUCT_PRICE,
          quantity: 1,
          name: "Barber Suite Pro - Lisensi Seumur Hidup",
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
      console.error("Midtrans API error:", data);
      return NextResponse.json(
        { error: data?.error_messages?.[0] || "Gagal menghubungi payment gateway." },
        { status: 502 }
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
