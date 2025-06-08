import Features from "../features-vertical";
import Section from "../section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "第一步：決定網頁的格外觀",
    content:
      "在你建立網站之前，你必須先確立您網站的風格設計，好的設計風格會加深消費者和客戶的信任度。如果在您完全不了解自己想要什麼，那麼沒關係。你可以先參考別人同性質產業類別的網站，先初步有個概念和規劃，接下來要溝通也會省掉很多不必要的麻煩和時間",
    image: "/images/網頁外觀設計-figma.webp",
  },
  {
    id: 2,
    title: "第二步：選擇你要以什麼方式搭建網站",
    content:
      "這也是非常重要的一個步驟，市面上很多可以選擇的搭建網頁平台，都標榜一條龍簡單架設網頁，最近no-code架站 也是非常的盛行。又或者你想要長期經營打造有自己風格設計和功能未來可擴充性又高的網頁，你也可以請專門人員建置。但不管選擇哪種方式建站，網頁整體結構效能和seo優化都是要持續進行的，這樣才能確保你網站持續的被搜尋引擎排名 ",
    image: "/images/三步驟建立您的網站_開始製作您的網站-極客網頁設計.png",
  },
  {
    id: 3,
    title: "第三步：選擇主機和網域並上線",
    content:
      "選擇您網頁要架設的主機，不管是國內主機還是國外主機，會建議你優先選擇穩定性高且維護人員能及時會付您消息的主機商。畢竟網頁出了問題對於你的公司或企業也是分秒必爭。",
    image: "/images/hosting.webp",
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="網站快速建置-三步驟 ">
      <p className="sm:w-2/3 lg:w-1/2 mx-auto text-center">
        想要有自己的網站，但覺得難嗎？
        別擔心！首先你只要了解自己需求和預算，接下來的步驟，讓你了如何建立網頁：
      </p>
      <Features data={data} />
    </Section>
  );
}
