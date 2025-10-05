'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import LayoutTemplate from '@/components/layout/LayoutTemplate';
import { BlogPost } from '@/types/blog';

export default function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const params = useParams();
  const locale = useLocale();
  const slug = params.slug as string;

  useEffect(() => {
    fetch('/blog-data.json')
      .then(res => res.json())
      .then((data: BlogPost[]) => {
        const foundPost = data.find(p => p.slug === slug && p.lang === locale);
        setPost(foundPost || null);
      })
      .catch(err => console.error('Failed to load blog post:', err));
  }, [slug, locale]);

  if (!post) {
    return (
      <LayoutTemplate>
        <div className="container mx-auto px-4 py-24">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </LayoutTemplate>
    );
  }

  return (
    <LayoutTemplate>
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US')}
            </time>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mt-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </LayoutTemplate>
  );
}
