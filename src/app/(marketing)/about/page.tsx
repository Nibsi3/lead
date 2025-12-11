'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BrainCircuit, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: 'Alex Johnson', role: 'Lead AI Architect', avatarId: 'avatar-1' },
  { name: 'Samantha Lee', role: 'Head of Design', avatarId: 'avatar-2' },
  { name: 'Michael Chen', role: 'SEO Strategist', avatarId: 'avatar-3' },
  { name: 'Emily Rodriguez', role: 'Frontend Wizard', avatarId: 'avatar-4' },
];

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'feature-local-seo');

    return (
      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              About Firebase SEO Site Factory
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are revolutionizing website creation by merging the power of Firebase with cutting-edge AI to deliver instant, SEO-optimized websites for everyone.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                {aboutImage && (
                    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={aboutImage.imageUrl}
                            alt="Our Team working on a project"
                            fill
                            className="object-cover"
                            data-ai-hint={aboutImage.imageHint}
                        />
                    </div>
                )}
                <div className="space-y-8">
                    <div className="grid gap-1">
                        <h3 className="text-2xl font-bold font-headline flex items-center gap-2"><Target className="w-6 h-6 text-primary" /> Our Mission</h3>
                        <p className="text-muted-foreground">
                            To empower businesses and individuals to establish a powerful online presence effortlessly, by automating the technical complexities of web development and SEO.
                        </p>
                    </div>
                     <div className="grid gap-1">
                        <h3 className="text-2xl font-bold font-headline flex items-center gap-2"><BrainCircuit className="w-6 h-6 text-primary" /> Our Vision</h3>
                        <p className="text-muted-foreground">
                            We envision a world where creating a professional, high-performing website is as simple as describing your idea, making digital excellence accessible to all.
                        </p>
                    </div>
                     <div className="grid gap-1">
                        <h3 className="text-2xl font-bold font-headline flex items-center gap-2"><Zap className="w-6 h-6 text-primary" /> Our Values</h3>
                        <p className="text-muted-foreground">
                            Innovation, Simplicity, and Customer Success are at the core of everything we build.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
             <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        The innovators and creators dedicated to building the future of web development.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                         <Card key={member.name} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                                <Avatar className="h-24 w-24 mx-auto mb-4 border-2 border-primary/20">
                                     <AvatarImage src={`https://picsum.photos/seed/${member.avatarId}/100/100`} />
                                     <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl font-semibold font-headline">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </div>
    );
}