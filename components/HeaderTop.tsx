import { useDomainStore } from "@/hooks/useDomain";
import { IOffice } from "@/interface/Office";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";

const HeaderTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const office = useDomainStore((state) => state.office);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <header
      className={`z-30 border-y sticky block top-0  bg-[var(--bg-1)] ${
        scrolled &&
        "z-50 shadow-md bg-white bg-opacity-70 backdrop-blur border-0"
      } duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 lg:py-5 gap-1">
        <Link href="/" className="flex items-center">
          <Image
            src={office!.logo}
            className="self-center hidden xl:block"
            width={75}
            height={75}
            alt="logo"
            priority
          />
          <Image
            src={office!.logo}
            className="self-center xl:hidden w-[40px] h-[40px] ml-3"
            width={56}
            height={40}
            alt="logo"
            priority
          />
        </Link>
        <div className="flex font-naskh">
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-phone-volume bg-primary text-white text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs ">رقم التواصل</span>
              <Link
                href={`tel:${office!.contactNumber}`}
                className="text-base"
                dir="ltr"
              >
                {office!.contactNumber}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-envelope-open  bg-primary text-white text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">البريد الإلكتروني</span>
              <Link href={`mailto:${office!.email}`} className="text-base">
                {office!.email}
              </Link>
            </div>
          </div>
          {/* <span className='inline-block h-full w-[1px] bg-[var(--border)]'></span> */}
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-map-marker-alt  bg-primary text-white text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">موقعنا</span>
              <span className="text-base">{office!.address}</span>
            </div>
          </div>
        </div>
        <Link href="/add-property">
          <Button size={"lg"}>تواصل معنا</Button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderTop;
