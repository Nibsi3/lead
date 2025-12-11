'use client'

import Image from "next/image";
import Link from "next/link";

export default function PersonalJournal({ template }: { template: any }) {
    const entries = [
        { date: "August 15, 2024", title: "On finding stillness in a loud world.", excerpt: "Today I left my phone at home and just walked. It felt revolutionary. The world seems to buzz with constant notifications, a relentless hum of urgency...", imageSeed: "journal1" },
        { date: "August 12, 2024", title: "The comfort of old books.", excerpt: "There's a specific scent to a well-loved bookstore, a mixture of aging paper, ink, and dust. It's the smell of a thousand worlds waiting to be explored...", imageSeed: "journal2" },
        { date: "August 10, 2024", title: "A lesson in patience from a sourdough starter.", excerpt: "They say you don't own a sourdough starter, you just tend to it. Mine is named 'The Blob' and it has taught me more about patience than any self-help book ever could...", imageSeed: "journal3" },
    ];

  return (
    <div className="w-full bg-[#f8f8f2] text-gray-800 font-serif">
      {/* Header */}
      <header className="py-8">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-medium tracking-tight">{template.name}</h1>
            <p className="mt-2 text-gray-600">A collection of thoughts, reflections, and fleeting moments.</p>
        </div>
      </header>

      {/* Entries */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-16">
            {entries.map(entry => (
                <article key={entry.title}>
                    <header className="mb-4">
                        <p className="text-sm text-gray-500">{entry.date}</p>
                        <h2 className="text-3xl font-medium leading-tight text-gray-900 mt-1">
                            <Link href="#" className="hover:text-primary">{entry.title}</Link>
                        </h2>
                    </header>
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p>{entry.excerpt}</p>
                    </div>
                     <Link href="#" className="text-sm font-semibold text-primary hover:underline mt-4 inline-block">Read more &rarr;</Link>
                </article>
            ))}
        </div>
      </main>

       {/* Footer */}
      <footer className="py-12 mt-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {template.name}. All thoughts are my own.</p>
            <div className="mt-4">
                <Link href="#" className="hover:underline">Archive</Link>
                <span className="mx-2">&bull;</span>
                <Link href="#" className="hover:underline">Subscribe</Link>
            </div>
        </div>
      </footer>
    </div>
  )
}
