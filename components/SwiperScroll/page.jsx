import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://cdn.prod.website-files.com/657f5f9efe6a1b80f0f43fa9/${src}?w=${width}&q=${
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
        autoplay={{
          delay: 8500,
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
        className="w-full h-full relative"
      >
        <SwiperSlide className="flex justify-center items-center text-lg ">
          <div className="txt">
            <h4 className="text-[30px] mb-4 font-bold">Step1. 溝通需求</h4>
          </div>
          <Image
            width={600}
            src="6591c4db3a320cb81ce28c1d_Relume.svg"
            height={400}
            loader={imageLoader}
          />
          <div className="bottom bg-white border border-black rounded-md mt-5 p-5">
            <div className="text-[16px]">
              <span className="font-bold">了解客戶需求：</span>
              <br></br>
              通過溝通了解業務目標、受眾和網站功能。
            </div>
            <div className="text-[16px]">
              <span className="font-bold">提供建議:</span>
              <br></br>
              提出設計和技術建議，並討論預算和時間表。
            </div>
            <div className="text-[16px]">
              <span className="font-bold">確定合作:</span>
              <br></br>
              確認需求和預算，為下一步做準備。
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg ">
          <div className="txt">
            <h4 className="text-[30px] mb-4 font-bold">Step2. 簽付訂金</h4>
          </div>
          <Image
            width={600}
            src="6591c4db3a320cb81ce28c1d_Relume.svg"
            height={400}
            loader={imageLoader}
          />
          <div className="bottom bg-white border border-black rounded-md mt-5 p-5">
            <div className="text-[16px]">
              <span className="font-bold">制定報價</span>
              <br></br>
              根據需求製作報價單，涵蓋所有項目內容。
            </div>
            <div className="text-[16px]">
              <span className="font-bold">簽訂合同:</span>
              <br></br>
              確定合同條款，包括工作範圍和付款方式。
            </div>
            <div className="text-[16px]">
              <span className="font-bold">收取訂金:</span>
              <br></br>
              收取訂金以啟動項目，確保雙方承諾。
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center boder-2 border-black p-5 items-center text-lg">
          <div className="txt boder-2 border-black">
            <h4 className="text-[30px] mb-4 font-bold">Step3. </h4>
          </div>
          <img
            className="w-full"
            src="
          https://www.handz.design/assets/images/image03.jpg?v=02f8e9b2"
            alt=""
          />
          <div className="bottom bg-white border border-black rounded-md mt-5 p-5">
            <div className="text-[16px]">
              <span className="font-bold">開始製作：</span>
              <br></br>
              根據需求進行網站設計和開發工作。
            </div>
            <div className="text-[16px]">
              <span className="font-bold">中期審核：</span>
              <br></br>
              定期與客戶審核進展，確保符合預期
            </div>
            <div className="text-[16px]">
              <span className="font-bold"> 進行調整：</span>
              <br></br>
              根據反饋進行必要的調整，準備最終交付。
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <div className="txt">
            <h4 className="text-[30px] mb-4 font-bold">Step4. 結案</h4>
          </div>
          <img
            className="w-full"
            src="https://www.handz.design/assets/images/image16.jpg?v=02f8e9b2
          "
            alt=""
          />
          {/* <Image
            width={600}
            src="6591c4db3a320cb81ce28c1d_Relume.svg"
            height={400}
            loader={imageLoader}
          /> */}
          <div className="bottom bg-white border border-black rounded-md mt-5 p-5">
            <div className="text-[16px]">
              <span className="font-bold">開始製作：</span>
              <br></br>
              根據需求進行網站設計和開發工作。
            </div>
            <div className="text-[16px]">
              <span className="font-bold">中期審核：</span>
              <br></br>
              定期與客戶審核進展，確保符合預期
            </div>
            <div className="text-[16px]">
              <span className="font-bold"> 進行調整：</span>
              <br></br>
              根據反饋進行必要的調整，準備最終交付。
            </div>
          </div>
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
