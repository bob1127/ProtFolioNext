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
    name: " Hotjar：深入洞察用戶行為，助力網站轉換率提升",
    description:
      "Hotjar 是一款強大的免費網站分析工具，提供熱點圖和訪客錄像功能，幫助網站擁有者深入了解訪客行為。熱點圖顯示用戶點擊、滑動和停留的區域，有助於調整網頁設計和內容布局；訪客錄像則能真實呈現用戶操作過程，發現潛在問題並改善用戶體驗。操作簡單，適合無技術背景的人使用，並提供免費方案，非常適合小型網站和初創企業，幫助提升轉換率和網站效能。",
    url: "https://www.jeek-webdesign.com.tw/blog-07",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "jeekdesign@gmail.com",
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
        title="Hotjar：深入洞察用戶行為，助力網站轉換率提升-極客網頁設計"
        description="Hotjar 是一款強大的免費網站分析工具，提供熱點圖和訪客錄像功能，幫助網站擁有者深入了解訪客行為。熱點圖顯示用戶點擊、滑動和停留的區域，有助於調整網頁設計和內容布局；訪客錄像則能真實呈現用戶操作過程，發現潛在問題並改善用戶體驗。操作簡單，適合無技術背景的人使用，並提供免費方案，非常適合小型網站和初創企業，幫助提升轉換率和網站效能。"
        openGraph={{
          url: "",
          title: "",
          description:
            "Hotjar 是一款強大的免費網站分析工具，提供熱點圖和訪客錄像功能，幫助網站擁有者深入了解訪客行為。熱點圖顯示用戶點擊、滑動和停留的區域，有助於調整網頁設計和內容布局；訪客錄像則能真實呈現用戶操作過程，發現潛在問題並改善用戶體驗。操作簡單，適合無技術背景的人使用，並提供免費方案，非常適合小型網站和初創企業，幫助提升轉換率和網站效能。",
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
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="Hotjar：深入洞察用戶行為，助力網站轉換率提升-極客網頁設計"
        />
        <meta
          property="og:description"
          content="
Hotjar 是一款強大的免費網站分析工具，提供熱點圖和訪客錄像功能，幫助網站擁有者深入了解訪客行為。熱點圖顯示用戶點擊、滑動和停留的區域，有助於調整網頁設計和內容布局；訪客錄像則能真實呈現用戶操作過程，發現潛在問題並改善用戶體驗。操作簡單，適合無技術背景的人使用，並提供免費方案，非常適合小型網站和初創企業，幫助提升轉換率和網站效能。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png"
        />
        <meta property="og:url" content="https://www.jeek-webdesign.com.tw" />
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
            alt="cover-img"
            placeholder="empty"
            className="rounded-md"
          ></Image>
        </div>
        <div className="article-content  p-[20px] md:px-[50px] xl:px-[200px]">
          <div className="patagrph p-2  ">
            <div className="title  py-[50px] flex flex-col ">
              <section className="section_navgation pt-[50px] flex">
                <a className="hover:font-black duration-300" href="/blogs">
                  文章總覽
                </a>{" "}
                ←
                <a href="/blog-07" className="hover:font-black duration-300">
                  Hotjar：深入洞察用戶行為，助力網站轉換率提升
                </a>
              </section>
              <h1 className="text-[rgb(51,51,51)]  leaing-normal text-center font-black mt-[100px]  ">
                Hotjar：深入洞察用戶行為，<br></br>助力網站轉換率提升
              </h1>
              <div className="title-content-date">
                <div></div>
                <div className="text-[14px]">
                  <b className="mr-3">使用者體驗</b>
                  <b>2024/04/05</b>
                </div>
              </div>
              <div className="pb-[40px] title-content mt-4 flex flex-row justify-between border-b border-[#d1d1d1]">
                <div className="flex flex-row">
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] border-black text-black px-3 py-1 bg-[#80aad9]  ">
                    數據分析
                  </div>
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] border-black text-black px-3 py-1 bg-white  ">
                    數據分析軟體
                  </div>
                </div>
                <div className="border border-black text-[14px] md:text-[20px] bg-white px-3 py-1 text-black">
                  seo
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/phppeon8m-6317b85f04714.svg"
              width={700}
              alt="HotjarLogo"
              height={500}
              loading="lazy"
              className="rounded-md mt-3"
              placeholder="empty"
            ></Image>
          </div>

          <div className="patagrph p-2 xl:px-[150px]" data-aos="fade">
            <div className=" mt-5 text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              使用它可以更了解訪客在你的網站上是如何互動的。首先，它能夠揭示使用者在網頁上的點擊、滑動和停留位置，讓你清楚知道哪裡是他們關注的焦點。這有助於最佳化網頁設計，確保重要資訊不被忽略。
            </div>

            <br></br>
            <div className="">
              <div className="imgText mt-[50px]">
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  來推薦一個常用的Seo 工具 ， 免費版的功能就很齊全了
                  他就是👉Hotjar
                </div>
                <a
                  target="_blank"
                  className="text-blue-600 font-bold text-[16px] duration-300 hover:text-blue-500"
                  href="https://www.hotjar.com/invite/?key=partnerprogram&utm_layout=LP&pscd=invite.hotjar.com&ps_partner_key=d2luZGk4MzI5&gad_source=1&gclid=Cj0KCQiA0MG5BhD1ARIsAEcZtwSVStfY-QofwwUM_LRh5EeD7HMtbFKqREsXOCJ0d15KVHVttaGj3PsaAvlhEALw_wcB&ps_xid=Hya5cks9uxbGf3&gsxid=Hya5cks9uxbGf3&gspk=d2luZGk4MzI5"
                >
                  前往 Hotjar 官方網站
                </a>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]"></div>
                {/* <Image
                  src="/images/phppeon8m-6317b85f04714.svg"
                  width={900}
                  height={500}
                  loading="lazy"
                  className="rounded-md mt-3"
                  placeholder="empty"
                ></Image> */}
              </div>

              <div className="imgText mt-[60px]">
                <h2 className="text-[32px] font-bold"> 介紹</h2>

                <h3 className="text-[20px] "></h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  其次，透過熱點分析，你可以發現使用者在填寫表單、點擊按鈕或進行購物過程中可能遇到的障礙，進而改進使用者體驗。這有助於提高轉換率，讓訪客更容易達成他們在網站上的目標。
                </div>

                <h2 className="text-[32px] font-bold"> 介紹</h2>

                <h3 className="text-[20px] ">2-1 熱點圖 (Heatmaps)</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  熱點圖能夠直觀地顯示使用者在網頁上點擊、滑動和停留的區域。透過熱點圖，你可以清楚看到哪些內容最吸引訪客注意，哪些區域可能無法引起興趣，從而更好地調整設計和內容佈局。
                </div>
                <Image
                  src="/images/hotjar熱點圖.png"
                  alt="hotjar熱點圖-極客設計"
                  loading="lazy"
                  placeholder="empty"
                  className=""
                  width={800}
                  height={500}
                ></Image>
                <Image
                  src="/images/hotjar熱點圖-02.png"
                  alt="hotjar熱點圖-極客設計"
                  loading="lazy"
                  placeholder="empty"
                  className="mt-4"
                  width={800}
                  height={500}
                ></Image>

                <h3 className="text-[20px] ">2-2 訪客錄像 (Recordings)</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  訪客錄像可以錄製使用者在網站上的操作過程，例如滑動、點擊和停留的時間。這讓你能夠更真實地體驗訪客在使用網站時的體驗，發現並優化潛在的用戶體驗問題。
                </div>
                <Image
                  src="/images/hotjar訪客錄像recording.png"
                  alt="hotjar訪客錄像-recording"
                  width={700}
                  height={500}
                  className="mt-4"
                  placeholder="empty"
                  loading="lazy"
                ></Image>

                <h3 className="text-[20px] ">3.Hotjar優點</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  訪客錄像可以錄製使用者在網站上的操作過程，例如滑動、點擊和停留的時間。這讓你能夠更真實地體驗訪客在使用網站時的體驗，發現並優化潛在的用戶體驗問題。
                </div>
                <ul className="p-0 mt-5 ">
                  <li>
                    <b>操作簡單：</b>
                    <p>
                      不需要技術背景，管理介面清晰直觀，適合各種網站使用者。
                    </p>
                  </li>
                  <li className="mt-2">
                    <b>深入了解用戶需求:</b>
                    <p>
                      不僅有數據報表，更能看到實際行為和即時反饋，讓網站優化更具針對性。
                    </p>
                  </li>
                  <li className="mt-2">
                    <b>免費計劃可用：</b>
                    <p>提供基本免費方案，適合初創企業和小型網站。</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="patagrph p-2 xl:p-10">
            <div className="px-[20px] p-[50px] bg-gray-100 xl:px-0">
              <div className="text-[20px]  w-[100%]"></div>
              <div className="p-[30px] text-[16px]">
                {" "}
                總結:
                最後，Hotjar提供實時的數據反饋，讓你能夠迅速適應使用者行為的變化，隨時調整網站內容和布局。總括而言，這不僅是提升用戶滿意度的關鍵一步，更是提高網站效能的不可或缺的工具。
              </div>

              <br></br>
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
