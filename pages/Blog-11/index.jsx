"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import { Snippet } from "@nextui-org/react";

import Image from "next/image";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const webpage = {
    name: "如何創建並串接GoogleTagManager?｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
    description:
      "Google Tag Manager (GTM) 和 Google Analytics 4 (GA4) 的整合能有效提升網站數據追蹤和分析。首先，註冊並設置 GTM，安裝代碼到網站後，新增 GA4 標籤並設置測量 ID。接著，在 GA4 中創建帳戶並獲取測量 ID，將其與 GTM 進行對接。完成後，測試標籤觸發是否正常，並發布更新。這樣便可開始收集並分析網站數據，提升行銷和用戶體驗。",
    url: "https://www.jeek-webdesign.com.tw/blog-11",
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
        title="如何創建並串接GoogleTagManager?｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐"
        description="Google Tag Manager (GTM) 和 Google Analytics 4 (GA4) 的整合能有效提升網站數據追蹤和分析。首先，註冊並設置 GTM，安裝代碼到網站後，新增 GA4 標籤並設置測量 ID。接著，在 GA4 中創建帳戶並獲取測量 ID，將其與 GTM 進行對接。完成後，測試標籤觸發是否正常，並發布更新。這樣便可開始收集並分析網站數據，提升行銷和用戶體驗。"
        openGraph={{
          url: "www.jeek-webdesign.com",
          title:
            "如何創建並串接GoogleTagManager?｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
          description:
            "Google Tag Manager (GTM) 和 Google Analytics 4 (GA4) 的整合能有效提升網站數據追蹤和分析。首先，註冊並設置 GTM，安裝代碼到網站後，新增 GA4 標籤並設置測量 ID。接著，在 GA4 中創建帳戶並獲取測量 ID，將其與 GTM 進行對接。完成後，測試標籤觸發是否正常，並發布更新。這樣便可開始收集並分析網站數據，提升行銷和用戶體驗。",
          images: [
            {
              url: "www.jeek-webdesign.com.tw/images/深入解析 SEO 成效指標，助您精準優化網站-極客網頁設計.png",
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
          content="如何創建並串接GoogleTagManager?-極客網頁設計"
        />
        <meta
          property="og:description"
          content="Google Tag Manager (GTM) 和 Google Analytics 4 (GA4) 的整合能有效提升網站數據追蹤和分析。首先，註冊並設置 GTM，安裝代碼到網站後，新增 GA4 標籤並設置測量 ID。接著，在 GA4 中創建帳戶並獲取測量 ID，將其與 GTM 進行對接。完成後，測試標籤觸發是否正常，並發布更新。這樣便可開始收集並分析網站數據，提升行銷和用戶體驗。"
        />
        <meta
          property="og:image"
          content="www.jeek-webdesign.com.tw/images/深入解析 SEO 成效指標，助您精準優化網站-極客網頁設計.png"
        />
        <meta
          property="og:url"
          content="https://www.jeek-webdesign.com.tw/blog-11"
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
        <div className="article-content  p-[20px] md:px-[50px] xl:px-[200px]">
          <div className="patagrph p-2  ">
            <div className="title  pb-[50px] flex flex-col ">
              <section className="section_navgation pt-[50px] flex">
                <a className="hover:font-black duration-300" href="/blogs">
                  文章總覽
                </a>{" "}
                ←
                <a href="/blog-11" className="hover:font-black duration-300">
                  如何串接 GoogleTagManager?
                </a>
              </section>
              <h1 className="text-[rgb(51,51,51)] leaing-[80px] text-center font-black mt-[100px]  ">
                如何創建 Google Tag Manager (GTM) <br></br>並串接 Google
                Analytics 4 (GA4)
              </h1>
              <div className="title-content-date">
                <div></div>
                <div className="text-[14px]">
                  <b className="mr-3">Ga4 , google search console</b>
                  <b>2024/04/05</b>
                </div>
              </div>
              <div className="pb-[40px] title-content mt-4 flex flex-row justify-between border-b border-[#d1d1d1]">
                <div className="flex flex-row">
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] text-black px-3 py-1 bg-[#80aad9]  ">
                    網頁行銷
                  </div>
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] text-black px-3 py-1 bg-white  ">
                    數據追蹤
                  </div>
                </div>
                <div className="border border-black text-[14px] md:text-[20px] bg-white px-3 py-1 text-black">
                  GTM / GA4
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/1695104289033.png"
              width={900}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-md"
            ></Image>
          </div>
          <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
            在現代網站數據分析中，Google Tag Manager (GTM) 和 Google Analytics 4
            (GA4)
            是不可或缺的工具。通過這兩者的整合，可以更有效地追蹤網站訪客行為，並且靈活設置各種標籤追蹤項目。本文將引導您一步步創建
            GTM 並串接到 GA4。
          </div>
          <div className="patagrph p-2 xl:px-[150px]" data-aos="fade">
            <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              <h2>深一、什麼是 Google Tag Manager 和 Google Analytics 4？</h2>
            </div>
            <a
              target="_blank"
              className="text-blue-600 font-bold text-[16px] duration-300 hover:text-blue-500"
              href="https://www.adobe.com/tw/products/photoshop.html?gclid=Cj0KCQjwjNS3BhChARIsAOxBM6ps1V3EiL3_ddXAAAgyFgwA1R0bdLAeS4hPBXd6JF2JZdO2n-fhar8aApCwEALw_wcB&sdid=ZXL8DWJ3&mv=search&mv2=paidsearch&ef_id=Cj0KCQjwjNS3BhChARIsAOxBM6ps1V3EiL3_ddXAAAgyFgwA1R0bdLAeS4hPBXd6JF2JZdO2n-fhar8aApCwEALw_wcB:G:s&s_kwcid=AL!3085!3!706065469640!b!!g!!photoshop%20ai!21476365577!164868406037&gad_source=1"
            >
              前往 Adobe 官方網站
            </a>

            <br></br>
            <div className="">
              <div className="imgText mt-[50px]">
                <h2>什麼是 Google Tag Manager 和 Google Analytics 4？</h2>
                <fieldset></fieldset>

                {/* <h3>1.使用者數量</h3> */}

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  Google Tag Manager
                  是一個免費工具，可以幫助您在網站上輕鬆添加和管理多種標籤（Tags）。無論是分析代碼、追蹤代碼還是行為追蹤，GTM
                  可以將它們集中在一起進行管理，避免多次更改網站的原始碼。
                </div>
                <br></br>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  Google Analytics 4 則是 Google 的新一代網站分析平台，與以往的
                  Universal Analytics 不同，GA4
                  更專注於事件驅動，並且具備更強大的跨平台分析能力。通過
                  GA4，您可以獲得更準確的數據分析報告，幫助優化網站及行銷策略。
                </div>
                {/* <Image
                  src="/images/blog/ga4-seo成效指標-使用者數量_極客網頁設計.png"
                  width={800}
                  height={600}
                ></Image> */}

                <h3 className="mt-[30px]">
                  二、創建並設置 Google Tag Manager (GTM)
                </h3>
                <b className="text-[18px]">註冊並登錄 GTM 帳號</b>

                <ul>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 註冊並登錄 GTM 帳號
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    -
                    點擊“新增帳戶”，按照指示輸入您的帳戶名稱和網站網址，選擇網站平台為{" "}
                    <span className="bg-blue-600 text-white">“網頁”</span> 。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 完成後，點擊“創建”
                  </li>
                </ul>
                <Image
                  src="/images/blog/Blog11/建立帳戶-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  alt="建立帳戶-極客網頁設計"
                  className="mt-4"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">建立一個容器帳戶</b>
                <Image
                  src="/images/blog/Blog11/新增帳戶名稱-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  alt="新增帳戶名稱-極客網頁設計"
                  className="mt-[40px]"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">帳戶名稱設定</b>
                <Image
                  src="/images/blog/Blog11/容器名稱-裝置類型.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="容器名稱-裝置類型"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">選擇類型</b>

                <h3 className="mt-[30px]">2. 安裝 GTM 程式碼到您的網站</h3>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  GTM 會生成兩段代碼（Head 和 Body
                  部分）。將這兩段代碼分別粘貼到您網站的 head 和 body 部分。
                  完成後，儲存並發佈。
                </div>

                <h3 className="mt-[30px]">
                  3. 在 GTM 中新增 Google Analytics 4 標籤
                </h3>

                <ul>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 進入 GTM 的儀表板，點擊左側的“標籤”選項，再點擊“新增”。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 選擇“標籤設定”中的“Google Analytics: GA4 設定”。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 接下來，需要輸入您的 GA4 設定檔的“測量 ID”。您可以在 GA4
                    的管理頁面中找到它。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 在“觸發器”部分，選擇“全站觸發”以確保 GA4
                    追蹤到所有訪客活動。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 完成後，儲存標籤。
                  </li>
                </ul>
                <Image
                  src="/images/blog/Blog11/點擊標籤並新增-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="點擊標籤並新增-極客網頁設計"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">
                  點擊左側的 "標籤" 選項，再點擊 "新增"
                </b>
                <Image
                  src="/images/blog/Blog11/選擇代碼類型-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="選擇代碼類型-極客網頁設計"
                  height={600}
                ></Image>

                <Image
                  src="/images/blog/Blog11/選擇ga4-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="選擇ga4-極客網頁設計"
                  height={600}
                ></Image>

                <Image
                  src="/images/blog/Blog11/選擇ga4-極客網頁設計02.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="選擇ga4-極客網頁設計"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">選擇ga4</b>

                <h3 className="mt-[30px]">
                  3. 、創建並設置 Google Analytics 4 (GA4) 帳戶
                </h3>
                <ul>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    -登錄您的 Google Analytics 帳戶。。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    -
                    點擊左下角的“管理員”，然後在帳戶和資源欄中，點擊“創建資源”。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 選擇“GA4 設定”，並輸入您的網站名稱、網址等基本信息。
                  </li>
                  <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                    - 完成後，系統會生成一個 GA4 的“測量
                    ID”（例如：G-XXXXXXXXX），這個 ID 將用於 GTM 中標籤設定。
                  </li>
                </ul>
                <Image
                  src="/images/blog/Blog11/點擊左下角管理員-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="點擊左下角管理員-極客網頁設計"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">點擊左下角管理員</b>

                <Image
                  src="/images/blog/Blog11/找到你的評估id-極客網頁設計.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="找到你的評估id-極客網頁設計"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">
                  找到你的評估id 並複製，這個 ID 將用於 GTM 中標籤設定。
                </b>
                <Image
                  src="/images/blog/Blog11/找不到google代碼.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="找不到google代碼.png"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">
                  如出現找不到google代碼 及案右邊建立代碼按鈕
                </b>

                <Image
                  src="/images/blog/Blog11/順利新增ga4代碼.png"
                  width={800}
                  loading="lazy"
                  placeholder="empty"
                  className="mt-[40px]"
                  alt="順利新增ga4代碼.png"
                  height={600}
                ></Image>
                <b className="text-[16px] mt-2">順利新增ga4代碼</b>
              </div>
              <div></div>
              <h3 className="mt-[30px]">4. 測試和發佈標籤</h3>

              <h4 className="mt-5">在 GTM 中測試標籤</h4>
              <ul>
                <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  - 完成所有設置後，點擊 GTM 的“預覽”按鈕進行測試。這會開啟一個
                  Debug 模式，您可以檢查標籤是否正確觸發。
                </li>
                <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  - 測試所有標籤運行是否符合預期，例如 GA4 的標籤是否正確觸發。
                </li>
              </ul>
              <h4 className="mt-5">發佈標籤</h4>
              <ul>
                <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  - 如果測試沒有問題，回到 GTM
                  儀表板，點擊右上角的“提交”按鈕，並點擊“發佈”來發布更新。
                </li>
                <li className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  - 完成後，您的網站將開始記錄 GA4 數據，並且可以在 Google
                  Analytics 的報告中看到即時數據。
                </li>
              </ul>

              <Image
                src="/images/blog/Blog11/發布代碼-極客網頁設計.png"
                width={800}
                loading="lazy"
                placeholder="empty"
                className="mt-[40px]"
                alt="發布代碼-極客網頁設計"
                height={600}
              ></Image>
              <b className="text-[16px] mt-2">
                點擊發布代碼，可以新增版本名稱和內容
              </b>
              <Image
                src="/images/blog/Blog11/發布此版本代碼-極客網頁設計.png"
                width={800}
                loading="lazy"
                placeholder="empty"
                className="mt-[40px]"
                alt="發布此版本代碼-極客網頁設計"
                height={600}
              ></Image>
              <b className="text-[16px] mt-2">發布此版本代碼</b>

              <Image
                src="/images/blog/Blog11/成功新增發布的代碼-極客網頁設計.png"
                width={800}
                loading="lazy"
                placeholder="empty"
                className="mt-[40px]"
                alt="成功新增發布的代碼-極客網頁設計.png"
                height={600}
              ></Image>

              <Image
                src="/images/blog/Blog11/成功新增發布的代碼02-極客網頁設計.png"
                width={800}
                loading="lazy"
                placeholder="empty"
                className="mt-[40px] mb-[20px]"
                alt="成功新增發布的代碼-極客網頁設計.png"
                height={600}
              ></Image>
              <b className="text-[26px] mt-[20px]">
                這樣就順利新增ga4代碼啦！！
              </b>
            </div>
          </div>
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
