"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import { Snippet } from "@nextui-org/react";
import BlogCarousel from "../../components/EmblaCarousel10/index";

import Image from "next/image";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const webpage = {
    name: "Photoshop 2024 全新 AI 漸進式填充功能：設計效率的革命性提升｜極客網頁設計 JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐",
    description:
      "Photoshop 2024 推出的 AI 漸進式填充功能，利用 Adobe Sensei 的生成式 AI 技術，能智能地填補圖像中的空白區域，相較於傳統的內容感知填充更精確自然。設計師可以靈活控制填充細節，適用於修補、擴展和創造性生成，讓設計過程更加高效。此功能不僅提升了自動化程度，還拓展了創意可能，縮短了工作時間，為設計師帶來全新的創作體驗，是設計效率的革命性進展。",
    url: "https://www.jeek-webdesign.com.tw/blog-08",
    logo: "https://www.jeek-webdesign.com.tw/images/2024photoshop.jpg",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 在 client-side 判斷是否為手機設備
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 根據需要調整這個值
    };

    handleResize(); // 頁面加載時立即判斷
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="Photoshop 2024 全新 AI 漸進式填充功能：設計效率的革命性提升｜極客網頁設計 JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐"
        />
        <meta
          property="og:description"
          content="Photoshop 2024 推出的 AI 漸進式填充功能，利用 Adobe Sensei 的生成式 AI 技術，能智能地填補圖像中的空白區域，相較於傳統的內容感知填充更精確自然。設計師可以靈活控制填充細節，適用於修補、擴展和創造性生成，讓設計過程更加高效。此功能不僅提升了自動化程度，還拓展了創意可能，縮短了工作時間，為設計師帶來全新的創作體驗，是設計效率的革命性進展。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/2024photoshop.jpg"
        />
        <meta
          property="og:url"
          content="https://www.jeek-webdesign.com.tw/blog-05"
        />
        <meta property="og:type" content="website" />
        <meta
          name="title"
          content=" Photoshop 2024 全新 AI 漸進式填充功能：設計效率的革命性提升｜極客網頁設計 JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐"
        />
        <meta
          name="description"
          content="Photoshop 2024 推出的 AI 漸進式填充功能，利用 Adobe Sensei 的生成式 AI 技術，能智能地填補圖像中的空白區域，相較於傳統的內容感知填充更精確自然。設計師可以靈活控制填充細節，適用於修補、擴展和創造性生成，讓設計過程更加高效。此功能不僅提升了自動化程度，還拓展了創意可能，縮短了工作時間，為設計師帶來全新的創作體驗，是設計效率的革命性進展。"
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
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "首頁-極客網頁設計",
                    item: "https://www.jeek-webdesign.com.tw",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "文章列表",
                    item: "https://www.jeek-webdesign.com.tw/blogs",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Photoshop 2024 全新 AI 漸進式填充功能",
                    item: "https://www.jeek-webdesign.com.tw/blog-08",
                  },
                ],
              },
              mainEntityOfPage: {
                "@type": "Article",
                headline: webpage.name,
                description: webpage.description,
                author: {
                  "@type": "Person",
                  name: "JEEK WEBDESIGN",
                },
                publisher: {
                  "@type": "Organization",
                  name: "JEEK WEBDESIGN",
                  logo: {
                    "@type": "ImageObject",
                    url: webpage.logo,
                  },
                },
                datePublished: "2024-11-20",
                dateModified: "2024-12-23",
              },
              mainEntity: {
                "@type": "Service",
                name: "網頁設計相關知識",
                description: "提供相關網頁方面知識",
                provider: {
                  "@type": "Organization",
                  name: "JEEK WEBDESIGN",
                },
              },
            }),
          }}
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
                <a href="/blog-08" className="hover:font-black duration-300">
                  Photoshop 2024 全新 AI 漸進式填充功能
                </a>
              </section>
              <h1
                className="text-[rgb(51,51,51)] leaing-[80px] text-center font-black mt-[100px]  "
                data-aos="fade-blur"
              >
                Photoshop 2024 全新 AI 漸進式填充功能：<br></br>
                設計效率的革命性提升
              </h1>
              <div className="title-content-date">
                <div></div>
                <div className="text-[14px]">
                  <b className="mr-3">Photoshop</b>
                  <b>2024/04/05</b>
                </div>
              </div>
              <div className="pb-[40px] title-content mt-4 flex flex-row justify-between border-b border-[#d1d1d1]">
                <div className="flex flex-row">
                  <div className="border mx-3 font-bold text-[14px] md:text-[20px] px-3 py-1 bg-[#80aad9]  ">
                    網頁設計
                  </div>
                  <div className="border mx-3 font-bold   text-[14px] md:text-[20px] px-3 py-1 bg-white  ">
                    設計軟體｜平面設計
                  </div>
                </div>
                <div className="border border-black text-[14px] md:text-[20px] bg-white px-3 py-1 text-black">
                  設計
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/blog/photoshop2024-01.webp"
              width={900}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-md"
            ></Image>
          </div>
          <div
            className="patagrph mx-auto  w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[60%] p-2 "
            data-aos="fade"
          >
            <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              <h2>Photoshop與AI技術浪潮：設計未來的融合與挑戰</h2>
              Photoshop 2024
              推出了令人期待的新功能之一：AI漸進式填充（Generative
              Fill），這項功能利用 Adobe Sensei
              人工智能技術，為設計師提供更強大的創意工具，讓設計過程更加直觀和高效。
            </div>
            <a
              target="_blank"
              className="text-[#ffdb3c] font-bold text-[16px] duration-300 hover:text-[#f7b654]"
              href="https://www.adobe.com/tw/products/photoshop.html?gclid=Cj0KCQjwjNS3BhChARIsAOxBM6ps1V3EiL3_ddXAAAgyFgwA1R0bdLAeS4hPBXd6JF2JZdO2n-fhar8aApCwEALw_wcB&sdid=ZXL8DWJ3&mv=search&mv2=paidsearch&ef_id=Cj0KCQjwjNS3BhChARIsAOxBM6ps1V3EiL3_ddXAAAgyFgwA1R0bdLAeS4hPBXd6JF2JZdO2n-fhar8aApCwEALw_wcB:G:s&s_kwcid=AL!3085!3!706065469640!b!!g!!photoshop%20ai!21476365577!164868406037&gad_source=1"
            >
              前往 Adobe 官方網站
            </a>

            <br></br>
            <div className="">
              <div className="imgText mt-[50px]">
                <h2 className="text-[32px] font-bold">
                  {" "}
                  ㄧ. 什麼是 AI 漸進式填充？
                </h2>

                <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  AI 漸進式填充（Gradual Fill）是 Photoshop 2024
                  中的一個全新工具，利用生成式 AI
                  技術，自動偵測畫面中的空白區域，並智能地填補內容。這個功能比傳統的內容感知填充更強大，因為它可以根據周圍環境逐步生成更自然、連貫的畫面，無需手動調整。
                </div>
                <br></br>
                <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  Photoshop 2024 的 AI 漸進式填充
                  相較於傳統的內容感知填充具有更高的準確性，能智能分析圖像上下文，生成更自然的填充內容。它還提供逐步控制功能，允許設計師靈活調整細節，特別適合處理複雜場景。此外，AI
                  漸進式填充減少了後期修正的需求，大幅提升設計效率，使整個創作過程更加流暢高效。
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]"></div>
              </div>

              <div className="imgText mt-[60px]">
                <h2 className="text-[32px] font-bold">
                  {" "}
                  二.如何使用 AI 漸進式填充？
                </h2>
                <h3 className="text-[20px] ">1.選擇要填充的區域</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  開啟 Photoshop
                  2024，選擇你希望填充的區域，無論是破損的照片角落，還是需要擴展的背景。
                </div>
                <div>
                  {isMobile ? (
                    <Image
                      src="/images/blog/photoshop-demo01.webp"
                      alt="Mobile Image"
                      width={800}
                      height={600}
                    />
                  ) : (
                    <Image
                      src="/images/blog/photoshop-demo01.jpg"
                      alt="Desktop Image"
                      width={800}
                      height={600}
                    />
                  )}
                </div>
                {/* <Image
                  src="/images/blog/photoshop-demo01.webp"
                  width={800}
                  height={600}
                ></Image>{" "} */}
                <br></br>
                <b className="text-[14px] font-bold mt-3">
                  這裡就拿一張暗色系教堂來當範例
                </b>
                <h3 className="text-[20px] ">2. 啟用漸進式填充</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  使用舉行選取畫面工具，匡出你想要填充的區域範圍
                </div>
                <Image
                  src="/images/blog/photoshop-demo02.jpg"
                  width={800}
                  height={600}
                ></Image>
                <br></br>
                <b className="text-[14px] font-bold mt-3">
                  這裡的生成關鍵字我們先留空，直接按產生
                </b>
                <div className=" text-[16px] mt-5 xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  開始ai判斷背景圖片，並填充空白部分
                </div>
                <Image
                  src="/images/blog/photoshop-demo03.webp"
                  width={800}
                  height={600}
                ></Image>
                <div className=" text-[16px] mt-5 xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  <b className="text-[22px]">Magic !!</b>
                  填充完成，是不是很神奇！
                </div>
                <Image
                  src="/images/blog/photoshop-demo04.webp"
                  width={800}
                  height={600}
                ></Image>
              </div>
              <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px] mt-5">
                另外如果你不滿意這次生成的部分，你還可以繼續選擇其他生成的效果
              </div>
              <Image
                src="/images/blog/photoshop-demo05.gif"
                width={800}
                height={600}
              ></Image>

              <div className="imgText mt-[60px]">
                <h3 className="text-[20px] ">3. 創造性擴展</h3>
                <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  不僅限於修補功能，AI
                  漸進式填充還可以幫助創意工作者擴展圖像邊界、延伸視覺範圍，為設計增添無限可能。
                </div>
                <Image
                  src="/images/blog/photoshop-demo02.webp"
                  width={800}
                  height={600}
                ></Image>
                <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] mt-5 xl:leading-[36px]">
                  例如我在把椅子處匡選起來，並且使用生成式填充。注意：
                  這裡我們是要使用生成填充出創造的東西。所以我們必須要下關鍵字。
                </div>
                <Image
                  src="/images/blog/photoshop-demo06.webp"
                  width={800}
                  height={600}
                ></Image>

                <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] mt-5 xl:leading-[36px]">
                  例如我在把椅子處匡選起來，並且使用生成式填充。注意：
                  這裡我們是要使用生成填充出創造的東西。所以我們必須要下關鍵字。
                </div>
                <Image
                  src="/images/blog/photoshop-demo06.webp"
                  width={800}
                  height={600}
                ></Image>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] mt-5 xl:leading-[36px]">
                  等待生成完成
                </div>
                <Image
                  src="/images/blog/photoshop-demo07.webp"
                  width={800}
                  height={600}
                ></Image>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] mt-5 xl:leading-[36px]">
                  登愣～ 是不是毫無違和感，真的是讚嘆現在的AI功能啊！
                </div>
                <Image
                  src="/images/blog/photoshop-demo08.jpg"
                  width={800}
                  height={600}
                ></Image>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] mt-5 xl:leading-[36px]">
                  在空白處在生成一個聖誕樹看看
                </div>
                <Image
                  src="/images/blog/photoshop-demo09.jpg"
                  width={800}
                  height={600}
                ></Image>
                <Image
                  src="/images/blog/photoshop-demo10.jpg"
                  width={800}
                  height={600}
                ></Image>
                <div className="w-full 2xl:w-[70%] text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] mt-5 xl:leading-[36px]">
                  Photoshop 2024 的 AI
                  漸進式填充功能不僅大幅提升了圖像處理的自動化程度，還為設計師提供了更多創意的可能性。無論是修補、擴展，還是創造性生成，它都能極大縮短工作時間，同時保證出色的效果。讓我們一起迎接這場設計效率的革命性提升吧！
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
              {/* <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  2.1 /imagine 指令 這是 Midjourney
                  最核心的指令，所有圖像生成過程都從這裡開始。通過提供「提示詞」（prompt），你可以告訴
                  AI 生成什麼樣的圖像。這裡是一些高效使用 /imagine 指令的技巧：
                </div>
                <Image
                  src="/images/blog/點擊自己創建的伺服器.png"
                  width={900}
                  placeholder="empty"
                  className="rounded-md"
                  height={600}
                ></Image>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  簡短提示詞：如 "sunset over the
                  mountains"（山上日落），適合基本生成。
                </div>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  簡短提示詞：如 "sunset over the
                  mountains"（山上日落），適合基本生成。
                </div>
              </div> 

              <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  2.2 調整圖像的參數 Midjourney
                  提供多種參數來更精確地控制圖像的生成結果，以下是常用的參數：
                  --ar 寬高比例 ：設置圖像的長寬比例（Aspect Ratio）
                </div>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  範例： /imagine prompt: a futuristic cityscape --ar 16:9
                  這個指令將生成一個 16:9 寬螢幕比例的圖像。
                </div>
                <Image
                  src="/images/blog/ar16.png"
                  width={800}
                  placeholder="empty"
                  loading="lazy"
                  className="mt-[40px] rounded-md"
                  height={600}
                ></Image>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  常見比例：
                  <div className="rounded-md p-8 bg-[#f1f1f1]">
                    <p className="mt-4">--ar 16:9：寬螢幕</p>
                    <p className="mt-4">--ar 1:1：正方形</p>
                    <p className="mt-4">--ar 9:16：直立手機螢幕比例</p>
                  </div>
                  <Image
                    src="/images/blog/生成圖片01.png"
                    width={800}
                    placeholder="empty"
                    loading="lazy"
                    className="mt-[40px] rounded-md"
                    height={600}
                  ></Image>
                </div>
              </div>

              <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  2.2 調整圖像的參數 Midjourney
                  提供多種參數來更精確地控制圖像的生成結果，以下是常用的參數：
                  --ar 寬高比例 ：設置圖像的長寬比例（Aspect Ratio）
                </div>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  範例： /imagine prompt: a futuristic cityscape --ar 16:9
                  這個指令將生成一個 16:9 寬螢幕比例的圖像。
                </div>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  常見比例：
                  <div className="rounded-md p-8 bg-[#f1f1f1]">
                    <p className="mt-4">--ar 16:9：寬螢幕</p>
                    <p className="mt-4">--ar 1:1：正方形</p>
                    <p className="mt-4">--ar 9:16：直立手機螢幕比例</p>
                  </div>
                  <Image
                    src="/images/blog/生成圖片01.png"
                    width={800}
                    placeholder="empty"
                    loading="lazy"
                    className="mt-[40px] rounded-md"
                    height={600}
                  ></Image>
                  <div className="border bg-[#f1f3f6] rounded-md p-3 md:p-5 mt-6 xl:p-10">
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      2.--v 版本號 ：指定生成版本
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      Midjourney 的生成技術經過多次更新，使用 --v
                      參數可以選擇特定的版本號。
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      範例：
                      <span className="bg-[#333] px-2 text-white ">
                        /imagine prompt: a futuristic robot --v 5
                      </span>
                      使用最新的第五代模型來生成更細緻的圖像。
                    </div>
                  </div>
                  <div className="border bg-[#f1f3f6] rounded-md p-3 md:p-5 mt-6 xl:p-10">
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      3. --q 質量數值：控制圖像質量（Quality）
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      此參數允許你設置圖像的質量。--q 1 是標準質量，--q 2
                      為更高質量，但會消耗更多生成時間。
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      <span className="text-black font-bold"> 範例： </span>{" "}
                      範例： /imagine prompt: a mystical forest --q 2
                      這將生成高質量的圖像，但耗時稍長。
                    </div>
                  </div>
                  <div
                    data-aos="fade"
                    className="border bg-[#f1f3f6] rounded-md p-3 md:p-5 mt-6 xl:p-10"
                  >
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      4. --style 風格類型：自訂圖像風格（Style）
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      可以用這個參數讓 AI 生成特定風格的圖像。
                    </div>
                    <div className=" text-[16px] xl:text-[18px] bg-[#333] text-[#ffffff]  leading-[32px] xl:leading-[36px]">
                      <span className="text-black font-bold"> 範例： </span>{" "}
                      /imagine prompt: a city at night --style cyberpunk
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      這會產生具有賽博朋克風格的城市夜景圖像。
                    </div>
                    <div>
                      <p>常見風格有：</p>
                      <p className="text-[16px] mt-3">
                        --style cyberpunk：賽博朋克風
                      </p>
                      <p className="text-[16px] mt-3">
                        --style fantasy：奇幻風
                      </p>
                      <p className="text-[16px] mt-3"> --style retro：復古風</p>
                    </div>
                  </div>
                  <div className="border bg-[#f1f3f6] rounded-md p-3 md:p-5 mt-6 xl:p-10">
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      4. --style 風格類型：自訂圖像風格（Style）
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      可以用這個參數讓 AI 生成特定風格的圖像。
                    </div>
                    <div className=" text-[16px] xl:text-[18px] bg-[#333] text-[#ffffff]  leading-[32px] xl:leading-[36px]">
                      <span className="text-black font-bold"> 範例： </span>{" "}
                      /imagine prompt: a city at night --style cyberpunk
                    </div>
                    <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                      這會產生具有賽博朋克風格的城市夜景圖像。
                    </div>
                  </div>
                </div>
              </div>

              <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  2.3 進階指令功能
                </div>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  1./blend：混合兩張或多張圖像
                </div>
                <p>
                  這個指令可以用來混合多張圖像的特徵，生成新的視覺效果。你可以上傳兩張圖像，並使用
                  /blend 來讓 AI 將它們結合。
                </p>
                <p>
                  {" "}
                  <span className="text-bold">範例：</span> /blend image1.png
                  image2.png
                </p>
                <Image
                  src="/images/blog/ar16.png"
                  width={800}
                  placeholder="empty"
                  loading="lazy"
                  className="mt-[40px] rounded-md"
                  height={600}
                ></Image>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  常見比例：
                  <div className="rounded-md p-8 bg-[#f1f1f1]">
                    <p className="mt-4">--ar 16:9：寬螢幕</p>
                    <p className="mt-4">--ar 1:1：正方形</p>
                    <p className="mt-4">--ar 9:16：直立手機螢幕比例</p>
                  </div>
                  <Image
                    src="/images/blog/生成圖片01.png"
                    width={800}
                    placeholder="empty"
                    loading="lazy"
                    className="mt-[40px] rounded-md"
                    height={600}
                  ></Image>
                </div>
              </div>*/}
            </div>
          </div>

          {/* <div className="patagrph p-2 xl:p-10">
            <h2>內容行銷如何幫助網站提升搜索引擎排名？</h2>

            <br></br>

            <p className="xl: text-[16px] xl:text-[18px] tracking-wide leading-relaxed">
              <ul className=" md:pl-[32px]  p-10 rounded-xl bg-[#f4f4f4]">
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">
                    1.增加網站流量和停留時間
                  </b>{" "}
                  <br></br>
                  高質量的內容可以吸引更多訪客到你的網站，並延長他們的停留時間。搜索引擎，如
                  Google，非常重視用戶在網站上的行為，較長的停留時間和較低的跳出率會被視為網站提供了優質的使用者體驗，進而有助於提升網站排名。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">2.提高關鍵字排名</b>{" "}
                  <br></br>
                  透過內容行銷，你可以針對特定關鍵字進行優化，讓這些關鍵字自然地出現在文章或其他內容中，幫助網站在搜索結果中獲得更好的排名。這樣的策略可以有效提高網站的曝光度，讓潛在客戶更容易找到你。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">3.建立權威和信任</b>{" "}
                  <br></br>
                  定期發布高質量、有價值的內容可以幫助網站建立專業形象，提升品牌的權威性。搜索引擎偏好可信賴的網站，當你的內容經常被引用或分享，這些正面的信號都會促進網站的排名。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">4.增加反向連結</b>{" "}
                  <br></br>
                  定期發布高質量、有價值的內容可以幫助網站建立專業形象，提升品牌的權威性。搜索引擎偏好可信賴的網站，當你的內容經常被引用或分享，這些正面的信號都會促進網站的排名。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">5.提升用戶體驗</b>{" "}
                  <br></br>
                  內容行銷注重的是為用戶提供有用的資訊和解決方案，這能大幅度提升網站的使用者體驗。良好的用戶體驗是搜索引擎評估網站質量的重要指標之一，對於網站的排名提升有直接的幫助。
                </li>
              </ul>
              <br></br>
            </p>
            <div className="px-[20px] xl:px-0">
              <b className="text-[20px]">總結:</b>
              <br></br>
              <p>
                內容行銷不僅僅是創建吸引人的內容，更是建立品牌信任、提升網站排名的核心策略之一。透過持續的內容行銷，企業能夠有效吸引目標受眾，提升網站在搜索引擎中的表現，最終帶來更多的潛在客戶和商業機會。
              </p>
            </div>
          </div>

          <div className="patagrph p-2 xl:p-10">
            <h2>新手如何做好內容行銷？ 有哪些方式</h2>

            <br></br>

            <p className="xl: text-[16px] xl:text-[18px] tracking-wide leading-relaxed">
              <ul className=" md:pl-[32px]  p-10 rounded-xl bg-[#f4f4f4]">
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">
                    1. 選擇目標受眾：了解你的讀者
                  </b>{" "}
                  <br></br>
                  內容行銷的第一步是了解你的目標受眾。誰是你的主要客群？他們遇到什麼問題？你能如何幫助他們？透過調查、訪談或社交媒體互動，蒐集受眾的興趣和需求數據。這些資訊將幫助你創作出有針對性的內容，吸引讀者並讓他們留下深刻印象。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">
                    {" "}
                    2.撰寫高質量且實用的內容
                  </b>{" "}
                  <br></br>
                  內容的質量是搜索引擎和讀者都重視的部分。新手可以從解決常見問題、提供實用技巧或深入解說熱門話題開始撰寫。文章應該簡單易懂，避免過於專業的術語。舉例說明、提供實際案例或數據支援，可以讓內容更具說服力和吸引力。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">
                    3.善用多媒體元素：圖片、影片、資訊圖
                  </b>{" "}
                  <br></br>
                  多媒體元素能大幅提升內容的吸引力，特別是對於新手來說，這是一個簡單但有效的提升手段。插入相關圖片、製作短影片或設計資訊圖，可以使你的內容更具視覺吸引力，同時也增加了內容在社群媒體上的可分享性，間接提升
                  SEO 效果。
                </li>
                <li className=" text-[16px] mt-3 py-6 pl-0 ml-0 border-b border-[#858585] hover:scale-[1.01] duration-300">
                  <b className="text-[20px] font-extrabold">
                    4.利用社群媒體推廣內容
                  </b>{" "}
                  <br></br>
                  社群媒體是推廣內容的絕佳平台。將你創作的內容分享到
                  Facebook、Instagram、LinkedIn 或 Twitter
                  等社群平台，能夠有效增加內容的曝光度。新手可以先選擇幾個主要的社群平台，針對不同的受眾調整推廣方式，吸引更多潛在客戶的注意。
                </li>
              </ul>
              <br></br>
            </p>
            <div className="px-[20px] xl:px-0">
              <b className="text-[20px]">總結:</b>
              <br></br>
              <p>
                內容行銷不僅僅是創建吸引人的內容，更是建立品牌信任、提升網站排名的核心策略之一。透過持續的內容行銷，企業能夠有效吸引目標受眾，提升網站在搜索引擎中的表現，最終帶來更多的潛在客戶和商業機會。
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="page-wrap">
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
              src="https://www.ultraehp.com/images/test-portfolio/blog-cover.png"
              sizes="100vw"
              className="img-cover"
            />
            <div className="gradient-overlay-absolute" />
          </div>
          <div></div>
        </div>

        <Marquee className="bg-black z-[1]">
          <div className="flex justify-center  py-[20px] items-center">
            <p className="text-white text-[30px]">WEBSITE DESIGN</p>
            <img
              className="w-[160px] h-[160px]"
              src="/images/marquee-icon.png"
              alt=""
            />
            <p>WEBSITE DESIGN</p>
            <p className="text-white text-[30px]">WEBSITE DESIGN</p>
            <img
              className="w-[160px] h-[160px]"
              src="/images/marquee-icon.png"
              alt=""
            />
            <p>WEBSITE DESIGN</p>
            <p className="text-white text-[30px]">WEBSITE DESIGN</p>
            <img
              className="w-[160px] h-[160px]"
              src="/images/marquee-icon.png"
              alt=""
            />
            <p>WEBSITE DESIGN</p>
            <p className="text-white text-[30px]">WEBSITE DESIGN</p>
            <img
              className="w-[160px] h-[160px]"
              src="/images/marquee-icon.png"
              alt=""
            />
            <p>WEBSITE DESIGN</p>
            <p className="text-white text-[30px]">WEBSITE DESIGN</p>
            <img
              className="w-[160px] h-[160px]"
              src="/images/marquee-icon.png"
              alt=""
            />
            <p>WEBSITE DESIGN</p>
            <p className="text-white text-[30px]">WEBSITE DESIGN</p>
            <img
              className="w-[160px] h-[160px]"
              src="/images/marquee-icon.png"
              alt=""
            />
            <p>WEBSITE DESIGN</p>
          </div>
        </Marquee>
        <div id="article-content" className="article-content-section"></div>
      </div> */}
    </div>
  );
}

// reportWebVitals();
