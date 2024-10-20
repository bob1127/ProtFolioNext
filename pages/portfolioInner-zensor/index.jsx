"use client";

import React, { useState, useEffect } from "react";
// import Script from "next/script";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Carousel from "../../components/EmblaCarousel06/index";
// import Inner from "../../components/Inner/index.jsx";
// import Styles from "../../styles/portfolio.module.css";

export default function Blog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the component as mounted to allow client-only rendering
    setIsMounted(true);
  }, []);

  // Only render the component once it's mounted
  if (!isMounted) return null;

  return (
    <div>
      <NextSeo
        title="案例範例_禪譜科技官網建置-極客網頁設計"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "案例範例_禪譜科技官網建置-極客網頁設計",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/新網站SEO規劃-極客網頁設計.webp",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
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
        <div className="title py-[100px] flex flex-col justify-center items-center mt-[120px] item-title">
          <h1 className=" text-[40px] xl:text-[50px] 2xl:text-[70px] leading-[80px] text-center mb-[30px]">
            禪普科技官網建置 - ZensorRD
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
        <div data-aos="fade-up" className="flex md:flex-row flex-col ">
          <div className="img overflow-hidden  w-full  md:w-1/2 h-[600px] ">
            <Image
              src="/images/portfolio01.webp"
              width={800}
              height={600}
              alt="img"
              loading="eager"
            ></Image>
          </div>
          <div className="img  md:w-1/2 w-full h-[600px] overflow-hidden">
            <Image
              src="/images/portfolio02.webp"
              width={800}
              alt="img"
              height={600}
              priority
              loading="eager"
            ></Image>
          </div>
        </div>
        <section className="section-photograph px-[100px]">
          <div>
            <img src="" alt="" />
          </div>
        </section>

        <section className="w-full flex-col flex md:flex-row px-[50px] md:px-[100px] xl:px-[100px] my-[50px] section-content">
          <div className=" w-full md:w-1/2 p-10">
            <div className="txt ">
              <h2>title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis commodi totam aliquam ratione eos, quos iure, earum
                suscipit ullam nostrum corrupti. Illum obcaecati dolore officia
                dicta voluptatem voluptate expedita vero.
              </p>
            </div>
          </div>
          <div className=" w-full md:w-1/2 ">
            <Image
              src="/images/截圖-2024-09-24-上午9.25.18.webp"
              alt="img"
              width={800}
              height={600}
              priority
              loading="eager"
            ></Image>
          </div>
        </section>

        <section className="w-full flex-col flex md:flex-row px-[50px] md:px-[100px] xl:px-[200px] section-content">
          <div className=" w-full md:w-1/2 ">
            <Image
              src="/images/black-company-logo.webp"
              width={800}
              height={600}
              priority
              alt="img"
              loading="eager"
            ></Image>
          </div>
          <div className=" w-full md:w-1/2 p-10">
            <div className="txt ">
              <h2>Responsive Web Design, RWD</h2>
              <p className="text-[22px] mt-2">
                rwd 版型設計-關於建置 符合google 搜尋引擎 優化的 使用者體驗
              </p>
              <p className="text-[22px] mt-2"> 提升使用者體驗（UX）</p>
              <p className="text-[22px] mt-2"> 移動裝置</p>
            </div>
          </div>
        </section>
        {/* <Carousel /> */}
      </div>
    </div>
  );
}
