'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Disc, Instagram, Mic, Music, PlayCircle, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Musician({ template }: { template: any }) {
    const latestRelease = {
        title: "Echoes in the Static",
        type: "Album",
        year: "2024",
        imageSeed: "music-album",
    };
    const tourDates = [
        { date: "Oct 15, 2024", city: "New York, NY", venue: "The Bowery Ballroom" },
        { date: "Oct 18, 2024", city: "Chicago, IL", venue: "Thalia Hall" },
        { date: "Oct 22, 2024", city: "Los Angeles, CA", venue: "The Fonda Theatre" },
        { date: "Oct 25, 2024", city: "San Francisco, CA", venue: "The Fillmore" },
    ];
  return (
    <div className="w-full bg-[#121212] text-white font-sans">
      {/* Header */}
       <header className="sticky top-0 bg-[#121212]/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-3xl font-black tracking-tighter uppercase">{template.name}</Link>
             <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider">
                <Link href="#music" className="hover:text-green-400">Music</Link>
                <Link href="#tour" className="hover:text-green-400">Tour</Link>
                <Link href="#contact" className="hover:text-green-400">Contact</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] w-full flex items-center">
        <Image data-ai-hint="musician portrait" src={template.previewUrl} alt="Musician portrait" fill className="object-cover object-top opacity-50" priority/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
        <div className="relative container mx-auto px-4">
             <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">New Album Out Now</h1>
                <p className="mt-4 text-2xl font-semibold tracking-wide">{latestRelease.title}</p>
                <Button size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-black font-bold tracking-wider">
                    <PlayCircle className="mr-2"/> Listen Now
                </Button>
            </div>
        </div>
      </section>
      
      {/* Music Section */}
      <section id="music" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="album cover" src={`https://picsum.photos/seed/${latestRelease.imageSeed}/800/800`} alt={latestRelease.title} width={800} height={800} className="rounded-lg shadow-2xl shadow-green-500/20"/>
            </div>
             <div className="space-y-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500">{latestRelease.type} &bull; {latestRelease.year}</Badge>
                <h2 className="text-4xl font-bold">{latestRelease.title}</h2>
                <p className="text-gray-400">The latest full-length album, an exploration of ambient soundscapes and electronic beats. Available everywhere.</p>
                <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-800"><Music className="mr-2"/> Spotify</Button>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-800"><Music className="mr-2"/> Apple Music</Button>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-800"><Youtube className="mr-2"/> YouTube</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Tour Dates */}
      <section id="tour" className="py-16 md:py-24 bg-black/50">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">On Tour</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {tourDates.map(date => (
                    <div key={date.city} className="grid grid-cols-3 gap-4 items-center p-4 border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <div className="font-semibold">{date.date}</div>
                        <div className="text-gray-300">{date.city}</div>
                        <div className="text-right">
                             <Button variant="ghost" className="hover:bg-green-500/20 hover:text-green-400">Tickets</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Contact/Booking */}
      <section id="contact" className="py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Booking & Inquiries</h2>
            <p className="mt-2 text-gray-400 max-w-lg mx-auto">For booking, press, or any other inquiries, please reach out to my management.</p>
            <a href="mailto:booking@artist.com" className="mt-6 inline-block text-lg text-green-400 hover:underline">booking@artist.com</a>
            <div className="flex justify-center gap-6 mt-10">
                <Link href="#"><Instagram className="w-6 h-6 hover:text-green-400"/></Link>
                <Link href="#"><Youtube className="w-6 h-6 hover:text-green-400"/></Link>
                <Link href="#"><Music className="w-6 h-6 hover:text-green-400"/></Link>
            </div>
         </div>
      </section>

    </div>
  )
}
