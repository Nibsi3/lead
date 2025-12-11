'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunityEvent({ template }: { template: any }) {
  return (
    <div className="w-full bg-yellow-50 text-slate-900">
      {/* Header */}
       <header className="sticky top-0 bg-yellow-50/90 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#details" className="hover:text-primary">Event Details</Link>
            <Link href="#schedule" className="hover:text-primary">Schedule</Link>
            <Link href="#sponsors" className="hover:text-primary">Sponsors</Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">Get Tickets</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-96 w-full">
         <Image data-ai-hint="community gathering" src={template.previewUrl} alt="Happy people at an outdoor community event" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/40"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
             <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Annual Community Fair & Fundraiser</h1>
             <p className="mt-2 text-2xl font-semibold">Saturday, October 26th, 2024</p>
             <p className="mt-4 text-lg">Fun, Food, and Fundraising for a Good Cause!</p>
         </div>
      </section>

      {/* Details */}
      <section id="details" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card className="shadow-lg">
                    <CardHeader>
                        <Calendar className="w-10 h-10 text-orange-500 mx-auto mb-2"/>
                        <CardTitle>Date & Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Saturday, October 26, 2024</p>
                        <p>10:00 AM - 4:00 PM</p>
                    </CardContent>
                </Card>
                 <Card className="shadow-lg">
                    <CardHeader>
                        <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-2"/>
                        <CardTitle>Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Central Park</p>
                        <p>123 Main Street, Anytown</p>
                    </CardContent>
                </Card>
                 <Card className="shadow-lg">
                    <CardHeader>
                        <Ticket className="w-10 h-10 text-orange-500 mx-auto mb-2"/>
                        <CardTitle>Tickets</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>$5 for Adults</p>
                        <p>Kids Under 12 are Free!</p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center mt-12">
                 <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Buy Your Tickets Now!</Button>
            </div>
        </div>
      </section>

      {/* About the Event */}
       <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">Fun for the Whole Family!</h2>
                <p className="text-slate-600 text-lg">
                    Join us for a day of community celebration! Our annual fair features live music, local food vendors, games for all ages, a craft market, and much more. All proceeds from ticket sales and activities will go directly to supporting the Anytown Youth Center, providing safe and enriching programs for local kids.
                </p>
            </div>
            <div>
                 <Image data-ai-hint="kids playing" src="https://picsum.photos/seed/np-event-kids/600/450" alt="Kids playing games at a fair" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>

    </div>
  )
}
