import Filter from "@/components/filter";
import Breadcrumb from "@/components/layout/breadcrumb";
import RenderTours from "@/components/render-tours";
import { getDestination, getDestinations } from "@/server/public-query.server";

const DestinationPage = async ({
  params,
}: {
  params: Promise<{ destination: string }>;
}) => {
  const { destination } = await params;
  const data = await getDestination(decodeURIComponent(destination));

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

  const destinations = await getDestinations();
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
