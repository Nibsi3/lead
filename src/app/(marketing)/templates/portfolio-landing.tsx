'use client'

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PortfolioLandingPage({ template }: { template: any }) {
  const projects = [
    { id: 1, name: "Project Alpha", imageSeed: "proj-alpha", category: "UI/UX Design" },
    { id: 2, name: "Project Beta", imageSeed: "proj-beta", category: "Branding" },
    { id: 3, name: "Project Gamma", imageSeed: "proj-gamma", category: "Web Development" },
    { id: 4, name: "Project Delta", imageSeed: "proj-delta", category: "Illustration" },
    { id: 5, name: "Project Epsilon", imageSeed: "proj-epsilon", category: "Motion Graphics" },
    { id: 6, name: "Project Zeta", imageSeed: "proj-zeta", category: "Photography" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <Image data-ai-hint="creative person" src={`https://picsum.photos/seed/creator-avatar/128/128`} alt="Creator" width={128} height={128} className="rounded-full mx-auto" />
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                {template.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {template.description}
            </p>
            <div className="flex gap-4 justify-center">
                 <Button size="lg" asChild>
                    <Link href={`/admin/create/from-scratch?templateId=${template.id}`}>
                        Use This Template
                    </Link>
                </Button>
                <Button size="lg" variant="outline">
                    Contact Me <Mail className="ml-2 h-5 w-5" />
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="work" className="py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              My Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A selection of projects that showcase my skills and passion for creation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group overflow-hidden relative rounded-lg">
                 <Image data-ai-hint="creative project" src={`https://picsum.photos/seed/${project.imageSeed}/600/400`} alt={project.name} width={600} height={400} className="object-cover w-full h-full aspect-video group-hover:scale-105 transition-transform" />
                 <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div>
                        <h3 className="text-white font-bold text-lg">{project.name}</h3>
                        <p className="text-neutral-300 text-sm">{project.category}</p>
                    </div>
                 </div>
                 <Link href="#" className="absolute inset-0" aria-label={`View ${project.name}`}></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
