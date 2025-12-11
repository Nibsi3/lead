'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function OnlineCourse({ template }: { template: any }) {
    const curriculum = [
        "Module 1: Introduction to Web Development",
        "Module 2: HTML & CSS Fundamentals",
        "Module 3: JavaScript for Beginners",
        "Module 4: Building Interactive UIs with React",
        "Module 5: Final Project - Build and Deploy Your First App"
    ];
  return (
    <div className="w-full bg-background text-foreground">
       {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="font-bold text-xl">{template.name}</div>
          <Button>Enroll Now</Button>
        </div>
      </header>
      
      {/* Hero */}
       <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Master Web Development: From Zero to Hero</h1>
                <p className="text-lg text-muted-foreground">
                    A comprehensive, project-based online course designed to take you from a complete beginner to a job-ready front-end developer.
                </p>
                <Button size="lg">Enroll for $299</Button>
            </div>
             <div className="relative aspect-video">
                 <Image data-ai-hint="coding on laptop" src={template.previewUrl} alt="Laptop with code on screen" fill className="rounded-lg shadow-xl" />
                 <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white/80 cursor-pointer"/>
                 </div>
            </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">What You'll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                <p className="flex items-start gap-2"><Check className="text-primary mt-1"/>Build modern, responsive websites with HTML5 and CSS3.</p>
                <p className="flex items-start gap-2"><Check className="text-primary mt-1"/>Master the fundamentals of JavaScript (ES6+).</p>
                <p className="flex items-start gap-2"><Check className="text-primary mt-1"/>Create dynamic user interfaces with React and its ecosystem.</p>
                <p className="flex items-start gap-2"><Check className="text-primary mt-1"/>Deploy your applications to the web.</p>
            </div>
        </div>
      </section>

      {/* Curriculum */}
       <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Course Curriculum</h2>
            <Accordion type="single" collapsible className="w-full">
                {curriculum.map((item, index) => (
                     <AccordionItem value={`item-${index+1}`} key={item}>
                        <AccordionTrigger>{item}</AccordionTrigger>
                        <AccordionContent>
                        Detailed lesson plans and project descriptions for this module will appear here.
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
       </section>

       {/* Instructor */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
             <Image data-ai-hint="instructor portrait" src="https://picsum.photos/seed/course-inst/120/120" alt="Course instructor" width={120} height={120} className="rounded-full mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-headline">Your Instructor</h2>
            <p className="text-primary font-medium mt-1">Jane Doe, Senior Software Engineer</p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                With over 10 years of experience building applications for top tech companies, I'm passionate about sharing my knowledge and helping aspiring developers launch their careers.
            </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Start Learning Today</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-xl mx-auto">
                Join hundreds of successful students. Enroll now and take the first step towards your new career in tech.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
                Enroll Now
            </Button>
        </div>
      </section>
    </div>
  )
}
