"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Scroll() {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll({ behavior: "instant", left: 0, top: 0 });
  }, [pathname]);

  return <></>;
}
