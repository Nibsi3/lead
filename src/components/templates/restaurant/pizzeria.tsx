'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pizza, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Pizzeria({ template }: { template: any }) {
    const pizzas = [
        { name: "Classic Margherita", description: "Fresh mozzarella, San Marzano tomatoes, basil, extra virgin olive oil.", imageSeed: "pizza1" },
        { name: "Spicy Pepperoni", description: "Artisanal pepperoni, mozzarella, spicy honey drizzle.", imageSeed: "pizza2" },
        { name: "Mushroom & Truffle", description: "Wild mushrooms, mozzarella, truffle cream sauce, fresh parsley.", imageSeed: "pizza3" },
    ];
  return (
    <div className="w-full bg-red-900 text-white" style={{fontFamily: "'Oswald', sans-serif"}}>
      {/* Header */}
      <header className="border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
            <Link href="#" className="text-4xl font-black uppercase tracking-wider flex items-center gap-3">
                <Pizza className="w-10 h-10 text-yellow-400"/> {template.name}
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-lg font-bold uppercase">
                <Link href="#menu" className="hover:text-yellow-400">Menu</Link>
                <Link href="#about" className="hover:text-yellow-400">About</Link>
            </nav>
            <Button size="lg" className="bg-yellow-400 text-red-900 hover:bg-yellow-300 font-bold text-lg hidden md:flex">
                <Phone className="mr-2"/> Order Now
            </Button>
        </div>
      </header>

      {/* Hero */}
       <section className="relative h-[60vh] md:h-[80vh]">
          <Image data-ai-hint="pizza oven" src={template.previewUrl} alt="Pizza in a wood-fired oven" fill className="object-cover opacity-50" />
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider text-shadow">A Slice of Heaven</h1>
             <p className="text-2xl mt-4 font-semibold text-yellow-300">Authentic, Wood-Fired Pizza</p>
          </div>
       </section>

      {/* Menu */}
       <section id="menu" className="py-16 md:py-24 bg-stone-100 text-black">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-black uppercase text-center mb-12">Our Pies</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {pizzas.map(pizza => (
                    <div key={pizza.name} className="border-4 border-black rounded-lg bg-white overflow-hidden text-center">
                        <Image data-ai-hint="delicious pizza" src={`https://picsum.photos/seed/${pizza.imageSeed}/600/400`} alt={pizza.name} width={600} height={400} className="object-cover aspect-[4/3]"/>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold uppercase">{pizza.name}</h3>
                            <p className="mt-2 text-stone-600 font-sans">{pizza.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-5xl font-black uppercase mb-6">Real Ingredients. Real Pizza.</h2>
            <p className="text-xl text-yellow-200 leading-relaxed">
                We believe in the old ways. Our dough is naturally leavened for 72 hours. Our sauce is made from hand-crushed San Marzano tomatoes. We source the best ingredients from local farms and Italy. It's a difference you can taste in every single slice.
            </p>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-yellow-400 py-16 text-red-900 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-black uppercase">Hungry?</h2>
            <Button size="lg" className="mt-6 bg-red-800 text-white hover:bg-red-700 text-xl px-10 py-6">
                Order for Pickup or Delivery
            </Button>
        </div>
      </section>
    </div>
  )
}
