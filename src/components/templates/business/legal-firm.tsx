'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gavel, Shield, Building, Scale, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LegalFirm({ template }: { template: any }) {
  const attorneys = [
    { name: 'Michael Specter', title: 'Senior Partner', area: 'Corporate Law', avatarSeed: 'atty1' },
    { name: 'Jessica Pearson', title: 'Senior Partner', area: 'Litigation', avatarSeed: 'atty2' },
    { name: 'Louis Marlowe', title: 'Partner', area: 'Real Estate Law', avatarSeed: 'atty3' },
    { name: 'Rachel Zane', title: 'Associate Attorney', area: 'Intellectual Property', avatarSeed: 'atty4' },
  ];
  
  const practiceAreas = [
    { name: "Corporate Law", description: "Advising businesses on mergers, acquisitions, and corporate governance.", icon: <Gavel className="w-10 h-10 text-primary" /> },
    { name: "Commercial Litigation", description: "Representing clients in complex business disputes and arbitration.", icon: <Shield className="w-10 h-10 text-primary" /> },
    { name: "Real Estate", description: "Handling commercial and residential transactions, zoning, and development.", icon: <Building className="w-10 h-10 text-primary" /> },
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <Link href="#" className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl font-headline">{template.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#practice-areas" className="text-sm font-medium hover:text-primary">Practice Areas</Link>
            <Link href="#attorneys" className="text-sm font-medium hover:text-primary">Our Team</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
          </nav>
          <Button variant="outline">Request Consultation</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight">Justice, Integrity, and Excellence</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A results-oriented law firm dedicated to providing exceptional legal representation for corporations and individuals.
        </p>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif">Our Practice Areas</h2>
             <p className="text-muted-foreground mt-2">Specialized expertise across key areas of law.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map(area => (
                <div key={area.name} className="text-center p-6 flex flex-col items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">{area.icon}</div>
                    <h3 className="font-semibold text-xl font-serif">{area.name}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{area.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif">Meet Our Attorneys</h2>
            <p className="text-muted-foreground mt-2">Decades of combined experience at your service.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {attorneys.map(attorney => (
              <Card key={attorney.name} className="overflow-hidden text-center group">
                <div className="overflow-hidden">
                    <Image data-ai-hint="professional headshot" src={`https://picsum.photos/seed/${attorney.avatarSeed}/600/700`} alt={attorney.name} width={600} height={700} className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{attorney.name}</h3>
                  <p className="text-sm text-primary">{attorney.title}</p>
                   <p className="text-xs text-muted-foreground mt-1">{attorney.area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       {/* Testimonial */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium">
              "Their legal expertise and strategic approach were invaluable. They navigated our complex case with the utmost professionalism and achieved a result that exceeded our expectations."
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-lg">John T. Anderson</p>
              <p className="text-muted-foreground">CEO, Anderson Enterprises</p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Banner */}
      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold font-serif">Discuss Your Case With Us</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Your initial consultation is confidential and free of charge. Let us help you find a solution.</p>
          <Button variant="secondary" size="lg" className="mt-6">Book an Appointment</Button>
        </div>
      </section>
    </div>
  )
}
