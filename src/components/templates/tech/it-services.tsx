'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CheckCircle, HardDrive, Server, Cloud, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ItServices({ template }: { template: any }) {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl text-primary">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#about" className="hover:text-primary">Why Us</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button>Get a Free Quote</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Reliable IT Solutions for Modern Businesses.</h1>
                <p className="text-lg text-muted-foreground">
                    From cloud infrastructure to 24/7 helpdesk support, we manage your technology so you can focus on your business.
                </p>
                <Button size="lg">Explore Our Services</Button>
            </div>
             <div>
                 <Image data-ai-hint="data center" src={template.previewUrl} alt="Server room with network equipment" width={600} height={450} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Our Services</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Comprehensive IT support tailored to your needs.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card><CardHeader><Cloud className="w-6 h-6 mb-2 text-primary"/><CardTitle>Cloud Services</CardTitle></CardHeader></Card>
                <Card><CardHeader><Shield className="w-6 h-6 mb-2 text-primary"/><CardTitle>Cybersecurity</CardTitle></CardHeader></Card>
                <Card><CardHeader><Server className="w-6 h-6 mb-2 text-primary"/><CardTitle>Managed IT</CardTitle></CardHeader></Card>
                <Card><CardHeader><HardDrive className="w-6 h-6 mb-2 text-primary"/><CardTitle>Data Backup</CardTitle></CardHeader></Card>
            </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                 <Image data-ai-hint="it support" src="https://picsum.photos/seed/it-support/600/450" alt="IT professional helping a customer" width={600} height={450} className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
                <h2 className="text-3xl font-bold font-headline">Your Partner in Technology</h2>
                <p className="text-muted-foreground text-lg">We're more than just a service provider; we're an extension of your team. Our proactive approach ensures your IT infrastructure is always secure, efficient, and aligned with your business goals.</p>
                <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-primary w-5 h-5"/> 24/7/365 Proactive Monitoring</li>
                    <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-primary w-5 h-5"/> Certified & Experienced Technicians</li>
                    <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-primary w-5 h-5"/> Strategic IT Planning & Consulting</li>
                </ul>
            </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline">Ready for Stress-Free IT?</h2>
             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Let's talk about how we can support your business's technology needs. Contact us today for a free, no-obligation assessment.
            </p>
            <Button size="lg" className="mt-8">Schedule Your Free Assessment</Button>
        </div>
      </section>
    </div>
  )
}
