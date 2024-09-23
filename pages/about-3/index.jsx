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
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

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
    <div className="" data-aos="fade-up">
      <NextSeo
        title="關於極客-網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 高CP網站｜你的創意，我來實踐"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "極客網頁設計｜JEEK WEBDESIGN - 你的創意，我來實踐",
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
              <div className="container duration-500  bg-[#15a4fd]  border-2 border-gray-900 rounded-2xl overflow-hidden  h-[60vh] md:h-[85vh] xl:h-[90vh] 2xl:h-[65vh] flex justify-start flex-col items-center">
                <div className="sign flex py-2 sm:py-[40px] justify-center">
                  <div className="border flex justify-center items-center border-gray-500 bg-white rounded-[30px] w-full px-8 py-3">
                    💡致力於開發使用者體驗良好的網站
                  </div>
                </div>
                <div className="title "></div>
                <main className="h-full w-full relative ">
                  <div className="z-[99999]   w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 main-title absolute">
                    <h1 className="block text-white sm:hidden tex-[32px] md:text-[45px] lg:text-[60px] xl:text-[80px] font-black text-center  leading-[40px] xl:leading-[80px]">
                      WEBSITE DESIGN - JEEK
                    </h1>
                    <RevealLinks />

                    <div className="w-full md:w-[490px] text-[14px] xl:text-[16px]  font-normal p-0 xl:p-0 xl:bg-transparent text-center leading-normal text-[#ffffff] mx-auto">
                      HELLO！我是一位懷抱夢想的網頁接案者，開始了自由接案的路程，
                      本來是 在一家化學生技公司創業基地擔任"網頁工程師 一職"
                      因為負責都是新創公司
                      所以公司網頁的設計和商品拍攝影片剪輯SEO的優化
                      都是由我完成，但這也讓我學習不同的技能。而我秉持的觀念也是不斷精進
                      雖然我的網頁作品不多 但我忍為我的技術已可以
                      為客戶帶來收益。我是一個追求理想和目標的人
                      希望有理想、想法 、和目標想要讓公司網頁更好的客戶
                      與我聯繫。
                    </div>
                  </div>
                  <div className="box01  hidden lg:block z-1 top-[100px] absolute left-[-260px] border border-black">
                    <img
                      className="w-[500px]"
                      src="https://cdn.prod.website-files.com/669e85bc7c10a1b210e2fcd6/66abf8b62e53dbfa5fc2e5a0_hero-video-optimized.avif"
                      alt=""
                    />
                    <img
                      className="w-[260px] ml-[290px] mt-[40px]"
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="box02 hidden lg:block absolute top-[220px] right-[-200px]">
                    <img
                      className="w-[260px] mt-[-170px] ml-[190px]"
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg"
                      alt=""
                    />
                    <img
                      className="w-[400px]"
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64575947bc71a0cf995a7b34_JEubAaiocBrAyYwOH51Q-ctbfZTy_wnJ_BaDpn7swZc.jpeg"
                      alt=""
                    />
                  </div>
                </main>
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
                      <h4 className="text-[40px] font-light text-black">
                        免費基本SEO 優化
                      </h4>
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

            <section className="mt-0 md:mt-[100px] mx-[20px] md:px-0" id="free">
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
              <p className="text-center text-[16px] xl:text-[22px] md:text-[26px] ">
                選擇JEEK 幫助您實現創意發想
              </p>
              <section className="section-carousel  flex-col mt-0 md:mt-10  px-0 xl:px-[70px] md:flex-row flex mb-[50px]">
                <div className="left-txt flex-col flex justify-start items-center  w-full mt-5 md:w-[30%]">
                  <div>
                    <h2 className="text-[#1c2fd5] text-center leading-[90px] xl:text-[100px] md:text-[60px] text-[40px] font-extrabold">
                      靈活性
                    </h2>
                    <h2 className="text-[#222222] text-center md:leading-[40px] xl:leading-[60px] xl:text-[70px] md:text-[40px] text-[32px] font-extrabold">
                      Flexibility
                    </h2>
                    <p className="text-[16px]  xl:w-full w-2/3  mx-auto text-center mt-3">
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
                  <img
                    className="w-full "
                    src="https://www.avatarz.design/assets/images/image15.jpg?v=7b7356d5"
                    alt=""
                  />
                </div>
                <div className="right-txt flex flex-col justify-start items-center w-full mt-5 md:mt-0 md:w-[30%]">
                  <div>
                    <h2 className="text-[#1c2fd5] text-center leading-[90px] xl:text-[100px] md:text-[60px] text-[40px] font-extrabold">
                      一對一
                    </h2>
                    <h2 className="text-[#222222] text-center md:leading-[40px] xl:leading-[60px] xl:text-[70px] md:text-[40px] text-[32px] font-extrabold">
                      One By One
                    </h2>
                    <p className="text-[16px] mx-auto w-2/3 md:w-full text-center mt-3">
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
            {/* <section></section>
              <p>客製化網站跟套版網站比較</p>
              <div className="container"></div>
            </section> */}
            <section className="section">
              <div className="container">
                <div className="padding small-paddings">
                  <div className=" ">
                    <div
                      className="vertical-flex with-small-gap plans-wrap "
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
                    <div
                      data-aos="fade-up"
                      className="jobs"
                      style={{ display: "flex", padding: 0 }}
                    >
                      <div
                        id="w-node-_9d02a341-146a-d088-349b-f68535a2ecdc-35a2ecda"
                        className="job-card mx-0"
                        srtyle="width:400px; display:flex; flex-direction:column"
                      >
                        <p className="job-card-role">套版網站(NT.35000)</p>

                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item  text-[20px] font-bold">
                              首頁+分頁五頁
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                現成模板選擇：
                              </span>
                              <p className="text-[16px]">
                                從我們的模板庫中選擇符合需求的現成設計。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                基本功能配置：
                              </span>
                              <p className="text-[16px]">
                                包括聯絡表單、基本 SEO 設置、社交媒體集成等。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                基本網頁圖片：
                              </span>
                              <p className="text-[16px]">
                                基本產品圖 ｜ 形象圖 ｜ Hero Image
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                預設設計風格：
                              </span>
                              <p className="text-[16px]">
                                根據選擇的模板風格進行色彩和圖片的調整。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                含首年度主機空間＋網域
                              </span>
                              <p className="text-[16px]">如有需求可在加購</p>
                            </p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">方案一</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$200,000 per year</p>
                </div>
              </div> */}
                        <div
                          className="job-card-link-flex"
                          style={{
                            background: "rgb(115, 208, 102)",
                            color: "white",
                          }}
                        >
                          <p className="simple-link">
                            <div className="flex flex-wrap  gap-3">
                              {backdrops.map((b) => (
                                <Button
                                  key={b}
                                  variant="flat"
                                  color="warning"
                                  onPress={() => handleOpen(b)}
                                  className="capitalize"
                                >
                                  {b}
                                </Button>
                              ))}
                            </div>
                          </p>
                        </div>
                        {/* <div style="height: 400px;">
                Title
              </div> */}
                      </div>
                      <div
                        id="w-node-_01078e3d-0c2e-e80d-0be2-5a38ca83ccf4-35a2ecda"
                        className="job-card mx-0 md:mx-4  bg-blue-200"
                      >
                        <p className="job-card-role">客製化網站(NT.80000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                電子商務功能：
                              </span>
                              <p className="text-[16px]">
                                購物車、結帳系統和金流串接。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                響應式設計：
                              </span>
                              <p className="text-[16px]">
                                確保網站在各種設備上良好顯示，並支持移動設備購物。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                SEO 和行銷工具：
                              </span>
                              <p className="text-[16px]">SEO 優化和行銷工具</p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                含首年度主機空間+網域:
                              </span>
                              <p className="text-[16px]"></p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                可以需求客製化
                              </span>
                              <p className="text-[16px]">
                                可依顧客需求客製化版面
                              </p>
                            </p>
                          </div>
                        </span>

                        <div className="job-card-link-flex">
                          <p className="simple-link">
                            <div className="flex flex-wrap  gap-3">
                              {backdrops.map((b) => (
                                <Button
                                  key={b}
                                  variant="flat"
                                  color="warning"
                                  onPress={() => handleOpen(b)}
                                  className="capitalize"
                                >
                                  {b}
                                </Button>
                              ))}
                            </div>
                          </p>
                        </div>
                      </div>
                      <div
                        id="w-node-_90fc4fc9-5875-a940-a16d-30733a08bafa-35a2ecda"
                        className="job-card mx-0"
                      >
                        <p className="job-card-role">購物網站(NT.60000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                電子商務功能：
                              </span>
                              <p className="text-[16px]">
                                包括產品目錄、購物車、結帳系統和支付閘道集成。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                響應式設計：
                              </span>
                              <p className="text-[16px]">
                                確保網站在各種設備上良好顯示，並支持移動設備購物。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                SEO 和行銷工具：
                              </span>
                              <p className="text-[16px]">
                                內建 SEO 優化和行銷工具，如優惠券、促銷活動等。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                含首年年度維護與主機空間:
                              </span>
                              <p className="text-[16px]">
                                內建 SEO 優化和行銷工具，如優惠券、促銷活動等。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              可依需求客製化功能
                            </p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">Remote or office</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$180,000 per year</p>
                </div>
              </div> */}
                        <div className="job-card-link-flex">
                          <p className="simple-link">
                            <div className="flex flex-wrap  gap-3">
                              {backdrops.map((b) => (
                                <Button
                                  key={b}
                                  variant="flat"
                                  color="warning"
                                  onPress={() => handleOpen(b)}
                                  className="capitalize"
                                >
                                  {b}
                                </Button>
                              ))}
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pb-6">
                <b className="mx-auto text-[16px]">
                  *方案價格皆為大約估算，實際可討論詳談
                </b>
              </div>
            </section>

            <section className="bg-gray-100  py-[70px] px-[20px] flex flex-col ">
              <div className="flex justify-center w-full">
                <div className="title  mb-6 ">
                  <h2 className="text-[40px]  text-black font-extrabold">
                    <GsapText
                      text=' " 網頁設計流程" '
                      lineHeight="70px"
                      id="text4"
                      fontSize="60px"
                    />
                  </h2>
                  <p className="text-[14px]">
                    您可以跟我們溝通需求，並確認流程
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
