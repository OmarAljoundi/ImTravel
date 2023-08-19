"use client";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import MobileMenu from "@/components/MobileMenu";
import { useDomainStore } from "@/hooks/useDomain";
import { IOffice } from "@/interface/Office";
import { useEffect } from "react";

export function LayoutProviders({
  children,
  office,
}: {
  children: React.ReactNode;
  office: IOffice;
}) {
  const setOffce = useDomainStore((state) => state.setOffice);
  const discardOffice = useDomainStore((state) => state.discardOffice);

  useEffect(() => {
    setOffce(office);

    return () => {
      discardOffice();
    };
  }, []);

  return (
    <div>
      <HeaderTop />
      <MobileMenu />
      {children}
      <Footer />
    </div>
  );
}
