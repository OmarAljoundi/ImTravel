"use client";
import { useDomainStore } from "@/hooks/useDomain";
import { ReactNode } from "react";

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
              --primary: ${office?.primaryColor};
              --secondary: #5c5552;
              --tertiary: #8f857d;
              --bg-1: #f7f0f5;
              --bg-2: #f7f0f5;

              --btn-bg: #efeffd;
              --border: #c2c7d0;
              --neutral-700: #243757;
              --primary-light: #ececfd;
              --secondary-light: #eafbf1;
              --secondary-500: #22804a;
              --dark: #091e42;
            }
          }
        `}
      </style>
    </div>
  );
}
