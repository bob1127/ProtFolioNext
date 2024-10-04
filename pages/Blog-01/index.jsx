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
                如何做好網頁SEO？
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
              src="/images/blog/splien3d.png"
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
                <div className=" text-[32px]  leading-[32px]   text-[#000000]">
                  <span className="text-[32px] font-bold text-black mt-[30px]">
                    一.
                  </span>
                  SEO vs SEM
                </div>
                <div
                  data-aos="fade-blur"
                  className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]"
                >
                  差異與優缺點比較 SEO 和 SEM
                  兩者經常被混淆，但它們有著不同的作用。SEO
                  是透過自然方式提升網站排名，而 SEM（Search Engine
                  Marketing，搜尋引擎行銷）則是透過付費廣告來提高曝光率。
                </div>
                <div className="feature">
                  <div className="left rounded-2xl border border-black bg-[#f4f1f1]">
                    <div className="top flex justify-center p-5">
                      <h2>SEO</h2>
                    </div>
                    <div className="bottom flex ">
                      <div className="py-5 px-8">
                        <span className="text-[24px] font-bold">優點：</span>
                        <ul className="m-0 p-0">
                          <li className="mt-3">
                            <span className="font-bold">長期效果：</span>
                            <br></br>
                            只要優化得當，SEO
                            可以持續為你帶來免費流量，效果穩定。
                          </li>
                          <li className="mt-3">
                            <span className="font-bold">信任度高:</span>
                            <br></br>
                            自然搜索結果往往比廣告更容易取得使用者信任。
                          </li>
                          <li className="mt-3">
                            <span className="font-bold">成本低：</span>
                            <br></br>
                            雖然需要時間投入，但不需要為每次點擊支付費用。
                          </li>
                        </ul>
                      </div>
                      <div className="py-5 px-8">
                        <span className="text-[24px] font-bold">缺點：</span>
                        <ul className="m-0 p-0">
                          <li>
                            <span className="font-bold">見效較慢：</span>
                            <br></br>
                            SEO 需要時間積累，短期內可能看不到明顯效果。
                          </li>
                          <li>
                            <span className="font-bold">競爭激烈:</span>
                            <br></br>
                            一些熱門關鍵字競爭者眾多，提升排名較難。
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="left my-[20px] rounded-2xl border border-black bg-[#f4f1f1]">
                    <div className="top flex justify-center p-5">
                      <h2>SEM</h2>
                    </div>
                    <div className="bottom flex ">
                      <div className="py-5 px-8">
                        <span className="text-[24px] font-bold">優點：</span>
                        <ul className="m-0 p-0">
                          <li className="mt-3">
                            <span className="font-bold">見效快:</span>
                            <br></br>
                            只要設置好廣告，排名可以立即提升，快速增加流量。
                          </li>
                          <li className="mt-3">
                            <span className="font-bold">可控性高:</span>
                            <br></br>
                            可以精確控制廣告預算、受眾和曝光時間。
                          </li>
                        </ul>
                      </div>
                      <div className="py-5 px-8">
                        <span className="text-[24px] font-bold">缺點：</span>
                        <ul className="m-0 p-0">
                          <li className="mt-3">
                            <span className="font-bold">成本高：</span>
                            <br></br>
                            每次點擊都要支付費用，長期來看成本較高。
                          </li>
                          <li className="mt-3">
                            <span className="font-bold">依賴廣告預算:</span>
                            <br></br>
                            一旦停止投放廣告，流量也隨之停止。
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  總體來說，SEO 是一種適合長期發展的策略，而 SEM
                  則適合希望短期內快速獲得流量的情況。很多企業會將兩者結合使用，以達到最好的效果。
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
                <h2 className="text-[32px] font-bold"> 二.如何進行SEO操作？</h2>
                <p className="text-[16px]">想要做好SEO，有幾個關鍵步驟：</p>

                <h3 className="text-[20px] ">1. 關鍵字研究</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  找出你想讓網站排名的關鍵字，也就是使用者可能會搜尋的詞彙。工具如
                  Google Keyword Planner
                  能幫助你找到相關詞彙。關鍵字最好與你的產品或服務相關，並且具有一定搜尋量。
                </div>

                <h3 className="text-[20px] ">2. 優化內容</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  網站內容要豐富、有價值，並且自然地融入關鍵字。不要只堆砌關鍵字，Google
                  更重視對用戶有幫助的內容。
                </div>

                <h3 className="text-[20px] ">3. 技術優化</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  確保網站運行速度快、手機友好（響應式設計），並且網站結構清晰。使用如meta
                  description、alt tags、URL友善等來提高網站的技術分數。
                </div>

                <h3 className="text-[20px] ">4 . 外部連結（Backlinks）</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  外部網站鏈接到你的網站可以增強你的信任度。多爭取高品質的外部連結會有助於提升你的排名。
                </div>
                <h3 className="text-[20px] ">5. 持續更新</h3>
                <div className=" text-[16px] xl:text-[18px] text-[#4c4c4c]  leading-[32px] xl:leading-[36px]">
                  搜尋引擎喜歡經常更新的網站，所以要定期更新內容或發佈新的文章，保持活躍。
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
