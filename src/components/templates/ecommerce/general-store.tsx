'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Truck, Gift, Star } from "lucide-react";
import Image from "next/image";

export default function GeneralStore({ template }: { template: any }) {
    const topProducts = [
        { name: "Everyday Mug", price: "$15", imageSeed: "gs1", rating: 4.5 },
        { name: "Cozy Throw Blanket", price: "$49", imageSeed: "gs2", rating: 5 },
        { name: "Minimalist Wall Clock", price: "$35", imageSeed: "gs3", rating: 4 },
        { name: "Scented Soy Candle", price: "$24", imageSeed: "gs4", rating: 4.5 },
    ];
    const categories = [
        { name: "Home Goods", imageSeed: "gs-cat1" },
        { name: "Apparel", imageSeed: "gs-cat2" },
        { name: "Stationery", imageSeed: "gs-cat3" },
        { name: "Accessories", imageSeed: "gs-cat4" },
    ];

  return (
    <div className="w-full bg-white text-gray-800">
        {/* Header */}
        <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-20">
            <div className="container mx-auto px-4">
                 <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold">{template.name}</div>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#shop" className="hover:text-primary">Shop</a>
                        <a href="#about" className="hover:text-primary">About</a>
                        <a href="#contact" className="hover:text-primary">Contact</a>
                    </nav>
                     <div className="flex items-center gap-4">
                        <Search className="w-5 h-5 text-muted-foreground cursor-pointer"/>
                        <User className="w-5 h-5 text-muted-foreground cursor-pointer"/>
                        <ShoppingCart className="w-5 h-5 text-muted-foreground cursor-pointer"/>
                    </div>
                </div>
            </div>
        </header>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Curated Goods for Everyday Life</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a thoughtful selection of products designed to bring joy and function to your daily routines.
          </p>
           <Button size="lg" className="mt-8">Shop All Products</Button>
        </div>
      </section>

      {/* Value Props */}
      <section className="border-y">
        <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="p-6 flex items-center gap-4 justify-center sm:justify-start">
                    <Truck className="w-6 h-6 text-primary"/>
                    <div>
                        <h3 className="font-semibold">Free Shipping</h3>
                        <p className="text-sm text-muted-foreground">On orders over $75</p>
                    </div>
                </div>
                 <div className="p-6 flex items-center gap-4 justify-center sm:justify-center border-y sm:border-y-0 sm:border-x">
                     <Gift className="w-6 h-6 text-primary"/>
                    <div>
                        <h3 className="font-semibold">Easy Returns</h3>
                        <p className="text-sm text-muted-foreground">30-day return policy</p>
                    </div>
                </div>
                 <div className="p-6 flex items-center gap-4 justify-center sm:justify-end">
                    <Star className="w-6 h-6 text-primary"/>
                    <div>
                        <h3 className="font-semibold">Quality Guaranteed</h3>
                        <p className="text-sm text-muted-foreground">We stand by our products</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Top Products */}
       <section id="shop" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Top Picks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topProducts.map((product) => (
              <Card key={product.name} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                <CardHeader className="p-0 overflow-hidden">
                   <Image data-ai-hint="lifestyle product" src={`https://picsum.photos/seed/${product.imageSeed}/600/600`} alt={product.name} width={600} height={600} className="object-cover aspect-square" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-muted-foreground">{product.price}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Shop by Category</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map(category => (
                    <div key={category.name} className="relative group overflow-hidden rounded-lg">
                        <Image data-ai-hint="lifestyle flatlay" src={`https://picsum.photos/seed/${category.imageSeed}/600/600`} alt={category.name} width={600} height={600} className="object-cover aspect-square group-hover:scale-105 transition-transform"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h3 className="text-white font-bold text-xl">{category.name}</h3>
                        </div>
                         <a href="#" className="absolute inset-0" aria-label={`Shop ${category.name}`}></a>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-xl">
             <h2 className="text-3xl font-bold">Stay in the Loop</h2>
             <p className="text-muted-foreground mt-2">Join our mailing list for new product announcements, special offers, and more.</p>
             <form className="flex gap-2 mt-6">
                <Input type="email" placeholder="Your email address" className="flex-1" />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
      </section>
    </div>
  )
}
