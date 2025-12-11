'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Book, Feather, Newspaper } from "lucide-react";
import Link from "next/link";

export default function Writer({ template }: { template: any }) {
    const portfolio = [
        {
            title: "The Alchemy of Scars",
            category: "Novel (Published 2023)",
            description: "A bestselling historical fiction novel exploring the hidden lives of women in Renaissance Venice.",
            icon: <Book />
        },
        {
            title: "Wired for Tomorrow: The AI Revolution",
            category: "Feature Article, Tech Today Magazine",
            description: "A deep-dive investigative piece on the societal impacts of artificial intelligence.",
            icon: <Newspaper />
        },
        {
            title: "Aura Skincare: The Essence of Nature",
            category: "Brand Copy & Content Strategy",
            description: "Developed the complete brand voice, website copy, and content marketing strategy for a leading organic skincare brand.",
            icon: <Feather />
        },
    ];

  return (
    <div className="w-full bg-[#f9f9f9] text-gray-800 font-serif">
      {/* Header */}
      <header className="sticky top-0 bg-[#f9f9f9]/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-2xl font-bold tracking-tight">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#portfolio" className="hover:text-primary">Portfolio</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-36 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            Words that Resonate. Stories that Endure.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a professional writer and editor crafting compelling narratives for brands, publications, and authors.
        </p>
        <Button size="lg" className="mt-8">
            Work With Me <ArrowRight className="ml-2" />
        </Button>
      </section>
      
      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">My Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <h3 className="text-2xl font-semibold">Copywriting & Content</h3>
                    <p className="mt-2 text-gray-600">Website copy, blog posts, email marketing, and social media content that engages your audience and drives results.</p>
                </div>
                 <div className="text-center p-6">
                    <h3 className="text-2xl font-semibold">Ghostwriting & Editing</h3>
                    <p className="mt-2 text-gray-600">From full-length books to articles and memoirs, I help you find your voice and tell your story with clarity and impact.</p>
                </div>
                 <div className="text-center p-6">
                    <h3 className="text-2xl font-semibold">Brand Storytelling</h3>
                    <p className="mt-2 text-gray-600">Developing a powerful brand narrative that connects with your customers on an emotional level.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 md:py-24 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Selected Works</h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-md">{item.icon}</div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <blockquote className="text-2xl font-light italic text-gray-700">
             "She has an incredible talent for capturing the essence of a story and translating it into words that are both beautiful and powerful. Working with her was a transformative experience for my manuscript."
            </blockquote>
            <p className="mt-6 font-semibold">- J. Henderson, Author</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to tell your story?</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-gray-300">Let's discuss your project and how I can help bring it to life.</p>
          <Button size="lg" variant="secondary" className="mt-8">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  )
}
