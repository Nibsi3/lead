'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HardHat, Home, Wrench, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GeneralContractor({ template }: { template: any }) {
  const services = [
      { title: "New Construction", icon: <Home/> },
      { title: "Major Renovations", icon: <Wrench/> },
      { title: "Commercial Build-Outs", icon: <Building/> },
  ];

  return (
    <div className="w-full bg-slate-900 text-white">
       {/* Header */}
      <header className="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-20 border-b border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><HardHat className="text-yellow-400"/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#projects" className="hover:text-white">Projects</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold hidden md:flex">Get a Quote</Button>
        </div>
      </header>
      
      {/* Hero */}
       <section className="relative h-96 md:h-[32rem] w-full">
         <Image data-ai-hint="construction site" src={template.previewUrl} alt="Construction site with a building frame" fill className="object-cover opacity-30"/>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
             <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Building Visions. Creating Reality.</h1>
             <p className="mt-4 text-lg text-slate-300 max-w-2xl">Your trusted general contractor for quality residential and commercial construction.</p>
         </div>
      </section>

      {/* Services */}
       <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">What We Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="bg-slate-800 border-slate-700 text-center p-6">
                        <div className="text-yellow-400 mx-auto w-fit p-4 bg-slate-700 rounded-full mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* About/Why Us */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="construction blueprints" src="https://picsum.photos/seed/gc-blueprints/600/450" alt="Blueprints on a table at a construction site" width={600} height={450} className="rounded-lg" />
            </div>
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">Quality & Integrity, From the Ground Up.</h2>
                <p className="text-slate-400 text-lg">
                    With over 20 years of experience, we have built a reputation for superior craftsmanship, on-time project delivery, and transparent communication. We treat every project like it's our own, ensuring the highest standards of quality and safety from start to finish.
                </p>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">Our Process</Button>
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-bold">Let's Build Your Next Project</h2>
            <p className="mt-4 text-slate-400">Contact us today to discuss your project and receive a detailed, no-obligation quote.</p>
            <Button size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">Request a Free Quote</Button>
        </div>
      </section>
    </div>
  )
}
