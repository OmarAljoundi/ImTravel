import Filter from "@/components/filter";
import Breadcrumb from "@/components/layout/breadcrumb";
import RenderTours from "@/components/render-tours";
import {
  getDestination,
  getDestinations,
  getSiteData,
} from "@/server/public-query.server";

const DestinationPage = async ({
  params,
}: {
  params: Promise<{ destination: string; domain: string }>;
}) => {
  const { destination, domain } = await params;
  const siteData = await getSiteData(domain);
  const [destinations, data] = await Promise.all([
    getDestinations(),
    getDestination(
      decodeURIComponent(destination),
      siteData?.result?.details?.currency ?? "SAR"
    ),
  ]);

  const breads = [
    {
      label: "الرئيسية",
      url: "/",
    },
    {
      label: "الوجهات السياحية",
      url: "/tour-listing",
    },
    {
      label: decodeURIComponent(data?.result?.destinationName as string),
    },
  ];

  return (
    <section>
      <Breadcrumb items={breads} />
      <section>
        <Filter onChange={true} destinatons={destinations?.result ?? []} />
      </section>
      <RenderTours tours={data?.result?.tours ?? []} />
    </section>
  );
};

export default DestinationPage;
