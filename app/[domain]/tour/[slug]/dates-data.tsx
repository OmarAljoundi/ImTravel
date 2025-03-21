import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { useDomainStore } from "@/hooks/use-domain";
import { cn } from "@/lib/utils";
import { arSA } from "date-fns/locale/ar-SA";
import { QueryTourSchema } from "@/schema";

export function DatesData({ tour }: { tour: QueryTourSchema }) {
  const office = useDomainStore((x) => x.office);
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size={"sm"}
          className={cn(
            !open ? "bg-primary" : "opacity-60",
            "text-xs sm:text-sm"
          )}
        >
          {!open ? "عرض التواريخ" : "إخفاء التواريخ"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <div className="grid grid-cols-2 gap-6">
          {tour.tourPrices?.map((item, index) => (
            <Button
              size={"sm"}
              className={cn("text-xs sm:text-sm", office?.details?.primaryFont)}
              key={index}
            >
              {format(new Date(item.date!), "PPP", { locale: arSA })}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
