'use client';
import { placeholderBlogPosts } from '@/lib/placeholder-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BlogPage() {
    return (
        <div className="container mx-auto py-16 md:py-24 lg:py-32">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
                From Our Blog
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest insights on SEO, AI, and web development.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {placeholderBlogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                    {post.imageUrl &&
                      <div className="relative w-full aspect-video">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={post.imageHint}
                        />
                      </div>
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
    );
}
