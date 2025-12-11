'use client';
import { notFound, useParams } from 'next/navigation';
import { placeholderBlogPosts } from '@/lib/placeholder-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = placeholderBlogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container max-w-4xl mx-auto py-12 px-4">
            <div className="space-y-4 text-center">
                <Badge variant="secondary">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">{post.title}</h1>
                <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://picsum.photos/seed/${post.authorAvatar}/40/40`} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>By {post.author}</span>
                </div>
            </div>

            {post.imageUrl && 
                <div className="relative my-8 h-96 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.imageHint}
                    />
                </div>
            }

            <div 
                className="prose dark:prose-invert max-w-none mx-auto mt-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
