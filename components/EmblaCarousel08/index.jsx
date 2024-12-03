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
      image: "/images/shopping-online.webp",
      title: " 你想完整收集客戶資料，再行銷嗎？",
      description:
        "  擁有獨立網站，完整掌握客戶數據，實現精準行銷、提升轉化率，建立長期品牌關係，持續創造價值。",
      link: "https://example.com/1",
    },

    // Add more slides as needed
  ];

  return (
    <>
      <div className="txt  px-[25px] flex items-center flex-col justify-center py-4">
        <h2 className="text-black text-[30px] md:text-[50px] text-center xl:text-[70px] font-bold">
          讓您的品牌擁有獨立網站！
        </h2>
        <p className="text-[16px] font-normal text-center w-full mt-4 md:w-1/2 mx-auto md:text-[22px] text-black">
          您是否為其困擾？？
        </p>
      </div>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </>
  );
};

export default App;
