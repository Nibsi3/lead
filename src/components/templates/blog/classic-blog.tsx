'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ClassicBlog({ template }: { template: any }) {
    const posts = [
        { date: "August 15, 2024", title: "Thoughts on Stillness", excerpt: "In a world that shouts, I've found solace in the whisper. A reflection on finding quiet moments amidst the noise of modern life.", imageSeed: "classic1" },
        { date: "August 12, 2024", title: "The Geometry of Cities", excerpt: "Exploring the patterns, rhythms, and hidden beauty in urban landscapes, from the grand avenues to the forgotten corners.", imageSeed: "classic2" },
        { date: "August 10, 2024", title: "A Study in Blue", excerpt: "From the deep indigo of the twilight sky to the soft cerulean of a robin's egg, an essay on the color blue and its many meanings.", imageSeed: "classic3" },
    ];

  return (
    <div className="w-full bg-white text-black" style={{fontFamily: "'Times New Roman', Times, serif"}}>
        <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <header className="py-16 text-center border-b-2 border-black">
                <h1 className="text-6xl font-bold tracking-widest uppercase">{template.name}</h1>
                <p className="mt-2 text-lg tracking-wider">A Journal of Observations</p>
            </header>

             <nav className="flex justify-center gap-6 py-6 border-b text-sm tracking-widest uppercase">
                <Link href="#" className="hover:underline">Home</Link>
                <Link href="#" className="hover:underline">Archive</Link>
                <Link href="#" className="hover:underline">About</Link>
                <Link href="#" className="hover:underline">Contact</Link>
            </nav>

            {/* Posts */}
            <main className="py-16 space-y-20">
                {posts.map(post => (
                    <article key={post.title} className="text-center">
                        <p className="text-xs tracking-widest uppercase text-gray-500">{post.date}</p>
                        <h2 className="text-4xl font-bold my-4 leading-tight">
                            <Link href="#" className="hover:underline">{post.title}</Link>
                        </h2>
                        {post.imageSeed && (
                             <div className="my-8">
                                <Image data-ai-hint="artistic photo" src={`https://picsum.photos/seed/${post.imageSeed}/1000/600`} alt={post.title} width={1000} height={600} className="object-cover mx-auto"/>
                             </div>
                        )}
                        <div className="text-lg leading-relaxed max-w-2xl mx-auto">
                            <p>{post.excerpt}</p>
                        </div>
                        <Button variant="link" className="mt-4 text-black font-bold tracking-wider">Continue Reading</Button>
                    </article>
                ))}
            </main>
            
             {/* Pagination */}
            <nav className="flex justify-between items-center py-8 border-t">
                <Button variant="outline" className="border-black rounded-none">&larr; Older Posts</Button>
                <Button variant="outline" className="border-black rounded-none">Newer Posts &rarr;</Button>
            </nav>

             {/* Footer */}
            <footer className="text-center py-8 text-xs text-gray-600">
                <p>&copy; {new Date().getFullYear()} {template.name}. All Rights Reserved.</p>
            </footer>
        </div>
    </div>
  )
}
