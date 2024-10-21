"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

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
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="關於我們-極客網頁設計" />
        <meta
          property="og:description"
          content="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png"
        />
        <meta property="og:url" content="https://www.jeek-webdesign.com.tw" />
        <meta property="og:type" content="website" />
      </Head>
      <NextSeo
        title="網頁設計很花錢嗎？-極客網頁設計_讓你的網頁變的更好，你需要的知識都在這"
        description="透過精心規劃與適當的資源分配，控制成本並提升品牌形象。掌握基礎網站設計、SEO優化、行動友善設計和外部連結建立，讓您的網站在搜尋引擎中脫穎而出，成為穩定流量來源，促進業務增長。"
        openGraph={{
          title:
            "網頁設計很花錢嗎？-極客網頁設計_讓你的網頁變的更好，你需要的知識都在這",
          description:
            "透過精心規劃與適當的資源分配，控制成本並提升品牌形象。掌握基礎網站設計、SEO優化、行動友善設計和外部連結建立，讓您的網站在搜尋引擎中脫穎而出，成為穩定流量來源，促進業務增長。",
          images: [
            {
              url: "https://www.jeek-webdesign.com.tw/images/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷_網站建置.webp",
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
              alt="img"
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
              alt="img"
              placeholder="empty"
            ></Image>
          </a>
        </div>

        <div className="article-title hidden md:black relative">
          <div className="txt bg-black-rgba z-[999] absolute bottom-0 h-1/2 left-0 flex justify-center items-center w-[100vw]  border-t border-white/50 backdrop-blur-md"></div>
          <Image
            src="/images/blog/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp"
            width={1920}
            height={768}
            placeholder="empty"
            className="rounded-md"
            loading="eager"
            data-aos="fade-blur"
          ></Image>
        </div>
        <div className="article-content mt-[100px] p-[20px] md:px-[50px] xl:px-[200px]">
          <div className="patagrph p-2  ">
            <div className="title  pb-[50px] flex flex-col ">
              <h1
                className="text-[rgb(51,51,51)] leaing-[80px] text-center font-black mt-[100px]  "
                data-aos="fade-blur"
              >
                網頁設計很花錢嗎？
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
                  <div className="border mx-3 font-bold  text-[16px] border-black text-black px-3 py-1 bg-[#80aad9]  ">
                    網頁設計
                  </div>
                  <div className="border mx-3 font-bold  text-[16px] border-black text-black px-3 py-1 bg-white  ">
                    SEO
                  </div>
                </div>
                <div className="border border-black text-[20px] bg-white px-3 py-1 text-black">
                  搜尋引擎排名
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/blog/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷.png"
              width={900}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-md"
              data-aos="fade-blur"
            ></Image>
          </div>

          <div className="patagrph p-2 xl:px-[150px]" data-aos="fade">
            <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              <h2>
                透過精心規劃和明智選擇，不僅能控制成本，還能有效提升品牌形象與業務效益。
              </h2>
              很多人認為網頁設計一定要投入大筆資金，但其實並非如此。透過一些小技巧和合理的資源分配，網站設計的成本可以有效降低。事實上，有些步驟是可以自己來完成的，然而，為了達到專業效果，某些部分還是建議找專業的網頁設計公司來幫忙。我們就來看看哪些工作可以自己做，哪些部分可以交給我們吧！
            </div>

            <br></br>
            <div className="">
              <div className="imgText mt-[50px]">
                <h2 className="text-[32px] font-bold"> 可以自己來的部分：</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      內容撰寫：
                    </p>
                    <li>
                      您最了解您的品牌和服務，編寫網站的基本介紹、產品描述、服務項目和常見問題等內容，有助於節省成本。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      基本排版：
                    </p>
                    <li>
                      透過一些免費的網站建置工具，如 WordPress 或
                      Wix，您可以選擇基本的排版和佈局。這些工具提供許多現成模板，讓您能輕鬆上手設計基礎頁面。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      圖片與影片素材：
                    </p>
                    <li>
                      如果您有品牌素材，建議自行準備。簡單的品牌圖片或影片展示可以在網站上直接使用，這樣能省去專業拍攝或影像處理的費用。
                    </li>
                    <a
                      id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                      target="_blank"
                      href="https://search.google.com/search-console/about"
                      className="simple-link"
                    >
                      學習如何使用 Midjurney 生成圖片
                    </a>
                  </ul>
                </div>
                <br></br>

                <h2 className="text-[32px] font-bold">
                  {" "}
                  建議尋求專業幫助的部分：
                </h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      專業設計與客製化：
                    </p>
                    <li>
                      我們可以為您的網站量身訂製專業設計，確保品牌形象在網站上完整呈現，並且根據您的需求調整版面和功能。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      SEO 優化：
                    </p>
                    <li>
                      如果您希望網站能在搜尋引擎上有良好的排名，專業的 SEO
                      優化是必須的。Jeek能夠針對關鍵字、頁面結構和網站速度進行全面的優化，提高您的網站曝光率。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      專業商業圖片拍攝與後製：
                    </p>
                    <li>
                      Jeek可協助您拍攝高品質的產品或形象照，並進行專業的後製處理，以確保圖片完美呈現於網站上，提升視覺效果。這不僅讓您的產品看起來更吸引人，也能增強品牌的專業形象。
                    </li>
                    <div className="flex mb-[38px]">
                      <Image
                        src="/images/The Smallest Wireless Potentiostat- wireless charging.webp"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/The Smallest Wireless Potentiostat- wireless charging.webp"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/The Smallest Wireless Potentiostat-Smart Hub .webp"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/The Smallest Wireless Potentiostat-Box.webp"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                    </div>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      商業3D建模：
                    </p>
                    <li>
                      想要展示產品的3D視覺效果嗎？我們提供商業3D建模服務，讓您的顧客能更直觀地查看產品細節。無論是用於互動展示還是產品展示頁面，3D模型都能為您的網站增添現代感，提升顧客體驗。
                    </li>
                    <div className="flex mb-[38px]">
                      <Image
                        src="/images/3d產品模型08-極客網頁設計|Blender3D.png"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/3d產品模型09-極客網頁設計|Blender3D.webp"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/3d產品模型06-極客網頁設計|Blender3D.webp"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                    </div>
                    <p className="inline-block text-[18px] mt-3 bg-blue-600 text-white">
                      進階功能開發：
                    </p>
                    <li>
                      如果您的網站需要整合購物車、會員系統或是表單等進階功能，這些複雜的程式開發與整合工作可以交給我們處理，確保網站運作順暢。
                    </li>
                  </ul>
                </div>
                <br></br>

                {/* <a
                  id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                  target="_blank"
                  href="https://search.google.com/search-console/about"
                  className="simple-link"
                >
                  前往Google search console
                </a> */}

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  網頁設計並不一定很花錢。透過合理分配，您可以自行處理一些基本工作，並針對需要專業技術的部分尋求我們的協助。這樣一來，您不僅能節省預算，還能獲得更符合品牌形象的專業網站。若您對網站製作有任何疑問，隨時歡迎與我們聯繫，我們將根據您的需求量身訂製最合適的網站方案！
                </div>
                <Image
                  src="/images/blog/blog03/分析搜尋查詢.png"
                  width={1000}
                  height={600}
                  loading="lazy"
                  placeholder="empty"
                  className="my-4"
                  alt="分析搜尋查詢-GooleSearchConsole"
                  data-aos="fade-blur"
                ></Image>
              </div>

              <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                <h3>1.2 篩選和排序：</h3>
                使用篩選器來查看特定時間範圍或特定關鍵字的表現。您還可以根據點擊數或展示數排序，以找出最有效的關鍵字。
              </div>
              <Image
                src="/images/blog/blog03/新增篩選器.png"
                width={1000}
                height={600}
                loading="lazy"
                placeholder="empty"
                className="my-4"
                alt="新增篩選器-GooleSearchConsole"
                data-aos="fade-blur"
              ></Image>
              <b className="text-[16px]">新增篩選器</b>
              <Image
                src="/images/blog/blog03/查詢相關關鍵字.png"
                width={1000}
                height={600}
                loading="lazy"
                placeholder="empty"
                className="mt-[50px]"
                alt="新增篩選器-GooleSearchConsole"
                data-aos="fade-blur"
              ></Image>
              <Image
                src="/images/blog/blog03/查詢相關關鍵字02.png"
                width={1000}
                height={600}
                loading="lazy"
                placeholder="empty"
                className="my-4"
                alt="新增篩選器-GooleSearchConsole"
                data-aos="fade-blur"
              ></Image>
              <b>查詢相關關鍵字</b>
              <br></br>
              <br></br>
              <br></br>

              <b className="mt-[50px]">
                現在，報告中只會顯示包含你搜尋的關鍵字的搜尋查詢結果。
              </b>
              <Image
                data-aos="fade-blur"
                src="/images/blog/blog03/查詢相關關鍵字結果.png"
                width={1000}
                height={600}
                loading="lazy"
                placeholder="empty"
                className="my-4"
                alt="新增篩選器-GooleSearchConsole"
              ></Image>

              <div className="imgText mt-[50px]">
                <h2 className="text-[32px] font-bold"> 2. 優化網站內容</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  確保您的網站內容對於訪客來說既有價值又具吸引力。使用簡單明瞭的語言，並定期更新內容，以滿足搜尋者的需求。
                </div>
                <br></br>
              </div>

              <div className="imgText mt-[50px]">
                <h2 className="text-[32px] font-bold"> 3. 提升網站速度</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  網站的載入速度對於使用者體驗至關重要。您可以使用 Google
                  PageSpeed Insights
                  來分析網站速度，並根據建議進行優化。例如，壓縮圖片、減少重定向和選擇快速的主機，這些措施都能顯著提升網站的載入速度，進而提高搜尋排名。
                </div>
                <br></br>

                <a
                  id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                  target="_blank"
                  href="https://search.google.com/search-console/about"
                  className="simple-link"
                >
                  測試你的網頁速度-Google PageSpeed Insights工具
                </a>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  網站速度對於消費者其實是有很重大影響的
                </div>
                <Image
                  src="/images/blog/Blog03/測試網頁速度-極客網頁設計.png"
                  width={1000}
                  height={600}
                  loading="lazy"
                  placeholder="empty"
                  className="my-4"
                  data-aos="blur"
                  alt="測試網頁速度--Google PageSpeed Insights"
                ></Image>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul className="mt-5">
                    <li className="mt-3">
                      - 根據 Google 的研究，當行動網頁載入時間從1 秒增加到 3
                      秒時，用戶離開的可能性會增加 32%。
                    </li>
                    <li className="mt-3">
                      - 亞馬遜的一項研究發現，每當它們的網站載入時間降低 0.1
                      秒，就能降低 1% 的銷售成本。
                    </li>
                    <li className="mt-3">
                      - 另一項數據顯示，如果網頁載入時間從1 秒增加到 6
                      秒，跳出率就會增加 106%。
                    </li>
                  </ul>
                </div>
                <br></br>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  這些數據清楚地表明，網站的加載速度對於用戶體驗和商業成果有直接的影響。網站加載速度的提升不僅能夠減少用戶流失，還能提高轉換率
                  我們可以使用google 提供網站的測試工具 Page Speed Insights
                  來評估使用者體驗和網站的效能
                </div>
              </div>

              <div className="imgText mt-[50px]">
                <h2 className="text-[32px] font-bold"> 4. 行動友善設計</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  隨著手機使用率的增加，搜尋引擎對於行動友善網站的排名越來越重視。確保您的網站在各種設備上都能良好顯示，這不僅有助於提高搜尋排名，還能提升使用者體驗。為了達到這一目標，您可以採取以下幾個步驟：
                </div>
                <br></br>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul className="mt-5">
                    <li className="mt-3">
                      <b>響應式設計：</b>{" "}
                      選擇響應式網站設計，讓網站根據不同螢幕尺寸自動調整佈局和內容，確保在手機、平板和桌面電腦上都能良好顯示。
                    </li>
                    <li className="mt-3">
                      <b>優化內容：</b>{" "}
                      縮短文本和圖片的載入時間，避免使用大型圖片或視頻，這樣能提升網站在行動設備上的加載速度。
                    </li>
                    <li className="mt-3">
                      <b>觸控友好：</b>{" "}
                      確保按鈕和連結大小適中，便於使用者用手指輕鬆點擊，避免造成誤觸。
                    </li>
                  </ul>
                </div>
              </div>

              <div className="imgText mt-[50px]">
                <h2 className="text-[32px] font-bold"> 5. 建立外部連結</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  外部連結是搜尋引擎判斷網站權威性的重要指標。擁有高質量的外部連結不僅能提升您的網站排名，還能吸引更多訪客。您可以通過以下幾種方法來建立外部連結：
                </div>
                <br></br>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul className="mt-5">
                    <li className="mt-3">
                      <b>與相關行業網站合作：</b>{" "}
                      尋找與您業務相關的網站，提議互相連結或進行內容合作，例如撰寫客座文章。
                    </li>
                    <li className="mt-3">
                      <b> 撰寫高品質內容：</b>{" "}
                      創建有價值的內容，如指導性文章或研究報告，吸引其他網站自願引用您的連結。
                    </li>
                    <li className="mt-3">
                      <b>社群媒體分享：</b>{" "}
                      在社群媒體上分享您的內容，增加曝光率，鼓勵其他網站或部落客進行連結。
                    </li>
                  </ul>
                  <h3 className="mt-[20px]">
                    如何使用 Google Search Console 查看外部連結數量
                  </h3>

                  <b>
                    查看連結報告：
                    在左側菜單中，點擊「連結」。這裡會顯示指向您網站的外部連結數據。
                  </b>
                  <Image
                    src="/images/blog/Blog03/查看外部連結數量-極客網頁設計.png"
                    className=""
                    width={1000}
                    height={600}
                    placeholder="empty"
                    data-aos="fade-blur"
                    alt="查看外部連結數量-GoogleSearchConsole"
                  ></Image>
                  <br></br>
                </div>
                <div className="mt-[30px] text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  提高搜尋引擎的曝光度和排名是一個持續的過程，需透過關鍵字研究、網站優化、行動友善設計及建立外部連結等策略來達成。這些方法不僅能提升您的網站可見性，還能吸引更多潛在客戶。如果您想進一步了解如何分析您
                  SEO 的成效，以便不斷調整和優化策略，請參閱
                </div>

                <a
                  id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                  target="_blank"
                  href="/Blog-09"
                  className="simple-link "
                >
                  如何分析seo成效？
                </a>
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
