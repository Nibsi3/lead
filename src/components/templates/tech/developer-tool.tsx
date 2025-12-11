'use client'

import { Button } from "@/components/ui/button";
import { Terminal, Copy } from "lucide-react";
import Link from "next/link";

export default function DeveloperTool({ template }: { template: any }) {
  return (
    <div className="w-full bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-20 border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link href="#" className="text-lg font-bold flex items-center gap-2">
            <Terminal className="text-primary"/> {template.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#docs" className="hover:text-primary">Docs</Link>
            <Link href="#pricing" className="hover:text-primary">Pricing</Link>
            <Link href="https://github.com" target="_blank" className="hover:text-primary">GitHub</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
       <section className="py-20 md:py-36">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Build & Deploy in Minutes.</h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                A powerful CLI tool to streamline your development workflow, from local environment setup to production deployment.
            </p>
            <div className="mt-8 max-w-md mx-auto bg-gray-950 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
                <code className="text-gray-300">$ npm install -g {template.name.toLowerCase()}</code>
                <Button variant="ghost" size="icon"><Copy className="w-4 h-4"/></Button>
            </div>
        </div>
      </section>
      
      {/* Code Example */}
       <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4">
             <div className="bg-black border border-primary/20 rounded-lg shadow-2xl shadow-primary/10 max-w-4xl mx-auto">
                <div className="p-4 border-b border-primary/20 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-6 text-sm">
                    <pre><code className="language-yaml">
{`# deploy.yml
service: my-awesome-app
provider: vercel
region: us-east-1

build:
  command: npm run build
  directory: .next

deploy:
  strategy: blue-green`}
                    </code></pre>
                </div>
             </div>
        </div>
       </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Supercharge Your Workflow?</h2>
            <p className="mt-2 text-gray-400">Read the documentation and get started for free.</p>
            <Button size="lg" className="mt-6">Read the Docs</Button>
        </div>
      </section>
    </div>
  )
}
