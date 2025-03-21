import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LayoutProvider } from "@/providers/layout-provider";
import DomainLayout from "@/providers/domain-provider";
import { getSiteData } from "@/server/public-query.server";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default async function SiteLayout({
  params,
  children,
}: {
  params: Promise<{ domain: string }>;
  children: ReactNode;
}) {
  const { domain } = await params;
  const data = await getSiteData(domain);
  if (!data) {
    notFound();
  }

  return (
    <LayoutProvider office={data.result}>
      <DomainLayout>
        <Header />
        {children}
        <Footer />
      </DomainLayout>
    </LayoutProvider>
  );
}
