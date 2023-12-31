"use client";

import { useState, FC } from "react";
import { QueryString, cn } from "@/lib/utils";
import qs from "query-string";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/custom/Shared/country-dropdown";
import DestinationDropdown from "@/components/custom/Shared/destination-dropdown";
import DurationDropdown from "@/components/custom/Shared/duration-dropdown";
import PriceDropdown from "@/components/custom/Shared/price-dropdown";
import { Location } from "@/types/custom";

type FilterOptions = {
  onChange: boolean;
  destinatons: Location[];
};

const Filter: FC<FilterOptions> = ({ onChange, destinatons }) => {
  const [search, setSearch] = useState<QueryString>({
    country: [],
    days: [],
    destination: [],
    maxprice: null,
  });

  const getUrl = () => {
    const url = qs.stringifyUrl(
      {
        url: "/tour-listing",
        query: search,
      },
      {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: "comma",
        encode: true,
      }
    );

    return url;
  };

  return (
    <div
      className={cn(
        "p-3 sm:p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg mb-5 grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      <section>
        <CountryDropdown
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
      </section>
      {onChange && (
        <section>
          <DestinationDropdown destinations={destinatons} />
        </section>
      )}

      <section>
        <DurationDropdown
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
      </section>
      <section className={cn(!onChange ? "col-span-2  lg:col-span-1" : "")}>
        <PriceDropdown
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
      </section>

      {!onChange && (
        <section
          className={cn(onChange ? "col-span-1" : "col-span-2 lg:col-span-1")}
        >
          <Link href={getUrl()}>
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
