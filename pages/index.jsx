import Marquee from "react-fast-marquee";

import EmblaCarousel02 from "../components/EmblaCarousel04/index.jsx";
import PerspectiveSection02 from "../components/PerspectiveSection02/page";
import SwiperScroll from "../components/SwiperScroll02/page";
import { useRef, useEffect } from "react";
import GsapText from "../components/RevealText/index";
import Image from "next/image.js";
import { NextSeo } from "next-seo";
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
    <div className="bg-[#fff]">
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
        <div className="flex mb-[-300px] bg-[#000000] pb-[80px] flex-col justify-center items-center">
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
        </div>

        <div className="Hero-secrion   border-1 border-black ">
          <div className="wrap flex flex-col  lg:flex-row"></div>
        </div>
        {/* 
        <SuffleHero /> */}
        <PerspectiveSection02 />

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
        </section>

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
