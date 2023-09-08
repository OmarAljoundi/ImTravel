"use client";
import { useDomainStore } from "@/hooks/useDomain";
import { hexToHSLString } from "@/lib/helpers";
import { ReactNode, useEffect, useState } from "react";

type DomainLayout = {
  children: ReactNode;
};

export default function DomainLayout({ children }: DomainLayout) {
  const office = useDomainStore((s) => s.office);

  return (
    <div className={office?.primaryFont}>
      {children}
      <style jsx global>
        {`
          @layer base {
            :root {
              --primary: ${hexToHSLString(office!.primaryColor)};
              --secondary: ${hexToHSLString(office!.secondaryColor)};
              --tertiary: ${hexToHSLString(office!.thirdColor)};
              --bg-1: ${hexToHSLString(office!.bgPrimaryColor)};
              --bg-2: ${hexToHSLString(office!.bgSecondaryColor)};
              --primary-light: ${hexToHSLString(office!.primaryColor, 0.3)};
              --secondary-light: ${hexToHSLString(office!.secondaryColor, 0.3)};
            }
          }
        `}
      </style>
    </div>
  );
}
