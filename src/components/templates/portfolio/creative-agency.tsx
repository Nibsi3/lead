'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CreativeAgency({ template }: { template: any }) {
  const projects = [
    {
      client: "Stellar",
      service: "Brand Identity & Launch Campaign",
      imageSeed: "ca1",
      url: "#"
    },
    {
      client: "Aperture",
      service: "Interactive Web Experience",
      imageSeed: "ca2",
      url: "#"
    },
    {
      client: "Momentum",
      service: "Social Content Series",
      imageSeed: "ca3",
      url: "#"
    },
  ];
  return (
    <div className="w-full bg-white text-black font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
          <Link href="#" className="text-2xl font-black tracking-tighter uppercase">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase">
            <Link href="#work" className="hover:opacity-70">Work</Link>
            <Link href="#services" className="hover:opacity-70">Services</Link>
            <Link href="#contact" className="hover:opacity-70">Contact</Link>
          </nav>
          <Button variant="outline" className="rounded-full border-black hover:bg-black hover:text-white uppercase hidden md:flex">Let's Talk</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-40 pb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Culture-Defining <br/>Creative.
        </h1>
      </section>
      
      {/* Reel */}
      <section className="container mx-auto px-4 mb-20">
        <div className="relative aspect-video w-full group cursor-pointer">
            <Image data-ai-hint="abstract motion graphic" src={template.previewUrl} alt="Agency reel thumbnail" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white text-black rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-black" />
                </div>
            </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold uppercase tracking-tight mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(project => (
              <Link href={project.url} key={project.client} className="group">
                <div className="overflow-hidden">
                   <Image data-ai-hint="brand design" src={`https://picsum.photos/seed/${project.imageSeed}/800/1000`} alt={project.client} width={800} height={1000} className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold uppercase">{project.client}</h3>
                  <p className="text-sm text-gray-500">{project.service}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-center text-4xl font-bold uppercase tracking-tight mb-12">Our Capabilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-8 text-lg font-semibold">
                <div>Strategy</div>
                <div>Branding</div>
                <div>Campaigns</div>
                <div>Web & Interactive</div>
                <div>Social Media</div>
                <div>Content Production</div>
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Start a Project</h2>
            <p className="mt-4 text-lg max-w-lg mx-auto text-gray-400">We partner with ambitious brands to create work that makes a difference.</p>
            <Button size="lg" variant="secondary" className="mt-8 rounded-full uppercase font-bold tracking-widest">
                hello@agency.com
            </Button>
        </div>
      </section>
    </div>
  )
}
