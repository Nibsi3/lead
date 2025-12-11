
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, TrendingUp, Megaphone, Palette } from "lucide-react";
import Image from "next/image";

export default function MarketingAgency({ template }: { template: any }) {
    const caseStudies = [
        { brand: 'Innovate Co.', imageSeed: 'case1', result: '+250% ROI', description: 'Launched a multi-channel campaign that redefined their market position.' },
        { brand: 'FutureGadget', imageSeed: 'case2', result: '+400% Lead Gen', description: 'Developed a targeted lead generation funnel with compelling creative.' },
        { brand: 'EcoBloom', imageSeed: 'case3', result: '2.5x Brand Awareness', description: 'Crafted a viral social media strategy that captured mainstream attention.' },
    ];
  return (
    <div className="w-full bg-black text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-40 text-center relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter">We Build Brands That Get Noticed.</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                We're a creative marketing agency that blends bold strategy, stunning design, and powerful technology to help you stand out in a crowded world.
            </p>
            <Button size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
                Let's Talk <ArrowRight className="ml-2"/>
            </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
            <div className="space-y-3">
                <Lightbulb className="w-10 h-10 text-fuchsia-400" />
                <h3 className="font-semibold text-2xl">Brand Strategy</h3>
                <p className="text-gray-400">We dig deep to unearth your unique story, crafting brand identities and positioning that resonates with your target audience and carves out your space in the market.</p>
            </div>
             <div className="space-y-3">
                <Megaphone className="w-10 h-10 text-cyan-400" />
                <h3 className="font-semibold text-2xl">Digital Campaigns</h3>
                <p className="text-gray-400">From SEO and PPC to social media and content marketing, we execute data-driven digital campaigns that engage, convert, and deliver measurable results.</p>
            </div>
             <div className="space-y-3">
                <Palette className="w-10 h-10 text-yellow-400" />
                <h3 className="font-semibold text-2xl">Creative Content</h3>
                <p className="text-gray-400">Our team of designers, writers, and videographers produce compelling content that not only looks beautiful but also tells your story and drives action.</p>
            </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-headline">Proven Results</h2>
                <p className="text-gray-300 mt-2 max-w-2xl mx-auto">We don't just talk the talk. Here's a glimpse of the impact we've made for our partners.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map(study => (
                    <Card key={study.brand} className="bg-gray-900/50 border-gray-800 group overflow-hidden">
                        <div className="overflow-hidden">
                           <Image data-ai-hint="abstract design" src={`https://picsum.photos/seed/${study.imageSeed}/600/400`} alt={study.brand} width={600} height={400} className="object-cover aspect-video group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-xl">{study.brand}</h3>
                            <p className="text-cyan-400 font-bold text-lg">{study.result}</p>
                            <p className="text-sm text-gray-400 mt-2">{study.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* CTA */}
       <section className="container mx-auto px-4 py-24 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold font-headline">Ready to Make an Impact?</h2>
                 <p className="mt-4 text-lg text-gray-300">Let's create something unforgettable together. Tell us about your next big idea.</p>
                <Button size="lg" className="mt-8 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:opacity-90 transition-opacity">
                    Start Your Project
                </Button>
            </div>
       </section>

    </div>
  )
}
