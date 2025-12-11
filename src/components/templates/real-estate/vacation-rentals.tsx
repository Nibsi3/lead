'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Search, Sun, Waves, Mountain } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import type { DateRange } from "react-day-picker";

export default function VacationRentals({ template }: { template: any }) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 7)),
    });

    const rentals = [
        { name: "Beachfront Villa", location: "Malibu, CA", imageSeed: "vr1" },
        { name: "Mountain Cabin Retreat", location: "Asheville, NC", imageSeed: "vr2" },
        { name: "Lakeside Cottage", location: "Lake Tahoe, CA", imageSeed: "vr3" },
    ];

  return (
    <div className="w-full bg-white text-slate-800">
       {/* Header */}
      <header className="border-b sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-cyan-600 flex items-center gap-2"><Sun/> {template.name}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-cyan-600">Destinations</a>
            <a href="#" className="hover:text-cyan-600">About</a>
            <a href="#" className="hover:text-cyan-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[70vh] w-full">
         <Image data-ai-hint="beach vacation" src={template.previewUrl} alt="Tropical beach with palm trees and clear water" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/40"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
             <h1 className="text-5xl md:text-6xl font-bold">Your Perfect Getaway Awaits</h1>
             <p className="mt-4 text-lg max-w-2xl">Find and book exclusive vacation rentals for an unforgettable trip.</p>
             <Card className="mt-8 p-4 w-full max-w-3xl bg-white/20 backdrop-blur-sm border-gray-400">
                <form className="grid md:grid-cols-3 gap-4 items-center">
                    <Input placeholder="Search destination..." className="h-12 text-black"/>
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button variant={"outline"} className="h-12 w-full justify-start text-left font-normal text-black">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                                date.to ? (<> {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")} </>) : (format(date.from, "LLL dd, y"))
                            ) : ( <span>Pick a date</span> )}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2}/>
                        </PopoverContent>
                    </Popover>
                    <Button size="lg" className="h-12 w-full bg-cyan-600 hover:bg-cyan-700"><Search className="mr-2"/> Search</Button>
                </form>
             </Card>
         </div>
      </section>

      {/* Featured Destinations */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {rentals.map(rental => (
                    <Card key={rental.name} className="group overflow-hidden">
                        <CardHeader className="p-0">
                            <Image data-ai-hint="vacation spot" src={`https://picsum.photos/seed/${rental.imageSeed}/600/400`} alt={rental.name} width={600} height={400} className="object-cover aspect-video"/>
                        </CardHeader>
                        <CardContent className="p-6">
                            <h3 className="font-bold text-xl">{rental.name}</h3>
                            <p className="text-slate-500">{rental.location}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 md:py-24 bg-cyan-50">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12">Travel with Confidence</h2>
             <div className="grid md:grid-cols-3 gap-8 text-center">
                 <div className="p-4">
                    <h3 className="font-semibold text-lg">Vetted Homes</h3>
                    <p className="text-slate-600 mt-1">Every property is hand-picked and verified for quality and comfort.</p>
                 </div>
                 <div className="p-4">
                    <h3 className="font-semibold text-lg">24/7 Support</h3>
                    <p className="text-slate-600 mt-1">Our dedicated support team is always available to assist you during your stay.</p>
                 </div>
                 <div className="p-4">
                    <h3 className="font-semibold text-lg">Best Price Guarantee</h3>
                    <p className="text-slate-600 mt-1">Find the best rates for your dream vacation, guaranteed.</p>
                 </div>
             </div>
        </div>
      </section>
    </div>
  )
}
