"use server";
import {
  QueryLocationSchema,
  QueryOfficeSchema,
  QueryTourSchema,
} from "@/schema";

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  const result = await fetch(
    `${process.env.BACKEND_API}/offices/${subdomain}`,
    { next: { revalidate: 86400 } }
  );

  if (result.status == 200) {
    return (await result.json()) as {
      result: {
        bestTours: QueryTourSchema[];
        details: QueryOfficeSchema;
        faq: { id: string; title: string; description: string }[];
        pricingFilter: {
          arCurrency: string;
          minPrice: number;
          maxPrice: number;
        };
      };
    };
  }

  return undefined;
}

export async function getDestinations() {
  const result = await fetch(`${process.env.BACKEND_API}/destinations`, {
    next: { revalidate: 86400 },
  });

  if (result.status == 200) {
    return (await result.json()) as {
      result: Array<QueryLocationSchema>;
    };
  }
  return undefined;
}

export async function getDestination(slug: string) {
  const result = await fetch(
    `${process.env.BACKEND_API}/destinations/${slug}`,
    { next: { revalidate: 86400 } }
  );

  if (result.status == 200) {
    return (await result.json()) as {
      result: { tours: Array<QueryTourSchema>; destinationName: string };
    };
  }
  return undefined;
}

export async function getTours() {
  const result = await fetch(`${process.env.BACKEND_API}/tours`, {
    next: { revalidate: 86400 },
  });

  if (result.status == 200) {
    return (await result.json()) as {
      result: Array<QueryTourSchema>;
    };
  }
  return undefined;
}

export async function getTourDetails(slug: string) {
  const result = await fetch(`${process.env.BACKEND_API}/tours/${slug}`, {
    next: { revalidate: 86400 },
  });

  if (result.status == 200) {
    return (await result.json()) as {
      result: QueryTourSchema;
    };
  }
  return undefined;
}
