'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

const pricingTiers = {
    monthly: [
        {
            name: "Hobby",
            price: "$15",
            period: "/month",
            description: "For personal projects and getting started.",
            features: [
                "1 Website Project",
                "10,000 AI word credits",
                "Basic SEO Tools",
                "Community Support",
            ],
            buttonText: "Start for Free",
            variant: "outline",
        },
        {
            name: "Pro",
            price: "$45",
            period: "/month",
            description: "For professionals and small businesses.",
            features: [
                "5 Website Projects",
                "50,000 AI word credits",
                "Advanced SEO Tools",
                "AI-Powered Site Styling",
                "Email Support",
            ],
            buttonText: "Get Started",
            variant: "default",
            popular: true,
        },
        {
            name: "Business",
            price: "$99",
            period: "/month",
            description: "For agencies and large-scale operations.",
            features: [
                "Unlimited Websites",
                "Unlimited AI word credits",
                "Full SEO & Analytics Suite",
                "Local SEO Tools",
                "Priority Phone Support",
            ],
            buttonText: "Contact Sales",
            variant: "outline",
        },
    ],
    yearly: [
        {
            name: "Hobby",
            price: "$12",
            period: "/month",
            description: "For personal projects and getting started.",
            features: [
                "1 Website Project",
                "10,000 AI word credits",
                "Basic SEO Tools",
                "Community Support",
            ],
            buttonText: "Start for Free",
            variant: "outline",
        },
        {
            name: "Pro",
            price: "$36",
            period: "/month",
            description: "For professionals and small businesses.",
            features: [
                "5 Website Projects",
                "50,000 AI word credits",
                "Advanced SEO Tools",
                "AI-Powered Site Styling",
                "Email Support",
            ],
            buttonText: "Get Started",
            variant: "default",
            popular: true,
        },
        {
            name: "Business",
            price: "$83",
            period: "/month",
            description: "For agencies and large-scale operations.",
            features: [
                "Unlimited Websites",
                "Unlimited AI word credits",
                "Full SEO & Analytics Suite",
                "Local SEO Tools",
                "Priority Phone Support",
            ],
            buttonText: "Contact Sales",
            variant: "outline",
        },
    ]
};


export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    const tiers = pricingTiers[billingCycle];

    return (
        <div className="container mx-auto py-16 md:py-24 lg:py-32">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">Find the Perfect Plan</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Start for free, then upgrade to a plan that fits your needs. All plans come with our core AI-powered features.
                </p>
            </div>
            
            {/* Billing Cycle Toggle */}
            <div className="flex justify-center items-center space-x-4 mb-12">
                <Label htmlFor="billing-cycle" className={cn('text-muted-foreground transition-colors', billingCycle === 'monthly' && 'text-foreground')}>
                    Monthly
                </Label>
                <Switch 
                    id="billing-cycle"
                    checked={billingCycle === 'yearly'}
                    onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
                    aria-label="Toggle between monthly and yearly billing"
                />
                <Label htmlFor="billing-cycle" className={cn('text-muted-foreground transition-colors', billingCycle === 'yearly' && 'text-foreground')}>
                    Yearly <span className="text-primary font-semibold">(Save 20%)</span>
                </Label>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
                {tiers.map((tier) => (
                    <Card key={tier.name} className={cn('flex flex-col', tier.popular && 'border-primary border-2 shadow-2xl shadow-primary/10')}>
                        {tier.popular && <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center"><div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div></div>}
                        <CardHeader className="pt-12">
                            <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
                            <CardDescription>{tier.description}</CardDescription>
                             <div className="flex items-baseline pt-4">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                <span className="text-muted-foreground">{tier.period}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-4">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size="lg" variant={tier.variant as any}>{tier.buttonText}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
