'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, Fingerprint, Siren, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cybersecurity({ template }: { template: any }) {
    const services = [
        { icon: <Siren/>, title: "Threat Detection", description: "24/7 monitoring and real-time alerts to identify threats before they strike." },
        { icon: <Fingerprint/>, title: "Identity & Access", description: "Secure your digital identities and enforce least-privilege access." },
        { icon: <Activity/>, title: "Incident Response", description: "Rapid response and recovery services to minimize damage from breaches." },
    ]
  return (
    <div className="w-full bg-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-20 border-b border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold flex items-center gap-2 text-primary">
            <Shield/> {template.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#platform" className="hover:text-primary">Platform</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">Get a Security Audit</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-36 relative">
        <div className="absolute inset-0 bg-grid-slate-700/10"></div>
        <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Proactive Cyber Defense</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                We provide next-generation cybersecurity solutions to protect your organization's most critical assets from evolving threats.
            </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our Security Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <div className="text-primary mb-2">{service.icon}</div>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-400">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold">Strengthen Your Security Posture</h2>
            <p className="mt-2 text-slate-400">
                Contact our experts today for a confidential consultation and learn how we can protect your business.
            </p>
            <Button size="lg" className="mt-8">Request Consultation</Button>
        </div>
      </section>
    </div>
  )
}
