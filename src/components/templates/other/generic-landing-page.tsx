'use client'

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function GenericLandingPage({ template }: { template: any }) {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="font-bold text-xl">{template.name}</div>
          <Button>Get Started</Button>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Solve Your Problem With Our Solution</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                This is a compelling description of your product or service. Explain the main benefit and why your audience should be excited about it.
            </p>
            <Button size="lg" className="mt-8">Sign Up Now</Button>
        </div>
      </section>
      
      {/* Feature Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">A Powerful Feature That You'll Love</h2>
                <p className="text-muted-foreground text-lg">
                    Describe a key feature in detail. Focus on how it benefits the user and solves a specific pain point they might be experiencing.
                </p>
                <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 font-medium"><Check className="text-primary"/>Benefit one of this feature.</li>
                    <li className="flex items-center gap-2 font-medium"><Check className="text-primary"/>Benefit two of this feature.</li>
                    <li className="flex items-center gap-2 font-medium"><Check className="text-primary"/>Benefit three, which is very important.</li>
                </ul>
            </div>
            <div>
                <Image data-ai-hint="feature screenshot" src={template.previewUrl} alt="Feature screenshot" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <blockquote className="text-2xl italic text-muted-foreground">
             "This product completely changed the way we work. It's intuitive, powerful, and has saved us countless hours. I can't recommend it enough!"
            </blockquote>
            <p className="mt-4 font-semibold">- A Happy Customer</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-2 text-muted-foreground">Sign up today for a 14-day free trial. No credit card required.</p>
            <Button size="lg" className="mt-6">Start Your Free Trial</Button>
        </div>
      </section>
    </div>
  )
}
