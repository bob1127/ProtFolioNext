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
    name: "網頁技術介紹-wordpres網頁設計-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
    description:
      "極客網頁設計專注於提供專業的WordPress網站設計服務，幫助企業建立具吸引力且高效的網站。我們結合先進的無頭網站技術，提供靈活的內容管理方案，讓您的網站在各種設備上流暢運行並提升SEO排名。無論是全新網站開發，或是現有網站的改進與優化，我們都能根據您的需求提供定制化設計，助您提升品牌曝光度並吸引更多潛在客戶。",
    url: "https://www.jeek-webdesign.com.tw/terms",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
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
        title="網頁技術介紹-wordpres網頁設計-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        description="極客網頁設計專注於提供專業的WordPress網站設計服務，幫助企業建立具吸引力且高效的網站。我們結合先進的無頭網站技術，提供靈活的內容管理方案，讓您的網站在各種設備上流暢運行並提升SEO排名。無論是全新網站開發，或是現有網站的改進與優化，我們都能根據您的需求提供定制化設計，助您提升品牌曝光度並吸引更多潛在客戶。"
        openGraph={{
          title:
            "網頁技術介紹-wordpres網頁設計-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
          description:
            "極客網頁設計專注於提供專業的WordPress網站設計服務，幫助企業建立具吸引力且高效的網站。我們結合先進的無頭網站技術，提供靈活的內容管理方案，讓您的網站在各種設備上流暢運行並提升SEO排名。無論是全新網站開發，或是現有網站的改進與優化，我們都能根據您的需求提供定制化設計，助您提升品牌曝光度並吸引更多潛在客戶。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/peromace.webp",
              width: 800,
              height: 600,
              alt: "網頁技術介紹-wordpres網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
      <div className="relative">
        {/* <div className="md:flex hidden flex-col fixed z-[99999999999] hover:right-0 duration-500 right-[-100px] top-1/2 ">
          <div className="sidebar bg-blue-700 text-white border border-black  p-1 hover:scale-105 duration-500 ">
            <b>Welcom to JEEK !!</b>
          </div>
          <div className="sidebar border bg-blue-100 text-white border-black  p-1 hover:scale-105 duration-500 ">
            <a href="/contact" className="text-whtie font-bold">
              Send Message to Email
            </a>
          </div>
          <div className="sidebar bg-blue-700 border border-black  p-1 hover:scale-105 text-white  duration-500 ">
            <b>Contact with Line</b>
          </div>
        </div> */}
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta
            property="og:title"
            content="網頁技術介紹-wordpres網頁設計-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
          />
          <meta
            property="og:description"
            content="極客網頁設計專注於提供專業的WordPress網站設計服務，幫助企業建立具吸引力且高效的網站。我們結合先進的無頭網站技術，提供靈活的內容管理方案，讓您的網站在各種設備上流暢運行並提升SEO排名。無論是全新網站開發，或是現有網站的改進與優化，我們都能根據您的需求提供定制化設計，助您提升品牌曝光度並吸引更多潛在客戶。"
          />
          <meta
            property="og:image"
            content="https://www.jeek-webdesign.com.tw/images/peromace.webp"
          />
          <meta
            property="og:url"
            content="https://www.jeek-webdesign.com.tw/technology"
          />
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
                      <span className="bg-[#fdb715] inline-block px-4 border border-black text-white py-3  w-[150px] mt-4 md:mt-0 text-center">
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
                  href="/blog-10"
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
                <div className="justify-center items-center mx-auto w-[90%] flex-col xl:w-4/5 md:flex-row flex">
                  <div className=" w-full xl:w-1/2" data-aos="fade-up">
                    {/* <img
                      className="w-full"
                      src="https://img-c.udemycdn.com/course/750x422/3791116_0ef4_7.jpg"
                      alt=""
                    /> */}
                    <Image
                      src="/images/無頭網站_高性能seo有善-極客網頁設計.png"
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
                      className="txt  2xl:w-[80%]  w-full  p-[20px] xl:p-[40px]"
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
                  "無頭網站 跟 Wordpress網站 比較"
                </h2>
                <div
                  data-aos="fade-up"
                  data-delay="400"
                  className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto"
                >
                  <div className="relative flex justify-center items-center  md:w-[80%] w-full 2xl:w-[50%] mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-[#f3be3a]">
                          <th
                            scope="col"
                            className="px-2 text-black py-3 sm:px-6"
                          ></th>
                          <th
                            scope="col"
                            className="px-2  text-[18px] text-black py-3 sm:px-6"
                          >
                            Next.js 無頭網站
                          </th>
                          <th
                            scope="col"
                            className="px-2 text-black text-[18px] py-3 sm:px-6"
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
                            className="px-2 py-4 font-medium text-gray-900 text-[18px] whitespace-nowrap dark:text-white sm:px-6"
                          >
                            網頁速度
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[18px] ">快</p>
                          </td>
                          <td className="px-2 py-4 text-[18px] sm:px-6">慢</td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 text-[18px]  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            開發靈活性
                          </th>
                          <td className="px-2 py-4 text-[18px] sm:px-6">高</td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[18px]">低</p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 text-[18px]  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            開發成本
                          </th>
                          <td className="px-2 py-4 text-[18px] sm:px-6">高</td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[18px]">低</p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>

                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 text-[18px]  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            SEO(網頁優化排名)
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[18px]">SEO範圍全面</p>
                          </td>
                          <td className="px-2 py-4 text-[18px] sm:px-6">
                            SEO範圍有限
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 text-[18px]  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            安全性
                          </th>
                          <td className="px-2 py-4 text-[18px] sm:px-6">高</td>
                          <td className="px-2 py-4 text-[18px] sm:px-6">低</td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                          >
                            結構差異
                          </th>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              前端和後端是分離的。前端（如 React、Vue
                              等）負責顯示網站內容，後端則提供資料（通常是
                              API）。無頭網站通常使用 API
                              來獲取資料，並將資料渲染到前端。
                            </p>
                          </td>
                          <td className="px-2 py-4 sm:px-6">
                            <p className="text-[12px] sm:text-[14px]">
                              WordPress 是一個整合型的
                              CMS，前端和後端是緊密結合的。用戶通過 WordPress
                              後台管理內容（如文章、頁面、媒體），並選擇或自定義主題來顯示這些內容。網站前端會自動顯示後台管理的內容，並且可以通過插件擴展功能。
                            </p>
                          </td>
                          <td className="px-2 py-4 text-right sm:px-6"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="px-[20px] w-full md:w-[90%] 2xl:w-[70%] mx-auto md:px-[50px] xl:px-[100px]">
                <div className="top mt-4 mb-4 text-[40px] text-center"></div>

                <div className="flex flex-col md:flex-row ">
                  <div className="xl:w-1/2 w-full p-0 md:p-8">
                    <GsapText
                      className="responsive-text"
                      text=" 不只快，要美觀"
                      id="text2"
                    />
                    <h2> Page Speed Insight</h2>
                    <p className="mt-[10px] text-[18px] leading-[30px]">
                      可顯著增加網頁速度<br></br>並通過 PageSpeed Insights
                      測速達成高效加載。
                    </p>
                    {/* <div className="mt-5">
                      <a
                        href="https://next-wp0004.vercel.app/posts"
                        className="bg-blue-600  mt-[35px] px-6 py-2 text-white border-black border"
                        data-aos-delay="300"
                      >
                        看範例
                      </a>
                    </div> */}
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
                        <div className="icon-block"></div>
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

              <section className="section">
                <div className="w-full md:w-2/3  flex justify-center items-center flex-col mx-auto pt-[60px] px-[20px] pb-[30px]">
                  <GsapText
                    className="text-center"
                    text=" 企業形象網站有多重要？"
                    id="text12"
                  />

                  <p className="text-center text-[16px] w-full md:w-4/5">
                    網站是企業的門面，良好的設計和使用體驗能增強專業形象，提升客戶信任並增加品牌可信度。
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
                        href="/blog-01"
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
                        href="/blog-02"
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
                        href="/blog-06"
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
                    href="/blogs"
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
