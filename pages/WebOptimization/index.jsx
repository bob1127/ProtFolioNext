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
import dynamic from "next/dynamic";
import NewsletterForm from "../../components/NewsletterForm.jsx";
import { NextSeo } from "next-seo";
import mailchimp from "../../components/mailchimp/page.jsx";
// import TextPsrrallac from "../components/TextParallaxContent";
import DragCaroudelSlider from "../../components/DragCarousel/index.jsx";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

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
      <section className="section_portfolio mx-auto max-w-[2000px] w-full flex flex-wrap justify-center items-center">
        {/* <a href="https://www.zensorrd.com">
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a>
      <a href="">
        {" "}
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a>
      <a href="">
        {" "}
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a> */}
      </section>
    </div>
  );
  //compare table
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("/public/Animation.json"),
    renderer: "canvas",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const imageLoader = ({ src, width, quality }) => {
    return `https://www.clipartmax.com/png/small/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const imageLoader02 = ({ src, width, quality }) => {
    return `https://cdn.prod.website-files.com/65961828f21f96309de14a8f/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const imageLoader03 = ({ src, width, quality }) => {
    return `https://miro.medium.com/v2/resize:fit:1400/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const imageLoader04 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/test-portfolio/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
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
            imgUrl="/images/WebOptimization-Hero-Img.png"
            subheading="Best Web Experience"
            heading={
              <span className="text-[32px] md:text-[40px] lg:text-[60px]">
                為您提供全方位策略的<br></br>網站設計。
              </span>
            }
          >
            <ExampleContent />
          </TextParallaxContent>
        </div>

        <section className="section ">
          <div className="p-[20px] xl:p-0">
            <div className="padding">
              <div className="w-layout-grid px-[0px] xl:px-[160px] about-content f">
                <div className="about-grid-image ">
                  <div className="reveal-image-trigger">
                    <Image
                      src="/images/截圖-2024-09-24-上午8.33.55.png"
                      height={1200}
                      width={1000}
                      loading="lazy"
                      alt=""
                      placeholder="empty"
                    ></Image>
                    <div
                      className="bg-for-animation"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
                <div
                  id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                  className="about-grid-content "
                >
                  <GsapText text=' "移動設備體驗優化" ' id="text1" />
                  <div className="flex items-start flex-col ">
                    <div className="mb-6 flex flex-col items-start">
                      <b className="text-[22px] leading-normal">
                        1. 移動優先索引（Mobile-First Indexing）
                      </b>
                      <p className="text-left leading-normal mt-3">
                        - Google 目前使用{" "}
                        <span className="bg-[#fad335]">「移動優先索引」</span>
                        Google
                        搜索引擎主要依據網站的移動版本進行索引和排名，因此確保網站在移動設備上的優化至關重要，尤其是當桌面與移動內容不一致時。
                      </p>
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <b className="text-[22px]"> 頁面加載速度</b>
                      <p className="text-left leading-normal mt-3">
                        Google 將頁面加載速度納入排名因素，尤其在{" "}
                        <span className="bg-[#fad335]">「頁面體驗」</span>
                        更新後更重視移動端。建議使用{" "}
                        <span className="bg-[#fad335]">
                          Google PageSpeed Insights
                        </span>{" "}
                        測試並優化加載速度，以提升用戶體驗。
                      </p>
                      <img
                        className="w-full h-auto"
                        src="https://www.cloudways.com/blog/wp-content/uploads/Page-Speed-Insights-Field-Data.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <section className="section">
                <div className="p-[20px]">
                  <div className="padding">
                    <div className="w-layout-grid about-content">
                      <div
                        id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                        className="about-grid-content"
                      >
                        <GsapText
                          text=' "網頁結構優化" '
                          lineHeight="60px"
                          id="text5"
                          fontSize="50px"
                        />
                        <div className="flex flex-col ">
                          <h5 className="text-[20px] text-left mt-4 font-black">
                            有效的標題標籤 (Heading Tags) 使用
                          </h5>
                          <div className="flex items-start flex-col">
                            <b className="mt-2 text-[18px] font-extrabold">
                              分層次使用 H1 到 H6 標籤：
                            </b>
                            <p className="text-[14px] text-left">
                              H1 標籤應用於頁面的主標題，每個頁面應僅有一個
                              H1。次要標題依次使用 H2、H3
                              等標籤，形成清晰的結構。
                            </p>
                          </div>
                          <h5 className="text-[20px] text-left mt-4 font-black">
                            有效的標題標籤 (Heading Tags) 使用
                          </h5>

                          <div className="flex items-start flex-col">
                            <b className="mt-2 text-left text-[18px] font-extrabold">
                              添加結構化數據標記 (Schema.org)：
                            </b>
                            <p className="text-[14px] text-left">
                              幫助搜索引擎更好地理解網站內容，提升網站在搜索引擎結果頁面
                              (SERP) 中的展示效果，如豐富摘要 (Rich Snippets)。
                            </p>
                          </div>
                          <h5 className="text-[20px] text-left mt-4 font-black">
                            快速加載和性能優化
                          </h5>
                          <div className="flex items-start flex-col">
                            <b className="mt-2 text-[18px] font-extrabold">
                              優化圖片和資源:
                            </b>
                            <p className="text-[14px] text-left">
                              使用正確的格式和大小的圖片，並利用壓縮工具減少文件體積。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                        className="about-grid-image"
                      >
                        <div className="reveal-image-trigger">
                          <Image
                            src="/images/fantastic_hare_36410_Web_page_structure_optimization_._890fced3-3b5d-40d8-b509-e2ae72356184.webp"
                            placeholder="empty"
                            loading="lazy"
                            width={1000}
                            height={1000}
                          ></Image>
                          <div
                            className="bg-for-animation"
                            style={{ display: "block" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="marketing  lg:w-full 2xl:w-[80%]  mx-auto ">
          <div className="Title flex flex-col justify-center items-center w-full px-[26px] lg:w-2/3 2xl:w-[60%] mx-auto">
            <h2 className="text-center">我該如何選擇行銷方式</h2>
            <p className="w-full lg:w-2/3 mb-3 text-[14px] mt-3 sm:text-[16px] lg:text-[16px] text-center mb-4 leading-normal">
              在當今數位化時代，增加網路曝光度對於任何企業或品牌都至關重要。選擇適合的行銷方式不僅能提高品牌知名度，還能有效吸引潛在客戶和促進銷售。然而，面對各種行銷手段，如何做出最佳選擇呢？
            </p>
          </div>
          <div className="Marketing-method px-[5vw] grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-3">
            <div className="px-6 bg-white hover:bg-green-200 duration-200 delay-100 relative overflow-hidden group border-2 border-gray-800 rounded-[20px]">
              <div className="img absolute bottom-[130px] right-[-100px] group-hover:right-[30px] opacity-0 duration-300 group-hover:opacity-100 z-[999]">
                <Image
                  loader={imageLoader}
                  width={80}
                  height={80}
                  src="137-1375168_instagram-logo-free-social-media-icons-flaticon-instagram-logo-png.png"
                  loading="lazy"
                  placeholder="empty"
                />
              </div>
              <div className="text  mt-[30px] group-hover:mt-[0px] duration-300 scale-100 group-hover:scale-90  flex flex-col items-center ">
                <h3 className="text-[30px] font-semibold">
                  {" "}
                  網頁行銷 (Web Marketing)
                </h3>
                <b className="text-[18px]  text-center leading-normal">
                  網頁行銷是一個廣泛的概念，涵蓋了所有在網頁上進行的行銷活動。它包括網站設計、內容行銷、用戶體驗
                  (UX) 優化、網站分析
                </b>
                <div>
                  <p className="text-[16px] mt-4">
                    <b>優點：</b>
                    提升網站整體效能，增加用戶轉化，並可利用數據分析優化策略。
                  </p>
                  <p className="text-[16px] mt-4">
                    <b>缺點：</b>
                    實施和維護成本高，效果量化可能需時間。
                  </p>
                </div>
              </div>
              <div className="relative  overflow-hidden">
                <div className="img-wrap rounded-2xl overflow-hidden">
                  <Lottie options={defaultOptions} height={400} width={400} />
                </div>
              </div>
            </div>
            <div className="px-6 bg-white hover:bg-yellow-200 duration-200 delay-100 relative overflow-hidden group border-2 border-gray-800 rounded-[20px]">
              <div className="img absolute bottom-[130px] right-[-100px] group-hover:right-[30px] opacity-0 duration-300 group-hover:opacity-100 z-[999]">
                <Image
                  loader={imageLoader}
                  width={80}
                  height={80}
                  src="137-1375168_instagram-logo-free-social-media-icons-flaticon-instagram-logo-png.png"
                  loading="lazy"
                  placeholder="empty"
                />
              </div>
              <div className="text  mt-[30px] group-hover:mt-[0px] duration-300 scale-100 group-hover:scale-90  flex flex-col items-center ">
                <h3 className="text-[30px] font-semibold">
                  搜尋引擎優化 (SEO)
                </h3>
                <b className="text-[18px]  text-center leading-normal">
                  SEO 是網頁行銷中的一個專門領域，旨在提高網站在搜尋引擎結果頁
                  (SERPs)
                  中的排名。這樣可以增加網站的有機流量，即免費流量，而不是付費廣告。
                </b>
                <div>
                  <p className="text-[16px] mt-4">
                    <b>優點：</b>
                    提供長期的有機流量，成本效益高且提升網站可信度。
                  </p>
                  <p className="text-[16px] mt-4">
                    <b>缺點：</b>
                    見效時間長，技術要求高且受搜尋引擎算法變化影響。
                  </p>
                </div>
              </div>
              <div className="relative  overflow-hidden">
                <div className="img-wrap rounded-2xl overflow-hidden">
                  <div className="img-wrap rounded-2xl overflow-hidden">
                    <Lottie options={defaultOptions} height={400} width={400} />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 bg-white hover:bg-rose-200 duration-200 delay-100 relative overflow-hidden group border-2 border-gray-800 py-6 rounded-[20px]">
              <div className="img absolute bottom-[130px] right-[-100px] group-hover:right-[30px] opacity-0 duration-300 group-hover:opacity-100 z-[999]">
                <Image
                  loader={imageLoader}
                  width={80}
                  height={80}
                  src="137-1375168_instagram-logo-free-social-media-icons-flaticon-instagram-logo-png.png"
                  loading="lazy"
                  placeholder="empty"
                />
              </div>
              <div className="text  mt-[30px] group-hover:mt-[0px] duration-300 scale-100 group-hover:scale-90  flex flex-col items-center ">
                <h3 className="text-[30px] font-semibold">社交媒體行銷</h3>
                <b className="text-[18px]  text-center leading-normal">
                  通過平台如Facebook、Instagram、LinkedIn和Twitter進行品牌宣傳和互動。
                </b>
                <div>
                  <p className="text-[16px] mt-4">
                    <b>優點：</b>
                    高互動性，適合建立品牌形象和與客戶建立關係。
                  </p>
                  <p className="text-[16px] mt-4">
                    <b>優點：</b>
                    高互動性，適合建立品牌形象和與客戶建立關係。
                  </p>
                </div>
              </div>
              <div className="relative  overflow-hidden">
                <div className="img-wrap rounded-2xl overflow-hidden">
                  <Lottie options={defaultOptions} height={400} width={400} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col xl:flex-row justify-center px-[30px] md:px-[150px] xl:px-0 py-[20px] md:py-[80px]    ">
          <div className="flex justify-center w-full lg:w-[90%] xl:flex-row flex-col  2xl:w-[70%]">
            <div className="w-full  xl:w-[35%] p-[10px] xl:p-[40px]">
              <div className="txt">
                <div className="logo pl-[20px]">
                  <b className="font-bold text-[30px]">JEEK</b>
                </div>
                <div className="bottom " data-aos="fade-up">
                  <p className="text-[12px] font-bold">Design by Website</p>

                  <GsapText
                    text="Seo成效分析"
                    lineHeight="60px"
                    id="text7"
                    fontSize="50px"
                  />

                  <div class="flex md:flex-wrap flex-col mt-5">
                    <span class="bg-[#fad335] text-center w-[210px] border mt-3 md:mt-0 border-black text-black rounded-[30px] inline-block px-4 py-2 mr-2 ">
                      google analytics 4
                    </span>
                    <span class="bg-[#fad335] text-center w-[210px] text-black  border mt-3 md:mt-3 border-black rounded-[30px] inline-block px-4 py-2 mr-2 ">
                      Google Search Console
                    </span>
                    <span class="bg-[#fad335] text-center w-[150px] text-black border mt-3 md:mt-3 border-black rounded-[30px] inline-block px-4 py-2 mr-2 ">
                      Hotjar
                    </span>
                  </div>

                  <p className="text-[16px]  w-full md:w-2/3  xl:w-full mt-[40px]">
                    使用 GA4、Google Search Console 和
                    Hotjar，您可以全方位分析和優化網站的 SEO 成效。GA4
                    提供用戶行為和目標追蹤，Google Search Console
                    追蹤關鍵字排名與索引狀況，Hotjar
                    則透過熱圖和錄影視覺化使用者互動。這些工具能幫助您提升網站曝光率和使用者體驗，達到最佳
                    SEO 效果。
                  </p>
                  <a
                    id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                    href="/blog-09"
                    className="simple-link"
                  >
                    Seo成效分析
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full  flex-col pt-10 flex  justify-center items-center  xl:w-[65%]">
              <DragCaroudelSlider />

              <div className="txt">
                <div className="main-container medium-paddings ">
                  <a
                    id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                    href="/blog-01"
                    className="simple-link"
                  >
                    新網站如何做Seo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  px-[15px]  xl:flex-row  justify-center mt-[100px] pb-[100px] flex-col flex">
          <div className="flex xl:flex-row flex-col w-full mx-auto lg:w-[70%] 2xl:w-[80%] justify-center">
            <a
              href="/blog-01"
              className="xl:w-1/2 w-full mr-4 
              
                
              duration-300
              hover:border-3
              hover:translate-x-4 hover:translate-y-4  p-3 md:p-10"
            >
              <div className="flex w-full  flex-col items-start">
                <Image
                  alt="新網站SEO規劃-極客網頁設計"
                  width={700}
                  height={700}
                  loading="lazy"
                  className="rounded-[18px]"
                  placeholder="empty"
                  src="/images/新網站SEO規劃-極客網頁設計.webp"
                />
              </div>
              <div className="flex mt-6">
                <span className="bg-[#fad335] rounded-[30px] inline-block px-4 py-2 mr-2 ">
                  搜尋引擎優化
                </span>
                <span className="bg-[#fad335] rounded-[30px] inline-block px-4 py-2 mr-2 ">
                  網頁結構優化
                </span>
              </div>
              <div className="txt w-full 2xl:w-[80%]">
                <h4 className="text-[40px] font-light text-black leading-normal">
                  網頁SEO很重要嗎？
                </h4>

                <p className=" text-[16px] mt-3">
                  在當今數位時代，擁有一個專業、美觀的網站只是成功的第一步。
                  <br></br>
                  然而，無論網站設計得多麼出色，如果它在搜尋引擎上沒有可見度，就無法有效吸引潛在客戶。
                  <br></br>
                  這就是為什麼網頁SEO（搜尋引擎優化）至關重要的原因。
                </p>
              </div>
            </a>
            <a
              href="/blog-02"
              className=" xl:w-1/2 mt-5 w-full mr-4 
              
                
              duration-300
              hover:border-3
              hover:translate-x-4 hover:translate-y-4  p-3 md:p-10"
            >
              <div className="flex w-full  flex-col items-start">
                <Image
                  alt="網頁設計很花錢嗎-極客網頁設計"
                  width={700}
                  height={700}
                  loading="lazy"
                  className="rounded-[18px]"
                  placeholder="empty"
                  src="/images/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷_網站建置.webp"
                />
              </div>
              <div className="flex mt-6">
                <span className="bg-[#fad335] rounded-[30px] inline-block px-4 py-2 mr-2 ">
                  目標明確
                </span>
                <span className="bg-[#fad335] rounded-[30px] inline-block px-4 py-2 mr-2 ">
                  選擇效益最大化
                </span>
              </div>
              <div className="txt w-full 2xl:w-[80%]">
                <h4 className="text-[40px] leading-normal font-light text-black">
                  網頁設計其實沒有很花錢
                </h4>

                <p className="  font-bold text-[20px] mt-3">確認需求：</p>
                <div className="flex w-full  flex-col items-start">
                  <b className="mb-3 text-[14px] font-normal leading-normal">
                    在開始架設網頁之前，必須先確認好自己的網站需求。
                    <br></br>
                    有些網頁公司會為您添加許多額外的功能或插件，<br></br>
                    結果卻發現這些功能用不上，還拖慢了網頁速度，增加了後續維護的困難。
                  </b>
                  <p className=" font-bold text-[20px] mt-3">
                    尋找合適的合作夥伴:
                  </p>
                  <b className="mb-3 text-[14px] font-normal leading-normal">
                    外包與兼職：如果需要專業協助，可以考慮聘請自由職業者或兼職設計師，
                    <br></br>他們通常比全職團隊更具成本效益。
                  </b>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// reportWebVitals();
