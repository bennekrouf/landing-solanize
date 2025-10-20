'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackWhatsAppClick } from '../analytics/PlausibleTracker';

interface WhatsAppButtonProps {
  number?: string;
  message?: string;
  source?: string;
  className?: string;
  variant?: 'default' | 'floating' | 'icon';
  children?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  number = "+1234567890", // Replace with your number
  message = "Hello, I'm interested in Solanize.ai and would like to learn more about AI-powered Solana portfolio management.",
  source = "contact_button",
  className = "",
  variant = "default",
  children = "Contact via WhatsApp"
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;

  const handleClick = () => {
    trackWhatsAppClick(source);
  };

  const baseClasses = "flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 transition-all duration-200";

  const variantClasses = {
    default: "px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105",
    floating: "w-14 h-14 rounded-full justify-center shadow-xl hover:scale-110 fixed bottom-6 right-6 z-50",
    icon: "px-4 py-2 rounded-lg font-medium"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={variant === 'floating' ? "Contact via WhatsApp" : undefined}
    >
      <FaWhatsapp className={variant === 'floating' ? "h-7 w-7" : "h-5 w-5"} />
      {variant !== 'floating' && children}
    </a>
  );
};

export const FloatingWhatsApp: React.FC<{ number?: string; message?: string }> = ({
  number,
  message
}) => {
  return (
    <div className="md:hidden">
      <WhatsAppButton
        number={number}
        message={message}
        source="floating_button"
        variant="floating"
      />
    </div>
  );
};
