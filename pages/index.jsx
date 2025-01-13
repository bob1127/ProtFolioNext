import Marquee from "react-fast-marquee";

import EmblaCarousel02 from "../components/EmblaCarousel04/index.jsx";
// import PerspectiveSection02 from "../components/PerspectiveSection02/page";
// import SwiperScroll from "../components/SwiperScroll02/page";
import IndexProjectSlider from "../components/IndexProjectSlider/page.jsx";
import { useRef, useEffect } from "react";
import GsapText from "../components/RevealText/index";
import Image from "next/image.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import IndexSwiper from "../components/IndexSwiper/page.jsx";
import { NextSeo } from "next-seo";

import Accordion from "../components/Accordion/page.jsx";
import TextPsrrallac from "../components/TextParallaxContent";
import Head from "next/head";
import DigitalBtn from "../components/digitalBtn/page.jsx";
// import DragCarousel from "../components/DragCarousel/index.jsx";
// import SlickCarousel from "../components/ThreeDCarousel/page.jsx";
import NewsletterForm from "../components/NewsletterForm";

// import { Roboto } from "@next/font/google";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const webpage = {
    name: "極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐",
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
              alternateName: "JEEK WEBDESIGN - 網頁設計專家", // 別名
              description: webpage.description,
              url: webpage.url,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "首頁",
                    item: "https://www.jeek-webdesign.com.tw",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "服務內容",
                    item: "https://www.jeek-webdesign.com.tw/service",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "精選案例",
                    item: "https://www.jeek-webdesign.com.tw/project",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.jeek-webdesign.com.tw/blogs",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "專案報價",
                    item: "https://www.jeek-webdesign.com.tw/quotation",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "使用技術",
                    item: "https://www.jeek-webdesign.com.tw/technology",
                  },
                ],
              },
              publisher: {
                "@type": "Organization",
                name: webpage.name,
                logo: {
                  "@type": "ImageObject",
                  url: webpage.logo,
                },
                sameAs: [
                  "https://www.facebook.com/profile.php?id=61568671321317",
                  "https://line.me/ti/p/@690cbklx",
                  "https://www.instagram.com/jeek_webdesign/",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: webpage.contact.phone,
                  contactType: "Customer Service",
                  email: webpage.contact.email,
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${webpage.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              mainEntity: {
                "@type": "Service",
                name: "網頁設計",
                description: "提供客製化網頁設計、形象網站建置及SEO優化服務。",
                provider: {
                  "@type": "Organization",
                  name: "JEEK WEBDESIGN",
                },
              },
              mainEntityOfPage: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "網頁設計需要多久完成？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "網頁設計的完成時間取決於專案的複雜度，通常需要 2-6 週的時間來完成設計和開發。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "做好一個網站要花費多少？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "網站設計費用依需求而異，簡單展示型網站較便宜，功能豐富的網站（如電子商務）則較貴。設計、功能需求和維護等因素會影響價格，通常從幾千元到數萬不等。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "要怎麼提升我的網站曝光度？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "提升網站曝光度可通過優化SEO、提高網站速度、定期更新內容、使用社交媒體宣傳以及增加反向鏈接來達成。持續關注分析數據並調整策略，有助於提高搜尋引擎排名，吸引更多潛在客戶。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "網站建設好之後需要什麼成本？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "網域費用：一年約1000、主機費用：一年約3-5000、維護費用：市面上維護費用一年約20000~50000不等、極客推出一年 12,000維護服務。",
                    },
                  },
                ],
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

        <section className="relative mt-[95vmin]  sm:mt-[0vmin] sm:pt-[50vmin] md:mt-[60vmin] xl:mt-[70vmin] 2xl:mt-[-20vmin]   title-wrap-section">
          <div className="txt absolute left-1/2 -translate-x-1/2   top-[0%]  sm:top-[40%]  md:top-[55%] xl:top-[55%] translate-y-0  sm:-translate-y-1/2  flex flex-col justify-center items-center">
            <a
              href="/project"
              className="circle-btn group mb-0 sm:mb-8 sm:w-[290px] sm:h-[290px] w-[130px] h-[130px]  lg:w-[300px]  lg:h-[300px] relative"
            >
              <div className="chat-box"></div>
              <div className="yellow-circle group-hover:bg-[#ffbb33] z-[2] group-hover:mt-2 duration-300 delay-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2   bg-[#f6f6f6] sm:w-[290px] sm:h-[290px] w-[130px] h-[130px]  lg:w-[300px]  lg:h-[300px] rounded-full">
                <div className="flex h-full justify-center items-center flex-col">
                  <b className="font-custom text-[14px] lg:text-[30px] text-center font-black text-[#4dbdce] duration-0 delay-0 group-hover:text-white">
                    精選網頁範例
                  </b>
                  <p className="font-bold text-[12px] sm:text-[16px] group-hover:text-white">
                    最優惠的方案價格
                  </p>
                </div>
              </div>
              <div className="black-mask rounded-full bg-[#232323]   absolute left-1/2 -translate-x-1/2 z-[1] top-1/2 -translate-y-1/2 mt-2 md:mt-5 sm:w-[290px] sm:h-[290px] w-[130px] h-[130px]  lg:w-[300px]  lg:h-[300px] "></div>
            </a>
            <h2
              data-aos="fade-up"
              className="text-center  heading-title text-white"
            >
              從零到一，打造屬於你的網頁
            </h2>
            <p
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-white tracking-wider text-center  leading-relaxed w-[90%] md:w-[70%] text-[16px] font-normal block sm:hidden md:text-[20px] md:font-bold"
            >
              創意與細節融合,成為行業的領航者。
            </p>
            <p className=" text-white tracking-wider text-center  leading-relaxed w-[90%] md:w-[70%] text-[16px] font-normal hidden sm:block md:text-[20px] ">
              我們將每一個創意與細節融合, 為您的品牌設計出令人驚豔的線上形象,
              無論是商業展示還是互動體驗,讓您的網站成為行業的領航者。
            </p>
          </div>
          <div className="absolute right-[-20%] top-[65%] lg:top-[25%]  md:right-[0%] 2xl:right-[0%] z-[9999999] floating-image">
            <Image
              loading="lazy"
              className="lg:w-[330px] lg:h-[330px] 2xl:w-[600px] 2xl:h-[600px]"
              placeholder="empty"
              width={250}
              height={250}
              src="/images/cloud-02.png"
              alt="cloud02"
            />
          </div>
          <div className="absolute right-[-20%] top-[65%] lg:top-[20%]  md:right-[0%] 2xl:right-[0%] z-[9999999] floating-image">
            <Image
              loading="lazy"
              className="lg:w-[330px] lg:h-[330px] 2xl:w-[600px] 2xl:h-[600px]"
              placeholder="empty"
              width={250}
              height={250}
              src="/images/Parachute02.webp"
              alt=""
            />
          </div>
          <style jsx>{`
            .floating-image {
              animation: floatUpDown 5s ease-in-out infinite;
            }

            @keyframes floatUpDown {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-30px); /* 上浮 */
              }
              100% {
                transform: translateY(0); /* 恢復到原來位置 */
              }
            }
          `}</style>{" "}
          <div className="hidden lg:block">
            <Image
              src="/images/fantastic_hare_36410_blue_sky_in_the_upper_half_skyline_city_in_59f47677-412d-4ea8-ab3f-7e5a236ddad1.png"
              width={2500}
              height={1000}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="block lg:hidden">
            <Image
              src="/images/打造您的專屬網站.png"
              width={1920}
              height={768}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="z-[9999]  absolute top-[25%] left-[-20%] md:left-[0%]">
            <Image
              src="/images/HotAirBalloon.png"
              width={220}
              className="lg:w-[320px] lg:h-[320px] 2xl:w-[500px] 2xl:h-[500px]"
              height={220}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>{" "}
          <div className="z-[9999] absolute top-[12%] left-[-5%] md:left-[0%] lg:left-[10%] 2xl:left-[20%]">
            <Image
              src="/images/fantastic_hare_36410_Fast_flying_white_plane_hand_drawn_style_c_1e2316e0-d9a9-451f-bf05-a429dbf362b4.png"
              width={130}
              className="sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[400px]"
              height={130}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
        </section>

        <section class="relative   mt-[-100vmin]   sm:mt-[-55vmin] xl:pb-[200px] 2xl:pb-[350px]   sm:bg-[url('/images/ocean-bg02.png.png')]  bg-[url('/images/ocean-bg03.png')] bg-no-repeat sm:bg-cover bg-contain xl:bg-top bg-center  md:mt-[-45vmin] lg:mt-[-26vmin]  xl:mt-[-40vmin]  w-full py-[80px]">
          {/* <div className="z-[9999]  top-0 left-0">
            <Image
              src="/images/ocean-bg02.png.png"
              width={1920}
              height={1200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div> */}

          <div className="img02 absolute hidden sm:block z-[99999] bottom-[12%] left-[10%]">
            <Image
              src="/images/wave.gif"
              width={110}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02  absolute z-[99999] bottom-[42%] left-[14%]">
            <Image
              src="/images/wave.gif"
              width={110}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02 hidden sm:block absolute z-[99999] bottom-[5%] left-[55%]">
            <Image
              src="/images/wave.gif"
              width={110}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02 hidden sm:block absolute z-[99999] bottom-[50%] sm:bottom-[12%]  right-[5%] sm:right-[15%]">
            <Image
              src="/images/12.gif"
              width={110}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>
          <div className="img02 absolute z-[99999] bottom-[45%] sm:bottom-[15%] right-[5%] sm:right-[15%]">
            <Image
              src="/images/6e65f624ea8ec549680c4ee7b5816845_w200.gif"
              width={150}
              height={200}
              alt="img03"
              placeholder="empty"
              loading="lazy"
            ></Image>
          </div>

          <div className="txt ocean-title  flex flex-col z-[99999] relative justify-center items-center lg:w-[70%] mt-[310px] sm:mt-[600px] md:mt-[250px] 2xl:mt-[500px]  w-[90%] xl:w-[40%] mx-auto">
            <h3 data-aos="fade-up" className=" heading-title text-[#fdb715]">
              您的創意，我來實現。
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[16px] text-white lg:text-[18px] leading-[38px]   w-[70%] text-center"
            >
              我們將根據您的需求設計專屬網站，從設計到開發，再到用戶體驗，將每一個想法轉化為具體的成果，讓您的品牌脫穎而出。
            </p>
            <b className="text-[30px] text-white mt-[50px]">服務</b>
          </div>
          <div className="absolute hidden sm:block left-[0%] z-[999999] top-[20%]">
            <Image
              src="/images/b3ecf4bda9fa77f2240797ce6f04183c.gif"
              placeholder="empty"
              width={200}
              height={100}
              loading="lazy"
              alt="coomputerGif"
            ></Image>
          </div>
          <div className="project-wrap-sm flex  md:hidden">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              speed={1000}
              breakpoints={{
                1900: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="relative"
            >
              <SwiperSlide>
                <a
                  href="/service"
                  className="w-full  mx-auto relative inline-flex justify-center items-center  m-5  "
                >
                  <div className="absolute group z-[999] top-0 hover:bg-[#001e5a] left-1/2 -translate-x-1/2 rounded-[30px] duration-300 hover:translate-y-2 w-[310px] pt-[25px]  bg-white">
                    <div className=" top-0 left-0 z-[1]">
                      <div className="txt mb-7">
                        <p className="text-[15px] font-bold text-[#91dcd7] text-center">
                          Servie
                        </p>
                        <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                          我們專業的服務項目
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <Image
                          width={260}
                          height={260}
                          src="/images/我們提供哪些服務項目.png"
                          className="mx-auto"
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
                  <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[260px] h-[305px] left-[10%] z-[1] rounded-[30px] "></div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="/blogs"
                  className="w-full  mx-auto relative inline-flex justify-center items-center  m-5  "
                >
                  <div className="absolute group z-[999] top-0 hover:bg-[#001e5a] left-1/2 -translate-x-1/2 rounded-[30px] duration-300 hover:translate-y-2 w-[310px] pt-[25px]  bg-white">
                    <div className=" top-0 left-0 z-[1]">
                      <div className="txt mb-7">
                        <p className="text-[15px] font-bold text-[#91dcd7] text-center">
                          Blogs
                        </p>
                        <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                          你所想知道的網頁知識
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <Image
                          width={260}
                          height={260}
                          src="/images/blog.png"
                          className="mx-auto"
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
                  <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[260px] h-[305px] left-[10%] z-[1] rounded-[30px] "></div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="/3dProdct"
                  className="w-full  mx-auto relative inline-flex justify-center items-center  m-5  "
                >
                  <div className="absolute group z-[999] top-0 hover:bg-[#001e5a] left-1/2 -translate-x-1/2 rounded-[30px] duration-300 hover:translate-y-2 w-[310px] pt-[25px]  bg-white">
                    <div className=" top-0 left-0 z-[1]">
                      <div className="txt mb-7">
                        <p className="text-[15px] font-bold text-[#91dcd7] text-center">
                          Servie
                        </p>
                        <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                          3d產品建模｜產品影片
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <Image
                          width={260}
                          height={260}
                          src="/images/3d產品.png"
                          className="mx-auto"
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
                  <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[260px] h-[305px] left-[10%] z-[1] rounded-[30px] "></div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="project-wrap  hidden  z-[99999] mx-auto  w-[80%] xl:w-[80%]    justify-center flex-wrap items-center md:flex pb-5 md:pb-[100px]">
            <a
              href="/service"
              className="w-[210px]  mt-[60px] relative  h-[280px] m-5  "
            >
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[25px] pt-[25px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt mb-7">
                    <p className="text-[15px] font-bold text-[#91dcd7] text-center">
                      Servie
                    </p>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      我們專業的服務項目
                    </p>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/我們提供哪些服務項目.png"
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
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[210px] h-[265px] left-[10%] z-[9999] rounded-[30px] "></div>
            </a>
            <a
              href="/blogs"
              className="w-[210px]  mt-[60px] relative  h-[280px] m-5  "
            >
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[25px] pt-[25px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt mb-7">
                    <p className="text-[15px] font-bold text-[#91dcd7] text-center">
                      Blog
                    </p>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      你所想知道的網頁知識
                    </p>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/blog.png"
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
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[210px] h-[265px] left-[10%] z-[9999] rounded-[30px] "></div>
            </a>
            <a
              href="/3dProduct"
              className="w-[210px]  mt-[60px] relative  h-[280px] m-5  "
            >
              <div className="absolute group z-[1] top-0 hover:bg-[#001e5a] left-0 rounded-[30px] duration-300 hover:translate-y-2 px-[25px] pt-[25px] bg-white">
                <div className=" top-0 left-0 z-[1]">
                  <div className="txt mb-7">
                    <p className="text-[15px] font-bold text-[#91dcd7] text-center">
                      3D Product
                    </p>
                    <p className="text-[18px] duration-200 group-hover:text-[#91dcd7] font-bold text-center">
                      3d產品建模｜產品影片
                    </p>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={100}
                      src="/images/3d產品.png"
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
              <div className="absolte bg-[#52a8bb] top-[20%] mt-[25px] w-[210px] h-[265px] left-[10%] z-[9999] rounded-[30px] "></div>
            </a>
          </div>
        </section>

        <section className=" section_pexiel py-10   bg-[#ebcf98] relative h-auto flex flex-col justify-center items-center lg:flex-row">
          <div className="bg-[#ebcf98] top-[-30px] left-[-10%] z-[999999] h-[80px] w-[120vw] absolute rotate-[180deg] shadow-xl shadow-[#ebcf98]"></div>

          <div
            className="left relative h-[600px]  mt-4 2xl:h-[70vh] ml-[-10vw] w-full  my-6 lg:w-[80%] duration-500 hover:w-[100%] rounded-[40px] border-[20px] overflow-hidden md:border-[30px]  py-0 bg-[#1b9b12] border-10             border-[#5cdd3c]"
            style={{ boxShadow: "10px 10px 0 0 rgba(111, 78, 55)" }}
          >
            <div>
              <div className="txt z-[999999999] top-[20%] w-[70%] lg:w-[40%] bg-white rounded-[30px] absolute lg:top-[10%]  left-[20%] flex p-10 flex-col justify-center items-center lg:left-1/2 ">
                <h3 className="text-[#ffba42] text-center  font-extrabold 2xl:text-[24px] font-custom text-[20px] xl:text-[20px]">
                  {" "}
                  用工作室的價格，幫您建立專業級的網站。
                </h3>
                <p className="text-black text-center mt-1 text-[14px]">
                  不管你是本身沒有網站卻又想增加公司業務，又或者對現有網站不滿意想要改版網站，都歡迎聯繫我們、
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="absolute z-[9999999] left-1/2 top-[80%] "
            >
              <DigitalBtn />
            </a>

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
            <div className="img01 top-[5%] z-[99999999] lg:left-[70%] left-[-10%] absolute">
              <Image
                src="/images/dfk3vrs-63ff1093-ddfa-41d2-9de2-8dff7deb3834.gif"
                loading="lazy"
                width={150}
                height={100}
                className="2xl:w-[150px]"
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

            <div className="img01 xl:bottom-[-20%] bottom-0 left-0 z-[99999] absolute">
              <Image
                src="/images/pexels-street.png"
                width={2200}
                height={400}
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
            className="left h-[600px] 2xl:h-[70vh] duration-500 mr-[-10vw] ml-[80px] my-6 lg:mt-0 w-full lg:w-[50%] rounded-[40px] hover:w-[100%] border-[20px]  md:border-[30px]  py-0 bg-[#1b9b12] relative border-10             border-[#5cdd3c]"
            style={{ boxShadow: "-10px 7px 0 0 rgba(111, 78, 55)" }}
          >
            <div className="img01 hidden sm:block top-[30%] left-[5%] absolute">
              <div className="relative">
                <div>
                  <Image
                    src="/images/b3ecf4bda9fa77f2240797ce6f04183c.gif"
                    width={190}
                    height={190}
                    loading="lazy"
                    placeholder="empty"
                    alt="pexiel-img"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="img01 bottom-0 z-[1] sm:z-[9999999]  absolute">
              <Image
                src="/images/—Pngtree—pixel scene background grass_6021560.png"
                width={1800}
                height={100}
                loading="lazy"
                placeholder="empty"
                alt="pexiel-img"
              ></Image>
            </div>
            <div className="img01 right-[65%] sm:right-[40%] xl:bottom-[25%] z-[99999] bottom-[70%] sm:bottom-[20%] absolute">
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
                  src="/images/網頁設計.gif"
                  width={240}
                  height={100}
                  loading="lazy"
                  placeholder="empty"
                  className="2xl:w-[320px] "
                  alt="pexiel-img"
                ></Image>
              </div>
            </div>
            <div className="top-marquee-text">
              <Marquee>
                <div className="flex">
                  <Image
                    src="/images/train.png"
                    alt=""
                    placeholder="empty"
                    loading="lazy"
                    width={400}
                    height={200}
                  ></Image>
                </div>
              </Marquee>
            </div>
            <div className="img01 right-[20%] bottom-[40%] absolute z-[99]">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <div className="chatbox">
                    <p data-aos="zoom-in" className="text-white  font-bold">
                      Html,Cssm,Js
                      <br />
                      <span className="font-black text-black">專業的服務</span>
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/DodPAa.gif"
                  width={120}
                  className="2xl:w-[260px]"
                  height={90}
                  loading="lazy"
                  placeholder="empty"
                  alt="pexiel-img"
                ></Image>
              </div>
            </div>
            <div className="img01 left-[0%] bottom-[25%] absolute z-[99]">
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
                  src="/images/pixel-art-12824_512.gif"
                  width={170}
                  className="2xl:w-[320px]"
                  height={170}
                  loading="lazy"
                  placeholder="empty"
                  alt="pexiel-img"
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section className="section_pexiel_slider py-10  bg-[#ebcf98] h-auto flex justify-center items-center ">
          <div className="left h-auto sm:h-[400px] md:h-[600px] 2xl:h-[800px] w-[100vw]  mt-[40px] lg:mt-0   py-0 bg-[#1b9b12] sm:pt-[80px]  flex  sm:flex-row flex-col  relative border-b-[30px] border-t-[30px]    mx-auto  rounded-none       border-[#5cdd3c]">
            <div className=" pl-0 sm:pl-10  relative  w-full sm:w-[30%]">
              <Image
                src="/images/pexels-building.webp"
                alt="pexels-building"
                className=" relative z-[999999999] mt-[-20vh] sm:mt-0 sm:absolute bottom-0"
                placeholder="empty"
                loading="lazy"
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="w-full mt-[50px] sm:mt-0 sm:w-[70%] xl:pr-[50px] 2xl:pr-[200px]  px-8 md:px-4  pb-[30px]   relative md:top-[16%]  sm:absolute right-0">
              {/* <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  1900: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 1,
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
                        width={500}
                        height={500}
                        loading="lazy"
                        className="w-full  sm:h-auto  sm:w-[500px]  rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/portfolio023.png"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white font-custom text-[16px] 2xl:text ">
                        網頁設計
                      </h3>
                      <p className="text-white 2xl:text-[18px] text-[14px] font-custom">
                        網頁Banner｜網頁商品圖片｜圖片後製
                      </p>
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
                        width={400}
                        height={300}
                        loading="lazy"
                        className="w-full      rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/ultrae-company-logo.png"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white font-custom text-[16px] 2xl:text ">
                        3D 產品建模｜後製
                      </h3>
                      <p className="text-white 2xl:text-[18px] text-[14px] font-custom">
                        3D產品建模，應用網頁圖片
                      </p>
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
                        width={400}
                        height={450}
                        loading="lazy"
                        className="w-full      rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/hotjar熱點圖01.jpg"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white font-custom text-[16px] 2xl:text ">
                        網頁行銷｜數據分析
                      </h3>
                      <p className="text-white 2xl:text-[18px] text-[14px] font-custom">
                        Google Search console | GA4 | GTM
                      </p>
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
                        width={500}
                        height={500}
                        loading="lazy"
                        className="w-full  sm:h-auto  sm:w-[500px]  rounded-lg"
                        placeholder="empty"
                        alt="swiper-img"
                        src="/images/scremingFrog-01.jpg"
                      ></Image>
                    </div>
                    <div className="txt">
                      <h3 className="text-white font-custom text-[16px] 2xl:text ">
                        網頁後續維護
                      </h3>
                      <p className="text-white 2xl:text-[18px] text-[14px]">
                        Bug修復｜增加功能｜產品後續上架
                      </p>
                    </div>
                  </a>
                </SwiperSlide>

                <div className="swiper-button-next">Next</div>
                <div className="swiper-button-prev">Prev</div>
              </Swiper> */}
              <IndexSwiper />
            </div>
          </div>
        </section>
        {/* <section className="bg-white  shadow-2xl h-[100vh]"></section>
        <section className="bg-gradient-to-t from-yellow-400 to-sky-400 h-[500px]"></section> */}

        {/* <PerspectiveSection02 /> */}
        <section className="Hero-img">
          <a href="service">
            <div className="banner-wrap">
              <Image
                src="/images/banner02.png"
                placeholder="empty"
                alt="hero-img"
                loading="lazy"
                className="hidden xl:block"
                width={1920}
                height={768}
              ></Image>
              <Image
                src="/images/banner02-laptop.png"
                placeholder="empty"
                alt="hero-img"
                loading="lazy"
                className="hidden xl:hidden  sm:block"
                width={1920}
                height={768}
              ></Image>
              <Image
                src="/images/banner02-mobile.png"
                placeholder="empty"
                alt="hero-img"
                loading="lazy"
                className="block  sm:hidden"
                width={1920}
                height={768}
              ></Image>
            </div>
          </a>
        </section>
        <section
          className="project_price_item_wrap py-[20vh]"
          style={{
            position: "relative", // 確保伪元素相對於section定位
            background: "linear-gradient(to top, #ffc300 0%, #69bed7 100%)",
          }}
        >
          <section className="section_QA   relative py-[10px] sm:py-[20px] flex lg:flex-row  my-[100px] flex-col ">
            <div className="flex w-[90%] lg:flex-row  flex-col mx-auto">
              <div className="relative   h-[450px] w-full md:w-[50%] ">
                <div className="absolute z-[99999] right-[10%] top-[60%]">
                  <h3>
                    {" "}
                    <span className=" text-[36px] font-custom xl:text-[50px] text-[#f0f0f0]  font-black ">
                      RWD
                    </span>
                    <span className=" text-[36px] font-custom xl:text-[50px] text-[#13163e]  font-black ">
                      {" "}
                      網頁設計
                    </span>
                  </h3>
                  <h3>
                    {" "}
                    <span className=" text-[36px] font-custom xl:text-[50px] text-[#13163e]    font-black ">
                      客製化
                    </span>
                    <span className=" text-[36px] font-custom xl:text-[50px] text-[#f0f0f0]  font-black ">
                      {" "}
                      網頁
                    </span>
                  </h3>
                </div>
                <div className="absolute  md:top-[10%]  z-[3]">
                  <Image
                    src="/images/astronaut.webp"
                    alt=""
                    className="w-[400px] sm:w-[400px] md:w-[500px]  2xl:w-[700px]"
                    width={800}
                    height={800}
                    placeholder="empty"
                    loading="lazy"
                  ></Image>
                </div>
                <div className="absolute  top-[-50px]   xl::top-[9%] left-[0%] 2xl:left-[-20%] z-[1]">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    id="blobSvg"
                    className="w-[450px] h-[450px] xl:w-[650px] xl:h-[650px] 2xl:w-[800px] 2xl:h-[800px]"
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

              <div className=" w-full  lg:w-1/2">
                <Accordion />
              </div>
            </div>
          </section>
          <section className="mb-[20px] relative w-full mt-[30px]">
            <div
              className="absolute hidden md:block top-[15%] left-[2%] z-[999]"
              style={{
                animation: "shake 0.5s ease-in-out infinite",
              }}
            >
              <Image
                src="/images/joystick-game-pixel-art-free-vector.png"
                placeholder="empty"
                width={150}
                height={150}
                loading="lazy"
                alt="pexels-img"
              />
            </div>
            <div className="absolute  hidden md:block top-[-10%] 2xl:right-[5%] right-[-5%] z-[999]">
              <Image
                src="/images/cloud-02.png"
                placeholder="empty"
                width={400}
                height={400}
                loading="lazy"
                alt="pexels-img"
              />
            </div>

            <div className="max-w-[1200px] sm:w-[90%] lg:w-[70%] mx-auto">
              <div className="flex mb-[30px] mt-[50px] flex-col justify-center items-center">
                <GsapText
                  className="font-custom heading-title"
                  text="  我適合哪一種網站?"
                  id="text13"
                />
                <p className="text-center mx-auto  w-[90%] font-bold md:w-[70%] text-[#202020]  text-[18px]">
                  選擇適合您的網站，為您量身定制網站。
                </p>
              </div>

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
                          只有一頁，滾動就能看完，簡單明瞭
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          多頁面，設計精美，內容豐富
                        </td>
                        <td className="text-center  px-2 py-4 text-right sm:px-6">
                          包含購物車、產品頁和支付系統
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
                          宣傳活動或推廣單一產品
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          展示公司形象或品牌
                        </td>
                        <td className=" px-2 py-4 text-center sm:px-6">
                          銷售商品和服務
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
                          想快速了解資訊的訪客
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          想了解品牌故事或服務的潛在客戶
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          想買東西的消費者
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
                          內容簡單，重點突出
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          詳細介紹品牌、服務等
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          包含產品資訊、價格、評論等
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
                          基本互動，比如按鈕或聯絡表單
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          中等互動，有圖片輪播、影片展示等
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          高度互動，像是會員系統和支付過程
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
                          簡單到中等，注重視覺和易用性
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          中等，需要設計多頁面和品牌風格
                        </td>

                        <td className="text-center  px-2 py-4 sm:px-6">
                          複雜，需要整合購物和支付系統
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
                          一般，關鍵字少，頁面不多
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          很好，可以加強特定的關鍵字
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          非常好，有利於搜索引擎優化
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                        >
                          優點
                        </th>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          快速建設，開發成本低，操作簡單
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          展現專業形象，提升品牌信任感
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          提供完整服務，直接銷售賺錢
                        </td>
                      </tr>

                      <tr className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sm:px-6"
                        >
                          缺點
                        </th>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          只適合簡單用途，內容太多會讓人混淆
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          建設時間長，維護成本高
                        </td>
                        <td className="text-center  px-2 py-4 sm:px-6">
                          開發麻煩，系統和運營成本高
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

          <section className="  section-hidden section-discount flex flex-col md:flex-row h-[80vh] md:h-[70vh] xl:h-screen">
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
          <div
            className="mt-[-10px]"
            style={{
              position: "absolute",
              top: 0,
              left: 0,

              right: 0,
              height: "20vh", // 控制過渡區域的高度
              background:
                "linear-gradient(to top, rgba(105, 190, 205, 0) 0%, rgba(105, 190, 205, 1) 100%)",
              filter: "blur(5px)", // 使用模糊過渡
            }}
          ></div>
          <div className="title mt-[100px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <GsapText
                className="heaing-title"
                text="秉持小而美，專業精湛"
                id="text12"
              />
              <p
                data-aos="fade-up"
                className="  text-center mx-auto  w-[90%] font-bold md:w-[70%] text-[#202020]  text-[18px]"
              >
                工作室的模式，節省了人力開發和溝通成本。<br></br>
                而我們把這些回饋給客戶，讓客戶可以用
                工作室的價格做出專業的網站。
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="item-wrap bg-[url('/images/fantastic_hare_36414_Fast_flying_white_plane_hand_drawn_style_c_8a7e30b3-38c8-44b6-bf95-361aff7ff42c.png')] bg-contain md:bg-cover bg-no-repeat bg-center w-full md:w-[100%] mx-auto flex flex-wrap"
          >
            <div className="price-item  sm:flex  hidden   w-full 2x:w-[80%] mx-auto pb-[50vh] flex-wrap justify-center  mt-4  relative">
              <div className="white-item py-[30px] group overflow-hidden  flex flex-col  items-center w-[90%] border-4 border-[#dcdcde]  sm:w-[350px] xl:w-[430px]   bg-[#eaeaee] rounded-[30px] mx-4 mt-4">
                <div className="txt  flex flex-col justify-center items-center">
                  <p className="text-black font-bold text-[26px]">精選方案</p>
                  <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                    Basic
                  </b>
                  <div>
                    <p className="font-black mb-5 text-[40px]">NT30,000</p>
                  </div>
                  <ul>
                    <li className="text-[16px] font-bold mt-2">串接GA4、GTM</li>
                    <li className="text-[16px] font-bold mt-2">
                      商業授權圖庫 x 10 (另有商業攝影服務可提供)
                    </li>
                    <li className="text-[16px] font-bold mt-2">客製化設計</li>
                    <li className="text-[16px] font-bold mt-2">seo優化</li>
                  </ul>
                </div>

                <b className="text-center mt-5">形象網站｜客製化網站</b>
              </div>
              <div className="white-item py-[30px] group overflow-hidden  w-[90%]  border-4 border-[#dcdcde] sm:w-[350px] xl:w-[430px]  flex flex-col  items-center  bg-[#eaeaee] rounded-[30px] mx-4 mt-4">
                <div className="txt flex flex-col justify-center items-center">
                  <p className="text-black font-bold text-[26px]">一頁式網站</p>
                  <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                    Landing page{" "}
                  </b>
                  <div>
                    <p className="font-black mb-5 text-[40px]">NT10,000</p>
                  </div>
                  <ul>
                    <li className="text-[16px] font-bold mt-2">
                      一頁式網頁設計
                    </li>
                    <li className="text-[16px] font-bold mt-2">
                      商業授權圖庫 x 10 (另有商業攝影服務可提供)
                    </li>
                    <li className="text-[16px] font-bold mt-2">客製化設計</li>
                    <li className="text-[16px] font-bold mt-2">基本seo優化</li>
                  </ul>
                </div>

                <b className="text-center mt-5">
                  活動頁面｜新產品頁面｜主打商品頁面
                </b>
              </div>
              <div className="white-item py-[30px] group overflow-hidden  w-[90%]  border-4 border-[#dcdcde] sm:w-[350px] xl:w-[430px]  flex flex-col  items-center  bg-[#eaeaee] rounded-[30px] mx-4 mt-4">
                <div className="txt flex flex-col justify-center items-center">
                  <p className="text-black font-bold text-[26px]">購物網站</p>
                  <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                    E-Coomerce
                  </b>
                  <div>
                    <p className="font-black mb-5 text-[40px]">NT50,000</p>
                  </div>
                  <ul>
                    <li className="text-[16px] font-bold mt-2">
                      客製化網站規劃與設計
                    </li>
                    <li className="text-[16px] font-bold mt-2">
                      簡單易用使用者後台
                    </li>
                    <li className="text-[16px] font-bold mt-2">
                      包含基本商品去背上架
                    </li>
                    <li className="text-[16px] font-bold mt-2">
                      簡單上下架產品
                    </li>
                    <li className="text-[16px] font-bold mt-2">
                      商品圖｜Banner 製作
                    </li>
                  </ul>
                </div>

                <b className="text-center mt-5">
                  wordpress購物網站｜客製化購物網站
                </b>
              </div>
              <div className="white-item py-[30px] group overflow-hidden  flex flex-col  items-center border-4 border-[#dcdcde] w-[90%]  sm:w-[350px] xl:w-[430px]   bg-[#eaeaee] rounded-[30px] mx-4 mt-4">
                <div className="txt flex flex-col justify-center items-center">
                  <p className="text-black font-bold text-[26px]">客製化方案</p>
                  <b className=" text-[#fac83e] text-[14px] font-bold mb-4">
                    Customized
                  </b>
                  <div>
                    <p className="font-black mb-5 text-[40px]">跟我談談</p>
                  </div>
                  <ul>
                    <li className="text-[16px] font-bold mt-2">
                      網頁客製化設計版面｜圖文
                    </li>
                    <li className="text-[16px] font-bold mt-2">seo優化</li>
                    <li className="text-[16px] font-bold mt-2">
                      商品攝影｜形象影片
                    </li>

                    <li className="text-[16px] font-bold mt-2">
                      提供後續完整維護及流量追蹤
                    </li>
                  </ul>
                </div>

                <b className="text-center mt-5">特殊網頁設計版面｜無頭網頁</b>
              </div>
            </div>
          </div>

          <div className="project-item-mobile block sm:hidden">
            <IndexProjectSlider />
          </div>
          <section className="image-carousel mt-[80px]">
            <div className="flex mb-[30px] mt-[50px] flex-col justify-center items-center">
              <GsapText className="" text="限時優惠中！" id="text13" />
              <p className="text-center mx-auto  w-[90%] font-bold font-custom md:w-[70%] text-[#202020]  text-[28px]">
                現在購買任一專案即贈送 免費商業攝影10張(含後製)
              </p>
            </div>

            <Marquee>
              <div data-aos="fade-up" data-aos-delay="400">
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
                  src="/images/Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png"
                  placeholder="empty"
                  width={350}
                  className="mx-2"
                  height={400}
                  loading="lazy"
                  alt="portfolio-image-display"
                ></Image>
                <Image
                  src="/images/3d產品模型06-極客網頁設計|Blender3D.png"
                  placeholder="empty"
                  width={350}
                  height={400}
                  className="mx-2"
                  loading="lazy"
                  alt="portfolio-image-display"
                ></Image>
                <Image
                  src="/images/3d產品模型02-極客網頁設計|Blender3D.png"
                  placeholder="empty"
                  width={350}
                  height={400}
                  className="mx-2"
                  loading="lazy"
                  alt="portfolio-image-display"
                ></Image>
                <Image
                  src="/images/3d產品模型05-極客網頁設計|Blender3D.png.png"
                  placeholder="empty"
                  width={350}
                  height={400}
                  className="mx-2"
                  loading="lazy"
                  alt="portfolio-image-display"
                ></Image>
                <Image
                  src="/images/3d產品模型10-極客網頁設計|Blender3D.png"
                  placeholder="empty"
                  width={350}
                  height={400}
                  className="mx-2"
                  loading="lazy"
                  alt="portfolio-image-display"
                ></Image>
              </div>
            </Marquee>
          </section>
          <div className="flex flex-col">
            <div className="contact-title flex-col items-center flex justify-center">
              <h3 className="text-white mt-[50px] sm:mt-[150px] font-custom text-[50px] font-black ">
                立即聯繫
              </h3>
            </div>
            <div className="flex md:flex-row  pl-2 sm:pl-[30px] pt-[30px]  w-[90%] sm:w-[75%] mx-auto flex-col">
              <div className="left pr-2 w-full sm:w-[80%] md:w-1/2">
                <div className="flex flex-col">
                  <b className="ml-2 text-[#001e5a]">
                    直接電話聯繫我們，或者直接加入我們的官方line！
                  </b>
                  <div className="flex  flex-col sm:flex-row mt-4">
                    <div className="bg-white rounded-[30px] px-2 py-2 text-[20px] font-bold   w-full sm:w-[100px] text-center inline-flex items-center justify-center">
                      Tel
                    </div>
                    <div className="flex w-full flex-col ">
                      <p className="  mt-4 ml-4 text-[34px] font-bold ">
                        0965-346142
                      </p>
                      <b className="mt-2 ml-4">
                        電話接聽時間：<br></br>平日：任何時段/ 假日：任何時段
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right pl-2 w-full sm:w-[80%] md:w-1/2">
                <div className="relative mt-6">
                  <div className="px-[20px] inline-flex rounded-[40px]  bg-white hover:translate-y-1 duration-300 absolute z-[99] py-5 px- group   justify-center   sm:h-auto h-[105px] items-center  w-[90%] mx-auto sm:w-[330px] ">
                    <a
                      href="https://line.me/ti/p/@690cbklx"
                      className="ml-4 text-[22px] font-black"
                    >
                      加入官方line@
                    </a>
                    <div className="group-hover:text-[#232c52] btn-arrow rounded-full flex justify-center items-center delay-75 w-[30px] h-[30px] p-1 duration-500 ml-5 group-hover:bg-[#fdb82f] text-[#fdb82f]">
                      →
                    </div>
                  </div>
                  <div className="shadow absolute z-[9] rounded-[40px] bg-[#232c52]  w-[91%] sm:w-[333px] top-[12px] left-[0px]  h-[100px] sm:h-[70px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[165px] md:mt-[100px]  " data-aos="fade-up">
            <div className="contact-title flex-col items-center flex justify-center">
              <h3 className="text-white text-[50px] font-black font-custom">
                Blogs
              </h3>
              <b className="text-[18px] font-custom text-white mt-3">
                網頁相關知識
              </b>
            </div>
            <EmblaCarousel02 />
          </div>
          <div className="p-4  relative md:p-10   ">
            <div>
              <Image
                className="top-[-20%] left-0"
                src="/images/cloud-02.png"
                width={500}
                placeholder="empty"
                height={400}
                alt="cloud"
              ></Image>
            </div>
            <div className="flex flex-col " data-aos="fade-up">
              <h2 className="leading-normal text-[#2a2a2a] text-[50px] sm:text-[70px] xl:text-[120px] mb-0 md:mb-[-35px]">
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
      </div>
    </div>
  );
}

// reportWebVitals();
