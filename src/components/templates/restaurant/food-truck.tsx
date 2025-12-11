'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Twitter, Instagram, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FoodTruck({ template }: { template: any }) {
    const menuItems = [
        { name: "The Classic Taco", description: "Smoky chipotle chicken, pico de gallo, cilantro, lime.", price: "$4.50" },
        { name: "Pork al Pastor Taco", description: "Marinated pork, grilled pineapple, onion, cilantro.", price: "$5.00" },
        { name: "Veggie Fiesta Taco", description: "Black beans, roasted corn, cotija cheese, avocado salsa.", price: "$4.iso" },
        { name: "Chips & Guac", description: "House-made tortilla chips with fresh guacamole.", price: "$7.00" },
    ];
  return (
    <div className="w-full bg-yellow-400 text-slate-900" style={{fontFamily: "'Bebas Neue', sans-serif"}}>
       {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-4xl font-black tracking-wider">{template.name}</Link>
             <div className="flex items-center gap-4">
                <a href="#"><Twitter className="w-6 h-6 hover:text-yellow-400"/></a>
                <a href="#"><Instagram className="w-6 h-6 hover:text-yellow-400"/></a>
             </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center container mx-auto px-4">
        <div className="space-y-4 text-center md:text-left">
            <h1 className="text-7xl md:text-9xl font-black tracking-wider leading-none">Best Tacos on Wheels</h1>
            <p className="font-sans text-xl text-slate-800">Authentic street tacos with a modern twist. Find us on the streets of Anytown!</p>
        </div>
        <div>
             <Image data-ai-hint="food truck" src={template.previewUrl} alt="Food truck serving customers" width={800} height={600} className="rounded-lg shadow-2xl" />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 max-w-4xl">
             <h2 className="text-6xl font-black text-center mb-12 text-yellow-400">The Menu</h2>
             <div className="space-y-6">
                {menuItems.map(item => (
                    <div key={item.name} className="flex justify-between items-baseline gap-4">
                        <div>
                            <h3 className="text-3xl tracking-wide">{item.name}</h3>
                            <p className="font-sans text-sm text-slate-300">{item.description}</p>
                        </div>
                        <p className="text-3xl">{item.price}</p>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl font-black">Where to Find Us</h2>
            <div className="mt-8 p-8 bg-black text-white rounded-lg inline-block shadow-lg">
                <p className="text-2xl font-sans font-semibold text-yellow-400">This Week's Location:</p>
                <p className="text-4xl mt-2 flex items-center gap-3"><MapPin/> 123 Main St, Downtown</p>
                <p className="font-sans mt-2">Mon-Fri, 11am - 3pm</p>
                <Button variant="secondary" className="mt-6 bg-white text-black hover:bg-slate-200">Follow Us For Daily Updates</Button>
            </div>
        </div>
      </section>
    </div>
  )
}
