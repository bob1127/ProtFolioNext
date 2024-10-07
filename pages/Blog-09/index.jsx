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
        title="分析網頁 SEO 成效指標-Blog文章｜極客網頁設計
"
        description="了解如何透過關鍵 SEO 成效指標來提升網站排名，並獲得更多流量。本文深入解析網站數據分析，為您帶來更精準的 SEO 策略建議！"
        openGraph={{
          url: "www.jeek-webdesign.com",
          title: "分析網頁 SEO 成效指標-Blog文章｜極客網頁設計",
          description:
            "了解如何透過關鍵 SEO 成效指標來提升網站排名，並獲得更多流量。本文深入解析網站數據分析，為您帶來更精準的 SEO 策略建議！",
          images: [
            {
              url: "www.jeek-webdesign.com.tw/",
              width: 1200,
              height: 630,
              alt: "社交媒體行銷策略",
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
        {/* <link
          rel="stylesheet"
          href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/css/wisdom-blog-template.webflow.7452c8b2a.css"
        />
        <link
          rel="stylesheet"
          href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/css/wisdom-blog-template.webflow.7452c8b2a.css"
        /> */}
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
        <div className="div social-side-bar w-[90%] mx-auto h-[30px] md:h-auto  md:w-[50px] duration-300 flex flex-row md:flex-col bg-white  border-2 border-black py-1  justify-center items-center md:px-[10px] md:py-[20px] fixed bottom-[15px]   md:bottom-[50%] z-[9999999]  right-[15px] md:right-[20px] rounded-full">
          <div className="  border w-full mt-3 h-auto border-black">
            <Image
              src="/images/icon/line-2.png"
              width={50}
              height={50}
              placeholder="empty"
            ></Image>
          </div>
          <div className="  border w-full mt-3 h-auto border-black">
            <Image
              src="/images/icon/facebook-2.png"
              width={50}
              height={50}
              placeholder="empty"
            ></Image>
          </div>
          <div className="  border w-full mt-3 h-auto border-black">
            <Image src="" width={50} height={50} placeholder="empty"></Image>
          </div>
        </div>

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
        <div className="article-content mt-[100px] p-[20px] md:px-[50px] xl:px-[200px]">
          <div className="patagrph p-2  ">
            <div className="title  pb-[50px] flex flex-col ">
              <h1
                className="text-[rgb(51,51,51)] leaing-[80px] text-center font-black mt-[100px]  "
                data-aos="fade-blur"
              >
                分析網頁 SEO 成效指標
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
                  <div className="border mx-3 font-bold  text-[16px] border-black text-black px-3 py-1 bg-[#80aad9]  ">
                    網頁設計
                  </div>
                  <div className="border mx-3 font-bold  text-[16px] border-black text-black px-3 py-1 bg-white  ">
                    設計軟體｜平面設計
                  </div>
                </div>
                <div className="border border-black text-[20px] bg-white px-3 py-1 text-black">
                  設計
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

          <div className="patagrph p-2 xl:px-[150px]" data-aos="fade">
            <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              <h2>深入解析 SEO 成效指標，助您精準優化網站</h2>
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
                <h2 className="text-[32px] font-bold"> ㄧ. GA4</h2>
                <fieldset></fieldset>

                <h3>1.使用者數量</h3>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  此指標代表訪問您網站的獨立使用者數量，可以反映網站的流量來源與受歡迎程度。
                  使用者人數是網站剛開始可以最簡單判別網頁流量的依據
                </div>
                <br></br>
                <Image
                  src="/images/blog/ga4-seo成效指標-使用者數量_極客網頁設計.png"
                  width={800}
                  height={600}
                ></Image>

                <h3 className="mt-[30px]">
                  2.自然搜尋流量-有機流量(Organic Search)
                </h3>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  有機流量被視為高質量的流量 因為用戶主動搜索相關資訊或產品
                  這使得他們更有可能轉換為客戶。
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  有機流量通常具有持續性和長期的效益。一旦網站在搜索引擎上獲得良好排名，通常能夠持續吸引流量
                  跟依賴付費廣告的方式相比較，提供了更穩定的訪問來源。
                </div>
                <br></br>
                <ul className="p-0 m-0 ">
                  <li className="text-[16px] mt-3 font-bold">
                    - 的網站圖片在google 上被搜索點擊回到網頁
                    這也是算在有機流量裡
                  </li>
                  <li className="text-[16px] mt-3 font-bold">
                    - 內容和社交媒體 例如社交媒體貼文
                    讓使用者連回到網頁這也算是有機流量
                  </li>
                </ul>
                <Image
                  src="/images/blog/ga4-seo有機流量指標-使用者數量_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>
                <b className="mt-2 text-[16px]">
                  針對這些來源進行優化，能夠有效提升有機流量，增加網站的可見性和訪問量
                </b>

                <h3 className="mt-[30px]">3.參與度</h3>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  互動率可以顯示初使用者對於網頁的參與熱度：例如：頁面轉換點擊，頁面滾動，填寫表單等等的使用者行為
                </div>
                <ul className="p-0 m-0 ">
                  <li className="text-[16px] mt-3 font-bold">
                    <b>- 平均參與時間</b>：用戶在網站上停留的平均時間。
                  </li>
                  <li className="text-[16px] mt-3 font-bold">
                    <b>參與的用戶數：</b>
                    在特定時間內進行互動的用戶數。
                  </li>
                  <li className="text-[16px] mt-3 font-bold">
                    <b> 互動率：</b>
                    用戶互動與總訪問量的比率。
                  </li>
                </ul>
                <Image
                  src="/images/blog/ga4-seo使用者行為-使用者數量_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>

                <h3 className="mt-[30px]">4.跳出率（Bounce Rate）</h3>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  跳出率是指用戶在訪問網站後未進行任何互動就離開的比例。具體而言，當用戶訪問一個頁面並在沒有進一步互動的情況下關閉頁面時，這就算作一次跳出。
                </div>
                <ul className="p-0 m-0 ">
                  <b>跳出率正常範圍</b>
                  <li className="text-[16px] mt-3 font-bold">
                    <b>- 1. 高跳出率（70% 以上）</b>
                  </li>
                  <li className="text-[16px] mt-3 font-bold">
                    <b>- 2. 中等跳出率（40% - 70%）</b>
                  </li>
                  <li className="text-[16px] mt-3 font-bold">
                    <b>- 3. 低跳出率（低於 40%）</b>
                  </li>
                </ul>
                <Image
                  src="/images/blog/ga4-seo使用者行為-跳出率_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4 mb-[30px]"
                ></Image>
                <b className="text-[16px] mt-[30px]">
                  「跳出率」是「參與度」的相對概念。因此，我們可以通過查看報表上的「參與度」來簡單計算跳出率：使用公式
                  100% - 參與度 = 跳出率，這樣就能輕鬆得出結果。
                </b>
                <Image
                  src="/images/blog/ga4-seo使用者行為-跳出率計算公式_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>
              </div>
              <div>
                <h2 className="text-[32px] font-bold"> ㄧ. GA4</h2>

                <h3 className="mt-[30px]">1. 點擊數（Clicks）：</h3>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  查看有多少用戶實際點擊了您的網站鏈接。這是衡量網站流量的最基本指標之一
                </div>
                <Image
                  src="/images/blog/GoogleSearchConsole-seo使用者行為-總點擊次數_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>

                <h3 className="mt-[30px]">2. 曝光率（Impressions）：</h3>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  了解您的網站在搜尋結果中被展示的次數。這幫助您評估網站的可見性。
                </div>
                <Image
                  src="/images/blog/GoogleSearchConsole-seo使用者行為-曝光率_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>

                <h3 className="mt-[30px]">3. 平均點閱率（CTR）：</h3>
                <b>
                  CTR 的計算方式非常簡單，公式如下 (點擊數/ 搜尋曝光次數) * 100%
                </b>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  Google search console 平均點閱率
                </div>
                <ul>
                  1. 搜尋引擎結果頁（SERP）
                  <li>
                    • 1% 至 3%：對於大多數行業，1% 到 3% 的 CTR
                    通常被視為合理範圍。
                  </li>
                  <li>
                    • 3% 至 5%：如果你的 CTR
                    在這個範圍，則表示你的標題和描述對用戶非常吸引。
                  </li>
                  <li>• 5% 以上：超過 5% 的 CTR 通常被認為是相當成功的。</li>
                </ul>
                <Image
                  src="/images/blog/GoogleSearchConsole-seo使用者行為-平均點閱率CTR_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>

                <h3 className="mt-[30px]">4.平均排名：</h3>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  知道您的網站在搜尋結果中的平均位置，可以幫助您了解排名情況。排名越高，曝光率和點擊率通常也會越高。
                </div>
                <Image
                  src="/images/blog/ga4-seo使用者行為-平均排名_極客網頁設計.png"
                  width={800}
                  height={600}
                  className="mt-4"
                ></Image>
              </div>
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
