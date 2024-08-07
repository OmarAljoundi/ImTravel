"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Button } from "../../ui/button";
import { CircleDollarSign } from "lucide-react";
import { useSearchParams } from "@search-params/react";
import { config } from "@/schema";

const PriceDropdown = () => {
  const { maxprice, setQuery } = useSearchParams({
    route: config.home,
  });
  // const debouncedValue = useDebounce<number | undefined>(maxprice, 750);
  // const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      className="text-left w-full cursor-pointer relative block"
    >
      <div className="px-6 focus:shadow-xl  gap-3 items-center sm:text-sm ">
        <div className="w-full py-1 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <CircleDollarSign />
            السعر
          </span>
          <span className="absolute top-[-14px] bg-white rounded-2xl py-1 px-5 right-4 shadow text-primary text-xs">
            ر.ع {maxprice}
          </span>
          <Slider
            handleStyle={{
              backgroundColor: "var(--primary)",
              borderColor: "var(--primary)",
            }}
            max={900}
            // min={office!.minPrice}
            trackStyle={{ backgroundColor: "var(--primary)" }}
            value={maxprice}
            onChange={(value) => setQuery({ maxprice: value as number })}
          />
        </div>
      </div>
    </Button>
  );
};

export default PriceDropdown;
