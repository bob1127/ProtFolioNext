"use client";

import React from "react";
import Script from "next/script";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link.js";
import VanishList from "../../components/VanishList/page.jsx";
import Image from "next/image.js";
import RevealLinks from "../../components/RevealLinks/page.jsx";
import Inner from "../../components/Inner/index.jsx";

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
    <div className="article-outer pt-[70px] px-3">
      <div className="Hero-section border-2 border-black h-[80vh]">
        <Image />
      </div>
      <section className="content h-[200vh]"></section>
    </div>
  );
}

// reportWebVitals();
