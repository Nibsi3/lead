'use client'

import { Button } from "@/components/ui/button";
import { Coffee, Instagram, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CozyCafe({ template }: { template: any }) {
  const menuHighlights = [
      { name: "Hand-poured Latte", imageSeed: "cafe1" },
      { name: "Avocado Toast", imageSeed: "cafe2" },
      { name: "Freshly Baked Croissant", imageSeed: "cafe3" },
  ];
  return (
    <div className="w-full bg-stone-100 text-stone-800" style={{fontFamily: "'Inter', sans-serif"}}>
       {/* Header */}
      <header className="sticky top-0 bg-stone-100/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-xl font-bold flex items-center gap-2">
              <Coffee/> {template.name}
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link href="#menu" className="hover:text-primary">Menu</Link>
                <Link href="#about" className="hover:text-primary">About</Link>
                <Link href="#contact" className="hover:text-primary">Visit</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your daily dose of warmth and comfort.
            </h1>
            <p className="text-lg text-stone-600">
              A neighborhood coffee shop serving specialty coffee, delicious pastries, and good vibes.
            </p>
             <Button size="lg" className="bg-stone-800 text-white hover:bg-stone-900">View Full Menu</Button>
          </div>
           <div className="relative h-[28rem]">
             <Image data-ai-hint="cozy cafe interior" src={template.previewUrl} alt="Interior of a cozy cafe" fill className="object-cover rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">A Few of Our Favorites</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {menuHighlights.map(item => (
                    <div key={item.name} className="text-center group">
                        <div className="overflow-hidden rounded-lg shadow-md">
                           <Image data-ai-hint="cafe food" src={`https://picsum.photos/seed/${item.imageSeed}/600/600`} alt={item.name} width={600} height={600} className="object-cover aspect-square group-hover:scale-105 transition-transform" />
                        </div>
                        <h3 className="font-semibold text-lg mt-4">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
       <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold">More Than a Cup of Coffee</h2>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                {template.name} was born from a love for community and a passion for great coffee. We believe in the power of a good brew to bring people together. That's why we source our beans ethically, partner with local bakers, and strive to create a welcoming space for everyone.
            </p>
        </div>
      </section>

      {/* Contact/Visit */}
      <section id="contact" className="py-16 md:py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Come Say Hi!</h2>
            <div className="mt-8 space-y-4 text-lg">
                <p className="flex items-center justify-center gap-2"><MapPin/> 123 Main Street, Anytown USA</p>
                <p>Open Daily: 7am - 6pm</p>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="hover:text-stone-300"><Instagram/></a>
            </div>
        </div>
      </section>
    </div>
  )
}
