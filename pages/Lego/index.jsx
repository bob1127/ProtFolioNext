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
    <div className="bg-[#ffdf3d] h-[400vh]">
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
      <div className="main-carousel flex-col flex justify-center w-full">
        <img
          className="w-[900px] mx-auto"
          src="http://clickbrick.info/resource/img/minifig/captain_roger/16.jpg"
          alt=""
        />
        <div className="content  h-[600px] bg-white mx-auto mt-[-50px] w-[80%]">
          <div className="title">
            <h3 className="text-[#dc3f3f] font-bold text-[30px] text-center">
              NEWS
            </h3>
            <p className="text-[16px] text-center">
              限定品情報、イベント情報をお知らせします。
            </p>
          </div>
          <div className="items flex  flex-wrap md:flex-row ">
            <div className="item flex flex-col w-1/3 p-10 justify-center items-center">
              <div className="img border border-black relative">
                <div className="txt z-[999999] absolute top-[40%] left-[40%]">
                  <p className="text-[20px] text-white">INFO</p>
                </div>
                <img
                  className="md:w-full w-[300px]"
                  src="http://clickbrick.info/system/wp-content/uploads/2018/01/untitled2.png"
                  alt=""
                />
              </div>
              <div className="txt  mx-auto">
                <a className="border-b-1 w-2/3 mx-auto border-black">
                  【11月25日スタート!!】レゴ®ストアで25,000円(税込)以上お…
                </a>
              </div>
            </div>
            <div className="item flex flex-col w-1/3 p-10 justify-center items-center">
              <div className="img">
                <img
                  className="md:w-full w-[300px]"
                  src="http://clickbrick.info/system/wp-content/uploads/2018/01/untitled2.png"
                  alt=""
                />
              </div>
              <div className="txt  mx-auto">
                <a className="border-b-1 w-2/3 mx-auto border-black">
                  【11月25日スタート!!】レゴ®ストアで25,000円(税込)以上お…
                </a>
              </div>
            </div>
            <div className="item flex flex-col w-1/3 p-10 justify-center items-center">
              <div className="img">
                <img
                  className="md:w-full w-[300px]"
                  src="http://clickbrick.info/system/wp-content/uploads/2018/01/untitled2.png"
                  alt=""
                />
              </div>
              <div className="txt  mx-auto">
                <a
                  href="/"
                  className="border-b-2 leading-normal w-2/3 mx-auto border-black"
                >
                  【11月25日スタート!!】レゴ®ストアで25,000円(税込)以上お…
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
