'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Blocks, Link as LinkIcon, Lock, Code } from "lucide-react";
import Link from "next/link";

export default function BlockchainProject({ template }: { template: any }) {
  return (
    <div className="w-full bg-black text-white">
      {/* Header */}
       <header className="sticky top-0 bg-black/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link href="#" className="text-xl font-bold flex items-center gap-2">
            <Blocks className="text-indigo-400"/> {template.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#network" className="hover:text-indigo-400">Network</Link>
            <Link href="#developers" className="hover:text-indigo-400">Developers</Link>
            <Link href="#ecosystem" className="hover:text-indigo-400">Ecosystem</Link>
          </nav>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Launch App</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-indigo-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>
        <div className="relative container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-indigo-400">
                The Decentralized Future, Built Today.
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
                A high-throughput, scalable, and secure blockchain protocol for building next-generation dApps.
            </p>
        </div>
      </section>
      
      {/* Stats */}
       <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                <div>
                    <p className="text-4xl font-bold">1.2s</p>
                    <p className="text-sm text-slate-400">Avg. Block Time</p>
                </div>
                <div>
                    <p className="text-4xl font-bold">10k+</p>
                    <p className="text-sm text-slate-400">Transactions/Sec</p>
                </div>
                <div>
                    <p className="text-4xl font-bold">$0.0001</p>
                    <p className="text-sm text-slate-400">Avg. Txn Fee</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold">500+</p>
                    <p className="text-sm text-slate-400">Validators</p>
                </div>
            </div>
        </div>
       </section>

       {/* Features */}
       <section id="network" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-indigo-500/20">
                <CardHeader><LinkIcon className="text-indigo-400"/><CardTitle className="mt-2">Scalability</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-400">Our unique consensus mechanism allows for unparalleled transaction speed and throughput.</p></CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-indigo-500/20">
                <CardHeader><Lock className="text-indigo-400"/><CardTitle className="mt-2">Security</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-400">A decentralized network of validators ensures robust security and censorship resistance.</p></CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-indigo-500/20">
                <CardHeader><Code className="text-indigo-400"/><CardTitle className="mt-2">Developer Friendly</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-400">Build with familiar tools and languages like Rust and Solidity, supported by comprehensive documentation.</p></CardContent>
            </Card>
        </div>
       </section>
       
       {/* Developer CTA */}
       <section id="developers" className="py-20">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold">Start Building on {template.name}</h2>
             <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
                Dive into our developer docs, get your testnet tokens, and join our growing ecosystem of builders.
            </p>
             <Button size="lg" variant="outline" className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-black">
                Read the Docs
            </Button>
        </div>
       </section>
    </div>
  )
}
