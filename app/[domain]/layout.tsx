import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getContentData, getSiteData } from "@/lib/fetchers";
import { LayoutProviders } from "@/components/Providers/LayoutProviders";
import DomainLayout from "@/components/Providers/DomainProvider";
import { Metadata } from "next";

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
  const siteContent = await getContentData();
  if (!data) {
    notFound();
  }

  return (
    <LayoutProviders office={data} content={siteContent?.content}>
      <DomainLayout>{children}</DomainLayout>
    </LayoutProviders>
  );
}
