import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sunnysidechiropractic.com"),
  title:
    "Sunnyside Wellness & Chiropractic Center | Chiropractor in Fresno, CA",
  description:
    "Expert chiropractic care in Fresno, CA. Dr. Thomas Potigian offers pain relief, spinal adjustments, and holistic wellness for all ages. Book your appointment today!",
  keywords:
    "chiropractor Fresno, chiropractic care Fresno, back pain relief Fresno",
  openGraph: {
    title:
      "Sunnyside Wellness & Chiropractic Center | Chiropractor in Fresno, CA",
    description:
      "Expert chiropractic care in Fresno, CA. Dr. Thomas Potigian offers pain relief, spinal adjustments, and holistic wellness for all ages.",
    url: "https://sunnysidechiropractic.com",
    siteName: "Sunnyside Wellness & Chiropractic Center",
    images: [
      {
        url: "/logo/brand-logo.png",
        width: 1200,
        height: 630,
        alt: "Sunnyside Wellness & Chiropractic Center Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sunnyside Wellness & Chiropractic Center | Chiropractor in Fresno, CA",
    description:
      "Expert chiropractic care in Fresno, CA. Dr. Thomas Potigian offers pain relief, spinal adjustments, and holistic wellness for all ages.",
    images: ["/logo/brand-logo.png"],
  },
  robots: "index, follow",
  authors: [{ name: "Dr. Thomas Potigian" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
