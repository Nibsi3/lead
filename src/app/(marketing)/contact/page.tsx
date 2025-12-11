'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto py-16 md:py-24 lg:py-32">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Get in Touch</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We'd love to hear from you! Whether you have a question about features, trials, or anything else, our team is ready to answer all your questions.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Form</CardTitle>
                        <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Question about pricing" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
                            </div>
                            <Button type="submit" className="w-full" size="lg">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-full">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-muted-foreground">General inquiries & support.</p>
                            <a href="mailto:support@seofactory.com" className="text-primary font-medium hover:underline">
                                support@seofactory.com
                            </a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-full">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-muted-foreground">Mon-Fri, 9am - 5pm EST.</p>
                            <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-full">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Office</h3>
                            <p className="text-muted-foreground">123 Innovation Drive, Tech City, 54321</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
