'use client'

import { Button } from "@/components/ui/button";
import { Martini } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BarLounge({ template }: { template: any }) {
    const cocktails = [
        { name: "The Velvet Shadow", description: "Rye Whiskey, Amaro, Sweet Vermouth, Orange Bitters", imageSeed: "bar1" },
        { name: "Midnight Bloom", description: "Gin, Elderflower Liqueur, Crème de Violette, Lemon", imageSeed: "bar2" },
        { name: "Smoked Old Fashioned", description: "Bourbon, Demerara, Angostura, Hickory Smoke", imageSeed: "bar3" },
    ];
  return (
    <div className="w-full bg-[#1A1A1A] text-gray-300 font-sans">
       {/* Header */}
       <header className="sticky top-0 bg-[#1A1A1A]/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-24 border-b border-gray-700">
            <Link href="#" className="text-2xl font-bold tracking-[0.2em] uppercase">{template.name}</Link>
            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
                <Link href="#cocktails" className="hover:text-white">Cocktails</Link>
                <Link href="#about" className="hover:text-white">The Lounge</Link>
                <Link href="#contact" className="hover:text-white">Visit</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[85vh]">
        <Image data-ai-hint="moody bar" src={template.previewUrl} alt="Interior of a dark, moody bar" fill className="object-cover opacity-40"/>
         <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">An Ode to the Night.</h1>
             <p className="mt-4 text-lg text-gray-300">Expertly crafted cocktails in an intimate setting.</p>
         </div>
      </section>
      
      {/* Cocktails */}
       <section id="cocktails" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Signature Cocktails</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {cocktails.map(cocktail => (
                    <div key={cocktail.name} className="text-center group">
                        <div className="relative aspect-square rounded-full overflow-hidden w-48 mx-auto border-2 border-gray-700 p-2">
                             <Image data-ai-hint="craft cocktail" src={`https://picsum.photos/seed/${cocktail.imageSeed}/400/400`} alt={cocktail.name} fill className="object-cover group-hover:scale-110 transition-transform"/>
                        </div>
                        <h3 className="text-xl font-semibold mt-6 text-white">{cocktail.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">{cocktail.description}</p>
                    </div>
                ))}
            </div>
        </div>
       </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-white">The Experience</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Tucked away from the bustling city streets, {template.name} is a sanctuary for those who appreciate the art of a good drink. Our expert mixologists use only premium spirits and house-made infusions to create both classic and innovative cocktails.
                    </p>
                </div>
                <div>
                    <Image data-ai-hint="bartender" src="https://picsum.photos/seed/bartender/600/700" alt="Bartender mixing a drink" width={600} height={700} className="object-cover" />
                </div>
            </div>
        </section>

      {/* Contact / Reservations */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white">Visit Us</h2>
            <p className="mt-4 text-lg text-gray-400">Open Tuesday - Saturday | 5pm - Late</p>
            <p className="mt-1 text-lg text-gray-400">456 Velvet Rope Ave, Downtown</p>
            <Button variant="outline" size="lg" className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-black">
                Reservations Recommended
            </Button>
        </div>
      </section>

    </div>
  )
}
