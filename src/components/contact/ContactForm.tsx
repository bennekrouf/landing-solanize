'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiUser, FiHome, FiMessageSquare, FiCheck } from 'react-icons/fi';
import { usePlausible } from 'next-plausible';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
  title?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  title = "Get in Touch"
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const plausible = usePlausible();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const subjects = [
    "General Inquiry",
    "AI Portfolio Management",
    "Phantom Wallet Integration",
    "Jupiter DEX Features",
    "Partnership Opportunity",
    "Technical Support",
    "Media/Press Inquiry"
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Call Next.js API route which forwards to your gateway
      const apiUrl = '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      plausible('Contact Form Submit', { props: { form_type: 'main_contact' } });
      setFormSubmitted(true);
      reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className={`bg-card border border-border rounded-2xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheck className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-foreground">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Thank you for reaching out about Solanize.ai. We'll get back to you within 24 hours to discuss how AI can transform your Solana portfolio management.
        </p>
        <button
          onClick={() => setFormSubmitted(false)}
          className="inline-flex items-center px-6 py-3 rounded-xl bg-[#FF6B00] text-white font-semibold hover:bg-[#FF6B00]/90 transition-all duration-200 hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-card border border-border rounded-2xl p-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-foreground">{title}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 font-medium text-foreground">
              <FiUser className="w-4 h-4" />
              Name <span className="text-[#FF6B00]">*</span>
            </label>
            <input
              id="name"
              className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all duration-200"
              placeholder="Your full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-sm text-[#FF6B00]">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center gap-2 font-medium text-foreground">
              <FiMail className="w-4 h-4" />
              Email <span className="text-[#FF6B00]">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all duration-200"
              placeholder="your@email.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-[#FF6B00]">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company Field */}
        <div className="space-y-2">
          <label htmlFor="company" className="flex items-center gap-2 font-medium text-foreground">
            <FiHome className="w-4 h-4" />
            Company (Optional)
          </label>
          <input
            id="company"
            className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all duration-200"
            placeholder="Your company name"
            {...register('company')}
          />
        </div>

        {/* Subject Selection */}
        <div className="space-y-2">
          <label htmlFor="subject" className="flex items-center gap-2 font-medium text-foreground">
            <FiMessageSquare className="w-4 h-4" />
            Subject <span className="text-[#FF6B00]">*</span>
          </label>
          <select
            id="subject"
            className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all duration-200"
            {...register('subject', { required: 'Please select a subject' })}
          >
            <option value="">Select a topic...</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="text-sm text-[#FF6B00]">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="flex items-center gap-2 font-medium text-foreground">
            <FiMessageSquare className="w-4 h-4" />
            Message <span className="text-[#FF6B00]">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all duration-200 resize-none"
            placeholder="Tell us about your Solana portfolio goals or how we can help..."
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && (
            <p className="text-sm text-[#FF6B00]">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-4 rounded-xl bg-[#FF6B00] text-white font-semibold hover:bg-[#FF6B00]/90 transition-all duration-200 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FiMail className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};
