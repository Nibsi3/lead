'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Briefcase, BarChart, Users, Building, Shield } from "lucide-react";
import Image from "next/image";

export default function GeneralBusiness({ template }: { template: any }) {
    const features = [
      {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        title: 'Core Service One',
        description: 'Detailed description of the first primary service your business offers to clients and its key benefits.',
      },
      {
        icon: <BarChart className="w-8 h-8 text-primary" />,
        title: 'Core Service Two',
        description: 'Engaging description of the second primary service that highlights your unique expertise and value.',
      },
      {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: 'Core Service Three',
        description: 'Compelling description of the third primary service, showcasing your competitive advantage.',
      },
    ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Your Reliable Partner for Business Success</h1>
                <p className="text-lg text-muted-foreground">
                    We provide top-tier, industry-leading solutions to help your business grow, innovate, and lead in a competitive market. Our commitment is to your success.
                </p>
                <div className="flex gap-4">
                    <Button size="lg">Get Started</Button>
                    <Button size="lg" variant="outline">Learn More</Button>
                </div>
            </div>
            <div>
                 <Image data-ai-hint="business team" src={template.previewUrl} alt={template.description} width={600} height={450} className="rounded-xl shadow-2xl" />
            </div>
        </div>
      </section>
      
       {/* Logo Cloud/Social Proof */}
      <section className="py-12">
        <div className="container mx-auto px-4">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">Trusted by leading companies</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
                <Shield className="w-28 h-auto" />
                <Building className="w-28 h-auto" />
                <Briefcase className="w-28 h-auto" />
                <BarChart className="w-28 h-auto" />
                <Users className="w-28 h-auto" />
                <Star className="w-28 h-auto" />
            </div>
        </div>
      </section>

      {/* Features/Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">What We Offer</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A comprehensive suite of services designed to meet your business needs and exceed your expectations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center border-0 bg-transparent shadow-none hover:bg-background transition-colors p-4">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium">
              "Their team is incredibly dedicated and professional. They delivered results that have significantly impacted our bottom line. We highly recommend their services to any business looking to grow."
            </blockquote>
            <div className="mt-6">
              <Image data-ai-hint="professional headshot" src="https://picsum.photos/seed/ceo-jane/80/80" alt="Jane Doe" width={80} height={80} className="rounded-full mx-auto" />
              <p className="font-semibold text-lg mt-4">Jane Doe</p>
              <p className="text-muted-foreground">CEO, ExampleCorp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">Ready to Elevate Your Business?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Let's discuss how our services can help you achieve your goals. Contact us today for a no-obligation consultation and take the first step towards transformation.
          </p>
          <Button size="lg" variant="secondary" className="mt-8">
            Contact Us Now <ArrowRight className="ml-2"/>
          </Button>
        </div>
      </section>
    </div>
  )
}
