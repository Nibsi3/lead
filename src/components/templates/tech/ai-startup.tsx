'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Code, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AiStartup({ template }: { template: any }) {
  return (
    <div className="w-full bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold flex items-center gap-2">
            <Cpu className="text-cyan-400"/> {template.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#platform" className="hover:text-cyan-400">Platform</Link>
            <Link href="#research" className="hover:text-cyan-400">Research</Link>
            <Link href="#contact" className="hover:text-cyan-400">Contact</Link>
          </nav>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">Request Access</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-40 text-center relative">
        <div className="absolute inset-0 bg-grid-cyan-500/10"></div>
        <div className="relative container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
                Building the Next Generation of Intelligence
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">We are an AI research and product company dedicated to creating safe and beneficial artificial general intelligence.</p>
            <Button size="lg" className="mt-8 bg-cyan-400 text-black hover:bg-cyan-300">
                Learn About Our Mission <ArrowRight className="ml-2"/>
            </Button>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold">Our Platform</h2>
                <p className="text-slate-400 text-lg">
                    Access our state-of-the-art models through a simple, powerful API. Build innovative applications, unlock new capabilities, and scale with ease on our secure and reliable infrastructure.
                </p>
                <div className="space-y-3 pt-4">
                    <p className="flex items-start gap-3"><BrainCircuit className="w-5 h-5 mt-1 text-cyan-400"/> <span>State-of-the-art language and vision models.</span></p>
                    <p className="flex items-start gap-3"><Code className="w-5 h-5 mt-1 text-cyan-400"/> <span>Developer-friendly SDKs in Python and JavaScript.</span></p>
                </div>
            </div>
            <div>
                <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 font-mono text-sm text-slate-400 shadow-2xl shadow-cyan-500/10">
                    <pre><code className="language-python">
<span className="text-cyan-400">from</span> neurosync <span className="text-cyan-400">import</span> Client

client = Client(api_key=<span className="text-yellow-400">"YOUR_API_KEY"</span>)

response = client.chat.completions.create(
    model=<span className="text-yellow-400">"ns-alpha-4"</span>,
    messages=[
        &#123; "role": "user", "content": "Hello, world!" &#125;
    ]
)
<span className="text-cyan-400">print</span>(response.choices[0].message.content)
                    </code></pre>
                </div>
            </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold">Join the waitlist</h2>
            <p className="mt-2 text-slate-400">Be the first to get access to our platform and latest models.</p>
            <form className="flex gap-2 mt-8 max-w-md mx-auto">
                <input type="email" placeholder="you@example.com" className="flex-1 bg-slate-800 p-3 rounded-md text-white border border-slate-700 focus:ring-cyan-400 focus:border-cyan-400"/>
                <Button type="submit" className="bg-cyan-400 text-black hover:bg-cyan-300 font-semibold">Request Invite</Button>
            </form>
        </div>
      </section>
    </div>
  )
}
