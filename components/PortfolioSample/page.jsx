import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../../styles/port.module.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={true}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/65d5204d5182ad1a76b7de0e_v-eAjxpodWUyCSg2blUcHVxqpagQ7gSnJQxnWR49qaU.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/65d3c889459c1244c9b18495_74-9AkKzjzsxBJMdKpoUixuZrpnxoBKHjIx7Ux33H74.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
