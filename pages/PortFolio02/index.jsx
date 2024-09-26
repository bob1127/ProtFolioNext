"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Head from "next/head";
import Marquee from "react-fast-marquee";
import Image from "next/image";
// import Carousel from "../../components/EmblaCarousel06/index";

export default function Blog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the component as mounted to allow client-only rendering
    setIsMounted(true);
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    }); // Initialize AOS with options
  }, []);

  // Only render the component once it's mounted
  if (!isMounted) return null;

  return (
    <div className="bg-[#181818]">
      <Head>
        <link
          rel="preload"
          href="/images/portfolio01.webp"
          as="image"
          type="image/webp"
          importance="high" // 提升資源的載入優先級
        />
        <link
          rel="preload"
          href="/images/portfolio02.webp"
          as="image"
          type="image/webp"
          importance="high" // 提升資源的載入優先級
        />
      </Head>
      <div className="hero-section border border-black mb-[30px]">
        <div
          className="title py-[100px] flex flex-col justify-center items-center mt-[120px] item-title"
          data-aos="fade" // Add AOS fade effect
        >
          <h1
            className="text-[70px] text-[#e8e8e8] leading-[80px] text-center mb-[30px]"
            data-aos="fade-in" // AOS fade-in effect
          >
            超極生技官網建置 - UltraE
          </h1>

          <div className="w-[500px] mx-auto">
            <Marquee className="text-[20px] mx-auto border w-[700px] flex mt-1">
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                Bootstrap
              </div>
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                Jquery
              </div>
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                SCSS
              </div>
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                SEO optimization
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex md:flex-row flex-col ">
          <div
            className="img overflow-hidden w-full md:w-1/2 h-[600px]"
            data-aos="fade-bluur " // 使用 AOS 的淡入效果
          >
            <Image
              src="/images/截圖-2024-09-24-上午8.33.55.png"
              width={800}
              height={600}
              priority
              loading="eager"
            />
          </div>

          <div
            className="img md:w-1/2 w-full h-[600px] overflow-hidden"
            data-aos="fade-up" // AOS fade-up effect
          >
            <Image
              src="/images/截圖-20244-上午9.26.14.png"
              width={800}
              height={600}
              priority
              loading="eager"
            />
          </div>
        </div>

        <section className="section-photograph px-[100px]">
          <div>
            <img src="" alt="" />
          </div>
        </section>

        <section
          className="w-full flex-col flex md:flex-row px-[50px] md:px-[100px] xl:px-[100px] my-[50px] section-content"
          data-aos="fade-up" // AOS fade-up effect
        >
          <div className="w-full md:w-1/2 p-10">
            <div className="txt">
              <h2 data-aos="fade-in">title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis commodi totam aliquam ratione eos, quos iure, earum
                suscipit ullam nostrum corrupti. Illum obcaecati dolore officia
                dicta voluptatem voluptate expedita vero.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/ultrae-company-logo.png"
              width={800}
              height={600}
              priority
              loading="eager"
              data-aos="fade"
            />
          </div>
        </section>

        <section
          className="w-full flex-col flex md:flex-row px-[50px] md:px-[100px] xl:px-[200px] section-content"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2">
            <Image
              src="/images/black-company-logo.webp"
              width={800}
              height={600}
              priority
              loading="eager"
              data-aos="fade"
            />
          </div>
          <div className="w-full md:w-1/2 p-10">
            <div className="txt">
              <h2 className="text-white" data-aos="fade-up">
                Responsive Web Design, RWD
              </h2>
              <p className="text-[20px] font-normal text-white mt-2">
                rwd 版型設計-關於建置 符合google 搜尋引擎 優化的 使用者體驗
              </p>
              <p className="text-[22px] mt-2">提升使用者體驗（UX）</p>
              <p className="text-[22px] mt-2">移動裝置</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
