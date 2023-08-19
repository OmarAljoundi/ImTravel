"use client";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import MobileMenu from "@/components/MobileMenu";
import { useDomainStore } from "@/hooks/useDomain";
import { IOffice } from "@/interface/Office";

export function LayoutProviders({
  children,
  office,
}: {
  children: React.ReactNode;
  office: IOffice;
}) {
  const setOffce = useDomainStore((state) => state.setOffice);
  setOffce(office);

  return (
    <div>
      <HeaderTop />
      <MobileMenu />
      {children}
      <Footer />
    </div>
  );
}
