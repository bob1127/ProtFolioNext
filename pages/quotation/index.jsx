"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import MailchimpForm from "../../components/NewsletterForm.jsx";
import NewsletterForm from "../../components/NewsletterForm.jsx";
// import GsapText from "../components/RevealText/index";

import Marquee from "react-fast-marquee";
import React from "react";
import Script from "next/script";
import Head from "next/head";
// import DragCaroudelSlider from "../../components/DragCarouselSlider/page.jsx";
import { NextSeo } from "next-seo";

import GsapText from "../../components/RevealText/index";
import SwiperScroll from "../../components/SwiperScroll03/page.jsx";
import { useState, useEffect } from "react";
import Link from "next/link.js";
import VanishList from "../../components/VanishList/page.jsx";
import RevealLinks from "../../components/RevealLinks/page.jsx";
import Image from "next/image.js";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

export default function Blog() {
  const webpage = {
    name: "精選方案報價-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 超優惠內容專案，歡迎聯繫",
    description:
      "極客網頁設計提供高效能的無頭網站解決方案，結合 Next.js 和 WordPress，讓您的網站不僅快速、SEO友好，還具備高度靈活性。利用PageSpeed Insights優化網站速度，提升搜尋引擎排名，並透過3D交互式設計提升用戶體驗。這些現代化設計不僅能增加網站的吸引力，還能幫助提高轉換率和品牌形象，降低營銷成本，實現業務增長。",
    url: "https://www.jeek-webdesign.com.tw/quotation",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "jeekdesign@gmail.com",
    },
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["ContactUs"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  // const defaultOptions02 = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: require("/public/tangle.json"),
  //   renderer: "canvas",
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("/public/Animation.json"),
    renderer: "canvas",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //compare table
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
  const rows = [
    {
      key: "1",
      name: "成本較低",
      role: "成本較低",
      status: "成本較低",
    },
    {
      key: "2",
      name: "高度定制",
      role: "獨特性",
      status: "優化性能",
    },
    {
      key: "3",
      name: "優化性能",
      role: "優化性能",
      status: "簡單易用",
    },
    {
      key: "4",
      name: "William Howard",
      role: "靈活擴展性",
      status: "大量的預設選項",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "客製化網站",
    },
    {
      key: "status",
      label: "套版網站",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  useEffect(() => {
    // 延遲 300ms 來啟動動畫
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 清除計時器
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[#faf9f8]" data-aos="fade-up">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="專案報價-給您最合理的報價內容｜極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        />
        <meta
          property="og:description"
          content="極客網頁設計提供高效能的無頭網站解決方案，結合 Next.js 和 WordPress，讓您的網站不僅快速、SEO友好，還具備高度靈活性。利用PageSpeed Insights優化網站速度，提升搜尋引擎排名，並透過3D交互式設計提升用戶體驗。這些現代化設計不僅能增加網站的吸引力，還能幫助提高轉換率和品牌形象，降低營銷成本，實現業務增長。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/自由工作接案者-極客網頁設計.webp"
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
        title="專案報價-給您最合理的報價內容｜極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        description="專業的網頁設計與SEO優化服務，靈活的自由接案者提供客製化解決方案，讓您的網站脫穎而出。聯繫我們，讓我們幫助您提升品牌形象，實現業務目標！
"
        openGraph={{
          title:
            "專案報價-給您最合理的報價內容｜極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
          description:
            "專業的網頁設計與SEO優化服務，靈活的自由接案者提供客製化解決方案，讓您的網站脫穎而出。聯繫我們，讓我們幫助您提升品牌形象，實現業務目標！",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/自由工作接案者-極客網頁設計.webp",
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
              "網頁設計, 自由接案, SEO優化, 客製化網站, 商品攝影, 影片剪輯, 前端效能優化, 企業網站, 靈活服務, 網站維護, 數據分析, 網站設計流程, 網頁工程師, 網站功能開發",
          },
        ]}
      />
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white   p-0 md:p-[30px] m-5 sm:p-0 2xl:w-[50%] overflow-y-scroll    w-[100%]  sm:w-[500px] z-[9999999999999999999999999] lg:w-[65%] border-2 border-blue-400 border-3 rounded-xl"
      >
        <ModalContent
          className="bg-white  xl:top-[50%] 2xl:top-[40%]  md:top-[70%] border-t-1  lg:top-[50%] p-1 lg:p-10  border border-black  py-2 rounded-t-[30px] h-auto z-[99999999999999999999999999]"
          style={{
            width: "auto",
            maxWidth: "98vw",
            // 以下是各裝置寬度的 @media 設定
            "@media (max-width: 768px)": {
              width: "70vw",
            },
            "@media (max-width: 1024px)": {
              width: "60vw",
            },
            "@media (max-width: 1920px)": {
              width: "80vw",
            },
          }}
        >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <MailchimpForm />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="pb-[100px]">
        <div id="webpage" className="page-wrapper">
          <main className="main">
            <section className="slider-hero">
              <SwiperScroll />
            </section>
            <section className="Hero-title mt-[30px] md:mt-0 px-[10px] md:px-[70px]  pt-[0px] md:pt-[150px] py-6 ">
              <div className="container duration-500  bg-[#f3c13a]  border-2 border-gray-900 rounded-2xl overflow-hidden  h-[40vh] md:h-[85vh] xl:h-[90vh] 2xl:h-[65vh] flex justify-start flex-col items-center">
                <div className="sign flex py-2 sm:py-[40px] justify-center">
                  <div className="border flex justify-center items-center border-gray-500 bg-white rounded-[30px] w-full px-8 py-3">
                    💡致力於開發使用者體驗良好的網站
                  </div>
                </div>
                <div className="title "></div>
                <main className="h-full w-full relative ">
                  <div className="z-[99999]   w-full h-full left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 main-title absolute">
                    <h1 className="block text-white sm:hidden tex-[32px] md:text-[45px] lg:text-[60px] xl:text-[80px] font-black text-center  leading-[40px] xl:leading-[80px]">
                      WEBSITE DESIGN - JEEK
                    </h1>
                    <RevealLinks />
                  </div>
                  <div className="box01  hidden lg:block z-1 top-[100px] absolute left-[-260px] border border-black">
                    <img
                      className="w-[500px]"
                      src="https://media.licdn.com/dms/image/D5612AQEAXBUF9txcjQ/article-cover_image-shrink_720_1280/0/1709307865856?e=2147483647&v=beta&t=IWJyj-6VYXqlKL3eKwETQ0G9yCXU9nV-28efGNqSlCs"
                      alt=""
                    />
                    <img
                      className="w-[260px] ml-[290px] mt-[40px]"
                      src="https://s3-alpha.figma.com/hub/file/1188292808/e5d4b24f-8e61-4ef0-8989-a2cd8b6509c6-cover.png"
                      alt=""
                    />
                  </div>

                  <div className="box02 hidden lg:block absolute top-[220px] right-[-200px]">
                    <img
                      className="w-[260px] mt-[-170px] ml-[190px]"
                      src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/9ab726b26517ca0e2eb4572832bf7920d59d4a53"
                      alt=""
                    />
                    <img
                      className="w-[400px]"
                      src="https://www.sgidigi.com/wp-content/uploads/2023/11/Spline-輕鬆製作網頁3D模型.png"
                      alt=""
                    />
                  </div>
                </main>
              </div>
              <Lottie options={defaultOptions} height={220} width={220} />
              <div className="w-full xl:w-[80%] 2xl:w-[50%]   mt-[40px] mx-auto py-8 text-[76px] leading-[32px] font-normal border bg-white rounded-xl  md:p-[30px] p-[20px]  xl:p-[50px] text-center  text-[#171717] ">
                <div>
                  <h1 className="text-[2.5rem] py-[30px]">網頁建置費用</h1>
                </div>
                <div className="flex justify-center">
                  <div className="text-[22px]">
                    商品拍攝 | 形象影片 | 主視覺圖片 | 客製化設計
                  </div>
                </div>
              </div>
              <div className="text-[80px] text-center">+</div>
              <div className="w-full xl:w-[80%]   mt-[40px] mx-auto   leading-[32px] font-normal grid-cols-2 md:grid-cols-3 grid  rounded-xl  md:p-[30px] p-[20px]   md:items-start justify-center items-center xl:p-[50px] text-center  text-[#171717] ">
                <div className=" " data-aos="zoom-in">
                  <div className="p-1 m-1">
                    <div className="txt font-bold text-[30px]">網址註冊費</div>
                    <p className=" text-[16px] md:text-[20px] mt-5">購買網域</p>

                    <div className="p-4 sm:p-10 xl:p-5">
                      <Image
                        src="/images/網址註冊費用.png"
                        placeholder="empty"
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="網址註冊費"
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className=" " data-aos="zoom-in" data-aos-delay="300">
                  <div className=" p-1 m-1">
                    <div className="txt font-bold text-[30px]">主機費用</div>
                    <p className=" text-[16px] md:text-[20px] mt-5">本地主機</p>
                    <p className=" text-[16px] md:text-[20px]">雲端主機</p>

                    <div className="p-4 sm:p-10 xl:p-5">
                      <Image
                        src="/images/主機費用.png"
                        placeholder="empty"
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="主機費用"
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className=" " data-aos="zoom-in" data-aos-delay="600">
                  <div className=" p-1 m-1">
                    <div className="txt font-bold text-[30px]">維護費用</div>
                    <p className=" text-[16px] md:text-[20px] mt-5">
                      每年 seo優化
                    </p>
                    <p className=" text-[16px] md:text-[20px]">關鍵字 調正</p>
                    <p className=" text-[16px] md:text-[20px]">
                      網站流量分析追蹤
                    </p>
                    <div className="p-4 sm:p-10 xl:p-5">
                      <Image
                        src="/images/SEO費用.png"
                        placeholder="empty"
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="後續seo相關費用"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="discount hidden px-[10px] md:px-[70px] pt-[30px] md:pt-[50px] flex justify-center items-center py-0 lg:py-6 ">
              <div className=" w-full flex flex-col lg:flex-row justify-around">
                <div className="bg-white mr-2 w-full lg:w-1/2 border-4 border-gray-800 section-hidden mt-3  relative rounded-2xl ">
                  <div className="top py-8">
                    <Marquee>
                      <div className="flex">
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                      </div>
                    </Marquee>
                  </div>
                  <div className="content flex py-10 justify-center  px-10 items-center">
                    <h2 className="text-center py-10">
                      初期草創階段，只要選擇任何方案內容 即送形象影片拍攝
                    </h2>
                  </div>
                  <a href="" className="absolute bottom-0 left-0 w-full">
                    <div className="bottom  px-4 hover:py-10 duration-300  bg-gray-800 py-5 text-white ">
                      立刻選擇您的方案 <span className="text-white">↘︎</span>
                    </div>
                  </a>
                </div>

                <div className="bg-white mt-3  w-full lg:w-1/2 border-4 border-gray-800 section-hidden  rounded-2xl ">
                  <div className="top py-8">
                    <Marquee>
                      <div className="flex">
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                        <p className="text-[45px] font-bold mx-4">NEWS!</p>
                      </div>
                    </Marquee>
                  </div>
                  <div className="content flex py-10 justify-center flex-col items-center">
                    <div className="flex items-center flex-col justify-center">
                      <p className="text-[40px] font-light text-black">
                        免費基本SEO 優化
                      </p>
                      <p className="w-4/5 text-center  text-[16px] md:text-[20px] mt-3">
                        SEO
                        優化能提升網站可見性，增加搜尋引擎排名，吸引更多自然流量。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="about-hero m-0 hidden p-0">
              <div className="container">
                <div className="about-hero-content">
                  <div className="about-hero-title-block">
                    <h1
                      data-w-id="8b401037-45f7-eb88-2888-8b081e39589e"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="heading is-about-hero-title"
                    >
                      About
                    </h1>
                    {/* <a
                      data-w-id="70be419f-58bd-64a7-48cc-18d3ea7f1d52"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      href="#free"
                      className="border border-black"
                    >
                      了解更多
                    </a> */}
                  </div>

                  <div className="about-hero-line" />
                  <div className="about-hero-content-grid">
                    <div
                      data-w-id="8b401037-45f7-eb88-2888-8b081e3958a9"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="about-hero-content-text"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <section id="explore" className="section with-borders hidden">
              <section className="section is-3d-content-section">
                <div className="container">
                  <div className="_3d-content-padding">
                    <div className="_3d-block" style={{}}>
                      <div className="_3d-content-image" style={{}}>
                        <div className="reveal-image-trigger">
                          {/* <img
                            loading="lazy"
                            alt="Portrait of the team"
                            src=""
                            className="cover-image"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          /> */}
                          <div
                            className="bg-for-animation"
                            style={{ display: "block" }}
                          />
                        </div>
                      </div>
                      <h2
                        className="heading is-3d-content-title"
                        id="exploref"
                        style={{}}
                      >
                        "個人接案者，溝通更快速"
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="_3d-section-overlay" />
                <div className="parallax-trigger">
                  <div
                    className="parallax-layout"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Office spaces"
                      className="cover-image"
                    />
                    <div className="bg-for-animation" />
                  </div>
                </div>
              </section>
            </section>

            <section className="marketing hidden">
              <div className="Title flex flex-col justify-center items-center w-full px-[26px] lg:w-2/3 mx-auto">
                <GsapText
                  text=' "對於增加網路曝光度，我該如何選擇我的行銷方式" '
                  lineHeight="60px"
                  id="text1"
                  fontSize="50px"
                />
                {/* <h2 className="heading is-medium-title text-center">
                  "對於增加網路曝光度，<br></br>我該如何選擇我的行銷方式"
                </h2> */}
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
                      alt="img"
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
                      <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                      />
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
                      alt="img"
                      placeholder="empty"
                    />
                  </div>
                  <div className="text  mt-[30px] group-hover:mt-[0px] duration-300 scale-100 group-hover:scale-90  flex flex-col items-center ">
                    <h3 className="text-[30px] font-semibold">
                      搜尋引擎優化 (SEO)
                    </h3>
                    <b className="text-[18px]  text-center leading-normal">
                      SEO
                      是網頁行銷中的一個專門領域，旨在提高網站在搜尋引擎結果頁
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
                    <div className="relative  overflow-hidden">
                      <div className="img-wrap rounded-2xl overflow-hidden">
                        <Lottie
                          options={defaultOptions}
                          height={400}
                          width={400}
                        />
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
                      alt="img"
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
                      <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="mt-0 pt-0  md:mt-[40px] mx-[20px] md:px-0"
              id="free"
            >
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                className="  md:text-[30px] text-[26px] xl:text-[50px] mx-auto"
                style={{
                  marginBottom: 30,
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {/* <GsapText
                  text=' "什麼！？ 網站只要 一萬？" '
                  lineHeight="70px"
                  id="text2"
                  fontSize="60px"
                /> */}
                {/* "為什麼要選擇自由接案者？" */}
              </h2>

              <p className="text-[16px]  mt-4 md:w-[80%] w-full xl:w-[60%] mx-auto px-[30px] leading-[32px] text-center ">
                {" "}
                {/* freelancer 比起設計公司，更有時間處理您的專案。
                也不必透過中間代理人"PM"溝通需求，導致誤差。
                一來一回就浪費了時間成本，把您的需求直接跟我討論可以更直觀的完美符合您的需求
                選擇自由工作者（FreeLancer）有很多好處，特別是如果你正在尋找{" "}
                <span className="text-[18px] font-bold">
                  {" "}
                  靈活且個性化的服務
                </span>
                。首先，自由工作者可以根據你的需求{" "}
                <span className="text-[18px] font-bold">
                  量身定制解決方案
                </span>{" "}
                ，無論是設計網站、撰寫文章或是拍攝影片，他們都能快速響應並提供專屬服務。其次，他們的工作時間更具彈性，不像公司有固定流程，能快速完成任務。此外，選擇自由工作者通常費用較低，因為他們不需要像公司一樣{" "}
                <span className="text-[18px] font-bold">
                  負擔額外的管理成本
                </span>
                。這些優點讓越來越多人選擇與自由工作者合作，
                <span className="text-[18px] font-bold">
                  享受更靈活、效率高且價格合理的專業服務
                </span>
                。 */}
              </p>
              {/* <p className="text-center mb-[60px] mt-[30px]  xl:text-[22px] md:text-[26px] text-[15px] ">
                選擇JEEK 幫助您實現創意發想
              </p> */}
              <section className="section-carousel   flex-col   px-0 xl:px-[70px] md:flex-row flex ">
                <div className="left-txt flex-col flex justify-start items-center  w-full mt-5 md:w-[30%]">
                  <div>
                    <h2
                      data-aos="fade-flur"
                      className="text-[#fdb932] text-center leading-[90px] xl:text-[100px] md:text-[60px] text-[40px] font-extrabold"
                    >
                      RWD
                    </h2>
                    <h2 className="text-[#222222] text-center md:leading-[40px] xl:leading-[60px] xl:text-[70px] md:text-[40px] text-[32px] font-extrabold">
                      SEO 技術
                    </h2>
                    <p className="text-[32px]   w-[90%] mx-auto      md:w-full text-center mt-8">
                      更專業
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="bg-[#fdb932] mt-3 duration-200 text-[50px] rounded-md px-4 text-black  inline-block shadow-gray-100 hover:scale-95 shadow-xl text-center py-3 "
                  >
                    Contact
                  </a>
                  {/* <a
                    href="/contact"
                    className="bg-[#fdb932] mt-3 duration-200 text-[18px] rounded-md text-white inline-block shadow-white-100 hover:scale-95 shadow-xl text-center py-3 mb-5 w-[140px]"
                  >
                    Contact
                  </a> */}
                </div>
                <div className="img mt-4 xl:mt-0 xl:my-0  mb-0 xl:mb-[30px] w-full md:w-[40%] flex justify-center overflow-hidden">
                  <Image
                    src="/images/專案優惠只要一萬.png"
                    alt="自由接案工作者-freeLancer-極客網頁設計"
                    placeholder="empty"
                    data-aos="zoom-in-up"
                    className="mx-auto"
                    data-aos-delay="200"
                    width={600}
                    height={600}
                  ></Image>
                </div>
                <div className="right-txt flex flex-col justify-start items-center w-full mt-5 md:mt-0 md:w-[30%]">
                  <div>
                    <h2
                      data-aos="fade-flur"
                      className="text-[#fdb932] text-center leading-[90px] xl:text-[90px] md:text-[60px] text-[40px] font-extrabold"
                    >
                      精選方案
                    </h2>
                    <h2 className="text-[#222222] text-center md:leading-[40px] xl:leading-[60px] xl:text-[70px] md:text-[40px] text-[32px] font-extrabold">
                      優惠價格
                    </h2>
                    <p className="text-[32px]   w-[90%] mx-auto      md:w-full text-center mt-8">
                      網頁設計建製 只要
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="bg-[#ffffff] mt-3 duration-200 text-[50px] rounded-md px-4 text-black  inline-block shadow-gray-100 hover:scale-95 shadow-xl text-center py-3 "
                  >
                    30,000 up
                  </a>
                </div>
              </section>
            </section>
            {/* <Carousel04 /> */}
            <section className="image-carousel mt-[80px]">
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                className=" md:w-2/3 leading-normal sm:w-full lg:w-1/2  text-[32px] w-[90%]  md:text-[45px] xl:text-[50px]  mx-auto"
                style={{
                  marginBottom: 30,
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                現在購買任一專案即贈送免費商業攝影10張(含後製)!!!
              </h2>
              <Marquee>
                <div>
                  <Image
                    src="/images/The Smallest Wireless Potentiostat-Box.webp"
                    placeholder="empty"
                    width={350}
                    height={400}
                    className="mx-2"
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/The Smallest Wireless Potentiostat-Soil testing.webp"
                    placeholder="empty"
                    width={350}
                    className="mx-2"
                    height={400}
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/The Smallest Wireless Potentiostat-Open Box.webp"
                    placeholder="empty"
                    width={350}
                    height={400}
                    className="mx-2"
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/The Smallest Wireless Potentiostat-FingerSize.webp"
                    placeholder="empty"
                    width={350}
                    height={400}
                    className="mx-2"
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/3dmodel01.png"
                    placeholder="empty"
                    width={350}
                    height={400}
                    className="mx-2"
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/A25M0121-DT03-V1_DTC_3078x.jpg.png"
                    placeholder="empty"
                    width={350}
                    height={400}
                    className="mx-2"
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/Untitled-Camera-2.png"
                    placeholder="empty"
                    width={350}
                    height={400}
                    className="mx-2"
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/電化學分析儀-模擬器-散熱孔.webp"
                    placeholder="empty"
                    width={350}
                    className="mx-2"
                    height={400}
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                  <Image
                    src="/images/電化學分析儀-模擬器-防滑材質.webp"
                    placeholder="empty"
                    width={350}
                    className="mx-2"
                    height={400}
                    loading="lazy"
                    alt="portfolio-image-display"
                  ></Image>
                </div>
              </Marquee>
            </section>

            <section className="section mt-[50px]">
              <div className="">
                <div className="">
                  <div className=" ">
                    <div
                      className="vertical-flex mt-[25px] flex flex-col justify-center items-center with-small-gap plans-wrap "
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <h2
                        className=" md:text-[30px] text-[26px] xl:text-[50px] mx-auto"
                        style={{
                          marginBottom: 30,
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        {/* "選擇適合你的方案" */}
                        <GsapText
                          text=' "選擇適合你的方案" '
                          lineHeight="70px"
                          id="text3"
                          fontSize="60px"
                        />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-plan">
              <div className="flex md:flex-row flex-wrap justify-center items-start   flex-row">
                <div
                  className="border pb-[60px] h-[450px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex  relative justify-center flex-col items-center mx-4"
                  data-aos="fade-blur"
                >
                  <p>Basic</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] bg-[#ffc532] w-[120px] font-bold text-whitebg-[#ffc532] border border-black">
                    NT 30,000 up
                  </div>
                  <h3 className="text-[40px]">精選方案</h3>

                  <div className="plan-content mt-5">
                    <p className="mt-4">精美網站版型設計</p>
                    <p className="mt-4">簡易後台編輯操作</p>
                    <p className="mt-4">
                      商業授權圖庫 x 10 <br></br>(另有商業攝影服務可提供)
                    </p>
                    <p className="mt-4">基本seo優化</p>

                    <div className="flex mt-5 bg-[#000000] text-white flex-wrap  gap-3">
                      {backdrops.map((b) => (
                        <Button
                          key={b}
                          variant="flat"
                          color="warning"
                          aria-label="modal-btn"
                          onPress={() => handleOpen(b)}
                          className="capitalize w-full"
                        >
                          {b}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="border h-[450px] py-[60px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex  relative justify-center flex-col items-center mx-4"
                  data-aos="fade-blur"
                >
                  <p className="font-bold">Landing Page</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] w-[120px] font-bold text-black bg-[#ffc532] border border-black">
                    NT 10,000 up
                  </div>
                  <h3 className="text-[40px]">一頁式網站</h3>

                  <div className="plan-content mt-5">
                    <p className="mt-4">活動一頁式網頁設計</p>
                    <p className="mt-4">高轉化率</p>
                    <p className="mt-4">
                      商業授權圖庫 x 10 (另有商業攝影服務可提供)
                    </p>
                    <p className="mt-4">客製化設計</p>
                    <div className="flex mt-5 bg-[#000000] text-white flex-wrap  gap-3">
                      {backdrops.map((b) => (
                        <Button
                          key={b}
                          aria-label="modal-btn"
                          variant="flat"
                          color="warning"
                          onPress={() => handleOpen(b)}
                          className="capitalize w-full"
                        >
                          {b}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="border h-[450px] py-[60px] px-[40px] bg-white  w-[400px] border-black rounded-md my-4 shadow-xl flex relative justify-center flex-col items-center mx-4"
                  data-aos="fade-blur"
                >
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center   h-[120px] w-[120px] font-bold text-black bg-[#ffc532] border border-black">
                    NT 50,000 up
                  </div>
                  <p>E-Coomerce</p>
                  <h3 className="text-[40px]">購物網站</h3>
                  {/* <p className=" text-[16px] md:text-[20px]">
                    價格： <span className="font-extrabold">20000up</span>
                  </p> */}

                  <div className="plan-content mt-5">
                    <p className="mt-4">客製化網站規劃與設計</p>
                    <p className="mt-4">包含基本商品去背上架</p>
                    <p className="mt-4">商品後製精修圖</p>
                    <p className="mt-4"> 商品 形象 Banner</p>
                    <p className="mt-4">公司形象(產品)影片拍攝</p>

                    <div className="flex mt-5 bg-[#000000] text-white flex-wrap  gap-3">
                      {backdrops.map((b) => (
                        <Button
                          key={b}
                          variant="flat"
                          color="warning"
                          aria-label="modal-btn"
                          onPress={() => handleOpen(b)}
                          className="capitalize w-full"
                        >
                          {b}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="border h-[450px] py-[60px] px-[40px] bg-white border-black rounded-md my-4 flex relative w-[400px]  justify-center flex-col items-center mx-4"
                  data-aos="fade-bur"
                >
                  <p>Customized</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] bg-[#ffc532] w-[120px] font-bold text-whitebg-[#ffc532] border border-black">
                    跟我談談
                  </div>
                  <h3 className="text-[40px]">客製化方案</h3>

                  {/* <p className=" text-[16px] md:text-[20px]">
                    價格： <span className="font-extrabold">20000up</span>
                  </p> */}

                  <div className="plan-content mt-5">
                    <p className="mt-4">
                      {" "}
                      {/* <Image src="" width={50} height={50}></Image>{" "} */}
                      包含第一年網域空間費用
                    </p>
                    <p className="mt-4">seo優化(進階)</p>
                    <p className="mt-4">商品攝影｜形象影片</p>
                    <p className="mt-4">客製化版型設計</p>

                    <p className="mt-4"></p>
                    <div className="flex bg-[#000000]  mt-5 text-white flex-wrap  gap-3">
                      {backdrops.map((b) => (
                        <Button
                          key={b}
                          variant="flat"
                          aria-label="modal-btn"
                          color="warning"
                          onPress={() => handleOpen(b)}
                          className="capitalize w-full"
                        >
                          {b}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="coroperation my-[60px]">
              <div className="flex flex-col ">
                <span
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="md:text-[30px] text-[26px] xl:text-[50px] mx-auto"
                  style={{
                    marginBottom: 30,
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <GsapText
                    text="合作須知-terms"
                    lineHeight="70px"
                    id="text2"
                    fontSize="60px"
                  />
                </span>
              </div>
              <div className="terms-wrap  bg-white border w-[97%] md:w-[80vw] mx-auto p-8 md:p-10  shadow-xl rounded-xl">
                <div className="grid  p-0 md:p-10 grid-cols-2 xl:grid-cols-4 md:grid-cols-4  gap-0 md:gap-2">
                  <div className="content  p-4 md:p-10 flex flex-col justify-center items-center ">
                    <b className=" text-[16px] md:text-[20px]">Step01</b>
                    <p className=" text-[16px] md:text-[20px]">確認雙方需求</p>

                    <Image
                      className="mt-3"
                      src="/images/icon/collaboration.png"
                      loading="lazy"
                      width={300}
                      height={300}
                      placeholder="empty"
                      alt="step1確認雙方需求"
                    />
                  </div>
                  <div className="content  p-4 md:p-10 flex flex-col justify-center items-center ">
                    <b className=" text-[16px] md:text-[20px]">Step02</b>
                    <p className=" text-[16px] md:text-[20px]">支付訂金</p>
                    <Image
                      className="mt-3"
                      src="/images/icon/payment-method.png"
                      loading="lazy"
                      width={300}
                      height={500}
                      placeholder="empty"
                      alt="step02. 支付訂金-極客網頁設計"
                    />
                  </div>
                  <div className="content  p-4 md:p-10 flex flex-col justify-center items-center ">
                    <b className=" text-[16px] md:text-[20px]">Step03</b>
                    <p className=" text-[16px] md:text-[20px]">開始製作</p>
                    <Image
                      className="mt-3"
                      src="/images/icon/ux.png"
                      loading="lazy"
                      width={300}
                      height={500}
                      placeholder="empty"
                      alt="step03. 開始製作"
                    />
                  </div>
                  <div className="content  p-4 md:p-10 flex flex-col justify-center items-center ">
                    <b className=" text-[16px] md:text-[20px]">Step04</b>
                    <p className=" text-[16px] md:text-[20px]">支付尾款-結案</p>
                    <Image
                      className="mt-3"
                      src="/images/icon/positive-vote.png"
                      loading="lazy"
                      width={300}
                      height={500}
                      placeholder="empty"
                      alt="step04. 結案"
                    />
                  </div>
                </div>
                <h2>2.服務範圍 (Scope of Work)</h2>
                <div>
                  <ul className="p-0 m-0 ">
                    <li className="text-[20px] mt-4 font-bold">• 網頁設計</li>
                    <li className="text-[20px] mt-4 font-bold">• seo優化</li>
                    <li className="text-[20px] mt-4 font-bold">• 3D建模</li>
                    <li className="text-[20px] mt-4 font-bold">
                      • 各項商品拍攝
                    </li>
                    <li className="text-[20px] mt-4 font-bold">
                      • Banner、DM、產品圖上架、圖片美化{" "}
                    </li>
                    <li className="text-[20px] mt-4 font-bold">• 空拍攝影</li>
                  </ul>
                </div>
                <h2>3.合約內容</h2>
                <div>
                  <Image
                    src="/images/contract.png"
                    alt="合約內容下載"
                    placeholder="empty"
                    loading="lazy"
                    className=""
                    width={400}
                    height={400}
                  ></Image>
                </div>
              </div>
            </section>
            {/* <section className="  py-[70px] px-[20px] flex flex-col ">
              <div className="flex justify-center w-full">
                <div className="">
                  <p className=""></p>
                </div>
                <div className="title flex flex-col  items-center mb-6 ">
                  <h2 className="text-[40px]  text-black font-extrabold">
                    <GsapText
                      text=' " 網頁設計流程" '
                      lineHeight="70px"
                      id="text4"
                      fontSize="60px"
                    />
                  </h2>
                  <p className="text-[22px] mx-auto">
                    您可以跟我們溝通需求，並確認流程
                  </p>
                  <p className="mt-3 text-[22px] mx-auto">
                    有特殊需求 可用下列表格 試算價格
                  </p>
                  <div className="flex  justify-center items-center">
                    <a
                      href="/contact"
                      data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                      className="button-wrapper  w-inline-block mb-5 mt-4"
                    >
                      <div className="button-layout">
                        <p className="button-text" style={{}}>
                          立即聯絡
                        </p>
                        <div className="button-bg" style={{}} />
                      </div>
                      <div className="button-icon-block">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          loading="lazy"
                          alt=""
                          className="button-icon"
                          style={{}}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col xl:flex-row">
                <div className="w-full lg:w-1/2">
                  <div className="flex  flex-col  pl-0 md:pl-3  xl:pl-10  mx-auto">
                    <div className="px-4">
                      <SwiperScroll />
                    </div>
                  </div>
                </div>
                <div className=" w-full lg:w-1/2">
                  <VanishList />
                </div>
              </div>
            </section> */}

            {/* <a href="/contact" className=" text-[16px] md:text-[20px]">
              實際價格可以再討論 請聯繫我
            </a> */}
            <div className="flex flex-col ">
              <div className="p-2 md:p-10">
                <div className="form rounded-[40px] p-0 md:p-10 flex-col mb-[100px]  lg:flex-row  flex bg-white h-auto border-2 border-black">
                  <div className="left w-full lg:w-[40%] p-5 md:p-[40px] h-full items-center flex-col flex justify-center">
                    <div className="txt flex flex-col items-center justify-center">
                      <p className="text-[30px] font-bold text-center mt-3">
                        聯繫Jeek-極客網頁設計
                      </p>
                      <span className="text-[14px] mt-[60px] border border-black   bg-white  p-8">
                        如果您聯繫我並無即時收到回覆，請耐心等候。Jeek會盡快回覆您！！！
                      </span>
                      <div className="flex  justify-center items-center">
                        <a
                          href="/terms"
                          data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                          className="button-wrapper  w-inline-block mb-5 mt-4"
                        >
                          <div className="button-layout">
                            <p className="button-text" style={{}}>
                              合作須知
                            </p>
                            <div className="button-bg" style={{}} />
                          </div>
                          <div className="button-icon-block">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="button-icon"
                              style={{}}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="right w-full lg:w-[60%] border  h-full overflow-y-scroll py-10">
                    <div className="from flex justify-center items-center  overflow-y-scroll   h-auto bg-white p-[10px] lg:p-[40px] border-black-rgba  ">
                      <NewsletterForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();