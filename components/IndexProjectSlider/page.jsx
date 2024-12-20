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
            <div className="white-item w-[90%]  sm:w-[350px] xl:w-[430px]  p-[30px] bg-white rounded-[30px] mx-4 mt-4">
              <div className="txt flex flex-col justify-center items-center">
                <p className="text-black font-bold text-[26px]">一頁式網站</p>
                <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                  Landing page{" "}
                </b>
                <div>
                  <p className="font-black mb-5 text-[40px]">NT10,000</p>
                </div>
                <ul>
                  <li className="text-[16px] font-bold mt-2">一頁式網頁設計</li>
                  <li className="text-[16px] font-bold mt-2">
                    商業授權圖庫 x 10 (另有商業攝影服務可提供)
                  </li>
                  <li className="text-[16px] font-bold mt-2">客製化設計</li>
                  <li className="text-[16px] font-bold mt-2">基本seo優化</li>
                </ul>
              </div>
              <div className="img-item py-[20px] w-[80%] mx-auto">
                <Image
                  src="/images/landing-page-price.png"
                  width={300}
                  alt="img-item"
                  height={300}
                  className="rounded-[15px]"
                  loading="lazy"
                  placeholder="empty"
                ></Image>
              </div>
              <b className="text-center">活動頁面｜新產品頁面｜主打商品頁面</b>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <div className="white-item  w-[90%]  sm:w-[350px] xl:w-[430px]  p-[30px] bg-white rounded-[30px] mx-4 mt-4">
              <div className="txt flex flex-col justify-center items-center">
                <p className="text-black font-bold text-[26px]">精選方案</p>
                <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                  Basic
                </b>
                <div>
                  <p className="font-black mb-5 text-[40px]">NT30,000</p>
                </div>
                <ul>
                  <li className="text-[16px] font-bold mt-2">串接GA4、GTM</li>
                  <li className="text-[16px] font-bold mt-2">
                    商業授權圖庫 x 10 (另有商業攝影服務可提供)
                  </li>
                  <li className="text-[16px] font-bold mt-2">客製化設計</li>
                  <li className="text-[16px] font-bold mt-2">seo優化</li>
                </ul>
              </div>
              <div className="img-item py-[20px] w-[80%] mx-auto">
                <Image
                  src="/images/landing-page-price.png"
                  width={300}
                  alt="img-item"
                  height={300}
                  className="rounded-[15px]"
                  loading="lazy"
                  placeholder="empty"
                ></Image>
              </div>
              <b className="text-center">形象網站｜客製化網站</b>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <div className="white-item  w-[90%]  sm:w-[350px] xl:w-[430px]  p-[30px] bg-white rounded-[30px] mx-4 mt-4">
              <div className="txt flex flex-col justify-center items-center">
                <p className="text-black font-bold text-[26px]">購物網站</p>
                <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                  E-Coomerce
                </b>
                <div>
                  <p className="font-black mb-5 text-[40px]">NT50,000</p>
                </div>
                <ul>
                  <li className="text-[16px] font-bold mt-2">
                    客製化網站規劃與設計
                  </li>
                  <li className="text-[16px] font-bold mt-2">
                    簡單易用使用者後台
                  </li>
                  <li className="text-[16px] font-bold mt-2">
                    包含基本商品去背上架
                  </li>
                  <li className="text-[16px] font-bold mt-2">簡單上下架產品</li>
                  <li className="text-[16px] font-bold mt-2">
                    商品圖｜Banner 製作
                  </li>
                </ul>
              </div>
              <div className="img-item py-[20px] w-[80%] mx-auto">
                <Image
                  src="/images/landing-page-price.png"
                  width={300}
                  alt="img-item"
                  height={300}
                  className="rounded-[15px]"
                  loading="lazy"
                  placeholder="empty"
                ></Image>
              </div>
              <b className="text-center">wordpress購物網站｜客製化購物網站</b>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="m-4">
            <div className="white-item  w-[90%]  sm:w-[350px] xl:w-[430px]  p-[30px] bg-white rounded-[30px] mx-4 mt-4">
              <div className="txt flex flex-col justify-center items-center">
                <p className="text-black font-bold text-[26px]">客製化方案</p>
                <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                  Customized
                </b>
                <div>
                  <p className="font-black mb-5 text-[40px]">跟我談談</p>
                </div>
                <ul>
                  <li className="text-[16px] font-bold mt-2">
                    網頁客製化設計版面｜圖文
                  </li>
                  <li className="text-[16px] font-bold mt-2">seo優化</li>
                  <li className="text-[16px] font-bold mt-2">
                    商品攝影｜形象影片
                  </li>

                  <li className="text-[16px] font-bold mt-2">
                    提供後續完整維護及流量追蹤
                  </li>
                </ul>
              </div>
              <div className="img-item py-[20px] w-[80%] mx-auto">
                <Image
                  src="/images/landing-page-price.png"
                  width={300}
                  alt="img-item"
                  height={300}
                  className="rounded-[15px]"
                  loading="lazy"
                  placeholder="empty"
                ></Image>
              </div>
              <b className="text-center">特殊網頁設計版面｜無頭網頁</b>
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
