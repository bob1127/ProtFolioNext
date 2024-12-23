// pages/blog/index.jsx
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import HeroSlider from "../../components/SwiperScroll02/page";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import { NextSeo } from "next-seo";
export async function getStaticProps() {
  const postsRes = await fetch(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/posts?_embed"
  );
  const categoriesRes = await fetch(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/categories"
  );
  const tagsRes = await fetch(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/tags"
  );

  const posts = await postsRes.json();
  const categories = await categoriesRes.json();
  const tags = await tagsRes.json(); // 獲取標籤數據

  return {
    props: {
      posts,
      categories,
      tags, // 將標籤傳遞給組件
    },
    revalidate: 10, // 每隔10秒重新生成
  };
}

const Blog = ({ posts, categories, tags }) => {
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

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
      <section className="hero-img mt-[80px]">
        <Image
          placeholder="empty"
          alt="Hero-img"
          loading="lazy"
          src="/images/banner04.png"
          width={1920}
          height={768}
        ></Image>
      </section>
      <section className="projext-container pb-[70px] md:py-[100px]  px-0 md:px-[40px] 2xl:px-[100px]">
        <div className="flex w-full flex-col">
          <div className="flex w-full  py-4  md:pb-[80px] xl:py-5 flex-col">
            <Tabs aria-label="Options">
              <Tab key="精選網站" title="精選網站">
                <Card>
                  <CardBody>
                    <div className="flex flex-wrap">
                      <a
                        href="https://www.zensor.com.tw"
                        target="_blank"
                        data-aos="fade-up"
                        data-duration="300"
                        className="project-item flex flex-col mx-3"
                      >
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[400px]  2xl:w-[800px] border-black">
                          <img
                            src="/images/portfolio-zensor.webp"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>禪譜科技股份有限公司</b> <br></br>
                          <a href="text-blue hover:font-bold text-[16px] text-blue">
                            live demo
                          </a>
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
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[400px]  2xl:w-[800px] border-black">
                          <img
                            src="/images/ultraehp01.png"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>超極生技股份有限公司</b> <br></br>
                          <a href="text-blue hover:font-bold text-[16px] text-blue">
                            live demo
                          </a>
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
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[400px]  2xl:w-[800px] border-black">
                          <img
                            src="/images/king.png"
                            alt="專案01-禪譜科技"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>金牛頓股份有限公司</b> <br></br>
                          <a href="text-blue hover:font-bold text-[16px] text-blue">
                            live demo
                          </a>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="客製化網站" title="客製化網站">
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
                        <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[400px]  2xl:w-[800px] border-black">
                          <img
                            src="/images/多利安.png"
                            alt="專案05-多利安音樂藝術"
                            className="w-full"
                            placeholder="empty"
                          ></img>
                        </div>

                        <div className="txt py-5">
                          <b>多利安音樂藝術</b> <br></br>
                          <a href="text-blue hover:font-bold text-[16px] text-blue">
                            live demo
                          </a>
                        </div>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="商業網站" title="商業網站">
                <Card>
                  <CardBody>
                    {" "}
                    <a
                      href="https://cxuan.com.tw"
                      target="_blank"
                      data-aos="fade-up"
                      data-duration="300"
                      className="project-item flex flex-col mx-3"
                    >
                      <div className="img-wrap overflow-hidden  rounded-lg border w-full md:w-[400px]  2xl:w-[800px] border-black">
                        <img
                          src="/images/quan.png"
                          alt="專案04-澄軒飲水"
                          className="w-full"
                          placeholder="empty"
                        ></img>
                      </div>

                      <div className="txt py-5">
                        <b>澄軒飲水</b> <br></br>
                        <a href="text-blue hover:font-bold text-[16px] text-blue">
                          live demo
                        </a>
                      </div>
                    </a>
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
