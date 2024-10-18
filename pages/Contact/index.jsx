// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
        title="關於我們-極客網頁設計｜JEEK WEBDESIGN"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "關於我們-極客網頁設計｜JEEK WEBDESIGN",
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
      <div className="flex flex-col ">
        {/* <Image
          loading="lazy"
          placeholder="empty"
          className="border border-black"
          width={1200}
          height={700}
          src="/images/contact關於我們heroImg-極客網頁設計.jpg"
        ></Image> */}
        <div className="form rounded-[40px]  mt-[-100px]   flex h-[170vh] bg-[#6199dd]">
          <div className="left w-full md:w-[40%] p-[40px] h-full items-center flex justify-center">
            <div className="txt flex flex-col items-center justify-center">
              <h3 className="text-[40px] font-bold">Contact Us</h3>
              <p className="text-[30px] font-bold  mt-3">
                聯繫Jeek-極客網頁設計
              </p>
              <span className="text-[14px] mt-[60px] border border-black   bg-white  p-8">
                如果您聯繫我並無即時收到回覆，請耐心等候。Jeek會盡快回覆您！！！
                如您有興趣聯絡 錢可先 餐前
              </span>
              <a
                href="/terms"
                data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                className=" mt-4 button-wrapper w-inline-block"
              >
                <div className="button-layout">
                  <p href="/about" className="button-text" style={{}}>
                    合作須知
                  </p>
                  <div className="button-bg" style={{}} />
                </div>
                <div className="button-icon-block">
                  {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="button-icon"
                            style={{}}
                          /> */}
                </div>
              </a>
            </div>
          </div>
          <div className="right w-full md:w-[60%] h-[100vh] p-10">
            <div className="from flex justify-center items-center  overflow-y-scroll h-[170vh] bg-white p-[40px] border-black-rgba  border">
              <NewsletterForm />
            </div>
          </div>
        </div>
        {/* <div className="py-[80px]">
          <NewsletterForm />
        </div> */}
        {/* <div className="flex flex-col gap-2">
          <Accordion isCompact>
            <AccordionItem
              key="1"
              aria-label="合約內容範本"
              className="flex flex-col items-center justify-center"
              title="合約內容範本"
            >
              <Image
                src="/images/合約內容範本01-極客網頁設計.png"
                width={500}
                loading="lazy"
                placeholder="empty"
                height={600}
              ></Image>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="報價單範本"
              className="flex flex-col items-center justify-center"
              title="報價單範本"
            >
              <Image
                src="/images/報價單範本-極客網頁設計.png"
                width={500}
                loading="lazy"
                placeholder="empty"
                height={600}
              ></Image>
            </AccordionItem>
          </Accordion>
        </div> */}
      </div>
    </div>
  );
}

// reportWebVitals();
