'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Instagram, Rss } from "lucide-react";
import Image from "next/image";

export default function LifestyleBlog({ template }: { template: any }) {
    const posts = [
        { title: "My 5-Minute Morning Routine for a Productive Day", imageSeed: "life1", category: "Wellness" },
        { title: "A Weekend Guide to Visiting Joshua Tree", imageSeed: "life2", category: "Travel" },
        { title: "Easy & Healthy Weeknight Dinner Ideas", imageSeed: "life3", category: "Food" },
        { title: "Creating a Cozy Reading Nook at Home", imageSeed: "life4", category: "Home" },
    ];

  return (
    <div className="w-full bg-white text-gray-800">
        {/* Header */}
        <header className="border-b sticky top-0 bg-white/90 backdrop-blur-sm z-20">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                 <div className="text-xl font-semibold tracking-wider uppercase">{template.name}</div>
                 <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
                     <a href="#" className="hover:text-primary">Home</a>
                     <a href="#" className="hover:text-primary">Wellness</a>
                     <a href="#" className="hover:text-primary">Travel</a>
                     <a href="#" className="hover:text-primary">About</a>
                 </nav>
                 <div className="flex items-center gap-4">
                     <Instagram className="w-5 h-5 cursor-pointer text-gray-500 hover:text-primary"/>
                     <Heart className="w-5 h-5 cursor-pointer text-gray-500 hover:text-primary"/>
                     <Rss className="w-5 h-5 cursor-pointer text-gray-500 hover:text-primary"/>
                 </div>
            </div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
                <Image data-ai-hint="aesthetic flatlay" src={template.previewUrl} alt="Featured post" fill className="object-cover"/>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col justify-center text-white p-8 md:p-16">
                    <div className="max-w-lg">
                        <Badge className="bg-white text-black mb-2">Editor's Pick</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold">Finding Joy in the Everyday</h1>
                        <p className="mt-4 text-lg">Curating a life of intention, wellness, and simple pleasures.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {posts.map(post => (
                        <div key={post.title} className="group">
                             <div className="overflow-hidden rounded-lg">
                                <Image data-ai-hint="lifestyle photo" src={`https://picsum.photos/seed/${post.imageSeed}/600/700`} alt={post.title} width={600} height={700} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform"/>
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{post.category}</p>
                                <h3 className="font-semibold text-lg mt-1 group-hover:text-primary">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Hi, I'm {template.name.split(' ')[0]}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Welcome to my little corner of the internet! I started this blog as a creative outlet and a way to document my journey towards a more mindful and beautiful life. Here, I share everything from my favorite recipes and travel diaries to wellness tips and home decor projects. My hope is that you'll find inspiration to romanticize your own life and find joy in the small moments.
                    </p>
                    <Button variant="link" className="p-0 text-base">
                        More About Me <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                </div>
                <div>
                     <Image data-ai-hint="lifestyle portrait" src="https://picsum.photos/seed/life-portrait/600/600" alt="Portrait of the blogger" width={600} height={600} className="rounded-full object-cover aspect-square"/>
                </div>
            </div>
        </section>

    </div>
  )
}
