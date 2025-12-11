'use client';

import {
  ChevronLeft,
  Computer,
  PanelLeft,
  Settings,
  Sparkles,
  Smartphone,
  Tablet,
  MousePointer,
  Square,
  Heading1,
  Type,
  ImageIcon,
  Loader,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  useCollection,
  useDoc,
  useFirestore,
  useUser,
  useMemoFirebase,
} from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import type { Website, Page } from '@/lib/types';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { updateDocumentNonBlocking } from '@/firebase/firestore/non-blocking-updates';
import { editElementWithAi } from '@/ai/flows/edit-element-with-ai';
import { generateSectionWithAi } from '@/ai/flows/generate-section-with-ai';
import { useToast } from '@/hooks/use-toast';
import WebsiteRenderer from '@/components/website-renderer';
import { updateDoc } from 'firebase/firestore';


type Viewport = 'desktop' | 'tablet' | 'mobile';

const editorElements = [
  {
    icon: <Heading1 className="w-8 h-8" />,
    name: 'Heading',
    tag: 'h1',
    defaultContent: 'This is a Heading',
  },
  {
    icon: <Type className="w-8 h-8" />,
    name: 'Paragraph',
    tag: 'p',
    defaultContent: 'This is a paragraph. You can edit this text.',
  },
  {
    icon: <Square className="w-8 h-8" />,
    name: 'Button',
    tag: 'button',
    defaultContent: 'Click Me',
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    name: 'Image',
    tag: 'img',
    defaultContent: '',
  },
];

export default function EditorPage() {
  const params = useParams();
  const websiteId = params.websiteId as string;
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(
    null
  );
  const [elementContent, setElementContent] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSectionAiOpen, setSectionAiOpen] = useState(false);
  const [sectionAiPrompt, setSectionAiPrompt] = useState('');
  const [isSectionAiLoading, setSectionAiLoading] = useState(false);
  const rendererContainerRef = useRef<HTMLDivElement>(null);


  const websiteRef = useMemoFirebase(() => {
    if (!user || !websiteId) return null;
    return doc(firestore, 'users', user.uid, 'websites', websiteId);
  }, [firestore, user, websiteId]);

  const { data: website, isLoading: isWebsiteLoading } =
    useDoc<Website>(websiteRef);

  const pagesRef = useMemoFirebase(() => {
    if (!user || !websiteId) return null;
    return collection(firestore, 'users', user.uid, 'websites', websiteId, 'pages');
  }, [firestore, user, websiteId]);

  const { data: pages, isLoading: arePagesLoading } = useCollection<Page>(pagesRef);

  // For now, we assume there's one "Home" page.
  // In the future, we can add a page selector.
  const homePage = pages?.find((p) => p.title === 'Home');

  const handleElementClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const target = event.target as HTMLElement;

      // Basic filter for what can be selected
      const selectableTags = ['H1', 'H2', 'H3', 'H4', 'P', 'BUTTON', 'SPAN'];
      if (!selectableTags.includes(target.tagName)) return;

      if (selectedElement) {
        selectedElement.style.outline = '';
        selectedElement.removeAttribute('data-selected');
      }

      if (target) {
        target.style.outline = '2px solid #9400D3';
        target.setAttribute('data-selected', 'true');
        setSelectedElement(target);
        setElementContent(target.innerText);
      }
    },
    [selectedElement]
  );
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setElementContent(newText);
    if (selectedElement) {
      selectedElement.innerText = newText;
    }
  };

  const handleSaveChanges = async () => {
    if (!user || !homePage || !rendererContainerRef.current) return;
    const currentHtml = rendererContainerRef.current.innerHTML;

    const pageRef = doc(firestore, 'users', user.uid, 'websites', websiteId, 'pages', homePage.id);
    
    // We are now directly updating the Firestore document with the new HTML content.
    await updateDoc(pageRef, {
      content: currentHtml,
      updatedAt: new Date()
    });

    toast({
        title: 'Changes Saved!',
        description: 'Your page content has been updated.',
    });
  };

  const handleAiEdit = async () => {
    if (!selectedElement || !aiPrompt) return;

    setIsAiLoading(true);
    const originalHtml = selectedElement.outerHTML;

    try {
      const result = await editElementWithAi({
        html: originalHtml,
        prompt: aiPrompt,
      });

      if (result.newHtml && selectedElement.parentElement) {
        // Create a temporary element to hold the new HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = result.newHtml;
        const newElement = tempDiv.firstChild as HTMLElement;
        
        if (newElement) {
          // Replace the old element with the new one
          selectedElement.parentElement.replaceChild(newElement, selectedElement);

          // The new element needs to be made selectable again
          setSelectedElement(newElement);
          newElement.style.outline = '2px solid #9400D3';
          setElementContent(newElement.innerText);
        }
      }
      setAiPrompt('');
    } catch (error) {
      console.error('AI edit failed:', error);
      toast({
        variant: 'destructive',
        title: 'AI Edit Failed',
        description: 'Could not apply AI changes. Please try again.',
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleAiSectionGenerate = async () => {
     if (!sectionAiPrompt || !rendererContainerRef.current) return;

     setSectionAiLoading(true);
      try {
        const result = await generateSectionWithAi({ prompt: sectionAiPrompt });
        if (result.html) {
          rendererContainerRef.current.insertAdjacentHTML('beforeend', result.html);
        }
        setSectionAiPrompt('');
        setSectionAiOpen(false);
        toast({
          title: 'Section Added!',
          description: 'The new AI-generated section has been added to the bottom of your page.',
        });
      } catch (error) {
        console.error('AI section generation failed:', error);
        toast({
          variant: 'destructive',
          title: 'AI Generation Failed',
          description: 'Could not generate the section. Please try again.',
        });
      } finally {
        setSectionAiLoading(false);
      }
  };
  
  const viewportWidths: { [key in Viewport]: string } = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px',
  };

  const isLoading = isWebsiteLoading || arePagesLoading;
  
  return (
    <TooltipProvider>
      <div className="flex h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a href="/admin">
                <ChevronLeft className="h-4 w-4" />
              </a>
            </Button>
            {isLoading ? (
              <Skeleton className="h-6 w-48 rounded-md" />
            ) : (
              <h1 className="text-xl font-semibold">{website?.name}</h1>
            )}
            <Badge variant="outline">Draft</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden md:flex">
              Preview
            </Button>
            <Button onClick={handleSaveChanges}>Publish</Button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <aside className="hidden w-72 flex-col border-r bg-background sm:flex">
            <div className="flex h-14 items-center justify-center border-b">
              <h3 className="text-lg font-semibold">Elements</h3>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="grid grid-cols-2 gap-4">
                <Card
                  onClick={() => setSectionAiOpen(true)}
                  className="flex flex-col col-span-2 items-center justify-center p-4 text-center cursor-pointer hover:bg-accent bg-primary/10 border-primary"
                >
                  <Bot className="w-8 h-8 text-primary" />
                  <p className="text-sm mt-2 font-semibold text-primary">AI Magic</p>
                </Card>
                {editorElements.map((el) => (
                  <Card
                    key={el.name}
                    className="flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-accent"
                  >
                    {el.icon}
                    <p className="text-sm mt-2">{el.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Canvas */}
          <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <div
              className="mx-auto h-full rounded-lg bg-background shadow-sm transition-all duration-300 w-full"
              style={{ maxWidth: viewportWidths[viewport] }}
            >
              {isLoading && (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
              )}
              {website && homePage && !isLoading && (
                <WebsiteRenderer
                  website={website}
                  page={homePage}
                  onElementClick={handleElementClick}
                  ref={rendererContainerRef}
                />
              )}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden w-80 flex-col border-l bg-background lg:flex">
            <div className="flex h-14 items-center justify-center border-b">
              <h3 className="text-lg font-semibold">Inspector</h3>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Properties</CardTitle>
                  <CardDescription>
                    {selectedElement
                      ? `Editing <${selectedElement.tagName.toLowerCase()}>`
                      : 'Select an element'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedElement ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Text Content</Label>
                        <Textarea
                          value={elementContent}
                          onChange={handleContentChange}
                        />
                      </div>
                      <Button onClick={handleSaveChanges} className="w-full">
                        Save Changes
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center text-sm text-muted-foreground py-8">
                      <MousePointer className="mx-auto h-8 w-8 mb-2" />
                      <p>Select an element on the page to see its properties.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" /> AI Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="e.g., 'Change the button color to cyan' or 'Make the text larger'"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    disabled={!selectedElement || isAiLoading}
                  />
                  <Button
                    className="w-full mt-2"
                    onClick={handleAiEdit}
                    disabled={!selectedElement || !aiPrompt || isAiLoading}
                  >
                    {isAiLoading && (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Generate
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        <footer className="sticky bottom-0 z-30 flex h-14 items-center justify-center gap-2 border-t bg-background px-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={viewport === 'desktop' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewport('desktop')}
              >
                <Computer className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Desktop</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={viewport === 'tablet' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewport('tablet')}
              >
                <Tablet className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Tablet</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={viewport === 'mobile' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewport('mobile')}
              >
                <Smartphone className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Mobile</TooltipContent>
          </Tooltip>
        </footer>
      </div>
      <Dialog open={isSectionAiOpen} onOpenChange={setSectionAiOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate Section with AI</DialogTitle>
            <DialogDescription>
              Describe the section you want to create. For example, "a hero section with a title, a short paragraph, and a sign-up button."
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="e.g., 'a two-column section with an image on the left and text on the right'"
              value={sectionAiPrompt}
              onChange={(e) => setSectionAiPrompt(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSectionAiOpen(false)} disabled={isSectionAiLoading}>Cancel</Button>
            <Button onClick={handleAiSectionGenerate} disabled={!sectionAiPrompt || isSectionAiLoading}>
                 {isSectionAiLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                Generate Section
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
