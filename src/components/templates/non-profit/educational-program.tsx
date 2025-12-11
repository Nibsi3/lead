'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EducationalProgram({ template }: { template: any }) {
    const programs = [
        { title: "Early Literacy Initiative", description: "Providing books and reading support for children ages 0-5.", imageSeed: "edu1" },
        { title: "STEM Summer Camp", description: "An immersive, week-long camp for middle schoolers to explore science and technology.", imageSeed: "edu2" },
        { title: "Adult Education & GED Prep", description: "Free classes and tutoring for adults seeking to continue their education.", imageSeed: "edu3" },
    ];
  return (
    <div className="w-full bg-blue-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2 text-blue-800"><GraduationCap/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#programs" className="hover:text-blue-600">Our Programs</Link>
            <Link href="#about" className="hover:text-blue-600">About Us</Link>
            <Link href="#support" className="hover:text-blue-600">Support</Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Donate</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-blue-100">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900">Unlocking Potential Through Education.</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
                Providing free, accessible educational resources and programs to empower individuals and strengthen our community.
            </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {programs.map(program => (
                    <Card key={program.title} className="shadow-md hover:shadow-xl transition-shadow">
                        <CardHeader className="p-0">
                            <Image data-ai-hint="learning education" src={`https://picsum.photos/seed/${program.imageSeed}/600/400`} alt={program.title} width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
                        </CardHeader>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold">{program.title}</h3>
                            <p className="text-slate-600 mt-2">{program.description}</p>
                            <Button variant="link" className="p-0 mt-4 text-blue-600">Learn More</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="support" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">Your Support Matters</h2>
                <p className="text-slate-700 text-lg">
                    Every donation helps us provide free books, classroom supplies, and expert instruction to students of all ages. A gift of just $25 can provide a month of tutoring for an adult learner.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Donate Today</Button>
            </div>
            <div>
                 <Image data-ai-hint="student learning" src="https://picsum.photos/seed/edu-support/600/450" alt="Student receiving one-on-one tutoring" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>
    </div>
  )
}
