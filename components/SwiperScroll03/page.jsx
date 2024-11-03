import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://www.ultraehp.com/images/test-portfolio/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1500)}s`;
  };

  return (
    <div className="relative h-[70vh] md:h-full overflow-hidden">
      <div className="h-full w-full absolute top-0 left-0 z-[99999999] flex flex-col justify-between items-center">
        <div className="txt-top flex flex-row py-[20%] md:py-[10%] pl-[5%] w-full ">
          <div className="w-1/2 text-[18px] text-white pl-[5%] flex justify-start">
            JEEK-Design
          </div>
          <div className="w-1/2 pr-[5%] flex flex-col justify-center items-end">
            <div className="text-white">
              網頁設計｜SEO行銷｜網頁優化｜產品攝影｜
            </div>
            <div className="social">
              <p className="text-white text-[12px] mt-2">
                Line:{" "}
                <a href="#" className="text-white">
                  dishfoisdofijsod
                </a>
              </p>
              <p className="text-white text-[12px] mt-2">
                Instagram:{" "}
                <a href="#" className="text-white">
                  dishfoisdofijsod
                </a>
              </p>
              <p className="text-white text-[12px] mt-2">
                Facebook:{" "}
                <a href="#" className="text-white">
                  dishfoisdofijsod
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="txt-bottom py-[10%] 2xl:py-[10%] pl-[10%] w-full ">
          <h1 className="text-white text-[32px] sm:text-[45px] lg:text-[80px]">
            WEB DESIGN
          </h1>
          <p className="text-[18px] mt-8 text-white">致力於優化您的網頁</p>
        </div>
      </div>
      <div className="black-cover absolute z-[9999] left-0 top-0 h-full lg:h-[2080px] w-full bg-[#000] opacity-40"></div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        speed={1800}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full relative"
      >
        <SwiperSlide className="flex justify-center items-center text-lg">
          <Image
            width={2500}
            src="/images/Hero-slider01.png"
            height={1080}
            className="w-full h-full object-contain"
            placeholder="empty"
            loading="eager"
            alt="hero-img-01"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg">
          <Image
            width={2500}
            src="/images/Hero-slider02.png"
            height={1080}
            className="w-full h-full object-contain"
            placeholder="empty"
            loading="eager"
            alt="hero-img-02"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg">
          <Image
            width={2500}
            src="/images/Hero-slider04.png"
            height={1080}
            className="w-full h-full object-contain"
            placeholder="empty"
            loading="eager"
            alt="hero-img-03"
          />
        </SwiperSlide>
        <div className="absolute bottom-4 right-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-gray-900 autoplay-progress">
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute inset-0 w-full h-full stroke-current stroke-4 text-gray-900"
            style={{
              strokeDashoffset: `calc(125.6px * (1 - var(--progress)))`,
              strokeDasharray: "125.6",
              transform: "rotate(-90deg)",
            }}
          >
            <circle cx="24" cy="24" r="20" fill="none"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      {/* Custom navigation buttons */}
    </div>
  );
}
