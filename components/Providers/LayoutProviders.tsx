"use client";
import { useDomainStore } from "@/hooks/useDomain";
import { useEffect, useState } from "react";
import HeaderTop from "../layout/ThemeOne/header-top";
import Footer from "../layout/ThemeOne/footer";
import { Office, Setting } from "@/types/custom";
import { useContentStore } from "@/hooks/useContent";

export function LayoutProviders({
  children,
  office,
  content,
}: {
  children: React.ReactNode;
  office: Office;
  content?: Setting;
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
