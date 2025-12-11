'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Sparkle, Rocket, Puzzle, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function KidsToys({ template }: { template: any }) {
    const topToys = [
        { name: "Wooden Block Set", price: "$35", imageSeed: "toy1", age: "1-3 yrs" },
        { name: "Rocket Ship Playset", price: "$55", imageSeed: "toy2", age: "3-5 yrs" },
        { name: "Dinosaur Puzzle", price: "$25", imageSeed: "toy3", age: "5-7 yrs" },
        { name: "Junior Scientist Kit", price: "$45", imageSeed: "toy4", age: "7+ yrs" },
    ];
  return (
    <div className="w-full bg-blue-50">
      {/* Header */}
      <header className="border-b border-blue-200 sticky top-0 bg-blue-50/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
                <Sparkle className="w-8 h-8 text-yellow-500"/>
                <span className="text-2xl font-bold text-blue-800" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>{template.name}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-blue-700">
                <a href="#" className="hover:text-pink-500">Shop by Age</a>
                <a href="#" className="hover:text-pink-500">Bestsellers</a>
                <a href="#" className="hover:text-pink-500">Sale</a>
            </nav>
            <div className="flex items-center gap-4">
                 <Search className="w-5 h-5 text-blue-600 cursor-pointer"/>
                 <ShoppingCart className="w-5 h-5 text-blue-600 cursor-pointer"/>
             </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>
                Where Fun &amp; Learning Come to Play!
            </h1>
            <p className="mt-4 text-lg text-blue-700">
              Discover a world of imagination with our curated collection of safe, fun, and educational toys for every age.
            </p>
            <Button size="lg" className="mt-8 bg-pink-500 hover:bg-pink-600 rounded-full text-lg h-12 px-8 shadow-lg">Shop Now!</Button>
          </div>
           <div className="relative h-80 w-80 mx-auto">
             <Image data-ai-hint="colorful toys" src="https://picsum.photos/seed/toys-hero/600/600" alt="Colorful collection of kids toys" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-800" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <Card className="bg-yellow-100 border-yellow-300 shadow-lg">
                    <CardHeader>
                        <Rocket className="w-12 h-12 text-yellow-600 mx-auto"/>
                        <CardContent className="font-bold text-yellow-800 text-xl pt-4">Imaginative Play</CardContent>
                    </CardHeader>
                </Card>
                <Card className="bg-green-100 border-green-300 shadow-lg">
                    <CardHeader>
                        <Puzzle className="w-12 h-12 text-green-600 mx-auto"/>
                        <CardContent className="font-bold text-green-800 text-xl pt-4">Puzzles &amp; Games</CardContent>
                    </CardHeader>
                </Card>
                <Card className="bg-red-100 border-red-300 shadow-lg">
                    <CardHeader>
                        <GraduationCap className="w-12 h-12 text-red-600 mx-auto"/>
                        <CardContent className="font-bold text-red-800 text-xl pt-4">Learning &amp; STEM</CardContent>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </section>
      
      {/* Top Toys */}
      <section className="py-16 md:py-24 bg-blue-100/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Our Favorite Toys</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topToys.map(toy => (
              <div key={toy.name} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative">
                  <Image data-ai-hint="childrens toy" src={`https://picsum.photos/seed/${toy.imageSeed}/400/400`} alt={toy.name} width={400} height={400} className="object-contain aspect-square"/>
                  <Badge className="absolute top-2 right-2 bg-pink-400 text-white">{toy.age}</Badge>
                </div>
                <h3 className="font-semibold mt-4 text-blue-900">{toy.name}</h3>
                <p className="font-bold text-lg text-blue-700">{toy.price}</p>
                 <Button size="sm" className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900">Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Safety Promise */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-800" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Safety is Our Priority</h2>
            <p className="mt-4 text-blue-700">Every toy in our store is rigorously tested to meet the highest safety standards. We believe in non-toxic materials and durable construction, so you can have peace of mind while your little ones play.</p>
             <Image data-ai-hint="child playing" src="https://picsum.photos/seed/toy-safety/600/400" alt="Child happily playing with a safe wooden toy" width={600} height={400} className="rounded-lg object-cover mt-8 mx-auto shadow-md" />
        </div>
      </section>
      
    </div>
  )
}
