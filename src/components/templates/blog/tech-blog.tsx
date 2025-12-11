'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Code, Rss, Search } from "lucide-react";
import Image from "next/image";

export default function TechBlog({ template }: { template: any }) {
    const posts = [
        { title: "Why Rust is the Future of Systems Programming", excerpt: "A deep dive into Rust's memory safety features and its growing ecosystem.", imageSeed: "tech1", category: "Programming" },
        { title: "We Built a Serverless App in a Weekend", excerpt: "Our experience using AWS Lambda and Vercel to rapidly prototype and deploy.", imageSeed: "tech2", category: "Cloud" },
        { title: "The State of AI in 2024: A Developer's Perspective", excerpt: "From LLMs to diffusion models, what do developers need to know?", imageSeed: "tech3", category: "AI" },
    ];
    const featuredPost = { title: "Mastering the Modern JavaScript Toolchain", excerpt: "Navigating the complex world of bundlers, transpilers, and frameworks in 2024.", imageSeed: "tech-hero", category: "JavaScript" };

  return (
    <div className="w-full bg-gray-900 text-white">
        {/* Header */}
        <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-20 border-b border-gray-700">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
                    <Code className="text-cyan-400"/> {template.name}
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <a href="#" className="hover:text-white">Articles</a>
                    <a href="#" className="hover:text-white">Tutorials</a>
                    <a href="#" className="hover:text-white">Newsletter</a>
                </nav>
            </div>
        </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <Badge className="bg-cyan-400/10 text-cyan-300 border-cyan-400/50">{featuredPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{featuredPost.title}</h1>
            <p className="text-lg text-gray-400">{featuredPost.excerpt}</p>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Read Article <ArrowRight className="ml-2"/></Button>
          </div>
          <div>
            <Image data-ai-hint="code on screen" src={`https://picsum.photos/seed/${featuredPost.imageSeed}/800/600`} alt={featuredPost.title} width={800} height={600} className="rounded-lg object-cover shadow-2xl shadow-cyan-500/10"/>
          </div>
        </div>
      </section>
      
       {/* Latest Posts */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.map(post => (
                    <div key={post.title} className="group">
                        <div className="overflow-hidden rounded-lg">
                            <Image data-ai-hint="abstract tech" src={`https://picsum.photos/seed/${post.imageSeed}/600/400`} alt={post.title} width={600} height={400} className="object-cover aspect-video group-hover:opacity-80 transition-opacity"/>
                        </div>
                        <div className="mt-4">
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 border-gray-600">{post.category}</Badge>
                            <h3 className="font-semibold text-lg mt-2 group-hover:text-cyan-400">{post.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
             <h2 className="text-3xl font-bold">Stay Ahead of the Curve</h2>
             <p className="text-gray-400 mt-2">Subscribe to our newsletter for weekly insights, tutorials, and news from the world of tech.</p>
             <form className="flex gap-2 mt-6">
                <Input type="email" placeholder="you@example.dev" className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"/>
                <Button type="submit" className="bg-cyan-400 text-black hover:bg-cyan-300 font-semibold">Subscribe</Button>
             </form>
        </div>
      </section>
    </div>
  )
}
