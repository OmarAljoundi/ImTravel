"use client";
import { useSearchParams } from "next/navigation";

function useGetAllSearchParams() {
  const searchParams = useSearchParams();
  const params: { [key: string]: string } = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return `?${queryString}`;
}

export default useGetAllSearchParams;
