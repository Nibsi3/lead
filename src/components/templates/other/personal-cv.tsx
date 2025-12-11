'use client'

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PersonalCV({ template }: { template: any }) {
    const experience = [
        { role: "Senior Product Designer", company: "Innovate Inc.", period: "2020 - Present" },
        { role: "UX/UI Designer", company: "Creative Solutions", period: "2017 - 2020" },
        { role: "Junior Designer", company: "DesignHub", period: "2015 - 2017" },
    ];
    const skills = ["UI/UX Design", "Prototyping", "Figma", "User Research", "Design Systems", "HTML/CSS"];

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      <div className="container mx-auto max-w-4xl py-16 md:py-24">
        {/* Header */}
        <header className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
                <Avatar className="h-40 w-40 mx-auto">
                    <AvatarImage data-ai-hint="professional headshot" src={template.previewUrl}/>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
            <div className="md:col-span-2 space-y-2 text-center md:text-left">
                <h1 className="text-4xl font-bold">Jane Doe</h1>
                <p className="text-xl text-primary font-medium">Senior Product Designer</p>
                <p className="text-slate-600">I specialize in creating intuitive and beautiful user experiences that solve complex problems.</p>
                 <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <Link href="#"><Linkedin className="w-5 h-5 hover:text-primary"/></Link>
                    <Link href="#"><Github className="w-5 h-5 hover:text-primary"/></Link>
                    <Link href="#"><Mail className="w-5 h-5 hover:text-primary"/></Link>
                 </div>
            </div>
        </header>

        <main className="mt-16">
            {/* Experience */}
            <section>
                <h2 className="text-2xl font-bold border-b pb-2 mb-6">Work Experience</h2>
                <div className="space-y-6">
                    {experience.map(exp => (
                        <div key={exp.company} className="grid md:grid-cols-4 gap-2">
                            <div className="md:col-span-1">
                                <p className="font-semibold">{exp.period}</p>
                            </div>
                            <div className="md:col-span-3">
                                 <h3 className="font-bold text-lg">{exp.role}</h3>
                                 <p className="text-slate-600">{exp.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
             {/* Skills */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold border-b pb-2 mb-6">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <div key={skill} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">{skill}</div>
                    ))}
                </div>
            </section>
            
            {/* Education */}
            <section className="mt-12">
                 <h2 className="text-2xl font-bold border-b pb-2 mb-6">Education</h2>
                 <div className="grid md:grid-cols-4 gap-2">
                    <div className="md:col-span-1">
                        <p className="font-semibold">2011 - 2015</p>
                    </div>
                    <div className="md:col-span-3">
                         <h3 className="font-bold text-lg">B.S. in Graphic Design</h3>
                         <p className="text-slate-600">University of Design</p>
                    </div>
                </div>
            </section>

             {/* CTA */}
            <section className="mt-16 text-center">
                <Button size="lg">
                    <Download className="mr-2"/> Download Full Resume
                </Button>
            </section>
        </main>
      </div>
    </div>
  )
}
