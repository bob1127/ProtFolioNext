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

// import GsapText from "../components/RevealText/index";

import Marquee from "react-fast-marquee";
import React from "react";
import Script from "next/script";
import Head from "next/head";
// import DragCaroudelSlider from "../../components/DragCarouselSlider/page.jsx";
import { NextSeo } from "next-seo";

import GsapText from "../../components/RevealText/index";
import SwiperScroll from "../../components/SwiperScroll/page.jsx";
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
      {/* <Head>
        <meta property="og:title" content="關於我們-極客網頁設計" />
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
      </Head> */}
      <NextSeo
        title="關於極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        description="專業的網頁設計與SEO優化服務，靈活的自由接案者提供客製化解決方案，讓您的網站脫穎而出。聯繫我們，讓我們幫助您提升品牌形象，實現業務目標！
"
        openGraph={{
          title:
            "關於極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
          description:
            "專業的網頁設計與SEO優化服務，靈活的自由接案者提供客製化解決方案，讓您的網站脫穎而出。聯繫我們，讓我們幫助您提升品牌形象，實現業務目標！",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png",
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
        className="bg-white z-[99999] p-0 md:p-[30px] m-5 sm:p-0 absolute w-[95%]  sm:w-[500px] border-2 border-black rounded-xl"
      >
        <ModalContent>
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
      <div>
        <div id="webpage" className="page-wrapper">
          <main className="main">
            <section className="Hero-title px-[10px] md:px-[70px] pt-[90px] md:pt-[150px] py-6 ">
              <div className="container duration-500  bg-[#15a4fd]  border-2 border-gray-900 rounded-2xl overflow-hidden  h-[40vh] md:h-[85vh] xl:h-[90vh] 2xl:h-[65vh] flex justify-start flex-col items-center">
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
              <div className="w-full xl:w-[80%]   mt-[40px] mx-auto  xl:text-[18px] text-[16px] leading-[32px] font-normal border bg-white border-black rounded-xl  md:p-[30px] p-[20px]  xl:p-[50px] text-center  text-[#171717] ">
                HELLO！我是一位懷抱夢想的網頁接案者，開始了自由接案的路程，
                上一份工作任職於一家化學生技公司創業基地擔任"網頁工程師 一職"
                主要負責網頁的維護和seo優化，擅長前端效能優化 結構化資料、
                所以公司網頁的設計和商品拍攝影片剪輯SEO的優化
                都是由我完成，但這也讓我學習不同的技能。而我秉持的觀念也是不斷精進
                我是一個追求理想和目標的人 希望有理想、想法
                、和目標想要讓公司網頁更好的客戶 與我聯繫。
                能跟你們合作，為您服務 讓我的專業能讓您的 業務更上一層
                如果有任何想法請跟我 聯絡
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
                      <p className="w-4/5 text-center text-[20px] mt-3">
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
              className="mt-0 pt-[90px] bg-gray-100 md:mt-[100px] mx-[20px] md:px-0"
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
                <GsapText
                  text=' "為什麼要選擇FreeLancer" '
                  lineHeight="70px"
                  id="text2"
                  fontSize="60px"
                />
                {/* "為什麼要選擇自由接案者？" */}
              </h2>
              <p className="text-[16px]  mt-4 md:w-[80%] w-full xl:w-[60%] mx-auto px-[30px] leading-[32px] text-center ">
                {" "}
                freelancer 比起設計公司，更有時間處理您的專案。
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
                。
              </p>
              <p className="text-center mb-[60px] mt-[30px]  xl:text-[22px] md:text-[26px] text-[15px] ">
                選擇JEEK 幫助您實現創意發想
              </p>
              <section className="section-carousel  bg-gray-100  flex-col   px-0 xl:px-[70px] md:flex-row flex ">
                <div className="left-txt flex-col flex justify-start items-center  w-full mt-5 md:w-[30%]">
                  <div>
                    <h2
                      data-aos="fade-flur"
                      className="text-[#1c2fd5] text-center leading-[90px] xl:text-[100px] md:text-[60px] text-[40px] font-extrabold"
                    >
                      靈活性
                    </h2>
                    <h2 className="text-[#222222] text-center md:leading-[40px] xl:leading-[60px] xl:text-[70px] md:text-[40px] text-[32px] font-extrabold">
                      Flexibility
                    </h2>
                    <p className="text-[16px]  w-[90%]  xl:w-full       mx-auto text-center mt-3">
                      根據客戶的時間表和需求快速調整工作安排，適應變化。
                    </p>
                  </div>
                  <a
                    href="/Contact"
                    className="bg-[#1c2fd5] mt-3 duration-200 text-[18px] rounded-md text-white inline-block shadow-blue-800 hover:scale-95 shadow-xl text-center py-3 mb-5 w-[140px]"
                  >
                    Contact
                  </a>
                </div>
                <div className="img mt-4 xl:mt-0 xl:my-0  mb-0 xl:mb-[30px] w-full md:w-[40%] overflow-hidden">
                  <Image
                    src="/images/自由工作接案者-極客網頁設計.png"
                    alt="自由接案工作者-freeLancer-極客網頁設計"
                    placeholder="empty"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    width={600}
                    height={600}
                  ></Image>
                </div>
                <div className="right-txt flex flex-col justify-start items-center w-full mt-5 md:mt-0 md:w-[30%]">
                  <div>
                    <h2
                      data-aos="fade-flur"
                      className="text-[#1c2fd5] text-center leading-[90px] xl:text-[100px] md:text-[60px] text-[40px] font-extrabold"
                    >
                      一對一
                    </h2>
                    <h2 className="text-[#222222] text-center md:leading-[40px] xl:leading-[60px] xl:text-[70px] md:text-[40px] text-[32px] font-extrabold">
                      One By One
                    </h2>
                    <p className="text-[16px]  w-[90%] mx-auto      md:w-full text-center mt-3">
                      直接與客戶溝通，提供專注且個性化的服務。
                    </p>
                  </div>
                  <a
                    href="/Contact"
                    className="bg-[#ffffff] mt-3 duration-200 text-[18px] rounded-md text-black border border-black  inline-block shadow-gray-100 hover:scale-95 shadow-xl text-center py-3 w-[140px]"
                  >
                    Contact
                  </a>
                </div>
              </section>
            </section>
            {/* <Carousel04 /> */}

            <section className="section relative">
              <div className="container">
                <div className="padding small-paddings">
                  <div className=" ">
                    <div
                      className="vertical-flex flex flex-col justify-center items-center with-small-gap plans-wrap "
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
              <div className="flex p-[30px] justify-center pb-6">
                <b className="mx-auto text-[18px]">
                  * 以下方案都包含 1. 第一年 網域和主機費用(除非有特殊要求){" "}
                  <br></br> 2. GA google tag manager 串接 <br></br>{" "}
                  3.基本網頁就夠
                  <br></br>
                  <p className="text-[16px]">
                    有權決定最終方案價格，所以 匯款
                    資訊及合約表特可以看關於我裡面 資訊
                  </p>
                  <p>關於我們聯絡表單可以跟我們說</p>
                </b>
              </div>
            </section>

            <section className="section-plan">
              <div className="flex md:flex-row flex-wrap justify-center items-start mt-10  flex-row">
                <div
                  className="border py-[60px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex  relative justify-center flex-col items-center mx-4"
                  data-aos="fade-blur"
                >
                  <p>Basic</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] w-[120px] font-bold text-white bg-blue-500 border border-black">
                    NT 35,000 <div>｜</div> NT55,000
                  </div>
                  <h3 className="text-[40px]">基本網站</h3>

                  <div className="plan-content mt-5">
                    <p className="mt-4">基本網頁版型設計</p>
                    <p className="mt-4">形象照片攝影拍攝</p>
                    <p className="mt-4">企業形象照片</p>
                    <p className="mt-4">基本seo優化</p>

                    <div className="flex mt-5 bg-blue-700 text-white flex-wrap  gap-3">
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
                  className="border py-[60px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex  relative justify-center flex-col items-center mx-4"
                  data-aos="fade-blur"
                >
                  <p className="font-bold">Landing Page</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] w-[120px] font-bold text-white bg-blue-500 border border-black">
                    NT 50,000 <br></br>up
                  </div>
                  <h3 className="text-[40px]">一頁式網站</h3>

                  <div className="plan-content mt-5">
                    <p className="mt-4">CMS內容管理系統</p>
                    <p className="mt-4">動態特效</p>
                    <p className="mt-4">基本seo優化</p>
                    <p className="mt-4">客製化設計</p>
                    <div className="flex mt-5 bg-blue-700 text-white flex-wrap  gap-3">
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
                  className="border py-[60px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex relative justify-center flex-col items-center mx-4"
                  data-aos="fade-blur"
                >
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] w-[120px] font-bold text-white bg-blue-500 border border-black">
                    找我聊聊
                  </div>
                  <p>E-Coomerce</p>
                  <h3 className="text-[40px]">購物網站</h3>
                  {/* <p className="text-[20px]">
                    價格： <span className="font-extrabold">20000up</span>
                  </p> */}

                  <div className="plan-content mt-5">
                    <p className="mt-4">客製化網站規劃與設計</p>
                    <p className="mt-4">包含基本商品去背上架</p>
                    <p className="mt-4">商品後製精修圖</p>
                    <p className="mt-4"> 商品 形象 Banner</p>
                    <p className="mt-4">公司形象(產品)影片拍攝</p>

                    <div className="flex mt-5 bg-blue-700 text-white flex-wrap  gap-3">
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
                  className="border py-[60px] px-[40px] bg-white border-black rounded-md my-4 flex relative w-[400px]  justify-center flex-col items-center mx-4"
                  data-aos="fade-bur"
                >
                  <p>Customized</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px] flex flex-col justify-center items-center  h-[120px] w-[120px] font-bold text-white bg-blue-500 border border-black">
                    跟我談談
                  </div>
                  <h3 className="text-[40px]">客製化網站</h3>
                  {/* <p className="text-[20px]">
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
                    <div className="flex bg-blue-700 mt-5 text-white flex-wrap  gap-3">
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

            <section className="bg-gray-100  py-[70px] px-[20px] flex flex-col ">
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
                      href="/Contact"
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
            </section>

            <a href="/Contact" className="text-[20px]">
              實際價格可以再討論 請聯繫我
            </a>
          </main>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
