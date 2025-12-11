'use client'

import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PersonalTrainer({ template }: { template: any }) {
  const programs = [
      { title: "One-on-One Training", description: "Personalized workout plans and coaching tailored to your specific goals.", icon: <Dumbbell/> },
      { title: "Nutritional Guidance", description: "Custom meal plans and advice to fuel your body and optimize results.", icon: <Apple/> },
      { title: "Lifestyle Coaching", description: "Build sustainable habits for long-term health and wellness.", icon: <Heart/> },
  ];
  return (
    <div className="w-full bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#programs" className="hover:text-primary">Programs</Link>
            <Link href="#about" className="hover:text-primary">About Me</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="relative h-[80vh] w-full">
         <Image data-ai-hint="person working out" src={template.previewUrl} alt="Person working out in a gym" fill className="object-cover object-top opacity-40"/>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
         <div className="relative h-full flex flex-col justify-end pb-20 px-4 container mx-auto">
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-2xl">Transform Your Body, Transform Your Life.</h1>
             <p className="mt-4 text-lg text-slate-300">Personalized fitness coaching to help you reach your peak potential.</p>
         </div>
      </section>
      
      {/* Programs */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">My Coaching Programs</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {programs.map(program => (
                    <div key={program.title} className="p-6 border border-slate-800 rounded-lg bg-slate-900/50">
                         <div className="text-primary mx-auto w-fit p-3 bg-primary/10 rounded-full mb-4">{program.icon}</div>
                         <h3 className="font-semibold text-xl">{program.title}</h3>
                         <p className="text-sm text-slate-400 mt-2">{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

       {/* About */}
      <section id="about" className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">Meet Your Coach</h2>
                <p className="text-slate-300 text-lg">
                    As a certified personal trainer and nutritionist, my mission is to empower you to become the strongest, healthiest version of yourself. I don't believe in quick fixes or one-size-fits-all plans. Instead, I work with you to create a sustainable, personalized program that fits your lifestyle and delivers real, lasting results.
                </p>
            </div>
            <div>
                 <Image data-ai-hint="fitness trainer" src="https://picsum.photos/seed/pt-portrait/600/700" alt="Portrait of the personal trainer" width={600} height={700} className="rounded-lg object-cover" />
            </div>
        </div>
      </section>
      
       {/* CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
             <h2 className="text-4xl font-bold">Ready to Start Your Transformation?</h2>
             <p className="mt-4 text-lg text-slate-300">
                Your first consultation is free. Let's talk about your goals and how I can help you achieve them.
            </p>
             <Button size="lg" className="mt-8">Book a Free Consultation</Button>
        </div>
      </section>
    </div>
  )
}
