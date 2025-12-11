'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mountain, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandSales({ template }: { template: any }) {
    const listings = [
        { acres: 50, location: "Hill County, TX", type: "Ranch Land", price: "750,000", imageSeed: "land1" },
        { acres: 5, location: "Asheville, NC", type: "Mountain Lot", price: "250,000", imageSeed: "land2" },
        { acres: 20, location: "Upstate, NY", type: "Forested Land", price: "180,000", imageSeed: "land3" },
    ];
  return (
    <div className="w-full bg-green-50/50 text-slate-800">
      {/* Header */}
       <header className="border-b border-green-200 sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link href="#" className="font-bold text-xl flex items-center gap-2 text-green-800"><Trees/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-green-700">
            <Link href="#listings" className="hover:text-green-900">Listings</Link>
            <Link href="#services" className="hover:text-green-900">Our Services</Link>
            <Link href="#contact" className="hover:text-green-900">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 text-center bg-white">
        <div className="container mx-auto px-4">
             <h1 className="text-5xl md:text-6xl font-bold text-green-900">Your Land. Your Legacy.</h1>
             <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Specializing in the sale of ranch, recreational, and undeveloped land.</p>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12 text-green-900">Featured Parcels</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {listings.map(listing => (
                    <Card key={listing.location} className="group overflow-hidden shadow-lg">
                        <CardHeader className="p-0">
                            <Image data-ai-hint="vast landscape" src={`https://picsum.photos/seed/${listing.imageSeed}/600/400`} alt={listing.location} width={600} height={400} className="object-cover aspect-video"/>
                        </CardHeader>
                        <CardContent className="p-6">
                            <Badge variant="secondary" className="bg-green-100 text-green-800">{listing.type}</Badge>
                            <h3 className="text-2xl font-bold mt-2">{listing.acres} Acres</h3>
                            <p className="text-slate-500 flex items-center gap-2 mt-1"><MapPin size={14}/> {listing.location}</p>
                            <p className="text-2xl font-bold text-green-800 mt-4">${listing.price}</p>
                            <Button className="w-full mt-4 bg-green-700 hover:bg-green-800">View Details</Button>
                        </CardContent>
                    </Card>
                ))}
             </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white border-y">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-green-900">Specialized Land Brokerage</h2>
                <p className="text-slate-600 text-lg">Buying or selling land requires a unique set of skills and expertise. Our team understands the intricacies of land valuation, zoning, surveys, and resource rights. We provide unparalleled guidance for landowners and investors alike.</p>
                 <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 font-medium">✔️ Land Valuation &amp; Analysis</li>
                    <li className="flex items-center gap-2 font-medium">✔️ Marketing for Large Parcels</li>
                    <li className="flex items-center gap-2 font-medium">✔️ 1031 Exchange Expertise</li>
                </ul>
            </div>
            <div>
                 <Image data-ai-hint="survey map" src={`https://picsum.photos/seed/land-map/600/450`} alt="Topographical map of a piece of land" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
             <h2 className="text-3xl font-bold text-green-900">Contact a Land Specialist</h2>
             <p className="mt-2 text-slate-600">Discuss your goals with our team of experienced land brokers.</p>
             <Button size="lg" className="mt-6 bg-green-700 hover:bg-green-800">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  )
}
