"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchParamsProvider as Provider } from "@search-params/react";

export const SearchParamsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Provider query={searchParams} router={router}>
      {children}
    </Provider>
  );
};
