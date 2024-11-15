// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );
import Head from "next/head";
import Image from "next/image.js";
import NewsletterForm from "../../components/NewsletterForm.jsx";
import { NextSeo } from "next-seo";
import mailchimp from "../../components/mailchimp/page.jsx";
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const webpage = {
    name: "聯絡我們｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、台中網頁設計 - 你的創意，我來實踐",
    description:
      "Next.js 和 WordPress 結合打造無頭網站，能提升網站性能、內容管理和開發靈活性。透過靜態生成（SSG）、伺服器端渲染（SSR）和 CDN 優化，網站速度顯著提高，並透過 API 支援多渠道發佈。使用無頭架構，開發者可自由設計前端，同時利用 WordPress 強大的內容管理功能。相比傳統 WordPress 網站，無頭網站具有更好的 SEO 和安全性，適合需要高效性能和自訂設計的專案。",
    url: "https://www.jeek-webdesign.com.tw/blog-10",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "i.com",
    },
  };
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
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="聯絡我們-極客網頁設計" />
        <meta
          property="og:description"
          content="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png"
        />
        <meta property="og:url" content="https://www.jeek-webdesign.com.tw" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: webpage.name,
              description: webpage.description,
              url: webpage.url,
              publisher: {
                "@type": "Organization",
                name: webpage.name,
                logo: {
                  "@type": "ImageObject",
                  url: webpage.logo,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: webpage.contact.phone,
                  contactType: "Customer Service",
                  email: webpage.contact.email,
                },
              },
            }),
          }}
        />
      </Head>
      <NextSeo
        title="聯絡我們-極客網頁設計｜JEEK WEBDESIGN"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "聯絡我們-極客網頁設計｜JEEK WEBDESIGN",
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
      <div className="flex  px-[16px] md:px-[40px] flex-col  ">
        {/* <Image
          loading="lazy"
          placeholder="empty"
          className="border border-black"
          width={1200}
          height={700}
          src="/images/contact關於我們heroImg-極客網頁設計.jpg"
        ></Image> */}
        <div className="form rounded-[40px] bg-white  overflow-visible lg:overflow-hidden flex-col  py-[25px] md:flex-row  flex h-auto  border-2 border-black  px-[10px] md:px-[25px]">
          <div className="left w-full md:w-[40%] p-0 md:p-[40px] h-full items-center flex-col flex justify-center">
            <div className="txt flex flex-col items-center justify-center">
              <p className="text-[30px] font-bold  mt-3">
                聯繫Jeek-極客網頁設計
              </p>
              <span className="text-[14px] mt-[60px] border border-black   bg-white  p-8">
                如果您聯繫我並無即時收到回覆，請耐心等候。Jeek會盡快回覆您！！！
              </span>
              <div className="flex  justify-center items-center">
                <a
                  href="/terms"
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  className="button-wrapper  w-inline-block mb-5 mt-4"
                >
                  <div className="button-layout">
                    <p className="button-text" style={{}}>
                      合作須知
                    </p>
                    <div className="button-bg" style={{}} />
                  </div>
                  <div className="button-icon-block">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="button-icon"
                      style={{}}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="right w-full md:w-[60%]    py-10">
            <div className="from flex justify-center items-center  overflow-y-scroll md:h-auto h-[170vh] bg-white p-2 xl:p-[40px] border-black-rgba ">
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
