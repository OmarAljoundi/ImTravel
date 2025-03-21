import { z } from "zod";

export const seoSchema = z
  .object({
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    keywords: z
      .object({ id: z.string(), text: z.string() })
      .array()
      .nullable()
      .default([]),
    media: z.object({ url: z.string(), alt: z.string().optional() }).optional(),
  })
  .default({
    description: "",
    keywords: [],
    title: "",
  });

export type SeoSchema = z.infer<typeof seoSchema>;
