"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Button } from "@/components/ui/button";
import { CircleDollarSign } from "lucide-react";
import { useSearchParams } from "@search-params/react";
import { config } from "@/schema/search-params-schema";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import { useDomainStore } from "@/hooks/use-domain";

const PriceDropdown = () => {
  const { pricingFilter } = useDomainStore((o) => o.office!);
  const { maxprice, setQuery } = useSearchParams({
    route: config.home,
  });

  const [sliderValue, setSliderValue] = useState<number | undefined>(maxprice);

  const debouncedPrice = useDebounce<number | undefined>(sliderValue, 500);

  useEffect(() => {
    if (debouncedPrice !== maxprice) {
      setQuery({ maxprice: debouncedPrice });
    }
  }, [debouncedPrice, setQuery, maxprice]);

  return (
    <Button
      variant="outline"
      size="sm"
      className="text-left w-full cursor-pointer relative block"
    >
      <div className="px-6 focus:shadow-xl gap-3 items-center sm:text-sm">
        <div className="w-full py-1 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <CircleDollarSign />
            السعر
          </span>
          <span className="absolute top-[-14px] bg-white rounded-2xl py-1 px-5 right-4 shadow text-primary text-xs">
            {pricingFilter.arCurrency} {sliderValue}
          </span>
          <Slider
            handleStyle={{
              backgroundColor: "var(--primary)",
              borderColor: "var(--primary)",
            }}
            max={pricingFilter.maxPrice}
            min={pricingFilter.minPrice}
            // min={office!.minPrice}
            trackStyle={{ backgroundColor: "var(--primary)" }}
            value={sliderValue}
            onChange={(value) => setSliderValue(value as number)}
          />
        </div>
      </div>
    </Button>
  );
};

export default PriceDropdown;
