'use client'

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart } from "lucide-react";
import Image from "next/image";

export default function WeddingInvite({ template }: { template: any }) {
  return (
    <div className="w-full bg-[#f8f5f2] text-[#6b5f54]" style={{fontFamily: "'Cormorant Garamond', serif"}}>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center text-center">
        <Image data-ai-hint="romantic flowers" src={template.previewUrl} alt="Floral background for a wedding" fill className="object-cover opacity-80"/>
        <div className="relative z-10 text-white p-4">
            <p className="text-xl tracking-widest uppercase">Together with their families</p>
            <h1 className="text-7xl md:text-9xl font-bold my-4">Jane & John</h1>
            <p className="text-xl tracking-widest uppercase">Invite you to celebrate their wedding</p>
            <p className="text-2xl font-semibold mt-8">October 26, 2024</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">The Ceremony</h2>
                    <p className="text-lg flex items-center justify-center gap-2"><Calendar/> Saturday, October 26, 2024</p>
                    <p className="text-lg">at four o'clock in the afternoon</p>
                    <p className="text-lg flex items-center justify-center gap-2 mt-4"><MapPin/> The Garden Vineyard</p>
                    <p className="text-lg">123 Vineyard Lane, Anytown</p>
                </div>
                 <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">The Reception</h2>
                    <p className="text-lg">To follow immediately after the ceremony</p>
                    <p className="text-lg mt-4">Dinner, drinks, and dancing under the stars</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* RSVP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-lg">
            <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4"/>
            <h2 className="text-4xl font-bold">Kindly RSVP</h2>
            <p className="mt-2 text-lg">Please reply by September 1st</p>
            <Button size="lg" className="mt-8 bg-[#6b5f54] text-white hover:bg-[#5a4e46] rounded-full px-10">RSVP Online</Button>
        </div>
      </section>
    </div>
  )
}
