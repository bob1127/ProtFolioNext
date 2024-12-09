import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      // title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "我該如何做seo規劃",
      link: "/blog-01",
    },
    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      // title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "我該如何做seo規劃",
      link: "/blog-01",
    },

    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      // title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "我該如何做seo規劃",
      link: "/blog-01",
    },
    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      // title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "我該如何做seo規劃",
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
