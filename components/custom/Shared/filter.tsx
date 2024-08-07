"use client";
import { FC, Suspense } from "react";
import { cn } from "@/lib/utils";
import CountryDropdown from "@/components/custom/Shared/country-dropdown";
import { Location } from "@/types/custom";
import DestinationDropdown from "./destination-dropdown";
import DurationDropdown from "./duration-dropdown";
import PriceDropdown from "./price-dropdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import useGetAllSearchParams from "@/hooks/useGetAllSearchParams";

type FilterOptions = {
  onChange: boolean;
  destinatons: Location[];
};

const Filter: FC<FilterOptions> = ({ onChange, destinatons }) => {
  const params = useGetAllSearchParams();

  return (
    <div
      className={cn(
        "p-3 sm:p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg mb-5 grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      <Suspense fallback={<div> Loading ..</div>}>
        <CountryDropdown />
      </Suspense>
      {onChange && (
        <Suspense fallback={<div> Loading ..</div>}>
          <DestinationDropdown destinations={destinatons} />
        </Suspense>
      )}
      <Suspense fallback={<div> Loading ..</div>}>
        <DurationDropdown />
      </Suspense>
      <Suspense fallback={<div> Loading ..</div>}>
        <section className={cn(!onChange ? "col-span-2  lg:col-span-1" : "")}>
          <PriceDropdown />
        </section>
      </Suspense>

      {!onChange && (
        <section
          className={cn(onChange ? "col-span-1" : "col-span-2 lg:col-span-1")}
        >
          <Link href={`/tour-listing${params}`}>
            <Button className="w-full" size={"sm"}>
              <SearchIcon />
              <span className="mr-2">أبحث</span>
            </Button>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Filter;
