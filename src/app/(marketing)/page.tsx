'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Bot, Brush, MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { placeholderBlogPosts } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI-Powered Content Generation',
    description: 'Instantly create high-quality, SEO-optimized articles, landing pages, and metadata with our advanced AI.',
  },
  {
    icon: <Brush className="w-8 h-8 text-primary" />,
    title: 'Automated Site Styling',
    description: 'Let our AI suggest and apply beautiful, responsive layouts and styles that match your brand identity.',
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: 'Advanced SEO Audits',
    description: 'Run comprehensive SEO audits to identify and fix issues, ensuring your site ranks higher in search results.',
  },
];


export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="relative container z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                Build SEO-Ready Websites, Instantly
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                The Firebase SEO Site Factory uses AI to generate, style, and
                deploy complete websites, so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/admin">
                    Start Building for Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                The Ultimate Toolkit for Web Success
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is packed with powerful, AI-driven features designed to help you create stunning, high-performance websites effortlessly and dominate search rankings.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="grid gap-2 text-center">
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="blog" className="py-16 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                From Our Blog
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest insights on SEO, AI, and web development.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {placeholderBlogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                    {post.imageUrl &&
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover w-full aspect-video group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={post.imageHint}
                      />
                    }
                    <CardHeader>
                      <Badge variant="secondary" className="mb-2 w-fit">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
                      <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
