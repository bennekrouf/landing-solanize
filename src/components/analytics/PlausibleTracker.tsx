'use client';

// Analytics tracking functions
export const trackEvent = (event: string, props?: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(event, { props });
  }
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('WhatsApp Contact', { source });
};

export const trackContactForm = (formType: string) => {
  trackEvent('Contact Form Submit', { form_type: formType });
};

export const trackWalletConnect = (walletType: string) => {
  trackEvent('Wallet Connect', { wallet: walletType });
};

export const trackFeatureInteraction = (feature: string) => {
  trackEvent('Feature Interaction', { feature });
};
