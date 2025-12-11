'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Leaf, Fence, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Landscaping({ template }: { template: any }) {
    const services = [
      { name: "Landscape Design & Installation", icon: <Sprout/> },
      { name: "Lawn Care & Maintenance", icon: <Leaf/> },
      { name: "Hardscaping & Patios", icon: <Fence/> },
    ];
    const gallery = ["land1", "land2", "land3", "land4", "land5", "land6"];
  return (
    <div className="w-full bg-white text-green-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><Leaf/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#services" className="hover:text-green-600">Services</Link>
            <Link href="#gallery" className="hover:text-green-600">Our Work</Link>
            <Link href="#contact" className="hover:text-green-600">Contact</Link>
          </nav>
          <Button className="bg-green-700 hover:bg-green-800">Get a Free Quote</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[70vh] w-full">
         <Image data-ai-hint="beautiful garden" src={template.previewUrl} alt="A lush, beautiful garden" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/40"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
             <h1 className="text-5xl md:text-6xl font-bold">Creating Your Outdoor Oasis.</h1>
             <p className="mt-4 text-lg max-w-2xl">Award-winning landscape design and maintenance for residential and commercial properties.</p>
         </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {services.map(service => (
                    <div key={service.name} className="p-4">
                        <div className="text-green-600 mx-auto w-fit p-4 bg-green-100 rounded-full mb-4">{service.icon}</div>
                        <h3 className="font-bold text-xl">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Work</h2>
                <p className="text-slate-600 mt-2">A portfolio of our recent projects.</p>
            </div>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map(img => (
                    <div key={img} className="aspect-square overflow-hidden rounded-lg">
                        <Image data-ai-hint="landscape design" src={`https://picsum.photos/seed/${img}/600/600`} alt="Landscaping project" width={600} height={600} className="object-cover w-full h-full"/>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
             <blockquote className="text-2xl italic text-slate-700">
                "They completely transformed our backyard into a paradise. The team was professional, creative, and the final result exceeded all of our expectations. We couldn't be happier!"
            </blockquote>
            <p className="mt-4 font-semibold">- The Johnson Family</p>
        </div>
      </section>

       {/* Contact CTA */}
      <section id="contact" className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
                Contact us today for a free, no-obligation consultation with one of our landscape design experts.
            </p>
            <Button size="lg" variant="secondary" className="mt-8 bg-white text-green-800 hover:bg-slate-100">
                Request Your Free Consultation
            </Button>
        </div>
      </section>
    </div>
  )
}
