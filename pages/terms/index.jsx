// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";
import { Accordion, AccordionItem } from "@nextui-org/react";
import GsapText from "../../components/RevealText/index";

// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );
import Image from "next/image.js";
import NewsletterForm from "../../components/NewsletterForm.jsx";
import { NextSeo } from "next-seo";
import mailchimp from "../../components/mailchimp/page.jsx";
export default function Home() {
  //   const plane = useRef(null);
  //   const maxRotate = 45;

  //   const manageMouseMove = (e) => {
  //     const x = e.clientX / window.innerWidth;
  //     const y = e.clientY / window.innerHeight;
  //     const perspective = window.innerWidth * 4;
  //     const rotateX = maxRotate * x - maxRotate / 2;
  //     const rotateY = (maxRotate * y - maxRotate / 2) * -1;
  //     plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  //   };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,";

  return (
    <div className=" py-[100px] flex justify-center  items-center">
      <NextSeo
        title="合作須知-極客網頁設計｜JEEK WEBDESIGN"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "合作須知-極客網頁設計｜JEEK WEBDESIGN",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.example.com/og-home.jpg",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
      />
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <span
            data-aos="fade-up"
            data-aos-delay="400"
            className="  md:text-[30px] text-[26px] xl:text-[50px] mx-auto"
            style={{
              marginBottom: 30,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <GsapText
              text=" 合作須知-terms "
              lineHeight="70px"
              id="text2"
              fontSize="60px"
            />

            {/* "為什麼要選擇自由接案者？" */}
          </span>
        </div>
        <div className="terms-wrap border-black bg-white border w-[80vw] mx-auto p-10 rounded-xl">
          <h2>2.確認雙方需求 (Scope of Work)</h2>
          <div className="grid bg-gray-100 p-10 grid-cols-2 gap-2">
            <div className="content">
              <b className="text-[20px]">Step01</b>
              <p className="text-[20px]">確認雙方需求</p>
              <Image
                src="/images/terms/確認合約需求-極客網頁設計.png"
                loading="lazy"
                width={500}
                height={500}
                placeholder="empty"
                alt="step1確認雙方需求"
              ></Image>
            </div>
            <div className="content">
              <b className="text-[20px]">Step02</b>
              <p className="text-[20px]">支付訂金</p>
              <Image
                src="/images/terms/支付訂金-極客網頁設計.png"
                loading="lazy"
                width={300}
                height={500}
                placeholder="empty"
                alt="step02. 支付訂金-極客網頁設計"
              ></Image>
            </div>
            <div className="content">
              <b className="text-[20px]">Step03</b>
              <p className="text-[20px]">開始製作</p>
            </div>
            <div className="content">
              <b className="text-[20px]">Step04</b>
              <p className="text-[20px]">結案</p>
            </div>
          </div>

          <h2>2.服務範圍 (Scope of Work)</h2>
          <h2>3.項目時間表 (Timeline)</h2>
          <h2>4.付款條款 (Payment Terms)</h2>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
