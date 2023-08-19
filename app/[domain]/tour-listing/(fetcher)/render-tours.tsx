"use client";

import TourCardLoading from "@/components/TourCardLoading";
import FeaturedCardHome1 from "@/components/FeaturedCardHome1";
import { getTours } from "@/lib/fetchers";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

const RenderTours = () => {
  const searchParams = useSearchParams();

  const fetchTours = async () => {
    const result = await getTours(
      searchParams.get("country"),
      searchParams.get("destination"),
      searchParams.get("days")
    );
    return result.tours;
  };
  const { data: tours, isLoading } = useQuery(
    [
      "locations",
      searchParams.get("country"),
      searchParams.get("destination"),
      searchParams.get("days"),
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
