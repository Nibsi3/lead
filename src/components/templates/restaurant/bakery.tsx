'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cake, Cookie, ShoppingBag, Wheat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Bakery({ template }: { template: any }) {
    const specialties = [
        { name: "Sourdough Bread", imageSeed: "baker1" },
        { name: "Chocolate Croissants", imageSeed: "baker2" },
        { name: "Celebration Cakes", imageSeed: "baker3" },
    ];
  return (
    <div className="w-full bg-rose-50 text-rose-900" style={{fontFamily: "'Lora', serif"}}>
        {/* Header */}
        <header className="sticky top-0 bg-rose-50/90 backdrop-blur-sm z-20 border-b border-rose-200">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <Link href="#" className="text-2xl font-bold flex items-center gap-2">
                   <Wheat /> {template.name}
                </Link>
                 <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#daily" className="hover:text-primary">Daily Menu</Link>
                    <Link href="#cakes" className="hover:text-primary">Cakes</Link>
                    <Link href="#about" className="hover:text-primary">Our Story</Link>
                </nav>
                 <div className="flex items-center gap-4">
                    <ShoppingBag className="cursor-pointer"/>
                    <Button className="bg-rose-800 text-white hover:bg-rose-900 hidden md:flex">Order Now</Button>
                 </div>
            </div>
        </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">Baked with Love, <br/>From Scratch.</h1>
            <p className="mt-6 text-lg text-rose-800 max-w-xl mx-auto">
                Your neighborhood bakery for artisanal breads, decadent pastries, and custom cakes.
            </p>
        </div>
      </section>

      {/* Specialties */}
      <section id="daily" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Specialties</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {specialties.map(item => (
                     <div key={item.name} className="relative group overflow-hidden rounded-lg shadow-lg">
                        <Image data-ai-hint="baked goods" src={`https://picsum.photos/seed/${item.imageSeed}/600/800`} alt={item.name} width={600} height={800} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                        </div>
                     </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-rose-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <Badge className="bg-rose-200 text-rose-800">From Our Ovens to Your Home</Badge>
                <h2 className="text-4xl font-bold">The Art of Baking</h2>
                <p className="text-lg text-rose-800/80 leading-relaxed">
                    At {template.name}, baking is our passion. We use only the finest ingredients—local flour, fresh butter, and seasonal fruits—to create treats that are as delicious as they are beautiful. We believe every bite should be a moment of joy.
                </p>
            </div>
             <div>
                <Image data-ai-hint="baker hands" src="https://picsum.photos/seed/baker-hands/600/500" alt="Baker kneading dough" width={600} height={500} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>

      {/* Cake CTA */}
      <section id="cakes" className="py-20 text-center">
        <div className="container mx-auto px-4">
             <Cake className="w-16 h-16 mx-auto text-rose-400 mb-4"/>
             <h2 className="text-4xl font-bold">Custom Cakes for Any Occasion</h2>
             <p className="mt-4 text-lg text-rose-800 max-w-xl mx-auto">
                Birthdays, weddings, or just because. Let us create the perfect centerpiece for your celebration.
            </p>
             <Button size="lg" className="mt-8 bg-rose-800 text-white hover:bg-rose-900">Inquire About Cakes</Button>
        </div>
      </section>
    </div>
  )
}
