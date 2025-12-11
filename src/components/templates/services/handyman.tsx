'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Check, Hammer, Lightbulb, Paintbrush, Phone, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Handyman({ template }: { template: any }) {
  const services = [
      { name: "General Repairs", icon: <Wrench/> },
      { name: "Plumbing & Electrical", icon: <Lightbulb/> },
      { name: "Painting", icon: <Paintbrush/> },
      { name: "Assembly & Installation", icon: <Hammer/> },
  ]
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><Wrench className="text-primary"/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button className="hidden md:flex"><Phone className="mr-2"/> Call Now</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your Trusted Home Repair Expert.</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                No job is too small. From leaky faucets to furniture assembly, I provide reliable, high-quality handyman services for all your home needs.
            </p>
            <Button size="lg" className="mt-8">Get a Free Estimate</Button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">How I Can Help</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map(service => (
                    <Card key={service.name} className="text-center">
                        <CardHeader>
                             <div className="mx-auto w-fit bg-primary/10 text-primary p-4 rounded-full mb-4">{service.icon}</div>
                             <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="handyman working" src={template.previewUrl} alt="Handyman fixing a cabinet" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">Honest Work, Fair Prices.</h2>
                <p className="text-slate-600 text-lg">
                    I'm {template.name.split(' ')[0]}, your local handyman. I believe in providing quality workmanship and excellent customer service. With over 15 years of experience, I take pride in every job, ensuring it's done right the first time.
                </p>
                 <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 font-medium"><Check className="text-primary"/> Fully Insured & Licensed</li>
                    <li className="flex items-center gap-2 font-medium"><Check className="text-primary"/> Upfront, Honest Pricing</li>
                    <li className="flex items-center gap-2 font-medium"><Check className="text-primary"/> Satisfaction Guaranteed</li>
                </ul>
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
             <h2 className="text-3xl font-bold">Have a Project?</h2>
             <p className="mt-2 text-slate-600">Call or text me today for a free, no-obligation estimate on your next home repair or improvement project.</p>
             <p className="text-4xl font-bold mt-6 text-primary">(555) 123-4567</p>
        </div>
      </section>
    </div>
  )
}
