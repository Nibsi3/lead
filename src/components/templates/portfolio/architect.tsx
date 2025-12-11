'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, DraftingCompass, Home, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Architect({ template }: { template: any }) {
    const projects = [
        {
            name: "The Hillside Residence",
            location: "Aspen, Colorado",
            imageSeed: "arch1",
            category: "Residential"
        },
        {
            name: "Vantage Point Tower",
            location: "Downtown, Metropolis",
            imageSeed: "arch2",
            category: "Commercial"
        },
        {
            name: "The Serenity Pavilion",
            location: "Kyoto, Japan",
            imageSeed: "arch3",
            category: "Cultural"
        },
    ];
  return (
    <div className="w-full bg-white text-gray-900 font-sans">
        {/* Header */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <Link href="#" className="text-xl font-bold tracking-wider uppercase">{template.name}</Link>
                <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
                    <Link href="#work" className="hover:text-gray-500">Work</Link>
                    <Link href="#studio" className="hover:text-gray-500">Studio</Link>
                    <Link href="#contact" className="hover:text-gray-500">Contact</Link>
                </nav>
            </div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight">
                    Designing spaces that inspire, function, and endure.
                </h1>
            </div>
        </section>

        {/* Featured Projects */}
        <section id="work" className="container mx-auto px-4 pb-16 md:pb-24">
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <div key={index} className="group">
                        <div className="overflow-hidden">
                           <Image data-ai-hint="modern architecture" src={`https://picsum.photos/seed/${project.imageSeed}/1600/900`} alt={project.name} width={1600} height={900} className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                        </div>
                        <div className="flex justify-between items-start mt-4">
                            <div>
                                <h3 className="text-2xl font-medium">{project.name}</h3>
                                <p className="text-gray-500">{project.location}</p>
                            </div>
                             <Link href="#" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                                View Project <ArrowUpRight className="w-4 h-4"/>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
        {/* Studio/About Section */}
        <section id="studio" className="py-16 md:py-24 bg-gray-50 border-y">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-3xl font-medium tracking-tight">The Studio</h2>
                </div>
                <div className="md:col-span-2 space-y-6 text-lg text-gray-700">
                    <p>
                        Founded in 2010, {template.name} is an award-winning architecture and design firm dedicated to the creation of innovative and sustainable built environments. Our philosophy is grounded in a deep respect for context, a passion for material honesty, and a commitment to collaborative creation.
                    </p>
                    <p>
                        We believe that great architecture emerges from a synthesis of form, function, and feeling. It should not only meet the needs of its inhabitants but also elevate their experience of space, light, and material.
                    </p>
                </div>
            </div>
        </section>
        
        {/* Services */}
        <section id="services" className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                 <Card className="p-6 border-gray-200">
                    <DraftingCompass className="w-8 h-8 text-primary mb-4"/>
                    <h3 className="text-xl font-medium">Architectural Design</h3>
                    <p className="text-gray-600 mt-2">From concept to completion, we provide full architectural services for projects of all scales.</p>
                </Card>
                <Card className="p-6 border-gray-200">
                    <Home className="w-8 h-8 text-primary mb-4"/>
                    <h3 className="text-xl font-medium">Interior Design</h3>
                    <p className="text-gray-600 mt-2">Crafting cohesive and beautiful interior spaces that complement the architectural vision.</p>
                </Card>
                <Card className="p-6 border-gray-200">
                    <Building className="w-8 h-8 text-primary mb-4"/>
                    <h3 className="text-xl font-medium">Urban Planning</h3>
                    <p className="text-gray-600 mt-2">Shaping the future of our cities with thoughtful and sustainable master planning.</p>
                </Card>
            </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-medium">Let's build something together.</h2>
                <p className="mt-4 text-lg max-w-lg mx-auto text-gray-300">
                    If you have a project you'd like to discuss, please get in touch.
                </p>
                <Button variant="secondary" size="lg" className="mt-8">
                    Contact The Studio
                </Button>
            </div>
        </section>
    </div>
  )
}
