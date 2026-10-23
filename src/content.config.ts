// Docusaurus-style problems collection: each problem is an MDX file whose
// frontmatter holds its metadata, rendered through a shared doc layout.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const problems = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/problems" }),
  schema: z.object({
    title: z.string(),
    team: z.string(),
    topic: z.string(),
    points: z.number(),
    author: z.string(),
    diagram: z.enum(["semicircle", "triangle"]).optional(),
  }),
});

export const collections = { problems };
