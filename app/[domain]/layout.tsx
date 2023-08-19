import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getSiteData, getSitesData } from "@/lib/fetchers";
import { LayoutProviders } from "@/components/Providers/LayoutProviders";
import DomainLayout from "@/components/Providers/DomainProvider";
export const revalidate = 0;

export async function generateStaticParams() {
  const sites = await getSitesData();
  const allPaths = [...sites.map(({ slug }) => slug)].filter(
    (path) => path
  ) as Array<string>;

  return allPaths.map((domain) => ({
    params: {
      domain,
    },
  }));
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
