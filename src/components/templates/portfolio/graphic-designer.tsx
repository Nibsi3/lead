'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dribbble, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GraphicDesigner({ template }: { template: any }) {
  const projects = [
    {
      title: "Rebrand for FinTech Startup 'Volt'",
      category: "Branding, UI/UX",
      imageSeed: "gd1",
      bgColor: "bg-blue-500"
    },
    {
      title: "Packaging Design for 'Aura' Cosmetics",
      category: "Packaging",
      imageSeed: "gd2",
      bgColor: "bg-pink-500"
    },
    {
      title: "Editorial Design for 'Arch' Magazine",
      category: "Editorial",
      imageSeed: "gd3",
      bgColor: "bg-purple-500"
    },
    {
      title: "Mobile App 'Connect' UI Overhaul",
      category: "UI/UX Design",
      imageSeed: "gd4",
      bgColor: "bg-green-500"
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#work" className="hover:text-primary">Work</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Visual solutions that <span className="text-primary">elevate</span> brands.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          I'm a multidisciplinary graphic designer specializing in branding, UI/UX, and illustration. I help businesses communicate clearly and beautifully.
        </p>
      </section>

      {/* Projects Grid */}
      <section id="work" className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className={`p-8 ${project.bgColor}`}>
                <Image data-ai-hint="abstract design graphic" src={`https://picsum.photos/seed/${project.imageSeed}/800/600`} alt={project.title} width={800} height={600} className="rounded-lg object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500" />
              </CardContent>
              <div className="p-6 bg-white">
                <Badge variant="secondary">{project.category}</Badge>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
             <Image data-ai-hint="designer portrait" src="https://picsum.photos/seed/designer-portrait/600/600" alt="Portrait of the designer" width={600} height={600} className="rounded-full aspect-square object-cover" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              With a passion for typography and a keen eye for detail, I've spent the last 8 years crafting visual identities and digital experiences for a diverse range of clients, from fledgling startups to established international brands. My design philosophy is rooted in the belief that good design is about clear communication. It's about solving problems and creating connections.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not pushing pixels, you can find me exploring local art galleries or getting lost in a good book.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-primary-foreground/80">Let's create something amazing together.</p>
          <Button size="lg" variant="secondary" className="mt-8">
            Get in Touch <ArrowRight className="ml-2" />
          </Button>
          <div className="flex justify-center gap-6 mt-10">
            <Link href="#"><Dribbble className="w-6 h-6 hover:text-pink-400" /></Link>
            <Link href="#"><Linkedin className="w-6 h-6 hover:text-blue-400" /></Link>
            <Link href="#"><Twitter className="w-6 h-6 hover:text-sky-400" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
