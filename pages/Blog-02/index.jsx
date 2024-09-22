"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
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
    <>
      <NextSeo
        title=""
        description=""
        openGraph={{
          url: "",
          title: "",
          description: "",
          images: [
            {
              url: "",
              width: 1200,
              height: 630,
              alt: "社交媒體行銷策略",
            },
          ],
          site_name: "你的網站名稱",
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

      <div className="page-wrap">
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
        <div id="article-content" className="article-content-section">
          <div className="article-content-container w-full sm:w-[80%] xl:w-[60%]">
            <img
              data-aos="zoom-in"
              className="w-full"
              src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/6432604c10440971857a2488_rominosgallery2.jpeg"
              alt=""
            />
            <div className="article-abstract">
              <div className="text-[16px] leading-normal">
                <h3>網頁設計很花錢嗎？探索成本與價值的平衡</h3>
                <p>
                  對於許多小型和中型企業來說，投資於網站設計可能看起來是一項昂貴的支出。隨著市場上各種設計服務的價格範圍廣泛，企業主常常會問：「網頁設計真的值得花這麼多錢嗎？」
                </p>
              </div>
            </div>

            <div className="paragraph" data-aos="fade-up">
              <h2 className="text-[40px] mb-3" data-aos="fade-up">
                網頁設計真的很花錢嗎？其實不然！
              </h2>
              <img
                src="
               "
                alt=""
              />
              <div className="text-[24px] font-bold mt-5 ">
                {" "}
                網頁設計的成本因素
              </div>
              <p className="font-normal leading-[26px] mb-4 text-[16px]  md:text-[18px]">
                網頁設計的成本取決於多種因素，包括設計的複雜性、功能需求、網站的規模以及設計師的專業水平。
              </p>
            </div>
            <img
              data-aos="zoom-in"
              className="w-full"
              src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/6432604c10440971857a2488_rominosgallery2.jpeg"
              alt=""
            />
            <div className="paragraph-content" data-aos="fade-up">
              <div className="paragraph">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  理解你的擔憂，量身定制解決方案
                </div>
                <p className="font-normal leading-[30px] text-[16px] md:text-[18px]">
                  作為一家專注於為小型企業提供網頁設計服務的公司，我們完全理解您的擔憂。我們知道，當您考慮為您的企業建立一個網站時，您希望這個網站不僅能展現您的品牌，還能有效地吸引顧客並提升轉化率。然而，高昂的設計費用常常讓人猶豫不決。
                </p>{" "}
              </div>
              <div className="paragraph" data-aos="fade-up">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  什麼樣的網站設計能帶來最大價值？
                </div>
                <p className="font-normal leading-[30px] text-[16px] md:text-[18px]">
                  在設計網站時，我們不僅僅關注其外觀，我們更加重視網站能為您帶來什麼樣的實際效益。網站應該是您與顧客之間的橋樑，是展示您品牌價值和吸引潛在客戶的工具。
                  因此，我們採用的設計方案不僅注重美觀，更加強調其功能性和使用者體驗。無論是簡潔的導航、清晰的內容佈局，還是快速的加載速度，我們都力求完美，確保訪客在使用您的網站時感到愉快，並且願意停留更長時間，最終轉化為您的忠實客戶。
                  而這一切，都可以在不超出您預算的情況下實現。我們與您緊密合作，確保每一個細節都符合您的期望，同時保持費用的合理性。
                </p>
              </div>

              <div className="paragraph" data-aos="fade-up">
                <h2 className="text-[40px] mb-3"></h2>
                <div className="text-[24px] font-bold mt-5 ">
                  網頁設計的投資回報
                </div>
                <p className="font-normal leading-[30px] text-[16px] md:text-[18px]">
                  雖然高質量的網頁設計初期投入較大，但其帶來的長期回報不容忽視。一個精心設計的網站不僅能吸引更多的訪客，還能提高轉化率，從而直接促進銷售增長。根據研究，消費者通常會根據網站的設計來判斷企業的可信度和專業性。一個優質的網站能夠為您的品牌形象增值，並帶來持續的商機。
                </p>
              </div>

              <img
                data-aos="zoom-in"
                className="w-full"
                src="https://newscanpic.tw/n/seo_01.webp
              "
                alt=""
              />
              <p
                className="text-[16px] sumerized  mt-4 mb-4 font-bold"
                data-aos="fade-up"
              >
                SEO是一項長期投資，其價值遠遠超過短期的投入。與付費廣告不同，SEO的效果是持久的，一旦網站在搜尋引擎中獲得了穩定的高排名，它將持續吸引自然流量，無需再為每一次點擊付費。這種持續的流量能為企業帶來穩定的曝光和潛在客戶，從而促進長期的業務增長。
              </p>
            </div>
            <img
              data-aos="zoom-in"
              className="w-full mb-4"
              src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/6432604c104409005b7a2487_rominosgallery1.jpeg"
              alt=""
            />

            <div className="article-divider" />
          </div>
        </div>
      </div>
    </>
  );
}

// reportWebVitals();
