import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "../../styles/DragCarousel.module.scss"; // 確保引入自定義樣式文件
// import required modules
import { Pagination } from "swiper/modules";

// Custom image loader function
const imageLoader = ({ src, width, quality }) => {
  return `https://www.ultraehp.com/images/test-portfolio/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function App() {
  // State to track hovered slide index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array of image file names
  const images = [
    "Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png",

    "行動電源03.png",

    "B-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png",
    "3ft-05_ad957ae9-9adc-45af-951f-ca7b0e84803a_2878x.jpg.png",
    "untitl55ed.png",
    "A25M0121-DT03-V1_DTC_3078x.jpg.png",
    "korekaimasita_item4-9.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={2} // Default for mobile
        spaceBetween={6} // Reduced spacing between slides
        centeredSlides={true}
        pagination={{
          clickable: false,
        }}
        // modules={[Pagination]}
        className="mySwiper w-full h-full"
        grabCursor={true} // Changes cursor to a grab hand
        speed={900} // Set the drag duration in milliseconds
        breakpoints={{
          1024: {
            // Breakpoint for desktop
            slidesPerView: 3,
          },
          640: {
            // Breakpoint for tablet
            slidesPerView: 2,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-start items-center text-lg bg-white relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href="#">
              <Image
                width={400}
                height={800}
                loading="lazy"
                placeholder="empty"
                src={src}
                loader={imageLoader}
                className="object-left" // Ensures the image is aligned to the left
              />
            </a>
            <div className="txt flex flex-col justify-start items-start ml-4">
              <b className="text-[14px] font-normal">Product Name:</b>
              <p>Price: 400 </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
