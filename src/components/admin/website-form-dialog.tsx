'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Website } from '@/lib/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { useFirestore, useUser } from '@/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import templatesData from '@/lib/templates.json';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Loader } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { themes } from '@/lib/themes';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Website name must be at least 2 characters.',
  }),
  purpose: z.string().min(10, {
    message: 'Purpose must be at least 10 characters.',
  }),
  targetAudience: z.string().min(10, {
    message: 'Target audience must be at least 10 characters.',
  }),
  contactEmail: z.string().email({ message: 'Please enter a valid email.' }),
  theme: z.string().optional().default('Default'),
  keywords: z.string().min(3, { message: 'Please enter at least one keyword.'}),
});

type WebsiteFormDialogProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  website?: Website | null;
  onWebsiteCreated?: (websiteId: string) => void;
  templateId?: string | null;
};

export function WebsiteFormDialog({
  isOpen,
  setOpen,
  website,
  onWebsiteCreated,
  templateId,
}: WebsiteFormDialogProps) {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);

  const template = templateId 
    ? templatesData.categories.flatMap(c => c.templates).find(t => t.id === templateId) 
    : null;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      purpose: '',
      targetAudience: '',
      contactEmail: '',
      keywords: '',
      theme: 'Default',
    },
  });

  useEffect(() => {
    if (isOpen) {
      if (website) {
        form.reset({
          name: website.name,
          purpose: website.purpose,
          targetAudience: website.targetAudience,
          contactEmail: website.contactEmail,
          theme: website.theme?.name || 'Default',
          keywords: website.keywords || '',
        });
      } else if (template) {
         form.reset({
          name: template.name,
          purpose: '', // User needs to fill this
          targetAudience: '', // User needs to fill this
          contactEmail: user?.email || '',
          theme: 'Default',
          keywords: '',
        });
      } else {
        form.reset({
          name: '',
          purpose: '',
          targetAudience: '',
          contactEmail: user?.email || '',
          theme: 'Default',
          keywords: '',
        });
      }
    }
  }, [website, template, form, isOpen, user]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) return;
    setIsCreating(true);
    toast({
      title: "Creating your website...",
      description: "This might take a moment.",
    });

    const selectedTheme = themes.find(t => t.name === values.theme) || themes[0];
    const slug = values.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    
    // For now, always create a new website
    const newId = uuidv4();
    const pageId = uuidv4();
    const websiteRef = doc(firestore, 'users', user.uid, 'websites', newId);
    const pageRef = doc(firestore, 'users', user.uid, 'websites', newId, 'pages', pageId);

    const newWebsite: Website = {
      name: values.name,
      slug,
      purpose: values.purpose,
      targetAudience: values.targetAudience,
      contactEmail: values.contactEmail,
      location: '', 
      socialProfiles: [],
      id: newId,
      createdAt: serverTimestamp(),
      pages: [pageId],
      status: 'draft',
      theme: selectedTheme,
      templateId: templateId || 'other-10', // Default if starting from scratch
      keywords: values.keywords,
    } as Website;

    const newPage = {
      id: pageId,
      websiteId: newId,
      title: 'Home',
      description: 'Homepage',
      order: 1,
      content: '', // Start with empty content
      updatedAt: serverTimestamp(),
    };
    
    try {
      await setDoc(websiteRef, newWebsite);
      await setDoc(pageRef, newPage);

      toast({
        title: "Website Created!",
        description: "Your new website is ready for editing.",
      });

      if(onWebsiteCreated) {
        onWebsiteCreated(newId);
      }

    } catch (e) {
      console.error("Error creating website:", e);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not create the website.",
      });
    }

    setIsCreating(false);
    setOpen(false);
    form.reset();
  }
  
  const title = website 
    ? 'Edit Website Settings' 
    : template 
    ? `Create a site from "${template.name}"`
    : 'Create a New Website';

  const description = website
    ? "Update your website's general information."
    : template
    ? "Just a few more details to get your new website up and running."
    : 'Fill in the details to create a new website. The AI will generate a homepage based on your input.';


  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6 -mr-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pr-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Innovate Tech Solutions" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is the main purpose of your website?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., To showcase our software products and attract new clients."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Who is your target audience?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Small to medium-sized business owners in the tech industry."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., AI, machine learning, data science" {...field} />
                    </FormControl>
                    <FormDescription>
                        Provide a few keywords (comma-separated) to guide AI features later.
                      </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input placeholder="contact@innovate.tech" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Choose a Color Theme</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-3 md:grid-cols-4 gap-2"
                      >
                        {themes.map(theme => (
                          <FormItem key={theme.name} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={theme.name} className="sr-only" />
                            </FormControl>
                            <FormLabel className="font-normal w-full">
                              <div className={cn(
                                  'cursor-pointer rounded-lg border-2 p-1 transition-all w-full',
                                  field.value === theme.name ? 'border-primary ring-2 ring-primary' : 'border-muted'
                              )}>
                                  <div className='space-y-1 rounded-md p-2 text-center'>
                                    <div className="flex items-center justify-center gap-1">
                                      <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.primary }} />
                                      <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: theme.background }} />
                                      <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.accent }} />
                                    </div>
                                    <p className="text-xs font-semibold">{theme.name}</p>
                                  </div>
                              </div>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className='pt-4'>
                <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isCreating}>Cancel</Button>
                <Button type="submit" disabled={isCreating}>
                  {isCreating && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                  {isCreating ? 'Creating...' : website ? 'Save Changes' : 'Create Website'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
