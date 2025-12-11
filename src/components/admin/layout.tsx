'use client';
import Link from 'next/link';
import {
  Globe,
  PanelLeft,
  Search,
  Settings,
  Home,
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserNav } from '@/components/admin/user-nav';
import Logo from '@/components/logo';
import { useUser } from '@/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Wait until the initial loading is finished.
    if (isUserLoading) {
      return; // Do nothing while loading.
    }

    // If loading is finished and there's no user, redirect to login.
    if (!user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (pathname.startsWith('/admin/editor') || pathname.startsWith('/admin/create/from-scratch')) {
    return <>{children}</>;
  }

  // Show a loading state while the user's auth status is being checked.
  // This prevents the redirect loop and avoids showing a glimpse of the dashboard.
  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    let path = '';
    const items = [];

    if (segments[0] === 'admin' && segments.length === 1) {
       return (
         <BreadcrumbItem>
           <BreadcrumbPage>Dashboard</BreadcrumbPage>
         </BreadcrumbItem>
       )
    }

    if (segments.length > 1) {
       items.push(
        <BreadcrumbItem key="dashboard">
          <BreadcrumbLink asChild>
            <Link href="/admin">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    }
    

    segments.slice(1).forEach((segment, index) => {
      path += `/${segment}`;
      const isLast = index === segments.length - 2;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);

      items.push(<BreadcrumbSeparator key={`sep-${index}`} />);
      if (isLast) {
        items.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>{name}</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else {
        items.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbLink asChild>
              <Link href={`/admin${path}`}>{name}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      }
    });

    return items;
  };


  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Logo className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Firebase SEO Site Factory</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    pathname === '/admin' && 'bg-accent text-accent-foreground'
                  )}
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/websites"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    pathname.startsWith('/admin/websites') && 'bg-accent text-accent-foreground'
                  )}
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Websites</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Websites</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/settings"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    pathname.startsWith('/admin/settings') && 'bg-accent text-accent-foreground'
                    )}
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Firebase SEO Site Factory</span>
                  </Link>
                  <Link
                    href="/admin"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/websites"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <Globe className="h-5 w-5" />
                    Websites
                  </Link>
                  <Link
                    href="/admin/settings"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                {getBreadcrumbs()}
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
            <UserNav />
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
