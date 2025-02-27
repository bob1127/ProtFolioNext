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
    <div className="bg-center w-full h-[100vh] flex justify-center items-center  bo-cover bg-[url('/images/Hero-img.png')] ">
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

      <NeonGradientCard className=" w-[95vw] h-[95vh] items-center justify-center text-center">
        <span className="pointer-events-none bg-white/60 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          近期專案
          <div
            style={{ letterSpacing: "0.05em" }}
            className="text-center text-black  text-[14px] leading-relaxed"
          >
            極客網頁設計對於客戶的專案秉持用心且專業的態度，<br></br>
            傾聽客戶需求，以最合適的預算去達到最好的效益。
          </div>
          <div className="w-[80%] mt-[100px] mx-auto">
            <div className="title flex justify-center items-center flex-col">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  PROJECTS
                </span>
              </ShimmerButton>
            </div>
            <div className="projects">
              <div className="bg-black rounded-2xl w-full"></div>
            </div>
          </div>
        </span>
      </NeonGradientCard>
    </div>
  );
};

export default Blog;
