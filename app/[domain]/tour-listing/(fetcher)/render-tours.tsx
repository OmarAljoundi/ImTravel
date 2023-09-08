"use client";

import TourCardLoading from "@/components/TourCardLoading";
import FeaturedCardHome1 from "@/components/FeaturedCardHome1";
import { getTours } from "@/lib/fetchers";
import { useParams, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { useDomainStore } from "@/hooks/useDomain";

const RenderTours = () => {
  const searchParams = useSearchParams();
  const office = useDomainStore((x) => x.office);
  const { destination } = useParams();
  const select = decodeURIComponent(destination?.toString());
  const getDestinationTours = () => {
    if (!destination) return office!.tourIds;
    var x = office!.officeLocations.find(
      (x) => x.name == select.replaceAll("-", " ")
    )?.tourIds;

    return x || "";
  };

  const fetchTours = async () => {
    const result = await getTours(
      getDestinationTours(),
      searchParams.get("country"),
      searchParams.get("days"),
      Number(searchParams.get("maxprice"))
    );
    return result.tours;
  };
  const { data: tours, isLoading } = useQuery(
    [
      "locations",
      searchParams.get("country"),
      searchParams.get("days"),
      Number(searchParams.get("maxprice")),
    ],
    fetchTours,
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
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
        <FeaturedCardHome1 key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default RenderTours;
