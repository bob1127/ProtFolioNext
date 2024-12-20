import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const imageLoader01 = ({ src, width, quality }) => {
  return `https://www.shutterstock.com/image-vector/${src}?w=${width}&q=${
    quality || 75
  }`;
};

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
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        speed={1000}
        breakpoints={{
          1900: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
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
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="relative"
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <a href="#">
            <div
              style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
              className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
            >
              <Image
                width={500}
                height={500}
                loading="lazy"
                className="w-full sm:h-auto sm:w-[500px] rounded-lg"
                placeholder="empty"
                alt="swiper-img"
                src="/images/portfolio023.png"
              />
            </div>
            <div className="txt">
              <h3 className="text-white font-custom text-[16px] 2xl:text">
                網頁設計
              </h3>
              <p className="text-white 2xl:text-[18px] text-[14px]">
                網頁Banner｜網頁商品圖片｜圖片後製
              </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <div
              style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
              className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
            >
              <Image
                width={400}
                height={300}
                loading="lazy"
                className="w-full rounded-lg"
                placeholder="empty"
                alt="swiper-img"
                src="/images/ultrae-company-logo.png"
              />
            </div>
            <div className="txt">
              <h3 className="text-white font-custom text-[16px] 2xl:text">
                3D 產品建模｜後製
              </h3>
              <p className="text-white 2xl:text-[18px] text-[14px] ">
                3D產品建模，應用網頁圖片
              </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <div
              style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
              className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
            >
              <Image
                width={400}
                height={450}
                loading="lazy"
                className="w-full rounded-lg"
                placeholder="empty"
                alt="swiper-img"
                src="/images/hotjar熱點圖01.jpg"
              />
            </div>
            <div className="txt">
              <h3 className="text-white font-custom text-[16px] 2xl:text">
                網頁行銷｜數據分析
              </h3>
              <p className="text-white 2xl:text-[18px] text-[14px] ">
                Google Search console | GA4 | GTM
              </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <div
              style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
              className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
            >
              <Image
                width={400}
                height={450}
                loading="lazy"
                className="w-full rounded-lg"
                placeholder="empty"
                alt="swiper-img"
                src="/images/scremingFrog-01.jpg"
              />
            </div>
            <div className="txt">
              <h3 className="text-white font-custom text-[16px] 2xl:text">
                網頁後續維護
              </h3>
              <p className="text-white 2xl:text-[18px] text-[14px]">
                Bug修復｜增加功能｜產品後續上架
              </p>
            </div>
          </a>
        </SwiperSlide>

        {/* Custom Progress Circle */}
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
    </div>
  );
}
