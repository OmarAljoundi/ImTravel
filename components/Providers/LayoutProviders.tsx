"use client";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import { useContentStore } from "@/hooks/useContent";
import { useDomainStore } from "@/hooks/useDomain";
import { IContent } from "@/interface/Content";
import { IOffice } from "@/interface/Office";
import { useEffect, useState } from "react";

export function LayoutProviders({
  children,
  office,
  content,
}: {
  children: React.ReactNode;
  office: IOffice;
  content: IContent;
}) {
  const setOffce = useDomainStore((state) => state.setOffice);
  setOffce(office);

  const setContent = useContentStore((state) => state.setContent);
  setContent(content);

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
