'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import LayoutTemplate from '@/components/layout/LayoutTemplate';
import { BlogPost } from '@/types/blog';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const locale = useLocale();

  useEffect(() => {
    fetch('/blog-data.json')
      .then(res => res.json())
      .then((data: BlogPost[]) => setPosts(data.filter((p: BlogPost) => p.lang === locale)))
      .catch(err => console.error('Failed to load blog posts:', err));
  }, [locale]);

  return (
    <LayoutTemplate>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {posts.map(post => (
              <motion.div key={post.slug} variants={fadeInUp}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="block bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
                >
                  <h2 className="text-xl font-bold mb-3 text-foreground">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US')}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {posts.length === 0 && (
            <p className="text-center text-muted-foreground">
              {locale === 'en' ? 'No blog posts yet.' : 'Aucun article pour le moment.'}
            </p>
          )}
        </div>
      </div>
    </LayoutTemplate>
  );
}
