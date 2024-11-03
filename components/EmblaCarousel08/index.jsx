import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/shopping.png",
      title: "電商平台的高抽成",
      description:
        "電商平台手續費越抽越多？選擇我們的網頁設計服務，擺脫高額手續費的束縛！",
      link: "/service",
    },
    {
      image: "/images/browser.png",
      title: " 對現有網站不滿意",
      description:
        " 您的網站設計過時，技術已落後趨勢，缺乏維護，這可能正拖累您的排名和企業盈利",
      link: "/blog-04",
    },
    {
      image: "/images/shopping-online.png",
      title: " 你想完整收集客戶資料，再行銷嗎？",
      description:
        "  擁有獨立網站，完整掌握客戶數據，實現精準行銷、提升轉化率，建立長期品牌關係，持續創造價值。",
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
