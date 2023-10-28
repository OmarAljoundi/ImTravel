"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { useDomainStore } from "@/hooks/useDomain";
import TourCardLoading from "@/components/custom/ThemeOne/tour-card-loading";
import TourCard from "@/components/custom/ThemeOne/tour-card";
import { getTours } from "@/lib/operations";
import { Location } from "@/types/custom";
import { getToursIds } from "@/lib/helpers";
import { filterTours } from "@/lib/utils";

const RenderTours = ({
  destinations,
}: {
  destinations?: Location[] | Location;
}) => {
  const searchParams = useSearchParams();
  const office = useDomainStore((x) => x.office);

  const { data: tours, isLoading } = useQuery(
    [
      searchParams.get("country"),
      searchParams.get("days"),
      Number(searchParams.get("maxprice")),
      destinations,
    ],
    async () => await getTours(office?.slug || ""),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      select: (data) => {
        if (destinations) {
          var ids = getToursIds(destinations);
          return filterTours(
            {
              currency: office?.currency || "OMR",
              country: searchParams.get("country") || undefined,
              days: searchParams.get("days") || undefined,
              maxprice: Number(searchParams.get("maxprice")),
            },
            data.filter((x) => ids.includes(x.id))
          );
        }
        throw new Error("Destination is required!");
      },
      onError(err) {
        console.log(err);
      },
    }
  );

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
