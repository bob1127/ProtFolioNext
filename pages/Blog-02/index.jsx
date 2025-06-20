"use client";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import BlogCarousel from "../../components/EmblaCarousel10/index";

import Image from "next/image";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const [isZoomed, setIsZoomed] = useState(false);
  const webpage = {
    name: "網頁設計很花錢嗎？｜極客網頁設計 JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐",
    description:
      "不再讓網頁行銷成為負擔！Jeek提供量身定制的網站設計與SEO優化，助力品牌高效成長，無論是初創企業還是中小型商家，預算內實現高效行銷。",
    url: "https://www.jeek-webdesign.com.tw/blog-02",
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
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="網頁設計很花錢嗎？｜極客網頁設計 JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐"
        />
        <meta
          property="og:description"
          content="不再讓網頁行銷成為負擔！Jeek提供量身定制的網站設計與SEO優化，助力品牌高效成長，無論是初創企業還是中小型商家，預算內實現高效行銷。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/blog/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷.png"
        />
        <meta
          property="og:url"
          content="https://www.jeek-webdesign.com.tw/blog-02"
        />
        <meta property="og:type" content="website" />

        <meta
          name="title"
          content="網頁設計很花錢嗎？｜極客網頁設計 JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐"
        />
        <meta
          name="description"
          content="想要專業網頁設計卻預算有限？Jeek提供精準的網站設計與SEO優化服務，無論是中小型企業還是初創品牌，都能在有限預算內達成行銷效果。"
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
                    name: "網頁設計很花錢嗎？",
                    item: "https://www.jeek-webdesign.com.tw/blog-02",
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

      {/* <NextSeo
        title="網頁設計很花錢嗎？-極客網頁設計_讓你的網頁變的更好，你需要的知識都在這"
        description="不再讓網頁行銷成為負擔！Jeek提供量身定制的網站設計與SEO優化，助力品牌高效成長，無論是初創企業還是中小型商家，預算內實現高效行銷。"
      /> */}

      <div>
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
        <div className="article-content 2xl:px-[200px] p-[20px] md:px-[110px] xl:px-[200px]">
          <div className="patagrph p-2  ">
            <div className="title  pb-[50px] flex flex-col ">
              <section className="section_navgation pt-[50px] flex">
                <a className="hover:font-black duration-300" href="/blogs">
                  文章總覽
                </a>{" "}
                ←
                <a href="/blog-02" className="hover:font-black duration-300 ">
                  網頁設計很花錢嗎？
                </a>
              </section>
              <h1
                className="text-[rgb(51,51,51)]  text-center heading-title "
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
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] border-black text-black px-3 py-1 bg-[#80aad9]  ">
                    網頁設計
                  </div>
                  <div className="border mx-3 font-bold  text-[14px] md:text-[20px] border-black text-black px-3 py-1 bg-white  ">
                    SEO
                  </div>
                </div>
                <div className="border border-black text-[14px] md:text-[20px] bg-white px-3 py-1 text-black">
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
              className="rounded-lg mb-6"
              data-aos="fade-blur"
            ></Image>
          </div>

          <div
            className="patagrph mx-auto  w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[60%] p-2 "
            data-aos="fade"
          >
            <div>
              <h2 className="Blog_header">"做一個網頁到底花費要多少？"</h2>
              <p className=" Blog_body ">
                Ai時代來臨，網頁製作的成本和門檻是越來越低，所以你如果想要自己製作一個網站可以是0成本！
                但是就是因為大家人人都會，所以好的網站會更顯得突出。所以你如果只是想自己做個簡單的個人作品集網站或者簡單的形象或者購物網站，你完全可以自己動手來。但是好的網站牽扯到很多的問題：網頁結構、代碼的精簡度、形象設計、使用者的互動體驗、網頁效能。這些都是會真正影響網頁是否能曝光且排名靠前的因素
                <br></br> <br></br>
                行銷不該是遙不可及的奢侈品，而是每一個有潛力的品牌都能負擔得起的投資。透過{" "}
                <span className="bg-[#fdb715] text-black">
                  網站設計和SEO優化
                </span>
                ，您不僅能快速提升品牌曝光度，還能吸引到精準的目標客群，最終實現銷售成長。
              </p>
            </div>
            <br></br>
            <div className=" text-[16px] xl:text-[18px]  leading-normal xl:leading-[36px] text-[#171717]">
              <h2 className="Blog_header ">
                透過精心規劃和明智選擇，不僅能控制成本，<br></br>
                還能有效提升品牌形象與業務效益。
              </h2>
              <p className=" Blog_body ">
                很多人認為網頁設計一定要投入大筆資金，但其實並非如此。透過一些小技巧和合理的資源分配，網站設計的成本可以有效降低。事實上，有些步驟是可以自己來完成的，然而，為了達到專業效果，某些部分還是建議找專業的網頁設計公司來幫忙。我們就來看看哪些工作可以自己做，哪些部分可以交給我們吧！
              </p>
            </div>
            <div>
              {/* <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div> */}
              <h2 className="Blog_header">"個人接案，彈性更高，效率更高"</h2>
              <div className="flex items-start flex-col ">
                <div className="mb-6 flex flex-col items-start">
                  <b className="text-[22px]">成本效益高</b>
                  <p className="Blog_body">
                    -
                    由於沒有大型團隊和高額管理費用，個人接案者能夠提供更具競爭力的價格，讓您以較低的預算獲得專業的網站設計。
                  </p>
                </div>
                <div className="mb-6 flex flex-col items-start">
                  <b className="text-[22px]">專注度高</b>
                  <p className="Blog_body">
                    -
                    個人接案者通常同時承接的項目較少，這意味著他們能夠更加專注於您的項目，投入更多的時間和精力，確保高品質的完成。
                  </p>
                </div>
                <div className="mb-6 flex flex-col items-start">
                  <b className="text-[22px]">靈活性強</b>
                  <p className="Blog_body">
                    -
                    作為個人接案者，我們能夠迅速響應您的要求，並且在設計過程中更加靈活，隨時根據您的反饋進行調整，確保項目順利進行
                  </p>
                </div>
                <div className="mb-6 flex flex-col items-start">
                  <b className="text-[22px]">溝通便捷</b>
                  <p className="Blog_body">
                    -
                    您將直接與設計師溝通，避免了中間人傳遞信息的誤差和延誤，使得整個設計過程更加高效且準確。
                  </p>
                </div>
              </div>
              <div className=" w-full sm:w-[200px] justify-center">
                <a
                  href="/contact"
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  className="button-wrapper w-inline-block"
                >
                  <div className="button-layout">
                    <p href="/quotation" className="button-text" style={{}}>
                      立即聯絡
                    </p>
                    <div className="button-bg" style={{}} />
                  </div>
                  <div className="button-icon-block">
                    {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="button-icon"
                            style={{}}
                          /> */}
                  </div>
                </a>
              </div>
            </div>
            <div className="">
              <div className="imgText mt-[50px]">
                <h2 className="Blog_header"> 可以自己來的部分：</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul className="p-0 m-0">
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      內容撰寫：
                    </p>
                    <li className="Blog_body">
                      您最了解您的品牌和服務，編寫網站的基本介紹、產品描述、服務項目和常見問題等內容，有助於節省成本。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      基本排版：
                    </p>
                    <li className="Blog_body">
                      透過一些免費的網站建置工具，如 WordPress 或
                      Wix，您可以選擇基本的排版和佈局。這些工具提供許多現成模板，讓您能輕鬆上手設計基礎頁面。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      圖片與影片素材：
                    </p>
                    <li className="Blog_body">
                      如果您有品牌素材，建議自行準備。簡單的品牌圖片或影片展示可以在網站上直接使用，這樣能省去專業拍攝或影像處理的費用。
                    </li>
                    <a
                      id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                      href="/blog-04"
                      className="simple-link"
                    >
                      學習如何使用 Midjurney 生成圖片
                    </a>
                  </ul>
                </div>
                <br></br>

                <h2 className="Blog_header"> 建議尋求專業幫助的部分：</h2>

                <div className=" text-[16px] xl:text-[18px]  leading-[32px] xl:leading-[36px] text-[#4c4c4c]">
                  <ul className="p-0 m-0">
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      專業設計與客製化：
                    </p>
                    <li className="Blog_body">
                      我們可以為您的網站量身訂製專業設計，確保品牌形象在網站上完整呈現，並且根據您的需求調整版面和功能。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      SEO 優化：
                    </p>
                    <li className="Blog_body">
                      如果您希望網站能在搜尋引擎上有良好的排名，專業的 SEO
                      優化是必須的。Jeek能夠針對關鍵字、頁面結構和網站速度進行全面的優化，提高您的網站曝光率。
                    </li>
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      專業商業圖片拍攝與後製：
                    </p>
                    <li className="Blog_body">
                      Jeek可協助您拍攝高品質的產品或形象照，並進行專業的後製處理，以確保圖片完美呈現於網站上，提升視覺效果。這不僅讓您的產品看起來更吸引人，也能增強品牌的專業形象。
                    </li>
                    <div className="grid grid-cols-1  gap-2  md:grid-cols-3 mb-[38px]">
                      <div
                        className={`image-container ${
                          isZoomed ? "zoomed" : ""
                        }`}
                        onClick={() => setIsZoomed(!isZoomed)}
                      >
                        <Image
                          src="/images/Untitled-Camera-2.png"
                          width={200}
                          className="my-2 w-full fill object-contain mx-3"
                          alt="  商業3D建模-img01"
                          loading="lazy"
                          placeholder="empty"
                          height={200}
                        ></Image>
                      </div>
                      <Image
                        src="/images/The Smallest Wireless Potentiostat- wireless charging.webp"
                        width={200}
                        className="my-2 w-full fill object-contain mx-3"
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/The Smallest Wireless Potentiostat-Smart Hub .webp"
                        width={200}
                        className="my-2 w-full fill object-contain mx-3"
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/The Smallest Wireless Potentiostat-Box.webp"
                        width={200}
                        className="my-2 w-full fill object-contain mx-3"
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                    </div>
                    <p className="inline-block text-[18px] mt-3 bg-[#fdb715] text-black">
                      商業3D建模：
                    </p>
                    <li className="Blog_body">
                      想要展示產品的3D視覺效果嗎？我們提供商業3D建模服務，讓您的顧客能更直觀地查看產品細節。無論是用於互動展示還是產品展示頁面，3D模型都能為您的網站增添現代感，提升顧客體驗。
                    </li>
                    <div className="grid grid-cols-1  gap-2  md:grid-cols-3 mb-[38px]">
                      <Image
                        src="/images/3d產品模型08-極客網頁設計|Blender3D.png"
                        width={200}
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        className="my-2 w-full fill object-contain mx-3"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/3d產品模型09-極客網頁設計|Blender3D.webp"
                        width={200}
                        className="my-2 w-full fill object-contain mx-3"
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                      <Image
                        src="/images/3d產品模型06-極客網頁設計|Blender3D.webp"
                        width={200}
                        className="my-2 w-full fill object-contain mx-3"
                        alt="  商業3D建模-img01"
                        loading="lazy"
                        placeholder="empty"
                        height={200}
                      ></Image>
                    </div>
                    <p className="inline-block text-[18px] mt-3bg-[#fdb715] text-black">
                      進階功能開發：
                    </p>
                    <li className="Blog_body">
                      如果您的網站需要整合購物車、會員系統或是表單等進階功能，這些複雜的程式開發與整合工作可以交給我們處理，確保網站運作順暢。
                    </li>
                  </ul>
                </div>
                <br></br>

                {/* <a
                  id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                  target="_blank"
                  href="https://search.google.com/search-console/quotation"
                  className="simple-link"
                >
                  前往Google search console
                </a> */}
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
