'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FamilyRestaurant({ template }: { template: any }) {
    const menu = [
        { name: "All-American Burger", imageSeed: "fam-rest1", description: "A juicy beef patty with all the classic fixings." },
        { name: "Spaghetti & Meatballs", imageSeed: "fam-rest2", description: "Just like grandma used to make. A family favorite!" },
        { name: "Country Fried Steak", imageSeed: "fam-rest3", description: "Served with creamy mashed potatoes and gravy." },
    ]
  return (
    <div className="w-full bg-orange-50 text-slate-900">
      {/* Header */}
      <header className="border-b-4 border-red-700 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
            <Link href="#" className="text-3xl font-bold text-red-800 flex items-center gap-2" style={{fontFamily: "'Lobster', cursive"}}>
                <Utensils/> {template.name}
            </Link>
            <nav className="hidden md:flex items-center gap-6 font-semibold">
                <Link href="#menu" className="hover:text-red-700">Our Menu</Link>
                <Link href="#about" className="hover:text-red-700">Our Story</Link>
                <Link href="#contact" className="hover:text-red-700">Visit Us</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold" style={{fontFamily: "'Lobster', cursive"}}>
                Good Food for Good Folks
            </h1>
            <p className="mt-4 text-xl text-slate-700 max-w-2xl mx-auto">
                Serving up classic comfort food and creating happy memories since 1995.
            </p>
        </div>
      </section>

      {/* Menu */}
       <section id="menu" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" style={{fontFamily: "'Lobster', cursive"}}>Homestyle Favorites</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {menu.map(item => (
                    <Card key={item.name} className="shadow-lg">
                        <CardContent className="p-0">
                            <Image data-ai-hint="comfort food" src={`https://picsum.photos/seed/${item.imageSeed}/600/400`} alt={item.name} width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-slate-600 mt-2">{item.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
       </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="family photo" src="https://picsum.photos/seed/fam-rest-owner/600/500" alt="Family photo of the restaurant owners" width={600} height={500} className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-4">
                 <h2 className="text-4xl font-bold" style={{fontFamily: "'Lobster', cursive"}}>From Our Family to Yours</h2>
                 <p className="text-slate-700 text-lg leading-relaxed">
                    For over 25 years, our family has been proud to serve this community. We started {template.name} with a simple goal: to create a place where families can gather around a table and enjoy a delicious, home-cooked meal without any of the fuss. We're so glad to have you here.
                 </p>
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center bg-red-700 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold" style={{fontFamily: "'Lobster', cursive"}}>Come on Down!</h2>
            <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-xl">
                 <p className="flex items-center gap-2"><MapPin/> 456 Hometown Rd, Anytown</p>
                 <p className="flex items-center gap-2"><Phone/> (555) 987-6543</p>
            </div>
        </div>
      </section>
    </div>
  )
}
