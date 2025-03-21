"use client";
import { useDomainStore } from "@/hooks/use-domain";
import { filterTours } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "@search-params/react";
import { config } from "@/schema/search-params-schema";
import { QueryTourSchema } from "@/schema";
import TourCardLoading from "./tour-card-loading";
import { TourCard } from "./tour-card";

const RenderTours = ({ tours }: { tours?: QueryTourSchema[] }) => {
  const office = useDomainStore((x) => x.office);

  const { country, days, maxprice } = useSearchParams({
    route: config.home,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["data", country, country, maxprice, tours?.length ?? 0],
    queryFn: () => tours,
    refetchInterval: false,
    select: (response) => {
      const result = filterTours(
        {
          currency: office?.details?.currency || "OMR",
          country,
          days,
          maxprice,
        },
        response ?? []
      );

      return result;
    },
  });

  console.log("data", data);

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-4 ">
        <TourCardLoading numberOfCards={6} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {data?.map((tour) => (
        <TourCard key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default RenderTours;
