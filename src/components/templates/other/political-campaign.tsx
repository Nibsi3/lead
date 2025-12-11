'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function PoliticalCampaign({ template }: { template: any }) {
    const issues = ["Economic Growth", "Education Reform", "Healthcare Access", "Environmental Protection"];
  return (
    <div className="w-full bg-white text-slate-900">
       {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-2xl font-bold text-blue-800">{template.name}</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="#issues" className="hover:text-blue-600">Issues</Link>
            <Link href="#get-involved" className="hover:text-blue-600">Get Involved</Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-28 bg-blue-800 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">Progress for Our Future.</h1>
                <p className="text-xl text-blue-200">
                    Committed to building a stronger, more prosperous community for everyone.
                </p>
            </div>
             <div className="flex justify-center">
                 <Image data-ai-hint="politician portrait" src={template.previewUrl} alt="Portrait of the candidate" width={400} height={400} className="rounded-full aspect-square object-cover border-4 border-white" />
            </div>
        </div>
      </section>

      {/* Issues */}
      <section id="issues" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">My Stance on the Issues</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {issues.map(issue => (
                    <Card key={issue} className="text-center bg-blue-50">
                        <CardHeader>
                            <CardTitle>{issue}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* Join Us */}
      <section id="get-involved" className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-bold">Join the Movement</h2>
            <p className="mt-4 text-lg text-red-100">
                Our campaign is powered by people like you. Sign up to get the latest updates and find out how you can help make a difference.
            </p>
             <Card className="mt-8 text-slate-900">
                <CardContent className="p-6">
                     <form className="flex flex-col md:flex-row gap-4">
                        <Input placeholder="First Name" className="md:w-1/3"/>
                        <Input type="email" placeholder="Email Address" className="flex-1"/>
                        <Button type="submit" className="bg-blue-800 hover:bg-blue-900">Sign Up</Button>
                     </form>
                </CardContent>
             </Card>
        </div>
      </section>

    </div>
  )
}
