'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WebDeveloper({ template }: { template: any }) {
    const projects = [
        {
            title: "QuantumLeap - SaaS Dashboard",
            description: "A complex data visualization dashboard for a SaaS product, built with React, D3.js, and a Node.js backend. Features real-time data updates via WebSockets.",
            tech: ["React", "TypeScript", "Node.js", "D3.js", "PostgreSQL"],
            imageSeed: "dev1",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "NexaCommerce - Headless E-commerce",
            description: "A blazing-fast e-commerce storefront using Next.js with Shopify as a headless CMS. Optimized for performance and SEO, achieving a 98/100 Lighthouse score.",
            tech: ["Next.js", "Shopify API", "GraphQL", "Tailwind CSS"],
            imageSeed: "dev2",
            liveUrl: "#",
            githubUrl: "#"
        },
    ];

    const skills = ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Python", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "AWS"];
  return (
    <div className="w-full bg-gray-900 text-gray-100 font-mono">
       {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-20 border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link href="#" className="flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            <span className="text-lg font-semibold">{template.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="hover:text-green-400">/about</Link>
            <Link href="#work" className="hover:text-green-400">/work</Link>
            <Link href="#contact" className="hover:text-green-400">/contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
            <p className="text-green-400">Hi, my name is {template.name}. I'm a...</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mt-2">
                Full-Stack Web Developer
            </h1>
            <p className="mt-6 text-lg text-gray-400">
                I build robust, scalable, and performant web applications from front to back. Passionate about clean code and great user experiences.
            </p>
             <div className="flex gap-4 mt-8">
                <Button asChild className="bg-green-400 text-black hover:bg-green-300">
                    <Link href="#contact">Get in Touch</Link>
                </Button>
                 <Button asChild variant="outline" className="text-green-400 border-green-400 hover:bg-green-400/10">
                     <Link href="#work">View My Work</Link>
                 </Button>
            </div>
        </div>
      </section>
      
      {/* Featured Work */}
       <section id="work" className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-green-400">01.</span> Selected Projects
            </h2>
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                        <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
                             <Image data-ai-hint="website screenshot" src={`https://picsum.photos/seed/${project.imageSeed}/800/600`} alt={project.title} width={800} height={600} className="rounded-lg object-cover border-2 border-gray-700" />
                        </div>
                        <div className={`space-y-4 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                            <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => <Badge key={t} variant="secondary" className="bg-gray-700 text-green-300 border-gray-600">{t}</Badge>)}
                            </div>
                            <div className="flex gap-4 pt-2">
                                <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 hover:text-green-400"><ExternalLink size={18}/> Live Site</Link>
                                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 hover:text-green-400"><Github size={18}/> View Code</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </section>

      {/* Skills */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
                 <span className="text-green-400">02.</span> My Toolkit
            </h2>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {skills.map(skill => (
                    <div key={skill} className="px-4 py-2 bg-gray-800 rounded-md text-gray-300 text-sm">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
      </section>

       {/* Contact */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold"> <span className="text-green-400">03.</span> Get In Touch</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-gray-400">
            I'm currently available for freelance work and open to new opportunities. Let's build something great together.
          </p>
          <a href="mailto:hello@example.com" className="mt-8 inline-block text-lg text-green-400 border border-green-400 px-8 py-3 hover:bg-green-400/10 transition-colors">
            hello@example.com
          </a>
          <div className="flex justify-center gap-6 mt-10">
            <Link href="#"><Github className="w-7 h-7 hover:text-green-400" /></Link>
            <Link href="#"><Linkedin className="w-7 h-7 hover:text-green-400" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
