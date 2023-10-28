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
    <div className={office?.primary_font}>
      {children}
      <style jsx global>
        {`
          @layer base {
            :root {
              --primary: ${hexToHSLString(office!.primary_color)};
              --secondary: ${hexToHSLString(office!.secondary_color)};
              --bg-1: ${hexToHSLString(office!.bg_primary_color)};
              --bg-2: ${hexToHSLString(office!.bg_secondary_color)};
              --primary-light: ${hexToHSLString(office!.primary_color, 0.3)};
              --secondary-light: ${hexToHSLString(
                office!.secondary_color,
                0.3
              )};
            }
          }
        `}
      </style>
    </div>
  );
}

// --tertiary: ${hexToHSLString(office!.third_color)};
