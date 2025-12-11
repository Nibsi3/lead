'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Home, Building } from "lucide-react";
import Image from "next/image";

export default function CleaningService({ template }: { template: any }) {
    const services = [
        { name: "Residential Cleaning", description: "Standard, deep clean, and move-in/out services for your home.", icon: <Home/> },
        { name: "Commercial Cleaning", description: "Customized cleaning plans for offices, retail, and other commercial spaces.", icon: <Building/> },
        { name: "Specialty Services", description: "Carpet cleaning, window washing, and post-construction cleanup.", icon: <Sparkles/> },
    ];
  return (
    <div className="w-full bg-cyan-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="font-bold text-xl text-cyan-700 flex items-center gap-2"><Sparkles/> {template.name}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-cyan-600">Services</a>
            <a href="#about" className="hover:text-cyan-600">Why Choose Us</a>
            <a href="#contact" className="hover:text-cyan-600">Contact</a>
          </nav>
          <Button className="bg-cyan-600 hover:bg-cyan-700">Get a Free Estimate</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-cyan-900">A Spotless Space, A Clear Mind.</h1>
                <p className="text-xl text-slate-600">
                    Professional, reliable, and eco-friendly cleaning services for your home and office.
                </p>
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">Book Your Cleaning</Button>
            </div>
            <div>
                 <Image data-ai-hint="clean modern room" src={template.previewUrl} alt="A clean and sparkling modern room" width={600} height={500} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      {/* Services */}
       <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Services</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">We offer a wide range of cleaning solutions to fit your needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <Card key={service.name} className="text-center shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto w-fit bg-cyan-100 text-cyan-700 p-4 rounded-full mb-4">{service.icon}</div>
                            <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* Why Us */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">The {template.name} Difference</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4"><Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"/><p><strong>Eco-Friendly Products:</strong> Safe for your family, pets, and the planet.</p></div>
                <div className="flex items-start gap-4"><Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"/><p><strong>Trusted Professionals:</strong> Our team is background-checked, insured, and highly trained.</p></div>
                <div className="flex items-start gap-4"><Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"/><p><strong>Satisfaction Guaranteed:</strong> If you're not sparkling happy, we'll make it right.</p></div>
                <div className="flex items-start gap-4"><Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"/><p><strong>Customizable Plans:</strong> Weekly, bi-weekly, monthly, or one-time cleanings tailored to you.</p></div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Ready for a Cleaner Space?</h2>
            <p className="mt-4 text-lg text-cyan-100 max-w-2xl mx-auto">
               Contact us today for a free, no-obligation estimate. It only takes a minute!
            </p>
            <Button size="lg" variant="secondary" className="mt-8 bg-white text-cyan-700 hover:bg-slate-100">
                Request Your Free Estimate
            </Button>
        </div>
      </section>
    </div>
  )
}
