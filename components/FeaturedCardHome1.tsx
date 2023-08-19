"use client";
import Link from "next/link";
import { HeartIconOutline } from "@/public/data/icons";
import Image from "next/image";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import toast, { Toaster } from "react-hot-toast";
import { ITour } from "@/interface/Tour";
import { Button } from "./ui/button";
const notifyAdd = () => toast.success("Added to Wishlist.");
const notifyRemove = () => toast.error("Removed From Wishlist.");
const FeaturedCardHome1 = ({
  id,
  code,
  numberOfDays,
  price,
  imageUrl,
  startDay,
  name,
  tourCountries,
}: ITour) => {
  const [favourite, setFavourite] = useState(false);
  const handleFavorite = () => {
    setFavourite(!favourite);
    favourite ? notifyRemove() : notifyAdd();
  };

  return (
    <article
      key={id}
      className="col-span-12 md:col-span-6 xl:col-span-4 px-3 xl:px-0"
    >
      <div className="bg-white shadow-xl rounded-2xl p-2">
        <div className="rounded-2xl relative group">
          <div className="property-card__img">
            <Image
              width={400}
              height={238}
              src={imageUrl || ""}
              alt="image"
              className="rounded-2xl w-full h-[238px]"
            />
          </div>

          <button
            onClick={handleFavorite}
            className="absolute z-10 inline-block text-primary top-4 right-4 rounded-full bg-white p-2.5"
          >
            {favourite ? (
              <HeartIcon className="w-5 h-5 text-[var(--tertiary)]" />
            ) : (
              <HeartIconOutline />
            )}
          </button>
        </div>
        <div className="p-2 sm:p-4 lg:p-5">
          <div className="flex items-center gap-1 mb-4 mt-5 sm:mt-3">
            <div className="flex gap-1">
              {tourCountries?.map((i) => (
                <span
                  className="inline-block bg-[var(--primary)] text-white px-2 py-1 text-[14px] rounded-md"
                  key={i.id}
                >
                  {i.label}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={`/tour/${name?.replaceAll(" ", "-")}`}
            className="text-base sm:text-xl font-medium text-neutral-700 mb-4"
          >
            {name}
          </Link>
          <ul className="flex flex-wrap divide-x divide-dashed justify-between mt-5">
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-city text-xl"></i>
              <span className="block"> rooms </span>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-bed text-xl"></i>
              <span className="block"> bed Bed </span>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-bath text-xl"></i>
              <span className="block"> bath Bath </span>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-arrows-alt text-xl"></i>
              <span className="block"> area sft </span>
            </li>
          </ul>
        </div>
        <div className="property-card__body py-0 mx-5">
          <div className=" border-t border-dashed"></div>
        </div>
        <div className="px-2 sm:px-5 pb-5 pt-3">
          <div className="flex flex-wrap justify-between items-center font-naskh">
            <span className="text-primary text-xl font-medium">
              {price} ر.ع
              <span className="text-base text-neutral-700">
                {" "}
                / للشخص في الغرفة المزدوجة{" "}
              </span>
            </span>

            <Link href={`tour/${name?.replaceAll(" ", "-")}`}>
              <Button>عرض التفاصيل</Button>
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </article>
  );
};

export default FeaturedCardHome1;
