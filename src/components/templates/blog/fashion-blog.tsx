'use client'

import { Button } from "@/components/ui/button";
import { Search, Instagram, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FashionBlog({ template }: { template: any }) {
    const mainPost = { title: "The Enduring Allure of the Classic Trench Coat", imageSeed: "fashion-hero" };
    const posts = [
        { title: "5 Ways to Style a White Button-Down", imageSeed: "fashion-post1", category: "Style Tips" },
        { title: "Accessory Edit: The Best Bags of the Season", imageSeed: "fashion-post2", category: "Trends" },
    ];
    const fullWidthPost = { title: "Investment Pieces: The Items Worth Splurging On", imageSeed: "fashion-post3", category: "Shopping" };


  return (
    <div className="w-full bg-white text-zinc-900 font-light" style={{fontFamily: "'Helvetica Neue', sans-serif"}}>
       {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
             <div className="flex-1">
                <Link href="#" className="text-sm tracking-wider hover:underline">Subscribe</Link>
             </div>
             <div className="flex-1 text-center">
                <Link href="#" className="text-3xl font-bold tracking-[0.2em] uppercase">{template.name}</Link>
             </div>
             <div className="flex-1 flex justify-end items-center gap-4">
                <Search className="w-5 h-5 cursor-pointer"/>
                <Instagram className="w-5 h-5 cursor-pointer"/>
             </div>
        </div>
         <nav className="container mx-auto px-4 flex justify-center items-center gap-8 text-sm uppercase tracking-widest h-12 border-t">
            <Link href="#" className="hover:underline">Trends</Link>
            <Link href="#" className="hover:underline">Style Guides</Link>
            <Link href="#" className="hover:underline">Shopping</Link>
            <Link href="#" className="hover:underline">Personal</Link>
        </nav>
      </header>

      {/* Main Post */}
      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
            <Link href="#" className="group">
                <div className="overflow-hidden">
                    <Image data-ai-hint="stylish person" src={`https://picsum.photos/seed/${mainPost.imageSeed}/1600/1000`} alt={mainPost.title} width={1600} height={1000} className="object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif mt-6 hover:underline">{mainPost.title}</h1>
                <p className="text-sm uppercase tracking-widest text-zinc-500 mt-2">Style Guides</p>
            </Link>
        </section>
        
        {/* Two-column posts */}
        <section className="grid md:grid-cols-2 gap-8 py-16 md:py-24">
             {posts.map(post => (
                 <Link href="#" key={post.title} className="group text-center">
                    <div className="overflow-hidden">
                        <Image data-ai-hint="fashion detail" src={`https://picsum.photos/seed/${post.imageSeed}/800/1000`} alt={post.title} width={800} height={1000} className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"/>
                    </div>
                    <h2 className="text-2xl font-serif mt-6 hover:underline">{post.title}</h2>
                    <p className="text-sm uppercase tracking-widest text-zinc-500 mt-1">{post.category}</p>
                </Link>
             ))}
        </section>

        {/* Full-width post */}
        <section className="text-center pb-16 md:pb-24">
            <Link href="#" className="group">
                <div className="overflow-hidden">
                    <Image data-ai-hint="luxury items" src={`https://picsum.photos/seed/${fullWidthPost.imageSeed}/1600/900`} alt={fullWidthPost.title} width={1600} height={900} className="object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <h2 className="text-4xl font-serif mt-6 hover:underline">{fullWidthPost.title}</h2>
                <p className="text-sm uppercase tracking-widest text-zinc-500 mt-2">{fullWidthPost.category}</p>
            </Link>
        </section>
      </main>

    </div>
  )
}
