"use client";
import categoryEl from "@/public/img/category-section-el.png";
import Image from "next/image";
import SubHeadingBtn from "./SubHeadingBtn";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { getTours } from "@/lib/fetchers";
import { useQuery } from "react-query";
import TourCardLoading from "./TourCardLoading";
import FeaturedCardHome1 from "./FeaturedCardHome1";
import { useDomainStore } from "@/hooks/useDomain";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Property = () => {
  const countriesInQuickSearch = ["النمسا", "المانيا", "ايطاليا", "فرنسا"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const office = useDomainStore((x) => x.office);

  const fetchTours = async () => {
    const response = await getTours(
      office!.tourIds,
      countriesInQuickSearch[selectedIndex],
      null,
      undefined,
      6
    );
    return response.tours;
  };
  const {
    isIdle,
    data: tours,
    isLoading,
  } = useQuery(["tours", selectedIndex], fetchTours, {
    refetchOnWindowFocus: false,
  });

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
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className="flex justify-center lg:justify-between flex-wrap items-center mb-6 gap-4 px-3">
              <Tab.List className="flex gap-3 flex-wrap">
                {countriesInQuickSearch.map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "rounded-full py-3 px-5 lg:px-7 lg:py-4 leading-5 duration-300 font-semibold text-white text-xs lg:text-lg",
                        selected
                          ? "bg-primary shadow text-white outline-none"
                          : "text-neutral-600 hover:bg-primary bg-[var(--primary-light)] hover:text-white"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="mt-2">
              {countriesInQuickSearch.map((i) => (
                <Tab.Panel className="grid grid-cols-12 gap-6" key={i}>
                  {isLoading ? (
                    <TourCardLoading numberOfCards={6} />
                  ) : (
                    tours?.map((tour, idx) => (
                      <FeaturedCardHome1 key={tour.id} {...tour} />
                    ))
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Property;
