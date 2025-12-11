'use client'

import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

export default function LuxuryItems({ template }: { template: any }) {
    const featuredItems = [
        { name: 'The Sovereign Chronograph', category: 'Timepieces', imageSeed: 'lux1' },
        { name: 'The Kensington Attaché', category: 'Leather Goods', imageSeed: 'lux2' },
        { name: 'The Elysian Fountain Pen', category: 'Writing Instruments', imageSeed: 'lux3' },
    ];
  return (
    <div className="w-full bg-[#111111] text-gray-200 font-serif">
       {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-[#111111]/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
             <div className="text-center">
                <a href="#" className="text-sm tracking-[0.2em] uppercase text-gray-400">Collections</a>
             </div>
             <div className="text-center">
                <div className="text-3xl font-bold tracking-widest uppercase">{template.name}</div>
                <div className="text-xs tracking-[0.3em] uppercase text-gray-500">Est. 1888</div>
             </div>
             <div className="flex items-center gap-6">
                 <a href="#" className="text-sm tracking-[0.2em] uppercase text-gray-400">Boutiques</a>
                 <Search className="w-5 h-5 text-gray-400 cursor-pointer"/>
                 <ShoppingBag className="w-5 h-5 text-gray-400 cursor-pointer"/>
             </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] w-full">
         <Image data-ai-hint="luxury watch" src={template.previewUrl} alt="A luxury watch on a dark background" fill className="object-cover" priority />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
         <div className="relative h-full flex flex-col justify-end items-center text-center text-white px-4 pb-20">
             <h1 className="text-4xl md:text-5xl font-bold tracking-wider uppercase">Uncompromising Quality</h1>
             <p className="mt-4 text-lg max-w-2xl text-gray-300">
                A legacy of craftsmanship, precision, and timeless elegance.
             </p>
         </div>
      </section>
      
      {/* Featured Items */}
       <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {featuredItems.map(item => (
                    <div key={item.name} className="relative group overflow-hidden">
                         <Image data-ai-hint="luxury product" src={`https://picsum.photos/seed/${item.imageSeed}/600/800`} alt={item.name} width={600} height={800} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
                            <p className="text-sm uppercase tracking-widest text-gray-400">{item.category}</p>
                            <h3 className="text-2xl font-semibold mt-1">{item.name}</h3>
                            <Button variant="link" className="text-white p-0 mt-2 justify-start h-auto group-hover:translate-x-2 transition-transform">Discover</Button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
       </section>

        {/* The Craftsmanship Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-wide uppercase">The Art of<br/>Craftsmanship</h2>
            <div className="w-24 h-px bg-primary"></div>
            <p className="text-gray-400 leading-relaxed">
              For over a century, our artisans have honed their skills, passing down techniques from generation to generation. Every detail is meticulously executed, every material carefully selected. This dedication to perfection is not just our tradition; it is our promise, embedded in every piece we create.
            </p>
            <Button variant="outline" className="rounded-none border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white uppercase tracking-widest">
                Explore Our Heritage
            </Button>
          </div>
          <div>
            <Image data-ai-hint="artisan hands" src="https://picsum.photos/seed/lux-craft/600/500" alt="Close-up of an artisan's hands working on a luxury item" width={600} height={500} className="object-cover" />
          </div>
        </div>
      </section>

      {/* Bespoke Services */}
       <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-wide uppercase">Bespoke Services</h2>
             <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
                Create a truly unique piece with our bespoke commissioning service. Our consultants will guide you through the process of personalizing an item to your exact specifications.
             </p>
             <Button className="mt-8 rounded-none bg-primary hover:bg-primary/90 uppercase tracking-widest px-10 py-6">
                Request an Appointment
            </Button>
        </div>
       </section>
       
    </div>
  )
}
