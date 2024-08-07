import "./globals.css";
import "@/public/styles/styles.scss";
import "@/public/styles/line-awesome.min.css";
import StyledJsxRegistry from "./registry";
import { cn } from "@/lib/utils";
import { Kufi, Naskh, Sans } from "./fonts";
import ReactQueryProvider from "./react-query-provider";
import { SearchParamsProvider } from "./search-params-provider";
import { Suspense } from "react";

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
          Sans.variable,
          Kufi.variable,
          "bg-[var(--bg-1)] text-[var(--neutral-700)]"
        )}
      >
        <Suspense fallback={<div> Loading ..</div>}>
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
