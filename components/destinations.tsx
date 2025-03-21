import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "./header-text";
import { getDestinations } from "@/server/public-query.server";
import { getTotalToursSeprate } from "@/lib/helpers";

const Destinations = async () => {
  const text1 = "الوجهات السياحيـــــة";
  const destinations = await getDestinations();

  return (
    <div className="py-[60px] lg:py-[120px] bg-white relative">
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3 pb-8">
          <SubHeadingBtn text={text1} classes="bg-[var(--primary-light)] " />
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6 px-3 xl:px-0">
          {destinations?.result?.map((location) => (
            <Link
              href={`/tour-listing/${location.slug}`}
              key={location.id}
              className={"col-span-12 md:col-span-6 lg:col-span-4"}
            >
              <div className="relative rounded-2xl group">
                <div className="listing-card__img aspect-[4/3]">
                  {location.image?.url && (
                    <Image
                      src={location.image?.url}
                      fill
                      alt="image"
                      className=" w-full rounded-2xl"
                    />
                  )}
                </div>
                <div
                  className="absolute top-0 left-0 flex flex-col justify-between h-full
                   w-full before:w-full before:absolute before:h-full before:bottom-0 
                   before:left-0 before:bg-gradient-to-t before:rounded-b-2xl
                  before:from-slate-800 before:to-transparent group-hover:after:w-full
                   group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 
                   group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl 
                   group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60"
                >
                  <div>
                    <div
                      className="inline-block py-2 px-5  absolute top-6 left-6  text-primary  rounded-full w-15 
                          font-bold h-auto bg-primary text-white shadow-xl p-2.5"
                    >
                      {getTotalToursSeprate(location)?.count}{" "}
                      {getTotalToursSeprate(location)?.word}
                    </div>
                  </div>
                  <div className="self-end px-5 pb-5 flex flex-wrap w-full gap-4 items-center justify-between z-10">
                    <div>
                      <div className="flex gap-2 items-center ">
                        <i className="las la-map-marker-alt text-3xl text-[#9C742B]"></i>
                        <h4 className="md:text-lg lg:text-sm xl:text-lg truncate text-white font-semibold text-base sm:text-2xl">
                          {location.name}
                        </h4>
                      </div>
                    </div>
                    <div className="inline-flex w-11 h-11 rounded-full border items-center justify-center group-hover:bg-[var(--secondary)] text-[var(--secondary)] group-hover:text-neutral-900 duration-300 border-[var(--secondary)]">
                      <i className="las la-angle-right text-3xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
