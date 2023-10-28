import Breadcrumb from "@/components/custom/ThemeOne/breadcrumb";
import RenderTours from "../../../components/custom/Shared/render-tours";
import Filter from "@/components/custom/Shared/filter";
import { getDestination } from "@/lib/operations";

export default async function TourListing() {
  const data = await getDestination();
  const current_dest = data.filter((x) => x.is_active && x.is_office);
  const breads = [
    {
      label: "الرئيسية",
      url: "/",
    },
    {
      label: "الوجهات السياحية",
    },
  ];

  const destinations = await getDestination();
  return (
    <section>
      <Breadcrumb items={breads} />
      <section>
        <Filter
          onChange={true}
          destinatons={destinations.filter((x) => x.is_office)}
        />
      </section>
      <RenderTours destinations={current_dest} />
    </section>
  );
}
