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
    <div className="" data-aos="fade-up">
      <Head>
        <meta
          property="og:title"
          content="極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 高CP網站｜你的創意，我來實踐"
        />
        <meta
          property="og:description"
          content="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        />
        <meta
          property="og:image"
          content="https://prot-folio-next.vercel.app/"
        />
        <meta property="og:url" content="https://prot-folio-next.vercel.app/" />
        <meta property="og:type" content="website" />
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
                url: "https://www.ultraehp.com/images/index/carousel-img/1920x768/蜂鳥探針主視覺圖-無字1920X768.webp?w=3840?p=undefined",
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
              {/* <div className="top px-[50px] py-[90px]">
            <h1 className='text-[80px]'>DREAM WEB
CREACTIVEs</h1>
            <div className="link-wrap mt-3">
              <a   className='text-[20px]' href=""> 網頁設計 |</a>
              <a   className='text-[20px]' href=""> 形象影片 |</a>
               <a  className='text-[20px]'  href=""> 網頁設計 |</a>
              <a   className='text-[20px]' href=""> 形象影片</a>
            </div>

            
          </div> */}
              <TextHover />
              <Trackeye />
              <div className="bottom"></div>
              <div className="absolute bg-black w-full bottom-0">
                <Marquee>
                  <div>
                    <p className="text-white w-[140px] p-2">SEO ⏰</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">Website</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">marketing🎡</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">SinglePage🎡</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">GA4⏰</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">Search Egine💡</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">Photography📸</p>
                  </div>
                  <div>
                    <p className="text-white w-[140px] p-2">Seo🎡</p>
                  </div>
                </Marquee>
              </div>
            </div>

            <a
              href="/Contact"
              className="hero-middle border duration-500 border-blac  ease-in-out lg:hover:w-[50%]  overflow-hidden delay-150 w-full lg:w-[20%]  flex h-[450px] xl:h-auto justify-center relative flex-col group items-center pt-[50px] border-1 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/man-1839500_1920.webp)",
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
              style={{ backgroundImage: "url(/images/photographer.webp)" }}
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
              <Image
                src="/images/heroimg.webp"
                width={800}
                height={500}
                placeholder="empty"
                priority
              ></Image>
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
        <VelocityText />
        <section className="RWD  border-t-2 border-b-2 border-l-2 border-black">
          <div className="w-full flex-col items-center justify-center lg:flex-row flex">
            <div className="w-full lg:w-1/2 border-r-2 border-black p-[25px] sm:p-[60px] lg:p-[70px] overflow-y-scroll">
              <div className="txt">
                <h2 className="">
                  "網頁結構和移動設備優化 <br></br>對於SEO重要性"
                </h2>
                <h3>
                  打造快速響應的網頁結構，提升移動設備體驗，讓您的網站在搜尋引擎中脫穎而出。
                </h3>
                <p>
                  隨著Google對移動端優化要求提升，優化您的網站以迎合移動設備，確保在搜尋結果中保持領先地位
                </p>
              </div>
              <div className="img my-5">
                <Image
                  src="realistic-set-monitor-laptop-tablet-260nw-2430661189.jpg"
                  loader={imageLoader01}
                  loading="lazy"
                  width={500}
                  height={300}
                />
              </div>
              <div className=" overflow-x-scroll py-5 w-full  ">
                <div className="w-[1000px] 2xl:w-full grid grid-cols-4 2xl:grid-cols-2  gap-2">
                  <a
                    href="/Blog-04"
                    className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                  >
                    <b className="text-[20px] font-extrabold">
                      1. 提升用戶體驗
                    </b>
                    <p className="mt-2">
                      RWD提升瀏覽流暢性，減少跳出率，優化SEO排名。
                    </p>
                  </a>
                  <a
                    href="/Blog-04"
                    className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                  >
                    <b className="text-[20px] font-extrabold">
                      2. 確保網站速度
                    </b>
                    <p className="mt-2">
                      響應式設計提高加載速度，改善用戶滿意度和SEO排名。
                    </p>
                  </a>
                  <a
                    href="/Blog-04"
                    className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                  >
                    <b className="text-[20px] font-extrabold">3. 集中管理SEO</b>
                    <p className="mt-2">
                      單一URL結構簡化SEO，集中權重，提升搜尋排名。
                    </p>
                  </a>
                  <a
                    href="/Blog-04"
                    className="mt-5 hover:rotate-[5deg]  hover:scale-95 hover:border-2 duration-300  hover:border-r-4 hover:border-b-4 hover:border-blue-500 border border-black  rounded-xl p-5"
                  >
                    <b className="text-[20px] font-extrabold">
                      4. 迎合Google算法
                    </b>
                    <p className="mt-2">
                      Google偏愛行動友好的RWD網站，有助於提高搜尋排名。
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/截圖-2024-09-24-上午9.26.06.png"
                loading="lazy"
                placeholder="empty"
                width={800}
                height={500}
              />
            </div>
          </div>
        </section>
        {/* <SmoothParallaxScroll /> */}
        <section className="section_second bg-[#0184d5] border border-black flex flex-col lg:flex-row">
          <div className="left p-[60px] xl:p-[100px] w-full lg:w-1/2 border-r-2 border-black">
            <div>
              <div>
                <h2
                  data-aos="fade-up"
                  className="text-[40px] lg:text-[80px] flex justify-center  text-[#f5f5f5] leading-[85px] w-full  pt-0 lg:pt-[100px] items-center"
                ></h2>{" "}
                <GsapText
                  text="  用視覺創意點亮你的網站"
                  lineHeight="80px"
                  className="text-white"
                  id="text2"
                  fontSize="70px"
                />{" "}
              </div>

              <div>
                <Lottie options={defaultOptions} height={220} width={220} />
              </div>
              <h3
                data-aos="fade-up"
                className="font-light leading-normal text-[22px] lg:text-[36px] text-white"
              >
                {" "}
                提升網站的專業感，讓品牌形象更加鮮明
              </h3>
              {/* <p className="mt-5 text-[#ebebeb]">
                製作吸引眼球的品牌故事影片，生動展現公司文化，搭配動態文字和音效，讓品牌形象更加鮮明。建立色彩豐富的產品攝影庫，展示產品細節和使用場景，提升網站的專業感。創作活力四射的社群短視頻，展示產品使用和成功故事，增加品牌曝光，激發用戶參與。
              </p> */}
              <div
                data-w-id="60710c24-c4e8-9d65-10d7-1ada286361b6"
                className="footre-page-links"
                style={{
                  transform:
                    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
              >
                <a href="/" className="simple-link-blue">
                  形象影片
                </a>
                <a href="/about" className="simple-link-blue">
                  產品攝影{" "}
                </a>
                <a href="/journal" className="simple-link-blue">
                  社群短視頻
                </a>
              </div>
            </div>
          </div>
          <div className="right   h-full flex flex-col  w-full lg:w-1/2">
            <div className="top  flex  justify-center items-center h-1/2  lg:border-t-0 border-t-2 flex-col w-full border-b-2 border-black">
              <h2 className="text-[22px] text-light"></h2>
              {/* <Link
                href='/Video'
                className='text-white bg-green-500 border-2 rounded-[30px]'
              >
                {' '}
                Go to about us
              </Link> */}
              {/* <h2 className="text-white">網頁主體視覺</h2>
              <p className="  text-white   text-cenrer lg:text-left text-center w-full text-[16px] xl:text-[18px] leading-[26px] xl:w-2/3 ">
                創造一個引人入勝的網頁主體視覺，通過精心設計的 Banner、震撼的
                Hero Image
                和高質量的產品攝影來強化品牌形象並吸引訪客。這種多層次的視覺策略將幫助您在用戶進入網站的第一時間就感受到品牌的獨特魅力。
              </p> */}
              <Image
                src="/images/black-company-logo.png"
                width={900}
                height={500}
              ></Image>
            </div>

            <div className="bottom  bg-white flex px-[20px] md:px-0 py-[50px]  items-center   h-1/2 justify-start flex-col w-full ">
              {/* <VelocityText /> */}
              <h2 className="  text-light">3D 產品視覺</h2>
              <p className="mt-[20px]  text-cenrer lg:text-left text-center w-full text-[16px] xl:text-[18px] leading-[26px] xl:w-2/3">
                利用 3D
                技術，創建產品的動態展示效果。讓產品在網站上旋轉、縮放，並可在互動中查看不同角度和細節。這種動態效果能夠幫助客戶更好地理解產品特點和功能，提高轉化率。
              </p>
              <div className="pt-5 w-full">
                <EmblaCarousel01 />
              </div>
            </div>
            <div className="wrap h-auto hidden flex">
              <div className="img overflow-hidden  w-full border-2 border-black relative ">
                {/* <div className="img-cover hidden absolute z-2 top-0 left-0 w-full  h-full bg-green-500">
                  <p className="text-white flex justify-center items-center text-[16px]">
                    title
                  </p>
                </div> */}
                <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                  <a
                    href="/about"
                    className="text-white  text-[22px] text-center"
                  >
                    3d-model
                  </a>
                </div>
                <Image
                  src="/668e6aca4fb399ee1389df93_stada-img-3-p-1600.png"
                  className="  duration-500 hover:scale-105 z-1 top-0 left-0"
                  loaging="lazy"
                  width={800}
                  height={400}
                  loader={imageLoader}
                />
              </div>
              <div className="img"></div>
            </div>
          </div>
        </section>
        <section className="section-embla my-[60px] md:my-0">
          <EmblaCarousel />
        </section>
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
                  {/* <video
                    poster="/images/Untiteeled-Camera.png"
                    preload="metadata"
                    className="w-full"
                    controls
                  >
                    <source
                      poster="/images/Untiteeled-Camera.png"
                      autoplay
                      loop
                      src="/video/20230215 EIWP數據操作-1080.mp4"
                      type="video/mp4"
                    />
                  </video> */}
                </div>
                <div className="w-[500px]  relative border-3 border-[#11a3f7]">
                  <div className="txt absolute translate-x-1/2 translate-y-1/2 top-[36%] left-[25%]">
                    <p className="text-[22px] text-white">
                      title: 企業形象影片
                    </p>
                  </div>
                  {/* <video
                    poster="/images/788.png"
                    preload="metadata"
                    className="w-full"
                    controls
                  >
                    <source
                      poster="/images/788.png"
                      autoplay
                      loop
                      src="/video/20230215 EIWP數據操作-1080.mp4"
                      type="video/mp4"
                    />
                  </video> */}
                </div>
                <div className="w-[500px] group relative border-3 border-[#11a3f7]">
                  <div className="txt group-hover:top-[30%] duration-700 absolute translate-x-1/2 translate-y-1/2 top-[36%] opacity-0  group-hover:opacity-100 left-[25%]">
                    <p className="text-[22px] text-white">
                      title: 企業形象影片
                    </p>
                  </div>
                  {/* <video
                    poster="/images/行動電源03.png"
                    preload="metadata"
                    className="w-full"
                    controls
                  >
                    <source
                      poster="/images/行動電源03.png"
                      autoplay
                      loop
                      src="/video/20230215 EIWP數據操作-1080.mp4"
                      type="video/mp4"
                    />
                  </video> */}
                </div>
              </div>
            </Marquee>
          </div>
        </section>

        <section className="">
          <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3">
            <div className="border-2 overflow-hidden border-black w-full relative">
              <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                <a
                  href="/about"
                  className="text-[#ffffff]   text-[22px] text-center"
                >
                  產品攝影
                </a>
              </div>
              <Image
                className="hover:scale-105 duration-500"
                width={800}
                src="/images/plan04.webp"
                loading="lazy"
                height={500}
              />
            </div>
            <div className="border-2 overflow-hidden border-black w-full relative">
              <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                <p className="text-white  text-[22px] text-center">網頁設計</p>
              </div>
              <Image
                className="hover:scale-105 duration-500"
                width={800}
                src="/images/plan02.webp"
                loading="lazy"
                height={500}
              />{" "}
            </div>
            <div className="border-2 overflow-hidden border-black relative w-full ">
              <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                <p className="text-white  text-[22px] text-center">
                  3D建模應用
                </p>
              </div>
              <Image
                className="hover:scale-105 duration-500"
                width={800}
                src="/images/plan01.webp"
                loading="lazy"
                height={500}
              />
            </div>

            <div className="border-2 flex flex-col justify-center items-center py-[50px] px-[20px] xl:p-5  xl:hidden">
              <h4 className=" text-[24px] xl:text-[30px] font-bold">
                網頁設計
              </h4>
              <p className="  text-cenrer lg:text-left text-center text-[16px] w-full xl:text-[18px] leading-[26px] xl:w-2/3 ">
                {" "}
                您的品牌在數位世界中大放異彩！我們專業的網頁設計團隊為您打造獨特且具吸引力的網站，提升用戶體驗，促進業務增長。立即聯絡我們，開啟您的數位成功之旅！
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100  py-[70px] px-[20px]">
          <div className="flex flex-col  px-[20px] md:px-[50px] xl:px-[100px]">
            <div className="flex justify-center items-center flex-col">
              <h3 className="text-[26px] text-center md:text-[35px]">
                探索無頭網站：突破傳統 WordPress 的界限
              </h3>
              <p className="text-center">
                傳統 WordPress
                網站雖然功能強大，但往往受限於固定的前後端架構，影響網站的速度、靈活性及擴展性。
              </p>
              <div className="h-full mt-5 flex my-auto justify-center items-center">
                <a
                  href="/Contact"
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  className="button-wrapper  w-inline-block"
                >
                  <div className="button-layout">
                    <p href="/about" className="button-text" style={{}}>
                      READ
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
            <div
              className="flex md:flex-row flex-col mt-8 justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" w-full md:w-1/2  p-2 md:p-4 xl:p-10">
                <h3 className="text-[26px] md:text-[35px]">
                  傳統Wordpress網站
                </h3>
                <p className="text-[20px] mt-3">
                  ◉前後端緊密耦合，影響網站速度
                </p>
                <p className="text-[20px] mt-3">◉設計與功能受限於主題和插件</p>
                <p className="text-[20px] mt-3">◉性能優化挑戰大</p>
                <Image
                  src="/images/portfolio01.webp"
                  loading="lazy"
                  alt="Wordpresswebsite"
                  width={500}
                  height={500}
                  placeholder="empty"
                ></Image>
              </div>

              <div
                className="w-full  md:w-1/2  p-2 md:p-4 xl:p-10"
                data-aos="fade-up"
              >
                <h3 className="text-[26px] md:text-[35px]">
                  無頭 Wordpress網站
                </h3>
                <p className="text-[20px] mt-3">◉更快的網站速度</p>
                <p className="text-[20px] mt-3">◉無限的設計自由與靈活性</p>
                <p className="text-[20px] mt-3">◉高效的內容管理</p>
                <Image
                  src="/images/portfolio01.webp"
                  loading="lazy"
                  alt="HeadlessWebsite"
                  width={500}
                  height={500}
                  placeholder="empty"
                ></Image>
              </div>
            </div>
          </div>
          <div
            className="flex  flex-col w-full mt-[50px] md:w-2/3 mx-auto"
            data-aos="zoom-in"
          >
            <div className="title mb-6 w-full">
              <h2
                className="text-[30px] md:text-[32px] lg:text-[40px] 2xl:text-[60px]  text-center text-black  font-extrabold"
                data-aos="fade-up"
              >
                "設計網站不難 做出好的網站才不容易"
              </h2>

              <p
                className=" text-center text-[18px] leading-[26px] "
                data-aos="fade-up"
              >
                總是覺得自己的網站沒有特色嗎？？想做出好的網頁嗎？？
                來跟我討論吧
              </p>
              <div className="h-full mt-5 flex my-auto justify-center items-center">
                <a
                  href="/Contact"
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  className="button-wrapper  w-inline-block"
                >
                  <div className="button-layout">
                    <p href="/about" className="button-text" style={{}}>
                      Contact
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

              <div className="flex flex-col mt-[30px] justify-center items-center">
                <p className="bg-blue-700 text-white text-center mx-auto border border-black mt-8 mb-3 text-[32px] font-bold inline-block">
                  最新優惠
                </p>
                <p className=" tetx-[16px] xl:text-[20px] text-center">
                  現在選擇網頁設計方案及包含公司形象影片拍攝和商品形象攝影
                </p>
              </div>

              <Digital />
              <div className="flex md:flex-row flex-wrap justify-center items-start mt-10  flex-row">
                <div className="border py-[60px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex  relative justify-center flex-col items-center mx-4">
                  <p>Basic</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px]  h-[80px] w-[80px] font-bold text-white flex justify-center items-center bg-blue-500 border border-black">
                    NT30,000
                  </div>
                  <h3 className="text-[40px]">基本網站</h3>
                  <p className="text-[20px]">
                    價格： <span className="font-extrabold">20000up</span>
                  </p>

                  <div className="plan-content mt-5">
                    <p className="mt-4">包含第一年網域空間費用</p>
                    <p className="mt-4">基本網頁版型設計</p>
                    <p className="mt-4">基本seo優化</p>
                    <p className="mt-4">sitemap|</p>
                  </div>
                </div>
                <div className="border py-[60px] px-[40px] bg-white w-[400px] border-black rounded-md my-4 shadow-xl flex relative justify-center flex-col items-center mx-4">
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px]  h-[80px] w-[80px] font-bold text-white flex justify-center items-center bg-blue-500 border border-black">
                    NT45,000
                  </div>
                  <p>Plus</p>
                  <h3 className="text-[40px]">進階方案</h3>
                  {/* <p className="text-[20px]">
                    價格： <span className="font-extrabold">20000up</span>
                  </p> */}

                  <div className="plan-content mt-5">
                    <p className="mt-4">包含第一年網域空間費用</p>
                    <p className="mt-4">商品攝影｜形象影片</p>
                    <p className="mt-4">客製化版面設計｜特殊動畫效果</p>
                    <p className="mt-4">購物車網站系統</p>
                    http://localhost:3000/images/portfolio01.png
                    <p className="mt-4">
                      SEO優化｜串接GTM、GA4、GoogleSearchConsole
                    </p>
                  </div>
                </div>
                <div className="border py-[60px] px-[40px] bg-white border-black rounded-md my-4 flex relative w-[400px]  justify-center flex-col items-center mx-4">
                  <p>Customized</p>
                  <div className="circle  rounded-full absolute top-[-30px] right-[-30px]  h-[80px] w-[80px] shadow-xl font-bold text-white flex justify-center items-center bg-blue-500 border border-black">
                    跟我討論
                  </div>
                  <h3 className="text-[40px]">客製化網站</h3>
                  {/* <p className="text-[20px]">
                    價格： <span className="font-extrabold">20000up</span>
                  </p> */}

                  <div className="plan-content mt-5">
                    <p className="mt-4">
                      {" "}
                      {/* <Image src="" width={50} height={50}></Image>{" "} */}
                      包含第一年網域空間費用
                    </p>
                    <p className="mt-4">包含第一年網域空間費用</p>
                    <p className="mt-4">商品攝影｜形象影片</p>
                    <p className="mt-4">特書版面效果</p>
                    <p className="mt-4">3d產品建模｜互動式網頁</p>
                    <p className="mt-4">3d 影片動畫</p>
                    <p className="mt-4">高質感網頁</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="px-4">
              <SwiperScroll />
            </div> */}
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
