import {FieldValue} from 'firebase/firestore';

export interface Page {
  id: string;
  websiteId: string;
  title: string;
  description: string;
  order: number;
  content: string; // HTML
  css?: string;
  seo?: string;
  designSpecs?: string;
  images?: any[];
  updatedAt: FieldValue | Date;
}

export interface WebsiteTheme {
  name: string;
  primary: string;
  background: string;
  accent: string;
}

export interface Website {
  id: string;
  name: string;
  slug: string;
  purpose: string;
  targetAudience: string;
  keywords: string;
  location: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  socialProfiles: string[];
  pages: string[]; // now an array of page IDs
  status: 'draft' | 'published';
  theme?: WebsiteTheme;
  templateId?: string; // Add templateId to the Website interface
  createdAt: FieldValue | Date;
  updatedAt: FieldValue | Date;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  imageUrl?: string;
  imageHint?: string;
}
