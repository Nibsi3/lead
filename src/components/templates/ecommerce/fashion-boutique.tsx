'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Instagram, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

export default function FashionBoutique({ template }: { template: any }) {
    const newArrivals = [
        { id: 1, name: "The Linen Jumpsuit", price: "$128", imageSeed: "fashion1" },
        { id: 2, name: "The Silk Blouse", price: "$98", imageSeed: "fashion2" },
        { id: 3, name: "The Tailored Trouser", price: "$145", imageSeed: "fashion3" },
        { id: 4, name: "The Classic Trench", price: "$220", imageSeed: "fashion4" },
    ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
        {/* Announcement Bar */}
        <div className="bg-primary text-primary-foreground text-center text-sm py-2">
            Free Shipping on All Orders Over $100
        </div>

      {/* Header */}
      <header className="border-b sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
             <div className="text-2xl font-bold tracking-widest uppercase">{template.name}</div>
             <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
                 <a href="#new-in" className="hover:text-primary">New In</a>
                 <a href="#shop" className="hover:text-primary">Shop</a>
                 <a href="#about" className="hover:text-primary">Our Story</a>
             </nav>
             <div className="flex items-center gap-4">
                 <Search className="w-5 h-5 cursor-pointer"/>
                 <User className="w-5 h-5 cursor-pointer"/>
                 <ShoppingBag className="w-5 h-5 cursor-pointer"/>
             </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[85vh] w-full">
         <Image data-ai-hint="fashion model" src={template.previewUrl} alt="Fashion model in a stylish outfit" fill className="object-cover object-center"/>
         <div className="absolute inset-0 bg-black/30"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
             <h1 className="text-4xl md:text-6xl font-bold tracking-wider uppercase">{template.description}</h1>
             <p className="mt-4 text-lg max-w-md">Effortless styles for the modern woman.</p>
             <Button variant="secondary" size="lg" className="mt-8 rounded-none uppercase tracking-widest">Shop The Collection</Button>
         </div>
      </section>

      {/* New Arrivals */}
      <section id="new-in" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-wider uppercase">New Arrivals</h2>
                <p className="text-muted-foreground mt-2">Freshly dropped styles, just for you.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                {newArrivals.map(product => (
                    <div key={product.id} className="text-center group">
                        <div className="relative overflow-hidden">
                           <Image data-ai-hint="fashion clothing" src={`https://picsum.photos/seed/${product.imageSeed}/600/800`} alt={product.name} width={600} height={800} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform" />
                           <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 rounded-none opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 text-black hover:bg-white">Quick View</Button>
                        </div>
                        <h3 className="font-semibold tracking-wide mt-4">{product.name}</h3>
                        <p className="text-muted-foreground text-sm">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <Image data-ai-hint="clothing store" src="https://picsum.photos/seed/boutique-interior/600/500" alt="Interior of a chic fashion boutique" width={600} height={500} className="object-cover" />
          </div>
          <div className="space-y-4 text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-wider uppercase">Consciously Crafted</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in fashion that feels good and does good. Our pieces are designed with timeless appeal and produced in small batches, focusing on quality materials and ethical manufacturing. Style that lasts, beyond the season.
            </p>
            <Button variant="link" className="text-primary p-0">Read Our Story <ArrowRight className="w-4 h-4 ml-2"/></Button>
          </div>
        </div>
      </section>

       {/* Instagram CTA */}
      <section id="social" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-wider uppercase">Follow Us</h2>
           <a href="#" className="text-muted-foreground hover:text-primary mt-2 flex items-center justify-center gap-2">
                <Instagram className="w-5 h-5"/> @{template.name.toLowerCase().replace(' ', '')}
            </a>
        </div>
      </section>

    </div>
  )
}
