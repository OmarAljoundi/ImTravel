"use client";
import { Fragment, useState, useEffect, FC } from "react";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { cn, europeanCountries } from "@/lib/utils";
import Image from "next/image";
import { useDomainStore } from "@/hooks/useDomain";
import { X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useSearchParams } from "@search-params/react";
import { config } from "@/schema";

const CountryDropdown = () => {
  const { country, setQuery } = useSearchParams({
    route: config.home,
  });
  const office = useDomainStore((x) => x.office);

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
          {country && country?.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {country.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex lg:gap-1">
                {country.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {country.length} selected
                  </Badge>
                ) : (
                  europeanCountries
                    .filter((option) => country.includes(option.label))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.label}
                        className="rounded-sm px-1 font-normal"
                        onClick={() =>
                          setQuery({
                            country: [
                              ...country.filter((x) => x != option.label),
                            ],
                          })
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
          <CommandInput placeholder={"ابحث عن الدولة"} className="ml-4" />
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {europeanCountries.map((option) => {
                return (
                  <CommandItem
                    key={option.label}
                    onSelect={() => {
                      if (country?.includes(option.label)) {
                        setQuery({
                          country: country.filter((x) => x != option.label),
                        });
                      } else {
                        setQuery({
                          country: [...(country ?? []), option.label],
                        });
                      }
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "ml-2 text-green-600 flex h-4 w-4 items-center justify-center opacity-0 transition-all duration-500",
                        country?.includes(option.label)
                          ? "opacity-100"
                          : "opacity-0"
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
            {country && country.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() =>
                      setQuery({
                        country: undefined,
                      })
                    }
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

export default CountryDropdown;
