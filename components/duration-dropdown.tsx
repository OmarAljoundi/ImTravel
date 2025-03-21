"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { cn, daysFilter } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useDomainStore } from "@/hooks/use-domain";
import { X } from "lucide-react";
import { useSearchParams } from "@search-params/react";
import { config } from "@/schema/search-params-schema";

const DurationDropdown = () => {
  const office = useDomainStore((x) => x.office);

  const { setQuery, days } = useSearchParams({
    route: config.home,
  });

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
          {days && days.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {days.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {days.length > 1 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {days.length} selected
                  </Badge>
                ) : (
                  daysFilter
                    .filter((option) => days.includes(option.label))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.label}
                        className="rounded-sm px-1 font-normal"
                        onClick={() =>
                          setQuery({
                            days: [...days.filter((x) => x != option.label)],
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        className={cn("w-[200px] p-0", office?.details?.primaryFont!)}
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
                      if (days?.includes(option.label)) {
                        setQuery({
                          days: days.filter((x) => x != option.label),
                        });
                      } else {
                        setQuery({
                          days: [...(days ?? []), option.label],
                        });
                      }
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "ml-2 text-green-600 flex h-4 w-4 items-center justify-center opacity-0 transition-all duration-500",
                        days?.includes(option.label)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />

                    <span className="font-naskh">{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {days && days.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() => setQuery({ days: [] })}
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
