"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";

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
          <a href="/about-3" className="fixed-button w-inline-block">
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
              src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66bee7d4d028f253131e9178_9235e71e-3fc7-4967-8cfe-d4bcfc224f11.jpeg"
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
              網頁設計 五萬內：高效益、高性價比的選擇
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
              在當今數位時代，一個專業且引人注目的網站對於企業的成功至關重要。然而，許多中小企業往往擔心高昂的網頁設計費用。事實上，您不必花費巨額資金，也能擁有一個符合需求、引人注目的網站。
              我們提供的“網頁設計
              五萬內”方案，專為預算有限的企業量身定制。無論您是初創公司還是希望重新設計現有網站的中小企業，我們的方案都能幫助您實現網頁設計的目標，且不會超出預算。
            </div>
            {/* <div className="article-abstract">
              <div className="text-[16px] leading-normal">
                SEO（搜尋引擎優化）對企業的利潤有直接且顯著的影響。以下是一些具體方式，說明SEO如何影響企業的利潤：
              </div>
            </div> */}

            <div className="paragraph" data-aos="fade-up">
              <h2 className="text-[40px] leading-normal mb-[20px] mt-[30px] ">
                網頁設計五萬元內：如何在預算範圍內打造良好吸睛的網站
              </h2>
              <p>
                在當今數位時代，擁有一個吸引人的網站對於任何企業或個人品牌都是至關重要的。然而，對於預算有限的中小企業或個人來說，如何在五萬元內完成一個視覺上吸引人的網站是一個常見的挑戰。本文將提供一些實用的建議，幫助您在預算內打造一個引人注目的網站。
              </p>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  1. 確定需求和優先級
                </div>
                <p className="font-normal leading-[26px]">
                  在開始設計之前，明確網站的需求和優先級是至關重要的。首先，您需要確定網站的基本功能，例如首頁、關於我們、產品或服務頁面、聯繫我們等。接著，根據您的業務需求，決定是否需要額外的功能，如電子商務、博客或會員系統。通過確定優先級，您可以將資源集中在最重要的功能上，避免不必要的開支。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  2. 選擇適合的平台
                </div>
                <p className="font-normal leading-[26px]">
                  在預算有限的情況下，選擇合適的網站平台可以大大節省成本。使用開源平台如WordPress、Webflow，可以獲得靈活的設計選擇和豐富的功能，而不需要高昂的開發費用。這些平台提供了大量的模板和插件，可以幫助您快速建立網站，同時降低設計和開發成本。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  3. 運用現成模板和主題
                </div>
                <p className="font-normal leading-[26px]">
                  現成的模板和主題可以幫助您以較低的成本快速建立視覺上吸引人的網站。許多平台提供免費或付費的模板，這些模板已經過優化，適合不同類型的網站。選擇一個設計精美且符合您業務需求的模板，可以節省自訂設計的時間和成本。記住，在選擇模板時，要確保其響應式設計，能夠在不同設備上良好顯示。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  1. 確定需求和優先級
                </div>
                <p className="font-normal leading-[26px]">
                  在開始設計之前，明確網站的需求和優先級是至關重要的。首先，您需要確定網站的基本功能，例如首頁、關於我們、產品或服務頁面、聯繫我們等。接著，根據您的業務需求，決定是否需要額外的功能，如電子商務、博客或會員系統。通過確定優先級，您可以將資源集中在最重要的功能上，避免不必要的開支。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  3. 運用現成模板和主題
                </div>
                <p className="font-normal leading-[26px]">
                  <span clasName="bg-green-400 mx-1">現成的模板和主題 </span>
                  可以幫助您以較低的成本快速建立視覺上吸引人的網站。許多平台提供免費或付費的模板，這些模板已經過優化，適合不同類型的網站。選擇一個設計精美且符合您業務需求的模板，可以節省自訂設計的時間和成本。記住，在選擇模板時，要確保其響應式設計，能夠在不同設備上良好顯示。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  4. 簡化設計和功能
                </div>
                <p className="font-normal leading-[26px]">
                  在預算有限的情況下，簡化設計和功能是控制成本的有效方法。避免過於複雜的設計和不必要的功能，
                  <span clasName="bg-green-400 mx-1">
                    {" "}
                    專注於網站的核心需求
                  </span>
                  。簡單而清晰的設計不僅能夠降低開發成本，還能提升用戶體驗。確保網站的色彩搭配、排版和圖像能夠吸引目光，這樣能夠有效地吸引和留住訪客。
                </p>
              </div>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  6. 考慮自行維護和更新
                </div>
                <p className="font-normal leading-[26px]">
                  如果您的預算有限，您可以考慮自行維護和更新網站。學習基本的網站管理技能，如內容更新、圖片上傳和插件安裝，可以節省外包維護的費用。許多網站平台提供了易於使用的後台管理系統，讓您能夠輕鬆地進行日常維護和更新，確保網站始終保持新鮮和吸引力。
                </p>
              </div>
            </div>

            <div className="paragraph-content" data-aos="fade-up">
              <div className="paragraph">
                <h2 className="text-[40px] leading-normal  mb-[20px] mt-[30px] ">
                  二、關鍵字研究與內容優化
                </h2>
                <div className="text-[24px] mb-[20px] font-bold mt-5 ">
                  1. 選擇合適的關鍵字
                </div>
                <p className="font-normal leading-[26px]">
                  關鍵字是SEO的核心。選擇合適的關鍵字能夠幫助搜尋引擎理解您的網站內容。進行關鍵字研究時，應考慮用戶的搜尋意圖，選擇那些搜尋量大但競爭相對較低的關鍵字。使用工具如Google
                  Keyword
                  Planner或Ahrefs來尋找相關的關鍵字，並將其自然地融入到網站內容中。
                </p>{" "}
                <br />
              </div>
              <div className="paragraph">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] mb-[20px] font-bold mt-5 ">
                  2. 高質量內容的重要性
                </div>
                <p className="font-normal leading-[26px]">
                  內容是SEO中最重要的部分之一。創建高質量且與您的受眾相關的內容可以吸引更多訪客，並提高網站的停留時間，這對搜尋引擎來說是一個正面信號。此外，您的內容應該具備清晰的結構，標題、副標題和段落應該清楚明瞭，並使用關鍵字來增強搜尋引擎的理解。
                </p>
              </div>
            </div>

            <div className="article-content-social-share bg-white border-2 border-black rounded-[40px]">
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
                  <a href="/Blog-01" className="article-item w-inline-block">
                    <div className="article-item-img-wrap">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://happynutsday.com/wp/wp-content/uploads/2023/06/38025753-ACD1-494D-949F-3AFE8181C263.jpg"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 34vw, 31vw"
                        srcSet="https://happynutsday.com/wp/wp-content/uploads/2023/06/38025753-ACD1-494D-949F-3AFE8181C263.jpg"
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
                          SEO對於網站的重要性
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
                  <a href="/Blog-02" className="article-item w-inline-block">
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
                          SEO
                        </div>
                        <h5
                          id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085d8-ac15a7a8"
                          className="element-trigger"
                          style={{}}
                        >
                          網頁設計很花錢嗎？
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
