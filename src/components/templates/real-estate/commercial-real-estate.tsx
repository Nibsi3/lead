'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building, Warehouse, Store, AreaChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommercialRealEstate({ template }: { template: any }) {
    const services = [
        { title: "Office Leasing", icon: <Building/>, description: "Secure prime office spaces that foster productivity and growth." },
        { title: "Industrial & Warehouse", icon: <Warehouse/>, description: "From logistics centers to manufacturing facilities, we find your operational hub." },
        { title: "Retail Spaces", icon: <Store/>, description: "Position your business for success with high-traffic retail locations." },
        { title: "Investment Sales", icon: <AreaChart/>, description: "Expert analysis and advisory for acquiring and divesting commercial assets." },
    ];
  return (
    <div className="w-full bg-slate-900 text-white">
       {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold tracking-wider">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#listings" className="hover:text-white">Listings</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </nav>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">View Listings</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[65vh] w-full">
         <Image data-ai-hint="city skyline" src={template.previewUrl} alt="Modern city skyline with skyscrapers" fill className="object-cover opacity-30"/>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
             <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Strategic Commercial Real Estate Solutions</h1>
             <p className="mt-4 text-lg text-slate-300 max-w-3xl">Maximizing value and opportunity in office, industrial, and retail property markets.</p>
         </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="bg-slate-800 border-slate-700 text-center">
                        <CardHeader>
                            <div className="text-primary mx-auto w-fit p-3 bg-slate-700 rounded-lg mb-4">{service.icon}</div>
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

      {/* Market Insights */}
       <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">Data-Driven Market Insights</h2>
                <p className="text-slate-400">
                    In a dynamic market, information is your most valuable asset. Our dedicated research team provides in-depth analysis, trend forecasting, and proprietary data to empower our clients to make informed decisions with confidence. We turn complex data into strategic advantage.
                </p>
                 <Button>Read Our Latest Report</Button>
            </div>
             <div>
                 <Image data-ai-hint="data charts" src={`https://picsum.photos/seed/cre-data/600/450`} alt="Graphs and charts showing market data" width={600} height={450} className="rounded-lg" />
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold">Connect With an Advisor</h2>
            <p className="mt-2 text-slate-400">
                Whether you are looking to lease, buy, or sell, our team of seasoned professionals is ready to assist. Contact us for a confidential consultation on your commercial real estate needs.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">Request a Consultation</Button>
        </div>
      </section>
    </div>
  )
}
