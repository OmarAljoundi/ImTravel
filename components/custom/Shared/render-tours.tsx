"use client";
import { useDomainStore } from "@/hooks/useDomain";
import TourCardLoading from "@/components/custom/ThemeOne/tour-card-loading";
import TourCard from "@/components/custom/ThemeOne/tour-card";
import { getTours } from "@/lib/operations";
import { Location } from "@/types/custom";
import { getToursIds } from "@/lib/helpers";
import { filterTours } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "@search-params/react";
import { config } from "@/schema";
import { useEffect, useState } from "react";

const RenderTours = ({
  destinations,
}: {
  destinations?: Location[] | Location;
}) => {
  const office = useDomainStore((x) => x.office);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const { country, days, maxprice } = useSearchParams({
    route: config.home,
  });

  const { data: tours, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getTours(),
    refetchInterval: false,
    enabled: isReady,
    select: (data) => {
      if (destinations) {
        var ids = getToursIds(destinations);
        return filterTours(
          {
            currency: office?.currency || "OMR",
            country,
            days,
            maxprice: maxprice,
          },
          data?.filter((x) => ids.includes(x.id)) ?? []
        );
      }
      throw new Error("Destination is required!");
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-4 ">
        <TourCardLoading numberOfCards={6} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {tours?.map((tour) => (
        <TourCard key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default RenderTours;
