'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Feather } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RealEstateBlog({ template }: { template: any }) {
    const posts = [
        { title: "5 Tips for First-Time Homebuyers in a Competitive Market", category: "Buying", imageSeed: "re-blog1", excerpt: "Navigating today's market can be tough. Here are five essential tips to give you an edge." },
        { title: "Staging Your Home to Sell: The Ultimate ROI", category: "Selling", imageSeed: "re-blog2", excerpt: "Learn how a small investment in staging can lead to a much faster sale and a higher price." },
        { title: "Is a Fixer-Upper Right for You? Pros and Cons", category: "Investing", imageSeed: "re-blog3", excerpt: "Thinking of buying a property that needs some love? We break down the potential benefits and pitfalls." },
    ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="flex items-center gap-2">
                <Feather className="w-6 h-6 text-primary"/>
                <span className="font-bold text-xl">{template.name}</span>
            </Link>
             <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                <Link href="#" className="hover:text-primary">Buying</Link>
                <Link href="#" className="hover:text-primary">Selling</Link>
                <Link href="#" className="hover:text-primary">Investing</Link>
                <Link href="#" className="hover:text-primary">Market News</Link>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Your Guide to the Real Estate World</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Expert insights, market trends, and practical advice for buyers, sellers, and investors.
          </p>
        </div>
      </section>

      {/* Main Content */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Post Feed */}
            <div className="md:col-span-2">
                 <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                 <div className="grid gap-10">
                    {posts.map(post => (
                        <Link href="#" key={post.title} className="group grid sm:grid-cols-3 gap-6 items-start">
                            <div className="overflow-hidden rounded-lg sm:col-span-1">
                                <Image data-ai-hint="real estate" src={`https://picsum.photos/seed/${post.imageSeed}/400/300`} alt={post.title} width={400} height={300} className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="sm:col-span-2">
                                <Badge variant="secondary">{post.category}</Badge>
                                <h3 className="text-xl font-bold mt-2 group-hover:text-primary">{post.title}</h3>
                                <p className="text-slate-500 mt-2 text-sm">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                 </div>
            </div>
            {/* Sidebar */}
            <aside className="space-y-8">
                <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                        <CardTitle>Subscribe</CardTitle>
                        <CardDescription>Get weekly real estate insights delivered to your inbox.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <form className="space-y-2">
                            <Input placeholder="Email Address"/>
                            <Button className="w-full">Subscribe</Button>
                         </form>
                    </CardContent>
                </Card>
                 <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                        <CardTitle>Popular Topics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm font-medium">
                           <li><Link href="#" className="hover:text-primary">Mortgage Rates</Link></li>
                           <li><Link href="#" className="hover:text-primary">Home Inspection</Link></li>
                           <li><Link href="#" className="hover:text-primary">Market Forecast</Link></li>
                           <li><Link href="#" className="hover:text-primary">Negotiation Tactics</Link></li>
                        </ul>
                    </CardContent>
                </Card>
            </aside>
          </div>
        </div>
      </section>

    </div>
  )
}
