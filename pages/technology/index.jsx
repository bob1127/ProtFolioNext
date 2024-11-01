import React from "react";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image.js";
import { NextSeo } from "next-seo";
import Marquee from "react-fast-marquee";
import GsapText from "../../components/RevealText/index";
import Carousel05 from "../../components/EmblaCarousel05/index.jsx";
import TextMask from "../../components/TextMask/page.jsx";
// import Inner from "../../components/Inner/index.jsx";
import { useState, useEffect } from "react";

export default function Blog() {
  const webpage = {
    name: "網頁技術介紹-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
    description:
      " JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。。",
    url: "https://www.jeek-webdesign.com.tw/terms",
    logo: "https://www.jeek-webdesign.com.tw/images/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "jeekdesign@gmail.com",
    },
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 延遲 300ms 來啟動動畫
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 清除計時器
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`content ${isVisible ? "fade-in" : ""}`}>
      <NextSeo
        title="網頁技術介紹-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "極客網頁設計｜JEEK WEBDESIGN - 你的創意，我來實踐",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
      <div className="relative">
        <div className="md:flex hidden flex-col fixed z-[99999999999] hover:right-0 duration-500 right-[-100px] top-1/2 ">
          <div className="sidebar bg-blue-700 text-white border border-black  p-1 hover:scale-105 duration-500 ">
            <b>Welcom to JEEK !!</b>
          </div>
          <div className="sidebar border bg-blue-100 text-white border-black  p-1 hover:scale-105 duration-500 ">
            <a href="/Contact" className="text-whtie font-bold">
              Send Message to Email
            </a>
          </div>
          <div className="sidebar bg-blue-700 border border-black  p-1 hover:scale-105 text-white  duration-500 ">
            <b>Contact with Line</b>
          </div>
        </div>
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
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
        </Head>

        <div className="about-root">
          <div id="webpage" className="page-wrapper">
            <main className="main">
              <div className="home-hero">
                <div className="home-hero-content">
                  <div className="home-hero-wrapper">
                    {/* <div
                      data-w-id="b3a43e50-789b-2236-6fea-b72c39d21874"
                      style={{
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                      }}
                      className="hero-eyebrown"
                    >
                      <div className="icon-block">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6d0ed7eea431f6e6a_stacks_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-eyebrow-icon"
                        />
                      </div>
                      <p className="eyebrow-hero-text">design agency</p>
                    </div> */}
                    <TextMask />
                    <a
                      href="/"
                      className="text-[#242424] text-[15px] md:text-[18px] xl:text-[22px]"
                    >
                      個人工作室 - 花費小預算，
                      <span className="bg-[#ffc83d] inline-block px-4 border border-black text-white py-3  w-[150px] mt-4 md:mt-0 text-center">
                        增加大收益
                      </span>
                    </a>
                    {/* <h1
                      data-w-id="b3a43e50-789b-2236-6fea-b72c39d21870"
                      style={{
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                      }}
                      className="heading is-home-title"
                    >
                      極客網頁設計<br></br>JEEK WEB DESIGN
                    </h1>
                     */}
                    {/* <div
                      data-w-id="b3a43e50-789b-2236-6fea-b72c39d21884"
                      style={{
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                      }}
                      className="home-hero-button"
                    >
                      <a
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        href="#services"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <div className="button-text">更多資訊</div>
                          <div className="button-bg" style={{}} />
                        </div>
                        <div className="button-icon-block">
                          <video
                            src="https://ultraehp.com/images/test-portfolio/0001-0092.mp4"
                            autoPlay
                            loop
                            className="w-full h-full "
                          ></video>
                        </div>
                      </a>
                    </div> */}
                  </div>
                  <div className="bg-lines">
                    <div className="bg-lines-gradient" />
                    <div className="bg-line" />
                    <div className="bg-line">
                      <div className="interactive-line">
                        <div
                          className="interactive-line-color"
                          style={{
                            display: "block",
                            transform:
                              "translate3d(-14.6076%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            willChange: "transform",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-line" />
                    <div className="bg-line">
                      <div className="interactive-line">
                        <div
                          className="interactive-line-color"
                          style={{
                            display: "block",
                            transform:
                              "translate3d(-14.6076%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            willChange: "transform",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-line" />
                    <div className="bg-line">
                      <div className="interactive-line">
                        <div
                          className="interactive-line-color"
                          style={{
                            display: "block",
                            transform:
                              "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-line" />
                    <div className="bg-line">
                      <div className="interactive-line">
                        <div
                          className="interactive-line-color"
                          style={{
                            display: "block",
                            transform:
                              "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-line" />
                    <div className="bg-line">
                      <div className="interactive-line">
                        <div
                          className="interactive-line-color"
                          style={{
                            display: "block",
                            transform:
                              "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-line" />
                    <div className="bg-line">
                      <div className="interactive-line">
                        <div
                          className="interactive-line-color"
                          style={{
                            display: "block",
                            transform:
                              "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-hero-bg hidden">
                  <div className="parallax-trigger">
                    <div
                      className="parallax-layout"
                      style={{
                        willChange: "transform",
                        transform:
                          "translate3d(0px, -0.6783%, 0px) scale3d(1.02839, 1.02839, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="slider ">
                        <div className="custom-slider">
                          <div className="slider-backgrounds">
                            <div className="slider-inner">
                              <div className="slider-container">
                                <div
                                  className="slider-image-block-1"
                                  style={{}}
                                >
                                  {/* <img
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adb899b075a55107d00_stada-img-16.webp"
                                    loading="eager"
                                    alt="Person use tech gadget"
                                    className="slider-image is-1st"
                                    style={{}}
                                  /> */}
                                </div>
                                <div
                                  className="slider-image-block-2"
                                  style={{}}
                                >
                                  <img
                                    src=""
                                    alt="Person use tech gadget"
                                    className="slider-image is-2nd"
                                    style={{}}
                                  />
                                </div>
                                {/* <img
                                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8.webp"
                                  alt="Person use tech gadget"
                                  sizes="100vw"
                                  srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8.webp 2912w"
                                  className="slider-image-last"
                                  style={{}}
                                /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone.webp"
                          loading="eager"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone.webp 1200w"
                          className="cover-image for-phone"
                        /> */}
                        <div
                          style={{
                            position: "relative",
                            paddingBottom: "56.25%",
                            height: 0,
                            overflow: "hidden",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        >
                          {/* <iframe
                            src="https://www.youtube.com/embed/YZ84iQrbYjw?si=xwGpqR7AnXRY-AS3&autoplay=1"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                            }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section id="services" className="section">
                <a
                  data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                  href="https://next-wp0004.vercel.app"
                  className="fullwidth-link  w-inline-block"
                  style={{}}
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
                    無頭網站
                  </h2>

                  <div className="rounded-[30px] bg-[#333] text-[14px] mb-3 md:mb-0 md:text-[20px] text-white inline-block p-3">
                    (高性能｜SEO友善 / 3D交互式網站)
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
              <section className="high-performance mt-5 flex  flex-col xl:flex-row justify-center">
                <div className="justify-center items-center w-full flex-col xl:w-4/5 md:flex-row flex">
                  <div className=" w-full xl:w-1/2" data-aos="fade-up">
                    {/* <img
                      className="w-full"
                      src="https://img-c.udemycdn.com/course/750x422/3791116_0ef4_7.jpg"
                      alt=""
                    /> */}
                    <Image
                      src="/images/3791116_0ef4_7 (1).webp"
                      width={700}
                      loading="eager"
                      placeholder="empty"
                      height={450}
                      alt="img"
                      priority={true}
                    ></Image>
                  </div>
                  <div className="w-full xl:w-1/2  flex justify-center  items-center">
                    <div
                      className="txt p-[20px] xl:p-[40px]"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <GsapText text="Headless " id="text1" />{" "}
                      <p
                        className="mt-[10px] leading-[30px]"
                        data-aos="fade-up"
                      >
                        <h2>Next.js + Wordpress</h2>
                        <p className="mt-[10px] leading-[30px]">
                          將 Next.js 的靜態生成、ISR 和 SSR 性能優化與 WordPress
                          的內容管理相結合，可構建快速且高效的網站。
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="my-[100px]">
                <h2 className="mt-10 text-center text-xl sm:text-2xl md:text-3xl my-5 lg:text-4xl">
                  "無頭網站 跟 傳統網站 比較"
                </h2>
                <div
                  data-aos="fade-up"
                  data-delay="400"
                  className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto"
                >
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-[#f3be3a]">
                          <th
                            scope="col"
                            className="px-2 text-black py-3 sm:px-6"
                          >
                            Product name
                          </th>
                          <th
                            scope="col"
                            className="px-2  text-black py-3 sm:px-6"
                          >
                            Next.js 無頭網站
                          </th>
                          <th
                            scope="col"
                            className="px-2 text-black py-3 sm:px-6"
                          >
                            傳統 WordPress 網站
                          </th>
                          <th scope="col" className="px-2 py-3 sm:px-6"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            性能
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：具有伺服器端渲染（SSR）、靜態生成（SSG），加快頁面加載速度，適合流量較大的網站。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：需要部署 CDN 和優化靜態資源，可能較為繁瑣。
                            </p>
                          </td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：輕量網站時性能較佳；使用快取插件可加快加載。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：動態頁面較多，依賴後端數據庫，負載高時加載速度較慢。
                            </p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            開發靈活性
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：可用 React
                              构建自定义组件，灵活搭配现代前端工具，适合高度定制化设计。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：需具备前端开发经验，对非技术人员较不友好。
                            </p>
                          </td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：定制化受限，插件冲突和样式限制可能影响设计效果。
                            </p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            內容管理
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：後端 CMS（如
                              WordPress）僅負責內容，管理內容簡單且高效，適合多渠道發布。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：需額外設置無頭
                              CMS，對於編輯內容可能無法直接預覽最終效果。
                            </p>
                          </td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：有大量插件和主题支持，即使不具备编程能力也能轻松构建网站。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：定制化受限，插件冲突和样式限制可能影响设计效果。
                            </p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            SEO
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：通過 SSR、SSG 支持良好的 SEO
                              優化，能控制各頁面元數據，靈活且響應快。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：SEO 優化需自定義設定（如 Open
                              Graph、JSON-LD），增加開發工作量。
                            </p>
                          </td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：基本支持 SEO，且許多 SEO 插件（如
                              Yoast）可加強 SEO 配置。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：無法像無頭 CMS 一樣針對每頁靈活優化，SEO
                              插件的效果可能有限。
                            </p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            安全性
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：因前後端分離，減少傳統 WordPress
                              的漏洞風險，安全性更高。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：需要設置安全驗證和數據保護以避免 API
                              被濫用。
                            </p>
                          </td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              優點：內建基本安全功能，且許多插件增強網站安全性。
                            </p>
                            <p className="text-[12px] sm:text-[14px]">
                              缺點：WordPress
                              插件和主題易成為攻擊目標，安全漏洞風險較高。
                            </p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="px-[20px] md:px-[50px] xl:px-[100px]">
                <div className="top mt-4 mb-4 text-[40px] text-center"></div>

                <div className="flex flex-col md:flex-row ">
                  <div className="xl:w-1/2 w-full p-0 md:p-8">
                    <GsapText
                      className="responsive-text"
                      text=" 不只快，要美觀"
                      id="text2"
                    />
                    <h2> Page Speed Insight</h2>
                    <p className="mt-[10px] leading-[30px]" data-aos="fade-up">
                      可顯著增加網頁速度，並通過 PageSpeed Insights
                      測速達成高效加載。
                    </p>
                    <div className="mt-5">
                      <a
                        href="https://next-wp0004.vercel.app/posts"
                        className="bg-blue-600  mt-[35px] px-6 py-2 text-white border-black border"
                        data-aos-delay="300"
                      >
                        看範例
                      </a>
                    </div>
                  </div>

                  <div className=" w-full xl:w-1/2 h-auto xl:h-[600px] relative overflow-hidden p-8">
                    {/* <Image
                      src="665ee622d8843e9bd55dc8035ea21c717f410326-3388x2946.png"
                      width={800}
                      height={500}
                      loader={imageLoader}
                    /> */}
                    {/* <img
                      className="w-[500px]"
                      src="./images/peromace.webp"
                      alt=""
                    /> */}
                    {/* <Image
                      src="https://www.ultraehp.com/images/peromace.webp"
                      className="scale-105  static md:absolute right-0  md:right-[-100px]"
                      height={500}
                      width={600}
                    ></Image> */}
                    <Image
                      src="/images/peromace.webp"
                      width={700}
                      alt="img"
                      loading="lazy"
                      placeholder="empty"
                      height={450}
                    ></Image>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="padding">
                  <div className="main-container">
                    <div id="w-node-_0d97e7f2-7677-0103-d394-d8b1b529b132-c41abecd">
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          {/* <Image
                            src="665ee622d8843e9bd55dc8035ea21c717f410326-3388x2946.png"
                            width={800}
                            height={500}
                            loader={imageLoader}
                          /> */}
                          {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-eyebrow-icon"
                          /> */}
                        </div>
                        <p className="eyebrow-text">What we do</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_3e2ecc0f-542d-8997-9376-5ddc2576004a-c41abecd"
                      className="service-content"
                    >
                      <div className="service-image">
                        <div className="reveal-image-trigger">
                          <Image
                            src="/images/665ee622d8843e9bd55dc8035ea21c717f410326-3388x2946 (1).webp"
                            alt="img"
                            width={800}
                            height={800}
                            loading="lazy"
                            placeholder="empty"
                          />
                          {/* <img
                            loading="lazy"
                            alt="Person use tech gadget"
                            src=""
                            sizes="(max-width: 479px) 128.6328125px, (max-width: 767px) 153.43238830566406px, (max-width: 991px) 21vw, (max-width: 1439px) 50vw, (max-width: 1919px) 754.1220703125px, 42vw"
                            srcSet=""
                            className="cover-image"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          /> */}
                          {/* <img
                            loading="lazy"
                            alt="Person use tech gadget"
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3.webp"
                            sizes="(max-width: 479px) 128.6328125px, (max-width: 767px) 153.43238830566406px, (max-width: 991px) 21vw, (max-width: 1439px) 50vw, (max-width: 1919px) 754.1220703125px, 42vw"
                            srcSet=""
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
                      <p className="paragraph">
                        使用Next.js和WordPress來建構無頭網站時，您將體驗到一系列卓越的優點和好處，這使它成為現代網頁設計的理想選擇
                      </p>
                      <div className="service-cms-page-links w-dyn-list">
                        <div
                          role="list"
                          className="service-cms-page-links-list w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="service-cms-page-link-item w-dyn-item"
                          >
                            <a className="link-with-arrows">
                              高效的性能與快速的頁面加載
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="service-cms-page-link-item w-dyn-item"
                          >
                            <a className="link-with-arrows">無縫的內容管理</a>
                          </div>
                          <div
                            role="listitem"
                            className="service-cms-page-link-item w-dyn-item"
                          >
                            <a className="link-with-arrows">
                              極致的設計與開發自由
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <section>
                      <div className="service-hero-section mt-[-600px]"></div>
                    </section>
                    <p
                      id="w-node-_3e2ecc0f-542d-8997-9376-5ddc25760056-c41abecd"
                      className="paragraph is-sticky"
                    >
                      Headless-無頭網站
                    </p>
                  </div>
                </div>
              </section>
              {/* <section className="section-movie  flex-col xl:flex-row flex">
                <div className="w-full xl:w-1/2">
                  <div className="txt p-[20px] xl:p-[60px]">
                    <h3 className=" text-[40px]">title</h3>
                    <p className="text-[40px]">tile</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure nobis, odit quo voluptate enim neque delectus nostrum
                      ab iusto, laboriosam cumque repellendus, maxime adipisci
                      sapiente ipsum ratione eaque consequatur ullam.
                    </p>
                    <a
                      href=""
                      className="bg-blue-700 text-center w-[150px] text-white border inline-block mt-[20px] border-black p-1 "
                    >
                      MOEW SAMPLE
                    </a>
                  </div>
                </div>
                <div className="w-full xl:w-1/2 overflow-hidden">
                  <Marquee>
                    <div className="flex">
                      <div className="w-[500px]  relative border-3 border-[#11a3f7]">
                        <div className="txt absolute translate-x-1/2 translate-y-1/2 top-[36%] left-[25%]">
                          <p className="text-[22px] text-white">
                            title: 企業形象影片
                          </p>
                        </div>
                        <video
                          poster="/images/Untiteeled-Camera.png"
                          preload="metadata"
                          className="w-full"
                          controls
                        >
                          <source
                            poster="/images/Untiteeled-Camera.png"
                            autoplay
                            loop
                            src="/video/20230215 EIWP數據操作-1080.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="w-[500px]  relative border-3 border-[#11a3f7]">
                        <div className="txt absolute translate-x-1/2 translate-y-1/2 top-[36%] left-[25%]">
                          <p className="text-[22px] text-white">
                            title: 企業形象影片
                          </p>
                        </div>
                        <video
                          poster="/images/788.png"
                          preload="metadata"
                          className="w-full"
                          controls
                        >
                          <source
                            poster="/images/788.png"
                            autoplay
                            loop
                            src="/video/20230215 EIWP數據操作-1080.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="w-[500px] group relative border-3 border-[#11a3f7]">
                        <div className="txt group-hover:top-[30%] duration-700 absolute translate-x-1/2 translate-y-1/2 top-[36%] opacity-0  group-hover:opacity-100 left-[25%]">
                          <p className="text-[22px] text-white">
                            title: 企業形象影片
                          </p>
                        </div>
                        <video
                          poster="/images/行動電源03.png"
                          preload="metadata"
                          className="w-full"
                          controls
                        >
                          <source
                            poster="/images/行動電源03.png"
                            autoplay
                            loop
                            src="/video/20230215 EIWP數據操作-1080.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </Marquee>
                </div>
              </section> */}

              {/* <section className="section mt-[80px] with-borders">
                <div className="title text-center">
                  <h2 className="text-[30px] xl:text-[40px] text-black">
                    SEO Optimization - seo 優化
                  </h2>
                </div>
                <div className=" pb-4 pt-3">
                  <div className="main-container">
                    <div
                      id="w-node-fd94e481-9f57-042f-d7da-018c52aa2861-c41abecd"
                      className="image-size-small"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Office desk"
                          src="https://wiki.matbao.net/wp-content/uploads/2020/11/tich-hop-facebook-chat-vao-website-11.jpg"
                          sizes="(max-width: 479px) 76.62890625px, (max-width: 991px) 26vw, (max-width: 1919px) 28vw, 29vw"
                          srcSet=""
                          className="cover-image"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                        <div
                          className="bg-for-animation is-dark-color"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <div
                      id="w-node-_8fb99f96-0343-01e2-6610-c8cd5cd90678-c41abecd"
                      className="image-with-text"
                    >
                      <div
                        id="w-node-ea5e50a9-d32e-b9ca-154d-86ac548c4dd1-c41abecd"
                        className="image-size-medium"
                      >
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt="Portrait of the team"
                            src="https://www.handz.design/assets/images/image22.jpg?v=02f8e9b2"
                            sizes="(max-width: 479px) 154.6390380859375px, (max-width: 767px) 35vw, (max-width: 991px) 26vw, (max-width: 1439px) 50vw, (max-width: 1919px) 50vw, 50vw"
                            className="cover-image"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                          <div
                            className="bg-for-animation is-dark-color"
                            style={{ display: "block" }}
                          />
                        </div>
                      </div>
                      <p className="paragraph text-[16px] xl:text-[20px] mb-[40px] is-large">
                        此slogan專注於定制化和品牌價值，強調公司能夠根據客戶的需求和品牌形象，創造出獨一無二的網站。這表明公司重視客戶的品牌，致力於通過精心設計來提升其品牌價值，使網站成為品牌增值的關鍵一環。
                      </p>
                    </div>
                    <p
                      id="w-node-ba50089b-4b59-264e-9143-947b8f33a08d-c41abecd"
                      className="paragraph is-sticky"
                    >
                      SEO優化
                    </p>
                  </div>
                </div>
              </section> */}
              <section id="services" className="section">
                <a
                  data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                  className="fullwidth-link text-black w-inline-block"
                  style={{}}
                  href="https://www.zensor.com.tw"
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
                    網頁行銷
                  </h2>
                  <br />
                  <br />
                  <div className="rounded-[30px] bg-[#333] text-[20px] text-white inline-block p-3">
                    (結構優化｜SEO行銷)
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
                <div className="padding">
                  <div className="main-container">
                    <div id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c261-c41abecd">
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-eyebrow-icon"
                          />
                        </div>
                        <p className="eyebrow-text">Company</p>
                      </div>
                    </div>

                    <div
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c264-c41abecd"
                      className="cards-wrapper"
                    >
                      <div className="card-title-block">
                        <GsapText
                          text=" 你的產品很好，但卻沒讓更多人看見？"
                          id="text4"
                        />{" "}
                        <h2
                          data-aos="fade-up"
                          className="heading is-extralarge text-[]"
                        ></h2>
                        <a
                          id="w-node-_4f18f1da-1e0a-2dad-3a97-4b92f5bc2c75-c41abecd"
                          href="/about"
                          className="simple-link"
                        >
                          「創新設計，讓您的網站脫穎而出」
                        </a>
                      </div>
                      <div className="cards">
                        <div
                          data-aos="fade-down"
                          id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c26b-c41abecd"
                          data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c26b"
                          className="card"
                          style={{}}
                        >
                          <div className="card-icon with-margin">
                            <Image
                              alt="img"
                              className="mb-4"
                              src="/images/maxresdefault.webp"
                              width={800}
                              height={800}
                              placeholder="empty"
                              loading="lazy"
                            />
                          </div>
                          <p className="card-paragraph">
                            <Image
                              className="mb-4"
                              alt="img"
                              src="/images/google-logo-exploding-1681647430.webp"
                              width={800}
                              height={800}
                              placeholder="empty"
                              loading="lazy"
                            />
                            {/* <img
                              className="w-full my-3 rounded-2xl mx-auto"
                              src="https://blog-cdn.lottiefiles.com/cdn-cgi/image/width=640,quality=80,format=auto/2024/08/How-Do-Lottie-Animations-Help-with-SEO_.png"
                              alt=""
                            /> */}
                            <br></br>
                            <p className="text-[16px] font-normal">
                              根據Google的數據，超過90%的消費者會使用搜索引擎來查找產品和服務。如果你的企業能夠在搜索結果中獲得較高的曝光率，潛在客戶就更容易記住你的品牌，從而提高品牌知名度。
                            </p>
                          </p>
                        </div>
                        <div
                          data-aos="fade-right"
                          id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c274-c41abecd"
                          data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c274"
                          className="card"
                          style={{}}
                        >
                          {/* <div className="card-icon">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-card-icon"
                            />
                          </div> */}
                          <div className="card-content">
                            <p className="card-paragraph">降低營銷成本</p>
                            <p className="card-text-small">
                              <Image
                                className="mb-4"
                                src="/images/maxresdefault.webp"
                                width={800}
                                height={800}
                                alt="img"
                                placeholder="empty"
                                loading="lazy"
                              />
                              比較傳統的廣告渠道，如電視或報紙，SEO和社交媒體營銷的成本較低，且效果持久。
                              Forrester
                              Research指出，內容營銷成本约为傳統廣告的62%，但能產生3倍的潜在客戶。
                            </p>
                          </div>
                        </div>
                        <div
                          data-aos="fade-left"
                          id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c27c-c41abecd"
                          data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c27c"
                          className="card group hover:bg-[#ede653] duration-150"
                          style={{}}
                        >
                          <div className="card-icon">
                            <Image
                              alt="img"
                              className="mb-4"
                              src="/images/maxresdefault.webp"
                              width={800}
                              height={800}
                              placeholder="empty"
                              loading="lazy"
                            />
                          </div>
                          <div className="card-content">
                            <p className="card-paragraph group-hover:text-white duration-500">
                              Our Journey
                            </p>
                            <p className="card-text-small">
                              {/* <img
                                className="w-full rounded-lg my-3"
                                src="https://assets-v2.lottiefiles.com/cdn-cgi/image/width=640,quality=80,format=auto/https://i.ytimg.com/vi/7v13bzpJyYM/maxresdefault.jpg"
                                alt=""
                              /> */}
                              對於中小企业而言，网站的曝光度不僅僅是吸引流量的問題，還直接影響到品牌的生存和成長。
                              透過提高網站曝光度，中小企业可以更更多的客戶信任、提升销售额、降低營銷成本，並在市場競爭中佔據有利位置。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c284-c41abecd"
                      className="paragraph is-sticky"
                    >
                      SEO 優化
                    </p>
                  </div>
                </div>

                <section>
                  <div className="flex flex-col items-center justify-center">
                    <div className="txt px-[20px]  flex justify-center items-center flex-col">
                      <GsapText text="更快、更優化 " id="text09" />
                      <h2 className="text-center">
                        提升網站效能，贏得搜尋排名
                      </h2>

                      <h3 className="leading-[40px] text-center">
                        {" "}
                        使用{" "}
                        <span className="bg-blue-700 text-white border border-black mx-2 font-bold   ">
                          {" "}
                          Page Speed Insight{" "}
                        </span>{" "}
                        檢測您的網站
                      </h3>
                      <p className="mt-3 leading-[26px] xl:text-[18px] text-[16px] w-[100%] md:w-4/5  xl:w-1/2 text-center">
                        在數位時代，網站速度不僅影響使用者體驗，更是影響 SEO
                        排名的重要因素。Google Speed Insight
                        是您檢測網站效能的首選工具，透過分析頁面載入速度、互動性及穩定性等關鍵指標，精確指出需要改進的地方，讓您能輕鬆優化網站。
                      </p>

                      <a
                        id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                        href="/Blog-09"
                        className="simple-link mb-[50px]"
                      >
                        相關文章
                      </a>
                    </div>
                    <div className=" md:flex-row flex-col   flex w-full mx-auto md:w-2/3 xl:w-3/4 p-10 justify-center bottom-section">
                      <div className="left p-0 md:p-4 w-full md:w-1/2">
                        <ul className="pl-0 md:pl-5">
                          <li className="font-bold text-[20px]  mt-5">
                            ◉ 提升速度 = 提升排名
                          </li>
                          <li className="leading-[26px]">
                            網站速度是 Google
                            排名算法中的關鍵因素之一。透過優化速度，您將有更高的機會排在搜尋結果的前列。
                          </li>
                          <li className="font-bold text-[20px]  mt-5">
                            ◉ 改善用戶體驗
                          </li>
                          <li className="leading-[26px]">
                            速度慢的網站容易流失訪客。Google Speed Insight
                            幫助您確保網站以最佳效能運行，提供順暢的使用者體驗，提升訪客的停留時間。
                          </li>
                          <li className="font-bold text-[20px]  mt-5">
                            ◉ 優化指引一步到位
                          </li>
                          <li className="leading-[26px]">
                            不只檢測，還提供實際可行的優化建議。從圖片壓縮、程式碼精簡到資源載入管理，所有細節都能輕鬆掌握。
                          </li>
                        </ul>
                      </div>
                      <div className="right w-full md:w-1/2">
                        {/* <img
                          className="w-full"
                          src="http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.ultraehp.com%2Fimages%2Fperomace.webp&w=1200&q=75"
                          alt=""
                        /> */}
                        <Image
                          src="/images/網頁結構優化_UI設計_banner設計-極客網頁設計_seo優化.webp"
                          loading="lazy"
                          alt="img"
                          width={800}
                          placeholder="empty"
                          height={500}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section className="md:px-[50px] px-[20px] xl:px-[100px]">
                <div>
                  <div className="pl-8">
                    <h1 className="">產品建模、3D形象影片</h1>
                    <GsapText
                      text="  3D-Interactive"
                      lineHeight="70px"
                      id="text3"
                      fontSize="60px"
                    />{" "}
                    <p className="w-[95%] md:w-2/3">
                      {" "}
                      3D
                      網頁設計正在引領新的網頁趨勢！網站不再只是平面展示，而是讓內容更加立體、生動。這種設計方式能提升用戶互動體驗，吸引眼球，特別適合產品展示、品牌形象提升等用途
                    </p>
                    <p className="bg-blue-700 inline-block text-white mt-4 px-3 py-1 border-black border">
                      Spline
                    </p>
                    <p className="bg-blue-700 inline-block text-white ml-4 px-3 py-1 border-black border">
                      Blender
                    </p>
                    {/* <p className="bg-blue-700 inline-block text-white  border-black border">
                      Spline
                    </p> */}
                  </div>
                </div>
                <div className="flex">
                  <div className=" hidden md:block w-full md:w-1/2">
                    <Carousel05 />
                  </div>
                  <div className=" w-full hiden md:block md:w-1/2 h-[400px] overflow-hidden hidden  flex justify-center items-center relative border-black mt-[20px]">
                    <iframe
                      className="absolute top-0 left-0 z-[999]"
                      src="https://my.spline.design/untitled-e17fbea8704fb0489b816ed0e8953c2b/"
                      frameborder="0"
                      width="100%"
                      height="500px"
                    ></iframe>
                  </div>
                </div>
              </section>
              <section className="3Dmodel-interaction flex-col flex justify-center px-[20px]  md:p-0 mt-10 items-center">
                <h2
                  data-aos="fade-up"
                  className="text-[26px] xl:text-[50px] font-extrabold"
                >
                  "3D運用-交互式網頁"
                </h2>
                <p
                  data-aos="fade-up"
                  className="bg-blue-600 px-6 py-2 text-white border-black border mt-2"
                  data-aos-delay="300"
                >
                  3d 建模產品運用在網頁上
                </p>
                <div className="flex mt-[25px] justify-center">
                  {/* <img
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className=" w-full xl:w-[80%] rounded-none md:rounded-xl mx-auto"
                    src="https://www.blender.org/wp-content/uploads/2019/07/blender_vfx-1280x720.jpg?x12104"
                    alt=""
                  /> */}
                  <Image
                    src="/images/3d互動式網站-極客網頁設計_3dModel_Blender.png"
                    loading="lazy"
                    alt="3d互動式網站-極客網頁設計_3dModel_Blender"
                    width={800}
                    height={600}
                    placeholder="empty"
                  ></Image>
                  {/* <div>
                    <div className="left"></div>
                    <div className="right">
                      <img
                        className="w-[80%] mx-auto"
                        src="https://www.vectary.com/website_assets/636cc984003871e3cda597bb/6644c6a1cff6e0d6b867232f_Vectary%20Business%20plan.png"
                        alt=""
                      />
                    </div>
                  </div> */}
                </div>
              </section>
              <section className="coding-section">
                <div className="container items-center justify-center  flex-col xl:flex-row py-[50px]  px-0 xl:px-[100px] flex">
                  <div className="left   w-full xl:w-1/2  p-0 xl:p-[50px]">
                    <div
                      className="txt  xl:w-4/5 md:w-2/3 w-full"
                      data-aos="fade-up"
                    >
                      <h4 className="text-[26px] md:text-[50px]  leading-normal font-bold">
                        3d 交互式網站優點
                      </h4>
                      <p className="text-[22px] font-bold">
                        Interection Website Design{" "}
                      </p>
                      <b className="text-[20px] mt-3"> 提升用戶體驗：</b>
                      <p>
                        3D
                        環境讓用戶感受到沉浸式體驗，增加與產品的互動，吸引他們更長時間停留在網站上。
                      </p>
                      <b className="text-[20px] mt-3"> 增加轉換率：</b>
                      <p>
                        用戶能夠更直觀地查看產品細節，這有助於消除購物時的疑慮，從而提高購買意願。
                      </p>
                      <b className="text-[20px] mt-3"> 增強品牌形象：</b>
                      <p>
                        獨特的 3D
                        設計可以讓品牌更具吸引力，給人留下深刻印象，從而提升品牌忠誠度。
                      </p>
                    </div>
                  </div>
                  <div className="right mt-5 md:mt-0 flex w-full xl:w-1/2">
                    <Image
                      src="/images/3d設計_UI設計_banner設計-極客網頁設計_seo優化.png"
                      loading="lazy"
                      alt="3d設計_UI設計_banner設計"
                      width={800}
                      height={600}
                      placeholder="empty"
                    ></Image>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="w-full md:w-2/3  flex justify-center items-center flex-col mx-auto pt-[60px] px-[20px] pb-[30px]">
                  <GsapText
                    className="text-center"
                    text=" 企業形象網站有多重要？"
                    id="text12"
                  />

                  <p className="text-center w-full md:w-4/5">
                    網站就像企業的「門面」。想像一下，當潛在客戶搜尋您的品牌時，第一眼看到的就是您的網站。如果網站設計老舊、資訊不清楚或載入速度慢，客戶可能會立刻關掉，甚至選擇競爭對手。良好的企業形象網站不僅是宣傳平台，更是建立信任的第一步。它讓客戶感受到專業、可靠，並增加品牌的可信度。
                  </p>
                </div>
                <div
                  id="w-node-c71144d9-2650-daf1-da99-a2639c7ddcaf-c41abecd"
                  className="blog-wrapper w-dyn-list"
                >
                  <div role="list" className="blog-list w-dyn-items">
                    <div role="listitem" className="blog-item w-dyn-item">
                      <a
                        aria-label="Blog post link"
                        id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                        data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                        href="/Blogs"
                        className="main-container is-blog-container w-inline-block"
                      >
                        <div
                          id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                          className="blog-small-text"
                        >
                          Jul 18
                        </div>
                        <p
                          id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                          className="blog-article-name"
                        >
                          <span className="text-[30px] font-extrabold">
                            {" "}
                            如何增加搜尋引擎曝光度和排名?
                          </span>
                          <br></br>
                          優化網站內容與結構，快速提升搜尋引擎排名，增加線上曝光
                        </p>
                        <div
                          id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                          className="main-link in-blog"
                        >
                          <div className="main-link-icon-block">
                            <div className="main-link-icon-bg is-2nd" />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              alt=""
                              className="main-link-icon"
                            />
                          </div>
                          <div
                            className="main-link-open-text in-blog"
                            style={{}}
                          >
                            read
                          </div>
                        </div>
                        <div
                          id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                          data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                          className="blog-line"
                          style={{}}
                        />
                      </a>
                    </div>
                    <div role="listitem" className="blog-item w-dyn-item">
                      <a
                        aria-label="Blog post link"
                        id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                        data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                        href="/Blogs"
                        className="main-container is-blog-container w-inline-block"
                      >
                        <div
                          id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                          className="blog-small-text"
                        >
                          Jul 18
                        </div>
                        <p
                          id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                          className="blog-article-name"
                        >
                          <span className="text-[30px] font-extrabold">
                            {" "}
                            網頁設計很花錢嗎？
                          </span>
                          <br></br>
                          網頁設計真的很花錢嗎？透過精心規劃和明智選擇，不僅能控制成本，還能有效提升品牌形象與業務效益。
                        </p>
                        <div
                          id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                          className="main-link in-blog"
                        >
                          <div className="main-link-icon-block">
                            <div className="main-link-icon-bg is-2nd" />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              alt=""
                              className="main-link-icon"
                            />
                          </div>
                          <div
                            className="main-link-open-text in-blog"
                            style={{}}
                          >
                            read
                          </div>
                        </div>
                        <div
                          id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                          data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                          className="blog-line"
                          style={{}}
                        />
                      </a>
                    </div>
                    <div role="listitem" className="blog-item w-dyn-item">
                      <a
                        aria-label="Blog post link"
                        id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                        data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                        href="/Blogs"
                        className="main-container is-blog-container w-inline-block"
                      >
                        <div
                          id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                          className="blog-small-text"
                        >
                          Jul 18
                        </div>
                        <p
                          id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                          className="blog-article-name"
                        >
                          <span className="text-[30px] font-extrabold">
                            {" "}
                            SEO能帶來哪些好處？
                          </span>
                          <br></br>
                          SEO能顯著提高網站的搜尋引擎排名，增加有機流量，提升品牌知名度，並促進業務增長。透過優化策略，您能獲得更高的曝光率和轉換率。
                        </p>
                        <div
                          id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                          className="main-link in-blog"
                        >
                          <div className="main-link-icon-block">
                            <div className="main-link-icon-bg is-2nd" />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              alt=""
                              className="main-link-icon"
                            />
                          </div>
                          <div
                            className="main-link-open-text in-blog"
                            style={{}}
                          >
                            read
                          </div>
                        </div>
                        <div
                          id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                          data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                          className="blog-line"
                          style={{}}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-container medium-paddings">
                  <a
                    id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                    href="/Blogs"
                    className="simple-link"
                  >
                    全部文章
                  </a>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
