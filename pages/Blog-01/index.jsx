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
          <a href="/Blogs" className="  font-bold  w-full mt-3 h-auto ">
            Blog
          </a>
          <div className="  border w-full mt-3 h-auto border-black">
            <Image src="" width={50} height={50} placeholder="empty"></Image>
          </div>
          <div className="  border w-full mt-3 h-auto border-black">
            <Image src="" width={50} height={50} placeholder="empty"></Image>
          </div>
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
                建立設計一個新網站-我該如何做seo規劃？
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
              width={800}
              height={500}
              alt="新網站SEO規劃-極客網頁設計"
              src="/images/blog/新網站SEO規劃-極客網頁設計.png"
            ></Image>
          </div>

          <div className="patagrph p-2 xl:px-[150px]" data-aos="fade">
            <h2>什麼是SEO？</h2>
            <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
              SEO，全名是「搜尋引擎優化」（Search Engine
              Optimization），指的是透過一系列策略與技術，提升網站在搜尋引擎結果中的排名，讓更多人可以在搜尋時看到你的网站。想像一下，你開了一家店鋪，但如果位置隱藏在巷弄裡，沒人能找到，那生意肯定不好。SEO
              就是幫助你的網站「搬到」更顯眼的位置，讓更多人能看到。當你排名越高，點擊率也會隨之提升，自然就能吸引更多流量，最終帶來更多商機！
            </div>

            <br></br>
            <div className="">
              <div className="imgText mt-[20px]">
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    1.
                  </span>
                  選擇可靠的主機商
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  選擇一個穩定且快速的主機商對於網站的SEO至關重要。穩定的主機能確保網站持續在線，避免因為主機不穩定導致的排名下降。快速的伺服器速度也會提升使用者體驗，並進而提高搜尋引擎排名。可以考慮知名的主機供應商，如Bluehost或SiteGround等，確保能提供優質的客戶服務和良好的性能。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    2.
                  </span>
                  確認網站網域名稱使用HTTPS（SSL加密）
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  選擇一個穩定且快速的主機商對於網站的SEO至關重要。穩定的主機能確保網站持續在線，避免因為主機不穩定導致的排名下降。快速的伺服器速度也會提升使用者體驗，並進而提高搜尋引擎排名。可以考慮知名的主機供應商，如Bluehost或SiteGround等，確保能提供優質的客戶服務和良好的性能。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    3.
                  </span>
                  現代化的網頁設計
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  網站設計不僅僅是美觀，更要符合SEO和使用者體驗。現代化的設計要簡單直觀，讓訪客能快速找到所需資訊。重視排版、色彩和圖片搭配，並確保設計符合行動端，這樣不僅能讓網站看起來更專業，也會讓用戶停留時間更長，有助於排名。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    4.
                  </span>
                  安裝SEO分析工具：GA4和Google Search Console
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  • 設置GA4（Google Analytics 4）和Google Search
                  Console，這些工具可以幫助你追蹤訪客來源、瀏覽行為和排名變化。GA4能提供豐富的數據洞察，而Google
                  Search
                  Console能協助你檢測並解決網站的SEO問題，這些資料可以幫助你針對SEO進行優化。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    5.
                  </span>
                  優化網站速度和使用者體驗
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  速度是影響SEO的關鍵因素之一。當網站載入速度慢，訪客容易流失並降低排名。透過壓縮圖片、使用快取，以及選擇快速的主機來提升網站速度。此外，提升使用者體驗也會增加停留時間和互動次數，有助於SEO。建議定期測試網站速度（例如使用Google
                  PageSpeed Insights）並持續優化。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    6.
                  </span>
                  移動端的支持與使用者體驗
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  越來越多的用戶使用行動設備瀏覽網站，因此確保網站在行動端有良好的顯示效果至關重要。使用響應式設計可以讓網站自動適應不同裝置的螢幕大小，這樣不僅提升了行動端的使用體驗，也會在搜尋引擎排名中獲得優勢。Google非常重視行動端體驗，因此這點絕對不容忽視。
                </div>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  這些步驟能夠幫助你建立一個更具競爭力的網站，並在搜尋引擎上獲得更好的排名。SEO是個長期的過程，只要持續努力，就能逐步看到成果！
                </div>
                {/* <Image
                  src="/images/blog/splineLogin.png"
                  width={900}
                  height={500}
                  loading="lazy"
                  data-aos="fade-blur"
                  className="rounded-md mt-3"
                  placeholder="empty"
                ></Image> */}
              </div>

              <div className="imgText mt-[60px]">
                <h2 className="text-[32px] font-bold">
                  {" "}
                  開始進行你網站的內容規劃吧！！
                </h2>
                <h2 className="text-[32px] font-bold"> 網頁相關關鍵字規劃</h2>

                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    1.
                  </span>
                  瞭解你的目標受眾
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  首先，定義你的目標受眾。他們是誰？他們可能會使用哪些關鍵詞來搜尋你的產品或服務？站在他們的角度思考，可以幫助你找到符合需求的相關關鍵詞。
                </div>

                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    2.
                  </span>
                  使用關鍵詞工具進行研究
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  • 借助工具像Google Keyword
                  Planner、Ahrefs、或Ubersuggest，找到與你的業務相關且搜尋量高的關鍵詞。這些工具能夠告訴你哪些詞語熱門，但競爭較低，是理想的選擇。
                </div>

                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    3.
                  </span>
                  關鍵詞分類
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  將關鍵詞分成主要關鍵詞和次要關鍵詞。主要關鍵詞應該與你網站的核心內容最相關；次要關鍵詞則用於細分內容或目標不同用戶需求。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    4.
                  </span>
                  考慮長尾關鍵詞
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  長尾關鍵詞（例如「如何選擇可靠的主機商」）具有更低的競爭，並更能精確匹配特定搜尋意圖。這些詞雖然搜尋量較低，但往往能帶來更高的轉換率。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    5.
                  </span>
                  分析競爭對手的關鍵詞
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  檢查競爭對手的網站，看看他們使用了哪些關鍵詞，哪些頁面排名較高。可以通過工具或直接在搜尋引擎上搜尋，了解他們如何利用關鍵詞獲得曝光。
                </div>
                <div className=" text-[32px] mt-[30px] leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    6.
                  </span>
                  為內容優化關鍵詞
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  •
                  一旦確定了適合的關鍵詞，就將它們自然地融入到標題、描述、內文和圖片Alt標籤中。確保這些關鍵詞出現的頻率和位置能夠協助SEO，但避免過度使用，以免被搜尋引擎懲罰。
                </div>
                <div className=" text-[18px] mt-[30px] leading-[32px]   text-[#000000]">
                  這些步驟將幫助你更好地進行關鍵詞規劃，讓網站更具曝光度並吸引到更精準的訪客。
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

              <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  <span className="bg-[#12bef7] text-black">
                    SEO 帶來的實質效益
                  </span>{" "}
                  當 SEO 做得好時，會帶來許多具體的效益。首先是
                  <span className="bg-[#12bef7] text-black">
                    穩定的自然流量
                  </span>{" "}
                  ，SEO
                  不像付費廣告需要不斷投入金錢維持，它帶來的是源源不斷的免費訪客。此外，{" "}
                  <span className="bg-[#12bef7] text-black">
                    品牌信任度提升
                  </span>
                  也是一大優勢，當使用者多次在搜尋結果中看到你，自然會對你的{" "}
                  品牌產生信任感 。最後，長期來看，SEO 可以{" "}
                  <span className="bg-[#12bef7] text-black"> 降低行銷成本</span>
                  ，因為你不必為每一次點擊付費，且一旦排名穩固，你就可以享受持續的曝光和流量，這對於任何希望長期穩定發展的企業來說都是巨大的資產。
                </div>
                {/* <Image
                  src="/images/blog/mid02.png"
                  width={900}
                  className="rounded-md"
                  placeholder="empty"
                  height={600}
                ></Image> */}
              </div>
              <div className="imgText mt-[60px]">
                <div className="text-[20px] font-normal text-[#242424]  leading-[32px] xl:leading-[36px]">
                  總結
                </div>
              </div>

              <div className="imgText mt-[60px]">
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  SEO
                  不用想得太複雜，本質上就是幫助搜尋引擎更好地理解並推薦你的網站給合適的人。只要你有耐心進行關鍵字研究，創造優質內容，並且做好技術和外部連結的優化，排名自然會提升。SEO
                  是一個長期的策略，但效果也是持久的，讓你的網站獲得穩定的流量。所以，記住關鍵點：內容為王、技術優化、持續更新！這樣你的網站就能在搜尋引擎中脫穎而出，並實現實質的業務成長。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
