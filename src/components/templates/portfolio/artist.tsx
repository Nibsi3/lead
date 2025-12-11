'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Artist({ template }: { template: any }) {
    const works = [
        { title: "Ephemeral Bloom", year: "2023", medium: "Oil on Canvas", imageSeed: "art1" },
        { title: "Concrete Dreams", year: "2022", medium: "Mixed Media", imageSeed: "art2" },
        { title: "Ocean's Whisper", year: "2023", medium: "Acrylic on Wood Panel", imageSeed: "art3" },
        { title: "City of Glass", year: "2021", medium: "Digital Painting", imageSeed: "art4" },
    ];
  return (
    <div className="w-full bg-stone-100 text-stone-800 font-light">
       {/* Header */}
      <header className="sticky top-0 bg-stone-100/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
            <div className="flex flex-col items-center">
                <Link href="#" className="text-2xl font-medium tracking-widest uppercase">{template.name}</Link>
                <span className="text-xs tracking-wider text-stone-500">Visual Artist</span>
            </div>
          <nav className="hidden md:flex items-center gap-6 text-sm tracking-wide">
            <Link href="#work" className="hover:text-primary">Work</Link>
            <Link href="#about" className="hover:text-primary">Statement</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
                 <Image data-ai-hint="abstract painting" src={`https://picsum.photos/seed/art-hero/1200/800`} alt="Featured artwork" width={1200} height={800} className="object-cover"/>
            </div>
            <div className="md:col-span-2 space-y-4">
                <h1 className="text-4xl font-medium tracking-tight">Exploring the space between memory and reality.</h1>
                <p className="text-stone-600">A collection of recent works.</p>
                <Button variant="link" className="p-0 text-base text-stone-800">
                    View Available Pieces <ArrowRight className="ml-2 w-4 h-4"/>
                </Button>
            </div>
        </div>
      </section>
      
      {/* Selected Works */}
      <section id="work" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-medium tracking-tight mb-12">Selected Works</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {works.map(work => (
                    <div key={work.title} className="group">
                        <div className="overflow-hidden">
                            <Image data-ai-hint="art painting" src={`https://picsum.photos/seed/${work.imageSeed}/800/1000`} alt={work.title} width={800} height={1000} className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"/>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">{work.title}</h3>
                            <p className="text-sm text-stone-500">{work.medium}, {work.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
                <h2 className="text-3xl font-medium tracking-tight">Artist Statement</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-lg text-stone-700 leading-relaxed">
                <p>My work investigates the fragile nature of memory and its relationship with the tangible world. I use layers of paint, texture, and fragmented imagery to construct and deconstruct narratives, inviting the viewer to piece together their own interpretations.</p>
                <p>Each canvas is a dialogue between the past and present, the seen and the unseen. I'm fascinated by how landscapes hold onto history and how personal objects can become vessels of collective experience. My process is intuitive, a dance between control and chaos, resulting in works that feel both familiar and dreamlike.</p>
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight">Inquiries</h2>
          <p className="mt-2 text-stone-600 max-w-lg mx-auto">For commissions, studio visits, or questions about available work, please get in touch.</p>
          <div className="mt-8 flex justify-center items-center gap-6">
            <a href="mailto:contact@artist.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-5 h-5"/> contact@artist.com</a>
            <a href="#" className="flex items-center gap-2 hover:text-primary"><Instagram className="w-5 h-5"/> @artistname</a>
          </div>
        </div>
      </section>
    </div>
  )
}
