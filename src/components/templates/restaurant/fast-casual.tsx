'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FastCasual({ template }: { template: any }) {
  const menuItems = [
    { name: "Spicy Chicken Bowl", imageSeed: "fc1", description: "Grilled chicken, brown rice, black beans, salsa, and avocado." },
    { name: "Kale Caesar Salad", imageSeed: "fc2", description: "With house-made croutons, parmesan, and a creamy caesar dressing." },
    { name: "Quinoa & Veggie Bowl", imageSeed: "fc3", description: "Roasted sweet potatoes, broccoli, chickpeas, and a lemon-tahini sauce." },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-2xl font-extrabold tracking-tighter text-green-600 flex items-center gap-2">
            <Utensils /> {template.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <Link href="#menu" className="hover:text-green-600">Menu</Link>
            <Link href="#about" className="hover:text-green-600">Our Food</Link>
            <Link href="#catering" className="hover:text-green-600">Catering</Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Order Online</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-green-900">
            Fresh, Healthy, Fast.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real food made from scratch. Build your own bowl or salad with fresh, seasonal ingredients.
          </p>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Fan Favorites</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map(item => (
              <Card key={item.name} className="border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Image data-ai-hint="healthy food bowl" src={`https://picsum.photos/seed/${item.imageSeed}/600/400`} alt={item.name} width={600} height={400} className="object-cover aspect-video rounded-t-lg" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">See Full Menu</Button>
          </div>
        </div>
      </section>
      
      {/* Our Ethos Section */}
      <section id="about" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Real Food, Real Good.</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    We believe you shouldn't have to choose between food that's good for you and food that's fast. That's why we partner with local farms to source the freshest ingredients, preparing everything in-house daily. It's food you can feel good about eating.
                </p>
            </div>
             <div>
                <Image data-ai-hint="fresh vegetables" src="https://picsum.photos/seed/fc-veg/600/450" alt="Fresh vegetables on a cutting board" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>
      
      {/* Catering CTA */}
      <section id="catering" className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">Catering for Your Crew</h2>
                <p className="mt-2 text-green-100">Healthy and delicious options for your next meeting, event, or office lunch.</p>
            </div>
            <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Learn More <ChevronRight className="ml-2"/>
            </Button>
        </div>
      </section>
    </div>
  )
}
