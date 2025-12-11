'use client'

import { Button } from "@/components/ui/button";
import { Clapperboard, Film, Play, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Filmmaker({ template }: { template: any }) {
    const projects = [
        {
            title: "SOLARIS",
            category: "Narrative Short",
            imageSeed: "film1",
            description: "A sci-fi short about a lone astronaut confronting a cosmic entity."
        },
        {
            title: "Nike: Find Your Pace",
            category: "Commercial",
            imageSeed: "film2",
            description: "A high-energy commercial spot celebrating the runner's journey."
        },
        {
            title: "Evergreen",
            category: "Documentary Feature",
            imageSeed: "film3",
            description: "An intimate look at the lives of forest firefighters on the front lines."
        },
    ];
  return (
    <div className="w-full bg-black text-white font-sans">
        {/* Header */}
        <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-20">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <Link href="#" className="text-xl font-bold tracking-widest uppercase">{template.name}</Link>
                <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wider">
                    <Link href="#work" className="hover:text-gray-400">Work</Link>
                    <Link href="#about" className="hover:text-gray-400">About</Link>
                    <Link href="#contact" className="hover:text-gray-400">Contact</Link>
                </nav>
            </div>
        </header>

      {/* Hero - Full Screen Video */}
      <section className="relative h-screen w-full">
        <Image data-ai-hint="cinematic film still" src={template.previewUrl} alt="Cinematic film still" fill className="object-cover opacity-60" priority/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
        <div className="relative h-full flex flex-col justify-center px-4 container mx-auto">
            <div className="max-w-md">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">{template.description}</h1>
                <Button size="lg" className="mt-8 gap-2 bg-white text-black hover:bg-gray-200">
                    <Play/> Watch Showreel
                </Button>
            </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold uppercase tracking-wider mb-12">Selected Work</h2>
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <div key={index} className="group relative">
                         <Image data-ai-hint="cinematic film still" src={`https://picsum.photos/seed/${project.imageSeed}/1600/900`} alt={project.title} width={1600} height={900} className="object-cover"/>
                         <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-3xl font-bold uppercase tracking-wider">{project.title}</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400 mt-1">{project.category}</p>
                            <p className="max-w-md mt-4 text-gray-200">{project.description}</p>
                            <Play className="w-16 h-16 mt-6"/>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-900">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold uppercase tracking-wider">About</h2>
                <p className="text-gray-400 leading-relaxed">
                    I am a director and cinematographer with a passion for visual storytelling. From commercials to feature films, my work is driven by a desire to create emotionally resonant and visually striking narratives. I believe in the power of film to transport audiences, challenge perspectives, and connect us to our shared humanity.
                </p>
                 <p className="text-gray-400 leading-relaxed">
                    With a background in fine art photography, I bring a meticulous eye for composition and light to every project.
                </p>
            </div>
            <div>
                 <Image data-ai-hint="filmmaker portrait" src="https://picsum.photos/seed/filmmaker-portrait/600/700" alt="Portrait of the filmmaker" width={600} height={700} className="rounded-lg object-cover grayscale"/>
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold uppercase tracking-wider">Let's Collaborate</h2>
             <p className="mt-2 text-gray-400 max-w-lg mx-auto">Have a script or an idea? I'm always looking for compelling stories to bring to the screen.</p>
             <a href="mailto:contact@filmmaker.com" className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-gray-600 px-8 py-3 text-lg font-semibold transition-colors hover:bg-white hover:text-black">
                <Send className="-translate-x-1 group-hover:translate-x-0 transition-transform"/>
                <span>Get in Touch</span>
            </a>
        </div>
      </section>
    </div>
  )
}
