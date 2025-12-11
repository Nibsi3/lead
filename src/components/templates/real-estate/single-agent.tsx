'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Phone, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SingleAgent({ template }: { template: any }) {
    const featuredListings = [
        { address: "453 Ocean View Dr", price: "$1,250,000", imageSeed: "agent-prop1" },
        { address: "198 Hillcrest Rd", price: "$875,000", imageSeed: "agent-prop2" },
        { address: "24 Greenfield Ct", price: "$650,000", imageSeed: "agent-prop3" },
    ];
  
    const testimonials = [
        { quote: "Their market knowledge and negotiation skills were invaluable. We got our dream home under budget!", author: "The Smiths" },
        { quote: "The most seamless and professional real estate experience we've ever had. Highly recommend!", author: "Jessica & Mark L." },
    ];

  return (
    <div className="w-full bg-white text-slate-800">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="flex flex-col">
            <span className="font-bold text-2xl">{template.name}</span>
            <span className="text-sm text-muted-foreground">Realty Group</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#listings" className="hover:text-primary">Listings</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your Trusted Real Estate Advisor</h1>
                <p className="text-lg text-slate-600">With a decade of experience and a passion for finding the perfect fit, I'm here to guide you through every step of your home buying or selling journey.</p>
                <div className="flex items-center gap-4 pt-2">
                    <Button size="lg">Schedule a Call</Button>
                    <Button size="lg" variant="outline">View Listings</Button>
                </div>
            </div>
            <div>
                 <Image data-ai-hint="professional portrait" src={template.previewUrl} alt="Portrait of real estate agent" width={500} height={600} className="rounded-lg object-cover shadow-2xl mx-auto" />
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">What My Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((t,i) => (
                    <Card key={i} className="border-slate-200">
                        <CardContent className="p-6">
                             <div className="flex gap-1 text-yellow-400 mb-2">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                             </div>
                            <p className="italic text-slate-700">"{t.quote}"</p>
                            <p className="font-semibold text-right mt-4">- {t.author}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Active Listings</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {featuredListings.map(listing => (
                    <Card key={listing.address} className="group overflow-hidden">
                        <CardHeader className="p-0">
                            <Image data-ai-hint="house exterior" src={`https://picsum.photos/seed/${listing.imageSeed}/600/400`} alt={listing.address} width={600} height={400} className="object-cover aspect-video"/>
                        </CardHeader>
                        <CardContent className="p-4">
                            <h3 className="font-semibold text-lg">{listing.address}</h3>
                            <p className="text-primary font-bold text-xl">{listing.price}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Let's Get Started</h2>
                <p className="text-slate-600">Whether you're buying, selling, or just curious about the market, I'm here to help. Reach out today for a no-pressure consultation.</p>
                <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 text-lg"><Mail className="w-5 h-5 text-primary"/> agent@email.com</a>
                    <a href="#" className="flex items-center gap-3 text-lg"><Phone className="w-5 h-5 text-primary"/> (555) 123-4567</a>
                    <a href="#" className="flex items-center gap-3 text-lg"><Linkedin className="w-5 h-5 text-primary"/> Connect on LinkedIn</a>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                             <div className="space-y-1"><Label htmlFor="name">Name</Label><Input id="name" /></div>
                             <div className="space-y-1"><Label htmlFor="email">Email</Label><Input id="email" type="email" /></div>
                        </div>
                        <div className="space-y-1"><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="I'm interested in..." /></div>
                        <Button className="w-full">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  )
}
