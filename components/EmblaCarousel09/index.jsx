import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/SEO優化行銷-極客網頁設計.png",
      title: "SEO行銷",
      description: "網頁結構優化｜網頁速度優化｜使用者體驗優化｜網頁內容",
      link: "/WebOptimization",
    },
    {
      image: "/images/網頁設計_我們的服務內容-極客網頁設計.png",
      title: " 網頁設計",
      description: "網頁版型設計｜客製化網頁｜一頁式網頁｜購物網站",
      link: "/WebOptimization",
    },
    {
      image: "/images/商業產品攝影-極客網頁設計.png",
      title: " 形象設計",
      description: "  3D商品建模｜形象攝影｜商品攝影",
      link: "/3dProduct",
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
