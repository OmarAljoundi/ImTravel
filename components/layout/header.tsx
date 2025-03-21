"use client";
import { useDomainStore } from "@/hooks/use-domain";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone } from "lucide-react";

export function Header() {
  const office = useDomainStore((state) => state.office);

  return (
    <header
      className={`z-30 border-y  block top-0  bg-[var(--bg-1)] duration-300 ${office?.details?.primaryFont}`}
    >
      <div className="container mx-auto flex justify-between px-4 xl:justify-start gap-x-10 items-center py-3 lg:py-5 gap-1">
        <Link href="/" className="flex items-center min-w-[100px]">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            src={office?.details.logo!}
            className="self-center"
            width={100}
            height={100}
            alt="logo"
            priority
          />
        </Link>
        <div className=" hidden xl:flex">
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <div className=" bg-primary text-white text-2xl p-2 rounded-full">
              <Phone />
            </div>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs lg:text-lg ">رقم التواصل</span>
              <Link
                href={`tel:${office!.details.contactNumber}`}
                className="text-base truncate"
                dir="ltr"
              >
                {office!.details.contactNumber}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-envelope-open  bg-primary text-white text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs lg:text-lg">البريد الإلكتروني</span>
              <Link
                href={`mailto:${office!.details?.email}`}
                className="text-base truncate"
              >
                {office!.details?.email}
              </Link>
            </div>
          </div>
          {/* <span className='inline-block h-full w-[1px] bg-[var(--border)]'></span> */}
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-map-marker-alt  bg-primary text-white text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs lg:text-lg">موقعنا</span>
              <span className="text-base truncate">
                {office!.details.address}
              </span>
            </div>
          </div>
        </div>
        <div className="flex xl:hidden">
          <Sheet>
            <SheetTrigger className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 ">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
            <SheetContent side={"top"}>
              <div
                className={cn("grid gap-4 mt-4", office?.details?.primaryFont)}
              >
                <div className="flex items-center gap-5 px-2 xl:px-4">
                  <i className="las la-phone-volume bg-primary text-white text-2xl p-2 rounded-full"></i>
                  <div className="flex-col flex">
                    <span className="text-xs lg:text-lg ">رقم التواصل</span>
                    <span className="text-base truncate" dir="ltr">
                      {office!.details.contactNumber}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5 px-2 xl:px-4">
                  <i className="las la-envelope-open  bg-primary text-white text-2xl p-2 rounded-full"></i>
                  <div className="flex-col flex">
                    <span className="text-xs lg:text-lg">
                      البريد الإلكتروني
                    </span>
                    <span className="text-base truncate">
                      {office!.details.email}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5 px-2 xl:px-4">
                  <i className="las la-map-marker-alt  bg-primary text-white text-2xl p-2 rounded-full"></i>
                  <div className="flex-col flex">
                    <span className="text-xs lg:text-lg">موقعنا</span>
                    <span className="text-base truncate">
                      {office!.details.address}
                    </span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
