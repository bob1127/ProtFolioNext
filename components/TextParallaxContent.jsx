import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import GsapText from "../components/RevealText/index";
import { gsap } from "gsap";

import PerspectiveSection02 from "../components/PerspectiveSection02/page";
import EmblaCarousel08 from "../components/EmblaCarousel08/index.jsx";
import { useCallback } from "react";
import TypewriterEffect from "../components/TypewriterEffect";
import EmblaCarousel from "../components/EmblaCarousel/index";
import PerspectiveSection from "../components/PerspectiveSection/page";
export default function App() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".line span", 1.8, {
      y: 500,
      ease: "power4.out",
      delay: 0.4,
      skewY: 17,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  const [isAnimated, setIsAnimated] = useState(false); // 狀態來控制動畫

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); // 在初始動畫結束後啟用呼吸動畫
    }, 1400); // 設置為大於初始動畫的持續時間（1000ms + delay 400ms）

    return () => clearTimeout(timer); // 清理定時器
  }, []);
  const handleScroll = useCallback(() => {
    const targetScroll = window.innerHeight * 1; // 滾動距離為 80vh
    const startScroll = window.scrollY;
    const duration = 500; // 設置滾動持續時間為 1000 毫秒 (1 秒)
    let startTime = null;

    const smoothScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // 控制進度在 0 到 1 之間
      window.scrollTo(0, startScroll + targetScroll * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(smoothScroll); // 繼續動畫
      }
    };

    requestAnimationFrame(smoothScroll);
  }, []);

  return (
    <div className=" ">
      <div className="h-[100vh] md:h-[80vh] lg:h-[700px] xl-[100vh] bg-[#c8c8c8] w-full relative overflow-hidden">
        <div
          className="absolute top-0 opacity-10 left-0  w-[100vw] h-[100vh]  z-[9999999] bg-center bg-repeat  "
          style={{ backgroundImage: "url('/images/Hero-backgorund-03.png')" }}
        ></div>
        <div className="absolute left-0  md:left-[22%] top-[20%] w-full md:w-[80%] lg:w-[60%] z-[999999999]">
          <div className="font-anton relative  line flex justify-center items-center mt-[-80px] h-[180px] overflow-hidden ">
            <h1 className="font-black text-[40px] md:text-[80px] xl:text-[100px] 2xl:text-[125px] absolute  line">
              {["極", "客", "網", "頁", "設", "計"].map((char, index) => (
                <span key={index} className="inline-block overflow-hidden">
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <div className="font-anton relative  line flex justify-center items-center mt-[-80px] sm:mt-[-50px]  h-[80px] md:h-[180px] overflow-hidden ">
            <h1 className="font-black text-[40px] md:text-[80px] xl:text-[100px] 2xl:text-[125px] absolute  line">
              {["J", "E", "E", "K", " -", "D", "E", "S", "I", "G", "N"].map(
                (char, index) => (
                  <span key={index} className="inline-block overflow-hidden">
                    {char}
                  </span>
                )
              )}
            </h1>
          </div>

          <div className="feature relative z-[9999999999999] mb-[40px] py-2 hidden sm:grid  w-[70%] mx-auto    rounded-[40px] px-[40px]  overflow-scroll  grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
            <div
              href="/Photography"
              className="bg-white text-center border text-nowrap border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] px-3  rounded-[14px]    text-[14px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.85)] py-2"
            >
              產品攝影
            </div>
            <a
              href="/WebOptimization"
              className="bg-white text-center  inline-block border border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] px-3 rounded-[14px]     text-[14px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.85)] py-2"
            >
              seo 優化
            </a>
            <a
              href="/project"
              className="bg-white text-center border  border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] px-3 rounded-[14px]    text-[14px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.85)] py-2"
            >
              網頁設計
            </a>
            <a
              href="/3dProduct"
              className="bg-white text-center border  border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] px-3 rounded-[14px]    text-[14px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.85)] py-2"
            >
              3d建模
            </a>
          </div>
        </div>

        <div className="absolute  top-[36%] md:top-[15%] right-0 md:right-[10%] z-[99999999]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }} // 初始狀態
            animate={{ opacity: 1, scale: 1 }} // 最終狀態
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4, // 延遲 400 毫秒
              duration: 1, // 持續時間 1000 毫秒
            }}
            // 根據狀態決定是否啟用呼吸動畫
            whileInView={
              isAnimated
                ? {
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }
                : {}
            }
          >
            <Image
              src="/images/Hero-img-01.webp"
              alt="hero-blur-img_green"
              placeholder="empty"
              loading="eager"
              width={200}
              height={200}
            ></Image>
          </motion.div>
        </div>
        <div className="absolute top-[26%] md:top-[0%] left-[0%] z-[99999999]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }} // 初始狀態
            animate={{ opacity: 1, scale: 1 }} // 最終狀態
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 1, // 延遲 400 毫秒
              duration: 1, // 持續時間 1000 毫秒
            }}
            // 根據狀態決定是否啟用呼吸動畫
            whileInView={
              isAnimated
                ? {
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }
                : {}
            }
          >
            <Image
              src="/images/Hero-img-02.webp"
              alt="hero-blur-img_blue"
              placeholder="empty"
              loading="eager"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
        <div className="absolute bottom-[30%] sm:bottom-[11%] lg:bottom-[10%]  left-[20%] lg:left-[30%] z-[99999999]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }} // 初始狀態
            animate={{ opacity: 1, scale: 1 }} // 最終狀態
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.8, // 延遲 400 毫秒
              duration: 1, // 持續時間 1000 毫秒
            }}
            // 根據狀態決定是否啟用呼吸動畫
            whileInView={
              isAnimated
                ? {
                    scale: [1, 1.25, 1],
                    transition: {
                      duration: 3.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }
                : {}
            }
          >
            <Image
              src="/images/Hero-img-03.webp"
              alt="hero-blur-img_yellow"
              placeholder="empty"
              loading="eager"
              width={200}
              height={200}
            ></Image>
          </motion.div>
        </div>
        <div className="absolute  bottom-0 sm:bottom-[-30%] md:bottom-[-22%] lg:bottom-[-10%] right-[-23%] md:right-[-15%] lg:right-[-5%] z-[999999999] w-[80%] md:w-[60%] lg:w-[40%] max-w-[2500px]">
          <Image
            src="/images/Hero-img-11.webp"
            alt="hero-blur-img_desktop"
            placeholder="empty"
            loading="eager"
            layout="responsive"
            width={500}
            height={500}
            className="object-contain" // 根據需求選擇 object-contain 或 object-cover
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1200"
          />
        </div>
        <div className="absolute bottom-[0px] sm:bottom-[-20%] lg:bottom-0 left-[-22%] md:left-[-27%] lg:left-[-10%] 2xl:left-[-10%] z-[999999999] w-[80%] md:w-[60%] lg:w-[40%] max-w-[2500px]">
          <Image
            src="/images/Hero-img-09-human.png"
            alt="hero-blur-img_desktop"
            placeholder="empty"
            loading="eager"
            layout="responsive"
            width={500}
            height={500}
            className="object-contain" // 根據需求選擇 object-contain 或 object-cover
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1200"
          />
        </div>
        <div className="absolute top-0 left-0 z-[99999999]">
          <Image
            src="/images/Hero-img.webp"
            alt="hero-blur-img"
            loading="eager"
            priority={true}
            width={2300}
            height={1080}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className="arrow flex justify-start pt-[35px] items-center left-[50%] sm:bottom-[80px] absolute z-[999999999] bg-white rounded-full   sm:bg-transparent flex-col sm:justify-center w-[50%] bottom-[-18%] h-[30%] sm:items-center transform -translate-x-1/2"
          onClick={handleScroll}
        >
          <div>Scroll Down</div>
          <div>↓</div>
        </div>
      </div>

      <div>
        <section className="bg-[#ffd446] z-[9999999] overflow-hidden hidden xl:block  md:h-[130vh] xl:portrait:h-[100vh] lg:h-[160vh] xl:h-[240vh] 2xl:h-[170vh] relative">
          <div className="text z-[9999999999999] absolute w-full md:z-[-1] left-0  py-[50px] right-0  mx-auto">
            <TypewriterEffect />
          </div>
          <div className=" absolute w-[100vw] top-[-70px] z-[9999999999]">
            {" "}
            <PerspectiveSection />
          </div>
          <div className="relative w-[100vw] ">
            {/* 确保父元素为相对定位 */}

            <div className="w-full  h-screen flex justify-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" w-[100vw] "
              >
                {/* <div className="flex w-[100vw]   left-0 absolute  top-1/3">
                  <div className="bg-white  w-[500px]  z-[999999999999] border border-black rounded-xl   p-10">
                    <h3>選擇極客，提供完整網站維護服務</h3>
                    <p>讓您的網站隨時保持在高效能</p>
                  </div>
                </div> */}
                <Image
                  src="/images/fantastic_hare_36410_Planets_surface_solid_color_background_zoo_c3daab53-e930-403f-a0aa-eb10908a7372.png"
                  className=" max-w-[2500px] left-[-90vw] z-[99] md:left-[-10vw]  mt-20 absolute"
                  alt=" "
                  width={3000}
                  height={1000}
                  placeholder="empty"
                  loading="lazy"
                ></Image>
                <div className="flex justify-between flex-wrap">
                  {/* <div className="txt p-8 bg-white rounded-xl  pt-[40px] flex w-[95%] mx-auto sm:w-[450px] 2xl:w-[33vw] justify-center items-center flex-col ">
                    <div className="slogan-title w-full flex justify-between">
                      <div>
                        {" "}
                        <Image
                          src="/images/icon/edit.png"
                          alt="close-icon"
                          width={35}
                          className="mr-3"
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                        <b> Magic Write</b>
                      </div>
                      <div className="close mt-[-15px]">
                        <Image
                          src="/images/icon/pin.png"
                          alt="close-icon"
                          width={35}
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                      </div>
                    </div>
                    <div className="slogan-content border-b-2 border-gray-400 flex py-[30px] flex-wrap">
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        您還在比價嗎？
                      </h3>
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        選擇極客!!
                      </h3>
                      <div className="block md:hidden">
                        <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                          用工作室的價格
                        </h3>
                        <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                          建立專業級的網站
                        </h3>
                      </div>
                    </div>
                    <div className="slogan-footer flex justify-end py-[20px]">
                      Design By Jeek
                    </div>
                  </div>{" "} */}
                  {/* <div className="txt p-8 bg-white rounded-xl  hidden md:flex  pt-[40px]  w-full sm:w-[450px] 2xl:w-[32vw] rotate-3 justify-center items-center flex-col ">
                    <div className="slogan-title w-full flex justify-between">
                      <div>
                        {" "}
                        <Image
                          src="/images/icon/edit.png"
                          alt="close-icon"
                          width={35}
                          className="mr-3"
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                        <b> Magic Write</b>
                      </div>
                      <div className="close mt-[-15px]">
                        <Image
                          src="/images/icon/pin.png"
                          alt="close-icon"
                          width={35}
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                      </div>
                    </div>
                    <div className="slogan-content border-b-2 border-gray-400  py-[30px] hidden md:block flex-wrap">
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        用工作室的價格
                      </h3>
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        建立專業級的網站
                      </h3>
                    </div>
                    <div className="slogan-footer flex justify-end py-[20px]">
                      Design By Jeek
                    </div>
                  </div>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#ffd446]   h-[120vh] z-[9999999] overflow-hidden bock xl:hidden  relative">
          <div className="text z-[9999999999999] absolute w-full md:z-[-1] left-0  py-[50px] right-0  mx-auto">
            <TypewriterEffect />
          </div>
          <div className=" absolute w-[100vw] top-[-70px] z-[9999999999]">
            {" "}
            <PerspectiveSection />
          </div>
          <div className="relative w-[100vw] ">
            {/* 确保父元素为相对定位 */}

            <div className="w-full  h-screen flex justify-center">
              <div data-aos="zoom-in" data-aos-duration="1000" className=" ">
                <Image
                  src="/images/fantastic_hare_36410_Planets_surface_solid_color_background_zoo_c3daab53-e930-403f-a0aa-eb10908a7372.png"
                  className=" max-w-[2500px] left-[-90vw] md:left-[-80vw] z-[-1] mt-20 absolute"
                  alt=" "
                  width={3000}
                  height={1000}
                  placeholder="empty"
                  loading="lazy"
                ></Image>
                <div className="flex justify-between flex-wrap">
                  {/* <div className="txt p-8 bg-white rounded-xl  pt-[40px] flex w-[95%] mx-auto sm:w-[450px] 2xl:w-[33vw] justify-center items-center flex-col ">
                    <div className="slogan-title w-full flex justify-between">
                      <div>
                        {" "}
                        <Image
                          src="/images/icon/edit.png"
                          alt="close-icon"
                          width={35}
                          className="mr-3"
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                        <b> Magic Write</b>
                      </div>
                      <div className="close mt-[-15px]">
                        <Image
                          src="/images/icon/pin.png"
                          alt="close-icon"
                          width={35}
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                      </div>
                    </div>
                    <div className="slogan-content border-b-2 border-gray-400 flex py-[30px] flex-wrap">
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        您還在比價嗎？
                      </h3>
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        選擇極客!!
                      </h3>
                      <div className="block md:hidden">
                        <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                          用工作室的價格
                        </h3>
                        <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                          建立專業級的網站
                        </h3>
                      </div>
                    </div>
                    <div className="slogan-footer flex justify-end py-[20px]">
                      Design By Jeek
                    </div>
                  </div>{" "} */}
                  {/* <div className="txt p-8 bg-white rounded-xl  hidden md:flex  pt-[40px]  w-full sm:w-[450px] 2xl:w-[32vw] rotate-3 justify-center items-center flex-col ">
                    <div className="slogan-title w-full flex justify-between">
                      <div>
                        {" "}
                        <Image
                          src="/images/icon/edit.png"
                          alt="close-icon"
                          width={35}
                          className="mr-3"
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                        <b> Magic Write</b>
                      </div>
                      <div className="close mt-[-15px]">
                        <Image
                          src="/images/icon/pin.png"
                          alt="close-icon"
                          width={35}
                          height={35}
                          placeholder="empty"
                          loading="lazy"
                        ></Image>
                      </div>
                    </div>
                    <div className="slogan-content border-b-2 border-gray-400  py-[30px] hidden md:block flex-wrap">
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        用工作室的價格
                      </h3>
                      <h3 className="text-[2.2rem] 2xl:text-[2.5rem] mx-3">
                        建立專業級的網站
                      </h3>
                    </div>
                    <div className="slogan-footer flex justify-end py-[20px]">
                      Design By Jeek
                    </div>
                  </div>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="hidden xl:block">
        <PerspectiveSection02 />
      </div> */}
      {/* Rest of your component */}
      <div className=" mt-0  sm:mt-[50px] md:mt-[40px] xl:mt-[100px]  bg-[#ffffff]">
        {/* <PerspectiveSection02 /> */}
        <section className="section-brand-mobile block sm:hidden">
          <EmblaCarousel08 />
        </section>
        <section className="section-brand hidden sm:block   pt-5  ">
          <div className="txt  px-[25px] flex items-center flex-col justify-center py-4">
            <h2 className="text-black text-[30px] md:text-[50px] xl:text-[70px] font-bold">
              讓您的品牌擁有獨立網站！
            </h2>
            <p className="text-[16px] font-normal text-center w-full mt-4 md:w-1/2 mx-auto md:text-[22px] text-black">
              您是否為其困擾？？
            </p>
          </div>
          <div className="bottom-wrap w-[95%]  mx-auto flex  pb-5 ">
            <div className="border px-[30px] py-[50px] border-black group bg-[#e79a2e] w-1/3 rounded-xl m-2">
              <div className="flex  flex-col justify-center items-center">
                <Image
                  src="/images/電商平台的高抽成01.png"
                  alt="SEO優化行銷-極客網頁設計"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 group-hover:rotate-[-10deg]  duration-500"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </div>
              <div className="flex group flex-col justify-center items-center p-5">
                <h3 className="text-white text-[30px] text-center font-black">
                  電商平台的高抽成
                </h3>

                <p className="text-white  text-[14px] xl:text-[22px] md:text-[20px]  text-center">
                  "電商平台手續費越抽越多？選擇我們的網頁設計服務，擺脫高額手續費的束縛！
                </p>
              </div>{" "}
            </div>
            <div className="border group px-[30px] py-[50px] border-black w-1/3 bg-[#262626] rounded-xl m-2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/對現有網站不滿意.png"
                  alt="SEO優化行銷-極客網頁設計"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 group-hover:rotate-[-10deg]  duration-500"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </div>
              <div className="flex flex-col justify-center p-5 items-center">
                <h3 className="text-white text-[35px]  font-black">
                  對現有網站不滿意
                </h3>

                <p className="text-white  text-[14px] xl:text-[22px] md:text-[20px] text-center">
                  您的網站設計過時，技術已落後趨勢，缺乏維護，這可能正拖累您的排名和企業盈利
                </p>
              </div>
            </div>
            <div className="border px-[30px] py-[50px] border-black bg-[#5082b8] w-1/3 rounded-xl m-2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/收集客戶資料再行銷.png"
                  alt="SEO優化行銷-極客網頁設計"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 group-hover:rotate-[-10deg]  duration-500"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </div>
              <div className="flex flex-col justify-center p-5 items-center">
                <h3 className="text-white text-[30px] text-center font-black">
                  你想完整收集客戶資料，再行銷嗎？
                </h3>

                <p className="text-white  text-[14px] xl:text-[22px] md:text-[20px]  text-center">
                  擁有獨立網站，完整掌握客戶數據，實現精準行銷、提升轉化率，建立長期品牌關係，持續創造價值。
                </p>
              </div>
            </div>
          </div>
        </section>
        <TextParallaxContent
          imgUrl="/images/WebOptimization-Hero-Img.png"
          subheading="Best Web Experience"
          heading={
            <span className="text-[32px] md:text-[40px] lg:text-[60px]">
              為您提供全方位策略的<br></br>網站設計。
            </span>
          }
        ></TextParallaxContent>
      </div>

      {/* Additional sections */}
    </div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-auto">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto  mt-[-50px] md:mt-[100px]    pb-24 pt-12 flex flex-col ">
    <section className="section-embla my-[60px  md:my-0">
      <EmblaCarousel />
    </section>
    <section className="section_portfolio mx-auto max-w-[2000px] w-full flex flex-wrap justify-center items-center">
      {/* <a href="https://www.zensorrd.com">
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a>
      <a href="">
        {" "}
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a>
      <a href="">
        {" "}
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a> */}
    </section>
  </div>
);
