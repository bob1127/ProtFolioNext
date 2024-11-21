"use client";
import { useEffect } from "react";

const CircleText = () => {
  useEffect(() => {
    const text = document.querySelector(".circle-text");
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className="circle relative flex items-center justify-center w-52 h-52 rounded-full ">
      <div
        className="logo bg-black absolute w-36 h-36 rounded-full bg-cover bg-center"
        style={{
          backgroundImage: `url("https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo.png")`,
        }}
      ></div>
      <div className="circle-text absolute w-full h-full text-black text-base font-mono animate-[textRotation_8s_linear_infinite] flex items-center justify-center">
        提升您網頁能見度的好夥伴-極客網頁設計｜網頁優化 產品攝影 3d產品
      </div>
    </div>
  );
};

export default CircleText;
