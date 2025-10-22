// src/app/layout.tsx
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
  title: {
    default: "Solanize.ai - Talk to your Solana wallet",
    template: "%s | Solanize.ai"
  },
  description: "Swap, stake, lend, and rebalance your portfolio — just by chatting. Powered by AI, secured by Phantom.",
  keywords: ["Solana", "DeFi", "AI", "Portfolio Management", "Phantom Wallet", "Jupiter"],
  authors: [{ name: "Solanize Team" }],
  creator: "Solanize",
  publisher: "Solanize",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://ribh.io' : 'http://localhost:4002'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Solanize.ai",
    title: "Solanize.ai - Talk to your Solana wallet",
    description: "Swap, stake, lend, and rebalance your portfolio — just by chatting. Powered by AI, secured by Phantom.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solanize.ai - Talk to your Solana wallet",
    description: "Swap, stake, lend, and rebalance your portfolio — just by chatting. Powered by AI, secured by Phantom.",
    creator: "@solanize_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
