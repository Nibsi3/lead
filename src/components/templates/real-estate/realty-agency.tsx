'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RealtyAgency({ template }: { template: any }) {
    const featuredProperties = [
        { id: 1, address: "123 Maple St, Springfield", price: "$450,000", beds: 3, baths: 2, sqft: 1800, imageSeed: "re1" },
        { id: 2, address: "789 Oak Ave, Shelbyville", price: "$620,000", beds: 4, baths: 3, sqft: 2500, imageSeed: "re2" },
        { id: 3, address: "456 Pine Ln, Capital City", price: "$310,000", beds: 2, baths: 2, sqft: 1200, imageSeed: "re3" },
    ];

    const agents = [
        { name: "John Davis", title: "Lead Agent", avatarSeed: "agent1" },
        { name: "Maria Garcia", title: "Senior Agent", avatarSeed: "agent2" },
        { name: "Sam Wilson", title: "Buyer's Agent", avatarSeed: "agent3" },
    ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-2xl font-bold text-primary">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#listings" className="hover:text-primary">Listings</Link>
            <Link href="#agents" className="hover:text-primary">Our Team</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button>Get in Touch</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] w-full">
         <Image data-ai-hint="luxury house exterior" src={template.previewUrl} alt="Luxury home exterior" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/50"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
             <h1 className="text-4xl md:text-5xl font-bold">Find Your Dream Home</h1>
             <p className="mt-4 text-lg max-w-2xl">Expert guidance for every step of your real estate journey.</p>
             <Card className="mt-8 p-6 w-full max-w-2xl bg-white/20 backdrop-blur-sm border-gray-400">
                 <form className="grid sm:grid-cols-3 gap-4 items-end">
                     <div className="sm:col-span-2">
                         <label htmlFor="search" className="text-white text-sm font-medium sr-only">Search</label>
                         <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
                            <Input id="search" placeholder="Enter city, neighborhood, or address" className="h-12 pl-10 text-black"/>
                        </div>
                     </div>
                     <Button type="submit" size="lg" className="w-full h-12">Search</Button>
                 </form>
             </Card>
         </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <p className="text-muted-foreground mt-2">A selection of our finest properties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map(prop => (
              <Card key={prop.id} className="group overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                 <CardHeader className="p-0">
                    <Image data-ai-hint="modern house" src={`https://picsum.photos/seed/${prop.imageSeed}/600/400`} alt={prop.address} width={600} height={400} className="object-cover aspect-video"/>
                 </CardHeader>
                 <CardContent className="p-6">
                    <CardTitle className="text-xl">{prop.price}</CardTitle>
                    <p className="text-muted-foreground mt-1">{prop.address}</p>
                    <div className="mt-4 flex justify-between items-center text-sm border-t pt-4">
                        <span>{prop.beds} beds</span>
                        <span>{prop.baths} baths</span>
                        <span>{prop.sqft} sqft</span>
                    </div>
                 </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button variant="outline">View All Properties</Button>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section id="agents" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Agents</h2>
            <p className="text-muted-foreground mt-2">The most dedicated and experienced team in the region.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {agents.map(agent => (
                <div key={agent.name} className="text-center">
                    <Avatar className="h-24 w-24 mx-auto">
                        <AvatarImage src={`https://picsum.photos/seed/${agent.avatarSeed}/100/100`} />
                        <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mt-4">{agent.name}</h3>
                    <p className="text-sm text-primary">{agent.title}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
