'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Construction, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewDevelopments({ template }: { template: any }) {
    const developments = [
        { name: "The Azure Residences", location: "Downtown Waterfront", status: "Now Selling", imageSeed: "dev1" },
        { name: "Evergreen Lofts", location: "Artisan District", status: "Coming Soon", imageSeed: "dev2" },
        { name: "Pinnacle Towers", location: "Financial District", status: "Construction Phase", imageSeed: "dev3" },
    ];
  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-20 border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="flex items-center gap-2">
            <Building className="w-6 h-6 text-cyan-400"/>
            <span className="text-xl font-semibold tracking-tight">{template.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#developments" className="hover:text-cyan-400">Developments</Link>
            <Link href="#about" className="hover:text-cyan-400">About</Link>
            <Link href="#contact" className="hover:text-cyan-400">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center">
         <Image data-ai-hint="architectural model" src={template.previewUrl} alt="Architectural model of a modern building" fill className="object-cover opacity-30" priority/>
         <div className="relative px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">The Future of Urban Living</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Presenting a portfolio of visionary residential and commercial developments designed for tomorrow.
            </p>
         </div>
      </section>

       {/* Developments */}
      <section id="developments" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mb-12">Our Developments</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {developments.map(dev => (
                    <Card key={dev.name} className="bg-gray-800 border-gray-700 text-white group overflow-hidden">
                        <div className="relative">
                            <Image data-ai-hint="modern building" src={`https://picsum.photos/seed/${dev.imageSeed}/600/400`} alt={dev.name} width={600} height={400} className="object-cover aspect-video"/>
                            <Badge className="absolute top-4 right-4 bg-cyan-400 text-black">{dev.status}</Badge>
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold">{dev.name}</h3>
                            <p className="text-gray-400 flex items-center gap-2 mt-1"><MapPin size={14}/> {dev.location}</p>
                            <Button variant="link" className="text-cyan-400 p-0 mt-4">
                                Explore <ArrowRight className="ml-2"/>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">Pioneering Design, Unwavering Quality</h2>
                <p className="text-gray-400 leading-relaxed">
                    With over 30 years of experience, we have built a reputation for excellence in property development. Our commitment is to creating landmark projects that not only define skylines but also enhance communities. We integrate sustainable practices, cutting-edge technology, and world-class architecture to build for the future.
                </p>
            </div>
            <div>
                 <Image data-ai-hint="construction site" src={`https://picsum.photos/seed/dev-build/600/450`} alt="Construction site with a crane" width={600} height={450} className="rounded-lg"/>
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold">Register Your Interest</h2>
            <p className="mt-2 text-gray-400">Join our priority list for exclusive updates on upcoming projects, floor plans, and pricing information.</p>
            <Button size="lg" className="mt-8 bg-cyan-400 text-black hover:bg-cyan-300">Register Now</Button>
        </div>
      </section>
    </div>
  )
}
