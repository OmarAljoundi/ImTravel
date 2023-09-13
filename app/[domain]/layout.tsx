export const revalidate = false;

import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getSiteData, getSitesData, getTourBySlug } from "@/lib/fetchers";
import { LayoutProviders } from "@/components/Providers/LayoutProviders";
import DomainLayout from "@/components/Providers/DomainProvider";
import { Metadata } from "next";

// export async function generateStaticParams() {
//   const sites = await getSitesData();
//   const allPaths = [...sites.map(({ slug }) => slug)].filter(
//     (path) => path
//   ) as Array<string>;

//   return allPaths.map((domain) => ({
//     params: {
//       domain,
//     },
//   }));
// }

export async function generateMetadata({
  params,
}: {
  params: { domain: string };
  children: ReactNode;
}): Promise<Metadata> {
  const data = await getSiteData(params.domain);
  if (data) {
    return {
      title: data.seoTitle,
      description: data.seoDescription,
      openGraph: {
        title: data.seoTitle || "",
        description: data.seoDescription || "",
        type: "website",
        images: [data.logo || ""],
        siteName: "Mundo Tours",
      },
      keywords: data.seoTags || "",
    };
  }
  return {
    title: "Error - Product not found ",
  };
}

export default async function SiteLayout({
  params,
  children,
}: {
  params: { domain: string };
  children: ReactNode;
}) {
  const { domain } = params;
  const data = await getSiteData(domain);
  if (!data) {
    notFound();
  }

  return (
    <LayoutProviders office={data}>
      <DomainLayout>{children}</DomainLayout>
    </LayoutProviders>
  );
}
