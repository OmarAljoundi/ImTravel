import Hero from "@/components/custom/ThemeOne/hero";
import Faqs from "@/components/custom/ThemeOne/faqs";
import Destinations from "@/components/custom/ThemeOne/destinations";
import { Suspense } from "react";
import TourListing from "@/components/custom/ThemeOne/tours-listing";
import { Metadata } from "next";
import { getSiteData, getSitesData } from "@/lib/operations";

export async function generateStaticParams() {
  const params: { domain: string }[] = [];
  const responses = await getSitesData();
  responses
    .filter((x) => x.status)
    .map((office) => {
      params.push({
        domain: office.slug,
      });
    });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { domain: string };
}): Promise<Metadata> {
  const data = await getSiteData(params.domain);
  if (data) {
    return {
      title: data.seo?.title,
      description: data.seo?.description,
      openGraph: {
        title: data.seo?.title || "",
        description: data.seo?.description || "",
        type: "website",
        images: [data.logo || ""],
        siteName: data.name || "",
      },
      keywords: data.seo?.tags || "",
    };
  }
  return {
    title: "Error - Company not found",
  };
}

export default async function SiteHomePage() {
  return (
    <>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Destinations />
      </Suspense>
      <TourListing />
      <Faqs />
    </>
  );
}
