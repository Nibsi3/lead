'use server';

/**
 * @fileOverview AI flow to generate an HTML section based on a user's prompt.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateSectionInputSchema = z.object({
  prompt: z
    .string()
    .describe('The user\'s instruction for the section to generate.'),
});
type GenerateSectionInput = z.infer<typeof GenerateSectionInputSchema>;

const GenerateSectionOutputSchema = z.object({
  html: z.string().describe('The generated HTML content for the section.'),
});
type GenerateSectionOutput = z.infer<typeof GenerateSectionOutputSchema>;

export async function generateSectionWithAi(
  input: GenerateSectionInput
): Promise<GenerateSectionOutput> {
  return generateSectionFlow(input);
}

const generateSectionPrompt = ai.definePrompt({
  name: 'generateSectionPrompt',
  input: { schema: GenerateSectionInputSchema },
  output: { schema: GenerateSectionOutputSchema },
  prompt: `You are an expert web developer who creates single HTML sections based on user requests.
Your task is to return a single, self-contained HTML section based on the user's prompt.

- Use Tailwind CSS classes for styling. Do not use inline styles.
- The section should be a single block of HTML (e.g., within a <section> or <div> tag).
- Ensure the returned HTML is valid.

User's instruction: "{{{prompt}}}"

Generated HTML Section:
`,
});

const generateSectionFlow = ai.defineFlow(
  {
    name: 'generateSectionFlow',
    inputSchema: GenerateSectionInputSchema,
    outputSchema: GenerateSectionOutputSchema,
  },
  async (input) => {
    const { output } = await generateSectionPrompt(input);
    return output!;
  }
);
