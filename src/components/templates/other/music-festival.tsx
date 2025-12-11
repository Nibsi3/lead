'use client'

import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MusicFestival({ template }: { template: any }) {
    const lineup = ["The Cosmic Drifters", "Aurora Bloom", "Static Waves", "Echo Collective", "Solaris", "Midnight Tides"];

  return (
    <div className="w-full bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
          <Link href="#" className="text-3xl font-black tracking-widest uppercase">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase">
            <Link href="#lineup" className="hover:text-fuchsia-400">Lineup</Link>
            <Link href="#tickets" className="hover:text-fuchsia-400">Tickets</Link>
            <Link href="#info" className="hover:text-fuchsia-400">Info</Link>
          </nav>
        </div>
      </header>

       {/* Hero */}
       <section className="relative h-screen w-full flex items-center justify-center text-center">
         <Image data-ai-hint="concert crowd" src={template.previewUrl} alt="Crowd at a music festival" fill className="object-cover opacity-30"/>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
         <div className="relative z-10 px-4">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
                Etherea Fest
            </h1>
            <p className="mt-4 text-2xl font-semibold">October 25-27, 2024 | Starfall Valley</p>
         </div>
      </section>

      {/* Lineup */}
       <section id="lineup" className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl font-black tracking-tighter uppercase mb-12">The Lineup</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {lineup.map((artist, index) => (
                    <div key={artist} className={`text-4xl md:text-5xl font-bold tracking-wider uppercase ${index < 3 ? 'text-white' : 'text-fuchsia-400'}`}>
                        {artist}
                    </div>
                ))}
                <p className="text-2xl text-slate-400 pt-4">+ Many More To Be Announced</p>
            </div>
        </div>
       </section>

       {/* Tickets */}
       <section id="tickets" className="py-20 md:py-32 bg-gradient-to-br from-fuchsia-950/50 to-cyan-950/50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl font-black tracking-tighter uppercase mb-8">Get Your Tickets</h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
                Experience three days of music, art, and community under the stars.
            </p>
            <Button size="lg" className="mt-8 h-16 px-12 text-2xl font-bold uppercase bg-cyan-400 text-black hover:bg-cyan-300">
                <Ticket className="mr-4"/> Buy Tickets
            </Button>
        </div>
       </section>
    </div>
  )
}
