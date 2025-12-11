import Logo from '@/components/logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold text-lg font-headline">
                Firebase SEO Site Factory
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Generate and manage SEO-optimized websites with the power of AI.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/admin" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-headline font-semibold tracking-wider">Connect</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Firebase SEO Site Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
