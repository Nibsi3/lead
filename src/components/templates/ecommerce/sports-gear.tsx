'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, ArrowRight, Footprints, Bike, Dumbbell } from "lucide-react";
import Image from "next/image";

export default function SportsGear({ template }: { template: any }) {
    const newGear = [
        { name: 'Velocity Pro Running Shoes', price: '$150', imageSeed: 'sg1' },
        { name: 'Apex Carbon Fiber Bike', price: '$2,500', imageSeed: 'sg2' },
        { name: 'PowerGrip Dumbbell Set', price: '$300', imageSeed: 'sg3' },
        { name: 'FlexFit Yoga Mat', price: '$45', imageSeed: 'sg4' },
    ];
    const categories = [
        { name: "Running", icon: <Footprints className="w-10 h-10"/> },
        { name: "Cycling", icon: <Bike className="w-10 h-10"/> },
        { name: "Training", icon: <Dumbbell className="w-10 h-10"/> },
    ]

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <div className="text-2xl font-extrabold tracking-tighter text-primary">{template.name}</div>
             <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                 <a href="#running" className="hover:text-primary">Running</a>
                 <a href="#cycling" className="hover:text-primary">Cycling</a>
                 <a href="#training" className="hover:text-primary">Training</a>
             </nav>
             <div className="flex items-center gap-4">
                 <Search className="w-5 h-5 text-muted-foreground cursor-pointer"/>
                 <User className="w-5 h-5 text-muted-foreground cursor-pointer"/>
                 <ShoppingCart className="w-5 h-5 text-muted-foreground cursor-pointer"/>
             </div>
        </div>
      </header>
      
      {/* Hero */}
       <section className="relative h-96 md:h-[32rem] w-full">
         <Image data-ai-hint="athlete running" src={template.previewUrl} alt="Athlete running on a mountain trail at sunrise" fill className="object-cover"/>
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
         <div className="relative h-full flex flex-col justify-end text-white p-8 md:p-12">
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-lg">GEAR UP. GO BEYOND.</h1>
             <p className="mt-4 text-lg max-w-md">High-performance athletic gear engineered to push your limits.</p>
             <Button size="lg" className="mt-6 w-fit">
                Shop All Gear <ArrowRight className="ml-2"/>
             </Button>
         </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {categories.map(category => (
                    <Card key={category.name} className="p-8 text-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                        <div className="text-primary mx-auto w-fit">{category.icon}</div>
                        <CardTitle className="mt-4 text-2xl font-bold tracking-tight">{category.name}</CardTitle>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* New Gear */}
      <section id="new-arrivals" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tighter">New Arrivals</h2>
            <p className="text-muted-foreground mt-2">The latest innovations to elevate your performance.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newGear.map(item => (
              <div key={item.name} className="group">
                 <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <Image data-ai-hint="sports equipment" src={`https://picsum.photos/seed/${item.imageSeed}/600/600`} alt={item.name} width={600} height={600} className="object-contain aspect-square mix-blend-multiply p-4 group-hover:scale-110 transition-transform"/>
                 </div>
                <h3 className="font-semibold mt-4">{item.name}</h3>
                <p className="text-muted-foreground">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Featured Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                 <Badge>Athlete Spotlight</Badge>
                 <h2 className="text-3xl font-extrabold tracking-tighter">Meet Alex Rivera: Pushing the Pace</h2>
                 <p className="text-lg text-muted-foreground">"This gear isn't just about performance, it's about confidence. When I gear up, I know I'm ready to take on any challenge, to push past my limits and find out what I'm really made of."</p>
                 <Button variant="link" className="p-0 text-primary">Read Alex's Story <ArrowRight className="w-4 h-4 ml-2"/></Button>
            </div>
            <div>
                 <Image data-ai-hint="athlete portrait" src="https://picsum.photos/seed/sg-athlete/600/700" alt="Portrait of athlete Alex Rivera" width={600} height={700} className="rounded-lg object-cover aspect-[4/5]"/>
            </div>
        </div>
      </section>

    </div>
  )
}
