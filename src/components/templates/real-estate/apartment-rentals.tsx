'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bed, Bath, Search, Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DateRange } from "react-day-picker";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function ApartmentRentals({ template }: { template: any }) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 30)),
    });
    const listings = [
        { id: 1, title: "Modern Loft in Downtown", price: "2,800", beds: 1, baths: 1, imageSeed: "apt1" },
        { id: 2, title: "Spacious 2-Bedroom with Balcony", price: "3,500", beds: 2, baths: 2, imageSeed: "apt2" },
        { id: 3, title: "Charming Garden Apartment", price: "2,400", beds: 1, baths: 1, imageSeed: "apt3" },
    ];
  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-2xl font-bold text-primary">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#search" className="hover:text-primary">Search</Link>
            <Link href="#featured" className="hover:text-primary">Featured</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button variant="outline">List Your Property</Button>
        </div>
      </header>

      {/* Hero Search */}
      <section id="search" className="py-20 md:py-28 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Find Your Next Apartment</h1>
            <p className="mt-2 text-lg text-slate-600">The easiest way to find your perfect rental.</p>
            <Card className="mt-8 p-4 md:p-6 w-full max-w-4xl mx-auto shadow-lg text-left">
                <form className="grid md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                        <Input placeholder="Search by neighborhood, address, or building..." className="h-12"/>
                    </div>
                     <Popover>
                        <PopoverTrigger asChild>
                        <Button variant={"outline"} className="h-12 w-full justify-start text-left font-normal text-slate-500">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                                date.to ? (<> {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")} </>) : (format(date.from, "LLL dd, y"))
                            ) : ( <span>Pick a move-in date</span> )}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2}/>
                        </PopoverContent>
                    </Popover>
                    <Select>
                        <SelectTrigger className="h-12"><SelectValue placeholder="Beds" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="1">1 Bed</SelectItem>
                            <SelectItem value="2">2 Beds</SelectItem>
                            <SelectItem value="3">3+ Beds</SelectItem>
                        </SelectContent>
                    </Select>
                     <Button size="lg" className="h-12 w-full"><Search className="mr-2"/> Search</Button>
                </form>
            </Card>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="featured" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12">Featured Apartments</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {listings.map(listing => (
                    <Card key={listing.id} className="group overflow-hidden">
                        <CardContent className="p-0">
                            <Image data-ai-hint="apartment interior" src={`https://picsum.photos/seed/${listing.imageSeed}/600/400`} alt={listing.title} width={600} height={400} className="object-cover aspect-video"/>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg">{listing.title}</h3>
                                <p className="text-primary text-2xl font-bold mt-2">${listing.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
                                <div className="flex gap-4 text-slate-600 mt-4 border-t pt-4">
                                    <span className="flex items-center gap-2"><Bed size={18}/> {listing.beds} Bed</span>
                                    <span className="flex items-center gap-2"><Bath size={18}/> {listing.baths} Bath</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
             </div>
        </div>
      </section>
      
      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">The Renter's Advantage</h2>
                <p className="text-slate-600 text-lg">We streamline the apartment hunting process with verified listings, direct-to-landlord communication, and a seamless application process. Say goodbye to stress and hello to your new home.</p>
                <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 font-medium">✔️ No Broker Fees on Exclusive Listings</li>
                    <li className="flex items-center gap-2 font-medium">✔️ Verified Photos & Floorplans</li>
                    <li className="flex items-center gap-2 font-medium">✔️ Easy Online Application</li>
                </ul>
            </div>
            <div>
                <Image data-ai-hint="happy person keys" src={`https://picsum.photos/seed/apt-happy/600/500`} alt="Happy person holding keys to a new apartment" width={600} height={500} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>
      
    </div>
  )
}
