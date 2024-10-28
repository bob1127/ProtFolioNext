import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full 2xl:w-[80%] mx-auto px-[20px] md:px-[30px] xl:px-[150px]  pt-[100px] grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
      <div className="p-2 md:p-5">
        <span className="block mb-4 text-xs md:text-sm text-[#ffb74b] font-medium">
          Design
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          品牌與企業形象規劃
        </h3>
        <p className="text-base w-full 2xl:w-[80%] md:text-lg text-slate-700 my-4 md:my-6">
          我們將網站設計、品牌策略、行銷推廣與視覺影像無縫結合，為您提供全面的網路解決方案，包括平面設計、Logo設計、3D產品建模、商品拍攝與後製等多元服務，我們助您打造引人注目的品牌形象，提升市場競爭力。
        </p>
        <button className="bg-[#1a1a1a] text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
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
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://www.jeek-webdesign.com.tw/images/The%20Smallest%20Wireless%20Potentiostat-Power%20On%20Button.webp",
  },
  {
    id: 5,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-04.png",
  },
  {
    id: 6,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-03.png",
  },
  {
    id: 7,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-02.png",
  },
  {
    id: 8,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-01.png",
  },
  {
    id: 9,
    src: "https://www.jeek-webdesign.com.tw/images/bag.png",
  },
  {
    id: 10,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-02.png",
  },
  {
    id: 11,
    src: "https://www.jeek-webdesign.com.tw/images/%E5%B9%B3%E9%9D%A2/%E5%B9%B3%E7%89%87%E8%A8%AD%E8%A8%88-05.png",
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
