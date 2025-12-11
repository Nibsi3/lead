'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe, Truck, Warehouse, CheckCircle, Ship, Plane } from "lucide-react";
import Image from "next/image";

export default function Logistics({ template }: { template: any }) {
  
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full h-[70vh] bg-primary text-primary-foreground">
        <Image data-ai-hint="logistics network" src="https://picsum.photos/seed/logistics-hero/1800/1000" alt="Global logistics network with interconnected lines" fill className="object-cover opacity-20" />
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter max-w-3xl">Efficient. Reliable. Global.</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                Your end-to-end supply chain partner, delivering innovative logistics solutions that power your business forward.
            </p>
            <div className="mt-8">
                <Card className="max-w-md bg-background/20 backdrop-blur-sm border-white/20">
                    <CardHeader>
                        <CardTitle className="text-white">Track Your Shipment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="flex gap-2">
                            <Input placeholder="Enter Tracking ID" className="bg-white text-black placeholder:text-gray-500" />
                            <Button type="submit" variant="secondary">Track</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Core Services</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Comprehensive, integrated solutions for your entire supply chain, from origin to destination.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex-row items-start gap-4">
                    <Truck className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                        <CardTitle>Ground Freight</CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">Reliable and cost-effective FTL and LTL solutions across the nation.</p>
                    </div>
                </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex-row items-start gap-4">
                     <Ship className="w-10 h-10 text-primary flex-shrink-0" />
                     <div>
                        <CardTitle>Ocean & Air</CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">Global air and sea freight for seamless international shipping.</p>
                    </div>
                </CardHeader>
            </Card>
             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex-row items-start gap-4">
                    <Warehouse className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                        <CardTitle>Warehousing</CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">Secure storage, inventory management, and order fulfillment.</p>
                    </div>
                </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
              <Image data-ai-hint="warehouse operations" src="https://picsum.photos/seed/logistics-why/600/500" alt="Warehouse interior with workers managing inventory" width={600} height={500} className="rounded-lg shadow-lg" />
           </div>
           <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl font-bold font-headline">The GlobalLink Advantage</h2>
                <p className="text-muted-foreground text-lg">We combine cutting-edge technology, deep industry expertise, and a vast global network to provide logistics services that are second to none.</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary h-5 w-5"/><span>Real-time tracking and full supply chain visibility</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary h-5 w-5"/><span>Dedicated 24/7 multilingual customer support</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary h-5 w-5"/><span>Scalable solutions for businesses of all sizes</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary h-5 w-5"/><span>Unwavering commitment to on-time delivery and safety</span></li>
                </ul>
                <Button>Learn More About Us</Button>
           </div>
        </div>
      </section>

       {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold font-headline">Optimize Your Supply Chain Today</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Get in touch with our logistics experts to find out how we can help you streamline operations, reduce costs, and gain a competitive edge.</p>
             <Button size="lg" className="mt-8">Contact Sales</Button>
        </div>
      </section>
    </div>
  )
}
