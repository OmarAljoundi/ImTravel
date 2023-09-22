"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Filter from "./(filters)/Filter";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { destination } = useParams();
  const [items, setItems] = useState<{ label: string; url?: string }[]>([
    {
      label: "الرئيسية",
      url: "/",
    },
    {
      label: "الوجهات السياحية",
      url: "/tour-listing",
    },
  ]);

  useEffect(() => {
    if (destination) {
      setItems([
        {
          label: "الرئيسية",
          url: "/",
        },
        {
          label: "الوجهات السياحية",
          url: "/tour-listing",
        },
        {
          label: decodeURIComponent(destination as string).replaceAll("-", " "),
        },
      ]);
    }
    return () => setItems([]);
  }, [destination]);
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] ">
      <div className="container">
        <Breadcrumb items={items} />
        <section>
          <Filter onChange={true} />
        </section>
        <section>{children}</section>
      </div>
    </div>
  );
}
