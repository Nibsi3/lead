'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Check, Shield, Wrench, Users, FileText } from "lucide-react";
import Image from "next/image";

export default function PropertyManagement({ template }: { template: any }) {
    const services = [
        { title: "Tenant Screening", description: "Comprehensive background and credit checks to find reliable tenants.", icon: <Users/> },
        { title: "Maintenance & Repairs", description: "24/7 coordination of all maintenance needs with our network of trusted vendors.", icon: <Wrench/> },
        { title: "Rent Collection", description: "Streamlined, automated rent collection and owner disbursements.", icon: <FileText/> },
        { title: "Legal & Compliance", description: "Ensuring your property stays compliant with all local and state regulations.", icon: <Shield/> },
    ];
  return (
    <div className="w-full bg-background text-foreground">
       {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="font-bold text-xl text-primary">{template.name}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
           <Button>Owner Portal</Button>
        </div>
      </header>
      
      {/* Hero */}
       <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Passive Income, Active Management.</h1>
                <p className="text-lg text-muted-foreground">
                    Maximize your returns and minimize your hassle. We provide professional, full-service property management for residential property owners.
                </p>
                <Button size="lg">Get a Free Management Quote</Button>
            </div>
            <div>
                 <Image data-ai-hint="keys to a house" src={template.previewUrl} alt="Handing over keys to a new house" width={600} height={450} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Management Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="flex items-start p-6 gap-6">
                        <div className="text-primary bg-primary/10 p-3 rounded-lg">{service.icon}</div>
                        <div>
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* Pricing CTA */}
      <section id="pricing" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold font-headline">Simple, Transparent Pricing</h2>
             <p className="text-muted-foreground mt-2 max-w-xl mx-auto">No hidden fees. No long-term contracts. Just straightforward pricing that aligns with your success.</p>
             <Card className="max-w-sm mx-auto mt-8 text-left">
                <CardHeader>
                    <CardTitle>Full-Service Management</CardTitle>
                     <p className="text-4xl font-bold pt-2">8-10%</p>
                    <CardDescription>of monthly collected rent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-primary"/><span>Marketing & Leasing</span></p>
                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-primary"/><span>Tenant Screening</span></p>
                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-primary"/><span>Rent Collection</span></p>
                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-primary"/><span>Maintenance Coordination</span></p>
                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-primary"/><span>Financial Reporting</span></p>
                </CardContent>
             </Card>
             <Button className="mt-8" size="lg">Learn More & Get Started</Button>
        </div>
      </section>
      
    </div>
  )
}
