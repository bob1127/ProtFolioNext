import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import GsapText from "../components/RevealText/index";
import { gsap } from "gsap";
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
      <div className="h-[100vh] bg-[#c8c8c8] w-full relative overflow-hidden">
        <div
          className="absolute top-0 opacity-10 left-0 w-[100vw] h-[100vh]  z-[9999999] bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: "url('/images/Hero-backgorund.png')" }}
        ></div>
        <div className="absolute left-0 md:left-[20%] top-[20%] w-full md:w-[80%] lg:w-[60%] z-[999999999]">
          <div className="font-anton relative  line flex justify-center items-center mt-[-80px] h-[180px] overflow-hidden ">
            <h1 className="font-black text-[40px] md:text-[80px] xl:text-[100px] 2xl:text-[125px] absolute  line">
              {["極", "客", "網", "頁", "設", "計"].map((char, index) => (
                <span key={index} className="inline-block overflow-hidden">
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <div className="font-anton relative  line flex justify-center items-center mt-[-80px] h-[80px] md:h-[180px] overflow-hidden ">
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
          <div className="feature relative z-[9999999999999] mb-[40px] py-2 px-3 lg:w-[65%] w-[85%] md:w-[90%] mx-auto grid border-r-2 border-l-2 border-black rounded-[40px] grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center items-center text-center h-full">
              <p>Website Design</p>
              <b>網頁設計</b>
            </div>
            <div className="flex flex-col justify-center items-center text-center h-full">
              <p>SEO Optimization</p>
              <b>專業SEO優化</b>
            </div>
            <div className="flex flex-col justify-center items-center text-center h-full">
              <p>Photography</p>
              <b>產品攝影｜圖片後製</b>
            </div>
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
              src="/images/Hero-img-01.png"
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
              src="/images/Hero-img-02.png"
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
              src="/images/Hero-img-03.png"
              alt="hero-blur-img_yellow"
              placeholder="empty"
              loading="eager"
              width={200}
              height={200}
            ></Image>
          </motion.div>
        </div>
        <div className="absolute  bottom-0 sm:bottom-[-30%] md:bottom-[-22%] lg:bottom-[-10%] right-[-23%] md:right-[-15%] lg:right-[-5%] z-[99999999] w-[80%] md:w-[60%] lg:w-[40%] max-w-[2500px]">
          <Image
            src="/images/Hero-img-11.png"
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
            src="/images/Hero-img-09.png"
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
            src="/images/Hero-img.png"
            alt="hero-blur-img"
            placeholder="empty"
            loading="eager"
            width={2300}
            height={1080}
          ></Image>
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
        <section className="bg-[#ffd446] z-[9999999] overflow-hidden h-[350vh] sm:h-[450vh] md:h-[230vh] relative">
          <div className="relative">
            {" "}
            {/* 确保父元素为相对定位 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="Hero-ball md:w-[800px] md:h-[800px] w-[400px] h-[400px] absolute left-[21%] top-[260px] transform translate-x-1/2"
            ></div>
          </div>
          <div className="text z-[9999999999999] absolute w-[85%] md:w-[70%] xl:w-[57%] md:z-[-1] left-0  py-[50px] right-0  mx-auto">
            <TypewriterEffect />
          </div>
          <div className=" absolute w-[100vw] top-[-70px] z-[9999999999]">
            {" "}
            <PerspectiveSection />
          </div>
        </section>
      </div>

      {/* Rest of your component */}
      <div className="mt-[100px]  bg-[#ffffff]">
        <TextParallaxContent
          imgUrl="https://cdn.prod.website-files.com/60e5f2de011b86acebc30db7/6671a0268447eb8c30f699b0_Cinematic%204.webp"
          subheading="Best Web Experience"
          heading={
            <span className="text-[32px] md:text-[40px] lg:text-[60px]">
              為您提供全方位策略的<br></br>網站設計。
            </span>
          }
        >
          <ExampleContent />
        </TextParallaxContent>
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
      <div className="relative h-[100vh] xl:h-[80vh] lg:h-[150vh]">
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
  <div className="mx-auto  mt-[-50px] md:mt-[100px]   px-4 pb-24 pt-12 flex flex-col ">
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
