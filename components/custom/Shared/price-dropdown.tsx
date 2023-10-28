"use client";
import { FC, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Button } from "../../ui/button";
import { QueryString } from "@/lib/utils";
import qs from "query-string";
import { usePathname, useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import { useDomainStore } from "@/hooks/useDomain";
import { CircleDollarSign } from "lucide-react";

const PriceDropdown: FC<{
  setSearch?: (search: QueryString) => void;
  search?: QueryString;
  onChange: boolean;
}> = ({ onChange, search, setSearch }) => {
  const pathname = usePathname();
  const office = useDomainStore((x) => x.office);

  const [value, setValue] = useState<number | undefined>(() => {
    if (typeof window !== "undefined") {
      const query = qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query;

      if (query.maxprice) {
        return Number(query.maxprice);
      }
    }
    return undefined;
  });
  const debouncedValue = useDebounce<number | undefined>(value, 750);
  const router = useRouter();

  useEffect(() => {
    const query = {
      ...qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query,
      maxprice: value,
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
        maxprice: query.maxprice,
      });
    }
  }, [debouncedValue, router]);

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
            ر.ع {value}
          </span>
          <Slider
            handleStyle={{
              backgroundColor: "var(--primary)",
              borderColor: "var(--primary)",
            }}
            max={900}
            // min={office!.minPrice}
            trackStyle={{ backgroundColor: "var(--primary)" }}
            value={value}
            onChange={(value) => setValue(value as number)}
          />
        </div>
      </div>
    </Button>
  );
};

export default PriceDropdown;
