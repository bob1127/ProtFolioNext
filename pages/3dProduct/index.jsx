// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Marquee from "react-fast-marquee";

import GsapText from "../../components/RevealText/index";
import SwiperScroll01 from "../../components/SwiperScroll01/page.jsx";
// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );
import Head from "next/head";
import Image from "next/image.js";
import NewsletterForm from "../../components/NewsletterForm.jsx";
import { NextSeo } from "next-seo";
import mailchimp from "../../components/mailchimp/page.jsx";
export default function Home() {
  const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
      <div
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
      >
        <div className="relative h-[100vh] xl:h-[80vh] lg:h-[150vh]">
          <StickyImage imgUrl={imgUrl} />
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>
        {children}
      </div>
    );
  };
  const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
        }}
        ref={targetRef}
        className="sticky z-0 overflow-hidden rounded-3xl"
      >
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity,
          }}
        />
      </motion.div>
    );
  };
  const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    );
  };

  const IMG_PADDING = 12;
  const ExampleContent = () => (
    <div className="mx-auto  mt-[-50px] md:mt-[100px]   px-4 pb-24 pt-12 flex flex-col ">
      <section className="section-embla my-[60px  md:my-0"></section>
      <section className="section_portfolio mx-auto max-w-[2000px] w-full flex flex-wrap justify-center items-center"></section>
    </div>
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const webpage = {
    name: "聯絡我們｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
    description:
      "Next.js 和 WordPress 結合打造無頭網站，能提升網站性能、內容管理和開發靈活性。透過靜態生成（SSG）、伺服器端渲染（SSR）和 CDN 優化，網站速度顯著提高，並透過 API 支援多渠道發佈。使用無頭架構，開發者可自由設計前端，同時利用 WordPress 強大的內容管理功能。相比傳統 WordPress 網站，無頭網站具有更好的 SEO 和安全性，適合需要高效性能和自訂設計的專案。",
    url: "https://www.jeek-webdesign.com.tw/blog-10",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };
  //   const plane = useRef(null);
  //   const maxRotate = 45;

  //   const manageMouseMove = (e) => {
  //     const x = e.clientX / window.innerWidth;
  //     const y = e.clientY / window.innerHeight;
  //     const perspective = window.innerWidth * 4;
  //     const rotateX = maxRotate * x - maxRotate / 2;
  //     const rotateY = (maxRotate * y - maxRotate / 2) * -1;
  //     plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  //   };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,";

  return (
    <div className=" py-[100px] flex justify-center  items-center">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="聯絡我們-極客網頁設計" />
        <meta
          property="og:description"
          content="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png"
        />
        <meta property="og:url" content="https://www.jeek-webdesign.com.tw" />
        <meta property="og:type" content="website" />
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
      </Head>
      <NextSeo
        title="聯絡我們-極客網頁設計｜JEEK WEBDESIGN"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "聯絡我們-極客網頁設計｜JEEK WEBDESIGN",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.example.com/og-home.jpg",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
      <div>
        <div className="mt-[50px]  bg-[#ffffff]">
          <TextParallaxContent
            imgUrl="/images/行動電源02.png"
            subheading="Best Web Experience"
            heading={
              <span className="text-[32px] md:text-[40px] lg:text-[60px]">
                打造不一樣的網站<br></br>3d產品交互式網站
              </span>
            }
          >
            <ExampleContent />
          </TextParallaxContent>
        </div>
        <section className="section">
          <div className="container">
            <div className="padding">
              <div className="w-layout-grid about-content">
                <div className="about-grid-image">
                  <div className="reveal-image-trigger">
                    <SwiperScroll01 />

                    <div
                      className="bg-for-animation"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>

                <div
                  id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                  className="about-grid-content"
                >
                  <GsapText
                    text=' "3D 建模" '
                    lineHeight="60px"
                    id="text6"
                    fontSize="50px"
                  />
                  <div className="flex w-full  flex-col items-start">
                    <b className="mb-3 text-[16px]">3d model for website</b>
                    <div className="flex">
                      <span className="bg-[#fad335] rounded-[30px] inline-block border border-black px-4 py-2 mr-2 ">
                        3D 形象影片
                      </span>
                      <span className="bg-[#fad335] rounded-[30px] inline-block border border-black px-4 py-2 mr-2 ">
                        交互式網站
                      </span>
                      <span className="bg-[#fad335] rounded-[30px] inline-block border border-black px-4 py-2 mr-2 ">
                        產品展示
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ">
                    <div className="mb-6 flex flex-col items-start">
                      <b className="text-[22px]">視覺衝擊力強</b>
                      <p className="text-left leading-normal mt-3">
                        - 3D
                        建模能夠創建出極具深度和細節的視覺效果，這種真實感和立體感可以吸引訪客的注意，提升網站的視覺吸引力，進而增加用戶的停留時間和互動率。
                      </p>
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <b className="text-[22px]"> 多元應用場景</b>
                      <p className="text-left leading-normal mt-3">
                        - 3D
                        模型可以在不同平台和媒體上使用，包括網站、社交媒體、動畫視頻等，這種多功能性使得投資於
                        3D 建模的回報更具價值。
                      </p>
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <b className="text-[22px]">靈活性強</b>
                      <p className="text-left leading-normal mt-3">
                        -
                        作為個人接案者，我們能夠迅速響應您的要求，並且在設計過程中更加靈活，隨時根據您的反饋進行調整，確保項目順利進行
                      </p>
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <b className="text-[22px]">提升互動體驗</b>
                      <p className="text-left leading-normal mt-3">
                        - 3D
                        圖片或動畫可以與用戶進行互動，如滑動或旋轉產品視圖，這種互動性不僅增加了用戶的參與感，還能讓用戶更深入了解產品。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Marquee>
            <div>
              <Image
                src="/images/3dmodel05.png"
                placeholder="empty"
                width={500}
                height={500}
                className="mx-auto"
                alt="3d建模產品"
                loading="lazy"
              ></Image>
            </div>
            <div className="text-[18px] font-bold">3D Model.</div>
            <div>
              <Image
                src="/images/3d產品模型04-極客網頁設計_Blender3D.png-removebg-preview.png"
                placeholder="empty"
                width={500}
                height={500}
                className="mx-auto"
                alt="3d建模產品"
                loading="lazy"
              ></Image>
            </div>
            <div className="text-[18px] font-bold">3D Model.</div>
            <div>
              <Image
                src="/images/3d產品模型01-極客網頁設計_Blender3D-removebg-preview.webp"
                placeholder="empty"
                width={500}
                height={500}
                className="mx-auto"
                alt="3d建模產品"
                loading="lazy"
              ></Image>
            </div>
            <div className="text-[18px] font-bold">3D Model.</div>
            <div>
              <Image
                src="/images/3d產品模型07-極客網頁設計|Blender3D.png"
                placeholder="empty"
                width={500}
                height={500}
                className="mx-auto"
                alt="3d建模產品"
                loading="lazy"
              ></Image>
            </div>
            <div className="text-[18px] font-bold">3D Model.</div>
            <div>
              <Image
                src="/images/up100-12-removebg-preview.png"
                placeholder="empty"
                width={500}
                height={500}
                className="mx-auto"
                alt="3d建模產品"
                loading="lazy"
              ></Image>
            </div>
            <div className="text-[18px] font-bold">3D Model.</div>
            <div>
              <Image
                src="/images/bag-removebg-preview.png"
                placeholder="empty"
                width={500}
                height={500}
                className="mx-auto"
                alt="3d建模產品"
                loading="lazy"
              ></Image>
            </div>
          </Marquee>
        </section>
      </div>
    </div>
  );
}

// reportWebVitals();
