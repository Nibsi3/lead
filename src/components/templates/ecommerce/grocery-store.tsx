'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, MapPin, Leaf, Fish, Apple, Carrot } from "lucide-react";
import Image from "next/image";

export default function GroceryStore({ template }: { template: any }) {
    const weeklyDeals = [
        { name: "Organic Avocados", price: "$1.99/ea", oldPrice: "$2.49", imageSeed: "grocery1", tag: "20% Off" },
        { name: "Free-Range Chicken Breast", price: "$6.99/lb", oldPrice: "$8.99", imageSeed: "grocery2", tag: "Sale" },
        { name: "Artisanal Sourdough", price: "$4.50", oldPrice: "$5.50", imageSeed: "grocery3", tag: "Best Value" },
        { name: "Fresh Salmon Fillet", price: "$12.99/lb", oldPrice: "$15.99", imageSeed: "grocery4", tag: "Fresh Catch" },
    ];

  return (
    <div className="w-full bg-white text-slate-900">
        {/* Top Bar */}
        <div className="bg-slate-100 text-slate-600 text-sm py-2 border-b">
             <div className="container mx-auto px-4 flex justify-between">
                <span>Your trusted neighborhood market since 1985</span>
                <a href="#" className="flex items-center gap-1 font-medium text-primary"><MapPin size={14}/> Find a Store</a>
             </div>
        </div>

      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
                <Leaf className="w-8 h-8 text-green-600"/>
                <span className="font-bold text-2xl">{template.name}</span>
            </div>
            <div className="flex-1 max-w-xl mx-8 hidden md:block">
                <div className="relative">
                    <Input placeholder="Search for products..." className="h-11 pl-10"/>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"/>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-slate-600 hover:text-primary">Weekly Ad</a>
                <Button className="flex items-center gap-2">
                    <ShoppingCart size={18}/>
                    <span className="hidden sm:inline">My Cart</span>
                    <Badge className="bg-white text-primary">2</Badge>
                </Button>
            </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-96 w-full">
        <Image data-ai-hint="fresh produce" src="https://picsum.photos/seed/grocery-hero/1800/600" alt="Abundant display of fresh fruits and vegetables" fill className="object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Freshness Delivered Daily</h1>
            <p className="mt-4 text-lg max-w-2xl">From local farms to your table. Experience the best in quality and flavor.</p>
            <Button size="lg" variant="secondary" className="mt-8">Shop Online Now</Button>
        </div>
      </section>

      {/* Category Icons */}
       <section className="py-12 border-b">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <a href="#" className="group">
                    <div className="bg-green-100 text-green-700 p-4 rounded-full w-fit mx-auto group-hover:bg-green-200 transition-colors">
                        <Apple size={32}/>
                    </div>
                    <p className="font-semibold mt-2">Produce</p>
                </a>
                 <a href="#" className="group">
                    <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-fit mx-auto group-hover:bg-blue-200 transition-colors">
                        <Fish size={32}/>
                    </div>
                    <p className="font-semibold mt-2">Seafood</p>
                </a>
                 <a href="#" className="group">
                    <div className="bg-red-100 text-red-700 p-4 rounded-full w-fit mx-auto group-hover:bg-red-200 transition-colors">
                        <Carrot size={32}/>
                    </div>
                    <p className="font-semibold mt-2">Meat &amp; Poultry</p>
                </a>
                 <a href="#" className="group">
                    <div className="bg-yellow-100 text-yellow-700 p-4 rounded-full w-fit mx-auto group-hover:bg-yellow-200 transition-colors">
                        <Leaf size={32}/>
                    </div>
                    <p className="font-semibold mt-2">Pantry</p>
                </a>
            </div>
        </div>
       </section>

      {/* Weekly Deals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">This Week's Deals</h2>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {weeklyDeals.map(deal => (
                    <div key={deal.name} className="border rounded-lg p-4 group text-center hover:shadow-lg transition-shadow">
                        <Badge className="bg-red-500 text-white mb-2">{deal.tag}</Badge>
                         <Image data-ai-hint="grocery item" src={`https://picsum.photos/seed/${deal.imageSeed}/400/400`} alt={deal.name} width={400} height={400} className="object-cover aspect-square mx-auto" />
                        <h3 className="font-medium mt-4 h-10">{deal.name}</h3>
                        <div className="mt-2 flex items-baseline justify-center gap-2">
                           <span className="font-bold text-lg text-red-600">{deal.price}</span>
                           <span className="text-sm text-slate-500 line-through">{deal.oldPrice}</span>
                        </div>
                        <Button variant="outline" className="w-full mt-4">Add to Cart</Button>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="local farm" src="https://picsum.photos/seed/grocery-farm/600/450" alt="Local farm with fresh produce" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-4">
                <Badge variant="secondary">Our Promise</Badge>
                <h2 className="text-3xl font-bold">Committed to Quality and Community</h2>
                <p className="text-slate-600">We partner with local farmers and trusted suppliers to bring you the freshest, highest-quality products. We believe that good food builds strong communities, and we're proud to be a part of yours.</p>
                <Button>Learn About Our Sourcing</Button>
            </div>
        </div>
      </section>
    </div>
  )
}
