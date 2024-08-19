import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        speed={1000}
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
        className="w-full h-full relative"
      >
        {/* <SwiperSlide className="flex justify-center items-center text-lg">
          <Image width={700} src="bag.png" height={800} loader={imageLoader} />
        </SwiperSlide> */}
        <SwiperSlide className="flex justify-center items-center text-lg">
          <Image
            width={700}
            src="Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png"
            height={800}
            className="mx-auto"
            loader={imageLoader}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg">
          <Image
            width={700}
            className="mx-auto"
            src="SG01-Camera.png"
            height={800}
            loader={imageLoader}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg">
          <Image
            width={700}
            className="mx-auto"
            src="Untitled-Camera-2.png"
            height={800}
            loader={imageLoader}
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
