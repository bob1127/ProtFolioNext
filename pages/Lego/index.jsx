"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import ToyHeroCarousel from "../../components/ToyHeroCarousel/page.jsx";
// import Inner from "../components/Inner/index.jsx";
import Script from "next/script";
// import "../styles/globals.css";
import Carousel from "../../components/EmblaCarousel05/index.jsx";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
// import Navbar from "../components/sideTabs/index.jsx";
// import Footer from "../components/Footer/index.jsx";
// import Marquee from "react-fast-marquee";
import AOS from "aos";
// import { NextSeo } from "next-seo";
import { NextSeo } from "next-seo";
// import Carousel02 from "../../components/EmblaCarousel06/index.jsx";
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
      <NextSeo
        title="極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "極客網頁設計｜JEEK WEBDESIGN - 你的創意，我來實踐",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.example.com/og-home.jpg",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
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
      <section className=" mt-[30px]  z-[999] bg-[#f7d82d] pt-[100px] h-[100vh]">
        <div className="absolute top-[60%] sm:px-[30px] px-[10px] md:px-[70px] xl:px-[100px] left-[22%] w-2/3 z-[999] ">
          <Carousel />
        </div>
        <div className="relative relative">
          <div className="drag-circle absolute items-center flex justify-center z-[999999] left-[40%] bg-black w-[60px] h-[60px] rounded-full text-white  text-[20px] font-bold">
            Dtag
          </div>

          <div className="circle bg-[#f5f3f0] z-[1] top-[-100px] absolute left-[30%] rounded-full w-[700px] h-[700px]"></div>
          <div className="absolute w-full  left-0 top-0 z-[9]">
            <iframe
              src="https://my.spline.design/untitled-e17fbea8704fb0489b816ed0e8953c2b/"
              frameborder="0"
              width="100%"
              height="500px"
            ></iframe>
          </div>
          <div className="left-txt z-[999] top-[40%] absolute left-[90px]">
            <h1 className="text-[60px] mt-[200px] font-bold">
              庫柏力克熊-限量版
            </h1>
            <p className="text-[26px] font-normal ">Lorem, ipsum dolor sit</p>
            <a
              href=""
              className="bg-blue-900 inline-block w-[120px] py-3  mt-3 inline-block  text-white flex justify-center items-center  rounded-[30px]"
            >
              Nore
            </a>
          </div>
          <div className="left-txt  z-[9999]  top-0 absolute right-[90px]">
            <h1
              data-aos="fade-up"
              className="text-[30px] bg-blue-900 mt-[200px] font-bold text-white"
            >
              限量發售
            </h1>
            <p
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-[20px] font-normal "
            >
              Lorem, ipsum dolor sit
            </p>
            <h1
              data-aos="fade-up"
              className="text-[30px] bg-blue-900 mt-[10px] font-bold text-white"
            >
              現實搶購
            </h1>
            <p
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-[20px] font-normal "
            >
              Lorem, ipsum dolor sit
            </p>

            <a
              href=""
              className="bg-blue-900 inline-block w-[120px] py-3  mt-3 inline-block  text-white flex justify-center items-center  rounded-[30px]"
            >
              More
            </a>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="gallery-carousel">
          <Carousel02 />
        </div>
      </section> */}

      <div className="main-carousel flex-col flex justify-center mt-[150px] w-full">
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
