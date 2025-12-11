'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, ChevronRight, HardDrive, Smartphone, Laptop } from "lucide-react";
import Image from "next/image";

export default function ElectronicsHub({ template }: { template: any }) {
    const featuredProducts = [
        { name: "Aura Pro Laptop", price: "$1,499", imageSeed: "el-prod1", category: "Laptops" },
        { name: "Nexus 10 Smartphone", price: "$899", imageSeed: "el-prod2", category: "Phones" },
        { name: "SonicBlast Headphones", price: "$199", imageSeed: "el-prod3", category: "Audio" },
    ];

    const categories = [
        { name: "Laptops & Computers", icon: <Laptop size={32}/>, imageSeed: "el-cat1" },
        { name: "Smartphones & Tablets", icon: <Smartphone size={32}/>, imageSeed: "el-cat2" },
        { name: "Accessories", icon: <HardDrive size={32}/>, imageSeed: "el-cat3" },
    ]

  return (
    <div className="w-full bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                 <div className="flex items-center gap-3">
                    <Smartphone className="w-7 h-7 text-cyan-400" />
                    <span className="font-bold text-xl tracking-tighter">{template.name}</span>
                </div>
                 <div className="hidden md:flex items-center gap-6 text-sm">
                     <a href="#" className="text-gray-300 hover:text-white">Deals</a>
                     <a href="#" className="text-gray-300 hover:text-white">New Arrivals</a>
                     <a href="#" className="text-gray-300 hover:text-white">Support</a>
                 </div>
                 <div className="flex items-center gap-4">
                     <User className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer"/>
                     <ShoppingCart className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer"/>
                 </div>
            </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                Next-Gen Tech is Here.
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
                Discover the latest in high-performance electronics. Unleash your potential with cutting-edge devices designed for modern life.
            </p>
            <div className="relative max-w-sm">
                <Input placeholder="Search for products..." className="h-12 bg-gray-900 border-gray-700 pl-4 pr-12 text-white"/>
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
            </div>
        </div>
        <div className="relative h-80 md:h-96">
             <Image data-ai-hint="futuristic tech" src="https://picsum.photos/seed/el-hero/800/600" alt="Futuristic electronic device" fill className="object-contain" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            {categories.map(category => (
                <Card key={category.name} className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between group hover:border-cyan-400/50 transition-colors">
                    <div>
                        <div className="mb-4 text-cyan-400">{category.icon}</div>
                        <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
                    </div>
                    <a href="#" className="flex items-center text-sm text-cyan-400 font-medium mt-4 group-hover:translate-x-1 transition-transform">
                        Shop Now <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                </Card>
            ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter">Hot This Week</h2>
                <p className="text-gray-400 mt-2">Check out our most popular products and best-sellers.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                    <Card key={product.name} className="bg-gray-900/50 border-gray-800 overflow-hidden group">
                        <CardHeader className="p-0 relative">
                            <Badge variant="secondary" className="absolute top-4 right-4 z-10 bg-cyan-400 text-black">{product.category}</Badge>
                            <Image data-ai-hint="tech product" src={`https://picsum.photos/seed/${product.imageSeed}/600/400`} alt={product.name} width={600} height={400} className="object-cover aspect-video group-hover:scale-105 transition-transform" />
                        </CardHeader>
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <p className="text-cyan-400 font-medium">{product.price}</p>
                            <Button className="w-full mt-4 bg-cyan-400 text-black hover:bg-cyan-500">Add to Cart</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* Sale Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-10 grid md:grid-cols-2 items-center gap-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tighter">Flash Sale!</h2>
                <p className="mt-2 text-blue-100">Up to 40% off on select gaming accessories. Limited time only.</p>
            </div>
            <div className="text-right">
                 <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-200">Shop Sale</Button>
            </div>
        </div>
      </section>

    </div>
  )
}
