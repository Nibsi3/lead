'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Conference({ template }: { template: any }) {
    const speakers = [
        { name: "Jane Doe", title: "CEO, Innovate Inc.", imageSeed: "conf-sp1" },
        { name: "John Smith", title: "Lead AI Researcher, Future Labs", imageSeed: "conf-sp2" },
        { name: "Alex Johnson", title: "Author, 'The Digital Frontier'", imageSeed: "conf-sp3" },
    ];
  return (
    <div className="w-full bg-slate-900 text-white">
       {/* Header */}
      <header className="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-20 border-b border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl">{template.name} 2024</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#speakers" className="hover:text-primary">Speakers</Link>
            <Link href="#schedule" className="hover:text-primary">Schedule</Link>
            <Link href="#venue" className="hover:text-primary">Venue</Link>
          </nav>
          <Button>Register Now</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-36 text-center relative">
        <div className="absolute inset-0 bg-grid-slate-700/10"></div>
        <div className="relative container mx-auto px-4">
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">The Future of Technology</h1>
             <p className="mt-4 text-xl text-slate-300">Join industry leaders, innovators, and visionaries for two days of inspiration and networking.</p>
             <p className="mt-8 text-2xl font-semibold flex items-center justify-center gap-3"><Calendar/> October 28-29, 2024</p>
             <Button size="lg" className="mt-8">Get Your Tickets</Button>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Speakers</h2>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {speakers.map(speaker => (
                    <div key={speaker.name} className="text-center">
                        <Image data-ai-hint="professional headshot" src={`https://picsum.photos/seed/${speaker.imageSeed}/400/400`} alt={speaker.name} width={400} height={400} className="rounded-full aspect-square object-cover w-40 mx-auto"/>
                        <h3 className="text-xl font-bold mt-4">{speaker.name}</h3>
                        <p className="text-sm text-primary">{speaker.title}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Schedule */}
       <section id="schedule" className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-bold">Event Schedule</h2>
            <p className="mt-2 text-slate-400">Two full days of talks, workshops, and networking.</p>
            <Button variant="outline" className="mt-8 bg-transparent hover:bg-slate-800">View Full Schedule</Button>
        </div>
       </section>

       {/* Venue */}
      <section id="venue" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                 <h2 className="text-4xl font-bold">The Venue</h2>
                 <p className="text-2xl text-slate-300">The Grand Convention Center</p>
                 <p className="flex items-center gap-2 text-lg"><MapPin/> 123 Innovation Drive, Tech City</p>
                 <p className="text-slate-400">Located in the heart of the city, the Grand Convention Center offers state-of-the-art facilities and is easily accessible by public transport.</p>
            </div>
             <div>
                <Image data-ai-hint="conference venue" src={template.previewUrl} alt="Conference venue" width={600} height={450} className="rounded-lg" />
            </div>
        </div>
      </section>
    </div>
  )
}
