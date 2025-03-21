"use client";
import { useDomainStore } from "@/hooks/use-domain";
import { useEffect, useState } from "react";
import { QueryOfficeSchema, QueryTourSchema } from "@/schema";

export function LayoutProvider({
  children,
  office,
}: {
  children: React.ReactNode;
  office: {
    bestTours: QueryTourSchema[];
    details: QueryOfficeSchema;
    faq: { id: string; title: string; description: string }[];
    pricingFilter: {
      arCurrency: string;
      minPrice: number;
      maxPrice: number;
    };
  };
}) {
  const { setOffice, discardOffice } = useDomainStore();

  useEffect(() => {
    setOffice(office);

    return () => {
      discardOffice();
    };
  }, [setOffice, discardOffice, office]);

  const [mount, setMount] = useState(false);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    link.href = office.details.logo;
    setMount(true);
  }, [office]);

  if (!mount) return null;
  return <>{children}</>;
}
