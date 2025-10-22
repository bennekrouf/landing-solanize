// src/app/[locale]/contact/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LayoutTemplate from '@/components/layout/LayoutTemplate';
import { ContactForm } from '@/components/contact/ContactForm';
import { WhatsAppButton } from '@/components/contact/WhatsAppButton';
import { FiMail, FiClock, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ContactPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      description: "Drop us a line anytime",
      contact: "mb@mayorana.ch",
      action: "mailto:mb@mayorana.ch"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Response Time",
      description: "We typically respond within",
      contact: "24 hours",
      action: null
    }
  ];

  const socialLinks = [
    { icon: <FiTwitter className="w-5 h-5" />, url: "https://twitter.com/solanize_ai", label: "Twitter" },
    { icon: <FiGithub className="w-5 h-5" />, url: "https://github.com/solanize", label: "GitHub" },
    { icon: <FiLinkedin className="w-5 h-5" />, url: "https://linkedin.com/company/solanize", label: "LinkedIn" }
  ];

  return (
    <LayoutTemplate>
      <div className="py-24">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to revolutionize your Solana portfolio management? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Quick Contact Methods */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Other Ways to Reach Us</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-xl flex items-center justify-center text-[#FF6B00]">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          {method.action ? (
                            <a
                              href={method.action}
                              className="font-medium text-[#FF6B00] hover:text-[#FF6B00]/80 transition-colors"
                            >
                              {method.contact}
                            </a>
                          ) : (
                            <span className="font-medium text-foreground">{method.contact}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Contact */}
              <motion.div variants={fadeInUp}>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Need Immediate Help?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Chat with us directly about your Solana portfolio questions.
                  </p>
                  <WhatsAppButton
                    message="Hello, I have a question about Solanize.ai and AI-powered Solana portfolio management."
                    source="contact_page"
                    className="w-full justify-center"
                  >
                    Chat on WhatsApp
                  </WhatsAppButton>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-[#FF6B00] hover:border-[#FF6B00]/20 hover:bg-[#FF6B00]/5 transition-all duration-200 hover:scale-105"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* FAQ Link */}
              <motion.div variants={fadeInUp}>
                <div className="bg-muted/50 border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find quick answers to common questions about AI portfolio management and Solana DeFi.
                  </p>
                  <Link
                    href="/faq"
                    className="text-[#FF6B00] hover:text-[#FF6B00]/80 font-medium text-sm transition-colors"
                  >
                    Browse FAQ →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </LayoutTemplate>
  );
};

export default ContactPage;
