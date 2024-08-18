"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

import React from "react";
import Script from "next/script";
import Head from "next/head";
import SpringModal from "../../components/SpringModal/page.jsx";
import { useState, useEffect } from "react";
import Link from "next/link.js";
import VanishList from "../../components/VanishList/page.jsx";
import RevealLinks from "../../components/RevealLinks/page.jsx";
// import Inner from "../../components/Inner/index.jsx";

export default function Blog() {
  //compare table

  const rows = [
    {
      key: "1",
      name: "成本較低",
      role: "成本較低",
      status: "成本較低",
    },
    {
      key: "2",
      name: "高度定制",
      role: "獨特性",
      status: "優化性能",
    },
    {
      key: "3",
      name: "優化性能",
      role: "優化性能",
      status: "簡單易用",
    },
    {
      key: "4",
      name: "William Howard",
      role: "靈活擴展性",
      status: "大量的預設選項",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "客製化網站",
    },
    {
      key: "status",
      label: "套版網站",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

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
      <div>
        <div id="webpage" className="page-wrapper">
          <main className="main">
            <div className="about-hero m-0 p-0">
              <div className="container">
                <div className="about-hero-content">
                  <div className="about-hero-title-block">
                    <h1
                      data-w-id="8b401037-45f7-eb88-2888-8b081e39589e"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="heading is-about-hero-title"
                    >
                      About
                    </h1>
                    <a
                      data-w-id="70be419f-58bd-64a7-48cc-18d3ea7f1d52"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      href="#explore"
                      className="simple-link is-explore"
                    >
                      了解更多
                    </a>
                  </div>
                  <RevealLinks />
                  <div className="about-hero-line" />
                  <div className="about-hero-content-grid">
                    <div
                      data-w-id="8b401037-45f7-eb88-2888-8b081e3958a9"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="about-hero-content-text"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <section className="Hero-title p-6 h-[100vh]">
              <div className="container border-2 border-green-500 overflow-hidden h-[95vh] flex justify-start flex-col items-center">
                <div className="sign flex py-[40px] justify-center">
                  <div className="border flex justify-center items-center border-gray-500 rounded-[30px] w-full px-8 py-3">
                    致力於開發使用者體驗良好的網站
                  </div>
                </div>
                <div className="title "></div>
                <main>
                  <div className="z-[99999] main-title static">
                    <h1 className="text-[80px] text-center">WEBSITE DESIGN</h1>
                    <h1 className="text-[80px] text-center leading-normal">
                      BUILD FAST
                    </h1>
                    <p className="w-[400px] text-center mx-auto">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi ducimus sequi a nobis reprehenderit! Architecto
                      facilis, fugit eius mollitia ducimus saepe repudiandae
                      perferendis! Ex doloribus inventore, facere eos delectus
                      officia!
                    </p>
                  </div>
                  <div className="box01  z-1 top-[200px] absolute left-[-160px] border border-black">
                    <img
                      className="w-[500px]"
                      src="https://cdn.prod.website-files.com/669e85bc7c10a1b210e2fcd6/66abf8b62e53dbfa5fc2e5a0_hero-video-optimized.avif"
                      alt=""
                    />
                    <img
                      className="w-[260px] ml-[290px] mt-[40px]"
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="box02 absolute right-[-100px]">
                    <img
                      className="w-[260px] mt-[-370px] ml-[190px] mb-[40px]"
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg"
                      alt=""
                    />
                    <img
                      className="w-[500px]"
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64575947bc71a0cf995a7b34_JEubAaiocBrAyYwOH51Q-ctbfZTy_wnJ_BaDpn7swZc.jpeg"
                      alt=""
                    />
                  </div>
                </main>
              </div>
            </section>
            <section id="explore" className="section with-borders">
              <section className="section is-3d-content-section">
                <div className="container">
                  <div className="_3d-content-padding">
                    <div className="_3d-block" style={{}}>
                      <div className="_3d-content-image" style={{}}>
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt="Portrait of the team"
                            src=""
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
                      <h2 className="heading is-3d-content-title" style={{}}>
                        "個人接案者，溝通更快速"
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="_3d-section-overlay" />
                <div className="parallax-trigger">
                  <div
                    className="parallax-layout"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Office spaces"
                      className="cover-image"
                    />
                    <div className="bg-for-animation" />
                  </div>
                </div>
              </section>
            </section>
            <section id="logos" className="section with-borders">
              <div className="padding small-paddings">
                <div
                  data-w-id="e8ad4759-879f-965a-e711-3a6051ba16a9"
                  className="logo-carousel"
                >
                  <div className="logo-carousel-block" style={{}}>
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf0f_logoipsum-256%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abefd_logoipsum-286%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf08_logoipsum-239%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf06_logoipsum-297%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf01_logoipsum-317%20(1).svg"
                      className="logo-carousel-image"
                    />
                  </div>
                  <div className="logo-carousel-block" style={{}}>
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf0f_logoipsum-256%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abefd_logoipsum-286%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf08_logoipsum-239%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf06_logoipsum-297%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf01_logoipsum-317%20(1).svg"
                      className="logo-carousel-image"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="padding">
                  <div className="w-layout-grid about-content">
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                      className="about-grid-content"
                    >
                      <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">Our journey</p>
                      </div>
                      <h2 className="heading is-medium-title">
                        "溝通無障礙 更加快速變ㄓㄧㄝ"
                      </h2>
                      <p className="paragraph">
                        這些slogan強調了設計的創新性、專業性以及對客戶品牌的提升效果，應該能夠很好地傳達你的品牌價值。
                      </p>
                    </div>
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image12.jpg?v=7b7356d5"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
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
                    <div className="about-grid-image">
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.avatarz.design/assets/images/image06.jpg?v=7b7356d5"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          srcSet="
                                        
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
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                      className="about-grid-content"
                    >
                      <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div>
                      <h2 className="heading is-medium-title">
                        "個人接案，彈性更高，效率更高"
                      </h2>
                      <div className="flex items-start flex-col ">
                        <p className="text-left leading-normal mt-3">
                          -
                          通常比大型設計公司價格更具競爭力，適合預算有限的小型企業或初創公司。
                        </p>
                        <p className="text-left mt-3">
                          -
                          能提供量身訂做的解決方案，更能符合客戶的需求和品牌形象。
                        </p>
                        <p className="text-left mt-3">
                          - 與設計師直接溝通，減少中間環節，提高效率。
                        </p>
                      </div>
                      <Link
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
                            了解更多
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <section class="section with-flex">
    <div class="container">
      <div class="padding">
        <div class="spectacular-images">
          <div
            data-w-id="3ed0f563-c951-0c1a-bb4b-0e2d9352990f"
            class="spectacular-image-large"
            style="will-change: transform; transform: translate3d(0px, -1.9996rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <div class="parallax-trigger">
              <div
                class="parallax-layout"
                style="will-change: transform; transform: translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8e4485f1cc5406b2cbec_stada-potrait-img-8.webp"
                  loading="lazy" alt="Portrait of the team"
                  class="cover-image" />
                <div class="bg-for-animation"></div>
              </div>
            </div>
          </div>
          <div
            data-w-id="21f8228d-903f-f406-0ef6-35dca888068a"
            class="spectacular-image-medium"
            style="will-change: transform; transform: translate3d(0px, -2.9994rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <div class="parallax-trigger">
              <div
                class="parallax-layout"
                style="will-change: transform; transform: translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d60214feb41cb313bb_stada-img-new-2.webp"
                  loading="lazy" alt class="cover-image" />
                <div class="bg-for-animation"></div>
              </div>
            </div>
          </div>
          <div
            data-w-id="2dc9d7e7-658f-2f6d-9837-108851dbe9fd"
            class="spectacular-image-small"
            style="will-change: transform; transform: translate3d(0px, -3.9992rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <div class="parallax-trigger">
              <div
                class="parallax-layout"
                style="will-change: transform; transform: translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6c9f3c1e5f2dcd7aa_stada-img-new-1.webp"
                  loading="lazy" alt class="cover-image" />
                <div class="bg-for-animation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="8b6021f9-e74a-17c5-611d-dff67e2d94ce"
      class="layout-for-large-paragraphs" style>
      <div class="large-bg-paragraphs">
        <p
          data-w-id="8ccb961c-6524-79d6-7485-b2eb0779e880"
          class="large-bg-paragraph is-2nd"
          style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;">
          Company
        </p>
        <p
          data-w-id="8ccb961c-6524-79d6-7485-b2eb0779e882"
          class="large-bg-paragraph"
          style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;">
          Company
        </p>
        <p
          data-w-id="8ccb961c-6524-79d6-7485-b2eb0779e884"
          class="large-bg-paragraph is-2nd"
          style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;">
          Company
        </p>
      </div>
    </div>
  </section> */}
            {/* <section class="section">
    <div class="container">
      <div class="padding">
        <div class="vertical-flex with-gap">
          <div
            data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765ae"
            style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
            class="about-grid">
            <a data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765af"
              href="/journal" class="about-grid-block w-inline-block">
              <div class="about-title-block">
                <h3 class="heading is-large-cta-title">Journal</h3>
                <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765b3"
                  class="about-grid-title-line" style></div>
              </div>
              <div class="about-grid-description">
                <div class="max-width-25" style><p
                    class="paragraph">Follow our journal for expert
                    articles and tips to keep you ahead of the
                    curve.</p></div>
                <p data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765b8"
                  class="simple-link" style>Read the Journal</p>
              </div>
              <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765ba"
                class="about-grid-bg" style></div>
            </a>
            <a data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765bb"
              href="/store"
              class="about-grid-block is-2nd w-inline-block">
              <div class="about-title-block">
                <h3 class="heading is-large-cta-title">Store</h3>
                <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765bf"
                  class="about-grid-title-line" style></div>
              </div>
              <div class="about-grid-description">
                <div class="max-width-25" style><p class="paragraph">Find
                    the perfect smart devices to enhance your everyday
                    life.</p></div>
                <p data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765c4"
                  class="simple-link" style>Show now</p>
              </div>
              <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765c6"
                class="about-grid-bg" style></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> */}
            <section>
              <div className="container"></div>
            </section>
            <section className="px-[40px] py-[90px]">
              <Table
                className="bg-green-700 rounded-xl py-[50px]"
                aria-label="Example table with dynamic content"
              >
                <TableHeader
                  className="text-white border-b-2 text-[22px] border-white"
                  columns={columns}
                >
                  {(column) => (
                    <TableColumn
                      className="text-white  text-[22px] border-b-2 border-white"
                      key={column.key}
                    >
                      {column.label}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody className="text-white" items={rows}>
                  {(item) => (
                    <TableRow className="text-white text-center" key={item.key}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <div className="  flex py-6 justify-center">
                <b className=" text-[16px] w-full lg:w-2/3  text-center leading-normal">
                  *選擇套版網站，您可以快速、低成本地建立一個簡單易用的網站，適合需要迅速上線的小型業務；而客製化網站則提供高度的設計和功能靈活性，讓您的品牌在數位世界中脫穎而出，並能隨業務成長進行擴展，是追求獨特性和長期效益的理想選擇。
                </b>
              </div>
            </section>
            {/* <section></section>
              <p>客製化網站跟套版網站比較</p>
              <div className="container"></div>
            </section> */}
            <section className="section">
              <div className="container">
                <div className="padding small-paddings">
                  <div className=" ">
                    <div
                      className="vertical-flex with-small-gap plans-wrap "
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <h3
                        className="heading  text-[40px] mx-auto"
                        style={{
                          marginBottom: 30,
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        選擇適合你的方案
                      </h3>
                    </div>
                    <div
                      className="jobs"
                      style={{ display: "flex", padding: 0 }}
                    >
                      <div
                        id="w-node-_9d02a341-146a-d088-349b-f68535a2ecdc-35a2ecda"
                        className="job-card"
                        srtyle="width:400px; display:flex; flex-direction:column"
                      >
                        <p className="job-card-role">套版網站(NT.40000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">套版網站</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">方案一</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$200,000 per year</p>
                </div>
              </div> */}
                        <div
                          className="job-card-link-flex"
                          style={{
                            background: "rgb(115, 208, 102)",
                            color: "white",
                          }}
                        >
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                        {/* <div style="height: 400px;">
                Title
              </div> */}
                      </div>
                      <div
                        id="w-node-_90fc4fc9-5875-a940-a16d-30733a08bafa-35a2ecda"
                        className="job-card"
                      >
                        <p className="job-card-role">購物網站(NT.60000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">套版網站</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">Remote or office</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$180,000 per year</p>
                </div>
              </div> */}
                        <div className="job-card-link-flex">
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                      </div>
                      <div
                        id="w-node-_01078e3d-0c2e-e80d-0be2-5a38ca83ccf4-35a2ecda"
                        className="job-card bg-green-500"
                      >
                        <p className="job-card-role">客製化網站(NT.80000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">套版網站</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">Remote or office</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$120,000 per year</p>
                </div>
              </div> */}
                        <div className="job-card-link-flex">
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pb-6">
                <b className="mx-auto text-[16px]">
                  *方案價格皆為大約估算，實際可討論詳談
                </b>
              </div>
            </section>
            <VanishList />
          </main>
        </div>
      </div>
    </>
  );
}

// reportWebVitals();
