"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
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
      <div>
        <div className="div social-side-bar w-[90%] mx-auto h-[30px] md:h-auto  md:w-[50px] duration-300 flex flex-row md:flex-col bg-white  border-2 border-black py-1  justify-center items-center md:px-[10px] md:py-[20px] fixed bottom-[15px]   md:bottom-[50%] z-[9999999]  right-[15px] md:right-[20px] rounded-full">
          <a
            onClick={() => window.history.back()}
            className="text-[30px] hover:scale-125 duration-300 font-bold w-full mt-3 h-auto cursor-pointer"
          >
            ←
          </a>
          <a className="text-[30px] hover:scale-125 duration-300 font-bold w-full mt-3 h-auto cursor-pointer">
            <Image
              src="/images/icon/line.png"
              width={50}
              height={50}
              placeholder="empty"
            ></Image>
          </a>
          <a
            href=""
            className="text-[30px] hover:scale-125 duration-300 font-bold w-full mt-3 h-auto cursor-pointer"
          >
            <Image
              src="/images/icon/facebook.png"
              width={50}
              height={50}
              placeholder="empty"
            ></Image>
          </a>
        </div>

        <div className="article-title hidden md:black relative">
          <div
            className="txt bg-black-rgba z-[999] absolute bottom-0 h-1/2 left-0 flex justify-center items-center w-[100vw]  border-t border-white/50 backdrop-blur-md"
            data-aos="fade-blur"
          ></div>
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
            <div className="title  py-[50px] flex flex-col ">
              <h1
                data-aos="fade-blur"
                className="text-[#333] leaing-[80px] text-center font-black mt-[100px]  "
              >
                Spline 3D 入門指南
              </h1>
              <div className="title-content-date">
                <div data-aos="fade-blur">
                  <Image src="" width={50} height={50}></Image>
                </div>
                <div className="text-[14px]">
                  <b className="mr-3">Spline 3d</b>
                  <b>2024/04/05</b>
                </div>
              </div>
              <div className="pb-[40px] title-content mt-4 flex flex-row justify-between border-b border-[#d1d1d1]">
                <div className="flex flex-row">
                  <div className="border mx-3 font-bold  text-[16px] border-black text-black px-3 py-1 bg-[#80aad9]  ">
                    網頁設計
                  </div>
                  <div className="border mx-3 font-bold  text-[16px] border-black text-black px-3 py-1 bg-white  ">
                    3d 軟體應用
                  </div>
                </div>
                <div className="border border-black text-[20px] bg-white px-3 py-1 text-black">
                  設計
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-blur" className="flex justify-center">
            <Image
              placeholder="empty rounded-md"
              loading="lazy"
              width={900}
              height={500}
              src="/images/blog/spline3d.png"
            ></Image>
          </div>

          <div className="patagrph p-2 xl:px-[150px]" data-aos="fade">
            <h2>什麼是 Spline 3D？</h2>
            <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              Spline 3D 是一個基於雲端的 3D
              設計工具，適合各種技能水平的使用者，特別是設計師和開發者。它使得創建和共享
              3D 內容變得簡單，並且提供直觀的介面和強大的功能。
            </div>
            <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              3D
              設計已成為現代設計的重要趨勢，從網頁動畫到產品設計，三維圖形的應用越來越廣泛。如果你對
              3D 設計感興趣，但不確定從哪裡開始，那麼 Spline
              是一個非常適合新手的工具。
            </div>
            <a
              target="_blank"
              className="text-blue-600 font-bold text-[16px] duration-300 hover:text-blue-500"
              href="https://spline.design/"
            >
              前往 Spline 官方網站
            </a>

            <br></br>
            <div className="">
              <div className="imgText mt-[20px]">
                <div className=" text-[32px]  leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    一.
                  </span>
                  註冊與登錄
                </div>
                <div
                  data-aos="fade-blur"
                  className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]"
                >
                  <span className="text-[20px] text-black">1.</span>
                  點擊「註冊」按鈕，填寫必要的資訊並創建帳戶。
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <span className="text-[20px] text-black">2.</span>
                  登錄後，你將進入 Spline 3D 的主介面。
                </div>
                <Image
                  src="/images/blog/splineLogin.png"
                  width={900}
                  height={500}
                  loading="lazy"
                  data-aos="fade-blur"
                  className="rounded-md mt-3"
                  placeholder="empty"
                ></Image>
              </div>

              <div className="imgText mt-[60px]">
                <h2 className="text-[32px] font-bold"> 二.簡易的操作介面</h2>

                <h3 className="text-[20px] ">1. 3D 模型創建與編輯 Spline</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  提供了各種基礎形狀（如立方體、球體、圓柱等），你可以通過拉伸、旋轉和縮放來輕鬆調整這些形狀。此外，Spline
                  支持導入外部 3D 模型（如 .obj、.gltf
                  格式），讓你能夠更靈活地處理複雜的模型。
                </div>

                <Image
                  src="/images/blog/簡單拉伸.gif"
                  placeholder="empty"
                  className="mt-[30px] rounded-md"
                  width={800}
                  height={500}
                ></Image>
                <b className="text-[14px] font-bold mt-3">
                  支援多種格式模型匯入
                </b>

                <Image
                  src="/images/blog/import.png"
                  placeholder="empty"
                  className="mt-[30px] rounded-md"
                  width={800}
                  height={500}
                ></Image>
                <Image
                  src="/images/blog/spline-opration.png"
                  placeholder="empty "
                  className="mt-2 rounded-md"
                  width={800}
                  height={500}
                ></Image>
                <b className="text-[14px] font-bold mt-3">
                  支援多種格式模型匯入
                </b>

                <h3 className="text-[20px] ">2.材質與光影效果</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  - 材質設置：Spline
                  提供多種材質選項，讓你能夠為模型添加表面細節，例如金屬質感、玻璃透明度、塑料質地等
                </div>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  光源控制：你可以在場景中添加光源，並自定義其方向、強度和顏色，讓模型呈現出逼真的陰影與高光效果。
                </div>

                <h3 className="text-[20px] ">3.動畫製作</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  Spline 支持為 3D
                  模型設置動畫。你可以設置對象的移動、旋轉、縮放等參數，並透過時間軸進行細節調整，讓你的模型不僅僅是靜態展示，還可以做出連續動作。
                </div>

                <h3 className="text-[20px] ">4 . 互動設計 </h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  使用 Spline 的互動功能，你可以為 3D
                  模型設置觸發效果。例如當使用者滑鼠懸停在某個對象上時，觸發對象的動畫或樣式變化，增加用戶參與感。
                </div>
                <div>
                  <Image
                    alt="互動動畫01-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫_定義初始狀態-極客網頁設計.png"
                  ></Image>
                  <b>為物件添加一個 Basic State（基本狀態）。定義初始狀態</b>
                </div>
                <div className="mt-[35px]">
                  <Image
                    alt="互動動畫01-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫_更改物件狀態-極客網頁設計.png"
                  ></Image>
                  <b>
                    新增初始狀態後，可以開始調整你的物件的狀態，現在更改的狀態是之後事件觸發時物件會產生的變化狀態。這裡我們把物件往右下移動並且縮放。
                  </b>
                </div>
                <div className="mt-[35px]">
                  <Image
                    alt="互動動畫01-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫01-極客網頁設計.png"
                  ></Image>
                  <b>選擇添加事件(Events)</b>
                </div>
                <div className="mt-[35px]">
                  <Image
                    alt="互動動畫01-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫02-極客網頁設計.png"
                  ></Image>
                  <b className="text-[16px]">
                    事件(Events)可以選擇當滑鼠移入、點擊、或者當頁面載入時，觸發動畫效果
                  </b>
                </div>
                <div className="mt-[35px]">
                  <Image
                    alt="互動動畫_添加transition-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫_添加transition-極客網頁設計.png.gif"
                  ></Image>
                  <b className="text-[16px]">
                    開始定義你的transition:我這裡選擇當頁面載入時(start)及觸發動畫，transition設定ease-in-out，不重複播放
                  </b>
                </div>
                <div className="mt-[35px]">
                  <Image
                    alt="互動動畫_添加transition-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫_更改物件狀態-極客網頁設計.png"
                  ></Image>
                  <b className="text-[16px]">
                    接下來來看看會有什麼改變吧！ 點擊播放鈕
                  </b>
                </div>
                <div className="mt-[35px]">
                  <Image
                    alt="互動動畫_效果展示-極客網頁設計"
                    width={800}
                    height={600}
                    placeholder="empty"
                    loading="lazy"
                    src="/images/blog/Blog05/互動動畫_效果展示-極客網頁設計.gif"
                  ></Image>
                  <b className="text-[16px]"></b>
                </div>
              </div>

              {/* <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  <span className="text-[22px] font-bold">
                    3D 模型創建與編輯
                  </span>{" "}
                  Spline
                  提供了各種基礎形狀（如立方體、球體、圓柱等），你可以通過拉伸、旋轉和縮放來輕鬆調整這些形狀。此外，Spline
                  支持導入外部 3D 模型（如 .obj、.gltf
                  格式），讓你能夠更靈活地處理複雜的模型。
                </div>

                <div className="mt-[30px]">
                  <Image
                    src="/images/blog/3dmodel.png"
                    width={900}
                    placeholder="empty"
                    height={600}
                    className="rounded-md"
                  ></Image>
                  <p className="text-[16px] mt-4 font-bold">
                    跟其他建模軟體一樣可使用簡單形狀
                  </p>
                </div>

                <div className="mt-[30px]">
                  <Image
                    src="/images/blog/spline-opration.png"
                    width={900}
                    placeholder="empty"
                    height={600}
                    className="rounded-md"
                  ></Image>
                  <p className="text-[16px] mt-4 font-bold">導入外部模型</p>
                </div>
              </div> */}

              {/* <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  步驟三：進入新手頻道 在 Midjourney Discord
                  伺服器中，找到新手頻道（通常是 #newbies
                  頻道）。你可以在這裡輸入指令來生成圖像。
                </div>
                <Image
                  src="/images/blog/mid02.png"
                  width={900}
                  className="rounded-md"
                  placeholder="empty"
                  height={600}
                ></Image>
              </div> */}
              {/* <div className="imgText mt-[60px]">
                <div className="text-[20px] font-normal text-[#242424]  leading-[32px] xl:leading-[36px]">
                  Midjourney
                  提供了多種指令與參數，讓使用者可以更靈活地生成和自訂圖像。以下將詳細介紹幾個常見且強大的指令功能，幫助你在創作過程中充分利用這些工具。
                </div>
              </div> */}

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
              </div> */}

              {/* <div className="imgText mt-[60px]">
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
              </div> */}

              {/* <div className="imgText mt-[60px]">
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
              </div> */}
              {/* 
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
              </div> */}
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
          </div> */}

          {/* <div className="patagrph p-2 xl:p-10">
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
