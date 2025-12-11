'use client'

import { Button } from "@/components/ui/button";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Photographer({ template }: { template: any }) {
    const gallery = [
        { id: 1, seed: 'photo1', alt: 'Woman in a red dress in a forest', category: 'Portrait' },
        { id: 2, seed: 'photo2', alt: 'Misty mountain landscape at sunrise', category: 'Landscape' },
        { id: 3, seed: 'photo3', alt: 'City street at night with neon lights', category: 'Street' },
        { id: 4, seed: 'photo4', alt: 'Bride and groom smiling', category: 'Wedding' },
        { id: 5, seed: 'photo5', alt: 'Close up of a dew-covered leaf', category: 'Nature' },
        { id: 6, seed: 'photo6', alt: 'Modern architectural building', category: 'Architecture' },
    ];
  return (
    <div className="w-full bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-2xl font-bold tracking-wider">{template.name}</Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="#portfolio" className="hover:text-gray-300">Portfolio</Link>
                <Link href="#about" className="hover:text-gray-300">About</Link>
                <Link href="#contact" className="hover:text-gray-300">Contact</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full">
        <Image data-ai-hint="dramatic landscape" src={template.previewUrl} alt="Dramatic landscape" fill className="object-cover" priority/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{template.description}</h1>
            <p className="mt-4 text-lg text-gray-200">Capturing moments that tell a story.</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
            </div>
            <div className="columns-2 md:columns-3 gap-4">
                {gallery.map(item => (
                     <div key={item.id} className="mb-4 break-inside-avoid group relative">
                        <Image data-ai-hint={item.alt} src={`https://picsum.photos/seed/${item.seed}/800/${Math.floor(Math.random() * 400) + 600}`} alt={item.alt} width={800} height={600} className="rounded-md"/>
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                             <p className="text-white font-semibold">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
                 <Image data-ai-hint="photographer portrait" src="https://picsum.photos/seed/photographer-self/600/700" alt="Portrait of the photographer" width={600} height={700} className="rounded-lg object-cover"/>
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <p className="text-gray-400 leading-relaxed">
                    I'm a passionate photographer with a love for capturing the fleeting moments of beauty in the world. With over a decade of experience, my work spans from breathtaking landscapes to intimate portraits. My camera is an extension of my eye, and my goal is to create images that are not just seen, but felt.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Learn More <ArrowRight className="ml-2 w-4 h-4"/>
                </Button>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-2 text-gray-400 max-w-xl mx-auto">Have a project in mind, or just want to say hello? I'd love to hear from you.</p>
            <div className="flex justify-center gap-6 mt-8">
                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Mail className="mr-2"/> Email Me
                 </Button>
                 <Button size="lg" variant="ghost" className="hover:bg-gray-800">
                    <Instagram className="mr-2"/> Follow on Instagram
                 </Button>
            </div>
        </div>
      </section>
    </div>
  )
}
