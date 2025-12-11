'use client'

import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileApp({ template }: { template: any }) {
    const features = [
        "Seamless offline access",
        "Real-time notifications",
        "Intuitive user interface",
        "Secure data encryption"
    ];

  return (
    <div className="w-full bg-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:text-slate-300">Features</Link>
            <Link href="#testimonials" className="hover:text-slate-300">Testimonials</Link>
          </nav>
          <Button>Download Now</Button>
        </div>
      </header>
      
      {/* Hero */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">The Future of Mobile Productivity.</h1>
                <p className="mt-4 text-lg text-slate-300">Manage your tasks, projects, and life, all from the palm of your hand. Effortlessly organized.</p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <Button size="lg" className="gap-2"><Download/> App Store</Button>
                    <Button size="lg" className="gap-2"><Download/> Google Play</Button>
                </div>
            </div>
            <div className="flex justify-center">
                 <Image data-ai-hint="mobile app screenshot" src={template.previewUrl} alt="Mobile app screenshot" width={300} height={600} className="rounded-2xl shadow-2xl shadow-primary/20" />
            </div>
        </div>
      </section>

      {/* Features */}
       <section id="features" className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Powerful Features</h2>
            <p className="text-slate-400 mt-2">Designed to make your life easier.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map(feature => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary"/>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
       <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Loved by users worldwide</h2>
            <blockquote className="mt-8 text-xl text-slate-300 italic">
             "This app completely changed how I organize my work. I can't imagine my day without it. It's simple, powerful, and beautifully designed."
            </blockquote>
            <p className="mt-4 font-semibold">- Alex R, Product Manager</p>
        </div>
       </section>
    </div>
  )
}
