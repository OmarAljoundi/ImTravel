import Link from "next/link";
import React from "react";

const Breadcrumb = ({
  items,
}: {
  items: { label: string; url?: string }[];
}) => {
  return (
    <div className="bg-white p-4 flex items-center flex-wrap">
      <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.url ? (
              <>
                <Link
                  href={item.url}
                  className="text-gray-600 hover:text-blue-500 text-[10px] sm:text-base"
                >
                  {item.label}
                </Link>
                <svg
                  className="w-5 rotate-180 h-auto fill-current mx-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
              </>
            ) : (
              <span className="text-gray-600 text-[10px] sm:text-base">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
