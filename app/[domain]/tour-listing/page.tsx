import Filter from "@/components/filter";
import Breadcrumb from "@/components/layout/breadcrumb";
import RenderTours from "@/components/render-tours";
import { getDestinations, getTours } from "@/server/public-query.server";

export default async function TourListing() {
  const destinations = await getDestinations();
  const tours = await getTours();
  const breads = [
    {
      label: "الرئيسية",
      url: "/",
    },
    {
      label: "الوجهات السياحية",
    },
  ];

  return (
    <section>
      <Breadcrumb items={breads} />
      <section>
        <Filter onChange={true} destinatons={destinations?.result ?? []} />
      </section>
      <RenderTours tours={tours?.result ?? []} />
    </section>
  );
}
