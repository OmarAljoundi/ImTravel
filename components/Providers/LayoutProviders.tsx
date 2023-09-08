"use client";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import MobileMenu from "@/components/MobileMenu";
import { useDomainStore } from "@/hooks/useDomain";
import { IOffice } from "@/interface/Office";
import { useEffect, useState } from "react";

export function LayoutProviders({
  children,
  office,
}: {
  children: React.ReactNode;
  office: IOffice;
}) {
  const setOffce = useDomainStore((state) => state.setOffice);
  setOffce(office);

  const [mount, setMount] = useState(false);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      //@ts-ignore
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    //@ts-ignore
    link.href = office.logo;
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <div>
      <HeaderTop />

      {children}
      <Footer />
    </div>
  );
}
