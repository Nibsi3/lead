'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck, Zap, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FintechSolution({ template }: { template: any }) {
    const features = [
        { icon: <Zap/>, title: "Instant Payments", description: "Send and receive money globally in seconds, not days." },
        { icon: <ShieldCheck/>, title: "Bank-Grade Security", description: "Your data and funds are protected by multi-layer security protocols." },
        { icon: <Globe/>, title: "Global Accounts", description: "Open multi-currency accounts and operate your business across borders." },
    ]
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:text-primary">Features</Link>
            <Link href="#solutions" className="hover:text-primary">Solutions</Link>
            <Link href="#security" className="hover:text-primary">Security</Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">The Future of Financial Operations.</h1>
                <p className="text-lg text-muted-foreground">A unified platform for global payments, treasury, and financial management for modern businesses.</p>
                <div className="flex gap-4">
                    <Button size="lg">Request a Demo</Button>
                    <Button size="lg" variant="outline">Sign Up</Button>
                </div>
            </div>
            <div>
                 <Image data-ai-hint="finance app" src={template.previewUrl} alt="Fintech app dashboard" width={600} height={500} className="rounded-lg shadow-2xl" />
            </div>
        </div>
      </section>

      {/* Features */}
       <section id="features" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Empowering Global Commerce</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map(feature => (
                    <div key={feature.title} className="text-center">
                        <div className="text-primary bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">{feature.icon}</div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* CTA */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold">Ready to simplify your finances?</h2>
            <p className="mt-4 text-muted-foreground text-lg">Create an account in minutes and start managing your global finances from a single, powerful platform.</p>
            <Button size="lg" className="mt-8">
                Open a Free Account <ArrowRight className="ml-2"/>
            </Button>
        </div>
       </section>
    </div>
  )
}
