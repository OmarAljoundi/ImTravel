import Filter from "@/components/filter";
import Breadcrumb from "@/components/layout/breadcrumb";
import RenderTours from "@/components/render-tours";
import {
  getDestinations,
  getSiteData,
  getTours,
} from "@/server/public-query.server";

export default async function TourListing({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  const siteData = await getSiteData(domain);
  const [destinations, tours] = await Promise.all([
    getDestinations(),
    getTours(siteData?.result?.details?.currency ?? "SAR"),
  ]);

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
