'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sprout, Users, HandHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EnvironmentalCause({ template }: { template: any }) {
  return (
    <div className="w-full bg-green-950 text-white">
      {/* Header */}
      <header className="sticky top-0 bg-green-950/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><Sprout/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-green-300">About</Link>
            <Link href="#action" className="hover:text-green-300">Take Action</Link>
            <Link href="#news" className="hover:text-green-300">News</Link>
          </nav>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">Donate</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center">
         <Image data-ai-hint="lush forest" src={template.previewUrl} alt="Lush green forest with sunbeams" fill className="object-cover opacity-30"/>
         <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent"></div>
         <div className="relative container mx-auto px-4">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Protecting Our Planet, Together.</h1>
                <p className="mt-6 text-xl text-green-200">
                    We are dedicated to conserving our planet's vital ecosystems through advocacy, research, and direct action. Join us in the fight for a sustainable future.
                </p>
                <Button size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-black font-bold">Join the Movement</Button>
            </div>
         </div>
      </section>

      {/* Our Work */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">What We Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                    <h3 className="text-2xl font-semibold">Advocacy</h3>
                    <p className="mt-2 text-green-300">We lobby for stronger environmental policies and hold decision-makers accountable.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-2xl font-semibold">Conservation</h3>
                    <p className="mt-2 text-green-300">Our on-the-ground projects restore forests, protect wildlife habitats, and clean our oceans.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-2xl font-semibold">Education</h3>
                    <p className="mt-2 text-green-300">We empower the next generation of environmental stewards through community programs.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Take Action */}
       <section id="action" className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Take Action</h2>
                <p className="text-green-300 mt-2">Your support is critical to our mission.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <Card className="bg-green-900 border-green-700 text-white">
                    <CardHeader className="flex-row items-center gap-4">
                        <HandHeart className="w-8 h-8 text-green-400"/>
                        <CardTitle>Donate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Your donation funds our vital conservation and advocacy work.</p>
                        <Button className="mt-4 bg-green-500 hover:bg-green-600 text-black">Give Today</Button>
                    </CardContent>
                </Card>
                 <Card className="bg-green-900 border-green-700 text-white">
                    <CardHeader className="flex-row items-center gap-4">
                        <Users className="w-8 h-8 text-green-400"/>
                        <CardTitle>Volunteer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Join a local cleanup event or help with our community outreach programs.</p>
                        <Button variant="secondary" className="mt-4">Find Opportunities</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
       </section>

    </div>
  )
}
