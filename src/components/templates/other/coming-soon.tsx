'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function ComingSoon({ template }: { template: any }) {
  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col">
      <div className="absolute inset-0">
        <Image 
            data-ai-hint="abstract background" 
            src={template.previewUrl} 
            alt="Abstract background" 
            fill 
            className="object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>
      </div>
      <div className="relative flex flex-col flex-1 justify-center items-center text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Something Big is Coming.</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            We're putting the finishing touches on our new website. Be the first to know when we launch.
        </p>
        <form className="flex gap-2 mt-8 max-w-md w-full">
            <Input type="email" placeholder="Enter your email address" className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"/>
            <Button type="submit" className="bg-primary hover:bg-primary/90">Notify Me</Button>
        </form>
      </div>
       <footer className="relative p-8">
        <div className="container mx-auto flex justify-center items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter/></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram/></a>
            <a href="#" className="text-gray-400 hover:text-white"><Facebook/></a>
        </div>
      </footer>
    </div>
  )
}
