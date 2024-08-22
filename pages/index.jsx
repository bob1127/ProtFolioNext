// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";
import Marquee from "react-fast-marquee";
import DragCarousel from "../components/DragCarousel/index.jsx";
import SwiperScroll from "../components/SwiperScroll/page.jsx";
import styles from "../styles/Home.module.css";
import Text3d from "../components/PerspectiveText/index.jsx";
import CatoonCursor from "../components/CartoonCursor/page.jsx";
import { useRef, useEffect } from "react";
// import PhysicsAnimation from '../components/PhysicsAnimation/PhysicsAnimation.jsx';
import Head from "next/head";
import Script from "next/script.js";
import Image from "next/image.js";
import dynamic from "next/dynamic";
// import SlickCarousel from "../components/SlickCarousel/index.jsx";
import Link from "next/link";
import TextHover from "../components/TextHover/index.jsx";
import SmoothParallaxScroll from "../components/SmoothParallaxScroll/index.js";
// import textReveal from '../components/TextReveal/index.jsx';
// import Link from 'next/dist/client/link.js';
// import Slider from '../components/Slider/slider.jsx';
import MenuToggle from "../components/MenuToggle/index.jsx";
import Trackeye from "../components/Trackeye/page.jsx";
import { imageConfigDefault } from "next/dist/shared/lib/image-config.js";

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
// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );
export default function Home() {
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
      <>
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
            <div className="hero-middle border border-black w-full lg:w-[20%] p-[50px] flex  justify-center relative flex-col items-center pt-[50px] border-1 ">
              <h2 className="text-[32px] text-bold">創意無限，設計未來</h2>
              <h2 className="text-[32px] text-bold">為你的品牌增值</h2>
              <br />
            </div>
            <div className="hero-right p-[50px] border-1 border-black border pt-[50px] flex flex-col  w-full lg:w-[15%]">
              <div className="top">
                <p className="text-[22px]">contact</p>
              </div>
              <div className="bottom">
                <div className="contact-icon "></div>
              </div>
            </div>
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
            <div className="top py-[50px] lg:p-[40px] flex  bg-green-500 justify-center items-center h-1/2  lg:border-t-0 border-t-2 flex-col w-full border-b-2 border-black">
              <h4 className="text-[22px] text-light">
                <span></span>數位設計，提升您的業務<span></span>
              </h4>
              {/* <Link
                href='/Video'
                className='text-white bg-green-500 border-2 rounded-[30px]'
              >
                {' '}
                Go to about us
              </Link> */}
              <h3 className="text-[30px] text-extrabold mt-[30px]">
                104年11月 11 日
              </h3>
              <p className="text-[14px] text-black w-3/4 text-center ">
                多年來，我一直深耕於網頁設計和開發領域，擁有豐富的經驗和技術知識。我了解每個企業都有其獨特的需求，因此我秉持著與客戶密切合作的理念，確保每個專案都能完美契合他們的品牌形象和業務目標。
                無論您是需要全新網站設計、網站重構或是數位行銷策略，我們都能提供一站式的解決方案。期待與您合作，共同創造出色的線上體驗！
              </p>
            </div>
            <div className="bottom  flex py-[50px] lg:p-[40px] items-center   h-1/2 justify-start flex-col w-full ">
              <h4 className=" text-[22px] text-light">
                <span></span>
                <span className="text-[32px]">
                  "創意無限，讓您的品牌脫穎而出。"
                </span>
              </h4>
              <p className="mt-[14px] p-10 w-2/3">
                創意是設計的核心，技術是實現創意的橋樑。
                致力於將最具創意的想法轉化為現實，通過尖端技
                術提供卓越的數字體驗。
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
        <section className="RWD  border-t-2 border-b-2 border-l-2 border-black">
          <div className="w-full flex-col items-center justify-center lg:flex-row flex">
            <div className="w-full lg:w-1/2 border-r-2 border-black p-[25px] sm:p-[60px] lg:p-[70px] overflow-y-scroll">
              <div className="txt">
                <h2 className="">"提升SEO排名，響應式網頁設計（RWD）的力量"</h2>
                <p>
                  在現代網站設計中，響應式網頁設計（RWD）已成為不可或缺的標準。RWD不僅提升了用戶體驗，也對SEO排名起到了至關重要的作用。根據Google的數據和研究，RWD對於網站的搜尋引擎排名有著直接而深遠的影響。
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
              <div className=" overflow-x-scroll w-full  ">
                <div className="w-[1000px] 2xl:w-full grid grid-cols-4 2xl:grid-cols-2  gap-2">
                  <div className="mt-5 border border-black  bg-white rounded-xl p-5">
                    <b className="text-[20px] font-extrabold">
                      1. 提升用戶體驗
                    </b>
                    <p className="mt-2">
                      RWD提升瀏覽流暢性，減少跳出率，優化SEO排名。
                    </p>
                  </div>
                  <div className="mt-5 border border-black bg-white rounded-xl p-5">
                    <b className="text-[20px] font-extrabold">
                      2. 確保網站速度
                    </b>
                    <p className="mt-2">
                      響應式設計提高加載速度，改善用戶滿意度和SEO排名。
                    </p>
                  </div>
                  <div className="mt-5 border border-black bg-white rounded-xl p-5">
                    <b className="text-[20px] font-extrabold">3. 集中管理SEO</b>
                    <p className="mt-2">
                      單一URL結構簡化SEO，集中權重，提升搜尋排名。
                    </p>
                  </div>
                  <div className="mt-5 border border-black bg-white rounded-xl p-5">
                    <b className="text-[20px] font-extrabold">
                      4. 迎合Google算法
                    </b>
                    <p className="mt-2">
                      Google偏愛行動友好的RWD網站，有助於提高搜尋排名。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="6154f4061315715828dd75d6_smudgge-hero-image%20(1).png"
                loader={imageLoader02}
                loading="lazy"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </section>
        {/* <SmoothParallaxScroll /> */}
        <section className="section_second bg-green-400 border border-black flex flex-col lg:flex-row">
          <div className="left p-[60px] xl:p-[100px] w-full lg:w-1/2 border-r-2 border-black">
            <div>
              <h2 className="text-[40px] lg:text-[80px] flex justify-center   leading-[80px] w-full lg:w-4/5 pt-0 lg:pt-[100px] items-center">
                WHAT’S Design in Life
              </h2>
              <div className="flex flex-row ">
                <Link href="/about">網站案例｜</Link>
                <p>合作案例｜</p>
                <p>合作案例｜</p>
              </div>
            </div>
          </div>
          <div className="right   h-full flex flex-col  w-full lg:w-1/2">
            <div className="top py-[50px] lg:p-[40px] flex  bg-green-500 justify-center items-center h-1/2  lg:border-t-0 border-t-2 flex-col w-full border-b-2 border-black">
              <h4 className="text-[22px] text-light">
                <span></span>數位設計，提升您的業務<span></span>
              </h4>
              {/* <Link
                href='/Video'
                className='text-white bg-green-500 border-2 rounded-[30px]'
              >
                {' '}
                Go to about us
              </Link> */}
              <h3 className="text-[30px] text-extrabold mt-[30px]">
                104年11月 11 日
              </h3>
              <p className="text-[14px] text-black w-3/4 text-center ">
                多年來，我一直深耕於網頁設計和開發領域，擁有豐富的經驗和技術知識。我了解每個企業都有其獨特的需求，因此我秉持著與客戶密切合作的理念，確保每個專案都能完美契合他們的品牌形象和業務目標。
                無論您是需要全新網站設計、網站重構或是數位行銷策略，我們都能提供一站式的解決方案。期待與您合作，共同創造出色的線上體驗！
              </p>
            </div>
            <div className="bottom  bg-white flex py-[50px] lg:p-[40px] items-center   h-1/2 justify-start flex-col w-full ">
              <h4 className=" text-[22px] text-light">
                <span></span>創意驅動，技術為本<span></span>
              </h4>
              <p className="mt-[20px]  text-cenrer lg:text-left w-2/3">
                我們相信創意是設計的核心，技術是實現創意的橋樑。
                我們致力於將最具創意的想法轉化為現實，通過尖端技
                術提供卓越的數字體驗。
              </p>
            </div>
            <div className="wrap h-auto flex">
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

        <section>
          <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3">
            <div className="border-2 overflow-hidden border-black w-full relative">
              <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                <a
                  href="/about"
                  className="text-white  text-[22px] text-center"
                >
                  3d-model
                </a>
              </div>
              <Image
                className="hover:scale-105 duration-500"
                width={800}
                src="/6697d9dae472fdc9bf452bfc_stada-img-n-9.png"
                loading="lazy"
                loader={imageLoader}
                height={500}
              />
            </div>
            <div className="border-2 overflow-hidden border-black w-full relative">
              <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                <p className="text-white  text-[22px] text-center">3d-model</p>
              </div>
              <Image
                className="hover:scale-105 duration-500"
                width={800}
                src="/669655bf3caaa06f871273e4_stada-img-n-15.png"
                loading="lazy"
                loader={imageLoader}
                height={500}
              />{" "}
            </div>
            <div className="border-2 overflow-hidden border-black relative w-full ">
              <div className="txt left-[46%] z-[99999] absolute top-[50%] items-center left-40% z-3  flex justify-center">
                <p className="text-white  text-[22px] text-center">3d-model</p>
              </div>
              <Image
                className="hover:scale-105 duration-500"
                width={800}
                src="/6697db71df85f60ba51311ba_stada-img-n-3.png"
                loading="lazy"
                loader={imageLoader}
                height={500}
              />
            </div>

            <div className="border-2 flex flex-col justify-center items-center  p-5  xl:hidden">
              <h4>網頁設計</h4>
              <p className="text-[14px] w-2/3 text-center ">
                {" "}
                您的品牌在數位世界中大放異彩！我們專業的網頁設計團隊為您打造獨特且具吸引力的網站，提升用戶體驗，促進業務增長。立即聯絡我們，開啟您的數位成功之旅！
              </p>
            </div>
          </div>
        </section>

        {/* <iframe
          src="https://my.spline.design/bmoadventuretimecopy-ad1d560a902337308bba76fc039dd3c2/"
          width="100%"
          height="600"
        ></iframe> */}
        <section>
          <SmoothParallaxScroll />
        </section>

        <section className="bg-gray-100  py-[70px] px-[20px]">
          <div className="flex flex-col w-2/3 mx-auto">
            <div className="title mb-6 w-full">
              <h2 className="text-[30px] md:text-[32px] lg:text-[40px] 2xl:text-[60px]  text-center text-black font-extrabold">
                "設計網站不難 做出好的網站才不容易"
              </h2>

              <p className="text-[18px]  text-center lg:text-[22px] 2xl:text-[30px]">
                總是覺得自己的網站沒有特色嗎？？想做出好的網頁嗎？？
                來跟我討論吧
              </p>
              <div className="mx-auto w-[170px]">
                <a
                  href="/"
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  className="button-wrapper w-inline-block"
                >
                  <div className="button-layout">
                    <p href="/about" className="button-text" style={{}}>
                      立即聯絡
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
      </>
    </div>
  );
}

// reportWebVitals();
