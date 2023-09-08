"use client";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";
import { QueryClientProvider, QueryClient } from "react-query";

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return (
    <QueryClientProvider client={new QueryClient()}>
      <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
    </QueryClientProvider>
  );
}
