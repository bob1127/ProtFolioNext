// pages/blog/index.jsx
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import HeroSlider from "../../components/SwiperScroll02/page";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import { WarpBackground } from "../../components/ui/warp-background.tsx";
import Flip from "../../components/Flip.jsx";
import { NextSeo } from "next-seo";
import {
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card.tsx";

const Blog = ({}) => {
  const webpage = {
    name: "精選案例－極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
    description:
      "極客網頁設計（JEEK Webdesign）提供專業形象官網、商業攝影、客製化及套版網站設計服務，專注於實現創意，助企業提升品牌形象。我們位於台中，提供從設計到開發的全面支援，讓您的網站更具吸引力與競爭力。",
    url: "https://www.jeek-webdesign.com.tw/pages",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };

  return (
    <div className=" flex border border-black justify-center w-full flex-col">
      <NextSeo
        title="精選案例－極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐"
        description="極客網頁設計（JEEK Webdesign）提供專業形象官網、商業攝影、客製化及套版網站設計服務，專注於實現創意，助企業提升品牌形象。我們位於台中，提供從設計到開發的全面支援，讓您的網站更具吸引力與競爭力。"
        openGraph={{
          title:
            "精選案例－極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
          description:
            "極客網頁設計（JEEK Webdesign）提供專業形象官網、商業攝影、客製化及套版網站設計服務，專注於實現創意，助企業提升品牌形象。我們位於台中，提供從設計到開發的全面支援，讓您的網站更具吸引力與競爭力。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/精選案例-極客網頁設計.png",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "網站設計, SEO優化, 成本控制, 網頁設計公司, 行動友善, 3D建模, 品牌形象提升, 自然流量, 搜尋引擎排名, 網站速度優化, 外部連結, Google PageSpeed Insights, 關鍵字規劃, 網站可見性, 數位行銷, 網站建置",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: webpage.name,
            description: webpage.description,
            url: webpage.url,
            publisher: {
              "@type": "Organization",
              name: webpage.name,
              logo: {
                "@type": "ImageObject",
                url: webpage.logo,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: webpage.contact.phone,
                contactType: "Customer Service",
                email: webpage.contact.email,
              },
            },
          }),
        }}
      />
      <section className="hero"></section>

      <section className="hero-img 2xl:px-[100px] mt-[80px]">
        <Flip />
        {/* <WarpBackground>
          <Card className="w-80">
            <CardContent className="flex flex-col gap-2 p-4">
              <CardTitle>Shopify | Wordress | 客製化</CardTitle>
              <CardDescription>
                各式版型設計，建立符合您需求的網站
              </CardDescription>
            </CardContent>
          </Card>
        </WarpBackground> */}
        {/* <Image
          placeholder="empty"
          alt="Hero-img"
          loading="lazy"
          src="/images/banner04.png"
          width={1920}
          height={768}
        ></Image> */}
      </section>
      <section className="projext-container pb-[70px] md:py-[100px]  px-0 md:px-[40px] 2xl:px-[100px]">
        <div className="flex w-full flex-col">
          <div className="flex mb-[30px] py-[30px] w-full overflow-x-scroll md:pb-[80px] xl:py-5 flex-col scrollbar-hide">
            <Tabs aria-label="Options">
              <Tab key="精選網站" title="精選網站" style={{ fontSize: "18px" }}>
                <Card>
                  <CardBody>
                    <div className="flex flex-wrap">
                      <a
                        href="https://ximan-test.vercel.app"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border-2  w-full md:w-[390px]  2xl:w-[500px] ">
                          <img
                            src="/images/ximan.jpg"
                            alt="esim"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5 w-full   flex justify-between">
                          <b>喜曼精品</b>{" "}
                          <b>
                            <span className="bg-[#202020] text-[13px] rounded-full px-3 py-1 text-white">
                              building..
                            </span>
                          </b>
                        </div>
                      </a>
                      <a
                        href="https://esim-git-main-bob1127s-projects.vercel.app"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border-2  w-full md:w-[390px]  2xl:w-[500px] ">
                          <img
                            src="/images/esim.jpg"
                            alt="esim"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5 w-full   flex justify-between">
                          <b>Esim</b>{" "}
                          <b>
                            <span className="bg-[#202020] text-[13px] rounded-full px-3 py-1 text-white">
                              building..
                            </span>
                          </b>
                        </div>
                      </a>
                      <a
                        href="www.accelera-radial.ca"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border-2  w-full md:w-[390px]  2xl:w-[500px] ">
                          <img
                            src="/images/輪胎.jpg"
                            alt="輪胎.jpg"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5 w-full   flex justify-between">
                          <b>Accelera radial Canada</b>{" "}
                          <b>
                            <span className="bg-[#202020] text-[13px] rounded-full px-3 py-1 text-white">
                              building..
                            </span>
                          </b>
                        </div>
                      </a>
                      <a
                        href="https://kuankoshi.com/"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border-2  w-full md:w-[390px]  2xl:w-[500px] ">
                          <img
                            src="/images/寬越室內設計.jpg"
                            alt="專案04-寬越室內設計"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>寬越室內設計</b> <br></br>
                        </div>
                      </a>
                      <a
                        href="https://www.yiyuan-arch.com.tw"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border-2  w-full md:w-[390px]  2xl:w-[500px] ">
                          <img
                            src="/images/Yi-Yuan.jpg"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>宜園建設</b> <br></br>
                        </div>
                      </a>
                      <a
                        href="https://www.starislandbaby.com"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border-2  w-full md:w-[390px]  2xl:w-[500px] ">
                          <img
                            src="/images/星嶼童裝-專案.jpg"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>星嶼童裝</b> <br></br>
                        </div>
                      </a>
                      <a
                        href="https://www.zensor.com.tw"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[500px] border-black">
                          <img
                            src="/images/portfolio-zensor.webp"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>禪譜科技股份有限公司</b> <br></br>
                        </div>
                      </a>
                      <a
                        href="https://www.ultraehp.com"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        data-aos-delay="100"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[500px] border-black">
                          <img
                            src="/images/ultraehp01.png"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>超極生技股份有限公司</b> <br></br>
                        </div>
                      </a>
                      <a
                        href="https://www.king-newton.com"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        data-aos-delay="200"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[500px] border-black">
                          <img
                            src="/images/king.png"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>金牛頓股份有限公司</b> <br></br>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="客製化網站"
                title="客製化網站"
                style={{ fontSize: "18px" }}
              >
                <Card>
                  <CardBody>
                    <div className="flex flex-wrap">
                      <a
                        href="https://domc.com.tw"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[500px] border-black">
                          <img
                            src="/images/多利安.png"
                            alt="專案05-多利安音樂藝術"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>多利安音樂藝術</b> <br></br>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="wordpress形象網站"
                title="wordpress形象網站"
                style={{ fontSize: "18px" }}
              >
                <Card>
                  <CardBody>
                    {" "}
                    <div className="flex flex-wrap">
                      <a
                        href="https://www.chuan-wo.com.tw/"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[800px] border-black">
                          <Image
                            loading="lazy"
                            width={400}
                            height={300}
                            src="/images/project/chuan-wo_室內設計官方網站.webp"
                            alt="chuan-wo_室內設計官方網站"
                            className="w-full"
                            placeholder="empty"
                          ></Image>
                        </div>

                        <div className="txt py-5">
                          <b>chuan-wo 室內設計</b> <br></br>
                          <a href="text-blue hover:font-bold text-[16px] text-blue"></a>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="wordpress購物網站"
                title="wordpress購物網站"
                style={{ fontSize: "18px" }}
              >
                <Card>
                  <b className="text-[18px] mb-[20px] mt-[30px] ml-[30px]">
                    如對任何版型有興趣，歡迎與我們討論
                  </b>
                  <CardBody>
                    {" "}
                    <div className="flex flex-wrap">
                      <a
                        href="https://drwako.com.tw"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[800px] border-black">
                          <Image
                            loading="lazy"
                            width={400}
                            height={300}
                            src="/images/project/drwako-肌膚保養官方購物網站.webp"
                            alt="drwako-肌膚保養官方購物網站"
                            className="w-full"
                            placeholder="empty"
                          ></Image>
                        </div>

                        <div className="txt py-5">
                          <b>drwako - 肌膚保養</b> <br></br>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="wordpress一頁式"
                title="wordpress一頁式"
                style={{ fontSize: "18px" }}
              >
                <Card>
                  <b className="text-[18px] mb-[20px] mt-[30px] ml-[30px]">
                    如對任何版型有興趣，歡迎與我們討論
                  </b>
                  <CardBody>
                    {" "}
                    <div className="flex flex-wrap">
                      <a
                        href="https://websitedemos.net/blingg-jewelry-store-04/?customize=template"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[390px]  2xl:w-[500px] border-black">
                          <Image
                            src="/images/WP-theme-demo/LandingPage/demo-01.jpg"
                            width={400}
                            height={300}
                            alt="wp-網頁版型範例"
                            placeholder="empty"
                            loading="lazy"
                          ></Image>
                        </div>

                        <div className="txt py-5">
                          <b>template</b> <br></br>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
