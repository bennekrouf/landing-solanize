'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { usePlausible } from 'next-plausible';
import { WhatsAppButton } from '@/components/contact/WhatsAppButton';
import LayoutTemplate from '@/components/layout/LayoutTemplate';
import { FloatingWhatsApp } from '@/components/contact/WhatsAppButton';

import {
  FiMessageCircle,
  FiCheck,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiEye,
  FiLock,
  FiGlobe,
  FiArrowRight,
  FiPlay,
  FiStar,
  FiX
} from 'react-icons/fi';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

const SolanizeHomepage = () => {
  const t = useTranslations();

  const plausible = usePlausible();
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

  const features = [
    {
      icon: <FiMessageCircle className="w-8 h-8" />,
      title: t('features.natural_language.title'),
      description: t('features.natural_language.description'),
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: t('features.multi_protocol.title'),
      description: t('features.multi_protocol.description'),
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: t('features.transparent.title'),
      description: t('features.transparent.description'),
      gradient: "from-orange-300 to-orange-500"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: t('features.portfolio.title'),
      description: t('features.portfolio.description'),
      gradient: "from-orange-400 to-red-400"
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: t('features.real_time.title'),
      description: t('features.real_time.description'),
      gradient: "from-orange-500 to-red-500"
    }
  ];
  const handleFeatureClick = (feature: string) => {
    plausible('Feature Interaction', { props: { feature } });
  };
  const howItWorksSteps = [
    {
      step: "1",
      title: t('how_it_works.step1.title'),
      description: t('how_it_works.step1.description'),
      example: t('how_it_works.step1.example'),
      icon: <FiMessageCircle className="w-6 h-6" />
    },
    {
      step: "2",
      title: t('how_it_works.step2.title'),
      description: t('how_it_works.step2.description'),
      example: t('how_it_works.step2.example'),
      icon: <FiZap className="w-6 h-6" />
    },
    {
      step: "3",
      title: t('how_it_works.step3.title'),
      description: t('how_it_works.step3.description'),
      example: t('how_it_works.step3.example'),
      icon: <FiCheck className="w-6 h-6" />
    }
  ];

  // Only the rows where Solanize is strong; its own column is a tick on every
  // row. A competitor cell is true, false, or a note on what it does instead.
  const comparison = t.raw('comparison') as {
    feature: string;
    yes: string;
    no: string;
    competitors: string[];
    rows: { feature: string; them: (boolean | string)[] }[];
  };

  const integrations = [
    { name: "Phantom", desc: "Wallet" },
    { name: "Jupiter", desc: "DEX Aggregator" },
    { name: "Solflare", desc: "Wallet" },
    { name: "Solana", desc: "Mainnet & Devnet" }
  ];

  return (
    <LayoutTemplate>
      <FloatingWhatsApp />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6B00,#FF8533,#FFAA66)] opacity-[0.02] bg-[size:40px_40px] bg-[position:0_0,20px_20px] bg-repeat"></div>

        <div className="container relative">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] dark:text-[#FF6B00]">
                <FiStar className="w-4 h-4 mr-2" />
                Chat-Driven Solana Wallet
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {t('hero.subheadline')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button
                onClick={() => window.open('https://app.ribh.io', '_blank')}
                className="px-8 py-4 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-xl text-lg font-semibold transition-all duration-200 shadow-xl shadow-orange-500/20 hover:scale-105 flex items-center justify-center"
              >
                {t('hero.cta_primary')}
              </button>
              <button className="px-8 py-4 border-2 border-border hover:border-primary rounded-xl text-lg font-semibold hover:bg-primary/5 transition-all duration-200 flex items-center justify-center">
                <FiPlay className="mr-2 w-5 h-5" />
                {t('demo.title')}
              </button>
            </motion.div>

            {/* Demo Chat Bubble */}
            <motion.div
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FF6B00] font-semibold text-sm">You</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted rounded-lg p-4 mb-3">
                      <p className="text-sm font-medium">{t('hero.demo_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                    <FiZap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">Here is the Jupiter quote:</p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>• 50 USDC → ~0.3 SOL expected</div>
                        <div>• Price impact: &lt;0.1% • Slippage limit: 0.5%</div>
                        <div className="pt-2">
                          <button className="text-[#FF6B00] hover:text-[#FF6B00]/80 font-medium">
                            Sign in your wallet →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('how_it_works.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('how_it_works.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-[#FF6B00] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center mb-3">{step.description}</p>
                  <div className="text-center">
                    <code className="bg-muted px-3 py-1 rounded text-sm font-medium">
                      {step.example}
                    </code>
                  </div>
                </div>

                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <FiArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('demo.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('demo.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-muted-foreground">Solanize.ai Chat</span>
              </div>

              <div className="aspect-video bg-gradient-to-br from-background to-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#FF6B00] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiPlay className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-medium mb-2">Interactive Demo</p>
                  <p className="text-muted-foreground text-sm">Click to see the magic happen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('security.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('security.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6">
                <FiShield className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('security.phantom_integration_title')}</h3>
              <p className="text-muted-foreground">{t('security.phantom_integration')}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('security.on_chain_transparency_title')}</h3>
              <p className="text-muted-foreground">{t('security.on_chain_transparency')}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6">
                <FiLock className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('security.security_first_title')}</h3>
              <p className="text-muted-foreground">{t('security.security_first')}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6">
                <FiCheck className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('security.devnet_title')}</h3>
              <p className="text-muted-foreground">{t('security.devnet')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-20 bg-muted/30">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('comparison.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('comparison.subtitle')}</p>
          </motion.div>

          {/* Scrolls inside its box at phone width rather than squeezing four columns. */}
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="sticky left-0 z-[1] bg-card p-4 text-left font-medium text-muted-foreground">
                    {comparison.feature}
                  </th>
                  <th scope="col" className="p-4 text-center font-bold text-[#FF6B00] bg-[#FF6B00]/10">
                    Solanize
                  </th>
                  {comparison.competitors.map((name) => (
                    <th key={name} scope="col" className="p-4 text-center font-medium text-muted-foreground">
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-b-0">
                    <th
                      scope="row"
                      className="sticky left-0 z-[1] bg-card p-4 text-left font-medium max-w-[14rem] md:max-w-none"
                    >
                      {row.feature}
                    </th>
                    <td className="p-4 text-center bg-[#FF6B00]/10">
                      <FiCheck className="inline w-5 h-5 text-green-600 dark:text-green-400" aria-label={comparison.yes} />
                    </td>
                    {row.them.map((value, i) => (
                      <td key={i} className="p-4 text-center">
                        {value === true ? (
                          <FiCheck className="inline w-4 h-4 text-muted-foreground" aria-label={comparison.yes} />
                        ) : value === false ? (
                          <FiX className="inline w-4 h-4 text-red-500/80" aria-label={comparison.no} />
                        ) : (
                          <span className="inline-block max-w-[11rem] text-xs leading-snug text-amber-700 dark:text-amber-300">
                            {value}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">{t('comparison.note')}</p>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('integrations.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('integrations.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[#FF6B00] font-bold text-lg">{integration.name[0]}</span>
                  </div>
                  <h3 className="font-bold mb-1">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B00]/10 via-background to-muted/20">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => {
                  handleFeatureClick('app_launch');
                  window.open('https://app.ribh.io', '_blank');
                }}
                className="px-8 py-4 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-xl text-lg font-semibold transition-all duration-200 shadow-xl shadow-orange-500/20 hover:scale-105 flex items-center justify-center"
              >
                {t('cta.primary')}
              </button>

              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-border hover:border-[#FF6B00] rounded-xl text-lg font-semibold hover:bg-[#FF6B00]/5 transition-all duration-200 flex items-center justify-center"
                onClick={() => handleFeatureClick('contact_navigation')}
              >
                Get in Touch
              </Link>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                message="Hello, I'm interested in Solanize.ai's AI-powered portfolio management. Can you tell me more?"
                source="homepage_cta"
                variant="icon"
                className="bg-green-500/10 border border-green-500/20 text-green-600 hover:bg-green-500 hover:text-white"
              >
                Chat on WhatsApp
              </WhatsAppButton>

              <span className="text-muted-foreground text-sm">or</span>

              <a
                href="mailto:mb@mayorana.ch"
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg font-medium text-muted-foreground hover:text-foreground hover:border-[#FF6B00]/20 transition-colors"
                onClick={() => handleFeatureClick('email_contact')}
              >
                <FiMail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutTemplate>
  );
};

export default SolanizeHomepage;
