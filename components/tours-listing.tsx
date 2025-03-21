"use client";
import categoryEl from "@/public/img/category-section-el.png";
import Image from "next/image";
import SubHeadingBtn from "./header-text";
import { TourCard } from "./tour-card";
import { useDomainStore } from "@/hooks/use-domain";

const TourListing = () => {
  const office = useDomainStore((x) => x.office);

  if (office?.bestTours && office?.bestTours.length > 0) {
    return (
      <section className="bg-[var(--bg-2)] py-[20px] lg:py-[120px] relative">
        <Image
          className="absolute hidden lg:block top-12 right-12"
          src={categoryEl}
          alt="img"
        />
        <div className="container">
          <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3">
            <SubHeadingBtn
              text="الرحلات الأكثر مبيعا"
              classes="bg-[var(--primary-light)] "
            />
            <h2 className="h2 mt-3 pb-8 lg:pb-14"></h2>
          </div>
          <div className="">
            <div className="mt-2">
              <div className="grid grid-cols-12 gap-6">
                {office?.bestTours?.map((tour) => (
                  <TourCard key={tour.id} {...tour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <></>;
};

export default TourListing;
