import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/新網站SEO規劃-極客網頁設計.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "/Blog-03",
    },
    {
      image:
        "/images/網頁結構優化01_UI設計_banner設計-極客網頁設計_seo優化.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "/Blog-02",
    },
    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "https://example.com/1",
    },
    {
      image: "/images/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷_網站建置.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "https://example.com/1",
    },
    {
      image: "/images/新網站SEO規劃-極客網頁設計.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
      link: "https://example.com/1",
    },
    {
      image: "/images/網頁設計很花錢嗎-極客網頁設計_網頁seo行銷_網站建置.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "SEO，全名是「搜尋引擎優化」（Search Engine Optimization）.",
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
