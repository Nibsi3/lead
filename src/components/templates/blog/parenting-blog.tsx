'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Laugh, ToyBrick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParentingBlog({ template }: { template: any }) {
    const posts = [
        { title: "10 Screen-Free Activities for a Rainy Day", imageSeed: "parent1", category: "Activities" },
        { title: "Navigating the Toddler Years Without Losing Your Mind", imageSeed: "parent2", category: "Parenting" },
        { title: "Easy & Healthy Snacks Your Kids Will Actually Eat", imageSeed: "parent3", category: "Recipes" },
    ];
  return (
    <div className="w-full bg-cyan-50 text-slate-800" style={{fontFamily: "'Poppins', sans-serif"}}>
      {/* Header */}
      <header className="sticky top-0 bg-cyan-50/90 backdrop-blur-sm z-20 border-b border-cyan-100">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="text-2xl font-bold text-cyan-800">{template.name}</Link>
             <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-cyan-700">
                <Link href="#" className="hover:text-cyan-900">Parenting</Link>
                <Link href="#" className="hover:text-cyan-900">Activities</Link>
                <Link href="#" className="hover:text-cyan-900">Recipes</Link>
                <Link href="#" className="hover:text-cyan-900">About Me</Link>
            </nav>
        </div>
      </header>

       {/* Hero */}
      <section className="py-16 md:py-24 bg-cyan-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-900">Surviving and Thriving in Parenthood</h1>
          <p className="mt-4 text-lg text-cyan-800 max-w-2xl mx-auto">
            A real-life guide to the beautiful chaos of raising little humans. Tips, tricks, and a whole lot of love.
          </p>
        </div>
      </section>
      
      {/* Featured Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-900">Popular Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.map(post => (
                    <Card key={post.title} className="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader className="p-0">
                            <Image data-ai-hint="kids playing" src={`https://picsum.photos/seed/${post.imageSeed}/600/400`} alt={post.title} width={600} height={400} className="object-cover aspect-video group-hover:scale-105 transition-transform" />
                        </CardHeader>
                         <CardContent className="p-6">
                            <p className="text-xs font-semibold text-cyan-600 uppercase">{post.category}</p>
                            <CardTitle className="mt-1 text-xl group-hover:text-cyan-800">{post.title}</CardTitle>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-cyan-100/70">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                 <Image data-ai-hint="parent with child" src="https://picsum.photos/seed/parent-portrait/600/600" alt="Parent holding a child" width={600} height={600} className="rounded-full aspect-square object-cover" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
                <h2 className="text-3xl font-bold text-cyan-900">Welcome to the Club!</h2>
                <p className="text-slate-700 text-lg">
                    Hi, I'm {template.name.split(" ")[0]} - a mom of two trying to navigate this wild ride called parenthood. This blog is my journal, my sanity-saver, and my community. I share honest stories, practical advice, and anything that makes this journey a little easier and a lot more fun. Glad you're here!
                </p>
            </div>
        </div>
      </section>

       {/* Subscribe */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
             <h2 className="text-3xl font-bold text-cyan-900">Join Our Community</h2>
             <p className="text-slate-700 mt-2">Get our latest posts and a weekly dose of encouragement straight to your inbox.</p>
             <form className="flex gap-2 mt-6">
                <Input type="email" placeholder="Your email" className="flex-1 bg-white"/>
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">Subscribe</Button>
             </form>
        </div>
      </section>

    </div>
  )
}
