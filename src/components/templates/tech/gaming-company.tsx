'use client'

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GamingCompany({ template }: { template: any }) {
    const games = [
        { title: "Project: Nebula", genre: "Sci-Fi RPG", imageSeed: "game1" },
        { title: "Velocity Rush", genre: "Arcade Racer", imageSeed: "game2" },
        { title: "Chronosplit", genre: "Puzzle-Platformer", imageSeed: "game3" },
    ];
  return (
    <div className="w-full bg-[#050505] text-white">
        {/* Header */}
        <header className="sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <Link href="#" className="text-2xl font-black tracking-wider">{template.name}</Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase">
                    <Link href="#games" className="hover:text-red-500">Games</Link>
                    <Link href="#careers" className="hover:text-red-500">Careers</Link>
                    <Link href="#news" className="hover:text-red-500">News</Link>
                </nav>
            </div>
        </header>
        
        {/* Hero */}
        <section className="relative h-screen w-full flex items-center justify-center">
            <Image data-ai-hint="fantasy character" src={template.previewUrl} alt="Hero character from a video game" fill className="object-cover opacity-30" priority/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Crafting Worlds, <br/>Telling Stories.</h1>
                <p className="mt-4 text-lg text-slate-300">An independent game studio dedicated to creating immersive and unforgettable experiences.</p>
            </div>
        </section>

        {/* Games */}
        <section id="games" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Games</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {games.map(game => (
                        <div key={game.title} className="group relative overflow-hidden rounded-lg">
                            <Image data-ai-hint="video game art" src={`https://picsum.photos/seed/${game.imageSeed}/600/800`} alt={game.title} width={600} height={800} className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-3xl font-bold">{game.title}</h3>
                                <p className="text-sm uppercase tracking-wider text-red-400">{game.genre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Careers */}
        <section id="careers" className="py-16 md:py-24 bg-red-950/50">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Join Our Team</h2>
                    <p className="text-slate-300 text-lg">
                        We're always looking for passionate and talented individuals to help us build the future of gaming. If you're a storyteller, an artist, or an engineer who wants to create amazing worlds, we want to hear from you.
                    </p>
                    <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                        View Open Positions
                    </Button>
                </div>
                 <div>
                    <Image data-ai-hint="game development" src="https://picsum.photos/seed/gamedev/600/450" alt="Game developers collaborating" width={600} height={450} className="rounded-lg"/>
                </div>
            </div>
        </section>

    </div>
  )
}
