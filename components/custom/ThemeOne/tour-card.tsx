"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Tour } from "@/types/custom";
import { useDomainStore } from "@/hooks/useDomain";

const TourCard = ({
  id,
  price_double,
  name,
  slug,
  number_of_days,
  tour_countries,
  images,
  price_double_sa,
}: Tour) => {
  const office = useDomainStore((x) => x.office);
  return (
    <article
      key={id}
      className="col-span-12 md:col-span-6 xl:col-span-4 px-3 xl:px-0"
    >
      <div className="bg-white shadow-xl rounded-2xl p-2">
        <div className="rounded-2xl relative group">
          <Link href={`/tour/${slug}`} className="block property-card__img">
            <Image
              width={400}
              height={238}
              src={images && images.length > 0 ? images[0] : ""}
              alt="image"
              className="rounded-2xl w-full h-[238px]"
            />
          </Link>

          <Button
            className="absolute z-10 
            inline-block text-primary top-4 right-4 rounded-full w-11 
            font-bold h-auto bg-primary text-white shadow-xl p-2.5"
          >
            {number_of_days} {number_of_days! > 10 ? "يوم" : "أيام"}
          </Button>
        </div>
        <div className="p-2 sm:p-4 lg:p-5">
          <div className="flex items-center gap-1 mb-4 mt-5 sm:mt-3">
            <div className="flex gap-1">
              {tour_countries?.slice(0, 4)?.map((i) => (
                <span
                  className="inline-block bg-[var(--primary)] text-white px-2 py-1 text-[14px] rounded-md"
                  key={i}
                >
                  {i}
                </span>
              ))}
              {tour_countries?.length > 4 && (
                <span className="inline-block bg-[var(--primary)] text-white px-2 py-1 text-[14px] rounded-md">
                  {tour_countries?.length - 4} +
                </span>
              )}
            </div>
          </div>
          <Link
            href={`/tour/${slug}`}
            className="text-base sm:text-xl font-medium text-neutral-700 mb-4"
          >
            {name}
          </Link>
        </div>
        <div className="property-card__body py-0 mx-5">
          <div className=" border-t border-dashed"></div>
        </div>
        <div className="px-2 sm:px-5 pb-5 pt-3">
          <div className="flex flex-wrap justify-between items-center ">
            <span className="text-primary text-xl font-medium">
              {office?.currency == "OMR" ? price_double : price_double_sa}
              <span className="text-base  font-medium text-primary text-neutral-700">
                {" "}
                / للشخص في الغرفة الثانية{" "}
              </span>
            </span>

            <Link href={`/tour/${slug}`}>
              <Button>عرض التفاصيل</Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
