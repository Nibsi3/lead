'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Users, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VolunteerHub({ template }: { template: any }) {
    const opportunities = [
        { title: "Community Garden Helper", organization: "Green Thumbs Initiative", imageSeed: "vh1" },
        { title: "Animal Shelter Assistant", organization: "Paws & Hearts Rescue", imageSeed: "vh2" },
        { title: "Youth Mentor", organization: "Big Futures Program", imageSeed: "vh3" },
    ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-bold text-xl flex items-center gap-2"><Heart className="text-primary"/> {template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#search" className="hover:text-primary">Find Opportunities</Link>
            <Link href="#nonprofits" className="hover:text-primary">For Non-Profits</Link>
          </nav>
          <Button variant="outline">Log In / Sign Up</Button>
        </div>
      </header>

      {/* Hero */}
      <section id="search" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Make a Difference in Your Community.</h1>
            <p className="mt-2 text-lg text-muted-foreground">Find volunteer opportunities that match your passion and skills.</p>
            <Card className="mt-8 p-4 md:p-6 w-full max-w-3xl mx-auto shadow-lg text-left">
                <form className="grid md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                         <label className="text-sm font-medium">What are you passionate about?</label>
                         <Input placeholder="e.g., animals, education, environment" className="mt-1"/>
                    </div>
                     <div className="md:col-span-2">
                         <label className="text-sm font-medium">Where do you want to help?</label>
                         <Input placeholder="City or ZIP code" className="mt-1"/>
                    </div>
                     <Button size="lg" className="h-auto self-end w-full md:col-span-1"><Search className="mr-2"/> Find a Match</Button>
                </form>
            </Card>
        </div>
      </section>
      
      {/* Featured Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {opportunities.map(opp => (
                    <Card key={opp.title} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="p-0">
                             <Image data-ai-hint="volunteering" src={`https://picsum.photos/seed/${opp.imageSeed}/600/400`} alt={opp.title} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle>{opp.title}</CardTitle>
                            <CardDescription className="mt-1">{opp.organization}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Learn More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* For Non-Profits */}
      <section id="nonprofits" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <h2 className="text-3xl font-bold">Are you a non-profit?</h2>
                <p className="text-muted-foreground text-lg">
                    Connect with passionate volunteers in your community. Our platform makes it easy to post opportunities, manage applications, and grow your team of supporters.
                </p>
                <Button>Create a Free Organization Profile</Button>
            </div>
            <div>
                 <Image data-ai-hint="team working" src="https://picsum.photos/seed/np-team/600/450" alt="Team of volunteers working together" width={600} height={450} className="rounded-lg shadow-md" />
            </div>
        </div>
      </section>
    </div>
  )
}
