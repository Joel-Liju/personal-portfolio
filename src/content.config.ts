import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename, e.g. studio-os.md -> "studio-os",
// which becomes the URL at /work/studio-os.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      role: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const recipes = defineCollection({
  loader: glob({ base: './src/content/recipe', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
      prepTime: z.string(),
      servings: z.int(),
      cookTime: z.string(),
      Description: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const boardGames = defineCollection({
  loader: glob({ base: './src/content/board-game', pattern: '**/*.md' }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().max(160),
      date: z.coerce.date(),
      minPlayers: z.int().positive(),
      maxPlayers: z.int().positive(),
      playTime: z.string(),
      complexity: z.string(),
      tags: z.array(z.string()).default([]),
      url: z.url().optional(),
      draft: z.boolean().default(false),
    })
    .refine((game) => game.maxPlayers >= game.minPlayers, {
      message: 'Maximum players must be at least the minimum players.',
      path: ['maxPlayers'],
    }),
});

const wines = defineCollection({
  loader: glob({ base: './src/content/wine', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(160),
    date: z.coerce.date(),
    producer: z.string(),
    varietal: z.string(),
    region: z.string(),
    vintage: z.int().positive().optional(),
    rating: z.number().min(0).max(5).optional(),
    tags: z.array(z.string()).default([]),
    url: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, recipes, boardGames, wines };
