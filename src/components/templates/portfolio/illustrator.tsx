'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Dribbble, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Illustrator({ template }: { template: any }) {
    const portfolio = [
        { imageSeed: "illu1", title: "Forest Spirit" },
        { imageSeed: "illu2", title: "Cybernetic City" },
        { imageSeed: "illu3", title: "Ocean's Depths" },
        { imageSeed: "illu4", title: "Star Gazer" },
        { imageSeed: "illu5", title: "Market Day" },
        { imageSeed: "illu6", title: "The Alchemist's Study" },
    ];

  return (
    <div className="w-full bg-rose-50 text-slate-800">
       {/* Header */}
      <header className="sticky top-0 bg-rose-50/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>{template.name}</Link>
             <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link href="#portfolio" className="hover:text-rose-500">Portfolio</Link>
                <Link href="#about" className="hover:text-rose-500">About</Link>
                <Link href="#contact" className="hover:text-rose-500">Contact</Link>
            </nav>
        </div>
      </header>
      
      {/* Hero */}
       <section className="container mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                Creating whimsical worlds with ink and color.
            </h1>
            <p className="text-lg text-slate-600">
                I'm a freelance illustrator who loves telling stories through playful characters and vibrant environments.
            </p>
        </div>
        <div>
             <Image data-ai-hint="whimsical illustration" src={`https://picsum.photos/seed/illu-hero/800/800`} alt="Whimsical illustration of a character" width={800} height={800} className="rounded-full aspect-square object-cover" />
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mb-12" style={{fontFamily: "'Playfair Display', serif"}}>My Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {portfolio.map(item => (
                    <div key={item.imageSeed} className="group relative aspect-square overflow-hidden rounded-lg">
                         <Image data-ai-hint="colorful illustration" src={`https://picsum.photos/seed/${item.imageSeed}/800/800`} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
             <Image data-ai-hint="artist portrait" src="https://picsum.photos/seed/illu-portrait/120/120" alt="Portrait of the illustrator" width={120} height={120} className="rounded-full mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Hi, I'm {template.name}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Ever since I could hold a crayon, I've been drawing. My work is inspired by fairy tales, nature, and the quiet magic of everyday moments. I use a mix of traditional and digital tools to bring my ideas to life, always striving to create art that brings a little bit of joy and wonder into the world. I'm available for children's books, editorial work, and private commissions.
            </p>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Let's create something together!</h2>
             <p className="mt-2 text-slate-600">I'm currently open for new projects and collaborations.</p>
              <Button asChild size="lg" className="mt-8 bg-rose-500 hover:bg-rose-600">
                <a href="mailto:hello@illustrator.com">Email Me</a>
              </Button>
              <div className="flex justify-center gap-6 mt-10">
                <a href="#" className="text-slate-500 hover:text-rose-500"><Instagram /></a>
                <a href="#" className="text-slate-500 hover:text-rose-500"><Dribbble /></a>
              </div>
        </div>
      </section>
    </div>
  )
}
