"use client";
import { useDomainStore } from "@/hooks/useDomain";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const office = useDomainStore((x) => x.office);
  const socialMedia = JSON.parse(office?.socialMedia);
  return (
    <footer className={cn("[var(--bg-1)]", office?.primaryFont)}>
      <div className="py-[60px] ">
        <div className="container">
          <div className="flex gap-6 text-black px-3 xl:px-0 justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={office?.logo || ""}
                  width={250}
                  height={250}
                  alt="image"
                  className=""
                />
              </Link>

              <ul className="flex gap-3 flex-wrap">
                {socialMedia?.map((i: any) => (
                  <li>
                    <Link
                      href={i.url}
                      className="border duration-300 hover:bg-primary hover:text-white grid place-content-center p-[10px] rounded-full"
                    >
                      <i
                        className={`lab la-${(
                          i.name as string
                        ).toLowerCase()} text-2xl`}
                      ></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6 ">
                {" "}
                لتواصل والإستفسار{" "}
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-phone-volume bg-primary text-white text-xl p-2 rounded-full"></i>
                    <span className="mb-0 clr-neutral-30 font-bold" dir="ltr">
                      {office?.contactNumber}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-envelope-open bg-primary text-white text-xl p-2 rounded-full"></i>
                    <Link
                      href="mailto:example@mail.com"
                      className="mb-0 clr-neutral-30"
                    >
                      {office?.email}
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-map-marker-alt bg-primary text-white  text-xl p-2 rounded-full"></i>
                    <p className="mb-0 clr-neutral-30">{office?.address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <div className="py-8 border-t border-primary text-black">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 lg:col-span-6">
                  <p className="m-0 text-center lg:text-start">
                    Copyright &copy; {new Date().getFullYear()}
                    <span className="text-black"> {office?.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
