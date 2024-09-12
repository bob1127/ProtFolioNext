"use client";

import React from "react";
import Script from "next/script";
import Head from "next/head";

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
        <div className="title  flex flex-col justify-center items-center mt-[120px] item-title">
          <h1 className="text-[40px] text-center mb-[30px]">
            Anonymouz - <span className="text-black">3D cartoon character</span>
          </h1>
          <p className="text-[20px] mt-1">
            Fully rigged modular 3D cartoon characters for your next project
          </p>
        </div>
        <img
          className="w-full mx-auto my-[100px]"
          src="https://www.threedee.design/images/Cartoon_Character/All.webp"
          alt=""
        />
      </div>
    </div>
  );
}

// reportWebVitals();
