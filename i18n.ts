// i18n.ts
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  // The issue is here - we need to ensure locale is always defined
  // and provide a fallback when it's not
  const validLocale = locale || 'en';

  try {
    const messages = (await import(`./messages/${validLocale}.json`)).default;
    return {
      locale: validLocale, // <- Add this line to explicitly return locale
      messages
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${validLocale}:`, error);
    // Fallback to English
    const fallbackMessages = (await import(`./messages/en.json`)).default;
    return {
      locale: 'en', // <- Add this line for fallback too
      messages: fallbackMessages
    };
  }
});
