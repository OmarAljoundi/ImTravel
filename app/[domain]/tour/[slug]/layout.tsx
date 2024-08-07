import { ReactNode, Suspense } from "react";

export default function TourLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div> Loading ..</div>}>{children}</Suspense>;
}
