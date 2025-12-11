'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu, Sofa, Lamp, Bed } from "lucide-react";
import Image from "next/image";

export default function HomeGoods({ template }: { template: any }) {
    const bestSellers = [
        { name: "Plush Velvet Armchair", price: "$499", imageSeed: "hg1", category: "Living Room" },
        { name: "Minimalist Oak Bed Frame", price: "$799", imageSeed: "hg2", category: "Bedroom" },
        { name: "Industrial Arc Floor Lamp", price: "$249", imageSeed: "hg3", category: "Lighting" },
    ];
    
    const collections = [
        { name: "Living Room", description: "Comfortable and stylish furniture for your main space.", icon: <Sofa size={36}/> },
        { name: "Bedroom", description: "Create your personal sanctuary with our serene collection.", icon: <Bed size={36}/> },
        { name: "Lighting", description: "Illuminate your home with modern and classic designs.", icon: <Lamp size={36}/> },
    ]

  return (
    <div className="w-full bg-[#F8F5F2] text-[#3D352E]">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-[#F8F5F2]/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
             <div className="text-2xl font-bold tracking-tighter font-serif">{template.name}</div>
             <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                 <a href="#collections" className="hover:text-primary">Collections</a>
                 <a href="#bestsellers" className="hover:text-primary">Best Sellers</a>
                 <a href="#sale" className="hover:text-primary">Sale</a>
             </nav>
             <div className="flex items-center gap-5">
                 <Search className="w-5 h-5 cursor-pointer"/>
                 <ShoppingCart className="w-5 h-5 cursor-pointer"/>
                 <Menu className="w-5 h-5 cursor-pointer md:hidden"/>
             </div>
        </div>
      </header>
      
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            Design a Home You Love.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Discover curated furniture and decor that combine timeless style with lasting quality.
          </p>
          <Button size="lg" className="bg-[#3D352E] text-white hover:bg-black">Shop New Arrivals</Button>
        </div>
        <div className="relative h-96 md:h-[32rem]">
          <Image data-ai-hint="stylish living room" src="https://picsum.photos/seed/hg-hero/800/1000" alt="A stylishly decorated living room" fill className="object-cover rounded-lg" priority />
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {collections.map(collection => (
                    <div key={collection.name} className="text-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="text-primary mb-4">{collection.icon}</div>
                        <h3 className="text-xl font-semibold font-serif">{collection.name}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{collection.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="bestsellers" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif">Our Best Sellers</h2>
            <p className="text-muted-foreground mt-2">Loved by homes everywhere.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {bestSellers.map(product => (
              <Card key={product.name} className="border-gray-200 overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
                <CardHeader className="p-0 relative">
                  <Badge variant="secondary" className="absolute top-3 left-3 z-10">{product.category}</Badge>
                   <Image data-ai-hint="modern furniture" src={`https://picsum.photos/seed/${product.imageSeed}/600/700`} alt={product.name} width={600} height={700} className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Inspiration Section */}
      <section id="sale" className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="cozy bedroom" src="https://picsum.photos/seed/hg-insp/600/500" alt="A cozy and well-decorated bedroom" width={600} height={500} className="rounded-lg object-cover" />
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold font-serif">Find Your Inspiration</h2>
                <p className="text-muted-foreground text-lg">Browse our lookbook for ideas on how to style your space. From cozy corners to grand living areas, discover how our pieces can transform your home.</p>
                <Button variant="outline">Explore the Lookbook</Button>
            </div>
        </div>
      </section>
      
       {/* Newsletter CTA */}
       <section className="py-20 border-t border-gray-200">
         <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold font-serif">Join Our Home</h2>
            <p className="mt-2 text-muted-foreground">Sign up for our newsletter to get exclusive access to new arrivals, special offers, and design inspiration.</p>
            <form className="flex gap-2 max-w-md mx-auto mt-6">
                <Input type="email" placeholder="Enter your email" className="flex-1 bg-white border-gray-300" />
                <Button type="submit" className="bg-[#3D352E] text-white hover:bg-black">Subscribe</Button>
            </form>
         </div>
       </section>

    </div>
  )
}
