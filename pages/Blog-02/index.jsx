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
          <a href="/" className="fixed-button w-inline-block">
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
              網頁設計很花錢嗎？
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
            <div className="article-abstract">
              <div className="text-[16px] leading-normal">
                <h3>網頁設計很花錢嗎？探索成本與價值的平衡</h3>
                <p>
                  對於許多小型和中型企業來說，投資於網站設計可能看起來是一項昂貴的支出。隨著市場上各種設計服務的價格範圍廣泛，企業主常常會問：「網頁設計真的值得花這麼多錢嗎？」在本文中，我們將深入探討網頁設計的成本組成、其對業務的長期價值以及如何在有限的預算內實現最佳的網站設計效果。
                </p>
              </div>
            </div>

            <div className="paragraph" data-aos="fade-up">
              <h2 className="text-[40px] mb-3" data-aos="fade-up">
                網頁設計真的很花錢嗎？其實不然！
              </h2>
              <img
                src="
               "
                alt=""
              />
              <div className="text-[24px] font-bold mt-5 ">
                {" "}
                網頁設計的成本因素
              </div>
              <p className="font-normal leading-[26px]">
                網頁設計的成本取決於多種因素，包括設計的複雜性、功能需求、網站的規模以及設計師的專業水平。簡單的企業網站可能只需幾百到幾千美元，而功能豐富的電子商務網站或定制化網站則可能花費數千甚至數萬美元。這些成本通常包括設計、開發、測試、優化以及持續的維護費用。
              </p>
            </div>
            <div className="paragraph-content" data-aos="fade-up">
              <div className="paragraph">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  理解你的擔憂，量身定制解決方案
                </div>
                <p className="font-normal leading-[26px]">
                  作為一家專注於為小型企業提供網頁設計服務的公司，我們完全理解您的擔憂。我們知道，當您考慮為您的企業建立一個網站時，您希望這個網站不僅能展現您的品牌，還能有效地吸引顧客並提升轉化率。然而，高昂的設計費用常常讓人猶豫不決。
                </p>{" "}
                <br />
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  2. 廉價選擇與隱藏成本
                </div>
                <p className="font-normal leading-[26px]">
                  市場上也有許多低成本的網頁設計選擇，如模板網站建設工具或廉價的自由設計師。然而，這些選擇往往帶來隱藏的成本，如功能限制、缺乏定制化、較差的SEO表現，以及未來修改或擴展網站時的額外費用。選擇廉價方案可能在短期內節省成本，但長期來看，可能需要花費更多時間和金錢來解決由此帶來的問題。
                </p>{" "}
                <br />
              </div>
              <div className="paragraph" data-aos="fade-up">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  什麼樣的網站設計能帶來最大價值？
                </div>
                <p className="font-normal leading-[26px]">
                  在設計網站時，我們不僅僅關注其外觀，我們更加重視網站能為您帶來什麼樣的實際效益。網站應該是您與顧客之間的橋樑，是展示您品牌價值和吸引潛在客戶的工具。
                  因此，我們採用的設計方案不僅注重美觀，更加強調其功能性和使用者體驗。無論是簡潔的導航、清晰的內容佈局，還是快速的加載速度，我們都力求完美，確保訪客在使用您的網站時感到愉快，並且願意停留更長時間，最終轉化為您的忠實客戶。
                  而這一切，都可以在不超出您預算的情況下實現。我們的設計團隊將與您緊密合作，確保每一個細節都符合您的期望，同時保持費用的合理性。
                </p>
              </div>

              <div className="paragraph" data-aos="fade-up">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  網頁設計的投資回報
                </div>
                <p className="font-normal leading-[26px]">
                  雖然高質量的網頁設計初期投入較大，但其帶來的長期回報不容忽視。一個精心設計的網站不僅能吸引更多的訪客，還能提高轉化率，從而直接促進銷售增長。根據研究，消費者通常會根據網站的設計來判斷企業的可信度和專業性。一個優質的網站能夠為您的品牌形象增值，並帶來持續的商機。
                </p>
              </div>

              <img
                data-aos="zoom-in"
                className="w-full"
                src="https://newscanpic.tw/n/seo_01.webp
              "
                alt=""
              />
              <p
                className="text-[16px] sumerized  mt-4 mb-4 font-bold"
                data-aos="fade-up"
              >
                SEO是一項長期投資，其價值遠遠超過短期的投入。與付費廣告不同，SEO的效果是持久的，一旦網站在搜尋引擎中獲得了穩定的高排名，它將持續吸引自然流量，無需再為每一次點擊付費。這種持續的流量能為企業帶來穩定的曝光和潛在客戶，從而促進長期的業務增長。
              </p>
            </div>

            <div className="article-content-social-share duration-300 hover:bg-green-400 border-2 border-black rounded-[40px]">
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