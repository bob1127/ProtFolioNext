import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/新網站SEO規劃-極客網頁設計.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "/Blog-01",
    },
    {
      image: "/images/blog/spline3d.png",
      title: "建Spline 3D 入門指南",
      description: "什麼是 Spline 3D？",
      link: "/Blog-04",
    },
    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "https://example.com/1",
    },
    {
      image: "/images/blog/photoshop2024-01.jpeg",
      title: "Photoshop 2024 全新 AI 漸進式填充功能：設計效率的革命性提升",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "https://example.com/1",
    },
    {
      image:
        "/images/blog/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.png",
      title: "分析網頁 SEO 成效指標",
      description: "深入解析 SEO 成效指標，助您精準優化網站",
      link: "https://example.com/1",
    },
    {
      image: "/images/blog/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷.png",
      title: "網頁設計很花錢嗎？",
      description: "不要再認為自己的品牌做網頁行銷很花錢了",
      link: "https://example.com/1",
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
