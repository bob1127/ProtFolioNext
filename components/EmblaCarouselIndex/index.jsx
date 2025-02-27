import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/網頁設計_我們的服務內容-極客網頁設計.png",
      title: "網頁結構優化分析",
      description: "使用工具快速找出您網站結構漏洞",
      link: "/blog-01",
    },
    {
      image: "/images/對現有網站不滿意.png",
      title: "網頁客製化設計",
      description: "不想再跟別人的網站一樣了！！！",
      link: "/blog-01",
    },

    {
      image: "/images/3dmodel05.png",
      title: "3D建模",
      description: "做出你的交互式網站，走在趨勢前沿",
      link: "/blog-01",
    },
    {
      image: "/images/exp1.svg",
      title: "近期專案",
      description: "近期規劃中網站、完成網站",
      link: "/blog-01",
    },
    // Add more slides as needed
  ];

  return (
    <>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </>
  );
};

export default App;
