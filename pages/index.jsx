import Marquee from "react-fast-marquee";
import styles from "../styles/Home.module.css";
import EmblaCarousel from "../components/EmblaCarousel/index.jsx";
import EmblaCarousel01 from "../components/EmblaCarousel01/index.jsx";
import Text3d from "../components/PerspectiveText/index.jsx";
import { useRef, useEffect } from "react";
import Digital from "../components/ShiftingCountdown.jsx";
import dynamic from "next/dynamic";
import GsapText from "../components/RevealText/index";
import VelocityText from "../components/VelocityText/page.jsx";
import Image from "next/image.js";
import TextHover from "../components/TextHover/index.jsx";
import Trackeye from "../components/Trackeye/page.jsx";
import { NextSeo } from "next-seo";
import Head from "next/head";
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

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
  const webpage = {
    name: "極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
    description:
      "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
    url: "https://www.jeek-webdesign.com.tw",
    logo: "https://www.jeek-webdesign.com.tw/images/JeekLogo_web_title.png",
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
    <div className="">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />

        <meta
          property="og:title"
          content="極客網頁設計｜JEEK WEBDESIGN｜形象官網、客製化網站、套版網站、商業攝影、seo優化 - 你的網站不想在跟別人一樣嗎？｜你的創意，我來實踐"
        />
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
                url: "https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png",
                width: 800,
                height: 600,
                alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
              },
            ],
          }}
        />
        <div className="Hero-secrion   border-1 border-black ">
          <div className="wrap flex flex-col  lg:flex-row">
            <div className="hero-left overflow-hidden mt-[38px] border border-blac relative w-full lg:w-[65%]">
              <TextHover />
              <Trackeye />
              <div className="bottom"></div>
              <div className="absolute bg-black w-full bottom-0">
                <Marquee>
                  <div>
                    <p className="text-white w-[140px] p-2">網頁設計 🖊️</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">網頁行銷 💾</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">社群行銷 💡</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">Banner設計 📔</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">網頁結構優化 🖥️</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">商業攝影 📸</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">Seo 優化 🎡</p>
                  </div>
                </Marquee>
              </div>
            </div>

            <a
              href="/Contact"
              className="hero-middle border duration-500 border-blac  ease-in-out lg:hover:w-[50%]  overflow-hidden delay-150 w-full lg:w-[20%]  flex h-[450px] xl:h-auto justify-center relative flex-col group items-center pt-[50px] border-1 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/images/網頁設計製作_網頁seo-極客網頁設計.webp)",
              }}
            >
              <div className="hidden group-hover:block duration-500 group-hover:opacity-100 delay-150 opacity-0 ease-in-out  ">
                <Marquee>
                  <div className="text-white text-[18px]">
                    網頁設計，SEO優化，產品銷售，Banner/DM 設計
                  </div>
                </Marquee>
              </div>
            </a>
            <a
              href="/Contact"
              className="hero-right duration-500 border-blac  ease-in-out lg:hover:w-[35%] group overflow-hidden delay-150  border-1 border-black border pt-[50px] flex flex-col justify-center bg-cover bg-no-repeat h-[450px] xl:h-auto bg-center items-center  w-full lg:w-[15%]"
              style={{
                backgroundImage:
                  "url(/images/商業攝影_產品_banner-極客網頁設計.webp)",
              }}
            >
              <div className="hidden group-hover:block duration-500 group-hover:opacity-100 delay-150 opacity-0 ease-in-out  ">
                <Marquee>
                  <div className="text-white text-[18px]">
                    商品攝影，產品建模，網站形象影片
                  </div>
                </Marquee>
                {/* <a href=" px-4 py-1 bg-[#333] txet-white border  border-black ">
                  聯繫我
                </a> */}
              </div>
            </a>
          </div>
        </div>

        <section className="section_second border border-black flex flex-col lg:flex-row">
          <div className="left pl-[50px] py-[22px] w-full lg:w-1/2 border-r-2 border-black">
            <div>
              <div
                onMouseMove={(e) => {
                  manageMouseMove(e);
                }}
                className={styles.container}
              >
                <div ref={plane} className={styles.body}>
                  <a href="/about-2">
                    <Text3d primary={"3D 視覺網站"} secondary={"3D 視覺網站"} />
                  </a>
                  <a href="/Blogs">
                    <Text3d primary={"客製化網站"} secondary={"客製化網站"} />
                  </a>
                  <a href="Blog-03">
                    <Text3d primary={"商業攝影"} secondary={"商業攝影"} />
                  </a>
                  <a href="/about">
                    <Text3d primary={"SEO行銷"} secondary={"SEO行銷"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right   h-full flex flex-col  w-full lg:w-1/2">
            <div className="top h-1/2  lg:border-t-0 border-t-2 flex-col w-full border-b-2 border-black">
              <figure>
                <Image
                  src="/images/heroimg.webp"
                  width={800}
                  alt="hero-img"
                  height={500}
                  placeholder="empty"
                  priority
                ></Image>
              </figure>
            </div>
            <div className="bottom  flex py-[50px] px-[15px] md:px-0 lg:p-[40px] items-center   h-1/2 justify-start flex-col w-full ">
              <h2 className=" text-center">"創意無限，讓您的品牌脫穎而出。"</h2>
              <p className=" text-[16px] xl:text-[18px] leading-[26px] text-center">
                專注打造符合您品牌形象的網站，量身定制 ，細緻呈現品牌價值
              </p>

              <div className="img-wrap">
                <div className="img"></div>
                <div className="img w-1/2 h-full border-1 border-black">
                  {/* <Image
                    loader={imageLoader}
                    className="border-2 border-black"
                    src="/668e6aca4fb399ee1389df93_stada-img-3-p-1600.png "
                    alt=""
                    loading="lazy"
                    width={800}
                    height={600}
                  /> */}
                  {/* <div className="txt">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita perspiciatis in accusamus odit consequuntur et,
                      molestias totam tenetur dolorem! Facilis suscipit
                      laudantium aliquid sint magni consectetur in, ratione
                      optio possimus!
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-[100px] flex flex-col justify-center items-center">
          <DragCarousel />
        </section> */}

        {/* <SlickCarousel /> */}
        {/* <SmoothParallaxScroll /> */}
        <section className="section_matter">
          <div className="top"></div>
          <div className="bottom">{/* <PhysicsAnimation /> */}</div>
        </section>
        {/* <CatoonCursor /> */}
        <footer>
          <h2 className="text-white">lorem</h2>
        </footer>
        {/* <section className="border-2 relative border-black h-80vh">
          <PhysicsAnimationApp />
        </section> */}

        {/* <Slider/> */}
        {/* <CarouselImg/> */}
      </div>
    </div>
  );
}

// reportWebVitals();
