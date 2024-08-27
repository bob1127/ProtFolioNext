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
import Marquee from "react-fast-marquee";
import React from "react";
import Script from "next/script";
import Head from "next/head";
import DragCaroudelSlider from "../../components/DragCarouselSlider/page.jsx";
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

export default function Blog() {
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
    <>
      <div>
        <div id="webpage" className="page-wrapper">
          <main className="main">
            <section className="Hero-title px-[10px] md:px-[70px] pt-[90px] md:pt-[150px] py-6 ">
              <div className="container duration-500  bg-green-400  border-4 border-green-500 rounded-2xl overflow-hidden  h-[48vh] md:h-[85vh] xl:h-[90vh] 2xl:h-[65vh] flex justify-start flex-col items-center">
                <div className="sign flex py-2 sm:py-[40px] justify-center">
                  <div className="border flex justify-center items-center border-gray-500 bg-white rounded-[30px] w-full px-8 py-3">
                    💡致力於開發使用者體驗良好的網站
                  </div>
                </div>
                <div className="title "></div>
                <main className="h-full w-full relative ">
                  <div className="z-[99999]   w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 main-title absolute">
                    <h1 className="block sm:hidden tex-[32px] md:text-[45px] lg:text-[60px] xl:text-[80px] font-black text-center  leading-[40px] xl:leading-[80px]">
                      WEBSITE DESIGN - JEEK
                    </h1>
                    <RevealLinks />

                    <div className="w-full md:w-[490px] text-[14px] xl:text-[16px]  font-normal p-0 xl:p-0 xl:bg-transparent text-center leading-normal text-black mx-auto">
                      HELLO！Jeek
                      是一個網頁接案者創立的一個小小工作室，專注於幫助中小企業、餐飲業與美容業打造專屬網站的設計公司。我們相信，每個企業都有自己的風格和故事，而這些都應該在網站上得到最佳展現。不僅如此，我們還會特別注重網站的SEO優化，讓您的網站在搜尋引擎上更容易被找到，從而提升曝光度，吸引更多潛在客戶，最終增加收益。
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
            <div className="about-hero m-0 p-0">
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
                    <a
                      data-w-id="70be419f-58bd-64a7-48cc-18d3ea7f1d52"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      href="#explore"
                      className="simple-link is-explore"
                    >
                      了解更多
                    </a>
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
            {/* <section id="logos" className="section with-borders">
              <div className="padding small-paddings">
                <div
                  data-w-id="e8ad4759-879f-965a-e711-3a6051ba16a9"
                  className="logo-carousel"
                >
                  <div className="logo-carousel-block" style={{}}>
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf0f_logoipsum-256%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abefd_logoipsum-286%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf08_logoipsum-239%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf06_logoipsum-297%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf01_logoipsum-317%20(1).svg"
                      className="logo-carousel-image"
                    />
                  </div>
                  <div className="logo-carousel-block" style={{}}>
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf0f_logoipsum-256%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abefd_logoipsum-286%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf08_logoipsum-239%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf06_logoipsum-297%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf01_logoipsum-317%20(1).svg"
                      className="logo-carousel-image"
                    />
                  </div>
                </div>
              </div>
            </section> */}
            <Marquee>
              <div className=" bg-black flex w-[100vw] w-full py-[40px]">
                <div className="text-[60px] mx-5  text-white font-black">
                  SEO
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
                  WEBSITE
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
                  MARKETING
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
                  PHOTOGRAPHY
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
                  STAGE
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
                  STAGE
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
                  STAGE
                </div>
                <div className="text-[60px] mx-5  text-white font-black">
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
                        大家總是覺得，做網站和網頁行銷一定要花大錢才能有效果。但事實上，Jeek提供的方案，能讓您的品牌在預算內大放異彩！不論您是初創企業還是中小型商家，都可以為您量身打造專屬的網頁行銷策略，讓您的品牌在網路上脫穎而出。
                        <br></br> <br></br>
                        行銷不該是遙不可及的奢侈品，而是每一個有潛力的品牌都能負擔得起的投資。透過{" "}
                        <span className="bg-green-400">網站設計和SEO優化</span>
                        ，您不僅能快速提升品牌曝光度，還能吸引到精準的目標客群，最終實現銷售成長。
                      </p>
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
                            案例sample
                          </p>
                          <div className="button-bg" style={{}} />
                        </div>
                        <div className="button-icon-block">
                          <Image
                            src="三電線02.png"
                            placeholder="empty"
                            loading="lazy"
                            width={800}
                            height={800}
                            loader={imageLoader04}
                          />
                        </div>
                      </a>
                    </div>

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.ultraehp.com/images/test-portfolio/三電線02.png"
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
                        <img
                          className="w-[80%] mx-auto"
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.ultraehp.com/images/test-portfolio/三電線捲起.png"
                          srcSet="
                                        
                                      "
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
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                      className="about-grid-content"
                    >
                      {/* <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div> */}
                      <h2 className="heading is-medium-title">
                        "個人接案，彈性更高，效率更高"
                      </h2>
                      <div className="flex items-start flex-col ">
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]">成本效益高</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            由於沒有大型團隊和高額管理費用，個人接案者能夠提供更具競爭力的價格，讓您以較低的預算獲得專業的網站設計。
                          </p>
                        </div>
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]">專注度高</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            個人接案者通常同時承接的項目較少，這意味著他們能夠更加專注於您的項目，投入更多的時間和精力，確保高品質的完成。
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
                          <b className="text-[22px]">溝通便捷</b>
                          <p className="text-left leading-normal mt-3">
                            -
                            您將直接與設計師溝通，避免了中間人傳遞信息的誤差和延誤，使得整個設計過程更加高效且準確。
                          </p>
                        </div>
                      </div>
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
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
              </div>
            </section>
            <section className="section">
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
                        大家總是覺得，做網站和網頁行銷一定要花大錢才能有效果。但事實上，Jeek提供的方案，能讓您的品牌在預算內大放異彩！不論您是初創企業還是中小型商家，都可以為您量身打造專屬的網頁行銷策略，讓您的品牌在網路上脫穎而出。
                        <br></br> <br></br>
                        行銷不該是遙不可及的奢侈品，而是每一個有潛力的品牌都能負擔得起的投資。透過網站設計和SEO優化，您不僅能快速提升品牌曝光度，還能吸引到精準的目標客群，最終實現銷售成長。
                      </p>
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
                            案例sample
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

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image12.jpg?v=7b7356d5"
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
                        <iframe
                          src="https://my.spline.design/iphone14procopy-fdd3e2365e4a03f380783eb3384cb838/"
                          frameborder="0"
                          width="100%"
                          height="800"
                        ></iframe>
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
                      <h2
                        className="heading is-medium-title"
                        data-aos="fade-up"
                      >
                        "移動設備體驗優化 "
                      </h2>
                      <div className="flex items-start flex-col ">
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px] leading-normal">
                            1. 移動優先索引（Mobile-First Indexing）
                          </b>
                          <p className="text-left leading-normal mt-3">
                            - Google 目前使用{" "}
                            <span className="bg-green-400">
                              「移動優先索引」
                            </span>
                            ，這意味著 Google
                            搜索引擎主要基於網站的移動版本來進行索引和排名。因此，確保你的網站在移動設備上的表現是至關重要的。如果你的網站在桌面和移動設備上有不同的內容，Google
                            會優先考慮移動設備上的內容。
                          </p>
                        </div>
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]"> 頁面加載速度</b>
                          <p className="text-left leading-normal mt-3">
                            - Google
                            對頁面加載速度非常重視。移動設備的用戶對於緩慢加載的頁面容忍度較低。Google
                            的{" "}
                            <span className="bg-green-400">「頁面體驗」</span>
                            更新涵蓋了加載速度等因素，並將其納入排名考量。確保網站的加載速度快，特別是在移動設備上，可以使用工具如
                            <span className="bg-green-400">
                              Google PageSpeed Insights
                            </span>{" "}
                            來測試和改進頁面速度。
                          </p>
                          <img
                            className="w-full h-auto"
                            src="https://www.cloudways.com/blog/wp-content/uploads/Page-Speed-Insights-Field-Data.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
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
              </div>
            </section>
            <section className="section">
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
                        大家總是覺得，做網站和網頁行銷一定要花大錢才能有效果。但事實上，Jeek提供的方案，能讓您的品牌在預算內大放異彩！不論您是初創企業還是中小型商家，都可以為您量身打造專屬的網頁行銷策略，讓您的品牌在網路上脫穎而出。
                        <br></br> <br></br>
                        行銷不該是遙不可及的奢侈品，而是每一個有潛力的品牌都能負擔得起的投資。透過網站設計和SEO優化，您不僅能快速提升品牌曝光度，還能吸引到精準的目標客群，最終實現銷售成長。
                      </p>
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
                            案例sample
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

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image12.jpg?v=7b7356d5"
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
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.ultraehp.com/images/test-portfolio/v1017-05.jpg"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          srcSet="
                                        https://www.ultraehp.com/images/test-portfolio/v1017-05.jpg
                                      "
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
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                      className="about-grid-content"
                    >
                      {/* <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div> */}
                      <h2 className="heading is-medium-title">
                        "移動設備體驗優化 "
                      </h2>
                      <div className="flex items-start flex-col ">
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px] leading-normal">
                            1. 移動優先索引（Mobile-First Indexing）
                          </b>
                          <p className="text-left leading-normal mt-3">
                            - Google 目前使用{" "}
                            <span className="bg-green-400">
                              「移動優先索引」
                            </span>
                            ，這意味著 Google
                            搜索引擎主要基於網站的移動版本來進行索引和排名。因此，確保你的網站在移動設備上的表現是至關重要的。如果你的網站在桌面和移動設備上有不同的內容，Google
                            會優先考慮移動設備上的內容。
                          </p>
                        </div>
                        <div className="mb-6 flex flex-col items-start">
                          <b className="text-[22px]"> 頁面加載速度</b>
                          <p className="text-left leading-normal mt-3">
                            - Google
                            對頁面加載速度非常重視。移動設備的用戶對於緩慢加載的頁面容忍度較低。Google
                            的{" "}
                            <span className="bg-green-400">「頁面體驗」</span>
                            更新涵蓋了加載速度等因素，並將其納入排名考量。確保網站的加載速度快，特別是在移動設備上，可以使用工具如
                            <span className="bg-green-400">
                              Google PageSpeed Insights
                            </span>{" "}
                            來測試和改進頁面速度。
                          </p>
                          <img
                            className="w-full h-auto"
                            src="https://www.cloudways.com/blog/wp-content/uploads/Page-Speed-Insights-Field-Data.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
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
              </div>
            </section>
            <section className="marketing ">
              <div className="Title flex flex-col justify-center items-center w-full px-[26px] lg:w-2/3 mx-auto">
                <h2 className="heading is-medium-title text-center">
                  "對於增加網路曝光度，我該如何選擇我的行銷方式"
                </h2>
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
                      <iframe
                        src="https://my.spline.design/hands3duicopy-70ff0d7fc77708d58279d2e35d8b3771/"
                        frameborder="0"
                        width="100%"
                        height="240px"
                      ></iframe>
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
                      <iframe
                        src="https://my.spline.design/hands3duicopy-70ff0d7fc77708d58279d2e35d8b3771/"
                        frameborder="0"
                        width="100%"
                        height="240px"
                      ></iframe>
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
                      <iframe
                        src="https://my.spline.design/hands3duicopy-70ff0d7fc77708d58279d2e35d8b3771/"
                        frameborder="0"
                        width="100%"
                        height="240px"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full  px-[15px] xl:px-[100px] xl:flex-row mt-[100px] flex-col flex">
              <a
                href=""
                className="xl:w-1/2 w-full mr-4 hover:shadow-custom 
                border-1
                
              duration-300
              hover:border-3
              hover:translate-x-4 hover:translate-y-4 border border-black p-10 rounded-2xl"
              >
                <h4 className="text-[40px] font-light text-black leading-normal">
                  網頁SEO很重要嗎？
                </h4>
                <div className="flex">
                  <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                    搜尋引擎優化
                  </span>
                  <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                    網頁結構優化
                  </span>
                </div>
                <p className=" text-[16px] mt-3">
                  在當今數位時代，擁有一個專業、美觀的網站只是成功的第一步。然而，無論網站設計得多麼出色，如果它在搜尋引擎上沒有可見度，就無法有效吸引潛在客戶。這就是為什麼網頁SEO（搜尋引擎優化）至關重要的原因。
                </p>
                <div className="flex w-full  flex-col items-start">
                  <b className="mb-3 text-[16px]">3d model for website</b>

                  <Image
                    loader={imageLoader02}
                    width={700}
                    height={700}
                    loading="lazy"
                    placeholder="empty"
                    src="659c39bd34df1a7dc8eb9b82_Platz%201%20Auf%20der%20google%20suche.png"
                  />
                </div>
              </a>
              <a
                href="/Blog-02"
                className="xl:w-1/2 w-full mt-5 md:mt-0 ml-0 xl:ml-4 hover:shadow-custom 
              duration-300
              
              hover:translate-x-4 hover:translate-y-4 border border-black p-10 rounded-2xl"
              >
                <h4
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="text-[40px] leading-normal font-light text-black"
                >
                  網頁設計其實沒有很花錢
                </h4>
                <div className="flex my-4">
                  <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                    搜尋引擎優化
                  </span>
                  <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                    網頁結構優化
                  </span>
                </div>
                <p className="  font-bold text-[20px] mt-3">長期效益：</p>
                <div className="flex w-full  flex-col items-start">
                  <b className="mb-3 text-[14px] font-normal leading-normal">
                    SEO的效果是持久且累積的。一旦網站建立了良好的搜尋引擎排名，即使停止大規模的SEO投入，仍然能持續受益於這些排名，這意味著可以在未來不斷帶來穩定的收入流，增強企業的長期盈利能力。
                  </b>
                  <p className=" font-bold text-[20px] mt-3">提升競爭優勢:</p>
                  <b className="mb-3 text-[14px] font-normal leading-normal">
                    在競爭激烈的市場中，擁有良好SEO策略的企業能夠超越競爭對手，成為行業領先者。這種競爭優勢將直接轉化為更高的市場份額和利潤。
                  </b>

                  <Image
                    loader={imageLoader02}
                    width={700}
                    height={700}
                    loading="lazy"
                    placeholder="empty"
                    src="659c39bd34df1a7dc8eb9b82_Platz%201%20Auf%20der%20google%20suche.png"
                  />
                </div>
              </a>
            </section>

            <section className="section">
              <div className="container">
                <div className="padding">
                  <div className="w-layout-grid about-content">
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                      className="about-grid-content"
                    >
                      <h2 className="heading is-medium-title">
                        "網頁結構優化"
                      </h2>
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
                            H1。次要標題依次使用 H2、H3 等標籤，形成清晰的結構。
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
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
                            案例sample
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

                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image12.jpg?v=7b7356d5"
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
                      <h2 className="heading flex items-start justify-start  is-medium-title">
                        "3D 建模"
                      </h2>
                      <div className="flex w-full  flex-col items-start">
                        <b className="mb-3 text-[16px]">3d model for website</b>
                        <div className="flex">
                          <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                            3D 形象影片
                          </span>
                          <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                            交互式網站
                          </span>
                          <span className="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
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
                      <a
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
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
              </div>
            </section>
            <section className="w-full flex flex-col xl:flex-row justify-center px-[30px] lg:px-[30px]  xl:px-[50px] 2xl:px-[80px]">
              <div className="w-full  xl:w-[40%] p-[10px] xl:p-[40px]">
                <div className="txt">
                  <div className="logo pl-[20px]">
                    <b className="font-bold text-[30px]">JEEK</b>
                  </div>
                  <div className="bottom " data-aos="fade-up">
                    <p className="text-[12px] font-bold">Design by Website</p>
                    <h3 className="text-[30px] xl:text-[40px] mt-[40px] leading-normal font-extrabold">
                      使用 3D 模型製作網頁橫幅和產品圖的好處
                    </h3>

                    <b className="text-[22px] mt-[50px]">Author Name</b>
                    <br />
                    <div class="flex mt-5">
                      <span class="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                        3D 形象影片
                      </span>
                      <span class="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                        交互式網站
                      </span>
                      <span class="bg-green-500 rounded-[30px] inline-block px-4 py-2 mr-2 ">
                        產品展示
                      </span>
                    </div>

                    <p className="text-[16px] w-2/3  xl:w-full mt-[40px]">
                      將 3D
                      模型應用於網頁橫幅和產品圖中，可以顯著提升品牌的視覺吸引力和客戶互動
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full pt-10 xl:w-[60%]">
                <DragCaroudelSlider />
              </div>
            </section>
            {/* <div className="border-3 border-black bg-[url('https://www.ultraehp.com/images/test-portfolio/banner0445.png')] h-[80vh] bg-cover bg-center "></div> */}
            <div>
              <BannerSwiper />
            </div>

            <section>
              <div className="container"></div>
            </section>
            <section className=" px-[40px] py-[90px]">
              {/* <div className="w-full hidden overflow-scroll">
                <Table
                  className="bg-green-700 w-full rounded-xl py-[50px]"
                  aria-label="Example table with dynamic content"
                >
                  <TableHeader
                    className="text-white border-b-2 text-[22px] border-white"
                    columns={columns}
                  >
                    {(column) => (
                      <TableColumn
                        className="text-white  text-[22px] border-b-2 border-white"
                        key={column.key}
                      >
                        {column.label}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody className="text-white" items={rows}>
                    {(item) => (
                      <TableRow
                        className="text-white text-center"
                        key={item.key}
                      >
                        {(columnKey) => (
                          <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div> */}

              <div className="  flex flex-col items-center py-6 justify-center">
                <h2 className="heading is-medium-title">
                  "客製網站 or 套版網站？"
                </h2>
                <p className="text-[22px] bg-green-400  text-center mb-4 mt-2">
                  沒有哪種比較好，適合你的才是好的網站
                </p>
                <div className="flex flex-col xl:flex-row justify-center items-center text-[16px]  px-[100px] text-center leading-normal">
                  <div className="p-10 w-full xl:w-1/2">
                    <span className="font-bold text-[22px]">選擇套版網站</span>
                    <p className="w-full mx-auto lg:w-2/3">
                      ，您可以快速、低成本地建立一個簡單易用的網站，適合需要迅速上線的小型業務
                    </p>
                    <div className="img mt-10" data-aos="fade-up">
                      <Image
                        loader={imageLoader03}
                        loading="lazy"
                        width={800}
                        height={600}
                        placeholder="empty"
                        src="format:webp/1*VXCxYzjtYlUlLUy7LTamfQ.png"
                      />
                    </div>
                  </div>

                  <div className="p-10 w-full xl:w-1/2">
                    <span className="font-bold text-[22px]">客製化網站</span>
                    <p>
                      {" "}
                      則提供高度的設計和功能靈活性，讓您的品牌在數位世界中脫穎而出，並能隨業務成長進行擴展，是追求獨特性和長期效益的理想選擇。
                    </p>
                    <img
                      data-aos-delay="300"
                      data-aos="fade-up"
                      src="
                  https://www.handz.design/assets/images/gallery01/2ebd4515.jpg?v=02f8e9b2"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
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
                      <h3
                        className="heading text-[24px] xl:text-[32px] mx-auto"
                        style={{
                          marginBottom: 30,
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        "選擇適合你的方案"
                      </h3>
                    </div>
                    <div
                      className="jobs"
                      style={{ display: "flex", padding: 0 }}
                    >
                      <div
                        id="w-node-_9d02a341-146a-d088-349b-f68535a2ecdc-35a2ecda"
                        className="job-card"
                        srtyle="width:400px; display:flex; flex-direction:column"
                      >
                        <p className="job-card-role">套版網站(NT.40000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
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
                                預設設計風格：
                              </span>
                              <p className="text-[16px]">
                                根據選擇的模板風格進行色彩和圖片的調整。
                              </p>
                            </p>
                            <p className="plan-item text-[22px]">
                              <span className="text-[20px] font-bold">
                                含首年年度維護與主機空間:
                              </span>
                              <p className="text-[16px]">
                                根據選擇的模板風格進行色彩和圖片的調整。
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
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                        {/* <div style="height: 400px;">
                Title
              </div> */}
                      </div>
                      <div
                        id="w-node-_90fc4fc9-5875-a940-a16d-30733a08bafa-35a2ecda"
                        className="job-card mx-4"
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
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                      </div>
                      <div
                        id="w-node-_01078e3d-0c2e-e80d-0be2-5a38ca83ccf4-35a2ecda"
                        className="job-card bg-green-500"
                      >
                        <p className="job-card-role">客製化網站(NT.80000)</p>
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
                  <p class="job-card-text-small">$120,000 per year</p>
                </div>
              </div> */}
                        <div className="job-card-link-flex">
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
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

            <section className="bg-gray-100  py-[70px] px-[20px] flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="flex  flex-col  pl-10  mx-auto">
                  <div className="title mb-6 w-full">
                    <h2 className="text-[40px]  text-black font-extrabold">
                      網頁設計流程
                    </h2>
                    <p className="text-[14px]">
                      您可以跟我們溝通需求，並確認流程
                    </p>
                  </div>
                  <div className="px-4">
                    <SwiperScroll />
                  </div>
                </div>
              </div>
              <div className=" w-full lg:w-1/2">
                <VanishList />
              </div>
              <div></div>
            </section>
            <b className="text-[20px]">以上價格皆為大約 實際價格可以再討論</b>
          </main>
        </div>
      </div>
    </>
  );
}

// reportWebVitals();
