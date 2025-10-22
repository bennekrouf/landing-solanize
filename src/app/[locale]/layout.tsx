// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/app/providers';
import PlausibleProvider from 'next-plausible';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define locales directly here to avoid import issues
const locales = ['en', 'fr'] as const;
type Locale = typeof locales[number];

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Changed to Promise for Next.js 15
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for ${locale}:`, error);
    // Fallback to English
    return (await import(`../../../messages/en.json`)).default;
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  // Await params first (Next.js 15 requirement)
  const { locale } = await params;

  // Validate locale with proper type checking
  const validLocale: Locale = isValidLocale(locale) ? locale : 'en';
  const messages = await getMessages(validLocale);

  return (
    <html lang={validLocale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PlausibleProvider domain="ribh.io">

          <NextIntlClientProvider locale={validLocale} messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
