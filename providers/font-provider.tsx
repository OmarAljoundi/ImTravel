"use client";
import React, { ReactNode, useEffect, useState } from "react";

export function FontProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <main>{children}</main>;
}
