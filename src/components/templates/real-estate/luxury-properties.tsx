'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LuxuryProperties({ template }: { template: any }) {
    const properties = [
        { name: "The Waterfront Estate", location: "Miami Beach, FL", imageSeed: "lux-re1", price: "25,000,000" },
        { name: "The Aspen Chalet", location: "Aspen, CO", imageSeed: "lux-re2", price: "18,500,000" },
        { name: "The Penthouse at The Avery", location: "New York, NY", imageSeed: "lux-re3", price: "32,000,000" },
    ];
  return (
    <div className="w-full bg-black text-white font-serif">
       {/* Header */}
      <header className="sticky top-0 bg-black/80 backdrop-blur-md z-20 border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
            <Link href="#" className="text-2xl font-bold tracking-widest uppercase">{template.name}</Link>
            <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
                <Link href="#portfolio" className="hover:text-gray-300">Portfolio</Link>
                <Link href="#about" className="hover:text-gray-300">About</Link>
                <Link href="#contact" className="hover:text-gray-300">Contact</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full">
         <Image data-ai-hint="luxury mansion" src={template.previewUrl} alt="An opulent modern mansion at dusk" fill className="object-cover opacity-60" priority/>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
         <div className="relative h-full flex flex-col justify-end pb-24 px-4 container mx-auto">
             <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Extraordinary Homes. Unparalleled Service.</h1>
             </div>
         </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight">Our Portfolio</h2>
                <p className="mt-2 text-gray-400">A curated collection of the world's most exceptional properties.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {properties.map(prop => (
                    <div key={prop.name} className="group">
                        <div className="overflow-hidden">
                           <Image data-ai-hint="luxury property" src={`https://picsum.photos/seed/${prop.imageSeed}/800/1000`} alt={prop.name} width={800} height={1000} className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold">{prop.name}</h3>
                            <p className="text-gray-400 flex items-center gap-2 mt-1"><MapPin size={14}/> {prop.location}</p>
                            <p className="text-lg mt-2">${prop.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-32 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight">The Art of Luxury Real Estate</h2>
                <p className="text-gray-400 leading-relaxed">
                    With decades of experience in the high-end market, we offer our discerning clientele access to a portfolio of exclusive, off-market properties and provide a level of service that is as exceptional as the homes we represent. Our expertise is not just in transactions, but in understanding a lifestyle.
                </p>
                 <Button variant="outline" className="border-gray-500 hover:bg-white hover:text-black">Meet the Team <ArrowRight className="ml-2"/></Button>
            </div>
            <div>
                 <Image data-ai-hint="luxury interior" src={`https://picsum.photos/seed/lux-re-int/600/700`} alt="A luxurious modern interior" width={600} height={700} className="object-cover" />
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight">Private Inquiries</h2>
            <p className="mt-4 text-lg max-w-xl mx-auto text-gray-400">For a confidential consultation regarding your real estate ambitions, please contact our principal broker.</p>
            <Button size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">Request Consultation</Button>
        </div>
      </section>
    </div>
  )
}
