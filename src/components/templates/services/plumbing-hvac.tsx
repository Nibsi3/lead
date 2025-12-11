'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Thermometer, Droplets, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlumbingHvac({ template }: { template: any }) {
  const services = [
    { name: "Plumbing Services", icon: <Droplets/>, description: "From leaky faucets to pipe repairs, we handle all your plumbing needs." },
    { name: "Heating Services", icon: <Thermometer/>, description: "Furnace repair, installation, and maintenance to keep you warm." },
    { name: "Cooling Services", icon: <Wrench/>, description: "AC repair, installation, and tune-ups for reliable comfort." },
  ]
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2 text-primary"><Wrench/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#about" className="hover:text-primary">Why Us</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button>Request Service</Button>
        </div>
      </header>
      
      {/* Hero */}
       <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <Badge variant="outline">24/7 Emergency Service Available</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Your Home Comfort Experts.</h1>
                <p className="text-lg text-muted-foreground">
                    Reliable, fast, and affordable plumbing, heating, and cooling services. Your satisfaction is our guarantee.
                </p>
                <Button size="lg">Call (555) 123-4567</Button>
            </div>
            <div>
                 <Image data-ai-hint="plumber working" src={template.previewUrl} alt="Technician working on an HVAC unit" width={600} height={450} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <Card key={service.name} className="text-center hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="mx-auto w-fit bg-primary/10 text-primary p-4 rounded-full mb-4">{service.icon}</div>
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold font-headline">Why Homeowners Trust Us</h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 text-left"><Clock className="w-8 h-8 text-primary flex-shrink-0"/><p><strong>24/7 Emergency Availability:</strong> We're here for you when you need us most, day or night.</p></div>
                <div className="flex items-start gap-4 text-left"><ShieldCheck className="w-8 h-8 text-primary flex-shrink-0"/><p><strong>Licensed & Insured:</strong> Our technicians are fully certified and insured for your peace of mind.</p></div>
                 <div className="flex items-start gap-4 text-left"><Wrench className="w-8 h-8 text-primary flex-shrink-0"/><p><strong>Upfront Pricing:</strong> No surprises. You'll know the cost before we start any work.</p></div>
                 <div className="flex items-start gap-4 text-left"><Wrench className="w-8 h-8 text-primary flex-shrink-0"/><p><strong>Satisfaction Guaranteed:</strong> We stand behind our work with a 100% satisfaction guarantee.</p></div>
            </div>
        </div>
      </section>
      
       {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Request a Service or Estimate</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-1"><Label htmlFor="name">Name</Label><Input id="name"/></div>
                        <div className="space-y-1"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel"/></div>
                        <div className="space-y-1"><Label htmlFor="message">How can we help?</Label><Textarea id="message"/></div>
                        <Button className="w-full">Submit Request</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  )
}
