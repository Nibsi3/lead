'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, Calendar, Users, GlassWater } from "lucide-react";
import Image from "next/image";

export default function CateringService({ template }: { template: any }) {
    const services = [
        { title: "Corporate Events", description: "Breakfast meetings, office lunches, and company-wide holiday parties.", icon: <Users/> },
        { title: "Weddings", description: "Elegant plated dinners, bountiful buffets, and custom cocktail hours.", icon: <GlassWater/> },
        { title: "Private Parties", description: "Birthdays, anniversaries, and intimate gatherings at your home or venue.", icon: <Calendar/> },
    ]
  return (
    <div className="w-full bg-white text-slate-800">
       {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="text-2xl font-bold">{template.name}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#menu" className="hover:text-primary">Menus</a>
            <a href="#contact" className="hover:text-primary">Inquire</a>
          </nav>
          <Button>Get a Quote</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Exceptional Food for Unforgettable Events.</h1>
                <p className="text-xl text-slate-600">
                    Full-service catering for corporate, wedding, and private events. We bring the flavor, you make the memories.
                </p>
                <Button size="lg">Plan Your Event</Button>
            </div>
            <div>
                 <Image data-ai-hint="catering platter" src={template.previewUrl} alt="Beautifully arranged catering platter" width={600} height={500} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Catering Services</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">From intimate gatherings to grand celebrations, we handle every detail.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="text-center">
                        <CardHeader>
                            <div className="text-primary bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">{service.icon}</div>
                            <CardTitle>{service.title}</CardTitle>
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
       <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
             <div>
                <Image data-ai-hint="chef plating food" src="https://picsum.photos/seed/catering-chef/600/700" alt="Chef carefully plating a dish" width={600} height={700} className="rounded-lg shadow-lg object-cover aspect-[4/5]" />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold">Our Commitment to Quality</h2>
                <p className="text-lg text-slate-600">
                    We believe that great events start with great food. Our culinary philosophy is simple: use the freshest, highest-quality, locally-sourced ingredients to create dishes that are both delicious and beautiful.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-medium"><Check className="text-primary"/> Seasonal & Customizable Menus</li>
                    <li className="flex items-center gap-3 font-medium"><Check className="text-primary"/> Professional & Attentive Staff</li>
                    <li className="flex items-center gap-3 font-medium"><Check className="text-primary"/> Flawless Execution from Start to Finish</li>
                </ul>
            </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Let's Plan Your Perfect Event</h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact us today for a complimentary consultation and quote for your upcoming event.
            </p>
            <Button size="lg" className="mt-8">Request a Quote</Button>
        </div>
      </section>
    </div>
  )
}
