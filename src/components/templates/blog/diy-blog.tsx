'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Wrench, Paintbrush, Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DiyBlog({ template }: { template: any }) {
    const projects = [
        { title: "DIY Bookshelf with a Hidden Compartment", imageSeed: "diy1", category: "Woodworking", difficulty: "Intermediate" },
        { title: "Transform Your Bathroom with Peel-and-Stick Tiles", imageSeed: "diy2", category: "Home Improvement", difficulty: "Beginner" },
        { title: "Upcycling Old Jars into Stylish Herb Planters", imageSeed: "diy3", category: "Crafts", difficulty: "Beginner" },
    ];

  return (
    <div className="w-full bg-yellow-50 text-slate-900">
      {/* Header */}
       <header className="sticky top-0 bg-yellow-50/90 backdrop-blur-sm z-20 border-b border-yellow-200">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-yellow-900">
                <Wrench /> {template.name}
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-yellow-800">
                <Link href="#" className="hover:text-yellow-950">Projects</Link>
                <Link href="#" className="hover:text-yellow-950">Tool Guides</Link>
                <Link href="#" className="hover:text-yellow-950">About</Link>
            </nav>
             <div className="relative hidden md:block">
                <Input placeholder="Search projects..." className="pl-10 bg-white"/>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"/>
            </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-900">Build it. Make it. Love it.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Your friendly guide to DIY projects, home improvement, and creative crafting. Let's get our hands dirty!
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16 md:pb-24">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                 <Card className="p-6 bg-white border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
                    <Home className="w-10 h-10 text-yellow-700 mx-auto mb-4"/>
                    <h3 className="font-bold text-xl">Home Improvement</h3>
                 </Card>
                 <Card className="p-6 bg-white border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
                    <Wrench className="w-10 h-10 text-yellow-700 mx-auto mb-4"/>
                    <h3 className="font-bold text-xl">Woodworking</h3>
                 </Card>
                 <Card className="p-6 bg-white border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
                    <Paintbrush className="w-10 h-10 text-yellow-700 mx-auto mb-4"/>
                    <h3 className="font-bold text-xl">Crafts & Decor</h3>
                 </Card>
            </div>
         </div>
      </section>
      
       {/* Latest Projects */}
       <section className="py-16 md:py-24 bg-white border-t border-yellow-200">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12 text-yellow-900">Latest Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map(project => (
                    <Card key={project.title} className="group overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                         <CardHeader className="p-0">
                            <Image data-ai-hint="diy project" src={`https://picsum.photos/seed/${project.imageSeed}/600/400`} alt={project.title} width={600} height={400} className="object-cover aspect-video group-hover:scale-105 transition-transform" />
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-center text-xs mb-2">
                               <p className="font-semibold text-yellow-700 uppercase">{project.category}</p>
                               <Badge variant={project.difficulty === 'Beginner' ? 'default' : 'secondary'} className={project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}>{project.difficulty}</Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-yellow-800">{project.title}</CardTitle>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <Button variant="outline">See All Projects</Button>
            </div>
        </div>
       </section>

    </div>
  )
}
