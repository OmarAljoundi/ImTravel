import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ITour } from "@/interface/Tour";
import { FC, useState } from "react";
import { compareAsc, format } from "date-fns";
import { useDomainStore } from "@/hooks/useDomain";
import { cn } from "@/lib/utils";
import ar from "date-fns/locale/ar-SA";
const DatesData: FC<{ tour: ITour }> = ({ tour }) => {
  const office = useDomainStore((x) => x.office);
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size={"sm"} className={cn(!open ? "bg-primary" : "opacity-60")}>
          {!open ? "عرض التواريخ" : "إخفاء التواريخ"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <div className="grid grid-cols-2 gap-6">
          {tour.tourPricing?.map((item, index) => (
            <Button
              size={"sm"}
              className={cn("text-sm", office?.primaryFont)}
              key={index}
            >
              {format(new Date(item.tourDate!), "PPP", { locale: ar })}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatesData;
