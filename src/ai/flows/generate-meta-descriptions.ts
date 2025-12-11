'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating SEO-optimized meta descriptions for website pages.
 *
 * The flow takes a page title, description, purpose, target audience, and keywords as input.
 * It returns a meta description that is optimized for SEO.
 *
 * - generateMetaDescription - A function that handles the meta description generation process.
 * - GenerateMetaDescriptionInput - The input type for the generateMetaDescription function.
 * - GenerateMetaDescriptionOutput - The return type for the generateMetaDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateMetaDescriptionInputSchema = z.object({
  pageTitle: z.string().describe('The title of the page.'),
  pageDescription: z.string().describe('A brief description of the page content.'),
  sitePurpose: z.string().describe('The overall purpose of the website.'),
  targetAudience: z.string().describe('The target audience for the website.'),
  keywords: z.string().describe('A comma-separated list of keywords related to the page.'),
});
type GenerateMetaDescriptionInput = z.infer<typeof GenerateMetaDescriptionInputSchema>;

const GenerateMetaDescriptionOutputSchema = z.object({
  metaDescription: z.string().describe('The generated meta description for the page.'),
});
type GenerateMetaDescriptionOutput = z.infer<typeof GenerateMetaDescriptionOutputSchema>;

export async function generateMetaDescription(input: GenerateMetaDescriptionInput): Promise<GenerateMetaDescriptionOutput> {
  return generateMetaDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMetaDescriptionPrompt',
  input: {schema: GenerateMetaDescriptionInputSchema},
  output: {schema: GenerateMetaDescriptionOutputSchema},
  prompt: `You are an SEO expert, skilled at writing compelling and concise meta descriptions.

  Given the following information about a webpage, generate a meta description that is optimized for search engines.
  The meta description should be no more than 160 characters.

  Page Title: {{{pageTitle}}}
  Page Description: {{{pageDescription}}}
  Website Purpose: {{{sitePurpose}}}
  Target Audience: {{{targetAudience}}}
  Keywords: {{{keywords}}}

  Meta Description:`, 
});

const generateMetaDescriptionFlow = ai.defineFlow(
  {
    name: 'generateMetaDescriptionFlow',
    inputSchema: GenerateMetaDescriptionInputSchema,
    outputSchema: GenerateMetaDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
