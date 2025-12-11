'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinancialAdvisor({ template }: { template: any }) {
    const services = [
        { title: "Investment Management", description: "Personalized portfolio strategies to help you reach your long-term goals.", icon: <TrendingUp/> },
        { title: "Retirement Planning", description: "Create a comprehensive plan to ensure a secure and comfortable retirement.", icon: <PiggyBank/> },
        { title: "Wealth Protection", description: "Strategies for insurance and estate planning to protect your assets.", icon: <Shield/> },
    ];
  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button variant="outline">Client Login</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Financial Clarity for a Confident Future.</h1>
                <p className="text-lg text-slate-600">
                    As a trusted financial advisor, I provide personalized strategies to help individuals and families navigate their financial journey with confidence.
                </p>
                <Button size="lg">Schedule a Free Consultation</Button>
            </div>
            <div>
                 <Image data-ai-hint="professional portrait" src={template.previewUrl} alt="Portrait of a financial advisor" width={500} height={600} className="rounded-lg shadow-xl object-cover" />
            </div>
        </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">How I Can Help</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="text-center">
                        <CardHeader>
                             <div className="mx-auto w-fit bg-primary/10 text-primary p-4 rounded-full mb-4">{service.icon}</div>
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

      {/* About */}
       <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold">A Fiduciary You Can Trust</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                My commitment as a fiduciary means your best interests always come first. I believe in a transparent, educational approach to financial planning. My goal is to empower you with the knowledge and strategies needed to make informed decisions and build lasting wealth. I don't just manage assets; I build relationships.
            </p>
        </div>
      </section>
      
       {/* CTA */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to take the next step?</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-xl mx-auto">
                Schedule a complimentary, no-obligation consultation to discuss your financial goals.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
                Book Your Consultation
            </Button>
        </div>
      </section>
    </div>
  )
}
