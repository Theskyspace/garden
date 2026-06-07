import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const MATURITY = ['seedling', 'growing', 'evergreen'] as const;
const TOPICS = [
  'fintech-infra',
  'founding-engineer',
  'ai-in-product',
  'operating-notes',
  'meta',
] as const;

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/Garden Content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    maturity: z.enum(MATURITY),
    topics: z.array(z.enum(TOPICS)).default([]),
    created: z.coerce.date(),
    tended: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/Garden Content/work' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    sector: z.string(),
    period: z.string(),
    location: z.string().optional(),
    order: z.number(),
    current: z.boolean().default(false),
    href: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/Garden Content/projects' }),
  schema: z.object({
    name: z.string(),
    blurb: z.string(),
    href: z.string().optional(),
    label: z.string().default('link'),
    year: z.number(),
    order: z.number().default(0),
  }),
});

export const collections = { writing, work, projects };
