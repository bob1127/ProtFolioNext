import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import GsapText from "../components/RevealText/index";
import { gsap } from "gsap";
import EmblaCarouselIndex from "../components/EmblaCarouselIndex/index";
import PerspectiveSection02 from "../components/PerspectiveSection02/page";
import EmblaCarousel08 from "../components/EmblaCarousel08/index.jsx";
import { useCallback } from "react";
import TypewriterEffect from "../components/TypewriterEffect";
import EmblaCarousel from "../components/EmblaCarousel/index";
import PerspectiveSection from "../components/PerspectiveSection/page";
export default function App() {
  useEffect(() => {
    // 啟動 GSAP 旋轉動畫
    gsap.to(".earth", {
      rotation: 360,
      duration: 60, // 每次完成旋轉的時間
      repeat: -1, // 無限重複
      ease: "none", // 無緩動效果，使得旋轉速度保持一致
      transformOrigin: "center center", // 設定旋轉中心
    });
  }, []);

  useEffect(() => {
    const element = document.querySelector(".spring-pop");

    // 使用 Intersection Observer 來監視圖片是否進入視窗
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // 當圖片進入視窗時觸發動畫
          if (entry.isIntersecting) {
            gsap.fromTo(
              element, // 目標元素
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1.8,

                ease: "elastic.out(1, 0.7)", // 彈簧效果
              }
            );
            // 停止監視該元素（可以避免不必要的重複觸發）
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // 當元素 50% 進入視窗時觸發動畫
      }
    );

    // 開始監視元素
    if (element) {
      observer.observe(element);
    }

    // 清理監視器
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
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
      <div>
        <section className="bg-cover bg-center bg-no-repeat  bg-[url('/images/space01.jpg')] z-[9999999]    md:h-[130vh] xl:portrait:h-[100vh] lg:h-[160vh] h-[110vh] xl:h-[240vh] 2xl:h-[170vh] relative">
          {/* <div className="text z-[9999999999999] absolute w-full md:z-[-1] left-0  py-[50px] right-0  mx-auto">
            <TypewriterEffect />
          </div> */}
          <div className=" absolute  mt-[50px] w-[100vw] top-[-70px] z-[9999999999]">
            <PerspectiveSection />
          </div>
          <div className="relative w-[100vw] ">
            <div className="w-full relative  h-screen flex justify-center">
              <div className=" w-[100vw] relative">
                <div className="relative">
                  <Image
                    src="/images/titlePopup.png"
                    className="spring-pop z-[99] mt-[50px] left-1/2 -translate-x-1/2 absolute"
                    alt="Spring Animation"
                    width={600}
                    height={600}
                    loading="lazy"
                  />
                  <div className="absolute z-[9999999999] mt-[35vh] lg:mt-[50vh]">
                    <EmblaCarouselIndex />
                  </div>
                </div>

                <Image
                  src="/images/spaceMan.png"
                  className=" w-[150px] sm:w-[250px] z-[99999] top-[20%] right-[0%] -translate-x-1/2  mt-[20px] absolute"
                  width={250}
                  height={250}
                  loading="lazy"
                />

                <Image
                  src="/images/astronaut.webp"
                  className=" w-[150px] sm:w-[250px] z-[99999] top-[30%] right-[10%] -translate-x-1/2  mt-[0px] absolute"
                  width={250}
                  height={250}
                  loading="lazy"
                />
                <Image
                  src="/images/fantastic_hare_36410_Planet_Surface_Solid_Color_Background_23f9a17b-e22b-4d2d-91cd-bd02d5f6a80d.png"
                  className="opacity-60 w-[120px] sm:w-[250px]  top-[20%]  z-[99999999] left-[0%] -translate-x-1/2 mt-[20px] absolute"
                  width={250}
                  height={250}
                  loading="lazy"
                />
                <Image
                  src="/images/fantastic_hare_36410_Planet_Solid_Color_Background_6576d313-40aa-4ead-8f00-7e9ec156890e.png"
                  className="w-[80px]  opacity-90 sm:w-[200px] z-[99999] top-[-2%] right-[-10%] -translate-x-1/2 mt-[20px] absolute"
                  alt="Spring Animation"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <Image
                  src="/images/earth.png"
                  className="earth z-[99] left-1/2 -translate-x-1/2 mt-[250px] absolute"
                  alt="Earth"
                  width={1500}
                  height={1000}
                  placeholder="empty"
                  loading="lazy"
                />
                <div className="flex justify-between flex-wrap"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" mt-[100px]  sm:mt-[50px] md:mt-[40px] xl:mt-[100px]  bg-[#001e5a]">
        <section className="section-brand-mobile block sm:hidden">
          <EmblaCarousel08 />
        </section>

        {/* <TextParallaxContent
          imgUrl="/images/WebOptimization-Hero-Img.png"
          subheading="Best Web Experience"
          heading={
            <span className="text-[32px] md:text-[40px] lg:text-[60px]">
              為您提供全方位策略的<br></br>網站設計。
            </span>
          }
        ></TextParallaxContent> */}
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
      className="absolute   left-0 top-0  flex h-screen w-full flex-col items-center justify-center text-white"
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
