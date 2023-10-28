import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LayoutProviders } from "@/components/Providers/LayoutProviders";
import DomainLayout from "@/components/Providers/DomainProvider";
import { getContentData, getSiteData } from "@/lib/operations";

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
    <LayoutProviders office={data} content={siteContent}>
      <DomainLayout>{children}</DomainLayout>
    </LayoutProviders>
  );
}
