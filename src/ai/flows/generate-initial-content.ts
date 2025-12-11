'use server';

/**
 * @fileOverview Generates initial content for website pages based on purpose, target audience, and keywords.
 *
 * - generateInitialContent - A function that generates initial content for website pages.
 * - GenerateInitialContentInput - The input type for the generateInitialContent function.
 * - GenerateInitialContentOutput - The return type for the generateInitialContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialContentInputSchema = z.object({
  purpose: z.string().describe('The purpose of the website.'),
  targetAudience: z.string().describe('The target audience of the website.'),
  keywords: z.string().describe('Keywords related to the website content. Can be a comma separated list.'),
});
type GenerateInitialContentInput = z.infer<
  typeof GenerateInitialContentInputSchema
>;

const GenerateInitialContentOutputSchema = z.object({
  htmlContent: z.string().describe('The generated HTML content for the page, styled with Tailwind CSS classes.'),
  seoMetaDescription: z
    .string()
    .describe('The generated SEO meta description for the page.'),
});
type GenerateInitialContentOutput = z.infer<
  typeof GenerateInitialContentOutputSchema
>;

export async function generateInitialContent(
  input: GenerateInitialContentInput
): Promise<GenerateInitialContentOutput> {
  return generateInitialContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInitialContentPrompt',
  input: {schema: GenerateInitialContentInputSchema},
  output: {schema: GenerateInitialContentOutputSchema},
  prompt: `You are an expert content creator and web designer for websites.

You will generate initial HTML content and an SEO meta description for a website's landing page based on the provided purpose, target audience, and keywords.

The HTML should be a complete landing page, ready to be used. It must be styled using Tailwind CSS classes. Do not use any inline styles. Create a professional, modern, and visually appealing layout.

Purpose: {{{purpose}}}
Target Audience: {{{targetAudience}}}
Keywords: {{{keywords}}}

Ensure the HTML content is well-structured, semantically correct, and includes relevant information for the specified purpose and target audience. Include sections like a hero, features, testimonials, and a call to action.

Return the generated HTML content and SEO meta description in the specified JSON format.`,
});

const generateInitialContentFlow = ai.defineFlow(
  {
    name: 'generateInitialContentFlow',
    inputSchema: GenerateInitialContentInputSchema,
    outputSchema: GenerateInitialContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
