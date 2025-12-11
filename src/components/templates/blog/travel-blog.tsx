'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";

export default function TravelBlog({ template }: { template: any }) {
    const posts = [
        { title: "Lost in the Alleys of Kyoto", excerpt: "Wandering through Gion, discovering ancient temples and serene gardens.", imageSeed: "travel1", location: "Japan" },
        { title: "A Week in the Swiss Alps", excerpt: "Hiking, cheese fondue, and breathtaking views from the top of Europe.", imageSeed: "travel2", location: "Switzerland" },
        { title: "The Colors of Morocco", excerpt: "From the bustling souks of Marrakech to the blue city of Chefchaouen.", imageSeed: "travel3", location: "Morocco" },
    ];
    const featuredPost = { title: "Chasing Waterfalls in Iceland", excerpt: "A road trip along the Ring Road to discover the raw, untouched beauty of Iceland's most famous waterfalls.", imageSeed: "travel-hero", location: "Iceland" };


  return (
    <div className="w-full bg-white text-slate-800">
        {/* Header */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <div className="text-2xl font-bold tracking-tight">{template.name}</div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#" className="hover:text-primary">Destinations</a>
                    <a href="#" className="hover:text-primary">Travel Tips</a>
                    <a href="#" className="hover:text-primary">About</a>
                </nav>
            </div>
        </header>

      {/* Hero */}
      <section className="relative h-[80vh] w-full">
         <Image data-ai-hint="dramatic landscape" src={template.previewUrl} alt={featuredPost.title} fill className="object-cover"/>
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
         <div className="relative h-full flex flex-col justify-end text-white p-8 md:p-12">
             <div className="max-w-2xl">
                 <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-0">{featuredPost.location}</Badge>
                 <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">{featuredPost.title}</h1>
                 <p className="mt-4 text-lg text-slate-200">{featuredPost.excerpt}</p>
                 <Button variant="secondary" size="lg" className="mt-6">Read The Story</Button>
            </div>
         </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-serif text-center mb-12">Latest Adventures</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.map(post => (
                    <Card key={post.title} className="group overflow-hidden border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
                        <div className="overflow-hidden">
                           <Image data-ai-hint="travel landscape" src={`https://picsum.photos/seed/${post.imageSeed}/600/400`} alt={post.title} width={600} height={400} className="object-cover aspect-video group-hover:scale-105 transition-transform" />
                        </div>
                        <CardContent className="p-6">
                            <Badge variant="outline" className="mb-2 text-xs">{post.location}</Badge>
                            <h3 className="text-xl font-semibold font-serif group-hover:text-primary">{post.title}</h3>
                            <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <Button variant="outline">View All Posts</Button>
            </div>
        </div>
      </section>
      
       {/* Destination Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">Explore by Destination</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Europe", "Asia", "South America", "Africa"].map(dest => (
                <div key={dest} className="relative aspect-square rounded-lg overflow-hidden group">
                     <Image data-ai-hint="travel destination" src={`https://picsum.photos/seed/${dest.toLowerCase()}/600/600`} alt={dest} fill className="object-cover group-hover:scale-110 transition-transform"/>
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold font-serif">{dest}</h3>
                     </div>
                     <a href="#" className="absolute inset-0" aria-label={`Explore ${dest}`}></a>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
             <h2 className="text-3xl font-bold font-serif">Join the Journey</h2>
             <p className="text-muted-foreground mt-2">Get the latest travel stories, tips, and photos delivered to your inbox.</p>
             <form className="flex gap-2 mt-6">
                <Input type="email" placeholder="Your email address" className="flex-1"/>
                <Button type="submit">Subscribe</Button>
            </form>
        </div>
      </section>
    </div>
  )
}
