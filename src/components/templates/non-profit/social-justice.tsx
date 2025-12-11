'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Gavel, Scale, Megaphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SocialJustice({ template }: { template: any }) {
  return (
    <div className="w-full bg-black text-white" style={{fontFamily: "'Inter', sans-serif"}}>
       {/* Header */}
      <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="font-black text-2xl tracking-tighter uppercase">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase">
            <Link href="#issues" className="hover:opacity-70">The Issues</Link>
            <Link href="#action" className="hover:opacity-70">Take Action</Link>
          </nav>
          <Button className="bg-white text-black hover:bg-gray-300 font-bold uppercase">Donate</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="relative h-[80vh] w-full flex items-center justify-center text-center">
         <Image data-ai-hint="protest march" src={template.previewUrl} alt="A crowd of people marching for social justice" fill className="object-cover opacity-40"/>
         <div className="relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">Equality for All.</h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto">Fighting for a more just and equitable society through advocacy, litigation, and education.</p>
         </div>
      </section>

      {/* Issues */}
      <section id="issues" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase">Our Fight</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center">
                    <Scale className="w-12 h-12 mx-auto text-primary mb-4"/>
                    <h3 className="text-2xl font-bold uppercase">Systemic Reform</h3>
                    <p className="text-gray-400 mt-2">Challenging discriminatory policies and advocating for fair legislation at local, state, and national levels.</p>
                </div>
                <div className="text-center">
                    <Gavel className="w-12 h-12 mx-auto text-primary mb-4"/>
                    <h3 className="text-2xl font-bold uppercase">Legal Advocacy</h3>
                    <p className="text-gray-400 mt-2">Providing pro-bono legal representation in landmark cases to protect civil rights and liberties.</p>
                </div>
                <div className="text-center">
                    <Megaphone className="w-12 h-12 mx-auto text-primary mb-4"/>
                    <h3 className="text-2xl font-bold uppercase">Public Education</h3>
                    <p className="text-gray-400 mt-2">Raising public awareness and mobilizing communities to stand up against injustice.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section id="action" className="py-16 md:py-24 bg-primary text-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-black uppercase">The Power of Your Voice</h2>
                <p className="text-lg">
                    Change doesn't happen without you. Your signature on our latest petition adds power to our collective voice and puts pressure on lawmakers to act.
                </p>
            </div>
            <div className="bg-black p-8 text-white">
                <h3 className="text-2xl font-bold uppercase">Sign the Petition:</h3>
                <p className="mt-1 text-lg">Demand Fair Housing Policies Now</p>
                <form className="mt-6 flex gap-2">
                    <input type="email" placeholder="Your Email Address" className="flex-1 bg-gray-800 p-3 text-white border border-gray-600 focus:ring-primary focus:border-primary"/>
                    <Button type="submit" variant="secondary" className="bg-white text-black hover:bg-gray-300 h-full p-3"><ArrowRight/></Button>
                </form>
            </div>
        </div>
      </section>

    </div>
  )
}
