"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
// import Inner from "../components/Inner/index.jsx";
import Script from "next/script";
// import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
// import Navbar from "../components/sideTabs/index.jsx";
// import Footer from "../components/Footer/index.jsx";
import Marquee from "react-fast-marquee";
import AOS from "aos";
// import Nav from "../components/Navbar/page.jsx";
import { useEffect } from "react";
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
        title="提升品牌知名度 | 使用 Instagram 和 Facebook 行銷策略"
        description="了解如何通過 Instagram 和 Facebook 行銷來提升品牌知名度、吸引目標客戶並推動銷售增長。我們提供有效的策略和最佳實踐，幫助你在社交媒體上取得成功。"
        openGraph={{
          url: "https://www.example.com",
          title: "提升品牌知名度 | 使用 Instagram 和 Facebook 行銷策略",
          description:
            "了解如何通過 Instagram 和 Facebook 行銷來提升品牌知名度、吸引目標客戶並推動銷售增長。我們提供有效的策略和最佳實踐，幫助你在社交媒體上取得成功。",
          images: [
            {
              url: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66bee7d4d028f253131e9178_9235e71e-3fc7-4967-8cfe-d4bcfc224f11.jpeg",
              width: 1200,
              height: 630,
              alt: "社交媒體行銷策略",
            },
          ],
          site_name: "你的網站名稱",
        }}
        twitter={{
          handle: "@twitterhandle",
          site: "@twitterhandle",
          cardType: "summary_large_image",
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
            href="/"
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
            href="/articles"
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
            href="/authors"
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
          id="w-node-_5f982de6-354e-887e-0847-31d84c7e05cc-4c7e05c1"
          className="nav-trigger"
        >
          <div className="nav-icon-wrap">
            <div className="nav-burger-icon">
              <img
                src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a68994fa9a5f9b2322527b_icon-burger-menu.svg"
                loading="eager"
                alt=""
                className="img-cover"
              />
            </div>
            <div
              className="nav-close-icon"
              style={{
                transform:
                  "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a689948ece87037ef5391b_icon-burger-close.svg"
                loading="eager"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="nav-trigger-labels-wrap">
            <div className="nav-trigger-label-relative">
              <div className="nav-label">Menu</div>
            </div>
            <div
              className="nav-trigger-label-absolute"
              style={{
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="nav-label">close</div>
            </div>
          </div>
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
          className="fixed-button-wrap"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <a
            href="javascript:void(0);"
            onclick="window.history.back();"
            className="fixed-button w-inline-block"
          >
            <div className="fixed-button-icon-wrap">
              <img
                src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65b7c53655aec0a1f96fe9ee_icon-arrow-bold-left-black.svg"
                loading="eager"
                alt=""
                className="img-cover"
              />
            </div>
            <div className="fixed-button-label-wrap flex">
              <div className="nav-label flex">back</div>
            </div>
          </a>
        </div>
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
            <img
              alt=""
              loading="eager"
              src="https://www.ultraehp.com/images/test-portfolio/All-New-LottieFiles-blog-cover---NEW.png.avif"
              sizes="100vw"
              className="img-cover"
            />
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
              Politics
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
              如何增加搜尋引擎曝光度和排名?
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
                <div className="opacity-50">Written by</div>
                <div>&nbsp;</div>
                <div>Harper</div>
              </div>
              <div
                id="w-node-b3941e9a-44d7-b8cc-f34e-3e63aae2aaf3-ac15a7a8"
                className="chip white opacity-50 hide-mobile-landscape"
              />
              <div
                id="w-node-b3941e9a-44d7-b8cc-f34e-3e63aae2aaf4-ac15a7a8"
                className="article-info-item"
              >
                <div className="opacity-50">Published on</div>
                <div>&nbsp;</div>
                <div>Nov 8, 2023</div>
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
            opacity: 1,
            transform:
              "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className="article-scroll-indicator"
        >
          <div className="article-scroll-indicator-wrap">
            <div>0</div>
            <div className="article-scroll-indicator-line-wrap">
              <div
                className="scroll-indicator-line"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 0.08344, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
            <div>100</div>
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
        <div id="article-content" className="article-content-section">
          <div
            data-w-id="99c9b6af-0d86-5adc-b61e-80276cc58b7f"
            className="article-content-container"
          >
            <div className="txt bg-gray-100 text-[14px] leading-normal p-10">
              <h3>如何增加搜尋引擎曝光度和排名？</h3>
              <p>
                增加搜尋引擎曝光度和排名是提升網站流量和業務成功的關鍵。透過有效的搜尋引擎優化（SEO）策略，您可以提高網站在搜尋結果中的排名，吸引更多潛在客戶。以下是一些實用的方法，幫助您增加搜尋引擎的曝光度和排名。
              </p>
            </div>
            {/* <div className="article-abstract">
              <div className="text-[16px] leading-normal">
                SEO（搜尋引擎優化）對企業的利潤有直接且顯著的影響。以下是一些具體方式，說明SEO如何影響企業的利潤：
              </div>
            </div> */}

            <div className="paragraph" data-aos="fade-up">
              <h2 className="text-[40px] leading-normal mb-[20px] mt-[30px] ">
                1. 進行關鍵字研究
              </h2>
              <p>
                關鍵字研究是SEO的基礎。透過了解目標受眾的搜尋行為，您可以選擇合適的關鍵字來優化您的網站內容。使用工具如Google
                Keyword
                Planner或Ahrefs，找出相關且高搜尋量的關鍵字，並將其有效地融入網站的標題、描述和內容中。
              </p>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  創建高質量內容
                </div>
                <p className="font-normal leading-[26px]">
                  高質量的內容能夠吸引訪客並提升搜尋引擎排名。內容應該具備價值、信息性和吸引力，並且圍繞目標關鍵字進行優化。定期更新網站內容，保持內容的新鮮度和相關性，有助於提升網站在搜尋引擎中的地位。
                  都至關重要。然而，網站設計真的需要這麼貴嗎？我們來打破這個迷思。
                </p>
              </div>

              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  優化網站結構和內部連結
                </div>
                <p className="font-normal leading-[26px]">
                  網站結構和內部連結對於SEO排名至關重要。確保網站擁有
                  <span className="bg-[#2b72e5] mx-1"> 清晰的導航</span>
                  <span className="bg-[#2b72e5] mx-1"> 合適的url結構</span>
                  ，以便搜尋引擎可以輕鬆索引您的網站內容。利用
                  <span className="bg-[#2b72e5] mx-1"> 利用內部連結</span>
                  提升網站頁面之間的相關性，進而提高重要
                  <span className="bg-[#2b72e5] mx-1"> 頁面的權重</span>
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  提高網站速度和使用者體驗
                </div>
                <p className="font-normal leading-[26px]">
                  網站的載入速度和使用者體驗對SEO排名有直接影響。快速且易於導航的網站能夠提高用戶的停留時間和參與度。
                  <span className="bg-[#2b72e5] mx-1"> 優化圖片</span>
                  <span className="bg-[#2b72e5] mx-1"> 減少代碼體積</span>
                  <span className="bg-[#2b72e5] mx-1"> 和使用快取技術</span>
                  、，可以提升網站的載入速度。確保網站在各種設備上都有良好的顯示效果，尤其是移動設備，對於提升排名也至關重要。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  創建高質量內容
                </div>
                <p className="font-normal leading-[26px]">
                  高質量的內容能夠吸引訪客並提升搜尋引擎排名。內容應該具備{" "}
                  <span className="bg-[#2b72e5] mx-1"> 價值</span>
                  <span className="bg-[#2b72e5] mx-1"> 訊息性</span>
                  <span className="bg-[#2b72e5] mx-1"> 吸引力</span>
                  並且圍繞{" "}
                  <span className="bg-[#2b72e5] mx-1"> 目標關鍵字</span>
                  進行優化。{" "}
                  <span className="bg-[#2b72e5] mx-1"> 定期更新網站內容</span>
                  ，保持內容的新鮮度和相關性，有助於提升網站在搜尋引擎中的地位。
                  都至關重要。然而，網站設計真的需要這麼貴嗎？我們來打破這個迷思。
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <a
                href="/about"
                data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                className="button-wrapper mt-[20px] mb-[100px] w-[175px] mx-auto"
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
            <div className="paragraph-content" data-aos="fade-up"></div>

            <div className="article-content-social-share duration-300 hover:bg-[#2b72e5] border-2 border-black rounded-[40px]">
              <div className="social-share-label-text div-relative">SHARE</div>
              <div className="w-layout-grid social-share-icons-grid horizontal">
                <a
                  id="w-node-_830c0865-f014-9435-f1ba-5de1d35857b0-ac15a7a8"
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
                  id="w-node-_830c0865-f014-9435-f1ba-5de1d35857b2-ac15a7a8"
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
                  id="w-node-_830c0865-f014-9435-f1ba-5de1d35857b4-ac15a7a8"
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
                  id="w-node-_830c0865-f014-9435-f1ba-5de1d35857b6-ac15a7a8"
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
            <div className="article-divider" />
          </div>
          <div className="article-related-posts-section">
            <div className="bg-green-500 px-4 py-3  inline-block mx-auto">
              你可能也有興趣
            </div>
            <div className="articles-grid-cms margin-small w-dyn-list">
              <div role="list" className="articles-grid related w-dyn-items">
                <div
                  role="listitem"
                  className="w-dyn-item hover:border-black p-5 hover:border"
                >
                  <a
                    href="/blog-posts/echoes-of-the-mind-tracing-the-footprints-of-memory"
                    className="article-item w-inline-block"
                  >
                    <div className="article-item-img-wrap">
                      <img
                        alt=""
                        loading="lazy"
                        src=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 34vw, 31vw"
                        srcSet=""
                        className="img-cover-absolute"
                      />
                      <div
                        className="img-left-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="img-right-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="img-top-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="img-btm-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                    <div className="article-content-wrap">
                      <div className="article-item-head-wrap">
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085d7-ac15a7a8"
                          className="tag-text-style category"
                        >
                          Design/seo
                        </div>
                        <h5
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085d8-ac15a7a8"
                          className="element-trigger"
                        >
                          seo文章
                        </h5>
                      </div>
                      <div className="article-infos-wrap">
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085da-ac15a7a8"
                          className="article-info-item"
                        >
                          <div className="opacity-50">Written by</div>
                          <div>&nbsp;</div>
                          <div>Owen</div>
                        </div>
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085e0-ac15a7a8"
                          className="chip opacity-50 hide-mobile-landscape"
                        />
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085e1-ac15a7a8"
                          className="article-info-item"
                        >
                          <div className="opacity-50">Published on</div>
                          <div>&nbsp;</div>
                          <div>Jan 14, 2024</div>
                        </div>
                      </div>
                    </div>
                    <div className="line-trigger">
                      <div
                        className="line-moves"
                        style={{
                          transform:
                            "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  className="w-dyn-item hover:border-black p-5 hover:border"
                >
                  <a
                    href="/blog-posts/celestial-serendipity-aligning-with-the-cosmic-dance-of-chance"
                    className="article-item w-inline-block"
                  >
                    <div className="article-item-img-wrap">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://assets-global.website-files.com/65a118d82cee7eeed8c90bf6/65a15e885d669de488d828cc_blog_img-small-18.jpg"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 34vw, 31vw"
                        srcSet="https://assets-global.website-files.com/65a118d82cee7eeed8c90bf6/65a15e885d669de488d828cc_blog_img-small-18-p-500.jpg 500w, https://assets-global.website-files.com/65a118d82cee7eeed8c90bf6/65a15e885d669de488d828cc_blog_img-small-18.jpg 720w"
                        className="img-cover-absolute"
                        style={{}}
                      />
                      <div
                        className="img-left-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="img-right-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="img-top-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="img-btm-panel"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                    <div className="article-content-wrap">
                      <div className="article-item-head-wrap">
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085d7-ac15a7a8"
                          className="tag-text-style category"
                        >
                          Politics
                        </div>
                        <h5
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085d8-ac15a7a8"
                          className="element-trigger"
                          style={{}}
                        >
                          Celestial Serendipity: Aligning with the Cosmic Dance
                          of Chance
                        </h5>
                      </div>
                      <div className="article-infos-wrap">
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085da-ac15a7a8"
                          className="article-info-item"
                        >
                          <div className="opacity-50">Written by</div>
                          <div>&nbsp;</div>
                          <div>Isabella</div>
                        </div>
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085e0-ac15a7a8"
                          className="chip opacity-50 hide-mobile-landscape"
                        />
                        <div
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085e1-ac15a7a8"
                          className="article-info-item"
                        >
                          <div className="opacity-50">Published on</div>
                          <div>&nbsp;</div>
                          <div>Jan 10, 2024</div>
                        </div>
                      </div>
                    </div>
                    <div className="line-trigger">
                      <div
                        className="line-moves"
                        style={{
                          transform:
                            "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// reportWebVitals();
