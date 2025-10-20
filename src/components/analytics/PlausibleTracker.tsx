'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    plausible?: {
      (event: string, options?: { props?: Record<string, string> }): void;
      q?: Array<unknown>;
    };
  }
}

interface PlausibleTrackerProps {
  domain: string;
}

export const PlausibleTracker: React.FC<PlausibleTrackerProps> = ({ domain }) => {
  useEffect(() => {
    // Initialize Plausible
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', domain);
    script.src = 'https://plausible.io/js/script.outbound-links.js';
    document.head.appendChild(script);

    // Initialize global plausible function
    window.plausible = window.plausible || function (...args) {
      (window.plausible!.q = window.plausible!.q || []).push(args);
    };

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[data-domain="${domain}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [domain]);

  return null;
};

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
