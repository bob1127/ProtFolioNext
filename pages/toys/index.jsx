"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import ToyHeroCarousel from "../../components/ToyHeroCarousel/page.jsx";
// import Inner from "../components/Inner/index.jsx";
import Script from "next/script";
// import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
// import Navbar from "../components/sideTabs/index.jsx";
// import Footer from "../components/Footer/index.jsx";
// import Marquee from "react-fast-marquee";
import AOS from "aos";
import { NextSeo } from "next-seo";

import Marquee from "react-fast-marquee";
// import Nav from "../components/Navbar/page.jsx";
import { useEffect } from "react";
import Emblacarousel from "../../components/EmblaCarousel01/EmblaCarousel.jsx";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 延遲 300ms 來啟動動畫
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 清除計時器
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[#f0f2f3] h-[400vh]">
      <div className="nav shadow-md z-[9999999] px-[30px] fixed top-0 left-[12%] w-[80%] bg-white py-[20px] border border-t-none border-[#a1a1a1] flex justify-center rounded-b-[20px]">
        <div className="logo w-[20%] border border-black">
          <img
            className="w-[300px]"
            src="https://gacha-lab.tech/assets/img/common/logo.svg"
            alt=""
          />
        </div>
        <div className="links items-center w-[80%] justify-end flex">
          <a href="" className="font-bold mx-2 text-[14px]">
            自慢のプロダクト
          </a>
          <a href="" className="font-bold mx-2 text-[14px]">
            自慢のプロダクト
          </a>
          <a href="" className="font-bold mx-2 text-[14px]">
            自慢のプロダクト
          </a>
          <a
            href=""
            className="bg-[#db4c4c] inline-block flex justify-center items-center mx-1 py-2 text-white border-2 rounded-[40px] border-black px-3"
          >
            最新情報
          </a>
          <a
            href=""
            className="bg-[#343434] inline-block flex justify-center items-center mx-1 py-2 text-white border-2 rounded-[40px] border-black px-3"
          >
            お問い合わせ
          </a>
        </div>
      </div>
      <div>
        <div className="hero-img mt-[70px]">
          <ToyHeroCarousel />
        </div>
      </div>
      <section className="section-01 relative h-[100vh]">
        <div className=" absolute h-full top-[40%] left-0">
          <Marquee>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
            <p className="text-[#bcbcbc] text-[150px] font-bold">HELLO</p>
          </Marquee>
        </div>
        <div className="circle z-[99] rounded-full w-[500px] h-[500px]  bg-[#52b4ff] absolute left-[100px] flex justify-center items-center top-[100px]">
          <div className="txt ml-6">
            <b data-aos="fade-up" className="text-white text-[32px] font-bold">
              Catcha !
            </b>
            <br></br>
            <b
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-white text-[32px] font-bold"
            >
              Catcha !
            </b>
            <br></br>{" "}
            <b
              data-aos-delay="500"
              data-aos="fade-up"
              className="text-white text-[32px] font-bold"
            >
              Catcha !
            </b>
            <br></br>
            <b
              data-aos-delay="800"
              data-aos="fade-up"
              className="text-white text-[32px] font-bold"
            >
              Catcha !
            </b>
          </div>
        </div>
        <div className="img hover:scale-105 duration-300 hover:rotate-2 absolute z-[99999999] top-[200px] left-[40px]">
          <img
            className="w-[300px]"
            src="https://gacha-lab.tech/assets/img/home/contact_intro.png"
            alt=""
          />
        </div>
      </section>
      <div className="circular-marquee items-center justify-center  rounded-full flex   ">
        <div className="marquee-content">
          <img
            className="w-[180px]"
            src="https://gacha-lab.tech/assets/img/common/cta_img03.png"
            alt=""
          />
          {/* Repeat or add more items as needed */}
        </div>
      </div>
      <section className="section-footer relative">
        <div className="circle-bg bg-[#dcdcdc] absolute left-[-100px] top-[110px]  w-[1700px] h-[1700px] rounded-full "></div>
        <div className="content w-full absolute px-[300px] z-[9999]">
          <div className="top block border border-black flex flex-row w-full justify-end">
            <img
              className="w-[300px]"
              src="https://gacha-lab.tech/assets/img/common/logo.svg"
              alt=""
            />
          </div>
          <div className="bottom">
            <div className="left">
              <div className="wrap flex px-0 xl:px-[60px] justify-start  bg-white py-[100px] rounded-xl w-[100%] items-center flex-col py-4">
                <b className="text-[30px] font-bold">
                  通知はまだ届いていません
                </b>
                <br></br>
                <p>ポストがあるとここに表示されます。</p>
                <a
                  href=""
                  className="rounded-[40px] flex justify-center items-center w-[150px] py-[15px] mt-[20px] text-[20px] bg-[#52b4ff] text-white px-4 "
                >
                  more
                </a>
              </div>
            </div>
            <div className="right"></div>
            {/* <Emblacarousel /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

// reportWebVitals();
