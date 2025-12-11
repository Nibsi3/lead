'use client'

import { Button } from "@/components/ui/button";
import { BarChart, ArrowRight } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, CartesianGrid, XAxis } from "recharts";
import Image from "next/image";
import Link from "next/link";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
};

export default function DataAnalytics({ template }: { template: any }) {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold flex items-center gap-2">
            <BarChart/> {template.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#platform" className="hover:text-primary">Platform</Link>
            <Link href="#pricing" className="hover:text-primary">Pricing</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <Button>Request a Demo</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Turn Data into Decisions.</h1>
                <p className="text-lg text-muted-foreground">
                    Our intuitive analytics platform helps you unlock actionable insights, visualize trends, and drive business growth with confidence.
                </p>
                <Button size="lg">Start Analyzing for Free</Button>
            </div>
            <div>
                 <ChartContainer config={chartConfig} className="w-full h-80">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
      </section>

      {/* How it works */}
      <section id="platform" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Insights in 3 Simple Steps</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-4">
                    <p className="text-5xl font-bold text-primary/30">1</p>
                    <h3 className="font-semibold text-lg mt-2">Connect Your Data</h3>
                    <p className="text-sm text-muted-foreground">Seamlessly integrate with databases, spreadsheets, and cloud apps.</p>
                </div>
                <div className="p-4">
                    <p className="text-5xl font-bold text-primary/30">2</p>
                    <h3 className="font-semibold text-lg mt-2">Visualize & Explore</h3>
                    <p className="text-sm text-muted-foreground">Use our drag-and-drop builder to create stunning, interactive dashboards.</p>
                </div>
                <div className="p-4">
                    <p className="text-5xl font-bold text-primary/30">3</p>
                    <h3 className="font-semibold text-lg mt-2">Share & Collaborate</h3>
                    <p className="text-sm text-muted-foreground">Share insights with your team and make data-driven decisions together.</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* CTA */}
       <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold">Ready to unlock your data's potential?</h2>
            <p className="mt-4 text-muted-foreground text-lg">Our experts are here to help. Request a personalized demo to see how our platform can transform your business.</p>
            <Button size="lg" className="mt-8">
                Request a Demo <ArrowRight className="ml-2"/>
            </Button>
        </div>
       </section>
    </div>
  )
}
