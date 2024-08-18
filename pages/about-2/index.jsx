"use client";

import React from "react";
import Script from "next/script";
import Head from "next/head";

import SpringModel from "../../components/SpringModal/page.jsx";
import Img01 from "../../public/images/Untitled-Camera.png";
// import Inner from "../../components/Inner/index.jsx";
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
      <>
        <div className="about-root">
          <div id="webpage" className="page-wrapper">
            <main className="main">
              <section className="items-center flex justify-center h-[60vh] flex flex-col items-start justify-start">
                <h2 className="text:[20px] lg:text-[60px] text-center leading-normal text-black  fontfblack">
                  PORTFOLIO<br></br>作品案例
                </h2>
                <p className="text-center w-2/3 px-5">
                  這段文字介紹了專案的目標、功能和效果，同時突出了專案的成果。
                </p>
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
                                src="https://www.zensor.com.tw/images//Index-Img/Carousel-Img/1920x768/ECWP100-carousel-index.webp"
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
                            <h2 className="heading text-[20px] md:text-[30px] is-feature-large-title">
                              超極生技
                            </h2>
                            <p className="w-full text-[13px] md:text-[16px] md:w-1/2 my-5">
                              超越傳統感測技術，實現卓越的健康生活。我們引以為傲的PotentioStrip專利技術，為您帶來兩大品牌，{" "}
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
                                    src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-03.webp"
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
                                    src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp"
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
                                    src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/%E6%A5%AD%E7%95%8C%E6%9C%80%E5%B0%8F%E7%9A%84_%E7%84%A1%E7%B7%9A_%E9%9B%BB%E5%8C%96%E5%AD%B8%E5%88%86%E6%9E%90%E5%84%80-%E5%AF%A6%E6%93%AC%E5%8A%9F%E8%83%BD.webp"
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
                                src="https://www.zensor.com.tw/images//Index-Img/Carousel-Img/1920x768/06.webp"
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
                            <h2 className="heading text-[20px] md:text-[30px] is-feature-large-title">
                              禪譜科技
                            </h2>
                            <p className="w-full text-[13px] md:text-[16px] md:w-1/2 my-5">
                              只專注於電化學的禪譜科技ZensorR&D,提供獨特的無線及模擬器功能的電化學分析儀(電化學工作站)
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
                                    src="https://www.zensor.com.tw/images//Index-Img/Carousel-Img/1920x768/06.webp"
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
                                    src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/ECWP100-93.webp"
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
                                    src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/ECWP100-88.webp"
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
                                src=""
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
                            className="feature-title-link w-inline-block rounded-m"
                          >
                            <h2 className="heading is-feature-large-title">
                              購物網站-Clothes
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
                          專案陸續更新中.... 商家互惠方案
                        </p>
                        <SpringModel />
                        {/* <a
                          href="/Price"
                          className="bg-green-500 rounded-[30px] p-4 inline-block mx-auto"
                        >
                          與我們聯繫
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </>
    </div>
  );
}

// reportWebVitals();
