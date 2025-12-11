'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Ticket, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArtsCulture({ template }: { template: any }) {
    const events = [
        { title: "Opening Night: 'Chromatic Echoes' Exhibit", date: "Oct 12", imageSeed: "ac1", type: "Exhibition" },
        { title: "An Evening with the Symphony", date: "Oct 18", imageSeed: "ac2", type: "Performance" },
        { title: "Family Art Day: Pottery Workshop", date: "Oct 26", imageSeed: "ac3", type: "Workshop" },
    ];
  return (
    <div className="w-full bg-gray-900 text-white font-sans">
       {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><Palette/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#events" className="hover:text-primary">Events</Link>
            <Link href="#membership" className="hover:text-primary">Membership</Link>
            <Link href="#visit" className="hover:text-primary">Visit</Link>
          </nav>
          <Button variant="secondary">Donate</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="container mx-auto px-4 py-20 md:py-36 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Experience Art. Inspire Community.</h1>
            <p className="text-xl text-gray-300">
                Your home for contemporary art, classic performances, and creative education.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">View Current Exhibitions</Button>
        </div>
        <div>
             <Image data-ai-hint="art gallery" src={template.previewUrl} alt="Interior of a modern art gallery" width={600} height={500} className="rounded-lg" />
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section id="events" className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {events.map(event => (
                    <div key={event.title} className="group relative overflow-hidden rounded-lg">
                         <Image data-ai-hint="performance art" src={`https://picsum.photos/seed/${event.imageSeed}/600/800`} alt={event.title} width={600} height={800} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <Badge className="w-fit bg-primary text-primary-foreground mb-2">{event.type}</Badge>
                            <h3 className="text-2xl font-bold">{event.title}</h3>
                            <p className="font-semibold mt-1 flex items-center gap-2"><Calendar size={16}/> {event.date}</p>
                         </div>
                         <a href="#" className="absolute inset-0"></a>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Membership */}
      <section id="membership" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold">Become a Member</h2>
            <p className="mt-4 text-lg text-gray-300">
                Enjoy a year of inspiration with free admission, exclusive event invitations, and discounts at our store. Your membership provides vital support for our programs and exhibitions.
            </p>
            <Button size="lg" variant="outline" className="mt-8 border-gray-500 hover:bg-gray-800">Join or Renew Today</Button>
        </div>
      </section>

    </div>
  )
}
