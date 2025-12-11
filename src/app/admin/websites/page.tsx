'use client';

import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { collection, deleteDoc, doc, query, where } from 'firebase/firestore';
import type { Website } from '@/lib/types';
import { useState } from 'react';
import { WebsiteFormDialog } from '@/components/admin/website-form-dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';

export default function WebsitesPage() {
  const { user } = useUser();
  const firestore = useFirestore();
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [websiteToDelete, setWebsiteToDelete] = useState<Website | null>(null);

  const websitesQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(
      collection(firestore, 'users', user.uid, 'websites')
    );
  }, [firestore, user]);

  const { data: websites, isLoading } = useCollection<Website>(websitesQuery);

  const handleCreate = () => {
    // This will now be handled by the Link component
  };

  const handleEdit = (website: Website) => {
    setSelectedWebsite(website);
    setFormOpen(true);
  };

  const openDeleteDialog = (website: Website) => {
    setWebsiteToDelete(website);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!websiteToDelete || !user) return;
    const docRef = doc(firestore, 'users', user.uid, 'websites', websiteToDelete.id);
    deleteDocumentNonBlocking(docRef);
    setDeleteDialogOpen(false);
    setWebsiteToDelete(null);
  };

  return (
    <>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline">
              Export
            </Button>
            <Button size="sm" className="h-8 gap-1" asChild>
               <Link href="/admin/create">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Create Website
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Websites</CardTitle>
              <CardDescription>
                Manage your websites or create a new one to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Purpose
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Last Updated
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        Loading...
                      </TableCell>
                    </TableRow>
                  )}
                  {!isLoading && websites?.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No websites found. Create one to get started.
                      </TableCell>
                    </TableRow>
                  )}
                  {websites?.map((website) => (
                    <TableRow key={website.id}>
                      <TableCell className="font-medium">{website.name}</TableCell>
                      <TableCell>
                        <Badge variant={website.status === 'published' ? 'default' : 'secondary'}>
                          {website.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell max-w-sm truncate">
                        {website.purpose}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {website.updatedAt && new Date((website.updatedAt as any).seconds * 1000).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                               <Link href={`/admin/editor/${website.id}`}>Edit Site</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEdit(website)}>Settings</DropdownMenuItem>
                            <DropdownMenuItem>View Site</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive" onClick={() => openDeleteDialog(website)}>
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <WebsiteFormDialog
        isOpen={isFormOpen}
        setOpen={setFormOpen}
        website={selectedWebsite}
      />
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              website and all of its associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
