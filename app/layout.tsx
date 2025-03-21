import "./globals.css";
import "@/public/styles/styles.scss";
import "@/public/styles/line-awesome.min.css";
import StyledJsxRegistry from "./registry";
import { cn } from "@/lib/utils";
import { Kufi, Naskh, Sans } from "./fonts";
import { Suspense } from "react";
import { SearchParamsProvider } from "@/providers/search-params-provider";
import { ReactQueryProvider } from "@/providers/react-query-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cn(
          Naskh.variable,
          Kufi.variable,
          Sans.variable,
          "bg-[var(--bg-1)] text-[var(--neutral-700)]"
        )}
      >
        <Suspense>
          <SearchParamsProvider>
            <ReactQueryProvider>
              <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </ReactQueryProvider>
          </SearchParamsProvider>
        </Suspense>
      </body>
    </html>
  );
}
