"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image.js";
import { NextSeo } from "next-seo";
import HorizontalScroll from "../../components/HorizontalScroll/page.jsx";
import PortfolioSample from "../../components/PortfolioSample/page.jsx";
import { useEffect } from "react";
// import Carousel from "../../components/EmblaCarousel06/index.jsx";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
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
    <>
      <NextSeo
        title="極客網頁設計｜JEEK WEBDESIGN - 文章"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "極客網頁設計｜JEEK WEBDESIGN - 你的創意，我來實踐",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/結構化資料圖片-index.png",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/css/wisdom-blog-template.webflow.7452c8b2a.css"
        />
        <link
          rel="stylesheet"
          href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/css/wisdom-blog-template.webflow.7452c8b2a.css"
        />
      </Head>

      {/* <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=668bd563537f10fdc41abec9"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      />

      <Script
        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/js/webflow.765c1394c.js"
        type="text/javascript"
      /> */}
      {/* 
      <link
        href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65c495d649cf47f81db6e449_webclip.png"
        rel="shortcut icon"
        type="image/x-icon"
      /> */}
      {/* <link
        href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65c495db397a444e7854eaa2_favicon.png"
        rel="apple-touch-icon"
      /> */}

      <nav
        className="nav"
        style={{
          transform:
            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
          opacity: 1,
        }}
      >
        <div
          id="w-node-_5f982de6-354e-887e-0847-31d84c7e05c2-4c7e05c1"
          className="nav-left-wrap"
          style={{ display: "none" }}
        >
          <a
            href="/blog-03"
            className="nav-link _3 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">Home</div>
          </a>
          <a
            href="/Blog-02"
            className="nav-link _2 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">Articles</div>
          </a>
          <a
            href="/Blog-01"
            className="nav-link _1 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">Authors</div>
          </a>
        </div>

        <div
          id="w-node-_5f982de6-354e-887e-0847-31d84c7e05d9-4c7e05c1"
          className="nav-right-wrap"
          style={{ display: "none" }}
        >
          <a
            href="/about"
            className="nav-link _1 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">About</div>
          </a>
          <a
            href="/categories"
            className="nav-link _2 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">categories</div>
          </a>
          <a
            href="/contact"
            className="nav-link _3 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">contact</div>
          </a>
        </div>
      </nav>
      <div className="page-wrap">
        <div
          data-w-id="70b8334f-07fe-5c06-c0a6-a8c8c2bd8205"
          className="article-hero-section"
        >
          <div
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="article-hero-bg"
          >
            {" "}
            <Image
              alt=""
              loading="eager"
              src="/images/fantastic_hare_36410_web_dwsigner_working_First_Person_Perspect_65e77a8a-51f3-45d9-9822-ec78af4b1d7d.png"
              width={1200}
              height={780}
              sizes="100%"
              className="img-cover"
            ></Image>
            <div className="gradient-overlay-absolute" />
          </div>
          <div></div>
          <div className="article-hero-wrap">
            <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="tag-text-style category-white"
            >
              Articles
            </div>
            <h1
              style={{
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
              className="title-medium text-align-center text-word-caps"
            >
              Blog
            </h1>

            <div
              className="article-infos-wrap align-center"
              style={{
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              <div
                id="w-node-b3941e9a-44d7-b8cc-f34e-3e63aae2aaec-ac15a7a8"
                className="article-info-item"
              >
                <div className="opacity-50">Website</div>
                <div>&nbsp;</div>
                <div>Design</div>
              </div>
              <div
                id="w-node-b3941e9a-44d7-b8cc-f34e-3e63aae2aaf3-ac15a7a8"
                className="chip white opacity-50 hide-mobile-landscape"
              />
              <div
                id="w-node-b3941e9a-44d7-b8cc-f34e-3e63aae2aaf4-ac15a7a8"
                className="article-info-item"
              >
                <div className="opacity-50">Published by</div>
                <div>&nbsp;</div>
                <div>Jeek</div>
              </div>
            </div>
            <a
              href="#article-content"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="button-large-icon margin-top w-inline-block w--current"
            >
              <div className="button-large-icon-bg" />
              <img
                src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a4f4a44261408a71bdefc1_icon-arrow-down-black.svg"
                loading="lazy"
                alt=""
                className="icon-16 div-relative"
              />
            </a>
          </div>
        </div>

        <div
          style={{
            transform:
              "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
          className="article-social-share"
        >
          <div className="social-share-component">
            <div className="social-share-label-text flex flex-col div-relative">
              SHARE
            </div>
            <div className="w-layout-grid social-share-icons-grid">
              <a
                id="w-node-c6614d82-a15a-d1bf-ee93-a890b9e1641d-ac15a7a8"
                href="#"
                target="_blank"
                className="social-share-icon w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a4f4a4376d11af30a10e56_icon-fb-black.svg"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />
              </a>
              <a
                id="w-node-_44107f62-0add-4f90-2f9b-4d15de5ca9b2-ac15a7a8"
                href="#"
                target="_blank"
                className="social-share-icon w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a4f4a484ecff6b46ae1a04_icon-linkedin-black.svg"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />
              </a>
              <a
                id="w-node-_67e772ed-543c-6c72-9ec7-9c972c5ae736-ac15a7a8"
                href="#"
                target="_blank"
                className="social-share-icon w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a4f4a584ecff6b46ae1ac2_icon-x-black.svg"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />
              </a>
              <a
                id="w-node-a354c365-c29d-92b5-18f8-a87b747f3518-ac15a7a8"
                href="#"
                target="_blank"
                className="social-share-icon w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a4f4a4eed91fe3a17704f6_icon-link-black.svg"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t-black border  py-[50px] ">
          <div className="txt my-5 px-[30px] w-[3/4] h-auto  mx-auto border-1 border-rose-500">
            <div className="flex  flex-col justify-center items-center  xl:flex-row ">
              <div className="left-section w-full md:w-[80%] xl:w-[70%]">
                <div className="Hot-article flex md:flex-row flex-col">
                  <a
                    href="/Blog-05"
                    className=" w-full  md:w-1/2 m-2 group rounded-xl overflow-hidden relative"
                  >
                    <div className="cover absolute top-0 left-0 z-[999] w-full h-full bg-[#000000] opacity-50"></div>
                    <div className="txt absolute bottom-[30px] left-0 px-6 w-full  z-[999999] bg-transparent  flex flex-col">
                      <h3 className="text-white text-[18px]">
                        カスタマイズ性が高い「電子カルテ/問診票ツール」
                      </h3>
                      <p className="text-white text-[14px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minima velit quos illum, commodi quasi sint
                      </p>
                      <div className="type-tag  rounded-2xl w-[100px] text-center inline-block text-white px-3 py-1 bg-[#1498da] mt-3">
                        Design
                      </div>
                    </div>
                    <img
                      src="https://liginc.co.jp/wp-content/uploads/2024/01/7c4e866123723e03ef075d660bf377c4-768x512.png"
                      alt=""
                      className="w-full group-hover:scale-105 duration-300"
                    />
                  </a>
                  <a
                    href="/Blog-01"
                    className="w-full group md:w-1/2 m-2 rounded-xl overflow-hidden  relative"
                  >
                    <div className="cover absolute top-0 left-0 z-[999] w-full h-full "></div>
                    <figure>
                      {" "}
                      <Image
                        width={600}
                        height={400}
                        placeholder="empty"
                        loading="lazy"
                        alt="網站SEO規劃-極客網頁設計"
                        src="/images/新網站SEO規劃-極客網頁設計.png"
                        className="w-full group-hover:scale-105 duration-300"
                      ></Image>
                    </figure>
                  </a>
                </div>
                <div className="others-article pt-8 ">
                  <a
                    href="/Blog-05"
                    className="article-item border-t-2 border-b-2 flex flex-col md:flex-row py-8"
                  >
                    <div className="img w-full md:w-[35%] p-5">
                      <img
                        src="https://i.ytimg.com/vi/cqw7WjuX8To/maxresdefault.jpg"
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="text w-full md:w-[65%] p-5">
                      <h3 className="text-[20px] font-semibold">
                        Spline 3D - 入門教學
                      </h3>
                      <h4 className="text-[16px]">
                        {" "}
                        打造引人注目的 3D 網頁設計{" "}
                      </h4>
                      <p className="text-[14px] mt-3 w-[80%]">
                        Spline 3D 是一個基於雲端的 3D
                        設計工具，適合各種技能水平的使用者，特別是設計師和開發者。它使得創建和共享
                        3D 內容變得簡單，並且提供直觀的介面和強大的功能。
                      </p>
                    </div>
                  </a>

                  <a
                    href="/Blog-04"
                    className="article-item border-t-2 border-b-2 flex flex-col md:flex-row py-8"
                  >
                    <div className="img w-full md:w-[35%] p-5">
                      <img
                        src="https://i.ytimg.com/vi/BMGirukzOPU/maxresdefault.jpg"
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="text w-full md:w-[65%] p-5">
                      <h3 className="text-[20px] font-semibold">
                        Photoshop 2024 全新 AI 功能
                      </h3>
                      <h4 className="text-[16px]"> 設計創作的顛覆性革新</h4>
                      <p className="text-[14px] mt-3 w-[80%]">
                        隨著人工智能技術的日益成熟，Photoshop 2024
                        迎來了歷史性的一次更新，全面整合了 AI
                        能力，讓設計師可以更快速地完成創作、處理影像，同時保留最大的自由度和創造力。
                      </p>
                    </div>
                  </a>
                  <div className="article-item group border-t-2 border-b-2 flex flex-col md:flex-row py-8">
                    <div className="img w-full overflow-hidden md:w-[35%] p-5">
                      <div className="w-[450px] h-[200px]">
                        <figure>
                          <Image
                            src="/images/blog/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷.png"
                            placeholder="empty"
                            className="group-hover:scale-105  overflow-hidden duration-700"
                            loading="lazy"
                            width={330}
                            height={200}
                            alt="網頁設計很花錢嗎?-極客網頁設計_網頁seo行銷_網站建置"
                          ></Image>
                        </figure>
                      </div>
                    </div>
                    <div className="text w-full md:w-[65%] p-5">
                      <h3 className="text-[18px]">網頁設計很花錢嗎？</h3>
                      <p className="text-[14px] mt-3 w-[80%]">
                        網頁設計真的很花錢嗎？透過精心規劃和明智選擇，不僅能控制成本，還能有效提升品牌形象與業務效益。
                      </p>
                    </div>
                  </div>
                  <div className="article-item border-t-2 border-b-2 flex flex-col group md:flex-row py-8">
                    <div className="img w-full overflow-hidden md:w-[35%] p-5">
                      <div className="w-[450px] h-[200px]">
                        <figure>
                          {" "}
                          <Image
                            src="/images/blog/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.png"
                            placeholder="empty"
                            className="group-hover:scale-105  overflow-hidden duration-700"
                            loading="lazy"
                            width={330}
                            height={200}
                            alt="網頁設計很花錢嗎?-極客網頁設計_網頁seo行銷_網站建置"
                          ></Image>
                        </figure>
                      </div>
                    </div>
                    <div className="text w-full md:w-[65%] p-5">
                      <h3 className="text-[18px]">
                        如何增加搜尋引擎曝光度和排名?
                      </h3>
                      <p className="text-[14px] mt-3 w-[80%]">
                        優化網站內容與結構，快速提升搜尋引擎排名，增加線上曝光
                      </p>
                    </div>
                  </div>
                  <div
                    c
                    className="article-item border-t-2 border-b-2 flex flex-col md:flex-row group py-8"
                  >
                    <div className="img w-full overflow-hidden md:w-[38%] p-5">
                      <div className="w-[410px] h-[220px]">
                        <figure>
                          {" "}
                          <Image
                            src="/images/blog/SEO能帶來哪些好-極客網頁設計.png"
                            placeholder="empty"
                            className="group-hover:scale-105  overflow-hidden duration-700"
                            loading="lazy"
                            width={330}
                            height={200}
                            alt="網頁設計很花錢嗎?-極客網頁設計_網頁seo行銷_網站建置"
                          ></Image>
                        </figure>
                      </div>
                    </div>
                    <div className="text w-full md:w-[65%] p-5">
                      <h3 className="text-[18px]">SEO能帶來哪些好處？ </h3>
                      <p className="text-[14px] mt-3 w-[80%]">
                        SEO能顯著提高網站的搜尋引擎排名，增加有機流量，提升品牌知名度，並促進業務增長。透過優化策略，您能獲得更高的曝光率和轉換率。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-section w-full  md:w-[60%] xl:w-[30%] px-6">
                <div className="wrap bg-[#f4f0f0] p-5 rounded-2xl ">
                  <div className="top border-b-2 py-4">
                    <div className="tag-items flex flex-wrap">
                      <div className="bg-[#2b9bf7] text-white px-3 m-2 py-1  border border-black">
                        Design
                      </div>
                      <div className="bg-[#2b9bf7] text-white px-3 m-2 py-1  border border-black">
                        SEO
                      </div>
                      <div className="bg-[#2b9bf7] text-white px-3 m-2 py-1  border border-black">
                        Photography
                      </div>
                      <div className="bg-[#2b9bf7] text-white px-3 m-2 py-1  border border-black">
                        SoftWare
                      </div>
                    </div>
                  </div>
                  <div className="bottom flex flex-col">
                    <div className="w-full m-2 group rounded-md overflow-hidden relative">
                      <div className="cover absolute top-0 left-0 z-[999] w-full h-full bg-[#000000] opacity-50"></div>
                      <div className="txt absolute bottom-[30px] left-0 px-6 w-full  z-[999999] bg-transparent  flex flex-col">
                        <h3 className="text-white text-[14px]">
                          カスタマイズ性が高い「電子カルテ/問診票ツール」
                        </h3>
                      </div>
                      <img
                        src="https://liginc.co.jp/wp-content/uploads/2024/01/7c4e866123723e03ef075d660bf377c4-768x512.png"
                        alt=""
                        className="w-full group-hover:scale-105 duration-300"
                      />
                    </div>
                    <a
                      href="/Blog-05"
                      className="w-full m-2 group rounded-md overflow-hidden relative"
                    >
                      <div className="cover absolute top-0 left-0 z-[999] w-full h-full bg-[#000000] opacity-50"></div>
                      <div className="txt absolute bottom-[30px] left-0 px-6 w-full  z-[999999] bg-transparent  flex flex-col">
                        <h3 className="text-white text-[14px]">
                          カスタマイズ性が高い「電子カルテ/問診票ツール」
                        </h3>
                      </div>
                      <img
                        src="https://liginc.co.jp/wp-content/uploads/2024/01/7c4e866123723e03ef075d660bf377c4-768x512.png"
                        alt=""
                        className="w-full group-hover:scale-105 duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-[80px] flex justify-center flex-col items-center">
          <h3
            className=" text-[26px] sm:text-[40px] 2xl:text-[50px]  font-bold"
            data-ao-delay="300"
            data-aos="fade-up"
          >
            "Others Articles"
          </h3>
          <div
            className="w-1/2 text-[22px] mt-5 text-center  "
            data-aos-delay="300"
            data-aos="fade-up"
          ></div>
        </section>
        <section className="py-[50px] hidden md:block  section-scroll-bg ">
          <HorizontalScroll />
        </section>
        {/* <section className="py-[50px] hidden md:block  section-scroll-bg ">
          <HorizontalScroll />
        </section> */}
        {/* <div className="card-wrap border border-rose-500">
          <div className="card w-[400px] h-[700px] border border-black "></div>
        </div> */}

        {/* <div className="border-2 h-[100vh] border-black"></div>
        <div id="article-content" className="article-content-section">
          <div className="card border border-black p-5"></div>
        </div> */}

        <div>{/* <Carousel /> */}</div>
      </div>
    </>
  );
}

// reportWebVitals();
