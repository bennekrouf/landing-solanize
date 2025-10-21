// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/app/providers';

// Define locales directly here to avoid import issues
const locales = ['en', 'fr'] as const;

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

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  // Await params first (Next.js 15 requirement)
  const { locale } = await params;

  // Validate locale, fallback to 'en' if invalid
  const validLocale = locales.includes(locale as any) ? locale : 'en';

  const messages = await getMessages(validLocale);

  return (
    <html lang={validLocale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={validLocale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
