'use client'

import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// THIS IS A FALLBACK COMPONENT AND SHOULD NOT BE DIRECTLY USED
// A specific component should be created for each template.
export default function RestaurantLandingPage({ template }: { template: any }) {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Crispy Calamari", price: "$14", description: "Served with a spicy marinara sauce." },
        { name: "Bruschetta", price: "$12", description: "Toasted baguette with fresh tomatoes, garlic, and basil." },
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Filet Mignon", price: "$45", description: "8oz center-cut, served with mashed potatoes and asparagus." },
        { name: "Pan-Seared Salmon", price: "$32", description: "With a lemon-dill sauce and roasted vegetables." },
        { name: "Mushroom Risotto", price: "$26", description: "Creamy arborio rice with wild mushrooms and parmesan." },
      ]
    },
  ];

  const galleryImages = [
    "gallery1", "gallery2", "gallery3", "gallery4"
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
          <Image
              src={template.previewUrl}
              alt={template.description}
              fill
              className="object-cover object-center"
              priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container z-10 px-4 md:px-6 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl">
                    {template.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-200">
                    {template.description}
                </p>
                <div className="flex gap-4 justify-center">
                     <Button size="lg" asChild>
                        <Link href="#">
                            Make a Reservation
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                        View Menu
                    </Button>
                </div>
              </div>
          </div>
      </section>

       {/* Info Section */}
       <section className="py-16 md:py-24 bg-secondary">
           <div className="container">
               <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <MapPin className="w-8 h-8 text-primary" />
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-muted-foreground">123 Culinary Lane, Foodie City</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-8 h-8 text-primary" />
                        <h3 className="font-semibold text-lg">Hours</h3>
                        <p className="text-muted-foreground">Mon-Sat: 5pm - 11pm</p>
                        <p className="text-muted-foreground">Sun: 4pm - 9pm</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Phone className="w-8 h-8 text-primary" />
                        <h3 className="font-semibold text-lg">Contact</h3>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
               </div>
           </div>
       </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge>Our Menu</Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              A Taste of Excellence
            </h2>
          </div>
          <div className="space-y-12">
            {menuItems.map(category => (
              <div key={category.category}>
                <h3 className="text-2xl font-headline mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map(item => (
                    <div key={item.name}>
                       <div className="flex justify-between items-baseline">
                          <h4 className="font-semibold">{item.name}</h4>
                          <span className="flex-grow border-b border-dashed border-muted-foreground mx-2"></span>
                          <p className="font-semibold">{item.price}</p>
                       </div>
                       <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container">
               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Our Ambiance
                    </h2>
                </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryImages.map(seed => (
                       <Image key={seed} src={`https://picsum.photos/seed/${seed}/600/600`} alt="Restaurant ambiance" width={600} height={600} className="rounded-lg object-cover aspect-square" />
                  ))}
              </div>
          </div>
      </section>
    </>
  )
}
