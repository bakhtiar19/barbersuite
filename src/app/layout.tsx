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
  title: "Barber Suite — Aplikasi Kasir Barbershop Terbaik | Rp 50.000 Sekali Bayar",
  description:
    "Aplikasi kasir modern khusus barbershop & salon. Lebih hemat dari Moka POS, 100% offline-first, laporan keuangan PDF & CSV, bagi hasil kapster, dan follow-up WhatsApp otomatis.",
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
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://pos-barbershop.netlify.app",
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
      "Aplikasi kasir digital modern untuk barbershop & salon. Cuma Rp 50.000 sekali bayar, pakai selamanya!",
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
    price: "50000",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",    // DUMMY: Ganti dengan data real
    ratingCount: "500",    // DUMMY: Ganti dengan data real
    bestRating: "5",
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
      name: "Apakah POS Barbershop perlu koneksi internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak! POS Barbershop bisa digunakan secara offline. Data tersimpan di device kamu. Koneksi internet hanya diperlukan untuk sinkronisasi dan backup data ke cloud.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa harga POS Barbershop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuma Rp 50.000 sekali bayar, pakai selamanya. Tanpa biaya langganan bulanan.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa untuk salon juga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tentu! POS Barbershop dirancang untuk barbershop DAN salon. Fitur-fiturnya fleksibel dan bisa disesuaikan dengan jenis layanan apapun.",
      },
    },
    {
      "@type": "Question",
      name: "Ada garansi uang kembali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya! Kami memberikan garansi uang kembali 7 hari. Jika kamu tidak puas dengan aplikasinya, hubungi kami via WhatsApp dan kami akan refund 100%.",
      },
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Barber Suite",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://barbersuite.netlify.app",
  logo: "/images/logo.png",
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
        {/* Midtrans Snap.js — TODO: Ganti ke production URL saat live */}
        <script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
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
