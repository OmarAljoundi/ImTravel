import Breadcrumb from "@/components/custom/ThemeOne/breadcrumb";
import RenderTours from "@/components/custom/Shared/render-tours";
import Filter from "@/components/custom/Shared/filter";
import { getDestination } from "@/lib/operations";

export default async function TourListing() {
  const destinations = await getDestination();
  const current_dest = destinations?.filter((x) => x.is_active && x.is_office);
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
        <Filter
          onChange={true}
          destinatons={destinations?.filter((x) => x.is_office) ?? []}
        />
      </section>
      <RenderTours destinations={current_dest} />
    </section>
  );
}
