import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://truthlens.ai'),
  title: "TruthLens AI — The Trust Layer for Digital Media",
  description: "Enterprise AI platform for media authenticity verification, deepfake video scanning, synthetic voice detection, and multi-spectral digital forensics.",
  keywords: ["TruthLens AI", "Deepfake Detection", "Media Authenticity", "Digital Forensics", "Synthetic Voice Scan", "AI Detection", "Verification Engine"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "TruthLens AI — The Trust Layer for Digital Media",
    description: "Enterprise AI platform for media authenticity verification, deepfake video scanning, and multi-spectral digital forensics.",
    url: "https://truthlens.ai",
    siteName: "TruthLens AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "TruthLens AI Official Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TruthLens AI — The Trust Layer for Digital Media",
    description: "Enterprise AI platform for media authenticity verification, deepfake video scanning, and multi-spectral digital forensics.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
