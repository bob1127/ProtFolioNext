import React from "react";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image.js";
import TextMask from "../../components/TextMask/page.jsx";
// import Inner from "../../components/Inner/index.jsx";
import { useState, useEffect } from "react";
import { WiSnowWind } from "react-icons/wi";
const imageLoader = ({ src, width, quality }) => {
  return `https://www.ultraehp.com/images/test-portfolio/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const imageLoader01 = ({ src, width, quality }) => {
  return `https://s3.amazonaws.com/images.seroundtable.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};
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
        <Head>
          {/* <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          /> */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "極客網頁設計-提升搜尋排名",
                url: "https://www.ultraehp.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://yourwebsite.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
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
                    <div
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
                    </div>
                    <TextMask />
                    <a
                      href="/"
                      className="text-[#242424] text-[15px] md:text-[18px] xl:text-[22px]"
                    >
                      個人工作室｜私人接案 - 花費小預算，
                      <span className="bg-green-500 inline-block px-4 py-3  w-[150px] text-center">
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
                    <div
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
                    </div>
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
                <div className="home-hero-bg">
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
                      <div className="slider">
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
                  href="https://www.zensor.com.tw"
                  className="fullwidth-link w-inline-block"
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
                  <br />
                  <br />
                  <div className="rounded-[30px] bg-[#333] text-[20px] text-white inline-block p-3">
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
              <section className="section">
                <div className="padding">
                  <div className="main-container">
                    <div id="w-node-_0d97e7f2-7677-0103-d394-d8b1b529b132-c41abecd">
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <Image
                            src="665ee622d8843e9bd55dc8035ea21c717f410326-3388x2946.png"
                            width={800}
                            height={500}
                            loader={imageLoader}
                          />
                          {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-eyebrow-icon"
                          /> */}
                        </div>
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
                            src="665ee622d8843e9bd55dc8035ea21c717f410326-3388x2946.png"
                            width={800}
                            height={800}
                            loader={imageLoader}
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
                            <a
                              href="/service/product"
                              className="link-with-arrows"
                            >
                              高效的性能與快速的頁面加載
                              <p>
                                Next.js結合了React的靈活性和靜態站點生成（SSG）的速度，使您的網站在任何設備上都能快速加載。這不僅提高了用戶體驗，還能改善SEO，讓您的網站在搜尋引擎中排名更高。
                              </p>
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="service-cms-page-link-item w-dyn-item"
                          >
                            <a
                              href="/service/usability"
                              className="link-with-arrows"
                            >
                              無縫的內容管理
                              <p>
                                透過WordPress作為後端管理系統，您可以輕鬆地管理網站內容。無需撰寫代碼，您便能透過熟悉的WordPress介面來更新文章、頁面和多媒體內容，同時仍能享受無頭CMS所帶來的靈活性和自由度。
                              </p>
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="service-cms-page-link-item w-dyn-item"
                          >
                            <a
                              href="/service/development"
                              className="link-with-arrows"
                            >
                              極致的設計與開發自由
                              <p>
                                無頭架構讓前端與後端分離，意味著您可以自由選擇和設計最符合品牌風格的前端界面，而不受限於WordPress預設的佈局或樣式。Next.js的靈活性讓開發人員能夠更快速地實現自訂設計，並整合各種前端技術。
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Image
                          src="up100-10-PhotoRoom.png"
                          loader={imageLoader}
                          loading="lazy"
                          height={1000}
                          width={1000}
                        />
                      </div>
                    </div>
                    <p
                      id="w-node-_3e2ecc0f-542d-8997-9376-5ddc25760056-c41abecd"
                      className="paragraph is-sticky"
                    >
                      Headless-無頭網站
                    </p>
                  </div>
                </div>
              </section>
              <section className="3Dmodel-interaction flex-col flex justify-center items-center">
                <h2 className="text-[50px] font-extrabold">
                  "3D運用-交互式網頁"
                </h2>
                <p>3d 建模產品運用在網頁上</p>
                <div className="flex justify-center">
                  <img
                    className="w-[80%] rounded-xl mx-auto"
                    src="https://www.vectary.com/website_assets/636cc984003871e3cda597bb/64b9124624a0d8fc835bf4cc_AR%20v2.jpg"
                    alt=""
                  />
                </div>
              </section>
              <section className="section with-borders">
                <div className="title text-center">
                  <h2 className="text-[40px] text-black">SEO OPTIMIXATIOIN </h2>
                  <p className="text-[24px] my-5 text-gray-700">Seo 行銷</p>
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
                      <p className="paragraph text-[20px] mb-[40px] is-large">
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
              </section>
              <section id="services" className="section">
                <a
                  data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                  className="fullwidth-link w-inline-block"
                  style={{}}
                  href="https://www.zensor.com.tw"
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
                    網頁行銷
                  </h2>
                  <br />
                  <br />
                  <div className="rounded-[30px] bg-[#333] text-[20px] text-white inline-block p-3">
                    (結構優化｜SEO行銷)
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
              <section className="section">
                <div className="padding">
                  <div className="main-container">
                    <div id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c261-c41abecd">
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-eyebrow-icon"
                          />
                        </div>
                        <p className="eyebrow-text">Company</p>
                      </div>
                    </div>

                    <div
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c264-c41abecd"
                      className="cards-wrapper"
                    >
                      <div className="card-title-block">
                        <h2 className="heading is-extralarge text-[]">
                          你的產品很好，但卻沒讓更多人看見？
                        </h2>
                        <a
                          id="w-node-_4f18f1da-1e0a-2dad-3a97-4b92f5bc2c75-c41abecd"
                          href="/about"
                          className="simple-link"
                        >
                          「創新設計，讓您的網站脫穎而出」
                        </a>
                      </div>
                      <div className="cards">
                        <div
                          id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c26b-c41abecd"
                          data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c26b"
                          className="card"
                          style={{}}
                        >
                          <div className="card-icon with-margin">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-card-icon"
                            />
                          </div>
                          <p className="card-paragraph">
                            <Image
                              className="mb-4"
                              src="google-logo-exploding-1681647430.jpg"
                              width={800}
                              height={800}
                              loader={imageLoader01}
                            />
                            {/* <img
                              className="w-full my-3 rounded-2xl mx-auto"
                              src="https://blog-cdn.lottiefiles.com/cdn-cgi/image/width=640,quality=80,format=auto/2024/08/How-Do-Lottie-Animations-Help-with-SEO_.png"
                              alt=""
                            /> */}
                            <br></br>
                            <p className="text-[16px] font-normal">
                              根據Google的數據，超過90%的消費者會使用搜索引擎來查找產品和服務。如果你的企業能夠在搜索結果中獲得較高的曝光率，潛在客戶就更容易記住你的品牌，從而提高品牌知名度。
                            </p>
                          </p>
                        </div>
                        <div
                          id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c274-c41abecd"
                          data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c274"
                          className="card"
                          style={{}}
                        >
                          {/* <div className="card-icon">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-card-icon"
                            />
                          </div> */}
                          <div className="card-content">
                            <p className="card-paragraph">降低營銷成本</p>
                            <p className="card-text-small">
                              <img
                                className="w-full rounded-lg my-3"
                                src="https://assets-v2.lottiefiles.com/cdn-cgi/image/width=640,quality=80,format=auto/https://i.ytimg.com/vi/_nbTlEKE8Ac/maxresdefault.jpg"
                                alt=""
                              />
                              比較傳統的廣告渠道，如電視或報紙，SEO和社交媒體營銷的成本較低，且效果持久。
                              Forrester
                              Research指出，內容營銷成本约为傳統廣告的62%，但能產生3倍的潜在客戶。
                            </p>
                          </div>
                        </div>
                        <div
                          id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c27c-c41abecd"
                          data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c27c"
                          className="card"
                          style={{}}
                        >
                          <div className="card-icon">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6f994f099c6fa0af1_visibility_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-card-icon"
                            />
                          </div>
                          <div className="card-content">
                            <p className="card-paragraph">Our Journey</p>
                            <p className="card-text-small">
                              <img
                                className="w-full rounded-lg my-3"
                                src="https://assets-v2.lottiefiles.com/cdn-cgi/image/width=640,quality=80,format=auto/https://i.ytimg.com/vi/7v13bzpJyYM/maxresdefault.jpg"
                                alt=""
                              />
                              對於中小企业而言，网站的曝光度不僅僅是吸引流量的問題，還直接影響到品牌的生存和成長。
                              透過提高網站曝光度，中小企业可以更更多的客戶信任、提升销售额、降低營銷成本，並在市場競爭中佔據有利位置。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c284-c41abecd"
                      className="paragraph is-sticky"
                    >
                      商業攝影
                    </p>
                  </div>
                </div>
              </section>
              <section className="section with-bg-dark">
                <div className="padding">
                  <div className="main-container">
                    <div id="w-node-_8370794b-f6ab-a9b0-56de-0c1faa6af515-c41abecd">
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6695ce27515b5811a_deployed_code_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-eyebrow-icon"
                          />
                        </div>
                        <p className="eyebrow-text">Features</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_17adc12d-78a0-5543-81dd-4bc4bf3b431c-c41abecd"
                      className="features-content-flex"
                    >
                      <h2 className="heading is-extralarge text-black">
                        不必高價，也能擁有卓越網頁
                      </h2>
                      <p className="text-[20px] text-black">
                        高效能設計，實惠價格，成就您的品牌
                      </p>
                      <div className="features-wrapper w-dyn-list">
                        <div role="list" className="features-grid w-dyn-items">
                          <div
                            role="listitem"
                            className="feature-item w-dyn-item"
                          >
                            <div className="feature-image">
                              <div className="reveal-image-trigger">
                                <img
                                  loading="lazy"
                                  alt=""
                                  src="https://www.ultraehp.com/images/test-portfolio/6697d9dae472fdc9bf452bfc_stada-img-n-9.png"
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
                              data-w-id="07d9a56e-d643-2bf8-806a-32751f6a64a2"
                              style={{
                                transform:
                                  "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                                opacity: 0,
                              }}
                              href="/feature/design"
                              className="feature-content-link w-inline-block"
                            >
                              <h3
                                data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"
                                className="heading is-feature-title"
                                style={{}}
                              >
                                Design
                              </h3>
                              <div
                                data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"
                                className="feature-line"
                                style={{}}
                              />
                              <div
                                data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"
                                className="feature-more-block"
                                style={{}}
                              >
                                <p className="case-study-category-text">More</p>
                                <img
                                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                                  loading="lazy"
                                  alt=""
                                  className="icon in-feature-icon"
                                />
                              </div>
                              <div
                                data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"
                                className="feature-bg"
                                style={{}}
                              />
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="feature-item w-dyn-item"
                          >
                            <div className="feature-image">
                              <div className="reveal-image-trigger">
                                <img
                                  loading="lazy"
                                  alt=""
                                  src="https://www.ultraehp.com/images/test-portfolio/668e6aca4fb399ee1389df93_stada-img-3-p-1600.webp"
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
                              data-w-id="07d9a56e-d643-2bf8-806a-32751f6a64a2"
                              style={{
                                transform:
                                  "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                                opacity: 0,
                              }}
                              href="https://www.zensorrd.com"
                              className="feature-content-link w-inline-block"
                            >
                              <h3
                                data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"
                                className="heading is-feature-title"
                                style={{}}
                              >
                                Innovation
                              </h3>
                              <div
                                data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"
                                className="feature-line"
                                style={{}}
                              />
                              <div
                                data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"
                                className="feature-more-block"
                                style={{}}
                              >
                                <p className="case-study-category-text">More</p>
                                <img
                                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                                  loading="lazy"
                                  alt=""
                                  className="icon in-feature-icon"
                                />
                              </div>
                              <div
                                data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"
                                className="feature-bg"
                                style={{}}
                              />
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="feature-item w-dyn-item"
                          >
                            <div className="feature-image">
                              <div className="reveal-image-trigger">
                                <img
                                  loading="lazy"
                                  alt=""
                                  src="https://ultraehp.com/images/test-portfolio/Untitled-Camera-2.png"
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
                              data-w-id="07d9a56e-d643-2bf8-806a-32751f6a64a2"
                              style={{
                                transform:
                                  "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                                opacity: 0,
                              }}
                              href="/feature/compatibility"
                              className="feature-content-link w-inline-block"
                            >
                              <h3
                                data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"
                                className="heading is-feature-title"
                                style={{}}
                              >
                                Compatibility
                              </h3>
                              <div
                                data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"
                                className="feature-line"
                                style={{}}
                              />
                              <div
                                data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"
                                className="feature-more-block"
                                style={{}}
                              >
                                <p className="case-study-category-text">More</p>
                                <img
                                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                                  loading="lazy"
                                  alt=""
                                  className="icon in-feature-icon"
                                />
                              </div>
                              <div
                                data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"
                                className="feature-bg"
                                style={{}}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        id="w-node-b11b5a39-657b-4d88-a15d-8479a328e955-c41abecd"
                        href="/features"
                        className="simple-link-blue"
                      >
                        All features
                      </a>
                    </div>
                    <p
                      id="w-node-_9db66ef5-79ba-ccf2-b611-2ffbbcc49659-c41abecd"
                      className="paragraph text-black is-sticky"
                    >
                      其他行銷
                    </p>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="main-container large-paddings">
                  <h2
                    id="w-node-_7f252330-861b-fbf3-b542-876890600281-c41abecd"
                    className="heading is-extralarge"
                  >
                    一個良好的企業形象網站有多重要？
                  </h2>
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
                        href="/Blogs"
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
                        href="/Blogs"
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
                        href="/Blogs"
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
                    href="/Blogs"
                    className="simple-link"
                  >
                    全部文章
                  </a>
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
