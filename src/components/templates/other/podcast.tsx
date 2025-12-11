'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Mic, Play, Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Podcast({ template }: { template: any }) {
    const episodes = [
        { num: 42, title: "The Art of Doing Nothing", guest: "John Smith", date: "Oct 15, 2024" },
        { num: 41, title: "Building Habits That Stick", guest: "Dr. Jane Doe", date: "Oct 8, 2024" },
        { num: 40, title: "The Science of Sleep", guest: "Prof. Alex Johnson", date: "Oct 1, 2024" },
    ];
  return (
    <div className="w-full bg-slate-900 text-white">
      {/* Header */}
       <header className="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-20 border-b border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><Mic className="text-primary"/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#episodes" className="hover:text-primary">Episodes</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
          </nav>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">Subscribe</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">Conversations that Inspire.</h1>
                <p className="text-lg text-slate-300">
                    Join us every week as we dive deep into topics on creativity, productivity, and personal growth with leading experts and thinkers.
                </p>
                <div className="flex gap-4 pt-4">
                    <Button size="lg" className="gap-2"><Play/> Listen to Latest Episode</Button>
                    <Button size="lg" variant="secondary" className="gap-2"><Rss/> Subscribe</Button>
                </div>
            </div>
            <div>
                 <Image data-ai-hint="podcast cover" src={template.previewUrl} alt="Podcast cover art" width={500} height={500} className="rounded-lg shadow-2xl shadow-primary/20 mx-auto" />
            </div>
        </div>
      </section>
      
      {/* Episodes */}
      <section id="episodes" className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Latest Episodes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
                {episodes.map(ep => (
                    <Card key={ep.num} className="bg-slate-800/50 border-slate-700 flex flex-col md:flex-row items-center gap-6 p-6">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-slate-400">Episode {ep.num}</p>
                            <h3 className="text-xl font-bold mt-1">{ep.title}</h3>
                            <p className="text-sm text-primary mt-1">with {ep.guest}</p>
                            <p className="text-xs text-slate-500 mt-2">{ep.date}</p>
                        </div>
                        <Button variant="ghost" className="md:ml-auto rounded-full w-16 h-16"><Play className="w-8 h-8"/></Button>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
    </div>
  )
}
