'use client'

import { ArrowRight, ShoppingBag, Truck, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function EcommerceLandingPage({ template }: { template: any }) {
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      price: "$25",
      imageSeed: "product1"
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$75",
      imageSeed: "product2"
    },
    {
      id: 3,
      name: "Leather Boots",
      price: "$120",
      imageSeed: "product3"
    },
     {
      id: 4,
      name: "Sunglasses",
      price: "$45",
      imageSeed: "product4"
    },
  ];

  const features = [
    {
        icon: <Truck className="w-8 h-8 text-primary" />,
        title: 'Fast Shipping',
        description: 'Get your orders delivered to your doorstep in no time with our reliable shipping partners.',
    },
    {
        icon: <Tag className="w-8 h-8 text-primary" />,
        title: 'Exclusive Deals',
        description: 'Shop the best prices and enjoy members-only discounts on top-quality products.',
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-primary" />,
        title: 'Wide Selection',
        description: 'Explore a vast collection of products curated just for you. New arrivals weekly.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center">
          <Image
              src={template.previewUrl}
              alt={template.description}
              fill
              className="object-cover object-center"
              priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container z-10 px-4 md:px-6">
              <div className="max-w-xl space-y-6">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    {template.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-200">
                    {template.description}
                </p>
                <Button size="lg" asChild>
                    <Link href={`/admin/create/from-scratch?templateId=${template.id}`}>
                        Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
              </div>
          </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge>New Arrivals</Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Featured Collection
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Discover our latest products, crafted with quality and style in mind.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <Image src={`https://picsum.photos/seed/${product.imageSeed}/600/600`} alt={product.name} width={600} height={600} className="object-cover aspect-square group-hover:scale-105 transition-transform" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why-us" className="py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {features.map(feature => (
                     <div key={feature.title} className="flex flex-col items-center gap-4">
                        {feature.icon}
                        <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                     </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}
