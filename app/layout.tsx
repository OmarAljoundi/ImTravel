import "./globals.css";
import "@/public/styles/styles.scss";
import "@/public/styles/line-awesome.min.css";
import StyledJsxRegistry from "./registry";
import { cn } from "@/lib/utils";
import { Kufi, Naskh, Sans } from "./fonts";

export const metadata = {
  title: "Placewise - Online Booking NextJS Template",
  description: "A nextjs template for online booking system",
};

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
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
