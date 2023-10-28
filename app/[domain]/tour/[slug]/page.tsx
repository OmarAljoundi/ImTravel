import { notFound } from "next/navigation";
import TourInfo from "./tour-info";
import Breadcrumb from "@/components/custom/ThemeOne/breadcrumb";
import { getDestination, getSitesData, getTours } from "@/lib/operations";
import { Metadata } from "next";
import { getToursIds } from "@/lib/helpers";

type Params = {
  params: {
    slug: string;
    domain: string;
  };
};

export async function generateStaticParams() {
  const params: { slug: string; domain: string }[] = [];
  const responses = await Promise.all([
    getTours(),
    getDestination(),
    getSitesData(),
  ]);
  const tourIds = getToursIds(responses[1]);
  responses[0]
    .filter((x) => tourIds.includes(x.id))
    .map((tour) => {
      responses[2].map((office) => {
        params.push({
          domain: office.slug,
          slug: tour.slug,
        });
      });
    });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const response = await getTours();
  const tour = response?.find((x) => x.slug == decodeURIComponent(slug));
  if (tour) {
    return {
      title: tour?.seo?.title,
      description: tour?.seo?.description,
      openGraph: {
        title: tour?.seo?.title || "",
        description: tour?.seo?.description || "",
        type: "website",
        images: tour.images ?? [],
        siteName: "Mundo Tours",
      },
      keywords: tour.seo?.tags || "",
    };
  }
  return {
    title: "Error - Tour not found ",
  };
}

const Page = async ({ params: { slug, domain } }: Params) => {
  const response = await getTours();
  const tour = response.find((x) => x.slug == decodeURIComponent(slug));
  if (!tour) notFound();

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
                label: tour.name!,
                url: "",
              },
            ]}
          />
          <div className="grid grid-cols-12 gap-4 ">
            <TourInfo tour={tour} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
