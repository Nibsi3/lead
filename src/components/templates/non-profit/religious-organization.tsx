'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Cross, MapPin, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReligiousOrganization({ template }: { template: any }) {
  return (
    <div className="w-full bg-stone-100 text-stone-800">
       {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2 text-stone-700"><Cross/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-stone-500">About Us</Link>
            <Link href="#events" className="hover:text-stone-500">Events</Link>
            <Link href="#sermons" className="hover:text-stone-500">Sermons</Link>
            <Link href="#give" className="hover:text-stone-500">Give</Link>
          </nav>
          <Button variant="outline">New Here?</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="relative h-[70vh] w-full">
         <Image data-ai-hint="church interior" src={template.previewUrl} alt="Interior of a sunlit church" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/30"></div>
         <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
             <h1 className="text-5xl md:text-6xl font-bold">Welcome Home</h1>
             <p className="mt-4 text-xl max-w-2xl">A community growing in faith, hope, and love.</p>
             <p className="mt-8 text-lg font-semibold">Join us for service this Sunday at 10:00 AM</p>
         </div>
      </section>

      {/* Welcome Section */}
       <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold">A Place to Belong</h2>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                We are a diverse community of people who are united by our desire to know God and make Him known. We believe in creating a welcoming space where everyone can explore their faith, ask questions, and build meaningful relationships. No matter where you are on your spiritual journey, you are welcome here.
            </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 md:py-24 bg-white border-y">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <Clock className="w-8 h-8 mx-auto text-primary mb-2"/>
                        <CardTitle>Service Times</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Sundays at 10:00 AM</p>
                        <p>Wednesdays at 7:00 PM (Youth Group)</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <MapPin className="w-8 h-8 mx-auto text-primary mb-2"/>
                        <CardTitle>Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>789 Faith Ave, Anytown, USA</p>
                        <a href="#" className="text-primary hover:underline">Get Directions</a>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <Users className="w-8 h-8 mx-auto text-primary mb-2"/>
                        <CardTitle>Community Groups</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Small groups meet throughout the week. Find one that's right for you!</p>
                        <a href="#" className="text-primary hover:underline">Find a Group</a>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

       {/* Give CTA */}
      <section id="give" className="py-20">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold">Get Involved</h2>
             <p className="mt-4 text-lg text-stone-600 max-w-xl mx-auto">
                Your generosity helps us serve our community and share our message of hope.
            </p>
             <Button size="lg" className="mt-8">Give Online</Button>
        </div>
      </section>
    </div>
  )
}
