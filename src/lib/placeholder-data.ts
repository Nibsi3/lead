import type { Website, BlogPost } from './types';

export const placeholderWebsites: Website[] = [];

export const placeholderBlogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'mastering-seo-in-2024',
        title: 'Mastering SEO in 2024: A Comprehensive Guide',
        excerpt: 'Unlock the secrets to dominating search engine rankings this year. Our guide covers everything from keyword research to technical SEO.',
        content: '<p>Content coming soon...</p>',
        author: 'Jane Doe',
        authorAvatar: 'avatar-1',
        date: '2024-06-01',
        imageUrl: 'https://picsum.photos/seed/201/600/400',
        imageHint: 'business strategy',
    },
    {
        id: '2',
        slug: 'the-rise-of-ai-in-content-marketing',
        title: 'The Rise of AI in Content Marketing',
        excerpt: 'Discover how artificial intelligence is revolutionizing content creation, personalization, and distribution for marketers.',
        content: '<p>Content coming soon...</p>',
        author: 'John Smith',
        authorAvatar: 'avatar-1',
        date: '2024-05-28',
        imageUrl: 'https://picsum.photos/seed/202/600/400',
        imageHint: 'marketing analytics',
    },
    {
        id: '3',
        slug: '10-web-design-trends-to-watch',
        title: '10 Web Design Trends to Watch This Year',
        excerpt: 'Stay ahead of the curve with these stunning and effective web design trends that are captivating users and boosting engagement.',
        content: '<p>Content coming soon...</p>',
        author: 'Alex Johnson',
        authorAvatar: 'avatar-1',
        date: '2024-05-25',
        imageUrl: 'https://picsum.photos/seed/203/600/400',
        imageHint: 'design trends',
    }
];
