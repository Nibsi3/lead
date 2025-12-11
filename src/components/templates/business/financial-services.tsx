'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, ShieldCheck, PieChart, PiggyBank } from "lucide-react";
import Image from "next/image";

export default function FinancialServices({ template }: { template: any }) {
  const services = [
    { title: 'Wealth Management', description: 'Personalized investment strategies to grow and protect your long-term wealth.', icon: <PieChart className="w-8 h-8 text-primary"/> },
    { title: 'Retirement Planning', description: 'Secure your future with our comprehensive retirement and pension solutions.', icon: <PiggyBank className="w-8 h-8 text-primary"/> },
    { title: 'Risk Assessment', description: 'Identify and mitigate financial risks with our expert analysis and insurance products.', icon: <ShieldCheck className="w-8 h-8 text-primary"/> },
    { title: 'Estate Planning', description: 'Ensure your assets are protected and passed on according to your wishes.', icon: <Landmark className="w-8 h-8 text-primary"/> },
  ]
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full text-white">
        <Image data-ai-hint="financial district" src="https://picsum.photos/seed/finance-hero/1800/1200" alt="Financial district skyline at dusk" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Clarity and Confidence for Your Financial Future</h1>
              <p className="mt-4 text-lg md:text-xl text-slate-200">
                Your trusted partner in navigating the complexities of modern finance. We offer secure, transparent, and personalized financial services.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <a href="#contact">
                  Explore Our Services <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline">A Full-Service Financial Firm</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Providing expert guidance for every stage of your financial life.</p>
            </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg hover:bg-muted transition-colors">
                <div className="bg-primary/10 p-4 rounded-full">{service.icon}</div>
                <div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">Ready to Take Control of Your Finances?</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Let's build a robust financial plan tailored to your unique goals. Our team is ready to help you every step of the way, ensuring your financial well-being for years to come.
            </p>
             <Button size="lg" className="mt-6">
                Get Your Free Assessment
              </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <Image data-ai-hint="client meeting" src="https://picsum.photos/seed/finance-grid1/400/400" alt="Client meeting" width={400} height={400} className="rounded-lg shadow-md" />
             <Image data-ai-hint="financial charts" src="https://picsum.photos/seed/finance-grid2/400/400" alt="Financial charts" width={400} height={400} className="rounded-lg shadow-md mt-8" />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <p className="text-2xl font-medium">"Their expertise and personalized approach gave us the confidence to make bold financial decisions. We've seen tremendous growth and couldn't be happier with the partnership."</p>
            <div className="mt-6">
                <Image data-ai-hint="professional headshot" src="https://picsum.photos/seed/finance-test/80/80" alt="Alexandra Chen" width={80} height={80} className="rounded-full mx-auto" />
                <p className="font-semibold mt-4">Alexandra Chen</p>
                <p className="text-muted-foreground text-sm">Founder of Innovest Group</p>
            </div>
        </div>
      </section>
    </div>
  )
}
