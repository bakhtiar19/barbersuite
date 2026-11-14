import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://barbersuite.netlify.app"),
  title: "Barber Suite — Aplikasi Kasir Barbershop Modern #1 di Indonesia",
  description:
    "Aplikasi kasir praktis khusus barbershop & salon pria. Bebas offline tanpa internet, bagi hasil kapster otomatis, cetak struk Bluetooth, dan tanpa biaya sewa bulanan.",
  keywords: [
    "Barber Suite",
    "aplikasi kasir barbershop",
    "software barbershop",
    "alternatif moka pos",
    "kasir barbershop android",
    "point of sale barbershop",
  ],
  authors: [{ name: "Barber Suite by Kriakarya" }],
  creator: "Kriakarya",
  publisher: "Barber Suite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://barbersuite.netlify.app",
    siteName: "Barber Suite",
    title: "Barber Suite — Aplikasi Kasir Barbershop Modern #1 di Indonesia",
    description:
      "Aplikasi kasir modern khusus barbershop & salon. Lebih hemat dari Moka POS, 100% offline-first, laporan keuangan PDF & CSV, bagi hasil kapster, dan follow-up WhatsApp otomatis.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barber Suite — Aplikasi Kasir Barbershop Modern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Suite — Aplikasi Kasir Barbershop Modern #1 di Indonesia",
    description:
      "Aplikasi kasir praktis khusus barbershop & salon pria. Promo spesial Rp 55.700 sekali bayar, pakai selamanya!",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://barbersuite.netlify.app",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Barber Suite",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "55700",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
  description:
    "Aplikasi kasir digital khusus barbershop & salon. Kelola transaksi, laporan keuangan, pelanggan, dan stok dalam satu aplikasi.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah aplikasi ini bisa digunakan tanpa koneksi internet (offline)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa sekali! Barber Suite dirancang agar transaksi kasir dan cetak nota Bluetooth tetap berjalan normal meski sinyal internet drop atau sedang mati lampu. Anda tidak bergantung pada kuota internet.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa dipakai di berapa smartphone atau tablet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satu lisensi berlaku untuk 1 perangkat Android. Jika Anda memiliki cabang barbershop atau tablet tambahan, Anda cukup membeli lisensi tambahan dengan harga promo yang sama.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara memasang (instalasi) aplikasinya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sangat mudah dan cepat. Begitu pembayaran selesai, link unduh aplikasi langsung dikirimkan. Anda tinggal buka di HP Android dan klik pasang (install). Tim kami juga siap memandu via WhatsApp sampai aplikasi aktif.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah data omset dan pelanggan saya aman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% aman dan rahasia. Semua data pembukuan tersimpan langsung di memori HP Anda sendiri, tidak dikirim atau dijual ke server luar mana pun.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada garansi jika tidak cocok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ada! Kami memberikan garansi 100% uang kembali dalam 7 hari jika Anda merasa aplikasi ini kurang sesuai untuk alur kerja barbershop Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa dipakai untuk salon rambut atau pangkas rambut biasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tentu bisa! Nama layanan, daftar harga paket cukur, durasi, hingga produk pomade atau pewarna rambut bisa Anda sesuaikan dengan bebas.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada biaya langganan bulanan di kemudian hari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sama sekali tidak ada! Cukup bayar satu kali di awal saat harga promo, aplikasi menjadi milik Anda selamanya tanpa biaya tersembunyi.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika saya butuh bantuan teknis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tim bantuan kami siap mendampingi pertanyaan Anda melalui WhatsApp setiap hari.",
      },
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Barber Suite",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://barbersuite.netlify.app",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+6282145773753",
    contactType: "customer service",
    availableLanguage: "Indonesian",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <head>
        {/* Midtrans Snap.js — dinamis sandbox / production */}
        <script
          src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL || "https://app.sandbox.midtrans.com/snap/snap.js"}
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#faf8f5] text-stone-900 font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
