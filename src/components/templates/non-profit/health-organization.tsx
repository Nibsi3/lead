'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartPulse, Stethoscope, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HealthOrganization({ template }: { template: any }) {
    const focusAreas = [
        { title: "Preventive Care", description: "Free health screenings and wellness education for underserved communities.", icon: <Stethoscope/> },
        { title: "Maternal Health", description: "Providing essential pre-natal and post-natal care for mothers and infants.", icon: <HeartPulse/> },
        { title: "Medical Supplies", description: "Distributing critical medical supplies to clinics in low-resource areas.", icon: <PlusCircle/> },
    ]
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2 text-red-600"><HeartPulse/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#mission" className="hover:text-red-600">Our Work</Link>
            <Link href="#stories" className="hover:text-red-600">Stories</Link>
            <Link href="#involved" className="hover:text-red-600">Get Involved</Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
        </div>
      </header>

       {/* Hero */}
      <section className="relative h-[60vh] w-full">
         <Image data-ai-hint="doctor patient" src={template.previewUrl} alt="Doctor listening to a patient's heartbeat" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/50"></div>
         <div className="relative h-full flex flex-col justify-center text-white p-4 container mx-auto">
             <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold">Health and Hope for All.</h1>
                <p className="mt-4 text-xl text-slate-200">Delivering essential healthcare services to the world's most vulnerable populations.</p>
            </div>
         </div>
      </section>

      {/* Focus Areas */}
      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Focus</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {focusAreas.map(area => (
                    <Card key={area.title} className="text-center shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="text-red-600 bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">{area.icon}</div>
                            <CardTitle>{area.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Story of Impact */}
       <section id="stories" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image data-ai-hint="mother child" src="https://picsum.photos/seed/np-health-story/600/500" alt="Mother holding a healthy baby" width={600} height={500} className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-4">
                <p className="font-semibold text-red-600">STORY OF IMPACT</p>
                <h2 className="text-3xl font-bold">A Healthy Start for Maria</h2>
                <p className="text-muted-foreground text-lg">
                    Thanks to our mobile clinic, Maria, a young mother from a remote village, received the prenatal care she needed to ensure a safe delivery. Today, her baby girl is thriving. Your donations make stories like this possible.
                </p>
                <Button variant="outline">Read More Stories</Button>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section id="involved" className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold">Join Us. Save Lives.</h2>
             <p className="mt-4 text-lg max-w-2xl mx-auto text-red-100">
                Your support can provide life-saving medical care to a child, a mother, a family in need.
            </p>
             <Button size="lg" variant="secondary" className="mt-8 bg-white text-red-700 hover:bg-slate-100">Make Your Gift Today</Button>
        </div>
      </section>
    </div>
  )
}
