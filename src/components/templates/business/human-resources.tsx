'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, FileText, Briefcase, HeartHandshake, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HumanResources({ template }: { template: any }) {
  const services = [
    { name: 'Talent Acquisition', icon: <Briefcase size={32}/>, description: 'Sourcing, screening, and hiring top talent.' },
    { name: 'Compliance & Policy', icon: <FileText size={32}/>, description: 'Ensuring legal compliance and developing effective HR policies.' },
    { name: 'Employee Relations', icon: <Users size={32}/>, description: 'Managing workplace conflicts and fostering a positive environment.' },
    { name: 'Engagement & Culture', icon: <HeartHandshake size={32}/>, description: 'Building a thriving company culture that attracts and retains talent.' }
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-semibold text-primary">People-First HR Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Building Thriving Workplaces</h1>
            <p className="text-lg text-muted-foreground">
              From talent acquisition to employee engagement, we provide strategic HR services that empower your workforce and drive sustainable business success.
            </p>
            <Button size="lg">Discover Our Services</Button>
          </div>
          <div>
            <Image data-ai-hint="diverse team" src="https://picsum.photos/seed/hr-hero/600/600" alt="A diverse team of professionals collaborating in a modern office" width={600} height={600} className="rounded-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* Services Icon Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Comprehensive HR Services</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A holistic approach to human resources management.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {services.map(service => (
              <div key={service.name} className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 text-primary p-4 rounded-full">{service.icon}</div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold font-headline">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2">Answers to common questions about our HR services.</p>
             <Button variant="outline" className="mt-6">Contact Us For More Info <ArrowRight className="ml-2" /></Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of companies do you work with?</AccordionTrigger>
              <AccordionContent>
                We partner with businesses of all sizes, from innovative startups to established enterprises, across a wide variety of industries. Our solutions are scalable and customized to your specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do you approach talent acquisition?</AccordionTrigger>
              <AccordionContent>
                Our approach is holistic and data-driven. We focus on not just finding candidates with the right skills, but also ensuring they are a great cultural fit for your organization to promote long-term retention and success.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you help with HR compliance and legal issues?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We provide expert guidance on federal, state, and local employment laws to ensure your business remains compliant. This helps you minimize legal risks and create a fair workplace.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">Ready to Transform Your HR?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Let us handle the complexities of human resources so you can focus on what you do best: growing your business.
          </p>
          <Button size="lg" variant="secondary" className="mt-8">
            Request a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
