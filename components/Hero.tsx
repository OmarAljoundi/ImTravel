"use client";
import Image from "next/image";
import Filter from "@/app/[domain]/tour-listing/(filters)/Filter";

const Hero = () => {
  const Text1 = "الطريقة الأسهل للعثور على الرحلة المثالية";
  const Text2 =
    "استكشف قوائم العقارات الواسعة حسب الفئة باستخدام بحثنا السهل الاستخدام. اعثر على تطابقك المثالي!";

  return (
    <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
      <Image
        priority
        className="absolute hidden xl:block w-[25%] top-0 right-0"
        src="https://placehold.co/508x642/png"
        width={508}
        height={642}
        alt="image"
      />
      <Image
        priority
        className="absolute hidden lg:block w-[25%] left-0 bottom-0 z-20"
        src="https://placehold.co/508x642/png"
        width={508}
        height={642}
        alt="image"
      />
      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16 h-full px-3">
        <div className="container">
          <div className="text-center relative z-30">
            <h1 className="text-[35px] lg:text-[44px] leading-[68px] text-[var(--neutral-700)] font-semibold">
              {Text1}
            </h1>
            <p className="text-xl mx-auto max-w-[600px] text-gray-500 mt-4 md:mt-7 mb-6">
              {Text2}
            </p>
            <Filter onChange={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
