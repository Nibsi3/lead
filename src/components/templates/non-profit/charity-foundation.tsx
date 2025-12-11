'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HandHeart, Target, Droplet } from "lucide-react";
import Image from "next/image";

export default function CharityFoundation({ template }: { template: any }) {
    const stats = [
        { value: "$1.2M", label: "Raised for Clean Water Projects" },
        { value: "5,000+", label: "Lives Impacted Directly" },
        { value: "15", label: "Active Projects Globally" },
    ];
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="font-bold text-xl flex items-center gap-2"><HandHeart className="text-primary"/> {template.name}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#mission" className="hover:text-primary">Our Mission</a>
            <a href="#impact" className="hover:text-primary">Our Impact</a>
            <a href="#get-involved" className="hover:text-primary">Get Involved</a>
          </nav>
          <Button>Donate Now</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[70vh] w-full">
         <Image data-ai-hint="child drinking water" src={template.previewUrl} alt="Child drinking clean water" fill className="object-cover"/>
         <div className="absolute inset-0 bg-black/60"></div>
         <div className="relative h-full flex flex-col justify-center text-white p-4 container mx-auto">
             <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Hope in Every Drop.</h1>
                <p className="mt-4 text-xl text-slate-200">Bringing clean, safe drinking water to communities in need around the world.</p>
                <Button size="lg" className="mt-8">Make a Difference</Button>
            </div>
         </div>
      </section>
      
       {/* Stats */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map(stat => (
                    <div key={stat.label}>
                        <p className="text-4xl font-bold">{stat.value}</p>
                        <p className="text-sm opacity-80">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <h2 className="text-4xl font-bold font-headline">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                    Access to clean water is a fundamental human right. Our mission is to work with local partners to build sustainable, community-owned water projects. We don't just build wells; we empower communities with the tools, training, and resources to manage their water systems for generations to come.
                </p>
            </div>
            <div>
                 <Image data-ai-hint="community well" src="https://picsum.photos/seed/np-mission/600/450" alt="Community members at a newly built well" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-headline">See Your Impact</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Every donation, no matter the size, makes a tangible difference.</p>
            </div>
            <Card>
                <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold">The Uganda Well Project</h3>
                        <p className="text-muted-foreground mt-2">Our latest project in the village of Kasese is 85% complete and will soon provide clean water for over 1,200 people, including a primary school and a local clinic.</p>
                        <Progress value={85} className="mt-4" />
                        <p className="text-sm text-muted-foreground mt-2"><strong>$8,500 raised</strong> of $10,000 goal</p>
                        <Button variant="outline" className="mt-4">Learn More & Contribute</Button>
                    </div>
                     <Image data-ai-hint="african village" src="https://picsum.photos/seed/np-impact/600/400" alt="Village in Uganda" width={600} height={400} className="rounded-lg" />
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold font-headline">How You Can Help</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
                <Card className="text-left">
                    <CardHeader>
                        <CardTitle>Donate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Your one-time or monthly donation directly funds our water projects.</p>
                        <Button className="mt-4">Give Today</Button>
                    </CardContent>
                </Card>
                 <Card className="text-left">
                    <CardHeader>
                        <CardTitle>Fundraise</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Start a fundraising campaign with your friends, family, or company.</p>
                        <Button variant="secondary" className="mt-4">Start a Campaign</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
    </div>
  )
}
