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
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { useDomainStore } from "@/hooks/use-domain";
import { QueryLocationSchema } from "@/schema";

const DestinationDropdown: FC<{ destinations: QueryLocationSchema[] }> = ({
  destinations,
}) => {
  const router = useRouter();
  const { destination } = useParams();
  const select = decodeURIComponent(destination as string);
  const office = useDomainStore((x) => x.office);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-left w-full  cursor-pointer"
        >
          <Plus className="ml-2 h-4 w-4" />
          الوجهات
          {destination && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {select.replaceAll("-", " ")}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-[200px] p-0", office?.details?.primaryFont)}
        align="start"
      >
        <Command>
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {destinations?.map((option) => {
                return (
                  <CommandItem
                    key={option.id}
                    onSelect={() => {
                      router.push(`/tour-listing/${option.slug}`);
                    }}
                  >
                    <Check
                      className={cn(
                        "ml-2 text-green-600 flex h-4 w-4 items-center justify-center opacity-0 transition-all duration-500",
                        select.replaceAll("-", " ") == option.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />

                    <span>{option.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {destination && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() => router.push("/tour-listing")}
                  >
                    حذف الفلتر
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

export default DestinationDropdown;
