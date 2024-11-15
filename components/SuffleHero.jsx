import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full 2xl:w-[80%] mx-auto px-[20px] md:px-[30px] xl:px-[150px]  mb-[-500px] pt-[100px] grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
      <div className="p-2 md:p-5">
        {/* <span className="block mb-4 text-xs md:text-sm text-[#ffb74b] font-medium">
          Design
        </span> */}
        <h2 className="col-span-1  leading-normal text-[2.5rem] font-bold md:col-span-4">
          品牌與企業形象規劃
        </h2>
        <p className="text-base w-full md:w-[80%] md:text-lg text-slate-700 my-4 md:my-6">
          我們將網站設計、品牌策略、行銷推廣與視覺影像無縫結合，為您提供全面的網路解決方案，包括平面設計、Logo設計、3D產品建模、商品拍攝與後製等多元服務，我們助您打造引人注目的品牌形象，提升市場競爭力。
        </p>
        {/* <button className="bg-[#1a1a1a] mx-auto sm:mx-0 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://www.jeek-webdesign.com.tw/images/3d%E7%94%A2%E5%93%81%E6%A8%A1%E5%9E%8B06-%E6%A5%B5%E5%AE%A2%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%7CBlender3D.png",
  },
  {
    id: 2,
    src: "https://www.jeek-webdesign.com.tw/images/3dmodel02.webp",
  },
  {
    id: 3,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 4,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 5,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 6,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 7,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 8,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 9,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 10,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 11,
    src: "https://www.jeek-webdesign.com.tw/images/平面/平片設計-05.webp",
  },
  {
    id: 12,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-03.png",
  },
  {
    id: 13,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-06.png",
  },
  {
    id: 14,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-07.png",
  },
  {
    id: 15,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-08.png",
  },
  {
    id: 16,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-09.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
