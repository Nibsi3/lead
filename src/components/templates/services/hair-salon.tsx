'use client'

import { Button } from "@/components/ui/button";
import { Scissors, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HairSalon({ template }: { template: any }) {
  const services = [
      { name: "Haircut & Style", price: "$65+", imageSeed: "salon1" },
      { name: "Color & Highlights", price: "$120+", imageSeed: "salon2" },
      { name: "Special Occasion Styling", price: "$85+", imageSeed: "salon3" },
  ];
  return (
    <div className="w-full bg-white text-gray-800" style={{fontFamily: "'Playfair Display', serif"}}>
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
          <Link href="#" className="text-3xl font-bold tracking-tight">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#stylists" className="hover:text-primary">Stylists</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button className="rounded-none uppercase tracking-widest hidden md:flex">Book Now</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">Elevate Your Style.</h1>
                <p className="text-xl text-gray-600 font-sans">
                    A luxury salon experience dedicated to the art of beautiful hair.
                </p>
                <Button size="lg" className="rounded-none uppercase tracking-widest">Book an Appointment</Button>
            </div>
            <div className="relative h-96 md:h-[32rem]">
                 <Image data-ai-hint="stylish hair" src={template.previewUrl} alt="Woman with a stylish haircut" fill className="object-cover rounded-lg" />
            </div>
        </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <div key={service.name} className="group">
                        <div className="overflow-hidden rounded-lg">
                           <Image data-ai-hint="hair styling" src={`https://picsum.photos/seed/${service.imageSeed}/600/700`} alt={service.name} width={600} height={700} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform"/>
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            <p className="text-gray-500">Starting at {service.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold">Visit Our Salon</h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-sans">
                 <p className="flex items-center gap-2"><MapPin/> 789 Beauty Ave, Style City</p>
                 <p className="flex items-center gap-2"><Phone/> (555) 234-5678</p>
            </div>
            <p className="mt-4 text-gray-600">Walk-ins welcome, appointments recommended.</p>
        </div>
      </section>
    </div>
  )
}
