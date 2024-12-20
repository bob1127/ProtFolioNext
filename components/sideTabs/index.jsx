import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import MobileHeader from "../MobileHeader/page";

export const SlideTabsExample = () => {
  return (
    <div>
      <SlideTabs />
    </div>
  );
};
const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [marginTop, setMarginTop] = useState("-40px");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    updateIsDesktop(); // Set initial state
    window.addEventListener("resize", updateIsDesktop);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isDesktop) {
        // Only apply scroll effect on desktop
        if (window.scrollY < lastScrollY) {
          setMarginTop("-60px"); // Scroll up
        } else {
          setMarginTop("0px"); // Scroll down
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, [isDesktop]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動
    });
  };
  return (
    <motion.div
      className="w-full px-[20px] 2xl:w-[65%] fixed top-0 border border-black lg:w-[90%]  md:relative md:border-[#a2a2a2] z-[999999999] mx-auto flex justify-center items-center bg-[#181818] md:bg-white rounded-b-[20px] sm:rounded-b-[20px]"
      initial={isDesktop ? { marginTop: "-40px" } : {}}
      animate={isDesktop ? { marginTop } : {}}
      transition={
        isDesktop ? { type: "spring", stiffness: 300, damping: 20 } : {}
      }
    >
      <div className="w-1/2 sm:w-[15%] flex justify-start items-center">
        <a className="p-1" href="/">
          <Image
            src="/images/company-logo/JeekLogo-white.png"
            placeholder="empty"
            loading="eager"
            className="block md:hidden"
            width={40}
            height={40}
            alt="company-logo"
          ></Image>
          <Image
            className="hidden md:block"
            src="/images/company-logo/JeekLogo_web_title.png"
            placeholder="empty"
            loading="eager"
            width={40}
            height={40}
            alt="company-logo"
          ></Image>
        </a>
      </div>
      <div className="w-[70%] flex justify-center items-center md:hidden">
        <div className="w-full border py-1 border-[#ffaf37] rounded-[30px]">
          <Marquee>
            <p className="text-white"> Welcome to → Jeek Website Design。</p>
          </Marquee>
        </div>
      </div>
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="mx-auto hidden sm:flex pt-2 w-[70%] rounded-[40px] justify-center items-center backdrop-blur-md p-1"
      >
        <a href="/">
          <Tab setPosition={setPosition}>首頁</Tab>
        </a>
        <a href="/project">
          <Tab setPosition={setPosition}>精選案例</Tab>
        </a>
        <a href="/blogs">
          <Tab setPosition={setPosition}>Blog</Tab>
        </a>
        <a href="/quotation">
          <Tab setPosition={setPosition}>專案報價</Tab>
        </a>
        <a href="/service">
          <Tab setPosition={setPosition}>服務內容</Tab>
        </a>
        <a href="/technology">
          <Tab setPosition={setPosition}>使用技術</Tab>
        </a>
        <Cursor position={position} />
      </ul>
      <div className="w-1/2 flex justify-end sm:w-[15%] pr-4 relative">
        <div className="block md:hidden">
          <MobileHeader />
        </div>
        <a
          href="/contact"
          className="border hidden md:flex justify-center items-center text-center text-white bg-black rounded-[30px] py-2 px-5"
        >
          Contact
        </a>
      </div>
      <div className="md:fixed bottom- z-[99999] bg-white/60 bg-blue-50  px-2 border sm:top-[30%] md:flex  flex-row  w-[94vw] mx-auto sm:mx-0   top-[85vh] h-[90px]  sm:h-auto sm:bottom sm:right-[20px] sm:w-auto  hidden sm:flex-col justify-center items-center right-[0px] border-[#b0b0b0] rounded-xl">
        <a href="https://line.me/ti/p/@690cbklx">
          <div className="flex flex-col justify-center items-center my-2">
            <Image
              src="/images/icon/line.png"
              placeholder="empty"
              loading="lazy"
              alt="line-logo"
              width={40}
              height={40}
            ></Image>
            <span className="text-[14px]">LINE</span>
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61568671321317">
          <div className="flex flex-col justify-center items-center my-2">
            <Image
              src="/images/icon/facebook.png"
              placeholder="empty"
              loading="lazy"
              alt="fb-logo"
              width={40}
              height={40}
            ></Image>
            <span className="text-[14px]">FB</span>
          </div>
        </a>
        <div className="w-[45px] h-[45px] overflow-hidden">
          <Marquee>
            <div className="w-[50px]"></div>
            <Image
              width={50}
              height={50}
              src="/images/fantastic_hare_36410_Fast_flying_white_plane_hand_drawn_style_c_1e2316e0-d9a9-451f-bf05-a429dbf362b4.png"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <b>Jeek Design</b>
            <div className="w-[50px]"></div>
          </Marquee>
        </div>
      </div>
      <div className="hidden relative  w-[80px] h-[80px] group duration-500  md:block">
        <button
          onClick={scrollToTop}
          className="absolute rotate-[64deg] duration-300 hidden group-hover:block w-[80px] h-[80px] z-[9999999999]"
          aria-label="Scroll to top"
        >
          <Image
            src="/images/fantastic_hare_36410_Fast_flying_aircraft_hand-drawn_style_cart_ea4c3909-4772-4b34-9443-c83a2a8a2ec0.png"
            alt="side-img-mobile"
            placeholder="empty"
            loading="lazy"
            width={80}
            height={80}
          />
        </button>
        <div className="absolute  duration-500   top-0 left-0 w-[80px]  h-[80px] block z-[9] group-hover:hidden">
          <Image
            alt="sidebar-img"
            width={80}
            className=""
            loading="lazy"
            placeholder="empty"
            height={80}
            src="/images/fantastic_hare_3641jjjj0_The_pilot_opened_his_parachute_and_fell_ca_d7cc4a36-b482-4115-bf95-27224729f4b4-2.png"
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative hover:text-white z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 hover:text-white rounded-[40px] bg-[#000000] md:h-12"
    />
  );
};

// Export components
export default SlideTabsExample;
export { SlideTabs, Tab, Cursor };
