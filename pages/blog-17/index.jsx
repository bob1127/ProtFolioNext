"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import BlogCarousel from "../../components/EmblaCarousel10/index";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["ContactUs"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const webpage = {
    name: "客製化網站能為企業或商家帶來哪些實質上的收益？如何帶來收益？｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐",
    description:
      "了解客製化網站如何幫助企業提升品牌形象、改善用戶體驗、提高SEO曝光，並提供數據支持，實現銷售增長與業務擴展。",
    url: "https://www.jeek-webdesign.com.tw/blog-16",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // 延遲 300ms 來啟動動畫
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 300);

  //   // 清除計時器
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="bg-[#f9f9f8]">
      <NextSeo
        title="客製化網站能為企業或商家帶來哪些實質上的收益？如何帶來收益？｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐"
        description="了解客製化網站如何幫助企業提升品牌形象、改善用戶體驗、提高SEO曝光，並提供數據支持，實現銷售增長與業務擴展。"
        openGraph={{
          url: "www.jeek-webdesign.com",
          title:
            "客製化網站能為企業或商家帶來哪些實質上的收益？如何帶來收益？｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐",
          description:
            "了解客製化網站如何幫助企業提升品牌形象、改善用戶體驗、提高SEO曝光，並提供數據支持，實現銷售增長與業務擴展。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/scremingFrog-debug.png",
              width: 1200,
              height: 630,
              alt: "",
            },
          ],
          site_name: "極客網頁設計",
        }}
        twitter={{
          handle: "@twitterhandle",
          site: "@twitterhandle",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="如何使用Screaming Frog進行網站SEO檢測與問題修復
-極客網頁設計"
        />
        <meta
          property="og:description"
          content="了解客製化網站如何幫助企業提升品牌形象、改善用戶體驗、提高SEO曝光，並提供數據支持，實現銷售增長與業務擴展。"
        />
        <meta
          property="og:image"
          content="www.jeek-webdesign.com.tw/images/深入解析 SEO 成效指標，助您精準優化網站-極客網頁設計.png"
        />
        <meta
          property="og:url"
          content="https://www.jeek-webdesign.com.tw/blog-17"
        />
        <meta property="og:type" content="website" />
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
      </Head>

      <div>
        <div className="article-title hidden md:black relative">
          <div className="txt bg-black-rgba z-[999] absolute bottom-0 h-1/2 left-0 flex justify-center items-center w-[100vw]  border-t border-white/50 backdrop-blur-md"></div>
          <Image
            src="https://www.ultraehp.com/images/test-portfolio/blog-cover.png"
            width={1920}
            height={768}
            placeholder="empty"
            className="rounded-md"
          ></Image>
        </div>
        <div className="article-content 2xl:px-[200px] p-[20px] md:px-[110px] xl:px-[200px]">
          <div className="patagrph p-2  ">
            <div className="title  pb-[50px] flex flex-col ">
              <section className="section_navgation pt-[50px] flex">
                <a className="hover:font-black duration-300" href="/blogs">
                  文章總覽
                </a>{" "}
                ←
                <a
                  href="/blog-11"
                  className="hover:font-black duration-300"
                  如何使用Screaming
                  Frog進行網站SEO檢測與問題修復
                ></a>
              </section>
              <h1 className="text-center text-[rgb(51,51,51)] font-custom ">
                客製化網站能為企業或商家<br></br>帶來哪些實質上的收益？<br></br>
                如何帶來收益？
              </h1>
              <div className="title-content-date">
                <div></div>
                <div className="text-[14px]">
                  <b className="mr-3">Seo , Search Engine</b>
                  <b className="Blog-mark">2024/04/05</b>
                </div>
              </div>
              <div className="pb-[40px] title-content mt-4 flex flex-row justify-between border-b border-[#d1d1d1]">
                <div className="flex flex-row">
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] text-black px-3 py-1 bg-[#80aad9]  ">
                    網頁行銷
                  </div>
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] text-black px-3 py-1 bg-white  ">
                    網頁維護
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/網頁做好就好了嗎-極客網頁設計|網頁後續維護.png"
              width={900}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-xl"
            ></Image>
          </div>

          <div
            className="patagrph mx-auto  w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[60%] p-2 "
            data-aos="fade"
          >
            <br></br>
            <div className="">
              <div className="imgText mt-[50px]">
                {/* <h2>
                  AI 搜尋引擎 SearchGPT 對 Google 的影響：SEO 優化的新挑戰
                </h2>
                <fieldset></fieldset> */}

                {/* <h3>1.使用者數量</h3> */}

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  當今的企業與商家，在競爭激烈的市場中，若想脫穎而出，擁有一個專屬於自己的客製化網站來講變得格外重要。客製化網站能為企業帶來哪些實質上的收益呢？又是如何幫助企業實現這些收益的呢？
                </div>

                <br></br>
                <h2 className="Blog_header">建立品牌形象，提升企業專業度</h2>
                <fieldset></fieldset>
                <div className="p-0 m-0">
                  <div>
                    <div className="Blog_body">
                      客製化網站能夠
                      <b className="Blog-mark">
                        根據企業的需求與特色來設計，從網站的色調、排版、到功能，都能展現出品牌的獨特性。
                      </b>
                      這樣的網站設計能夠讓訪客感受到企業的專業性與重視，從而提高品牌形象與信任感，增加顧客的購買意願。有了專屬的品牌形象，企業能夠讓顧客一眼識別，並且增強對品牌的忠誠度，從而提高轉換率與客戶維護，最終促進銷售增長。
                      <br></br>
                      此外，透過整合像是<b className="Blog-mark">Canva</b>
                      這樣的設計工具，企業主或客戶即使沒有設計經驗，也能輕鬆創建美觀的網站元素，進一步提升網站的視覺效果與吸引力，讓網站更具專業感與吸引力，幫助他們隨時維護和更新網站內容。
                    </div>
                  </div>
                  <a
                    id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                    target="_blank"
                    href="https://www.canva.com/"
                    className="simple-link"
                  >
                    使用Canva設計你的網頁元素
                  </a>

                  <div>
                    <h3 className=" Blog_header">提高網站的可擴展性與靈活性</h3>
                    <div className="Blog_body">
                      隨著企業的發展，需求會不斷改變。一個客製化網站能夠根據企業的發展需求，進行靈活擴展與調整，無論是增加新的功能、整合新的第三方工具，還是改變網站的設計風格，都能輕鬆應對。企業不需要為了適應變化而重新建設網站，可以節省大量的時間與費用，並且在面對市場需求變化時保持競爭力，這樣可以有效提升企業的市場地位和持續增長。
                    </div>
                  </div>

                  <div>
                    <h3 className=" Blog_header">提供數據支持，提升決策效率</h3>
                    <div className="Blog_body">
                      客製化網站能幫助企業更有效地做決策，因為它可以整合像
                      Google Analytics
                      這樣的分析工具，幫助你了解顧客在網站上的行為、喜好，甚至是哪個環節讓他們卡住。這些數據可以用來優化購物流程，針對顧客需求調整行銷策略，像是推出更符合需求的促銷活動，最終提升銷售和市場份額。
                      相比之下，如果你只用電商平台來賣商品，就會有一些問題。比如，電商平台通常不會提供完整的顧客資料，讓你無法直接和顧客互動或做精準的行銷。而且，平台還會抽一大筆佣金，讓你的利潤變少。有了自己的網站，你可以完全掌握顧客數據，建立自己的客戶名單，做更精準的行銷，還不用被抽成，省下來的錢就能讓你的生意賺得更多！
                    </div>
                  </div>
                </div>
                <section className="others-blog mt-[60px] flex flex-col items-center justify-center">
                  <div className="title">
                    <h3 className=" text-[28px] md:text-[34px]">
                      你可能也有興趣其他文章
                    </h3>
                  </div>
                  <BlogCarousel />
                </section>
                <br></br>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
