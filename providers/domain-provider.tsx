"use client";
import { useDomainStore } from "@/hooks/use-domain";
import { hexToHSLString } from "@/lib/helpers";
import { ReactNode } from "react";

type DomainLayout = {
  children: ReactNode;
};

export default function DomainLayout({ children }: DomainLayout) {
  const store = useDomainStore((s) => s.office);

  const { details: office } = store!;
  return (
    <div className={office?.primaryFont ?? ""}>
      {children}
      <style jsx global>
        {`
          @layer base {
            :root {
              --primary: ${hexToHSLString(office.primaryColor ?? "")};
              --secondary: ${hexToHSLString(office.secondaryColor ?? "")};
              --bg-1: ${hexToHSLString(office.bgPrimaryColor ?? "")};
              --bg-2: ${hexToHSLString(office.bgSecondaryColor ?? "")};
              --primary-light: ${hexToHSLString(
                office.primaryColor ?? "",
                0.3
              )};
              --secondary-light: ${hexToHSLString(
                office.secondaryColor ?? "",
                0.3
              )};
            }
          }
        `}
      </style>
    </div>
  );
}
