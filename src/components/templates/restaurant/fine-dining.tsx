'use client'

import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FineDining({ template }: { template: any }) {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Seared Scallops", price: "$28", description: "With saffron risotto and a citrus buerre blanc." },
        { name: "Wagyu Beef Carpaccio", price: "$32", description: "Thinly sliced, with arugula, parmesan, and truffle oil." },
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Filet Mignon", price: "$65", description: "8oz center-cut, with potato dauphinoise and asparagus." },
        { name: "Pan-Seared Dover Sole", price: "$58", description: "With a lemon-caper sauce and haricots verts." },
        { name: "Lobster Thermidor", price: "$75", description: "Creamy lobster meat baked in its shell with Gruyère cheese." },
      ]
    },
  ];

  const galleryImages = [
    "gallery1", "gallery2", "gallery3", "gallery4"
  ];


  return (
    <div className="w-full bg-black text-white font-serif">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
          <Image
              data-ai-hint="elegant restaurant"
              src={template.previewUrl}
              alt={template.description}
              fill
              className="object-cover opacity-50"
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
          <div className="relative container z-10 px-4 md:px-6 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                    {template.name}
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                    {template.description}
                </p>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none">
                    Make a Reservation
                </Button>
              </div>
          </div>
      </section>

       {/* Info Section */}
       <section className="py-16 md:py-24 bg-[#111]">
           <div className="container">
               <div className="grid md:grid-cols-3 gap-8 text-center text-gray-300">
                    <div className="flex flex-col items-center gap-2">
                        <MapPin className="w-8 h-8 text-gray-400" />
                        <h3 className="font-semibold text-lg uppercase tracking-wider">Location</h3>
                        <p className="text-gray-400">123 Culinary Lane, Foodie City</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-8 h-8 text-gray-400" />
                        <h3 className="font-semibold text-lg uppercase tracking-wider">Hours</h3>
                        <p className="text-gray-400">Tues-Sun: 5:30pm - 10:00pm</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Phone className="w-8 h-8 text-gray-400" />
                        <h3 className="font-semibold text-lg uppercase tracking-wider">Contact</h3>
                        <p className="text-gray-400">(555) 123-4567</p>
                    </div>
               </div>
           </div>
       </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">A Taste of Excellence</h2>
          </div>
          <div className="space-y-12">
            {menuItems.map(category => (
              <div key={category.category}>
                <h3 className="text-3xl mb-6 text-center tracking-widest uppercase">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map(item => (
                    <div key={item.name} className="text-center">
                       <div className="flex justify-center items-baseline">
                          <h4 className="text-xl font-semibold">{item.name}</h4>
                          <p className="font-semibold text-lg ml-4">{item.price}</p>
                       </div>
                       <p className="text-gray-400 text-sm max-w-sm mx-auto">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#111]">
          <div className="container">
               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight">
                    Our Ambiance
                    </h2>
                </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryImages.map(seed => (
                       <Image key={seed} data-ai-hint="fine dining" src={`https://picsum.photos/seed/${seed}/600/600`} alt="Restaurant ambiance" width={600} height={600} className="rounded-sm object-cover aspect-square" />
                  ))}
              </div>
          </div>
      </section>
    </div>
  )
}
