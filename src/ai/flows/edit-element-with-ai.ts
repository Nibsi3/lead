'use server';

/**
 * @fileOverview AI flow to edit an HTML element based on a user's prompt.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EditElementInputSchema = z.object({
  html: z.string().describe('The HTML content of the element to be edited.'),
  prompt: z.string().describe('The user\'s instruction for how to edit the HTML.'),
});
type EditElementInput = z.infer<typeof EditElementInputSchema>;

const EditElementOutputSchema = z.object({
  newHtml: z.string().describe('The modified HTML content of the element.'),
});
type EditElementOutput = z.infer<typeof EditElementOutputSchema>;

export async function editElementWithAi(
  input: EditElementInput
): Promise<EditElementOutput> {
  return editElementFlow(input);
}

const editElementPrompt = ai.definePrompt({
  name: 'editElementPrompt',
  input: { schema: EditElementInputSchema },
  output: { schema: EditElementOutputSchema },
  prompt: `You are an expert web developer who can modify HTML elements based on user requests.
The user will provide you with an HTML snippet and a prompt describing the desired change.
Your task is to return the modified HTML.

- ONLY return the modified HTML for the element.
- Use Tailwind CSS classes for styling. Do not use inline styles unless absolutely necessary for something Tailwind cannot do.
- Ensure the returned HTML is valid.

Original HTML:
\'\'\'html
{{{html}}}
\'\'\'

User's instruction: "{{{prompt}}}"

Modified HTML:
`,
});

const editElementFlow = ai.defineFlow(
  {
    name: 'editElementFlow',
    inputSchema: EditElementInputSchema,
    outputSchema: EditElementOutputSchema,
  },
  async input => {
    const { output } = await editElementPrompt(input);
    return output!;
  }
);
