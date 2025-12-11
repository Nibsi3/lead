'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Instagram, Pin, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ArtisanCrafts({ template }: { template: any }) {
    const products = [
        { name: "Hand-thrown Ceramic Mug", price: "$42", imageSeed: "craft1" },
        { name: "Woven Wall Hanging", price: "$85", imageSeed: "craft2" },
        { name: "Leather Journal", price: "$55", imageSeed: "craft3" },
        { name: "Carved Wooden Bowl", price: "$70", imageSeed: "craft4" },
    ];
  return (
    <div className="w-full bg-[#fdfaf5] text-[#5a4e46]">
        {/* Header */}
        <header className="border-b border-[#e9e2d9] sticky top-0 bg-[#fdfaf5]/80 backdrop-blur-sm z-10">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <div className="font-serif text-2xl font-bold tracking-tight">The Artisan's Loft</div>
                <nav className="flex items-center gap-6">
                    <a href="#shop" className="text-sm hover:text-primary">Shop</a>
                    <a href="#about" className="text-sm hover:text-primary">Our Story</a>
                    <a href="#contact" className="text-sm hover:text-primary">Contact</a>
                    <ShoppingCart className="w-5 h-5"/>
                </nav>
            </div>
        </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-snug">Handcrafted with Heart.</h1>
            <p className="text-lg text-muted-foreground">
                Discover unique, one-of-a-kind pieces made by passionate artisans. Bring the warmth of handmade quality into your home.
            </p>
            <Button size="lg" className="bg-[#5a4e46] text-white hover:bg-[#483d36]">Explore the Collection</Button>
          </div>
          <div>
            <Image data-ai-hint="artisan pottery" src="https://picsum.photos/seed/artisan-hero/600/700" alt="Artisan working on a piece of pottery" width={600} height={700} className="rounded-lg object-cover shadow-xl" />
          </div>
        </div>
      </section>
      
       {/* Featured Products */}
      <section id="shop" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif">Featured Wares</h2>
            <p className="text-muted-foreground mt-2">Curated selections from our workshop to your home.</p>
          </div>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <Card key={product.name} className="border-[#e9e2d9] shadow-sm hover:shadow-lg transition-shadow group overflow-hidden text-center">
                        <div className="overflow-hidden">
                           <Image data-ai-hint="handmade product" src={`https://picsum.photos/seed/${product.imageSeed}/600/600`} alt={product.name} width={600} height={600} className="object-cover aspect-square group-hover:scale-105 transition-transform" />
                        </div>
                         <CardContent className="p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-muted-foreground">{product.price}</p>
                            <Button variant="ghost" size="sm" className="mt-2 text-primary hover:bg-primary/10">Add to Cart</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-bold font-serif">Our Story</h2>
             <Image data-ai-hint="artisan portrait" src="https://picsum.photos/seed/artisan-portrait/100/100" alt="Founder portrait" width={100} height={100} className="rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in a small sunlit studio, The Artisan's Loft began with a simple idea: to celebrate the beauty of handmade goods. We believe in the power of craft to connect us, to bring story into our homes, and to support the makers who pour their soul into their work. Each piece in our collection is chosen for its quality, story, and the unique touch of the artisan's hand.
            </p>
        </div>
      </section>
      
       {/* Instagram Feed */}
       <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif">Follow Our Journey</h2>
            <a href="#" className="text-primary mt-2 inline-flex items-center gap-2">@theartisansloft <Instagram className="w-4 h-4"/></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image data-ai-hint="craft product" src="https://picsum.photos/seed/ig1/500/500" alt="Instagram post" width={500} height={500} className="rounded-lg object-cover aspect-square"/>
            <Image data-ai-hint="craft process" src="https://picsum.photos/seed/ig2/500/500" alt="Instagram post" width={500} height={500} className="rounded-lg object-cover aspect-square"/>
            <Image data-ai-hint="artisan workshop" src="https://picsum.photos/seed/ig3/500/500" alt="Instagram post" width={500} height={500} className="rounded-lg object-cover aspect-square"/>
            <Image data-ai-hint="handmade detail" src="https://picsum.photos/seed/ig4/500/500" alt="Instagram post" width={500} height={500} className="rounded-lg object-cover aspect-square"/>
          </div>
        </div>
       </section>

    </div>
  )
}
