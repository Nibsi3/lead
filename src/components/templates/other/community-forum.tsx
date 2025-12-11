'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, Search, PenSquare } from "lucide-react";
import Link from "next/link";

export default function CommunityForum({ template }: { template: any }) {
    const threads = [
        { id: 1, title: "Welcome to the Community! Introduce yourself here.", author: "Admin", replies: 125, likes: 200, authorAvatar: "cf-a1" },
        { id: 2, title: "What are you working on this week?", author: "Jane D.", replies: 34, likes: 88, authorAvatar: "cf-a2" },
        { id: 3, title: "Show & Tell: Share your latest project.", author: "Alex J.", replies: 56, likes: 150, authorAvatar: "cf-a3" },
        { id: 4, title: "Question: How do you handle state management in large apps?", author: "Mike C.", replies: 12, likes: 25, authorAvatar: "cf-a4" },
    ];
  return (
    <div className="w-full bg-slate-100 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <Link href="#" className="font-bold text-xl">{template.name}</Link>
            <div className="flex-1 max-w-md mx-8 hidden md:block">
                <div className="relative">
                    <Input placeholder="Search discussions..." className="pl-10"/>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"/>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost">Log In</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-6">
                <Button className="w-full" size="lg"><PenSquare className="mr-2"/> Start a New Discussion</Button>
                <Card>
                    <CardHeader><CardTitle className="text-lg">Categories</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm font-medium">
                            <li><a href="#" className="p-2 block rounded-md bg-slate-200">General</a></li>
                            <li><a href="#" className="p-2 block rounded-md hover:bg-slate-200">Introductions</a></li>
                            <li><a href="#" className="p-2 block rounded-md hover:bg-slate-200">Projects</a></li>
                            <li><a href="#" className="p-2 block rounded-md hover:bg-slate-200">Questions</a></li>
                        </ul>
                    </CardContent>
                </Card>
            </aside>
            {/* Thread List */}
            <div className="md:col-span-3">
                <div className="space-y-4">
                    {threads.map(thread => (
                        <Card key={thread.id} className="p-4 flex items-start gap-4 hover:bg-white transition-colors">
                             <Avatar>
                                <AvatarImage data-ai-hint="user avatar" src={`https://picsum.photos/seed/${thread.authorAvatar}/40/40`} />
                                <AvatarFallback>{thread.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <Link href="#" className="font-semibold hover:text-primary">{thread.title}</Link>
                                <p className="text-sm text-slate-500">by {thread.author}</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1"><MessageSquare size={16}/> {thread.replies}</span>
                                <span className="flex items-center gap-1"><ThumbsUp size={16}/> {thread.likes}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
