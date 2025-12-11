'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Startup({ template }: { template: any }) {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      features: ["Core Feature Access", "Up to 5 Users", "Community Support", "Basic Analytics"],
      isPopular: false,
    },
    {
      name: "Growth",
      price: "$99",
      features: ["Everything in Starter", "Advanced AI Features", "Up to 20 Users", "Priority Email Support"],
      isPopular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      features: ["Everything in Growth", "Unlimited Users", "Dedicated Account Manager", "Custom Integrations (SLA)"],
      isPopular: false,
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center py-20 md:py-32">
        <Badge variant="outline" className="text-white border-primary bg-primary/20 mb-4 py-1 px-3">Now in Public Beta</Badge>
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          The Future of [Your Industry] is Here.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Our revolutionary platform empowers modern teams to work smarter, faster, and more collaboratively than ever before.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started for Free <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline">A Powerful Feature That Changes Everything</h2>
            <p className="text-gray-400 text-lg">
              Explain the core value proposition of your main feature. Focus on the benefits and the problem it solves for the user. This is your chance to show, not just tell.
            </p>
             <ul className="space-y-3 text-gray-300 pt-2">
                <li className="flex items-center gap-3"><Sparkles className="text-primary w-5 h-5"/> Benefit-driven sub-feature one.</li>
                <li className="flex items-center gap-3"><Sparkles className="text-primary w-5 h-5"/> Solves a major pain point.</li>
                <li className="flex items-center gap-3"><Sparkles className="text-primary w-5 h-5"/> Increases efficiency by X%.</li>
            </ul>
          </div>
          <div>
            <Card className="bg-primary/10 border-primary/20 p-2 shadow-2xl shadow-primary/10">
                <Image data-ai-hint="app screenshot" src="https://picsum.photos/seed/startup-feature/800/600" alt="Screenshot of the product's main feature" width={800} height={600} className="rounded-lg"/>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto">Choose the plan that's right for your team. No hidden fees, cancel anytime.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={`bg-gray-800/80 border-gray-700 flex flex-col ${tier.isPopular ? 'border-primary border-2 shadow-2xl shadow-primary/20' : ''}`}>
                <CardContent className="p-8 flex-grow">
                   {tier.isPopular && <Badge className="mb-4">Most Popular</Badge>}
                  <h3 className="text-2xl font-bold font-headline">{tier.name}</h3>
                  <p className="text-4xl font-bold my-4">{tier.price} <span className="text-sm font-normal text-gray-400">{tier.price.startsWith('$') ? '/ month' : ''}</span></p>
                  <ul className="space-y-3 text-gray-300">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-8 pt-0">
                   <Button size="lg" className={`w-full ${tier.isPopular ? '' : 'bg-white text-black hover:bg-gray-200'}`} variant={tier.isPopular ? 'default' : 'secondary'}>
                        {tier.name === "Scale" ? "Contact Sales" : "Choose Plan"}
                   </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
