import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import GsapText from "./RevealText/index";
import { gsap } from "gsap";
import PerspectiveSection02 from "./PerspectiveSection02/page";
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

  return (
    <div className="">
      <PerspectiveSection02 />

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
  <div className="mx-auto    px-4 pb-24 pt-12 flex flex-col ">
    <div className="flex font-black justify-center py-5">
      <GsapText
        text=' "品牌獲利的新動能" '
        lineHeight="60px"
        id="text3"
        fontSize="70px"
      />
      {/* <GsapText
                  text=' "我該如何選擇行銷方式" '
                  lineHeight="60px"
                  id="text10"
                  fontSize="50px"
                /> */}
    </div>
    <div className="flex md:flex-row flex-col justify-center items-center border border-black w-[85%] mx-auto">
      <div className="text-content w-full md:w-[45%]">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
          把網站形象升級為盈利資產
        </h2>
        <div className=" text-[18px] leading-[22px]">
          <p className="mt-4">
            讓您的網站不僅僅是名片，更成為全天候的業務推動力。透過我們的設計專業與
            SEO
            優化，將網站打造成吸引流量、提升轉換的利器，將每次訪問轉化為真實收益。我們幫助您提升品牌形象，增強用戶信任，讓您的網站成為真正的盈利資產。
          </p>

          <button className="w-full mt-5 rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Learn more <FiArrowUpRight className="inline" />
          </button>
        </div>
      </div>
      <div className="img w-full md:w-[65%]">
        <Image
          src="/images/您的網頁問題我來解決-極客網頁設計01.png"
          alt="您的網頁問題我來解決-極客網頁設計"
          placeholder="empty"
          loading="lazy"
          width={800}
          height={800}
        ></Image>
      </div>
    </div>
  </div>
);
