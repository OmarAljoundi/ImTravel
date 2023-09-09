"use client";

import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { ITour } from "@/interface/Tour";
import { GetFirstElement, GetLastElement } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import Form from "./form";

const TourInfo: FC<{ tour: ITour }> = ({ tour }) => {
  return (
    <div className="col-span-12">
      <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
        <div className="flex flex-col md:flex-row justify-between mb-2 py-4 gap-4">
          <h1 className="font-naskh text-3xl pr-2">{tour.name}</h1>
          <Form tour={tour} />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 relative gap-4">
          <div className="  bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10 relative">
            <BlurImage
              alt={tour.name || ""}
              src={tour.imageUrl || ""}
              width={640}
              height={427}
              className="rounded-2xl block mb-3 p-3"
            />
          </div>
          <div className="px-3 sm:px-4 lg:px-6 py-6 lg:py-16  bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
              <ul className="flex gap-3 items-center">
                <li>
                  <Link
                    href="#"
                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
                  >
                    <i className="lab text-xl la-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
                  >
                    <i className="lab text-xl la-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
                  >
                    <i className="lab text-xl la-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
                  >
                    <i className="lab text-xl la-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
              <h2 className="h2 m-0 font-naskh"></h2>
            </div>
            <ul className="columns-1 md:columns-2  border-t border-dashed gap-md-0 divide-y divide-dashed font-naskh">
              <li className="py-2">
                <div className="grid items-center ">
                  <span>رمز الرحلة</span>
                  <span>
                    <span className="text-primary">{tour.code}</span>
                  </span>
                </div>
              </li>

              <li className="py-2">
                <div className="grid items-center ">
                  <span>نقطة البداية</span>
                  <span className="text-primary font-naskh">
                    {GetFirstElement(tour.tourSections)?.title}{" "}
                  </span>
                </div>
              </li>
              <li className="py-2">
                <div className="grid items-center ">
                  <span>المدة</span>
                  <span>
                    <span className="text-primary">
                      {tour.numberOfDays} أيام
                    </span>
                  </span>
                </div>
              </li>
              <li className="py-2">
                <div className="grid items-center ">
                  <span>نقطة النهاية</span>
                  <span className="text-primary font-naskh">
                    {GetLastElement(tour.tourSections)?.title}{" "}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {tour.additionalInfo && (
          <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
            <h4 className="mb-5 text-2xl font-semibold"> Overview </h4>
            <p className="mb-5 clr-neutral-500">{tour.additionalInfo}</p>
          </div>
        )}

        <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
          <h4 className="mb-6 text-2xl font-semibold font-kufi">
            {" "}
            قصة الرحلة{" "}
          </h4>
          <ul className="flex flex-col gap-6">
            {tour?.tourSections?.map(({ description, title, id }, index) => (
              <li
                key={id}
                className="relative md:before:absolute before:top-[120px] before:bottom-[-14px] before:right-[52px] before:w-[1px] md:before:border-l before:border-dashed before:border-[var(--primary)]"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="grid place-content-center ml-3 md:ml-0 relative w-28 h-28 rounded-full bg-primary after:scale-[1.18] text-white shrink-0 after:w-full after:h-full after:absolute after:border-dashed after:border after:border-[var(--primary)] after:rounded-full">
                    <div className="text-center">
                      <p className="text-lg mb-0"> اليوم </p>
                      <h2 className="mb-0 text-white"> 0{index + 1} </h2>
                    </div>
                  </div>
                  <div className="flex-grow rounded-2xl bg-white shadow-lg p-3 sm:p-4 lg:p-6">
                    <h5 className="font-semibold text-xl"> {title}</h5>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex flex-col lg:flex-row md:items-center gap-5">
                      <div className="flex-grow">
                        <p className="mb-0 clr-neutral-500 text-sm">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
          <h4 className="mb-0 text-2xl font-semibold font-naskh">
            مميزات البرنامج
          </h4>
          <div className="border border-dashed my-5"></div>
          <h6 className="mb-4 font-semibold font-naskh"> ما يشمله البرنامج </h6>
          <ul className="flex flex-col gap-4 mb-10">
            {tour?.tourIncludes?.map((i) => (
              <li key={i.id}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                    <i className="las la-check text-lg text-primary"></i>
                  </div>
                  <span className="inline-block font-naskh">{i.details}</span>
                </div>
              </li>
            ))}
          </ul>
          <h6 className="mb-4 font-semibold font-naskh">
            {" "}
            ما لايشمله البرنامج{" "}
          </h6>
          <ul className="flex flex-col gap-4 mb-10">
            {tour?.tourExcludes?.map(({ id, details, title }) => (
              <li key={id}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                    <i className="las la-times text-xl text-[#9C742B]"></i>
                  </div>
                  <span className="inline-block font-naskh">{details}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
