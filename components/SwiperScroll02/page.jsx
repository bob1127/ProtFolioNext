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
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        speed={1000}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full relative"
      >
        {/* <SwiperSlide className="flex justify-center items-center text-lg">
          <Image width={700} src="bag.png" height={800} loader={imageLoader} />
        </SwiperSlide> */}
        <SwiperSlide className="flex justify-center items-center text-lg">
          <section className="RWD  border-t-2 border-b-2 border-l-2 border-black">
            <div className="w-full flex-col items-center justify-center lg:flex-row flex">
              <div className="w-full lg:w-1/2 border-r-2 border-black p-[25px] sm:p-[60px] lg:p-[70px] overflow-y-scroll">
                <div className="txt">
                  <h2 className="">"網頁設計-Website Design"</h2>
                  <h3>客製化網頁設計</h3>
                  <h3>響應式設計與行動裝置優先</h3>
                  <h3>快速加載與性能優化</h3>
                  <h3>使用者體驗（UX）、性能、科技發展和跨平台兼容性</h3>
                  <p>
                    隨著Google對移動端優化要求提升，優化您的網站以迎合移動設備，確保在搜尋結果中保持領先地位
                  </p>
                </div>
                <div className="img my-5">
                  <figure>
                    <Image
                      src="realistic-set-monitor-laptop-tablet-260nw-2430661189.jpg"
                      loader={imageLoader01}
                      loading="lazy"
                      alt="realistic-set-monitor"
                      width={500}
                      height={300}
                    />
                  </figure>
                </div>
                <div className=" overflow-x-scroll py-5 w-full  ">
                  <div className="w-[1000px] 2xl:w-full grid grid-cols-4 2xl:grid-cols-2  gap-2">
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        1. 提升用戶體驗
                      </b>
                      <p className="mt-2">
                        RWD提升瀏覽流暢性，減少跳出率，優化SEO排名。
                      </p>
                    </a>
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        2. 確保網站速度
                      </b>
                      <p className="mt-2">
                        響應式設計提高加載速度，改善用戶滿意度和SEO排名。
                      </p>
                    </a>
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        3. 集中管理SEO
                      </b>
                      <p className="mt-2">
                        單一URL結構簡化SEO，集中權重，提升搜尋排名。
                      </p>
                    </a>
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        4. 迎合Google算法
                      </b>
                      <p className="mt-2">
                        Google偏愛行動友好的RWD網站，有助於提高搜尋排名。
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <figure>
                  {" "}
                  <Image
                    src="/images/移動設備對於seo重要性.webp"
                    loading="lazy"
                    alt="移動設備對於seo重要性"
                    placeholder="empty"
                    width={800}
                    height={500}
                  />
                </figure>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg">
          <section className="RWD  border-t-2 border-b-2 border-l-2 border-black">
            <div className="w-full flex-col items-center justify-center lg:flex-row flex">
              <div className="w-full lg:w-1/2 border-r-2 border-black p-[25px] sm:p-[60px] lg:p-[70px] overflow-y-scroll">
                <div className="txt">
                  <h2 className="">"品牌與企業形象規劃"</h2>
                  <h3>CIS企業視覺識別</h3>
                  <h3>名片設計</h3>
                  <h3>企業LOGO設計</h3>
                  <p>
                    品牌規劃是一個系統性的過程，旨在創建、建立和管理一個品牌的形象、定位和價值。涉及品牌的核心價值、目標受眾和與消費者的長期關係。
                  </p>
                </div>
                {/* <div className="img my-5">
                  <figure>
                    <Image
                      src="realistic-set-monitor-laptop-tablet-260nw-2430661189.jpg"
                      loader={imageLoader01}
                      loading="lazy"
                      alt="realistic-set-monitor"
                      width={500}
                      height={300}
                    />
                  </figure>
                </div> */}
              </div>
              <div className="w-full lg:w-1/2 overflow-hidden">
                <figure>
                  {" "}
                  <Image
                    src="/images/製作屬於你的專屬企業網站-極客網頁設計_網頁行銷_網頁建置設計.webp"
                    loading="lazy"
                    alt="製作屬於你的專屬企業網站-極客網頁設計_網頁行銷_網頁建置設計"
                    placeholder="empty"
                    width={800}
                    height={800}
                  />
                </figure>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg">
          <section className="RWD  border-t-2 border-b-2 border-l-2 border-black">
            <div className="w-full flex-col items-center justify-center lg:flex-row flex">
              <div className="w-full lg:w-1/2 border-r-2 border-black p-[25px] sm:p-[60px] lg:p-[70px] overflow-y-scroll">
                <div className="txt">
                  <h2 className="">"SEO行銷-Optimization"</h2>
                  <h3>網站速度優化、網站結構優化、行動裝置優化、用戶體驗</h3>
                  <p>
                    SEO，目的是提高網站在搜尋引擎結果中的自然排名，進而吸引更多潛在客戶。
                  </p>
                </div>
                <div className="img my-5">
                  <figure>
                    <Image
                      src="realistic-set-monitor-laptop-tablet-260nw-2430661189.jpg"
                      loader={imageLoader01}
                      loading="lazy"
                      alt="realistic-set-monitor"
                      width={500}
                      height={300}
                    />
                  </figure>
                </div>
                <div className=" overflow-x-scroll py-5 w-full  ">
                  <div className="w-[1000px] 2xl:w-full grid grid-cols-4 2xl:grid-cols-2  gap-2">
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        1. 提升用戶體驗
                      </b>
                      <p className="mt-2">
                        RWD提升瀏覽流暢性，減少跳出率，優化SEO排名。
                      </p>
                    </a>
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        2. 確保網站速度
                      </b>
                      <p className="mt-2">
                        響應式設計提高加載速度，改善用戶滿意度和SEO排名。
                      </p>
                    </a>
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        3. 集中管理SEO
                      </b>
                      <p className="mt-2">
                        單一URL結構簡化SEO，集中權重，提升搜尋排名。
                      </p>
                    </a>
                    <a
                      href="/Blog-04"
                      className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                    >
                      <b className="text-[20px] font-extrabold">
                        4. 迎合Google算法
                      </b>
                      <p className="mt-2">
                        Google偏愛行動友好的RWD網站，有助於提高搜尋排名。
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full overflow-hidden lg:w-1/2">
                <figure>
                  {" "}
                  <Image
                    src="/images/SEO行銷優化-極客網頁設計01.webp"
                    loading="lazy"
                    alt="SEO行銷優化-極客網頁設計01"
                    placeholder="empty"
                    width={800}
                    height={800}
                  />
                </figure>
              </div>
            </div>
          </section>
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
      <div className="custom-prev absolute top-1/2 left-4 transform border-1 border-black -translate-y-1/2 cursor-pointer z-20">
        <image
          src="https://www.svgrepo.com/show/478803/right-arrow.svg"
          alt="Previous"
          width={40}
          height={40}
        />
      </div>
      <div className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-20">
        <image
          src="https://www.svgrepo.com/show/478803/right-arrow.svg"
          alt="Next"
          width={40}
          height={40}
        />
      </div>
    </>
  );
}
