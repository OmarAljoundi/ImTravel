"use client";
import { useEffect, useState, FC } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../../ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { QueryString, cn, daysFilter, europeanCountries } from "@/lib/utils";
import { Separator } from "../../ui/separator";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDomainStore } from "@/hooks/useDomain";
import { X } from "lucide-react";

const DurationDropdown: FC<{
  setSearch?: (search: any) => void;
  search?: QueryString;
  onChange: boolean;
}> = ({ onChange, search, setSearch }) => {
  const office = useDomainStore((x) => x.office);
  const pathname = usePathname();
  const [selected, setSelected] = useState<{ value: string; label: string }[]>(
    []
  );

  const searchParams = useSearchParams();

  useEffect(() => {
    const days = searchParams.get("days");
    if (days) {
      const labelSet = new Set(days.split(","));
      const filteredObjects = daysFilter.filter((obj) =>
        labelSet.has(obj.value)
      );
      setSelected(filteredObjects);
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const query = {
      ...qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query,
      days: selected.map((x) => x.value),
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
        days: query.days,
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
          مدة الرحلة
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
                  daysFilter
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
        className={cn("w-[200px] p-0", office?.primary_font)}
        align="start"
      >
        <Command>
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {daysFilter.map((option) => {
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

                    <span className="font-naskh">{option.label}</span>
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

export default DurationDropdown;
