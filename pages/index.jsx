import Marquee from "react-fast-marquee";

import EmblaCarousel02 from "../components/EmblaCarousel04/index.jsx";
import PerspectiveSection02 from "../components/PerspectiveSection02/page";
import SwiperScroll from "../components/SwiperScroll02/page";
import { useRef, useEffect } from "react";
import GsapText from "../components/RevealText/index";
import Image from "next/image.js";
import "swiper/css";
import { NextSeo } from "next-seo";
import { Swiper, SwiperSlide } from "swiper/react";
import Accordion from "../components/Accordion/page.jsx";
import TextPsrrallac from "../components/TextParallaxContent";
import Head from "next/head";

import DragCarousel from "../components/DragCarousel/index.jsx";
import SlickCarousel from "../components/ThreeDCarousel/page.jsx";
import NewsletterForm from "../components/NewsletterForm";
import EmblaCarouselIndex from "../components/EmblaCarouselIndex/index.jsx";
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
  const settings = {
    dots: true, // 顯示分頁點
    infinite: true, // 無限輪播
    loop: true,

    speed: 500, // 動畫速度
    slidesToShow: 3, // 顯示幾個滑塊
    slidesToScroll: 1, // 每次滾動多少個滑塊
  };
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
    <div className="bg-[#001e5a]">
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
        <section className="section_analysis sm:mt-[50vh] lg:mt-[40vh] xl:mt-0 relative flex flex-col justify-center items-end">
          <di className="space-02 absolute top-[-10%] z-[999999999] lg:left-[10%] left-[0%]">
            <Image
              src="/images/orbital-international-space-station-flat-composition-is-space-is-very-large_1284-56581.png"
              alt="space03"
              className="rotate-[30deg]"
              width={120}
              height={120}
              placeholder="empty"
              loading="lazy"
            ></Image>
          </di>
          <di className="space-02 absolute top-[-20%] z-[999999999] lg:right-[10%] right-[0%]">
            <Image
              src="/images/—Pngtree—pink planet universe star_3815558.png"
              alt="space03"
              className="rotate-[30deg]"
              width={120}
              height={120}
              placeholder="empty"
              loading="lazy"
            ></Image>
          </di>
          <div className="title mb-[70px] w-[80%] pr-[100px]">
            <h2 className="text-[32px] md:text-[40px] lg:text-[70px] text-right text-[#fdb715] ">
              幫助您業務成效分析
            </h2>
            <p className="mt-7 text-white text-[16px] md:text-[20px]   text-right ">
              網站建置好了，接下來開始分析您網站的成效，並且找出問題，<br></br>
              持續更新精進網站，提升網站排名！！
            </p>
          </div>
          <DragCarousel />
        </section>

        {/* <section className="section_HeroImg ">
          <div className="white  w-full left-0 top-0 absolute z-[9999] h-[100vh] bg-[#001e5a]"></div>
        </section> */}

        <section className="py-[200px]">
          {/* <div className="flex justify-center flex-col">
            <div className="txt w-[800px] mx-auto">
              <h2 className="text-[#fdb715] text-center">
                我們有豐富的設計經驗
              </h2>
              <p className="text-white text-center w-1/2 mx-auto">
                如果有一個這樣的設計室就好了。我相信一切都會好起來的。
                我想創造一個這樣的世界。Tommyverse 透過設計創造世界，
              </p>
              <p className="text-white mt-4 text-center w-1/2 mx-auto">
                如果有一個這樣的設計室就好了。我相信一切都會好起來的。
                我想創造一個這樣的世界。Tommyverse 透過設計創造世界，
              </p>
              <div
                href="/blogs"
                className="w-[310px]  mt-[60px] mx-auto relative  h-[310px] m-5 border border-white "
              >
                <div className="absolute w-[300px] h-[300px] group z-[1] top-0  left-0  hover:bg-[#f5bc52] duration-300 hover:translate-y-2 px-[20px] rounded-full py-[55px] bg-white">
                  <div className=" top-0 left-0 z-[1]">
                    <div className="txt">
                      <b className="text-[15px] text-[#91dcd7] text-center">
                        Blog
                      </b>
                      <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                        網頁相關知識
                      </p>
                    </div>
                    <div className="mx-auto">
                      <Image
                        width={200}
                        height={100}
                        src="/images/service_link_icon03.png"
                        loading="lazy"
                        alt="project-item"
                        placeholder="empty"
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className="absolte  ml-[2px] w-[300px] h-[300px]  bg-[#212121] top-[20%] mt-[15px] left-[10%] z-[9999] rounded-full "></div>
              </div>
            </div>
          </div> */}
        </section>
        <section className="relative title-wrap-section">
          <div className="absolte top-0  right-[20%] z-[9999999]">
            <Image
              loading="lazy"
              placeholder="empty"
              width={250}
              height={250}
              src="/images/istockphoto-940792796-612x612.png"
              alt=""
            ></Image>
          </div>

          <div className="down-section absolute top-[-30%] left-1/2 -translate-x-1/2 ">
            <div className="txt w-[800px] mx-auto">
              <h2 className="tetx-[70px]  md:text-[40px] sm:text-[50px] text-[#fdb715] text-center">
                我們有豐富的設計經驗
              </h2>
              <p className="text-white text-center w-1/2 mx-auto">
                如果有一個這樣的設計室就好了。我相信一切都會好起來的。
                我想創造一個這樣的世界。Tommyverse 透過設計創造世界，
              </p>
              <p className="text-white mt-4 text-center w-1/2 mx-auto">
                如果有一個這樣的設計室就好了。我相信一切都會好起來的。
                我想創造一個這樣的世界。Tommyverse 透過設計創造世界，
              </p>
              <div
                href="/blogs"
                className="w-[310px]   mt-[60px] mx-auto relative  h-[310px] m-5 border border-white "
              >
                <div className="relative">
                  <div className="  w-[300px] h-[300px] group z-[1] tleft-0  hover:bg-[#f5bc52] duration-300 hover:translate-y-2 px-[20px] rounded-full py-[55px] bg-white">
                    <div className=" top-0 left-0 z-[1]">
                      <div className="txt">
                        <b className="text-[15px] text-[#91dcd7] text-center">
                          Blog
                        </b>
                        <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                          網頁相關知識
                        </p>
                      </div>
                      <div className="mx-auto">
                        <Image
                          width={200}
                          height={100}
                          src="/images/service_link_icon03.png"
                          loading="lazy"
                          alt="project-item"
                          placeholder="empty"
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className="absolte  ml-[2px] w-[300px] h-[300px]  bg-[#212121] top-[-20%] mt-[15px] left-[10%] z-[9999] rounded-full "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/fantastic_hare_36410_blue_sky_in_the_upper_half_skyline_city_in_59f47677-412d-4ea8-ab3f-7e5a236ddad1.png"
              width={1920}
              height={768}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="absolte top-0  right-[-80%] z-[9999999]">
            <Image
              loading="lazy"
              placeholder="empty"
              width={250}
              height={250}
              src="/images/pngtree-a-stunning-hot-air-balloon-png-image_13063695-2.png"
              alt=""
            ></Image>
          </div>
        </section>

        <section class="relative  mt-[-68vh]   pb-[200px] w-full py-[80px]">
          <div className="z-[9999] absolute top-0 left-0">
            <Image
              src="/images/ocean-bg02.png.png"
              width={1920}
              height={768}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02 absolute top-0 left-0">
            <Image
              src="/images/service_link_icon03.png"
              width={300}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>

          <div className="img02 absolute z-[99999] bottom-[20%] left-[15%]">
            <Image
              src="/images/1938390_e5726.gif"
              width={150}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02 absolute z-[99999] bottom-[12%] right-[15%]">
            <Image
              src="/images/12.gif"
              width={110}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02 absolute z-[99999] bottom-[15%] right-[15%]">
            <Image
              src="/images/6e65f624ea8ec549680c4ee7b5816845_w200.gif"
              width={150}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>

          <div className="txt flex flex-col z-[99999] relative justify-center items-center lg:w-[70%]    top-[-50%]  w-[90%] xl:w-[40%] mx-auto">
            <h3 className="  text-[30px] text-white lg:text-[30px] xl:text-[40px]">
              您的創意，我來實現。
            </h3>
            <p>The Various Worlds Seriously And Enjoyably.</p>
            <p className="text-[16px]  lg:text-[18px] leading-[38px] font-bold mt-[40px] w-[70%] text-center">
              以設計為切入點創造世界。 以此為基礎進行活動，
              如果不設計也能幫上忙的話 什麼都想商量。 我是這麼想的。
              把湯米巴斯作為入口， 和創造各種世界的夥伴 連線起來，互相聊天，一起
              致力於製造。
            </p>
            <b className="text-[30px] mt-[50px]">服務</b>
          </div>
          <div className="absolute eft-[20%] z-[999999] top-[20%]">
            <Image
              src="/images/b3ecf4bda9fa77f2240797ce6f04183c.gif"
              placeholder="empty"
              width={200}
              height={100}
              loading="lazy"
              alt="coomputerGif"
            ></Image>
          </div>
          <div className="project-wrap  z-[99999] mx-auto border border-black  w-[80%] xl:w-[66%] relative justify-center flex-wrap items-center flex">
            <div className="w-[210px]  mt-[60px] relative  h-[220px] m-5 border border-white ">
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[20px] py-[55px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt">
                    <b className="text-[15px] text-[#91dcd7] text-center">
                      專案總數量
                    </b>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      品牌推廣整體製作
                    </p>
                  </div>

                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/service_link_icon03.png"
                      loading="lazy"
                      alt="project-item"
                      placeholder="empty"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[213px] h-[260px] left-[10%] z-[9999] rounded-[30px] "></div>
            </div>
            <a
              href="/service"
              className="w-[210px]  mt-[60px] relative  h-[220px] m-5 border border-white "
            >
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[20px] py-[55px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt">
                    <b className="text-[15px] text-[#91dcd7] text-center">
                      Servie
                    </b>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      我們專業的服務項目
                    </p>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/service_link_icon03.png"
                      loading="lazy"
                      alt="project-item"
                      placeholder="empty"
                    ></Image>
                  </div>
                  {/* <div className="border px-[10px] text-center mt-3 text-white py-3 bg-[#333] rounded-[30px] button">
                    more Info
                  </div> */}
                </div>
              </div>
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[213px] h-[260px] left-[10%] z-[9999] rounded-[30px] "></div>
            </a>
            <a
              href="/blogs"
              className="w-[210px]  mt-[60px] relative  h-[220px] m-5 border border-white "
            >
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[20px] py-[55px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt">
                    <b className="text-[15px] text-[#91dcd7] text-center">
                      Blog
                    </b>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      網頁相關知識
                    </p>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/service_link_icon03.png"
                      loading="lazy"
                      alt="project-item"
                      placeholder="empty"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[213px] h-[260px] left-[10%] z-[9999] rounded-[30px] "></div>
            </a>
            <a
              href="/contact"
              className="w-[210px]  mt-[60px] relative  h-[220px] m-5 border border-white "
            >
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[20px] py-[55px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt">
                    <b className="text-[15px] text-[#91dcd7] text-center">
                      Contact
                    </b>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      快速聯絡我們
                    </p>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/service_link_icon03.png"
                      loading="lazy"
                      alt="project-item"
                      placeholder="empty"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[213px] h-[260px] left-[10%] z-[9999] rounded-[30px] "></div>
            </a>
          </div>
        </section>

        <section className="section_parallaxScroll py-10  bg-[#ebcf98] h-auto flex flex-col justify-center items-center lg:flex-row">
          <div
            className="left relative h-[600px] ml-[-10vw] w-full lg:w-[80%] duration-500 hover:w-[100%] rounded-[40px] border-[20px] md:border-[30px]  py-0 bg-[#1b9b12] border-10             border-[#5cdd3c]"
            style={{ boxShadow: "0 4px 8px 0 rgba(111, 78, 55, 5)" }}
          >
            <div>
              <div className="txt z-[999999999] top-[20%] w-[70%] lg:w-[40%] absolute lg:top-[22%]  left-[20%]  lg:left-1/2 ">
                <h3 className="text-white text-[30px] font-black">
                  您的創意，我來實現
                </h3>
                <p className="text-white mt-5 text-[20px]">
                  {" "}
                  極客網頁工作室，致力於設計優質的網站。
                </p>
                <p className="text-white mt-5 text-[20px]">
                  {" "}
                  用工作室的價格，幫您建立專業級的網站。
                </p>
                <p className="text-white mt-5 text-[14px]">
                  不管你是本身沒有網站卻又想增加公司業務，又或者對現有網站不滿意想要改版網站，都歡迎聯繫我們、
                </p>
              </div>
            </div>

            <div className="img01 top-0  lg:left-[10%] left-[-10%] absolute">
              <Image
                src="/images/0d857afdc1e66a48db18c4ba5fb1e0b3-2-2.png"
                width={220}
                height={1000}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>
            <div className="img01 bottom-0  lg:left-[70%] left-[-10%] absolute">
              <Image
                src="/images/dfk3vrs-63ff1093-ddfa-41d2-9de2-8dff7deb3834.gif"
                loading="lazy"
                width={200}
                height={100}
                placeholder="empty"
                alt="gif-img"
              ></Image>
              <div className="txt items-center flex flex-col justify-center">
                <b className="text-[14px] text-white">網頁結構優化</b>
                <p className="text-[12px]  mt-3  px-2 py-1 rounded-[30px] bg-[#f5be35] text-gray-900 font-bold">
                  seo優化
                </p>
              </div>
            </div>
            {/* <div className="img01 top-0  lg:left-[10%] left-[-10%] absolute">
              <Image
                src="/images/0d857afdc1e66a48db18c4ba5fb1e0b3-2-2.png"
                width={220}
                height={1000}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div> */}
            {/* <div className="img01  bottom-0 lg:left-[40%] left-[40%] absolute">
              <Image
                src="/images/giphy.gif"
                width={160}
                height={200}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div> */}
            <div className="img01  bottom-0 lg:left-[40%] left-[40%] absolute">
              <Image
                src="/images/dbego2w-b564d0f5-7663-4467-84a3-3b49690d9586.gif"
                width={160}
                height={200}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>

            <div className="img01 bottom-[0px] absolute">
              <Image
                src="/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_00ajmdtaghsne8dq3zuw.gif"
                width={190}
                height={190}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>
          </div>
          <div
            className="left h-[600px] duration-500 mr-[-10vw] ml-[80px] mt-[40px] lg:mt-0 w-full lg:w-[50%] rounded-[40px] hover:w-[100%] border-[20px]  md:border-[30px]  py-0 bg-[#1b9b12] relative border-10             border-[#5cdd3c]"
            style={{ boxShadow: "-10px 7px 0 0 rgba(111, 78, 55)" }}
          >
            <div className="img01 bottom-[140px] absolute">
              <Image
                src="/images/service_link_icon03.png"
                width={190}
                height={190}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>
            <div className="img01 bottom-0 absolute">
              <Image
                src="/images/—Pngtree—pixel scene background grass_6021560.png"
                width={1000}
                height={100}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>
            <div className="img01 right-[40%] bottom-[20%] absolute">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <div className="chatbox">
                    <p data-aos="zoom-in" className="text-white  font-bold">
                      網頁設計-
                      <br />
                      <span className="font-black text-black"> Web Design</span>
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/iofjgoidfjgo.gif"
                  width={240}
                  height={100}
                  loading="lazy"
                  placeholder="empty"
                  alt="pexiel-img"
                ></Image>
              </div>
            </div>
            <div className="img01 left-[10%] top-[10%] absolute">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <div className="chatbox">
                    <p data-aos="zoom-in" className="text-white  font-bold">
                      seo優化-
                      <br />
                      <span className="font-black text-black"> Web Design</span>
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/giphy.gif"
                  width={120}
                  height={100}
                  loading="lazy"
                  placeholder="empty"
                  alt="pexiel-img"
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section className="section_parallaxScroll py-10  bg-[#ebcf98] h-auto flex flex-col justify-center items-center lg:flex-row">
          <div className="left h-[400px] w-[1900px]  mt-[40px] lg:mt-0   py-0 bg-[#1b9b12] relative border-b-[30px] border-t-[30px]    mx-auto  rounded-none       border-[#5cdd3c]">
            <div className="img01 w-[30%] left-[10%] bottom-[0px] relative lg:absolute">
              <Image
                src="/images/fgfdg.png"
                width={350}
                height={800}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>
            <div className="w-full md:w-[70%] pl-[100px] pb-[30px]  md:-translate-y-1/2 relative top-1/2  lg:absolute right-0">
              <Swiper
                spaceBetween={50}
                slidesPerView={3} // 預設在大螢幕顯示3個
                dots={true}
                loop={true} // 啟用無限輪播
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                  // 設置箭頭
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },

                  480: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <a href="#">
                    <div
                      style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
                      className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
                    >
                      <Image
                        width={300}
                        height={100}
                        loading="lazy"
                        className="w-[150px] md:w-[350px] lg:w-[400px] rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/scremingFrog-debug.png"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white">title</h3>
                      <p className="text-white">Lorem, ipsum dolor.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div
                      style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
                      className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
                    >
                      <Image
                        width={300}
                        height={100}
                        loading="lazy"
                        className="w-[150px] md:w-[350px] lg:w-[400px] rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷_網站建置.webp"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white">title</h3>
                      <p className="text-white">Lorem, ipsum dolor.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div
                      style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
                      className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
                    >
                      <Image
                        width={300}
                        height={100}
                        loading="lazy"
                        className="w-[150px] md:w-[350px] lg:w-[400px] rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/新網站SEO規劃-極客網頁設計.webp"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white">title</h3>
                      <p className="text-white">Lorem, ipsum dolor.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div
                      style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
                      className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
                    >
                      <Image
                        width={300}
                        height={100}
                        loading="lazy"
                        className="w-[150px] md:w-[350px] lg:w-[400px] rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/ec_240723_h-min-768x512.png"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white">title</h3>
                      <p className="text-white">Lorem, ipsum dolor.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div
                      style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,.9)" }}
                      className="rounded-[30px]  overflow-hidden mb-6 flex flex-row  bg-white shadow"
                    >
                      <Image
                        width={300}
                        height={100}
                        loading="lazy"
                        className="w-[150px] md:w-[350px] rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/無頭網站_高性能seo有善-極客網頁設計.png"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white">title</h3>
                      <p className="text-white">Lorem, ipsum dolor.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <div className="swiper-button-next">Next</div>
                <div className="swiper-button-prev">Prev</div>
              </Swiper>
            </div>
          </div>
        </section>
        {/* <section className="bg-white  shadow-2xl h-[100vh]"></section>
        <section className="bg-gradient-to-t from-yellow-400 to-sky-400 h-[500px]"></section> */}

        {/* <PerspectiveSection02 /> */}
        <section className="section_QA  relative py-[10px] sm:py-[20px] flex lg:flex-row  my-[100px] flex-col ">
          <div className="flex w-[90%] lg:flex-row  flex-col mx-auto">
            <div className=" pr-10 w-full lg:w-1/2">
              <Image
                src="/images/你想要自學網頁設計嗎.webp"
                loading="lazy"
                width={800}
                height={800}
                alt="seo-optimization"
                placeholder="empty"
              ></Image>
            </div>

            <div className=" w-full  lg:w-1/2">
              <Accordion />
            </div>
          </div>
        </section>

        <section className="mb-[20px] bg-white w-full mt-[30px]">
          <div className="max-w-[1200px] sm:w-[90%] lg:w-[70%] mx-auto">
            <h2 className="mt-10 text-white px-[20px] text-center text-xl sm:text-xl md:text-xl my-5 lg:text-2xl">
              我適合哪一種網站？
            </h2>
            <div
              data-aos="fade-up"
              data-delay="400"
              className="w-full px-4 mx-auto mb-5"
            >
              <div className="relative overflow-x-auto">
                <table className="min-w-[800px] w-full text-sm text-left rounded-[20px] rtl:text-right  p-[30px] overflow-hidden text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-md">
                    <tr className="bg-[#f3be3a]">
                      <th
                        scope="col"
                        className="px-[20px] text-[16px] text-black py-3 sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
                        className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
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
              <b className="md:text-[20px] mb-[90px] sm:mb-0 text-[16px] text-gray-900">
                *
                客製化網站：針對以上3種類型網站進行客製，打造屬於自己的風格，獨一無二的網站
              </b>
            </div>
          </div>
        </section>
        <section className="section-discount bg-white flex flex-col md:flex-row h-[80vh] md:h-[70vh] xl:h-screen">
          <div className="relative  h-1/2  w-full md:w-[50%] md:h-auto">
            <div className="absolute  md:top-[10%] left-[0%] sm:left-[10%] md:left-[15%] xl::left-[-60px] z-[3]">
              <Image
                src="/images/astronaut.webp"
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
              <h2 className="italic text-[45px] md:text-[55px] xl:text-[80px] font-extrabold text-[#fdb715] tracking-tighter ">
                RWD
              </h2>
              <h2 className="italic text-[32px] sm:text-[35px] xl:text-[80px] font-extrabold text-wrap xl:text-nowrap leading-[30px] xl:leading-normal text-black tracking-tighter ">
                Website Design
              </h2>
            </div>
            <div className="txt flex flex-col items-start">
              <h3 className=" text-[20px] md:text-[3rem] text-black">
                精選方案
              </h3>
              <p className=" text-[20px] text-black md:text-[3rem] font-bold">
                優惠價格
              </p>
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
            className=" text-[#ffffff] md:w-2/3 leading-normal sm:w-full lg:w-1/2  text-[32px] w-[90%]  md:text-[45px] xl:text-[50px]  mx-auto"
            style={{
              marginBottom: 30,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            現在購買任一專案即贈送 免費商業攝影10張(含後製)!!!
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
                src="/images/3dmodel01.webp"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/A25M0121-DT03-V1_DTC_3078x.jpg.webp"
                placeholder="empty"
                width={350}
                height={400}
                className="mx-2"
                loading="lazy"
                alt="portfolio-image-display"
              ></Image>
              <Image
                src="/images/Untitled-Camera-2.webp"
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
            <h2 className="leading-normal text-[#fdb715] text-[50px] sm:text-[70px] xl:text-[120px] mb-0 md:mb-[-35px]">
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
