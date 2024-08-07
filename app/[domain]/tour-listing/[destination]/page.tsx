import Filter from "@/components/custom/Shared/filter";
import RenderTours from "@/components/custom/Shared/render-tours";
import Breadcrumb from "@/components/custom/ThemeOne/breadcrumb";
import { getDestination, getSitesData } from "@/lib/operations";

export async function generateStaticParams() {
  const params: { destination: string; domain: string }[] = [];
  const responses = await Promise.all([getDestination(), getSitesData()]);

  responses[0]
    ?.filter((x) => x.is_office && x.is_active)
    .map((dest) => {
      responses[1]?.map((office) => {
        params.push({
          domain: office.slug,
          destination: dest.slug,
        });
      });
    });

  return params;
}

const DestinationPage = async ({
  params,
}: {
  params: { destination: string };
}) => {
  const data = await getDestination();
  const current_dest = data?.find(
    (x) =>
      x.is_active &&
      x.is_office &&
      x.slug == decodeURIComponent(params.destination)
  );

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
      label: decodeURIComponent(current_dest!.name),
    },
  ];

  const destinations = await getDestination();
  return (
    <section>
      <Breadcrumb items={breads} />
      <section>
        <Filter
          onChange={true}
          destinatons={destinations?.filter((x) => x.is_office) ?? []}
        />
      </section>
      <RenderTours destinations={current_dest} />
    </section>
  );
};

export default DestinationPage;
