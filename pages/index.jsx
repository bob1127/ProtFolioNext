import Marquee from "react-fast-marquee";

import EmblaCarousel02 from "../components/EmblaCarousel04/index.jsx";
import PerspectiveSection02 from "../components/PerspectiveSection02/page";
import SwiperScroll from "../components/SwiperScroll02/page";
import { useRef, useEffect } from "react";
import GsapText from "../components/RevealText/index";
import Image from "next/image.js";
import { NextSeo } from "next-seo";
import Accordion from "../components/Accordion/page.jsx";
import TextPsrrallac from "../components/TextParallaxContent";
import Head from "next/head";
import NewsletterForm from "../components/NewsletterForm";

// import { Roboto } from "@next/font/google";

const imageLoader = ({ src, width, quality }) => {
  return `https://www.ultraehp.com/images/test-portfolio/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const imageLoader01 = ({ src, width, quality }) => {
  return `https://www.shutterstock.com/image-vector/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const imageLoader02 = ({ src, width, quality }) => {
  return `https://uploads-ssl.webflow.com/6147a6d56f14047ebc7a47bd/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const webpage = {
    name: "極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
    description:
      "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
    url: "https://www.jeek-webdesign.com.tw",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../public/Lego.json"), // 导入你的 Lottie 动画 JSON 文件
    renderer: "canvas", // 使用 Canvas 渲染器
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // 保持宽高比
    },
  };
  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  return (
    <div className="bg-[#ffffff]">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        {/* 
        <meta
          property="og:title"
          content="極客網頁設計｜JEEK WEBDESIGN｜形象官網、客製化網站、套版網站、商業攝影、seo優化 - 你的網站不想在跟別人一樣嗎？｜你的創意，我來實踐"
        />
        <meta
          property="og:description"
          content="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        /> */}
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/facebook_og_image.jpg"
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
      <div>
        <NextSeo
          title="極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
          description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
          openGraph={{
            title: "極客網頁設計｜JEEK WEBDESIGN - 你的創意，我來實踐",
            description:
              "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
            images: [
              {
                url: "https://www.jeek-webdesign.com.tw/images/facebook.png",
                width: 1200,
                height: 780,
                alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
              },
            ],
          }}
        />

        <TextPsrrallac />
        <section className="section_HeroImg ">
          <div className="white  w-full left-0 top-0 absolute z-[9999] h-[100vh] bg-white"></div>
        </section>
        {/* <PerspectiveSection02 /> */}
        <section className="section_QA  py-[10px] sm:py-[20px] flex lg:flex-row  my-[100px] flex-col ">
          <div className="flex w-[80%] lg:flex-row  flex-col mx-auto">
            <div className=" w-full lg:w-1/2">
              <Image
                src="/images/你想要自學網頁設計嗎.png"
                loading="lazy"
                width={800}
                height={800}
                alt="seo-optimization"
                placeholder="empty"
              ></Image>
            </div>
            <div className=" w-full lg:w-1/2">
              <Accordion />
            </div>
          </div>
        </section>
        <section className="section-discount flex flex-col md:flex-row h-[80vh] md:h-[70vh] xl:h-screen">
          <div className="relative  h-1/2  w-full md:w-[50%] md:h-auto">
            <div className="absolute  md:top-[10%] left-[0%] sm:left-[10%] md:left-[15%] xl::left-[-60px] z-[3]">
              <Image
                src="/images/astronaut.png"
                alt=""
                className="w-[400px] sm:w-[400px] xl:w-[1200px]"
                width={800}
                height={800}
                placeholder="empty"
                loading="lazy"
              ></Image>
            </div>
            <div className="absolute left-[0%] md:left-[10%] xl:left-0 sm:left-[10%] top-[-50px]   xl::top-[9%] z-[1]">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                id="blobSvg"
                className="w-[450px] h-[450px] xl:w-[800px] xl:h-[800px] 2xl:w-[1200px] 2xl:h-[1200px]"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(248, 121, 21)" }}
                    ></stop>
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(255, 201, 69)" }}
                    ></stop>
                  </linearGradient>
                </defs>
                <path id="blob" fill="url(#gradient)">
                  <animate
                    attributeName="d"
                    dur="4s"
                    repeatCount="indefinite"
                    values="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z"
                  ></animate>
                </path>
              </svg>
            </div>
          </div>
          <div className="w-full  static z-[999999] pl-0 md:pl-[50px] pt-[200px]  md:pt-0 md:w-[50%] flex flex-col justify-center items-center md:items-start ">
            <div className="title">
              <h2 className="italic text-[45px] md:text-[55px] xl:text-[80px] font-extrabold tracking-tighter ">
                RWD
              </h2>
              <h2 className="italic text-[32px] sm:text-[35px] xl:text-[80px] font-extrabold text-wrap xl:text-nowrap leading-[30px] xl:leading-normal tracking-tighter ">
                Website Design
              </h2>
            </div>
            <div className="txt flex flex-col items-start">
              <h3 className=" text-[20px] md:text-[3rem]">精選方案</h3>
              <p className=" text-[20px] md:text-[3rem] font-bold">優惠價格</p>
              <div className="flex  justify-center items-center">
                <a
                  href="/terms"
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  className="button-wrapper  w-inline-block mb-5 mt-4"
                >
                  <div className="button-layout">
                    <p className="button-text" style={{}}>
                      立即了解！
                    </p>
                    <div className="button-bg" style={{}} />
                  </div>
                  <div className="button-icon-block">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="button-icon"
                      style={{}}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-[20px] w-full border border-black mt-[30px]">
          <div className="max-w-[1200px] sm:w-[90%] lg:w-[70%] mx-auto">
            <h2 className="mt-10 text-center text-xl sm:text-xl md:text-xl my-5 lg:text-2xl">
              我適合哪一種網站？
            </h2>
            <div
              data-aos="fade-up"
              data-delay="400"
              className="w-full px-4 mx-auto mb-5"
            >
              <div className="relative overflow-x-auto">
                <table className="min-w-[800px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="bg-[#f3be3a]">
                      <th
                        scope="col"
                        className="px-2 text-[16px] text-black py-3 sm:px-6"
                      >
                        類型
                      </th>
                      <th
                        scope="col"
                        className="px-2 text-[16px] text-black py-3 text-center  sm:px-6"
                      >
                        一頁式網站
                      </th>
                      <th
                        scope="col"
                        className="px-2 text-[16px] text-black py-3 text-center  sm:px-6"
                      >
                        形象網站
                      </th>
                      <th
                        scope="col"
                        className="px-2 text-[16px] text-black py-3  text-center  sm:px-6"
                      >
                        購物網站
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        特性
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        單頁結構，捲動瀏覽；簡單直接
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        多頁結構，設計精美，內容豐富
                      </td>
                      <td className="text-center  px-2 py-4 text-right sm:px-6">
                        包含購物車、產品頁面、支付系統
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        主要用途
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        活動宣傳、單一產品推廣
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        公司形象展示、品牌宣傳
                      </td>
                      <td className="text-center  px-2 py-4 text-center sm:px-6">
                        線上銷售商品與服務
                      </td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        目標受眾
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        尋求快速資訊的訪客
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        欲了解品牌故事或服務的潛在客戶
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        購買商品的消費者
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        內容深度
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        精簡；重視核心資訊與行動呼籲
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        詳細；介紹品牌、案例、服務範疇等
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        多樣化；含產品資訊、規格、評論等
                      </td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        互動性
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        基本互動性，例如表單或按鈕
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        中等互動性，例如輪播圖、影片展示
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        高互動性，包括會員系統、支付流程
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        設計難度
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        簡單至中等，專注於視覺與可用性
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        中等，需兼顧品牌調性與多頁結構
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        複雜，需整合系統與流程
                      </td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        SEO表現
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        一般，關鍵字與頁面數量有限
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        良好，可透過多頁面強化特定關鍵字{" "}
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        優秀，商品頁面多且有利於長尾關鍵字優化{" "}
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        優點{" "}
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        快速上線；開發成本低 用戶體驗直觀
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        展現專業形象；內容多樣化，提升品牌信任感
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        全面服務；直接銷售，創造盈利
                      </td>
                    </tr>

                    <tr className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                      >
                        缺點{" "}
                      </th>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        適用範圍有限，資訊過多易混亂
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        建設時間較長；維護成本較高{" "}
                      </td>
                      <td className="text-center  px-2 py-4 sm:px-6">
                        開發複雜；系統安全、運營成本高{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-[40px] md:px-[40px]">
              <b className="text-[20px] ">
                *
                客製化網站：針對以上3種類型網站進行客製，打造屬於自己的風格，獨一無二的網站
              </b>
            </div>
          </div>
        </section>

        {/* <div className="flex mb-[-300px] bg-[#000000] pb-[80px] flex-col justify-center items-center">
          <h2
            className="header text-[#f6f6f6] xl:text-[100px]
    font-extrabold xl:leading-[90px] leading-normal text-center md:text-[62px] mt-[100px] text-[32px]"
          >
            <GsapText
              text="讓我們的專業幫助您"
              lineHeight="80px"
              id="text2"
              fontSize="70px"
            />
          </h2>
          <h3 className="text-[#f6f6f6]">你是否打算自學網頁設計？</h3>
          <div className="relative border bg-blck items-center flex-col  flex justify-center  w-full">
            <div className="absolute bg-[#020202] text-white font-black left-0 b w-[100vw] z-[1]">
              <Marquee>
                <div className="text-[100px] text-white">網頁設計？</div>
              </Marquee>
            </div>
            <div className="absolute   left-0 bg-white border border-black top-0 w-[100vw] z-[1]">
              <Marquee>
                <div></div>
                <div className="text-[100px] text-black bg-white">
                  <div className="w-[100px] mr-[100px]"></div> SEO優化?{" "}
                </div>
                <div></div>
              </Marquee>
            </div>
            <div className="absolute bottom-0 bg-white border border-black w-[100vw] z-[1]">
              <Marquee>
                <div className="text-[100px] text-black">網頁性能？</div>
              </Marquee>
            </div>
            <div className="relative  flex justify-center items-center  z-[9] w-full">
              {" "}
              <Image
                src="/images/你想要自學網頁設計嗎.png"
                alt="你想要自學網頁設計嗎"
                className="object-contain w-full mx-auto  lg:w-[40%] "
                loading="lazy"
                placeholder="empty"
                width={2000}
                height={600}
              ></Image>
            </div>
          </div>
        </div> */}

        <div className="Hero-secrion   border-1 border-black ">
          <div className="wrap flex flex-col  lg:flex-row"></div>
        </div>

        {/* 
        <SuffleHero /> */}

        {/* 
        <section className="section_brand  2xl:mt-[-303px]  mt-[-180px] sm:mt-[-220px] md:mt-0">
          <div className="flex  flex-col justify-center items-center">
            <h1
              className="header text-[#1e1e1e] xl:text-[100px]
    font-extrabold xl:leading-[90px] leading-normal text-center md:text-[62px] lg:mt-[250px]  sm:mt-[340px] mt-[240px] text-[32px]"
            >
              <GsapText
                text=" 讓您的品牌脫穎而出"
                lineHeight="80px"
                id="text2"
                fontSize="70px"
              />
            </h1>
            <p className="text-[16px] mb-6 w-[80%] text-center mx-auto">
              專注打造符合您品牌形象的網站，量身定制 ，細緻呈現品牌價值
            </p>
          </div>
          <SwiperScroll />
        </section>
        <div className="mt-[100px]">
          <EmblaCarousel02 />
        </div>

        <section className="section-movie hidden">
          <div className="movies">
            <Marquee>
              <div className="flex">
                <div className="w-[500px]  relative border-3 border-[#11a3f7]">
                  <div className="txt absolute translate-x-1/2 translate-y-1/2 top-[36%] left-[25%]">
                    <p className="text-[22px] text-white">
                      title: 企業形象影片
                    </p>
                  </div>
                </div>
                <div className="w-[500px]  relative border-3 border-[#11a3f7]">
                  <div className="txt absolute translate-x-1/2 translate-y-1/2 top-[36%] left-[25%]">
                    <p className="text-[22px] text-white">
                      title: 企業形象影片
                    </p>
                  </div>
                </div>
                <div className="w-[500px] group relative border-3 border-[#11a3f7]">
                  <div className="txt group-hover:top-[30%] duration-700 absolute translate-x-1/2 translate-y-1/2 top-[36%] opacity-0  group-hover:opacity-100 left-[25%]">
                    <p className="text-[22px] text-white">
                      title: 企業形象影片
                    </p>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </section> */}

        <section className="image-carousel mt-[80px]">
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            className=" md:w-2/3 leading-normal sm:w-full lg:w-1/2  text-[32px] w-[90%]  md:text-[45px] xl:text-[50px]  mx-auto"
            style={{
              marginBottom: 30,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            現在購買任一專案即贈送免費商業攝影10張(含後製)!!!
          </h2>
          <Marquee>
            <div>
              <Image
                src="/images/The Smallest Wireless Potentiostat-Box.webp"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/The Smallest Wireless Potentiostat-Soil testing.webp"
                placeholder="empty"
                width={350}
                className="mx-2"
                height={400}
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/The Smallest Wireless Potentiostat-Open Box.webp"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/The Smallest Wireless Potentiostat-FingerSize.webp"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/3dmodel01.png"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/A25M0121-DT03-V1_DTC_3078x.jpg.png"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/Untitled-Camera-2.png"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/電化學分析儀-模擬器-散熱孔.webp"
                placeholder="empty"
                width={350}
                className="mx-2"
                height={400}
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/電化學分析儀-模擬器-防滑材質.webp"
                placeholder="empty"
                width={350}
                className="mx-2"
                height={400}
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
            </div>
          </Marquee>
        </section>
        <div className="mt-[15px] md:mt-[100px]  ">
          <EmblaCarousel02 />
        </div>
        <div className="p-4 md:p-10  ">
          <div className="flex flex-col ">
            <h2 className="leading-normal text-[50px] sm:text-[70px] xl:text-[120px] mb-0 md:mb-[-35px]">
              CONTACT US。{" "}
            </h2>
            <div className="form rounded-[40px] bg-gray-100  overflow-hidden flex-col  md:flex-row  flex h-full border-2 border-black">
              <div className="left  w-full md:w-[40%] p-[10px] md:p-[40px] h-full items-center flex-col flex justify-center">
                <div className="txt pt-[100px] flex flex-col items-center justify-center">
                  <p className="text-[30px] font-bold  mt-3">
                    聯繫Jeek-極客網頁設計
                  </p>
                  <p>免費網站健檢，請在表格留下 </p>
                  <span className="text-[14px] mt-[60px] border border-black   bg-white  p-8">
                    如果您聯繫我並無即時收到回覆，請耐心等候。Jeek會盡快回覆您！！！
                  </span>
                  <div className="flex  justify-center items-center">
                    <a
                      href="/terms"
                      data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                      className="button-wrapper  w-inline-block mb-5 mt-4"
                    >
                      <div className="button-layout">
                        <p className="button-text" style={{}}>
                          合作須知
                        </p>
                        <div className="button-bg" style={{}} />
                      </div>
                      <div className="button-icon-block">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          loading="lazy"
                          alt="合作須知"
                          className="button-icon"
                          style={{}}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right w-full bg-white md:w-[60%] border  h-full overflow-scroll py-10">
                <div className="from flex justify-center items-center  overflow-y-scroll h-full bg-white p-[10px] md:p-[40px] border-black-rgba  ">
                  <NewsletterForm />
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
