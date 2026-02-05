import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    sidebar: z
      .object({
        hidden: z.boolean().optional(),
        order: z.number().optional(),
        label: z.string().optional()
      })
      .optional(),
    head: z.array(z.any()).optional()
  })
});

export const collections = { docs };
