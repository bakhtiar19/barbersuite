import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// TODO: Ganti ke production keys saat live
const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || "SB-Mid-server-xxxxx";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
    } = body;

    // Verify signature
    const expectedSignature = crypto
      .createHash("sha512")
      .update(`${order_id}${status_code}${gross_amount}${MIDTRANS_SERVER_KEY}`)
      .digest("hex");

    if (signature_key !== expectedSignature) {
      console.error("Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // Handle transaction status
    if (transaction_status === "settlement" || transaction_status === "capture") {
      if (fraud_status === "accept" || !fraud_status) {
        // Payment successful!
        console.log(`✅ Payment successful for order: ${order_id}`);

        // TODO: Implementasi logika setelah pembayaran berhasil:
        // 1. Simpan data transaksi ke database
        // 2. Kirim link download APK via WhatsApp (menggunakan WhatsApp API)
        // 3. Kirim email konfirmasi
        // 4. Update status order

        // Untuk prototype, hanya log saja
        console.log("Transaction data:", {
          orderId: order_id,
          amount: gross_amount,
          status: transaction_status,
          timestamp: new Date().toISOString(),
        });
      }
    } else if (transaction_status === "pending") {
      console.log(`⏳ Payment pending for order: ${order_id}`);
    } else if (
      transaction_status === "deny" ||
      transaction_status === "cancel" ||
      transaction_status === "expire"
    ) {
      console.log(`❌ Payment ${transaction_status} for order: ${order_id}`);
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Notification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
