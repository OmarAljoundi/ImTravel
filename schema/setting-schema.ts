import { z } from "zod";
import { seoSchema } from "./seo-schema";
import { tourTypeSchema } from ".";

export const buttonVarientsEnums = ["default", "outline", "text"] as const;
export const MAX_ARTWORKS = 3;
export const MAX_EXPLORE_MORE = 2;
export const MAX_EXPLORE_MORE_ADDITONALS = 3;
export const MAX_FOOTER_COLUMNS = 3;
export const MAX_CONTACT_NUMBER = 3;

export const settingSchema = z.object({
  home: z.object({
    homehero: z
      .object({
        id: z.string(),
        media: z.object({ url: z.string(), alt: z.string().optional() }),
        mobile_media: z
          .object({ url: z.string(), alt: z.string().optional() })
          .optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
      })
      .array()
      .default([]),
    bestTours: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          tourType: tourTypeSchema.omit({ createdAt: true }).optional(),
        })
      )
      .default([]),
    faq: z
      .object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
      })
      .array()
      .default([]),
  }),

  seoStaticPagesHome: z.object({ seo: seoSchema }),
  seoStaticPagesAboutUs: z.object({ seo: seoSchema }),
  seoStaticPagesAllTours: z.object({ seo: seoSchema }),
});

export type SettingSchema = z.infer<typeof settingSchema>;
