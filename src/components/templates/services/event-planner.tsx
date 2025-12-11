'use client'

import { Button } from "@/components/ui/button";
import { Calendar, PartyPopper, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventPlanner({ template }: { template: any }) {
  const events = [
      { name: "Weddings", imageSeed: "ep1", icon: <Heart/> },
      { name: "Corporate", imageSeed: "ep2", icon: <Calendar/> },
      { name: "Social", imageSeed: "ep3", icon: <PartyPopper/> },
  ];
  const gallery = ["gal1", "gal2", "gal3", "gal4"];
  return (
    <div className="w-full bg-white text-slate-800" style={{fontFamily: "'Playfair Display', serif"}}>
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
          <Link href="#" className="text-3xl font-bold tracking-tight">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#gallery" className="hover:text-primary">Gallery</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] w-full">
         <Image data-ai-hint="elegant event" src={template.previewUrl} alt="Beautifully decorated event space" fill className="object-cover" priority/>
         <div className="absolute inset-0 bg-black/40"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
             <h1 className="text-5xl md:text-7xl font-bold">Creating Moments, <br/> Crafting Memories.</h1>
             <p className="mt-4 text-xl max-w-2xl">Full-service event planning and design for life's most important celebrations.</p>
         </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {events.map(event => (
                     <div key={event.name} className="relative group overflow-hidden rounded-lg">
                        <Image data-ai-hint="event details" src={`https://picsum.photos/seed/${event.imageSeed}/600/800`} alt={event.name} width={600} height={800} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                            <div className="mb-2">{event.icon}</div>
                            <h3 className="text-3xl font-bold">{event.name}</h3>
                        </div>
                     </div>
                ))}
            </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-bold">Flawless Execution, Inspired Design</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We believe that every event should be a unique reflection of its host. Our philosophy is built on a foundation of collaboration, creativity, and meticulous attention to detail. From the grandest gestures to the smallest personal touches, we handle every aspect of the planning process, ensuring a seamless and stress-free experience for you and an unforgettable one for your guests.
            </p>
        </div>
      </section>
      
       {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.map(img => (
                    <div key={img} className="aspect-square overflow-hidden rounded-lg">
                        <Image data-ai-hint="event decor" src={`https://picsum.photos/seed/${img}/600/600`} alt="Event gallery image" width={600} height={600} className="object-cover w-full h-full"/>
                    </div>
                ))}
            </div>
        </div>
      </section>

       {/* Contact */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Let's Plan Your Next Event</h2>
             <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
                Contact us to schedule a complimentary consultation.
            </p>
            <Button size="lg" variant="secondary" className="mt-8 bg-white text-slate-800 hover:bg-slate-200">
                Inquire Now
            </Button>
        </div>
      </section>
    </div>
  )
}
