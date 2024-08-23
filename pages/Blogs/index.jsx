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
import HorizontalScroll from "../../components/HorizontalScroll/page.jsx";
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
              如何優化你的網站?
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

        <section className="bg-green-300 py-[80px] flex justify-center flex-col items-center">
          <h3
            className="  text-[26px] sm:text-[40px] 2xl:text-[50px]  font-bold"
            data-ao-delay="300"
            data-aos="fade-up"
          >
            "你的產品很好，想讓更多人看見嗎 ??"
          </h3>
          <div
            className="w-1/2 text-[22px] mt-5 text-center  "
            data-aos-delay="300"
            data-aos="fade-up"
          >
            {/* 你的產品很好，想讓更多人看見嗎 */}
          </div>
        </section>

        <section className="py-[50px]  section-scroll-bg bg-green-300">
          <HorizontalScroll />
        </section>
        <div className="w-full border border-green-400 py-[50px] ">
          <div className="txt my-5 px-[30px] w-[3/4] h-auto xl:w-2/3 2xl:w-1/3 mx-auto border-1 border-rose-500">
            <h2
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-[24px] lg:text-[32px] xl:text-[50px] mb-5 text-center mx-auto font-bold"
            >
              "更多網頁設計相關知識"
            </h2>
            <p
              data-aos-delay="300"
              className="text-[25px] mb-5 xl:text-[32px] 2xl:text-[40px] mx-auto text-center"
              data-aos="fade-up"
            >
              想看更多案例嗎？
            </p>
            <div className="flex">
              <a
                href="/Blog-02"
                className="blog-item inline-block p-10 border-1 border-black"
              >
                <div className="txt">
                  <h3 className="text-[20px] font-bold">
                    如何增加搜尋引擎曝光度和排名?
                  </h3>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/65d3c889459c1244c9b18495_74-9AkKzjzsxBJMdKpoUixuZrpnxoBKHjIx7Ux33H74.png"
                  className="w-[1200px] h-[400px]"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="card-wrap border border-rose-500">
          <div className="card w-[400px] h-[700px] border border-black "></div>
        </div> */}

        {/* <div className="border-2 h-[100vh] border-black"></div>
        <div id="article-content" className="article-content-section">
          <div className="card border border-black p-5"></div>
        </div> */}

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
                        Politics
                      </div>
                      <h5
                        id="w-node-_3c13191a-e0ee-a67c-1621-1e96d30085d8-ac15a7a8"
                        className="element-trigger"
                        style={{}}
                      >
                        Celestial Serendipity: Aligning with the Cosmic Dance of
                        Chance
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
    </>
  );
}

// reportWebVitals();
