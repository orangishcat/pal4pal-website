// Resources are Starlight docs: each problem and slide deck is a blog post
// under /resources, rendered with the shared Starlight layout.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "starlight-blog/schema";

const resourceFields = z.object({
  team: z.string().optional(),
  topic: z.string().optional(),
  points: z.number().optional(),
  author: z.string().optional(),
  diagram: z.enum(["semicircle", "triangle"]).optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context).extend(resourceFields.shape),
    }),
  }),
};
