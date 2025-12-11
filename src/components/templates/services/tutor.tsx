'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, FlaskConical, Calculator, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Tutor({ template }: { template: any }) {
    const subjects = [
        { name: "Mathematics", icon: <Calculator/> },
        { name: "English & Writing", icon: <Book/> },
        { name: "Science (Chem & Bio)", icon: <FlaskConical/> },
        { name: "Test Prep (SAT/ACT)", icon: <MessageSquare/> },
    ];
  return (
    <div className="w-full bg-background text-foreground">
       {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#subjects" className="hover:text-primary">Subjects</Link>
            <Link href="#approach" className="hover:text-primary">My Approach</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button>Book a Session</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Unlock Your Academic Potential.</h1>
                <p className="text-lg text-muted-foreground">
                    Personalized, one-on-one tutoring designed to build confidence and achieve results. Specializing in high school math, science, and test preparation.
                </p>
                <Button size="lg">Schedule Your Free Consultation</Button>
            </div>
            <div>
                <Image data-ai-hint="student learning" src={template.previewUrl} alt="Tutor helping a student with their work" width={600} height={450} className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Areas of Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {subjects.map(subject => (
                    <Card key={subject.name} className="text-center p-6">
                        <div className="mx-auto w-fit bg-primary/10 text-primary p-4 rounded-full mb-4">{subject.icon}</div>
                        <h3 className="font-semibold text-lg">{subject.name}</h3>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* Approach */}
       <section id="approach" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-headline">My Teaching Philosophy</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I believe that every student has the ability to succeed. My approach is not about memorization; it's about understanding. I focus on identifying a student's unique learning style and breaking down complex concepts into manageable steps. My goal is to build not just knowledge, but also critical thinking skills and a genuine confidence that extends beyond the classroom.
            </p>
        </div>
      </section>
      
       {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <blockquote className="text-xl italic text-muted-foreground">
             "{template.name.split(' ')[0]} was a game-changer for our son's confidence in math. He went from struggling with algebra to getting an A on his final exam. We're so grateful for the patient and effective teaching!"
            </blockquote>
            <p className="mt-4 font-semibold">- Sarah P., Parent</p>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-xl mx-auto">
                Contact me today to schedule a free 15-minute consultation to discuss your student's needs.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
                Book a Free Consultation
            </Button>
        </div>
      </section>
    </div>
  )
}
