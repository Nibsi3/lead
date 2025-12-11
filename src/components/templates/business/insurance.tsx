
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Car, Heart, Building, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Insurance({ template }: { template: any }) {
    const insuranceTypes = [
        { icon: <Home className="w-5 h-5"/>, name: 'Home Insurance'},
        { icon: <Car className="w-5 h-5"/>, name: 'Auto Insurance'},
        { icon: <Heart className="w-5 h-5"/>, name: 'Life Insurance'},
        { icon: <Building className="w-5 h-5"/>, name: 'Business Insurance'},
    ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Peace of Mind for What Matters Most</h1>
                <p className="text-xl text-primary-foreground/80">
                    Find the right coverage for your life, home, and business. We make insurance simple, transparent, and affordable.
                </p>
            </div>
            <Card className="text-card-foreground shadow-2xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Get a Free Quote Today</CardTitle>
                    <CardDescription>It's fast, easy, and there's no obligation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="zip">ZIP Code</Label>
                                <Input id="zip" placeholder="Your ZIP Code" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                        <Button type="submit" className="w-full" size="lg">Request My Quote</Button>
                         <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our terms and conditions.</p>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>
      
      {/* Insurance Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Coverage For Every Aspect of Your Life</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">From your morning commute to your family's future, we've got you covered.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {insuranceTypes.map(type => (
                    <Card key={type.name} className="flex flex-col items-center justify-center p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">{type.icon}</div>
                        <h3 className="font-semibold">{type.name}</h3>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Why Millions Trust Us</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We're more than just an insurance company. We're your partner in protection.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-5xl font-bold text-primary">24/7</h3>
              <p className="mt-2 font-semibold text-lg">Claims Support</p>
              <p className="text-sm text-muted-foreground">Our dedicated team is always available to help you when you need it most, day or night.</p>
            </div>
            <div className="p-4">
              <h3 className="text-5xl font-bold text-primary">95%</h3>
              <p className="mt-2 font-semibold text-lg">Customer Satisfaction</p>
              <p className="text-sm text-muted-foreground">We pride ourselves on providing exceptional service and support, and our customers agree.</p>
            </div>
            <div className="p-4">
              <h3 className="text-5xl font-bold text-primary">$10B+</h3>
              <p className="mt-2 font-semibold text-lg">In Claims Paid</p>
              <p className="text-sm text-muted-foreground">You can count on us to be there for you financially when the unexpected happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <Image data-ai-hint="happy family" src="https://picsum.photos/seed/insurance-client/100/100" alt="Happy client" width={100} height={100} className="rounded-full mx-auto mb-4" />
                <blockquote className="text-xl italic text-muted-foreground">
                    "Switching was the best decision I've made. The process was seamless, and I saved hundreds while getting better coverage. Their team is fantastic and truly cares!"
                </blockquote>
                <p className="mt-4 font-semibold text-lg">Sarah L., Home &amp; Auto Customer</p>
            </div>
        </div>
      </section>
    </div>
  )
}
