"use clinet";
import HeroDropdown1 from "@/components/HeroDropdown1";
import HeroDropdown2 from "@/components/HeroDropdown2";
import HeroDropdown4 from "@/components/HeroDropdown4";
import HeroDropdown3 from "@/components/HeroDropdown3";
import { getDestination } from "@/lib/fetchers";
import { useQuery } from "react-query";
import { useEffect, useState, FC } from "react";
import SearchFilterLoading from "@/components/SearchFilterLoading";
import { QueryString, cn } from "@/lib/utils";
import qs from "query-string";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type FilterOptions = {
  onChange: boolean;
};

const Filter: FC<FilterOptions> = ({ onChange }) => {
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

  const fetchLocations = async () => {
    const result = await getDestination();
    return result.locations;
  };
  const { data: locations, isLoading } = useQuery("locations", fetchLocations, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <SearchFilterLoading />;

  return (
    <div
      className={cn(
        "p-3 sm:p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg mb-5 grid gap-4 grid-cols-1 md:grid-cols-2",
        onChange ? "lg:grid-cols-4" : "lg:grid-cols-5"
      )}
    >
      <section>
        <HeroDropdown1
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
      </section>
      <section>
        <HeroDropdown2
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
      </section>
      <section>
        <HeroDropdown3
          locations={locations!}
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
      </section>
      <section>
        <HeroDropdown4 />
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
