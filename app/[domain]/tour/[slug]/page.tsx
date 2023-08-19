import { notFound } from "next/navigation";
import Form from "./form";
import TourInfo from "./tour-info";
import { getTourBySlug } from "@/lib/fetchers";
import BlurImage from "@/components/BlurImage";
export const revalidate = 0;
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
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <TourInfo tour={response.tour} />
            <div className="col-span-4 lg:block hidden">
              <BlurImage
                alt={response.tour.name || ""}
                src={response.tour.imageUrl || ""}
                width={800}
                className="rounded-2xl mb-3"
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
