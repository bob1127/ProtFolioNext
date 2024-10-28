import React, { useEffect, useState } from "react";

const TypewriterEffect = () => {
  const phrases = ["客製化網站", "一頁式網站", "購物網站"];
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const sleepTime = 100; // 打字速度
  let curPhraseIndex = 0;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      // 打字過程
      for (let i = 0; i < curWord.length; i++) {
        setText(curWord.substring(0, i + 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10); // 等待一段時間

      // 刪除過程
      for (let i = curWord.length; i > 0; i--) {
        setText(curWord.substring(0, i - 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5); // 等待一段時間

      // 進入下一個短語
      curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
    }
  };

  useEffect(() => {
    writeLoop(); // 開始打字機效果

    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // 光標閃爍

    return () => clearInterval(cursorBlink); // 清理效果
  }, []);

  return (
    <div className="w-full">
      <h2
        className="text-[32px] sm:text-[40px] lg:text-[60px]"
        style={{ textAlign: "center" }}
      >
        網頁設計不用很花錢 💰
        <br /> <br />
        就可以建立您的{" "}
        <span id="typewriter" style={{ color: "#0072ef", fontWeight: "bold" }}>
          {text}
        </span>
        {cursorVisible && (
          <span id="cursor" style={{ color: "#0072ef" }}>
            |
          </span>
        )}
      </h2>
    </div>
  );
};

export default TypewriterEffect;
