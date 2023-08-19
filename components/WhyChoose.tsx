"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SubHeadingBtn from "./SubHeadingBtn";

const choseUsData = [
  {
    image: "http://localhost:3000/img/duotone-home.png",
    header: "المرشد المثالي",
    sub: "نضمن دائماً لجميع عملاءً افضل المرشدين المهارين لجميع الرحلات",
  },
  {
    image: "http://localhost:3000/img/duotone-discount.png",
    header: "عروض على مدار السنة",
    sub: "ابقى على تواصل معنا لتصلك كل العروض الجديدة والحصرية لعملائينا",
  },
  {
    image: "http://localhost:3000/img/duotone-support.png",
    header: "خدمة عملاء 7/24",
    sub: "أين ماكنت على بقعة الأرض ستتمكن من الوصول الينا",
  },
];
const WhyChoose = () => {
  const Text1 = "ماذا يميزنا في شركة دييم؟";
  const Text2 =
    "ان كنت تبحث عن أمهر الشركات الكبيرة والأقوى في مجالها فقد وصلت للمكان الصحيح";
  return (
    <section className="py-[60px] lg:py-[120px] relative">
      <div className="px-3">
        <div className="container ">
          <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
            <SubHeadingBtn text={Text1} classes="bg-[var(--primary-light)]" />
            <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">{Text2}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={8}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              className="swiper choice-slider"
            >
              {choseUsData.map((i, index) => (
                <SwiperSlide className="px-3 my-5" key={index}>
                  <div className="border rounded-2xl hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] hover:border-none p-6 xl:p-8 text-center duration-300">
                    <Image
                      width={60}
                      height={60}
                      src={i.image}
                      alt="image"
                      className=" mx-auto mb-6"
                    />
                    <h4 className="mb-4 text-2xl font-semibold">{i.header}</h4>
                    <p className="mb-0">{i.sub}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-4 mt-10">
              <div className="btn-next w-11 h-11 rounded-full border border-[var(--primary)] duration-300 text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer">
                <i className="las la-angle-right"></i>
              </div>
              <div className="btn-prev w-11 h-11 rounded-full border border-[var(--primary)] duration-300 text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer">
                <i className="las la-angle-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
