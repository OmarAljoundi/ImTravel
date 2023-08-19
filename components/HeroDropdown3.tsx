"use client";
import { useState, useEffect, FC } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { QueryString, cn, daysFilter, europeanCountries } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { getDestination } from "@/lib/fetchers";
import { useQuery } from "react-query";
import { ILocation } from "@/interface/Location";
import qs from "query-string";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const HeroDropdown3: FC<{
  locations: ILocation[];
  setSearch?: (search: any) => void;
  search?: QueryString;
  onChange: boolean;
}> = ({ locations, onChange, search, setSearch }) => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<ILocation[]>(() => {
    if (typeof window !== "undefined") {
      const query = qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query;

      if (query.destination && query.destination.length > 0) {
        const labelSet = new Set(query.destination);
        const filteredObjects = locations.filter((obj) =>
          labelSet.has(obj.nameBusiness)
        );
        return filteredObjects;
      }
    }
    return [];
  });

  const router = useRouter();

  useEffect(() => {
    const query = {
      ...qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query,
      destination: selected.map((x) => x.nameBusiness),
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: "comma",
        encode: true,
      }
    );

    if (onChange) {
      router.push(url);
    } else {
      //@ts-ignore
      setSearch({
        ...search,
        destination: query.destination,
      });
    }
  }, [selected, router]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-left w-full  cursor-pointer"
        >
          <PlusCircleIcon className="ml-2 h-4 w-4" />
          الوجهات
          {selected.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selected.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selected.length > 1 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selected.length} selected
                  </Badge>
                ) : (
                  locations
                    ?.filter((option) => selected.includes(option))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.id}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.nameBusiness}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={"ابحث عن الدولة"} />
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {locations?.map((option) => {
                return (
                  <CommandItem
                    key={option.id}
                    onSelect={() => {
                      if (selected.includes(option)) {
                        setSelected(selected.filter((x) => x != option));
                      } else {
                        setSelected([...selected, option]);
                      }
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "ml-2 text-green-600 flex h-4 w-4 items-center justify-center opacity-0 transition-all duration-500",
                        selected.includes(option) ? "opacity-100" : "opacity-0"
                      )}
                    />

                    <span>{option.nameBusiness}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selected.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() => setSelected([])}
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default HeroDropdown3;
