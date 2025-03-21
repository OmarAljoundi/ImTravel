import { z } from "zod";

export const customerSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  phoneNumber: z.string().min(1),
  contactMethod: z.string().min(1),
  status: z.number().int().default(1),
  notes: z.string().optional(),
  createdAt: z.date().default(new Date()),
  tourId: z.number().int().positive().optional().nullable(),
});

export const locationSchema = z.object({
  id: z.number().default(0),
  name: z.string().min(1),
  image: z.object({ url: z.string(), alt: z.string().optional() }).optional(),
  isActive: z.boolean().default(true),
  isOffice: z.boolean().default(false),
  showOnService: z.boolean().default(true),
  showOnEurope: z.boolean().default(false),
  order: z.number().default(1),
  seo: z.any().optional().nullable(),
  slug: z.string().optional().nullable(),
  createdAt: z.date().default(new Date()),
});

export const locationAttributeSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().optional().nullable(),
  order: z.number().int().optional().nullable(),
  seo: z.any().optional().nullable(),
  locationId: z.number().int().positive().optional().nullable(),
  createdAt: z.date().default(new Date()),
});

export const locationTourSchema = z.object({
  id: z.number().int().positive(),
  locationId: z.number().int().positive(),
  locationAttrId: z.number().int().positive(),
  tourId: z.number().int().positive(),
  createdAt: z.date().default(new Date()),
});

export const officeSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  contactNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  currency: z.string().min(1),
  bestTours: z.array(z.number().int()),
  primaryColor: z.string().optional().nullable(),
  secondaryColor: z.string().optional().nullable(),
  thirdColor: z.string().optional().nullable(),
  bgPrimaryColor: z.string().optional().nullable(),
  bgSecondaryColor: z.string().optional().nullable(),
  primaryFont: z.string().optional().nullable(),
  socialMedia: z.array(z.any()).default([]),
  seo: z.any().optional().nullable(),
  status: z.boolean().optional().nullable(),
  createdAt: z.date().default(new Date()),
});

export const tourTypeSchema = z.object({
  id: z.number().default(0),
  name: z.string().optional().nullable(),
  image: z.string().min(1),
  showOnService: z.boolean().default(true),
  createdAt: z.date().default(new Date()),
});

export const tourSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  numberOfDays: z.number().int().positive(),
  code: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  images: z.array(z.string()).default([]),
  seo: z.any().optional().nullable(),
  isActive: z.boolean().optional().nullable(),
  isTicketIncluded: z.boolean().optional().nullable(),
  startDay: z.array(z.string()).default([]),
  priceSingle: z.number().optional().nullable(),
  priceDouble: z.number().optional().nullable(),
  priceSingleSa: z.number().optional().nullable(),
  priceDoubleSa: z.number().optional().nullable(),
  tourPrices: z
    .array(
      z.object({
        date: z.coerce.date(),
        uuid: z.string(),
        price: z.number().default(0),
        one_price: z.boolean().default(true),
        include_all_month: z.boolean().default(false),
      })
    )
    .default([]),
  tourCountries: z.array(z.string()).default([]),
  tourHotels: z.array(z.string()).default([]),
  tourIncludes: z
    .array(
      z.object({
        uuid: z.string(),
        title: z.string(),
        description: z.string(),
      })
    )
    .default([]),
  tourExcludes: z
    .array(
      z.object({
        uuid: z.string(),
        title: z.string(),
        description: z.string(),
      })
    )
    .default([]),
  tourSections: z
    .array(
      z.object({
        uuid: z.string(),
        title: z.string(),
        description: z.string(),
      })
    )
    .default([]),
  airpotComing: z.string().nullable().optional(),
  airpotGoing: z.string().nullable().optional(),
  additionalInfo: z.string().nullable().optional(),
  additionalService: z.array(z.any()).default([]),
  externalFile: z.any().optional().nullable(),
  typeId: z
    .union([z.number(), z.string()])
    .optional()
    .nullable()
    .transform(Number),
  createdAt: z.date().default(new Date()),
});

export const createCustomerSchema = customerSchema.omit({
  id: true,
  createdAt: true,
});

export const createLocationSchema = locationSchema.omit({
  id: true,
  createdAt: true,
});

export const createLocationAttributeSchema = locationAttributeSchema.omit({
  id: true,
  createdAt: true,
});

export const createLocationTourSchema = locationTourSchema.omit({
  id: true,
  createdAt: true,
});

export const createOfficeSchema = officeSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    bestTours: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          tourType: tourTypeSchema.optional(),
        })
      )
      .default([]),
  });

export const createTourTypeSchema = tourTypeSchema.omit({
  id: true,
  createdAt: true,
});

export const createTourSchema = tourSchema.omit({
  id: true,
  createdAt: true,
});

export const updateCustomerSchema = createCustomerSchema;
export const updateLocationSchema = createLocationSchema;
export const updateLocationAttributeSchema = createLocationAttributeSchema;
export const updateLocationTourSchema = createLocationTourSchema;
export const updateOfficeSchema = createOfficeSchema;
export const updateTourTypeSchema = createTourTypeSchema;
export const updateTourSchema = createTourSchema;

export const customerWithRelationsSchema = customerSchema.extend({
  tour: tourSchema.optional().nullable(),
});
export const tourWithRelationsSchema = tourSchema.extend({
  customers: z.array(customerSchema).optional(),
  tourType: tourTypeSchema.partial().optional().nullable(),
  locationTours: z.array(locationTourSchema).optional(),
});

export const locationTourWithRelationsSchema = locationTourSchema.extend({
  location: locationSchema.optional(),
  locationAttr: locationAttributeSchema.optional(),
  tour: tourWithRelationsSchema.partial().optional(),
});

export const locationAttributeWithRelationsSchema =
  locationAttributeSchema.extend({
    location: locationSchema.optional().nullable(),
    locationTours: z.array(locationTourWithRelationsSchema).optional(),
    _count: z
      .object({ locationTours: z.number().default(0) })
      .default({ locationTours: 0 }),
  });

export const locationWithRelationsSchema = locationSchema.extend({
  attributes: z
    .array(locationAttributeWithRelationsSchema)
    .optional()
    .default([]),
  locationTours: z.array(locationTourWithRelationsSchema).optional(),
});

export const tourTypeWithRelationsSchema = tourTypeSchema.extend({
  tours: z.array(tourSchema).optional(),
});

// Query schemas (same as with relations)
export const queryCustomerSchema = customerWithRelationsSchema;
export const queryLocationSchema = locationWithRelationsSchema;
export const queryLocationAttributeSchema =
  locationAttributeWithRelationsSchema;
export const queryLocationTourSchema = locationTourWithRelationsSchema;
export const queryOfficeSchema = officeSchema;
export const queryTourSchema = tourWithRelationsSchema;
export const queryTourTypeSchema = tourTypeWithRelationsSchema;

// Type exports
export type CustomerSchema = z.infer<typeof customerSchema>;
export type CreateCustomerSchema = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerSchema = z.infer<typeof updateCustomerSchema>;
export type CustomerWithRelationsSchema = z.infer<
  typeof customerWithRelationsSchema
>;
export type QueryCustomerSchema = z.infer<typeof queryCustomerSchema>;

export type LocationSchema = z.infer<typeof locationSchema>;
export type CreateLocationSchema = z.infer<typeof createLocationSchema>;
export type UpdateLocationSchema = z.infer<typeof updateLocationSchema>;
export type LocationWithRelationsSchema = z.infer<
  typeof locationWithRelationsSchema
>;
export type QueryLocationSchema = z.infer<typeof queryLocationSchema>;

export type LocationAttributeSchema = z.infer<typeof locationAttributeSchema>;
export type CreateLocationAttributeSchema = z.infer<
  typeof createLocationAttributeSchema
>;
export type UpdateLocationAttributeSchema = z.infer<
  typeof updateLocationAttributeSchema
>;
export type LocationAttributeWithRelationsSchema = z.infer<
  typeof locationAttributeWithRelationsSchema
>;
export type QueryLocationAttributeSchema = z.infer<
  typeof queryLocationAttributeSchema
>;

export type LocationTourSchema = z.infer<typeof locationTourSchema>;
export type CreateLocationTourSchema = z.infer<typeof createLocationTourSchema>;
export type UpdateLocationTourSchema = z.infer<typeof updateLocationTourSchema>;
export type LocationTourWithRelationsSchema = z.infer<
  typeof locationTourWithRelationsSchema
>;
export type QueryLocationTourSchema = z.infer<typeof queryLocationTourSchema>;

export type OfficeSchema = z.infer<typeof officeSchema>;
export type CreateOfficeSchema = z.infer<typeof createOfficeSchema>;
export type UpdateOfficeSchema = z.infer<typeof updateOfficeSchema>;
export type QueryOfficeSchema = z.infer<typeof queryOfficeSchema>;

export type TourSchema = z.infer<typeof tourSchema>;
export type CreateTourSchema = z.infer<typeof createTourSchema>;
export type UpdateTourSchema = z.infer<typeof updateTourSchema>;
export type TourWithRelationsSchema = z.infer<typeof tourWithRelationsSchema>;
export type QueryTourSchema = z.infer<typeof queryTourSchema>;

export type TourTypeSchema = z.infer<typeof tourTypeSchema>;
export type CreateTourTypeSchema = z.infer<typeof createTourTypeSchema>;
export type UpdateTourTypeSchema = z.infer<typeof updateTourTypeSchema>;
export type TourTypeWithRelationsSchema = z.infer<
  typeof tourTypeWithRelationsSchema
>;
export type QueryTourTypeSchema = z.infer<typeof queryTourTypeSchema>;
