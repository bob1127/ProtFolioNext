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
              src="https://www.accorder.co.jp/cms/wp-content/uploads/MG_0131_re-1-1920x919.jpg"
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
              新世代短影音行銷：引領數位行銷的未來趨勢
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
            <h2></h2>
            <div className="txt bg-gray-100 text-[14px] leading-normal p-10">
              在數位行銷的浪潮中，短影音行銷正在成為推動品牌增長和提升市場影響力的重要力量。隨著社交媒體平台如TikTok、Instagram
              Reels和YouTube
              Shorts的興起，短影音已經從一種新興的內容形式轉變為品牌行銷策略中的核心要素。這篇文章將深入探討新世代短影音行銷的特點、優勢以及如何有效地利用這一趨勢來提升您的品牌影響力。
            </div>
            {/* <div className="article-abstract">
              <div className="text-[16px] leading-normal">
                SEO（搜尋引擎優化）對企業的利潤有直接且顯著的影響。以下是一些具體方式，說明SEO如何影響企業的利潤：
              </div>
            </div> */}

            <div className="paragraph" data-aos="fade-up">
              <h2 className="text-[40px] leading-normal mb-[20px] mt-[30px] ">
                . 短影音行銷的興起
              </h2>
              <p>
                隨著智能手機的普及和網路速度的提升，短影音平台迅速崛起並成為全球用戶的主要娛樂來源。根據統計，短影音的觀看時間和參與度遠超過傳統的長篇影片和文字內容。這些平台的算法設計也促進了短影音內容的廣泛傳播，使得品牌能夠以更低的成本觸及廣泛的受眾。
              </p>
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  2. 短影音的獨特特點
                </div>
                <p className="font-normal leading-[26px]">
                  短影音的核心特點在於其簡潔和直觀。與傳統的長篇影片相比，短影音通常在15秒到60秒之間，要求創作者在有限的時間內傳達清晰的信息。這種格式鼓勵創意和創新，促使品牌在短時間內引起觀眾的注意。短影音的形式通常包括音樂、特效和快速剪輯，這些都能夠提升觀眾的參與感和記憶點。
                </p>
              </div>
              <img
                src="https://everypicturematters.com/wp-content/uploads/2023/06/image-68.png"
                alt=""
                className="w-full rounded-xl"
              />
              <div className="paragraph">
                <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                  3. 短影音行銷的優勢
                  <ul className="my-5">
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">
                        高參與度和分享率：
                      </span>
                      短影音通常具有高度的娛樂性和創意性，這使得觀眾更容易參與和分享內容。根據研究，短影音的分享率比長篇影片高出30%以上，這意味著您的品牌有更多機會通過用戶的分享來擴大影響力。
                    </li>
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">成本效益</span>
                      成本效益：相對於傳統的廣告和長篇影片，短影音的製作成本較低。這使得即使是中小型企業也能夠利用短影音來進行行銷，並且能夠在較低的預算下獲得較高的曝光率和參與度。
                    </li>
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">即時反饋</span>
                      即時反饋：短影音平台通常提供詳細的數據分析，讓品牌能夠即時了解觀眾的反應和行為。這些數據可以幫助品牌快速調整行銷策略，提升內容的效果和相關性。
                    </li>
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">
                        強化品牌形象
                      </span>
                      強化品牌形象：通過短影音，品牌可以展示其獨特的風格和價值觀。創意的內容和有趣的表現形式能夠加深觀眾對品牌的記憶，強化品牌形象並提升品牌忠誠度。
                    </li>
                  </ul>
                </div>
                <div className="paragraph">
                  <div className="text-[24px] mb-[15px] font-bold mt-5 ">
                    如何有效利用短影音行銷
                  </div>
                  <ul className="my-5">
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">
                        了解目標受眾
                      </span>
                      在創作短影音內容之前，了解您的目標受眾是至關重要的。確定他們的興趣、需求和行為模式，並根據這些信息來設計內容。針對特定的受眾群體創作具有吸引力的短影音，有助於提升內容的效果。
                    </li>
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">
                        創造引人注目的內容
                      </span>
                      短影音需要在短時間內抓住觀眾的注意力。因此，內容必須具有高度的吸引力和創意。使用鮮豔的顏色、音效和創意剪輯來提高內容的視覺衝擊力，並確保信息傳達清晰明了。
                    </li>
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">保持一制性</span>
                      品牌形象的一致性對於建立長期的品牌認知至關重要。在短影音中保持品牌風格的一致性，如色彩、語氣和品牌標識，有助於加強品牌識別度。
                    </li>
                    <li className="text-[16px] leading-normal font-normal">
                      <span className="font-bold text-[16px]">
                        鼓勵用戶參與：
                      </span>
                      利用短影音平台的互動功能，如挑戰賽、投票或問答，來激發用戶的參與和互動。這不僅能夠增加內容的曝光度，還能夠建立與受眾的情感聯繫。
                    </li>
                  </ul>
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

              <div className="article-content-social-share duration-300 hover:bg-green-400 border-2 border-black rounded-[40px]">
                <div className="social-share-label-text div-relative">
                  SHARE
                </div>
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
      </div>
    </>
  );
}

// reportWebVitals();
