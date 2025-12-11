'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Zap, Shield, BarChart2, Video, MapPin, Building } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function ModernCorporate({ template }: { template: any }) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, InnovateTech",
      avatarSeed: "sarah",
      quote: "Their solutions streamlined our operations and boosted productivity by 40%. A true game-changer for our business."
    },
    {
      name: "David Chen",
      title: "CTO, QuantumLeap",
      avatarSeed: "david",
      quote: "The level of expertise and support is unmatched. They are a reliable partner we can always count on for critical projects."
    }
  ];

  const processSteps = [
    { title: "01. Discovery & Strategy", description: "We start by understanding your unique challenges and goals to craft a tailored strategy." },
    { title: "02. Implementation", description: "Our expert team implements the solution with precision, ensuring a seamless integration." },
    { title: "03. Optimization & Growth", description: "We continuously monitor and optimize to ensure long-term success and scalability." },
  ];
  
  const faqs = [
    { q: "What industries do you specialize in?", a: "We have extensive experience across a wide range of industries, including technology, finance, healthcare, and retail. Our solutions are adaptable to the unique needs of each sector." },
    { q: "How long does a typical project take?", a: "Project timelines vary based on complexity and scope. After our initial discovery phase, we provide a detailed project plan with clear milestones and a realistic timeline." },
    { q: "What is your approach to project management?", a: "We use an agile methodology, allowing for flexibility and iterative progress. Clients have full visibility into the project's status through a dedicated portal and regular check-in meetings." }
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">Driving Innovation for a Digital-First World</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with leading enterprises to build transformative digital solutions that create lasting value and competitive advantage.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg">Our Services</Button>
            <Button size="lg" variant="outline">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* Features/Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2"><Zap /></div>
                <CardTitle className="font-headline text-xl">Digital Transformation</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2"><Shield /></div>
                <CardTitle className="font-headline text-xl">Cybersecurity Solutions</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2"><BarChart2 /></div>
                <CardTitle className="font-headline text-xl">Data & Analytics</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">A Glimpse Into Our Culture</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We believe in collaboration, innovation, and a passion for solving complex challenges.</p>
          </div>
          <div className="aspect-video max-w-4xl mx-auto bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
             <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="100%" height="100%" allow="autoplay; encrypted-media; fullscreen;"></iframe>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Process</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A proven methodology for delivering results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-transparent border-0 shadow-none text-center">
                <CardHeader>
                  <CardTitle className="text-primary text-5xl font-bold mb-4">{step.title.split('.')[0]}.</CardTitle>
                  <h4 className="font-semibold text-lg">{step.title.split('.')[1]}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">What Our Partners Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map(testimonial => (
              <Card key={testimonial.name} className="bg-muted border-0">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`https://picsum.photos/seed/${testimonial.avatarSeed}/40/40`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
       {/* Location & Map */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold font-headline">Visit Our Headquarters</h2>
             <div className="space-y-2 text-lg text-muted-foreground">
                <p className="flex items-start gap-3"><Building className="w-6 h-6 text-primary mt-1"/> <span>123 Innovation Drive, Suite 100, Tech City, 12345</span></p>
                <p className="flex items-start gap-3"><MapPin className="w-6 h-6 text-primary mt-1"/> <span>Located in the heart of the downtown innovation district.</span></p>
             </div>
          </div>
          <div className="aspect-video w-full bg-slate-200 rounded-lg overflow-hidden">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618648107578!2d-73.988226!3d40.748440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a31b67d5%3A0x1a8a23b56c4d515!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622080000000!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
