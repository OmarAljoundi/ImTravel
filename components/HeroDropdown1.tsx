"use client";
import { Fragment, useState, useEffect, FC } from "react";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { QueryString, cn, europeanCountries, queryString } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Separator } from "./ui/separator";
import Image from "next/image";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDomainStore } from "@/hooks/useDomain";
import { X } from "lucide-react";

const HeroDropdown1: FC<{
  setSearch?: (search: any) => void;
  search?: QueryString;
  onChange: boolean;
}> = ({ onChange, search, setSearch }) => {
  const office = useDomainStore((x) => x.office);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<
    { countryCode: string; label: string }[]
  >([]);

  useEffect(() => {
    const country = searchParams.get("country");
    if (country) {
      const labelSet = new Set(country.split(","));
      const filteredObjects = europeanCountries.filter((obj) =>
        labelSet.has(obj.label)
      );
      setSelected(filteredObjects);
    }
  }, []);

  useEffect(() => {
    const query = {
      ...qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query,
      country: selected.map((x) => x.label),
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
        country: query.country,
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
          الدول
          {selected.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selected.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex lg:gap-1">
                {selected.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selected.length} selected
                  </Badge>
                ) : (
                  europeanCountries
                    .filter((option) => selected.includes(option))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.label}
                        className="rounded-sm px-1 font-normal"
                        onClick={() =>
                          setSelected([...selected.filter((x) => x != option)])
                        }
                      >
                        {option.label}
                        <X className="border  rounded-lg w-4 h-4 mr-2 text-white bg-red-500/70" />
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-[200px] p-0", office?.primaryFont)}
        align="start"
      >
        <Command>
          <CommandInput placeholder={"ابحث عن الدولة"} className="ml-4" />
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {europeanCountries.map((option) => {
                return (
                  <CommandItem
                    key={option.label}
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
                    <Image
                      src={`https://flagcdn.com/48x36/${option.countryCode.toLowerCase()}.png`}
                      width={48}
                      height={36}
                      alt={option.countryCode}
                      fetchPriority="high"
                      loading="eager"
                      className="ml-2 h-4 w-4 text-muted-foreground"
                    />
                    <span>{option.label}</span>
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

export default HeroDropdown1;
