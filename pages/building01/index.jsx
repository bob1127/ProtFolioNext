// pages/blog/index.jsx
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { useTheme } from "next-themes";
import { ShimmerButton } from "../../components/ui/shimmer-button.tsx";
import { NeonGradientCard } from "../../components/ui/neon-gradient-card.tsx";

import HeroSlider from "../../components/SwiperScroll02/page.jsx";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import { WarpBackground } from "../../components/ui/warp-background.tsx";
import Flip from "../../components/Flip.jsx";
import { NextSeo } from "next-seo";
import {
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card.tsx";

const Blog = ({}) => {
  const webpage = {
    name: "近期案例－極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
    description:
      "極客網頁設計（JEEK Webdesign）提供專業形象官網、商業攝影、客製化及套版網站設計服務，專注於實現創意，助企業提升品牌形象。我們位於台中，提供從設計到開發的全面支援，讓您的網站更具吸引力與競爭力。",
    url: "https://www.jeek-webdesign.com.tw/pages",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };

  return (
    <div className="" data-aos="fade-in" data-aos-duration="1500">
      <NextSeo
        title="近期案例－極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐"
        description="極客網頁設計（JEEK Webdesign）提供專業形象官網、商業攝影、客製化及套版網站設計服務，專注於實現創意，助企業提升品牌形象。我們位於台中，提供從設計到開發的全面支援，讓您的網站更具吸引力與競爭力。"
        openGraph={{
          title:
            "近期案例－極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
          description:
            "極客網頁設計（JEEK Webdesign）提供專業形象官網、商業攝影、客製化及套版網站設計服務，專注於實現創意，助企業提升品牌形象。我們位於台中，提供從設計到開發的全面支援，讓您的網站更具吸引力與競爭力。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/精選案例-極客網頁設計.png",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "網站設計, SEO優化, 成本控制, 網頁設計公司, 行動友善, 3D建模, 品牌形象提升, 自然流量, 搜尋引擎排名, 網站速度優化, 外部連結, Google PageSpeed Insights, 關鍵字規劃, 網站可見性, 數位行銷, 網站建置",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: webpage.name,
            description: webpage.description,
            url: webpage.url,
            publisher: {
              "@type": "Organization",
              name: webpage.name,
              logo: {
                "@type": "ImageObject",
                url: webpage.logo,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: webpage.contact.phone,
                contactType: "Customer Service",
                email: webpage.contact.email,
              },
            },
          }),
        }}
      />
      <section className="section_Hero_img  flex flex-col   border border-black ">
        <div className="flex flex-col lg:flex-row  h-auto lg:h-[70vh] overflow-hidden">
          <div className="left w-full lg:w-1/2">
            <Image
              src="/images/model-wearing-space-suit.jpg"
              alt=""
              placeholder="empty"
              loading="lazy"
              width={1200}
              height={800}
            ></Image>
          </div>
          <div className="right w-full lg:w-1/2 bg-[#ea4c37] pt-[100px] lg:py-0 py-[100px] flex flex-col justify-between items-center">
            <div className="h-1/5 flex justify-between w-full px-5">
              <div className="left text-white w-1/2 flex   justify-start">
                <p className="text-[18px] font-light">專案：星語童裝</p>
              </div>
              <div className="right text-white w-1/2 text-right flex justify-end">
                <p className="text-[18px] font-light">類型：購物網站</p>
              </div>
            </div>
            <div className="h-3/5 flex justify-center flex-col items-center">
              <h1 className="text-gray-100">星語童裝</h1>
              <span className="text-gray-200">官網製作｜購物網站</span>
            </div>
            <div className="h-1/5">
              <p className="font-light text-white text-[14px]">
                專案狀態：（正在建置中...）
              </p>
            </div>
          </div>
        </div>
        <div className="project-content py-10">
          <div className="text-full-wrap w-[80%] mx-auto border">
            <div className="titile">
              <h2>星宇童裝官網製作</h2>
            </div>
            <div className="normal w-[80%] text-[16px] leading-relaxed tracking-widest">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              eum voluptate, tempora voluptates in accusantium asperiores id
              dicta culpa animi dolorum et labore nisi odio sint provident illum
              consectetur. Eaque.
            </div>
          </div>
          <div className="banner w-[80%] mx-auto my-10">
            <Image
              src="/images/網頁版型設計＿網頁改版-極客網頁設計.png"
              alt=""
              placeholder="empty"
              loading="lazy"
              width={1500}
              height={800}
              className="rounded-xl"
            ></Image>
          </div>
          <div className="text-full-wrap w-[80%] mx-auto border">
            <div className="two-column flex">
              <div className="left w-1/2 p-5 flex flex-col justify-center ">
                <h2 className="font-extrabold text-black text-[24px]  sm:text-[32px] xl:text-[40px]">
                  RESPONSIVE
                </h2>
                <p className="text-[20px] font-bold ">自適應網站設計</p>
                <span className="normal w-[80%] mt-[30px] text-[16px] leading-relaxed tracking-widest">
                  本專案採用自適應網站設計 (Responsive Web Design, RWD)
                  方法，旨在提供使用者在各種裝置上的流暢瀏覽體驗。無論是桌面電腦、平板還是智慧型手機，網站皆能根據不同的螢幕尺寸和解析度自動調整版面設計，確保內容易於閱讀，操作流暢。
                </span>
              </div>
              <div className="right w-1/2 p-5">
                <Image
                  src="/images/截圖-2024-09-24-上午8.33.55.png"
                  placeholder="empty"
                  loading="lazy"
                  alt=""
                  width={1000}
                  height={1000}
                ></Image>
              </div>
            </div>
          </div>
          <div className="text-full-wrap mt-10 w-[80%] mx-auto border">
            <div className="two-column flex">
              <div className="left w-1/2 p-5 flex flex-col justify-center ">
                <Image
                  src="/images/網頁ui設計_Figma-極客網頁設計.png"
                  placeholder="empty"
                  loading="lazy"
                  className="rounded-[20px]"
                  alt=""
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className="right w-1/2 p-5">
                <h2 className="font-extrabold text-black text-[24px]  sm:text-[32px] xl:text-[40px]">
                  RESPONSIVE
                </h2>
                <p className="text-[20px] font-bold ">自適應網站設計</p>
                <span className="normal w-[80%] mt-[30px] text-[16px] leading-relaxed tracking-widest">
                  本專案採用自適應網站設計 (Responsive Web Design, RWD)
                  方法，旨在提供使用者在各種裝置上的流暢瀏覽體驗。無論是桌面電腦、平板還是智慧型手機，網站皆能根據不同的螢幕尺寸和解析度自動調整版面設計，確保內容易於閱讀，操作流暢。
                </span>
              </div>
            </div>
          </div>

          <div className="text-full-wrap mt-[80px] w-[80%] mx-auto border">
            <div className="titile">
              <h2>星宇童裝官網製作</h2>
            </div>
            <div className="normal w-[80%] text-[16px] leading-relaxed tracking-widest">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              eum voluptate, tempora voluptates in accusantium asperiores id
              dicta culpa animi dolorum et labore nisi odio sint provident illum
              consectetur. Eaque.
            </div>
          </div>
          <div className="banner w-[80%] flex  mx-auto my-10">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <Image
                src="/images/網頁版型設計＿網頁改版-極客網頁設計.png"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={1500}
                height={800}
                className="rounded-xl"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
