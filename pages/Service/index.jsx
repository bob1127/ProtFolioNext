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
// import threeDCarousel from "../../components/ThreeDCarousel/page.jsx";
import { NextSeo } from "next-seo";
import SwiperHero from "../../components/SwiperHero/index.jsx";
import Marquee from "react-fast-marquee";
import React from "react";
import Script from "next/script";
import Head from "next/head";
import GsapText from "../../components/RevealText/index";
import DragCaroudelSlider from "../../components/DragCarousel/index.jsx";
import SwiperScroll01 from "../../components/SwiperScroll01/page.jsx";
import BannerSwiper from "../../components/BannerSwiper/page.jsx";
import SpringModal from "../../components/SpringModal/page.jsx";
import SwiperScroll from "../../components/SwiperScroll/page.jsx";
import { useState, useEffect } from "react";
import Link from "next/link.js";
import VanishList from "../../components/VanishList/page.jsx";
import RevealLinks from "../../components/RevealLinks/page.jsx";
// import Inner from "../../components/Inner/index.jsx";
import Image from "next/image.js";
import Carousel05 from "../../components/EmblaCarousel05/index.jsx";
import dynamic from "next/dynamic";
import Carousel04 from "../../components/EmblaCarousel04/EmblaCarousel.jsx";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function Blog() {
  const webpage = {
    name: "我們提供的服務-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
    description:
      "極客網頁設計提供高效能的無頭網站解決方案，結合 Next.js 和 WordPress，讓您的網站不僅快速、SEO友好，還具備高度靈活性。利用PageSpeed Insights優化網站速度，提升搜尋引擎排名，並透過3D交互式設計提升用戶體驗。這些現代化設計不僅能增加網站的吸引力，還能幫助提高轉換率和品牌形象，降低營銷成本，實現業務增長。",
    url: "https://www.jeek-webdesign.com.tw/terms",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "jeekdesign@gmail.com",
    },
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
    <div data-aos="fade-up">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="我們提供的服務-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        />
        <meta
          property="og:description"
          content="極客網頁設計提供高效能的無頭網站解決方案，結合 Next.js 和 WordPress，讓您的網站不僅快速、SEO友好，還具備高度靈活性。利用PageSpeed Insights優化網站速度，提升搜尋引擎排名，並透過3D交互式設計提升用戶體驗。這些現代化設計不僅能增加網站的吸引力，還能幫助提高轉換率和品牌形象，降低營銷成本，實現業務增長。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png"
        />
        <meta
          property="og:url"
          content="https://www.jeek-webdesign.com.tw/service"
        />
        <meta property="og:type" content="website" />
      </Head>
      <NextSeo
        title="我們提供的服務-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        description="極客網頁設計提供高效能的無頭網站解決方案，結合 Next.js 和 WordPress，讓您的網站不僅快速、SEO友好，還具備高度靈活性。利用PageSpeed Insights優化網站速度，提升搜尋引擎排名，並透過3D交互式設計提升用戶體驗。這些現代化設計不僅能增加網站的吸引力，還能幫助提高轉換率和品牌形象，降低營銷成本，實現業務增長。"
        openGraph={{
          title:
            "我們提供的服務-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
          description:
            "極客網頁設計提供高效能的無頭網站解決方案，結合 Next.js 和 WordPress，讓您的網站不僅快速、SEO友好，還具備高度靈活性。利用PageSpeed Insights優化網站速度，提升搜尋引擎排名，並透過3D交互式設計提升用戶體驗。這些現代化設計不僅能增加網站的吸引力，還能幫助提高轉換率和品牌形象，降低營銷成本，實現業務增長。",
          images: [
            {
              url: "https://www.example.com/images/我們提供的服務-極客網頁設計.png",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "alternate",
            hrefLang: "zh-TW",
            href: "https://www.example.com/tw", // 設定台灣地區的 URL
          },
          {
            rel: "alternate",
            hrefLang: "en-US",
            href: "https://www.example.com/us", // 設定美國地區的 URL
          },
          {
            rel: "alternate",
            hrefLang: "x-default",
            href: "https://www.example.com", // 預設語言版本
          },
        ]}
        additionalMetaTags={[
          {
            name: "geo.region",
            content: "TW-TXG", // 台中地區代碼
          },
          {
            name: "geo.placename",
            content: "Taichung", // 台中市
          },
          {
            name: "geo.position",
            content: "24.1477;120.6736", // 台中的經緯度
          },
          {
            name: "ICBM",
            content: "24.1477, 120.6736", // 與 geo.position 相同
          },
        ]}
      />
      <div>
        <div id="webpage" className="page-wrapper">
          <div className="pt-[30px]">
            <SwiperHero />
          </div>
          <main className="main">
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

            {/* 
            <section id="explore" className="section with-borders">
              <section className="section is-3d-content-section">
                <div className="container">
                  <div className="_3d-content-padding">
                    <div className="_3d-block" style={{}}>
                      <div className="_3d-content-image" style={{}}>
                        <div className="reveal-image-trigger">
                        
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
            </section> */}

            {/* <div className="service-hero-section mt-[-600px]">
              <section className=" mt-[30px]  z-[999] bg-[#e3e3e3] pt-[100px] h-[135vh]">
                <div className="absolute top-[60%] sm:px-[30px] px-[10px] md:px-[70px] xl:px-[100px] left-[22%] w-2/3 z-[999] ">
                  <Carousel05 />
                </div>
                <div className="relative relative">
                  <div className="drag-circle absolute items-center flex justify-center z-[999999] left-[40%] bg-black w-[60px] h-[60px] rounded-full text-white  text-[20px] font-bold">
                    Dtag
                  </div>

                  <div className="circle bg-[#f5f3f0] z-[1] top-[-100px] absolute left-[30%] rounded-full w-[700px] h-[700px]"></div>
                  <div className="absolute w-full  left-0 top-0 z-[9]">
                    <iframe
                      src="https://my.spline.design/untitled-e17fbea8704fb0489b816ed0e8953c2b/"
                      frameborder="0"
                      width="100%"
                      height="500px"
                    ></iframe>
                  </div>
                  <div className="left-txt z-[999] top-[40%] absolute left-[90px]">
                    <h1 className="text-[60px] mt-[200px] font-bold">
                      庫柏力克熊-限量版
                    </h1>
                    <p className="text-[26px] font-normal ">
                      Lorem, ipsum dolor sit
                    </p>
                    <a
                      href=""
                      className="bg-blue-900 inline-block w-[120px] py-3  mt-3 inline-block  text-white flex justify-center items-center  rounded-[30px]"
                    >
                      Nore
                    </a>
                  </div>
                  <div className="left-txt  z-[9999]  top-0 absolute right-[90px]">
                    <h1
                      data-aos="fade-up"
                      className="text-[30px] bg-blue-900 mt-[200px] font-bold text-white"
                    >
                      限量發售
                    </h1>
                    <p
                      data-aos-delay="300"
                      data-aos="fade-up"
                      className="text-[20px] font-normal "
                    >
                      Lorem, ipsum dolor sit
                    </p>
                    <h1
                      data-aos="fade-up"
                      className="text-[30px] bg-blue-900 mt-[10px] font-bold text-white"
                    >
                      現實搶購
                    </h1>
                    <p
                      data-aos-delay="300"
                      data-aos="fade-up"
                      className="text-[20px] font-normal "
                    >
                      Lorem, ipsum dolor sit
                    </p>

                    <a
                      href=""
                      className="bg-blue-900 inline-block w-[120px] py-3  mt-3 inline-block  text-white flex justify-center items-center  rounded-[30px]"
                    >
                      More
                    </a>
                  </div>
                </div>
              </section>
            </div> */}

            <Marquee>
              <div className=" bg-black flex w-[100vw] w-full py-[40px]">
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white font-black">
                  WEBSITE
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg"
                    alt=""
                    className="mx-3 w-[220px]"
                  />
                </div>
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white border-r border-[#b6b6b6] font-black">
                  SEO
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg"
                    alt=""
                    className="mx-3 w-[220px]"
                  />
                </div>
                <div className="text-[20px] border-r border-[#b6b6b6] md:text-[30px] lg:text-[60px] mx-5  text-white font-black">
                  PHOTOGRAPHY
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg"
                    alt=""
                    className="mx-3 w-[220px]"
                  />
                </div>
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white border-r border-[#b0b0b0] font-black">
                  STAGE
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg"
                    alt=""
                    className="mx-3 w-[220px]"
                  />
                </div>
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white font-black">
                  STAGE
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg"
                    alt=""
                    className="mx-3 w-[220px]"
                  />
                </div>
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white font-black">
                  STAGE
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg"
                    alt=""
                    className="mx-3 w-[220px]"
                  />
                </div>
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white font-black">
                  STAGE
                </div>
                <div className="text-[20px] md:text-[30px] lg:text-[60px] mx-5  text-white font-black">
                  STAGE
                </div>
              </div>
            </Marquee>
            <section className="section">
              <div className="container">
                <div className="padding">
                  <div className="w-layout-grid about-content">
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                      className="about-grid-content"
                    >
                      <h2 className="heading is-medium-title">
                        "不要再認為自己的品牌做網頁行銷很花錢了！"
                      </h2>
                      <p className=" text-[16px] leading-normal text-left ">
                        許多人以為網站設計和行銷需要大筆預算才能有效，但 Jeek
                        的方案讓品牌在有限預算內也能脫穎而出。我們專為初創企業與中小型商家量身打造行銷策略，使行銷成為可負擔的投資。透過專業網站設計與
                        SEO
                        優化，快速提升品牌曝光度，吸引精準客群，助您實現銷售成長。
                      </p>
                    </div>

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <Image
                          src="/images/不要再以為網頁行銷很花錢了.png"
                          alt="不要再以為網頁行銷很花錢了"
                          placeholder="empty"
                          loading="lazy"
                          width={1300}
                          height={1300}
                        ></Image>
                        <div
                          className="bg-for-animation"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <div className="about-grid-image">
                      <div className="reveal-image-trigger">
                        <Image
                          src="/images/fantastic_hare_36410__in_office_ba72e105-06e2-4e9a-a51b-5baa01d260d4.png"
                          loading="lazy"
                          height={1000}
                          width={1000}
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
                      className="about-grid-content"
                    >
                      {/* <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div> */}
                      <h2 className="heading is-medium-title">
                        "工作室，彈性更高，效率更高"
                      </h2>
                      <div className="flex items-start flex-col ">
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]">成本效益高</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            由於沒有大型團隊和高額管理費用，網頁工作室能夠提供更具競爭力的價格，讓您以較低的預算獲得專業的網站設計。
                          </p>
                        </div>
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]">專注度高</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            網頁工作室通常同時承接的項目較少，這意味著他們能夠更加專注於您的項目，投入更多的時間和精力，確保高品質的完成。
                          </p>
                        </div>
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]">靈活性強</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            作為網頁工作室，我們能夠迅速響應您的要求，並且在設計過程中更加靈活，隨時根據您的反饋進行調整，確保項目順利進行
                          </p>
                        </div>
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]">溝通便捷</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            您將直接與設計師溝通，避免了中間人傳遞信息的誤差和延誤，使得整個設計過程更加高效且準確。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="services" className="section">
              <a
                data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                className="fullwidth-link text-black w-inline-block"
                style={{}}
                href="/contact"
              >
                <h2
                  data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfda"
                  className="heading is-fullwidth-title"
                  style={{
                    transform:
                      "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                >
                  提供服務
                </h2>
                <br />
                <br />
                <div className="rounded-[30px] bg-[#333] text-[20px] text-white inline-block p-3">
                  (網頁設計｜產品攝影建模｜SEO優化)
                </div>
                <div
                  data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfdc"
                  className="circle-button"
                  style={{
                    transform:
                      "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                >
                  <div className="circle-button-bg" style={{}} />
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="circle-button-icon"
                    style={{}}
                  />
                </div>
                <div className="fullwidth-link-bg" style={{}} />
              </a>
            </section>
            <section className="section">
              <div className="container">
                <div className="padding">
                  <div className="w-layout-grid about-content">
                    <div className="about-grid-image">
                      <div className="reveal-image-trigger">
                        <SwiperScroll01 />
                        {/* <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image06.jpg?v=7b7356d5"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          srcSet="
                                        
                                      "
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

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                      className="about-grid-content"
                    >
                      {/* <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div> */}

                      {/* </h2> */}

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
                    src="/images/3d產品模型01-極客網頁設計_Blender3D-removebg-preview.png"
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
                    src="/images/3d產品模型07-極客網頁設計|Blender3D.webp"
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
            <section className="section mt-[80px]">
              <div className="container">
                <div className="padding">
                  <div className="w-layout-grid about-content">
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                      className="about-grid-content"
                    >
                      <h2 className="heading is-medium-title">
                        "商業/產品攝影"
                      </h2>

                      <p className=" text-[16px] leading-normal text-left ">
                        <h3>為什麼產品攝影對於網頁設計很重要？</h3>
                        在數位時代，產品攝影不僅僅是展示商品，更是吸引顧客的關鍵。想像一下，當你進入一個網頁，看到的第一眼就是高質感的產品圖片，這不僅能立即抓住你的注意力，還能提升你對品牌的信任感。好的產品攝影能清晰展示細節、顯示產品的實際效果，讓顧客感受到真實的購買體驗。這種視覺上的吸引力直接影響購買決策，讓你的產品在眾多競爭對手中脫穎而出。所以，投資高品質的產品攝影，是提升網頁設計效果的明智選擇！
                      </p>
                    </div>

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="/images/商業攝影_產品_banner-極客網頁設計.webp"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          className="cover-image"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                        <div
                          className="bg-for-animation"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <div className="about-grid-image">
                      <div className="reveal-image-trigger">
                        {/* <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image06.jpg?v=7b7356d5"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          srcSet="
                                        
                                      "
                          className="cover-image"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        /> */}
                        {/* <iframe
                          src="https://my.spline.design/iphone14procopy-fdd3e2365e4a03f380783eb3384cb838/"
                          frameborder="0"
                          width="100%"
                          height="800"
                        ></iframe> */}
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
                      className="about-grid-content"
                    >
                      {/* <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div> */}
                      {/* <h2
                        className="heading is-medium-title"
                        data-aos="fade-up"
                      >
                        "移動設備體驗優化 "
                      </h2> */}
                      <GsapText text=' "移動設備體驗優化" ' id="text1" />
                      <div className="flex items-start flex-col ">
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px] leading-normal">
                            1. 移動優先索引（Mobile-First Indexing）
                          </b>
                          <p className="text-left leading-normal mt-3">
                            - Google 目前使用{" "}
                            <span className="bg-[#fad335]">
                              「移動優先索引」
                            </span>
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
                    <div className="container">
                      <div className="padding">
                        <div className="w-layout-grid about-content">
                          <div
                            id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                            className="about-grid-content"
                          >
                            {/* <h2 className="heading is-medium-title">
                        "網頁結構優化"
                      </h2> */}
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
                              結構化數據
                              <div className="flex items-start flex-col">
                                <b className="mt-2 text-[18px] font-extrabold">
                                  添加結構化數據標記 (Schema.org)：
                                </b>
                                <p className="text-[14px] text-left">
                                  幫助搜索引擎更好地理解網站內容，提升網站在搜索引擎結果頁面
                                  (SERP) 中的展示效果，如豐富摘要 (Rich
                                  Snippets)。
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
                                src="/images/fantastic_hare_36410_Web_page_structure_optimization_._890fced3-3b5d-40d8-b509-e2ae72356184.png"
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
            {/* <div className="h-[100vh] bg-green-300">
              <threeDCarousel />
            </div> */}

            {/* <section className="bg-blue-700 my-[50px] py-[80px]">
              <div className="txt flex flex-col justify-center items-center">
                <h1 className="text-white text-center text-[60px]">
                  歡迎聯繫我
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero accusantium eaque ipsum culpa porro. Ab minima
                  consectetur recusandae facilis, omnis nemo maxime quis illum
                  ad. Provident sint sunt ex debitis.
                </p>
              </div>
            </section> */}
            <section className="marketing ">
              <div className="Title flex flex-col justify-center items-center w-full px-[26px] lg:w-2/3 mx-auto">
                {/* <h2 className="heading is-medium-title text-center">
                  "對於增加網路曝光度，<br></br>我該如何選擇我的行銷方式"
                </h2> */}

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
                    <div className="img-wrap rounded-2xl overflow-hidden">
                      <div className="img-wrap rounded-2xl overflow-hidden">
                        <Lottie
                          options={defaultOptions}
                          height={400}
                          width={400}
                        />
                      </div>
                      {/* <iframe
                        src="https://my.spline.design/hands3duicopy-70ff0d7fc77708d58279d2e35d8b3771/"
                        frameborder="0"
                        width="100%"
                        height="240px"
                      ></iframe> */}
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

            <section className="w-full flex flex-col xl:flex-row justify-center px-[30px]  py-[20px] md:py-[80px]  lg:px-[50px]  xl:px-[70px] 2xl:px-[100px]">
              <div className="w-full  xl:w-[40%] p-[10px] xl:p-[40px]">
                <div className="txt">
                  <div className="logo pl-[20px]">
                    <b className="font-bold text-[30px]">JEEK</b>
                  </div>
                  <div className="bottom " data-aos="fade-up">
                    <p className="text-[12px] font-bold">Design by Website</p>
                    {/* 

                    <h3 className="text-[30px] xl:text-[40px] mt-[40px] leading-normal font-extrabold">
                      使用 3D 模型製作網頁橫幅和產品圖的好處
                    </h3> */}

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
              <div className="w-full  flex-col pt-10 flex  justify-center items-center  xl:w-[60%]">
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
            </section>
            <section className="w-full  px-[15px] xl:px-[100px] xl:flex-row mt-[100px] pb-[100px] flex-col flex">
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
                <h4 className="text-[40px] font-light text-black leading-normal">
                  網頁SEO很重要嗎？
                </h4>

                <p className=" text-[16px] mt-3">
                  在當今數位時代，擁有一個專業、美觀的網站只是成功的第一步。然而，無論網站設計得多麼出色，如果它在搜尋引擎上沒有可見度，就無法有效吸引潛在客戶。這就是為什麼網頁SEO（搜尋引擎優化）至關重要的原因。
                </p>
              </a>
              <a
                href="/blog-02"
                className="xl:w-1/2 mt-5 w-full mr-4 
              
                
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
                <h4 className="text-[40px] leading-normal font-light text-black">
                  網頁設計其實沒有很花錢
                </h4>

                <p className="  font-bold text-[20px] mt-3">確認需求：</p>
                <div className="flex w-full  flex-col items-start">
                  <b className="mb-3 text-[14px] font-normal leading-normal">
                    在開始架設網頁之前，必須先確認好自己的網站需求。有些網頁公司會為您添加許多額外的功能或插件，結果卻發現這些功能用不上，還拖慢了網頁速度，增加了後續維護的困難。
                  </b>
                  <p className=" font-bold text-[20px] mt-3">
                    尋找合適的合作夥伴:
                  </p>
                  <b className="mb-3 text-[14px] font-normal leading-normal">
                    外包與兼職：如果需要專業協助，可以考慮聘請自由職業者或兼職設計師，他們通常比全職團隊更具成本效益。
                  </b>
                  {/* 
                  <Image
                    loader={imageLoader02}
                    width={700}
                    height={700}
                    loading="lazy"
                    placeholder="empty"
                    src="659c39bd34df1a7dc8eb9b82_Platz%201%20Auf%20der%20google%20suche.png"
                  /> */}
                </div>
              </a>
            </section>

            {/* <div className="border-3 border-black bg-[url('https://www.ultraehp.com/images/test-portfolio/banner0445.png')] h-[80vh] bg-cover bg-center "></div> */}
            {/* <div>
              <BannerSwiper />
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
