'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, TrendingUp, PiggyBank, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinanceBlog({ template }: { template: any }) {
    const posts = [
        { title: "5 Steps to Build an Emergency Fund (and Why You Need One)", category: "Budgeting", imageSeed: "fin1" },
        { title: "A Beginner's Guide to Investing in Index Funds", category: "Investing", imageSeed: "fin2" },
        { title: "How to Negotiate Your Salary Like a Pro", category: "Career", imageSeed: "fin3" },
    ];

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <Link href="#" className="flex items-center gap-2 text-xl font-bold text-primary">
                <TrendingUp size={24}/> {template.name}
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                <Link href="#" className="hover:text-primary">Investing</Link>
                <Link href="#" className="hover:text-primary">Budgeting</Link>
                <Link href="#" className="hover:text-primary">Retirement</Link>
            </nav>
            <Button size="sm">Get Our Newsletter</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">Take Control of Your Financial Future.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Smart, actionable financial advice for everyday people. Learn to save, invest, and build wealth with confidence.
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
                 <div className="grid gap-8">
                    {posts.map(post => (
                        <Link href="#" key={post.title} className="group grid md:grid-cols-3 gap-6 items-center">
                            <div className="overflow-hidden rounded-lg">
                                <Image data-ai-hint="finance chart" src={`https://picsum.photos/seed/${post.imageSeed}/400/300`} alt={post.title} width={400} height={300} className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm font-semibold text-primary">{post.category}</p>
                                <h3 className="text-xl font-bold mt-1 group-hover:underline">{post.title}</h3>
                            </div>
                        </Link>
                    ))}
                 </div>
            </div>
            {/* Sidebar */}
            <aside className="space-y-8">
                <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-bold text-lg">Subscribe for Updates</h3>
                    <p className="text-sm text-slate-500 mt-1">Get our best financial tips delivered weekly.</p>
                     <form className="mt-4 space-y-2">
                        <Input placeholder="Email Address"/>
                        <Button className="w-full">Subscribe</Button>
                     </form>
                </div>
                 <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-bold text-lg">Popular Categories</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-center gap-2"><PiggyBank size={16} className="text-primary"/> <Link href="#" className="hover:underline">Saving & Budgeting</Link></li>
                        <li className="flex items-center gap-2"><TrendingUp size={16} className="text-primary"/> <Link href="#" className="hover:underline">Investing Basics</Link></li>
                        <li className="flex items-center gap-2"><Briefcase size={16} className="text-primary"/> <Link href="#" className="hover:underline">Career & Income</Link></li>
                    </ul>
                </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Free Tool CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
                 <h2 className="text-3xl font-bold">Try Our Free Budgeting Tool</h2>
                 <p className="text-primary-foreground/80">
                    Take the first step towards financial freedom. Our simple tool helps you track your spending and identify savings opportunities in minutes.
                 </p>
            </div>
            <div className="flex justify-center md:justify-end">
                <Button variant="secondary" size="lg">Get Started Free <ArrowRight className="ml-2"/></Button>
            </div>
        </div>
      </section>
    </div>
  )
}
