"use client";

import React from "react";
import Script from "next/script";
import Head from "next/head";
import Inner from "../../components/Inner/index.jsx";
// import Styles from "../../styles/portfolio.module.css";
import { useState, useEffect } from "react";
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
    <div className={`content ${isVisible ? "fade-in" : ""}`}>
      <Inner>
        <div className="about-root">
          {/* <Head>
        <link
          href="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/css/stada-design-agency-template.webflow.9aa283b37.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head> */}
          <Script
            src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=668bd563537f10fdc41abec9"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"
            strategy="beforeInteractive" // 可以使用 `beforeInteractive`, `lazyOnload`, `afterInteractive` 等策略
          />

          <Script
            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/js/webflow.765c1394c.js"
            strategy="afterInteractive"
          />

          <div id="webpage" className="page-wrapper">
            <div className="fullscreen-menu" style={{ display: "none" }}>
              <div className="menu-layout">
                <div className="menu-socials" style={{ opacity: 0 }}>
                  <div className="menu-social-wrapper w-dyn-list">
                    <div role="list" className="menu-social-list w-dyn-items">
                      <div
                        role="listitem"
                        className="menu-social-item w-dyn-item"
                      >
                        <a href="#" className="menu-social-link w-inline-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c39ba9cdf534275b8533_youtube-logo-black.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-social-menu-icon"
                          />
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="menu-social-item w-dyn-item"
                      >
                        <a href="#" className="menu-social-link w-inline-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3b3dd27ebf12436fc85_linkedin-logo-black.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-social-menu-icon"
                          />
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="menu-social-item w-dyn-item"
                      >
                        <a href="#" className="menu-social-link w-inline-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c380c49a871545a7ce42_facebook-logo-black.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-social-menu-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-links-wrapper" style={{ opacity: 0 }}>
                  <div
                    className="secondary-links"
                    style={{
                      opacity: 0,
                      transform:
                        "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="secondary-links-block">
                      <p className="menu-small-text">General</p>
                      <a href="/store" className="menu-sesondary-link">
                        Store
                      </a>
                      <a href="/contact" className="menu-sesondary-link">
                        Contact
                      </a>
                    </div>
                    <div className="secondary-links-block">
                      <p className="menu-small-text">Get in touch</p>
                      <a href="#" className="menu-sesondary-link">
                        Email
                      </a>
                      <a href="#" className="menu-sesondary-link">
                        Phone
                      </a>
                    </div>
                    <div className="secondary-links-block">
                      <p className="menu-small-text">Template</p>
                      <a
                        href="https://webflow.com/templates/html/stada-agency-website-template"
                        target="_blank"
                        className="menu-sesondary-link"
                      >
                        Buy template
                      </a>
                      <a
                        href="https://www.metrik.studio/webflow-templates"
                        target="_blank"
                        className="menu-sesondary-link"
                      >
                        More templates
                      </a>
                    </div>
                  </div>
                  <div className="menu-main-links">
                    <a
                      data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                      href="/"
                      className="menu-link w-inline-block"
                    >
                      <div
                        className="menu-link-text"
                        style={{
                          transform:
                            "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Home
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-menu-link-icon"
                      />
                    </a>
                    <a
                      data-w-id="9119eb55-b515-23ab-3ca6-d7a893b67ca0"
                      href="/services"
                      className="menu-link w-inline-block"
                    >
                      <div
                        className="menu-link-text"
                        style={{
                          transform:
                            "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Services
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-menu-link-icon"
                      />
                    </a>
                    <a
                      data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                      href="/features"
                      aria-current="page"
                      className="menu-link w-inline-block w--current"
                    >
                      <div
                        className="menu-link-text"
                        style={{
                          transform:
                            "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Features
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-menu-link-icon"
                      />
                    </a>
                    <a
                      data-w-id="03e10da9-d56b-f42b-a87a-0d5fd44d5e75"
                      href="/about"
                      className="menu-link w-inline-block"
                    >
                      <div
                        className="menu-link-text"
                        style={{
                          transform:
                            "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        About
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-menu-link-icon"
                      />
                    </a>
                    <a
                      data-w-id="4f963323-4aa1-e2d1-d1f7-b679d51590a7"
                      href="/journal"
                      className="menu-link w-inline-block"
                    >
                      <div
                        className="menu-link-text"
                        style={{
                          transform:
                            "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Journal
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-menu-link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div
                  data-w-id="b1ec2d20-05dc-077d-da18-86120beceaae"
                  className="close-button"
                  style={{ opacity: 0 }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6697fb309b7a20920ffdcdb1_close_24dp_181720_FILL0_wght500_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="close-button-icon"
                    style={{}}
                  />
                  <div className="menu-close-text">Close</div>
                </div>
                <div
                  className="menu-background-color"
                  style={{
                    transform:
                      "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
                <div className="menu-delay-for-animations" />
              </div>
            </div>

            <main className="main">
              {/* <div className="features-hero">
                <div className="container">
                  <div className="vertical-flex with-gap">
                    <div
                      data-w-id="dbd30077-3d84-ca11-e010-7e7b5b69cdab"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="features-hero-title"
                    >
                      <div className="inline-image">
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt="Person use tech gadget"
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6.webp"
                            sizes="(max-width: 479px) 104px, (max-width: 767px) 112px, (max-width: 991px) 180px, (max-width: 1439px) 20vw, (max-width: 1919px) 300px, 320px"
                            srcSet="
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-500.webp   500w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-800.webp   800w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-1080.webp 1080w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-1600.webp 1600w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-2000.webp 2000w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-2600.webp 2600w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6.webp        2912w
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
                      <h1
                        id="w-node-dbd30077-3d84-ca11-e010-7e7b5b69cdae-c41abf4f"
                        className="heading is-features-hero-title"
                      >
                        We are committed to innovation, quality, and
                        user-centric design.
                      </h1>
                    </div>
                    <div
                      data-w-id="dbd30077-3d84-ca11-e010-7e7b5b69cdb7"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="features-hero-content"
                    >
                      <a
                        id="w-node-c8015393-8e06-0bb7-e362-a6acd8fcfe46-c41abf4f"
                        href="#explore"
                        className="simple-link is-explore"
                      >
                        Explore features
                      </a>
                      <div
                        id="w-node-_3ad2373a-0965-b0c1-2078-09fd91318cfd-c41abf4f"
                        className="features-hero-paragraph"
                      >
                        <p className="paragraph opacity-85">
                          We leverage the latest advancements in technology to
                          provide you with smart devices that offer superior
                          performance and reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <section className="bg-black items-center flex justify-center h-[60vh]">
                <h2 className="text-[60px] text-white">PORTFOLIO</h2>
              </section>
              <section id="explore" className="section with-bg-dark">
                <div className="padding small-paddings">
                  <div className="container">
                    <div className="large-features-wrapper w-dyn-list">
                      <div
                        role="list"
                        className="large-features-list w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="large-feature-item w-dyn-item"
                        >
                          <div className="feature-image">
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19.webp"
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
                          <a
                            aria-label="Feature link"
                            data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                            href="/feature/design"
                            className="feature-title-link w-inline-block"
                          >
                            <h2 className="heading is-feature-large-title">
                              Design
                            </h2>
                            <div
                              data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                              className="feature-title-link-line"
                              style={{}}
                            />
                          </a>
                          <div className="large-feature-gallery w-dyn-list">
                            <div
                              role="list"
                              className="large-feature-gallery-list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6cbed59380266cfeac2_stada-img-n-21.webp"
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
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6cbecf6f5dbebf0ceba_stada-img-n-18.webp"
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
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655332bb09bc39adf4ec7_stada-img-n-20.webp"
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
                            </div>
                            <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="large-feature-item w-dyn-item"
                        >
                          <div className="feature-image">
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15.webp"
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
                          <a
                            aria-label="Feature link"
                            data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                            href="/feature/innovation"
                            className="feature-title-link w-inline-block"
                          >
                            <h2 className="heading is-feature-large-title">
                              纏普科技
                            </h2>
                            <p>
                              我們專注於為企業打造獨特而吸引人的網頁設計，幫助您的品牌在數位世界中脫穎而出。
                            </p>
                            <div
                              data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                              className="feature-title-link-line"
                              style={{}}
                            />
                          </a>
                          <div className="large-feature-gallery w-dyn-list">
                            <div
                              role="list"
                              className="large-feature-gallery-list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6e49ee8e710e1de70b0_stada-img-n-30.webp"
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
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6e4ed59380266d00266_stada-img-n-8.webp"
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
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6e4b75f918dc8608ccf_stada-img-n-2.webp"
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
                            </div>
                            <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="large-feature-item w-dyn-item"
                        >
                          <div className="feature-image">
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20.webp"
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
                          <a
                            aria-label="Feature link"
                            data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                            href="/feature/compatibility"
                            className="feature-title-link w-inline-block"
                          >
                            <h2 className="heading is-feature-large-title">
                              Compatibility
                            </h2>
                            <div
                              data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                              className="feature-title-link-line"
                              style={{}}
                            />
                          </a>
                          <div className="large-feature-gallery w-dyn-list">
                            <div
                              role="list"
                              className="large-feature-gallery-list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20.webp"
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
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d746de317f059b8f3db_stada-img-21.webp"
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
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d71e1789502face9037_stada-img-23.webp"
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
                            </div>
                            <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="large-feature-item w-dyn-item"
                        >
                          <div className="feature-image">
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3.webp"
                                className="cover-image"
                                style={{
                                  transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                              <div
                                className="bg-for-animation is-dark-color"
                                style={{
                                  display: "block",
                                  transform:
                                    "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                            </div>
                          </div>
                          <a
                            aria-label="Feature link"
                            data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                            href="/feature/quality"
                            className="feature-title-link w-inline-block"
                          >
                            <h2 className="heading is-feature-large-title">
                              Quality
                            </h2>
                            <div
                              data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                              className="feature-title-link-line"
                              style={{}}
                            />
                          </a>
                          <div className="large-feature-gallery w-dyn-list">
                            <div
                              role="list"
                              className="large-feature-gallery-list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d9d99f2d740455aad3c6_stada-img-n-10.webp"
                                    className="cover-image"
                                    style={{
                                      transform:
                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                      transformStyle: "preserve-3d",
                                    }}
                                  />
                                  <div
                                    className="bg-for-animation is-dark-color"
                                    style={{
                                      display: "block",
                                      transform:
                                        "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                      transformStyle: "preserve-3d",
                                    }}
                                  />
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d9dae472fdc9bf452bfc_stada-img-n-9.webp"
                                    className="cover-image"
                                    style={{
                                      transform:
                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                      transformStyle: "preserve-3d",
                                    }}
                                  />
                                  <div
                                    className="bg-for-animation is-dark-color"
                                    style={{
                                      display: "block",
                                      transform:
                                        "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                      transformStyle: "preserve-3d",
                                    }}
                                  />
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                              >
                                <div className="reveal-image-trigger">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d9e8f74db8bef6daa54d_stada-img-6.webp"
                                    className="cover-image"
                                    style={{
                                      transform:
                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                      transformStyle: "preserve-3d",
                                    }}
                                  />
                                  <div
                                    className="bg-for-animation is-dark-color"
                                    style={{
                                      display: "block",
                                      transform:
                                        "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                      transformStyle: "preserve-3d",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                        </div>
                        <p
                          className="text-black"
                          style={{ fontSize: 40, textAlign: "center" }}
                        >
                          案例陸續更新中，歡迎商家互惠
                        </p>
                        <a
                          href="www.zensor.com.tw"
                          className="bg-green-500 rounded-[30px] p-4 inline-block mx-auto"
                        >
                          與我們聯繫
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </Inner>
    </div>
  );
}

// reportWebVitals();
