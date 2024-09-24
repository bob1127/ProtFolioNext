"use client";

import React from "react";
import Script from "next/script";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import SpringModel from "../../components/SpringModal/page.jsx";
import Img01 from "../../public/images/Untitled-Camera.png";
// import Inner from "../../components/Inner/index.jsx";
// import Styles from "../../styles/portfolio.module.css";
import { useState, useEffect } from "react";
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
    <div>
      <div className="hero-section border border-black mb-[30px]">
        <div className="title py-[100px] flex flex-col justify-center items-center mt-[120px] item-title">
          <h1 className="text-[70px] text-center mb-[30px]">
            禪普科技官網建置 - ZensorRD
          </h1>

          <div className="w-[500px] mx-auto">
            <Marquee className="text-[20px] mx-auto border w-[700px] flex mt-1">
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                Bootstrap
              </div>
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                Jquery
              </div>
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                SCSS
              </div>
              <div className="mark mx-3 px-[30px] py-1 text-white text-center rounded-[30px] text-[14px] bg-blue-700 border-2 border-black">
                Seo optimizarion
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex md:flex-row flex-col ">
          <div className="img overflow-hidden  w-full  md:w-1/2 h-[600px] ">
            <img
              src="/images/portfolio02.png"
              className="hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="img  md:w-1/2 w-full h-[600px] overflow-hidden">
            <img
              src="/images/portfolio01.png"
              className="hover:scale-105 duration-500"
              alt=""
            />
          </div>
        </div>
        <section className="section-photograph px-[100px]">
          <div>
            <img src="" alt="" />
          </div>
        </section>
        <section className="px-[100px] py-[100px] portfolio-content flex">
          <div className="flex">
            <div className="txt w-1/2">
              <h2 className="text-[90px] leading-[100px] font-black text-[#545454]">
                Banner Design
              </h2>
              <p className="text-[20px]">
                <br></br>
                專注於設計符合公司形象知Banner、Img
              </p>
            </div>
            <div className="img w-1/2 overflow-hidden border border-black">
              <Marquee>
                <div>
                  <img
                    src="/images/ECWP100-carousel-index.webp"
                    className="w-[600px] h-auto"
                    alt=""
                  />
                  <img
                    src="/images/06.webp"
                    className="w-[600px] h-auto"
                    alt=""
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </section>
        {/* <img
          className="w-full mx-auto my-[100px]"
          src="https://www.threedee.design/images/Cartoon_Character/All.webp"
          alt=""
        /> */}
      </div>
    </div>
  );
}

// reportWebVitals();
