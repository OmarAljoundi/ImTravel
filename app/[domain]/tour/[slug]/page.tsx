import { notFound } from "next/navigation";
import TourInfo from "./tour-info";
import Breadcrumb from "@/components/layout/breadcrumb";
import { getTourDetails } from "@/server/public-query.server";

type Params = {
  params: Promise<{
    slug: string;
    domain: string;
  }>;
};

const Page = async ({ params }: Params) => {
  const { slug } = await params;
  const response = await getTourDetails(decodeURIComponent(slug));
  if (!response) notFound();

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
                label: response.result.name!,
                url: "",
              },
            ]}
          />
          <div className="grid grid-cols-12 gap-4 ">
            <TourInfo tour={response.result} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
