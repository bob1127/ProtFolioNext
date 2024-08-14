// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
import Inner from "../components/Inner/index.jsx";
import Marquee from "react-fast-marquee";
import DragCarousel from "../components/DragCarousel/index.jsx";
// import PhysicsAnimation from '../components/PhysicsAnimation/PhysicsAnimation.jsx';
import dynamic from "next/dynamic";
// import SlickCarousel from "../components/SlickCarousel/index.jsx";

import TextHover from "../components/TextHover/index.jsx";
// import SmoothParallaxScroll from "../components/SmoothParallaxScroll/index.js";
// import textReveal from '../components/TextReveal/index.jsx';
// import Link from 'next/dist/client/link.js';
// import Slider from '../components/Slider/slider.jsx';
import MenuToggle from "../components/MenuToggle/index.jsx";
import Trackeye from "../components/Trackeye/page.jsx";
// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );
export default function Home() {
  return (
    <div className="">
      <MenuToggle />

      <Inner backgroundColor={"#B0AD98"}>
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
                    <p className="text-white w-[110px] p-2">lorem⏰</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem💡</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem📸</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem🎡</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem⏰</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem💡</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem📸</p>
                  </div>
                  <div>
                    <p className="text-white w-[110px] p-2">lorem🎡</p>
                  </div>
                </Marquee>
              </div>
            </div>
            <div className="hero-middle border border-black w-full lg:w-[20%] p-[50px] flex  justify-center relative flex-col items-center pt-[50px] border-1 ">
              <h2 className="text-[20px] text-bold">
                創意無限，設計未來 創意無限，
                <br />
                設計未來
              </h2>
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
          <div className="left p-[100px] w-full lg:w-1/2 border-r-2 border-black">
            <div>
              <h2 className="text-[40px] lg:text-[80px] flex justify-center  leading-[80px] w-full lg:w-2/3 pt-0 lg:pt-[100px] items-center">
                WHAT’S Design in Life
              </h2>
              <div className="flex flex-row ">
                <p>網站案例｜</p>
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
            <div className="bottom  flex py-[50px] lg:p-[40px] items-center   h-1/2 justify-start flex-col w-full ">
              <h4 className=" text-[22px] text-light">
                <span></span>創意驅動，技術為本<span></span>
              </h4>
              <p className="mt-[20px]  w-2/3">
                我們相信創意是設計的核心，技術是實現創意的橋樑。
                我們致力於將最具創意的想法轉化為現實，通過尖端技
                術提供卓越的數字體驗。
              </p>
            </div>
          </div>
        </section>
        {/* <SmoothParallaxScroll /> */}
        <section className="section_second border border-black flex flex-col lg:flex-row">
          <div className="left p-[100px] w-full lg:w-1/2 border-r-2 border-black">
            <div>
              <h2 className="text-[40px] lg:text-[80px] flex justify-center  leading-[80px] w-full lg:w-2/3 pt-0 lg:pt-[100px] items-center">
                WHAT’S Design in Life
              </h2>
              <div className="flex flex-row ">
                <p>網站案例｜</p>
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
            <div className="bottom  flex py-[50px] lg:p-[40px] items-center   h-1/2 justify-start flex-col w-full ">
              <h4 className=" text-[22px] text-light">
                <span></span>創意驅動，技術為本<span></span>
              </h4>
              <p className="mt-[20px]  text-cenrer lg:text-left w-2/3">
                我們相信創意是設計的核心，技術是實現創意的橋樑。
                我們致力於將最具創意的想法轉化為現實，通過尖端技
                術提供卓越的數字體驗。
              </p>
            </div>
          </div>
        </section>

        {/* <iframe
          src="https://my.spline.design/bmoadventuretimecopy-ad1d560a902337308bba76fc039dd3c2/"
          width="100%"
          height="600"
        ></iframe> */}

        <section className="py-[100px] flex flex-col justify-center items-center">
          <DragCarousel />
        </section>
        {/* <SlickCarousel /> */}
        {/* <SmoothParallaxScroll /> */}
        <section className="section_matter">
          <div className="top"></div>
          <div className="bottom">{/* <PhysicsAnimation /> */}</div>
        </section>
        {/* <section className="border-2 relative border-black h-80vh">
          <PhysicsAnimationApp />
        </section> */}

        {/* <Slider/> */}
        {/* <CarouselImg/> */}
      </Inner>
    </div>
  );
}

// reportWebVitals();
