"use client";
import Image from "next/image";
import Filter from "@/app/[domain]/tour-listing/(filters)/Filter";

const Hero = () => {
  const Text1 = "سافر بثقة مع اكثر من 100 رحلة أسبوعياً";

  return (
    <section className=" bg-[var(--bg-1)] border-t lg:border-t-0 relative">
      <Image
        priority
        className="absolute block w-[100%] top-0 right-0 max-w-max h-full object-cover lg:max-w-full  lg:object-fill"
        src={
          "https://mundo-tours.s3.eu-central-1.amazonaws.com/office/deem/slider-05.jpg"
        }
        width={6000}
        quality={100}
        fetchPriority="high"
        loading="eager"
        height={642}
        alt="image"
      />
      <div
        className="absolute top-0 left-0 flex flex-col justify-between h-full w-full
       before:w-full before:absolute before:h-full before:bottom-0 
       before:left-0 before:bg-gradient-to-t 
        before:from-slate-800 before:to-transparent group:after:w-full group:after:absolute 
        group:after:h-full group:after:bottom-0 group:after:left-0 
        group:after:bg-gradient-to-t 
        group:after:from-[var(--primary)] group:after:to-transparent
         group:after:opacity-60"
      ></div>

      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16 h-full px-3">
        <div className="container">
          <div className="text-center relative z-30">
            <h1 className="text-[35px] lg:text-[44px] leading-[40px] text-white font-semibold mb-8">
              {Text1}
            </h1>

            <Filter onChange={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
