'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Handshake, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function ConsultingFirm({ template }: { template: any }) {
  const team = [
    { name: 'Dr. Evelyn Reed', title: 'Managing Partner, PhD', avatarSeed: 'team1', bio: '20+ years of experience in strategic management and corporate restructuring.' },
    { name: 'Marcus Hale', title: 'Senior Consultant', avatarSeed: 'team2', bio: 'Specializes in market entry strategies and operational efficiency.' },
    { name: 'Chloe Decker', title: 'Lead Data Scientist', avatarSeed: 'team3', bio: 'Expert in predictive analytics and data-driven decision-making models.' },
  ];

  const services = [
      { 
        icon: <Handshake className="w-8 h-8 text-primary"/>,
        title: 'Strategy & Operations',
        description: 'Optimizing processes and aligning your operations with strategic goals for maximum efficiency and scalability.'
      },
      { 
        icon: <TrendingUp className="w-8 h-8 text-primary"/>,
        title: 'Market Analysis',
        description: 'Deep market intelligence and competitive analysis to identify growth opportunities and mitigate risks.'
      },
      { 
        icon: <Users className="w-8 h-8 text-primary"/>,
        title: 'Organizational Change',
        description: 'Guiding your team through complex transformations with proven change management frameworks.'
      }
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="bg-muted text-center py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">Expert Guidance for Peak Performance</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide data-driven strategies and actionable insights to navigate complex business landscapes and unlock sustainable growth.
          </p>
          <Button size="lg" className="mt-8">Schedule a Consultation</Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Expertise</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">From strategy to execution, we offer a comprehensive suite of consulting services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">{service.icon}</div>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Why Us Section */}
       <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">The Partner You Can Trust</h2>
                <p className="text-muted-foreground text-lg">Our methodology is built on a foundation of deep industry knowledge, rigorous analysis, and a commitment to delivering tangible results for our clients.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Data-Driven Insights</h4>
                      <p className="text-sm text-muted-foreground">We replace guesswork with granular data analysis to inform every recommendation we make.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Collaborative Approach</h4>
                      <p className="text-sm text-muted-foreground">We work as an extension of your team, ensuring full buy-in and seamless implementation.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Measurable Results</h4>
                      <p className="text-sm text-muted-foreground">Our success is measured by your success. We focus on delivering clear, quantifiable outcomes.</p>
                    </div>
                  </li>
                </ul>
            </div>
            <div>
               <Image data-ai-hint="team collaboration" src="https://picsum.photos/seed/consulting-whyus/600/500" alt="Consultants collaborating on a project" width={600} height={500} className="rounded-lg shadow-lg" />
            </div>
          </div>
       </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Meet Our Leadership</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A team of seasoned experts dedicated to client success and industry innovation.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map(member => (
              <div key={member.name} className="text-center flex flex-col items-center">
                <Avatar className="h-28 w-28">
                  <AvatarImage src={`https://picsum.photos/seed/${member.avatarSeed}/128/128`} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.title}</p>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
