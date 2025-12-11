'use client'

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function BlogLandingPage({ template }: { template: any }) {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of the web, from AI to serverless.",
      imageSeed: "blogpost1",
      category: "Technology",
      date: "June 1, 2024"
    },
    {
      id: 2,
      title: "A Guide to Mindful Living",
      excerpt: "Discover practices and tips to bring more mindfulness and peace into your daily life.",
      imageSeed: "blogpost2",
      category: "Lifestyle",
      date: "May 28, 2024"
    },
    {
      id: 3,
      title: "Mastering Sourdough: A Beginner's Journey",
      excerpt: "Follow my journey into the world of sourdough bread, with tips, tricks, and a simple recipe to get you started.",
      imageSeed: "blogpost3",
      category: "Food",
      date: "May 25, 2024"
    },
  ];

  const featuredPost = posts[0];

  return (
    <>
      {/* Hero Section - Featured Post */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center">
           <Image
              src={`https://picsum.photos/seed/${featuredPost.imageSeed}/1200/800`}
              alt={featuredPost.title}
              fill
              className="object-cover object-center"
              priority
          />
           <div className="absolute inset-0 bg-black/60" />
           <div className="relative container z-10 px-4 md:px-6 text-white">
                <div className="max-w-3xl space-y-4">
                    <Badge>{featuredPost.category}</Badge>
                    <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
                       {featuredPost.title}
                    </h1>
                    <p className="text-lg text-neutral-200">{featuredPost.excerpt}</p>
                    <Button asChild size="lg">
                        <Link href="#">Read More</Link>
                    </Button>
                </div>
           </div>
      </section>

      {/* Blog Grid Section */}
      <section id="posts" className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Latest Posts
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="group overflow-hidden flex flex-col">
                <CardHeader className="p-0">
                    <Image src={`https://picsum.photos/seed/${post.imageSeed}/600/400`} alt={post.title} width={600} height={400} className="object-cover aspect-video group-hover:scale-105 transition-transform" />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <h3 className="font-semibold text-lg group-hover:text-primary">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                    {post.date}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="subscribe" className="py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
                 <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground">
                    Get the latest posts and updates delivered straight to your inbox.
                </p>
                <form className="flex gap-2 max-w-md mx-auto">
                    <Input type="email" placeholder="Enter your email" className="flex-1" />
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}
