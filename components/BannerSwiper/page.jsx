import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Pagination } from "swiper/modules";
const imageLoader = ({ src, width, quality }) => {
  return `https://www.ultraehp.com/images/test-portfolio/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <Image
            loader={imageLoader}
            width={1920}
            loading="lazy"
            placeholder="empty"
            height={700}
            src="banner0445.png"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <Image
            loader={imageLoader}
            width={1920}
            loading="lazy"
            placeholder="empty"
            height={700}
            src="banner0445.png"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <Image
            loader={imageLoader}
            width={1920}
            loading="lazy"
            placeholder="empty"
            height={700}
            src="banner0445.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
