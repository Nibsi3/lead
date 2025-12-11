'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, User, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Bookstore({ template }: { template: any }) {
    const books = [
        { title: "The Midnight Library", author: "Matt Haig", imageSeed: "book1" },
        { title: "Project Hail Mary", author: "Andy Weir", imageSeed: "book2" },
        { title: "Klara and the Sun", author: "Kazuo Ishiguro", imageSeed: "book3" },
        { title: "The Four Winds", author: "Kristin Hannah", imageSeed: "book4" },
    ];
    const newReleases = [
        { title: "Crying in H Mart", author: "Michelle Zauner", imageSeed: "book5" },
        { title: "The Hill We Climb", author: "Amanda Gorman", imageSeed: "book6" },
        { title: "Malibu Rising", author: "Taylor Jenkins Reid", imageSeed: "book7" },
        { title: "Great Circle", author: "Maggie Shipstead", imageSeed: "book8" },
    ];
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <span className="font-bold text-2xl font-serif">{template.name}</span>
                </div>
                 <div className="flex items-center gap-4 text-sm">
                     <a href="#" className="hover:text-primary">My Account <User className="inline w-4 h-4"/></a>
                     <a href="#" className="hover:text-primary">Cart <ShoppingBag className="inline w-4 h-4"/></a>
                 </div>
            </div>
            <div className="relative">
                <Input placeholder="Search for books, authors, or genres..." className="pl-10 h-11"/>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
            </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Find Your Next Great Read</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Explore thousands of titles from beloved authors and discover new voices. Free shipping on orders over $50.</p>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold font-serif mb-8 text-center">Bestsellers</h2>
             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {books.map(book => (
                    <div key={book.title} className="text-center group">
                         <Image data-ai-hint="book cover" src={`https://picsum.photos/seed/${book.imageSeed}/400/600`} alt={book.title} width={400} height={600} className="rounded-md shadow-lg object-cover aspect-[2/3] mx-auto group-hover:shadow-2xl group-hover:-translate-y-2 transition-all" />
                        <h3 className="font-semibold mt-4">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">New Releases</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                {newReleases.map(book => (
                    <div key={book.title} className="text-left group">
                        <Image data-ai-hint="book cover" src={`https://picsum.photos/seed/${book.imageSeed}/400/600`} alt={book.title} width={400} height={600} className="rounded-md shadow-md object-cover aspect-[2/3] group-hover:shadow-xl transition-shadow" />
                        <h3 className="font-semibold mt-3 text-sm">{book.title}</h3>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                    </div>
                ))}
             </div>
              <div className="text-center mt-12">
                <Button variant="outline">Browse All New Titles</Button>
            </div>
        </div>
      </section>

      {/* Staff Picks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
                 <Image data-ai-hint="book cover" src="https://picsum.photos/seed/staff-pick/400/600" alt="Staff Pick Book" width={400} height={600} className="rounded-lg shadow-2xl object-cover aspect-[2/3] mx-auto" />
            </div>
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
                <Badge variant="secondary">Staff Pick of the Month</Badge>
                <h2 className="text-3xl font-bold font-serif">"The Vanishing Half" by Brit Bennett</h2>
                <p className="text-lg text-muted-foreground">"A stunning and emotional family story about inseparable twin sisters who choose to live in two very different worlds, one black and one white. A must-read!"</p>
                <p className="font-semibold">- Emily, Lead Bookseller</p>
                <Button>Add to Cart</Button>
            </div>
        </div>
      </section>

       {/* Newsletter CTA */}
       <section className="bg-primary text-primary-foreground py-16">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-serif">Join Our Newsletter</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-xl mx-auto">Get the latest on new releases, author events, and exclusive deals delivered to your inbox.</p>
            <form className="flex gap-2 max-w-md mx-auto mt-6">
                <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-black" />
                <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
         </div>
       </section>

    </div>
  )
}
