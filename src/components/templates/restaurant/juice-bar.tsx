'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JuiceBar({ template }: { template: any }) {
    const products = [
        { name: "Green Glow Juice", ingredients: "Kale, Spinach, Apple, Lemon, Ginger", imageSeed: "juice1" },
        { name: "Sunrise Boost Smoothie", ingredients: "Mango, Pineapple, Banana, Orange Juice", imageSeed: "juice2" },
        { name: "Berry Antioxidant Bowl", ingredients: "Acai, Mixed Berries, Granola, Coconut", imageSeed: "juice3" },
    ];
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-3xl font-bold flex items-center gap-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                <Leaf className="text-green-500"/> <span className="text-green-800">{template.name}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
                <Link href="#menu" className="hover:text-green-600">Menu</Link>
                <Link href="#about" className="hover:text-green-600">Our Philosophy</Link>
            </nav>
            <Button className="rounded-full bg-green-600 hover:bg-green-700">
                <ShoppingCart className="mr-2"/> Order Now
            </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-green-900 leading-tight">
                    Sip Your Way to Wellness.
                </h1>
                <p className="text-xl text-slate-600">
                    Cold-pressed juices, superfood smoothies, and healthy bowls made with 100% real, fresh ingredients.
                </p>
            </div>
             <div className="relative h-96">
                <Image data-ai-hint="fresh juice" src={template.previewUrl} alt="Colorful juices in bottles" fill className="object-contain"/>
             </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Fresh & Vibrant</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {products.map(item => (
                    <div key={item.name} className="text-center group">
                        <div className="relative">
                            <Image data-ai-hint="healthy smoothie" src={`https://picsum.photos/seed/${item.imageSeed}/600/600`} alt={item.name} width={600} height={600} className="rounded-full aspect-square object-cover shadow-lg group-hover:shadow-2xl transition-shadow"/>
                        </div>
                        <h3 className="text-2xl font-semibold mt-6">{item.name}</h3>
                        <p className="text-sm text-slate-500 mt-1 max-w-xs mx-auto">{item.ingredients}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <section id="about" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4"/>
            <h2 className="text-4xl font-bold">Purely from Nature</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We're passionate about the power of plants. That's why we never use artificial sweeteners, preservatives, or concentrates. Everything we make is handcrafted in small batches to ensure the highest quality and nutritional value. It's goodness you can taste and feel.
            </p>
        </div>
      </section>

      {/* Cleanses CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Ready for a Reset?</h2>
            <p className="mt-2 text-lg text-green-100 max-w-xl mx-auto">
                Explore our specially designed juice cleanse programs to help you reset and rejuvenate your body.
            </p>
            <Button size="lg" variant="secondary" className="mt-8 bg-white text-green-700 hover:bg-slate-100">
                Explore Cleanses
            </Button>
        </div>
      </section>
    </div>
  )
}
