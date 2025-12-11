'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import templatesData from '@/lib/templates.json';
import { cn } from '@/lib/utils';
import ModernCorporateThumb from '@/components/templates/thumbnails/modern-corporate-thumb';
import { WebsiteFormDialog } from '@/components/admin/website-form-dialog';
import { useRouter } from 'next/navigation';

// Map template IDs to their thumbnail components
const ThumbnailComponents: { [key: string]: React.FC } = {
  'corp-1': ModernCorporateThumb,
};


export default function CreateWebsitePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const router = useRouter();


  const allTemplates = templatesData.categories.flatMap(category => 
    category.templates.map(template => ({ ...template, categoryName: category.name }))
  );

  const filteredTemplates = allTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.categoryName === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...templatesData.categories.map(c => c.name)];

  const handleCreateClick = (templateId: string | null) => {
    setSelectedTemplateId(templateId);
    setFormOpen(true);
  }
  
  const handleWebsiteCreated = (websiteId: string) => {
    router.push(`/admin/editor/${websiteId}`);
  };

  return (
    <>
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Choose Your Starting Point</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Select a professionally designed template or start from scratch.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="w-full pl-10 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Start from Scratch Card */}
        <Card 
            onClick={() => handleCreateClick(null)}
            className="group h-full flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary cursor-pointer"
        >
            <div className="mb-4 text-primary">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-12 h-12" />
                </div>
            </div>
            <h3 className="text-xl font-semibold font-headline mb-2">Start from Blank Canvas</h3>
            <p className="text-muted-foreground text-sm">Use our AI-powered editor to build a completely unique website from the ground up.</p>
             <div className="flex items-center text-primary font-semibold mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                 Start Building <ArrowRight className="ml-2 w-4 h-4" />
             </div>
        </Card>
        
        {/* Template Cards */}
        {filteredTemplates.map(template => {
          const ThumbnailComponent = ThumbnailComponents[template.id];
          return (
            <Card key={template.id} className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                {ThumbnailComponent ? (
                  <ThumbnailComponent />
                ) : (
                  <Image 
                    src={template.previewUrl}
                    alt={template.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                      <Button asChild variant="secondary">
                          <Link href={`/templates/preview/${template.id}`} target="_blank" onClick={(e) => e.stopPropagation()}>Preview</Link>
                      </Button>
                      <Button onClick={() => handleCreateClick(template.id)}>Use Template</Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-base">{template.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-xs line-clamp-2">{template.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
    <WebsiteFormDialog
        isOpen={isFormOpen}
        setOpen={setFormOpen}
        templateId={selectedTemplateId}
        onWebsiteCreated={handleWebsiteCreated}
      />
    </>
  );
}
