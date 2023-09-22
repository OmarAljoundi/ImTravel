import { notFound } from "next/navigation";
import TourInfo from "./tour-info";
import { getTourBySlug } from "@/lib/fetchers";
import Breadcrumb from "@/components/Breadcrumb";
type Params = {
  params: {
    slug: string;
    domain: string;
  };
};

const Page = async ({ params: { slug, domain } }: Params) => {
  const response = await getTourBySlug(decodeURIComponent(slug));
  if (response.success == false) notFound();

  return (
    <main>
      <div className="bg-[var(--bg-2)]">
        <div className="container py-[30px] lg:py-[60px] px-3">
          <Breadcrumb
            items={[
              {
                label: "الرئيسية",
                url: "/",
              },
              {
                label: "الوجهات السياحية",
                url: "/tour-listing",
              },
              {
                label: response.tour.name!,
                url: "/tour-listing",
              },
            ]}
          />
          <div className="grid grid-cols-12 gap-4 ">
            <TourInfo tour={response.tour} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
