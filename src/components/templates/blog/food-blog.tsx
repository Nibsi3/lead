'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Search, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function FoodBlog({ template }: { template: any }) {
    const recipes = [
        { title: "Perfect Homemade Pizza", time: "1 hr 30 min", imageSeed: "food1", category: "Dinner" },
        { title: "Decadent Chocolate Lava Cakes", time: "25 min", imageSeed: "food2", category: "Dessert" },
        { title: "Spicy Thai Green Curry", time: "45 min", imageSeed: "food3", category: "Dinner" },
    ];
    const featuredRecipe = { title: "The Ultimate Weekend Brunch", excerpt: "Fluffy pancakes, crispy bacon, and perfectly poached eggs. Your guide to mastering the art of brunch.", imageSeed: "food-hero" };

  return (
    <div className="w-full bg-amber-50 text-slate-800">
        {/* Header */}
        <header className="sticky top-0 bg-amber-50/90 backdrop-blur-sm z-20 border-b border-amber-200">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <div className="flex items-center gap-2 text-2xl font-bold text-amber-900" style={{fontFamily: "'Playfair Display', serif"}}>
                    <UtensilsCrossed/> {template.name}
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-amber-800">
                    <a href="#" className="hover:text-amber-600">Recipes</a>
                    <a href="#" className="hover:text-amber-600">Techniques</a>
                    <a href="#" className="hover:text-amber-600">About</a>
                </nav>
            </div>
        </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-amber-900" style={{fontFamily: "'Playfair Display', serif"}}>{featuredRecipe.title}</h1>
          <p className="text-lg text-slate-600">{featuredRecipe.excerpt}</p>
          <Button size="lg" className="bg-amber-800 text-white hover:bg-amber-900">Get the Recipe</Button>
        </div>
        <div>
           <Image data-ai-hint="brunch food" src={`https://picsum.photos/seed/${featuredRecipe.imageSeed}/800/800`} alt={featuredRecipe.title} width={800} height={800} className="rounded-lg object-cover aspect-square shadow-xl"/>
        </div>
      </section>

      {/* Latest Recipes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Playfair Display', serif"}}>Latest Recipes</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {recipes.map(recipe => (
                    <div key={recipe.title} className="group">
                        <div className="overflow-hidden rounded-lg">
                            <Image data-ai-hint="delicious food" src={`https://picsum.photos/seed/${recipe.imageSeed}/600/500`} alt={recipe.title} width={600} height={500} className="object-cover aspect-[5/4] group-hover:scale-105 transition-transform"/>
                        </div>
                        <div className="mt-4">
                            <Badge variant="secondary" className="bg-amber-100 text-amber-800">{recipe.category}</Badge>
                            <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
                            <p className="text-sm text-slate-500 flex items-center gap-1 mt-1"><Clock size={14}/> {recipe.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20">
        <div className="container mx-auto px-4 bg-amber-100 rounded-lg p-10 text-center">
             <h2 className="text-3xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Hungry for More?</h2>
             <p className="text-slate-600 mt-2 max-w-lg mx-auto">Subscribe to our newsletter for the latest recipes and kitchen tips delivered weekly.</p>
             <form className="flex gap-2 mt-6 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1 bg-white"/>
                <Button type="submit" className="bg-amber-800 text-white hover:bg-amber-900">Subscribe</Button>
             </form>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
             <Image data-ai-hint="chef portrait" src="https://picsum.photos/seed/food-blogger/120/120" alt="Portrait of the food blogger" width={120} height={120} className="rounded-full mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>From My Kitchen to Yours</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                I believe that cooking should be a joyful and accessible experience for everyone. Here, I share my favorite tried-and-tested recipes, inspired by my family's traditions and travels around the world. My goal is to inspire you to get in the kitchen and create delicious meals you can be proud of.
            </p>
        </div>
      </section>

    </div>
  )
}
