'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/generate-meta-descriptions.ts';
import '@/ai/flows/suggest-page-layout.ts';
import '@/ai/flows/generate-initial-content.ts';
import '@/ai/flows/edit-element-with-ai.ts';
import '@/ai/flows/generate-section-with-ai.ts';
