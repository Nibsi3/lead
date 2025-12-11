'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SaasProduct({ template }: { template: any }) {
    const features = [
        { name: "Real-time Collaboration", description: "Work together with your team seamlessly, with live updates and comments." },
        { name: "Advanced Analytics", description: "Gain deep insights into your data with our powerful analytics dashboard." },
        { name: "Workflow Automation", description: "Automate repetitive tasks and streamline your processes to save time." },
        { name: "Secure & Reliable", description: "Enterprise-grade security and a 99.9% uptime guarantee." },
    ];
    
    const plans = [
        { name: "Starter", price: "$49/mo", description: "For individuals and small teams.", features: ["Up to 5 users", "Core features", "10GB storage"] },
        { name: "Pro", price: "$99/mo", description: "For growing businesses.", features: ["Up to 20 users", "Advanced features", "100GB storage", "Priority support"], popular: true },
        { name: "Enterprise", price: "Custom", description: "For large organizations.", features: ["Unlimited users", "Dedicated support", "Custom integrations"] },
    ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 bg-background/90 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:text-primary">Features</Link>
            <Link href="#pricing" className="hover:text-primary">Pricing</Link>
            <Link href="#integrations" className="hover:text-primary">Integrations</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Log In</Button>
            <Button>Get Started Free</Button>
          </div>
        </div>
      </header>
      
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">The Operating System for Modern Business</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A unified platform to manage your projects, clients, and team. Stop switching between apps and start getting work done.</p>
            <Button size="lg" className="mt-8">Start your 14-day free trial</Button>
             <div className="mt-16">
                 <Image data-ai-hint="saas dashboard" src={template.previewUrl} alt="SaaS product dashboard" width={1200} height={800} className="rounded-xl shadow-2xl" />
             </div>
        </div>
      </section>

      {/* Features */}
       <section id="features" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Everything you need, all in one place.</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">Our platform is designed to be powerful, yet intuitive.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map(feature => (
              <div key={feature.name} className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1"><Check className="w-5 h-5"/></div>
                <div>
                  <h3 className="font-semibold">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
       <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Pricing that scales with you</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map(plan => (
                <Card key={plan.name} className={plan.popular ? "border-primary border-2" : ""}>
                    <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <p className="text-4xl font-bold pt-2">{plan.price}</p>
                        <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {plan.features.map(feature => (
                             <p key={feature} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0"/>{feature}</p>
                        ))}
                    </CardContent>
                    <CardFooter>
                         <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Choose Plan</Button>
                    </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
