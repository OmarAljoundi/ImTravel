"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SubHeadingBtn from "./SubHeadingBtn";
const images = [
  `${process.env.NEXT_PUBLIC_HTTP_ROOT_DOMAIN}/img/memory-slider-img-3.png`,
  `${process.env.NEXT_PUBLIC_HTTP_ROOT_DOMAIN}/img/memory-slider-img-2.png`,
  `${process.env.NEXT_PUBLIC_HTTP_ROOT_DOMAIN}/img/memory-slider-img.jpg`,
];

const TravelMemory = () => {
  const Text1 = "ذكريات السفر";
  const Text2 = "أملأ حياتك بذكريات";
  return (
    <div className="bg-white py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10 relative">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={24}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                modules={[Navigation]}
                className="swiper blog-details-slider"
              >
                {images.map((item) => (
                  <SwiperSlide key={item} className="swiper-slide">
                    <Image
                      width={526}
                      height={794}
                      src={item}
                      alt="image"
                      className=" w-full rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
                <div className="absolute bottom-0 right-0 px-4 sm:px-6 lg:px-10 py-2 sm:py-4 lg:py-6 bg-primary z-10 flex gap-3 text-white rounded-tl-2xl rounded-br-2xl">
                  <div className="btn-next border border-white w-10 h-10 flex items-center justify-center rounded-full text-2xl hover:bg-white hover:text-neutral-800 duration-300 cursor-pointer">
                    <i className="las la-angle-right"></i>
                  </div>
                  <div className="btn-prev border border-white w-10 h-10 flex items-center justify-center rounded-full text-2xl hover:bg-white hover:text-neutral-800 duration-300 cursor-pointer">
                    <i className="las la-angle-left"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SubHeadingBtn text={Text1} classes="bg-[var(--primary-light)]" />
            <h2 className="h2 mt-4 mb-6 leading-tight">{Text2}</h2>
            <p className="mb-14">
              نحن نؤمن أيضًا بتقديم تجارب فريدة وأصيلة لمسافرينا لن تجدها في
              دلائل السفر أو الجولات القياسية.
            </p>
            <ul className="list">
              <li>
                <div className="grid place-content-center w-9 h-9 rounded-md bg-primary mb-6 text-lg font-semibold text-white">
                  01
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  ابحث عن رحلات تتناسب مع نمط حياتك المرن
                </h4>
                <p className="mb-0">
                  لهذا السبب نقدم مجموعة من الجولات التي تم تصميمها لتتناسب مع
                  نمط حياتك المرن.
                </p>
              </li>
              <li>
                <div className="border-dashed border my-8"></div>
              </li>
              <li>
                <div className="grid place-content-center w-9 h-9 rounded-md bg-[var(--secondary)] mb-6 text-lg font-semibold text-white">
                  02
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  سفر موجه من خلال خبراء في المكان
                </h4>
                <p className="mb-0">
                  نحن نؤمن بأن السفر يجب أن يكون مصدرًا للفرح والإلهام، وليس
                  مصدرًا للإجهاد والقلق.
                </p>
              </li>
              <li>
                <div className="border-dashed border my-8"></div>
              </li>
              <li>
                <div className="grid place-content-center w-9 h-9 rounded-md bg-[var(--tertiary)] mb-6 text-lg font-semibold text-white">
                  03
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  اكتشف التكلفة الحقيقية لرحلتك
                </h4>
                <p className="mb-0">
                  نؤمن بأن الشفافية هي المفتاح لبناء الثقة مع مسافرينا.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMemory;
