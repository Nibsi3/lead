'use server';

/**
 * @fileOverview AI flow to suggest page layouts and styling based on content and purpose.
 *
 * - suggestPageLayout - Function to generate layout and styling suggestions.
 * - SuggestPageLayoutInput - Input type for the suggestPageLayout function.
 * - SuggestPageLayoutOutput - Output type for the suggestPageLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPageLayoutInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The main content of the page, including text and other elements.'),
  pagePurpose: z
    .string()
    .describe('The purpose of the page (e.g., About Us, Contact, Services).'),
  websitePurpose: z
    .string()
    .describe('The overall purpose of the website (e.g., e-commerce, blog, portfolio).'),
  targetAudience: z
    .string()
    .describe('The target audience for the website (e.g., young adults, professionals, families).'),
});
type SuggestPageLayoutInput = z.infer<typeof SuggestPageLayoutInputSchema>;

const SuggestPageLayoutOutputSchema = z.object({
  layoutSuggestions: z
    .string()
    .describe('Suggested layout structure for the page, in a descriptive format.'),
  stylingSuggestions: z
    .string()
    .describe(
      'Suggested CSS styling rules for the page, including colors, typography, and spacing.'
    ),
});
type SuggestPageLayoutOutput = z.infer<typeof SuggestPageLayoutOutputSchema>;

export async function suggestPageLayout(input: SuggestPageLayoutInput): Promise<SuggestPageLayoutOutput> {
  return suggestPageLayoutFlow(input);
}

const suggestPageLayoutPrompt = ai.definePrompt({
  name: 'suggestPageLayoutPrompt',
  input: {schema: SuggestPageLayoutInputSchema},
  output: {schema: SuggestPageLayoutOutputSchema},
  prompt: `You are an AI design assistant that suggests page layouts and styling based on the content and purpose of the page.

Consider the following information to generate layout and styling suggestions:

Page Content: {{{pageContent}}}
Page Purpose: {{{pagePurpose}}}
Website Purpose: {{{websitePurpose}}}
Target Audience: {{{targetAudience}}}

Provide clear and concise layout suggestions that describe the structure of the page, including sections, elements, and their arrangement.

Generate CSS styling rules that include colors, typography, spacing, and other visual properties to create an appealing and effective design. Take into account the violet primary color (#9400D3), light grayish-purple background color (#F0F0F7), and cyan accent color (#00FFFF).

Layout Suggestions:
{{output.layoutSuggestions}}

Styling Suggestions:
{{output.stylingSuggestions}}`,
});

const suggestPageLayoutFlow = ai.defineFlow(
  {
    name: 'suggestPageLayoutFlow',
    inputSchema: SuggestPageLayoutInputSchema,
    outputSchema: SuggestPageLayoutOutputSchema,
  },
  async input => {
    const {output} = await suggestPageLayoutPrompt(input);
    return output!;
  }
);
