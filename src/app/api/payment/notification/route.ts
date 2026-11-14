import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

export async function POST(request: NextRequest) {
  try {
    // Validate server key exists
    if (!MIDTRANS_SERVER_KEY) {
      console.error("MIDTRANS_SERVER_KEY is not configured");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 503 });
    }

    const body = await request.json();
    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
      payment_type,
    } = body;

    // Verify signature
    const expectedSignature = crypto
      .createHash("sha512")
      .update(`${order_id}${status_code}${gross_amount}${MIDTRANS_SERVER_KEY}`)
      .digest("hex");

    if (signature_key !== expectedSignature) {
      console.error("Invalid Midtrans signature for order:", order_id);
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // Handle transaction status
    const timestamp = new Date().toISOString();

    if (transaction_status === "settlement" || transaction_status === "capture") {
      if (fraud_status === "accept" || !fraud_status) {
        // ✅ Payment successful
        console.log(`✅ [${timestamp}] Payment SUCCESS — Order: ${order_id}, Amount: ${gross_amount}, Method: ${payment_type}`);

        // TODO: Implementasi setelah pembayaran berhasil:
        // 1. Simpan ke database (Supabase/Firebase/Prisma)
        // 2. Kirim link download APK via WhatsApp API
        // 3. Kirim email konfirmasi dengan Resend/Nodemailer
        // 4. Update status order di database
      }
    } else if (transaction_status === "pending") {
      console.log(`⏳ [${timestamp}] Payment PENDING — Order: ${order_id}, Method: ${payment_type}`);
    } else if (
      transaction_status === "deny" ||
      transaction_status === "cancel" ||
      transaction_status === "expire"
    ) {
      console.log(`❌ [${timestamp}] Payment ${transaction_status.toUpperCase()} — Order: ${order_id}`);
    }

    // Midtrans expects a 200 OK response
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Notification handler error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
