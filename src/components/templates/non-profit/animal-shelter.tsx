'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, Home, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnimalShelter({ template }: { template: any }) {
    const animals = [
        { name: "Buddy", age: "2 years", breed: "Golden Retriever Mix", imageSeed: "dog1" },
        { name: "Luna", age: "1 year", breed: "Domestic Shorthair", imageSeed: "cat1" },
        { name: "Rocky", age: "4 years", breed: "German Shepherd", imageSeed: "dog2" },
    ]
  return (
    <div className="w-full bg-cyan-50 text-cyan-900">
      {/* Header */}
       <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2 text-cyan-800"><PawPrint/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#adopt" className="hover:text-cyan-600">Adopt</Link>
            <Link href="#volunteer" className="hover:text-cyan-600">Volunteer</Link>
            <Link href="#donate" className="hover:text-cyan-600">Donate</Link>
          </nav>
          <Button className="bg-cyan-600 hover:bg-cyan-700">Find a Friend</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Find Your New Best Friend</h1>
            <p className="mt-4 text-lg text-cyan-800 max-w-2xl mx-auto">Open your heart and home to a rescue animal. Your journey to unconditional love starts here.</p>
        </div>
      </section>

      {/* Featured Pets */}
      <section id="adopt" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Waiting for a Home</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {animals.map(animal => (
                    <Card key={animal.name} className="shadow-lg group">
                        <CardHeader className="p-0">
                            <Image data-ai-hint="cute animal" src={`https://picsum.photos/seed/${animal.imageSeed}/600/500`} alt={animal.name} width={600} height={500} className="rounded-t-lg object-cover aspect-[5/4]"/>
                        </CardHeader>
                        <CardContent className="p-6 text-center">
                            <CardTitle className="text-2xl">{animal.name}</CardTitle>
                            <p className="text-cyan-700">{animal.age} &bull; {animal.breed}</p>
                            <Button className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700">Learn More</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <Button size="lg" variant="outline">View All Adoptable Pets</Button>
            </div>
        </div>
      </section>

      {/* How to Help */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">How You Can Help</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div className="p-4">
                    <Home className="w-12 h-12 mx-auto text-cyan-500 mb-4"/>
                    <h3 className="font-bold text-xl">Adopt</h3>
                    <p className="text-cyan-800/80 mt-1">Give a loving animal a forever home.</p>
                </div>
                <div className="p-4">
                    <Heart className="w-12 h-12 mx-auto text-cyan-500 mb-4"/>
                    <h3 className="font-bold text-xl">Volunteer</h3>
                    <p className="text-cyan-800/80 mt-1">Donate your time to walk dogs, socialize cats, and help at events.</p>
                </div>
                <div className="p-4">
                    <PawPrint className="w-12 h-12 mx-auto text-cyan-500 mb-4"/>
                    <h3 className="font-bold text-xl">Donate</h3>
                    <p className="text-cyan-800/80 mt-1">Your contribution provides food, shelter, and medical care.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}
