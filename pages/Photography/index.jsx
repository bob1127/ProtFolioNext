// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
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

import Marquee from "react-fast-marquee";

import GsapText from "../../components/RevealText/index";
import SwiperScroll01 from "../../components/SwiperScroll01/page.jsx";
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
  const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
      <div
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
      >
        <div className="relative h-[100vh] xl:h-[80vh] lg:h-[150vh]">
          <StickyImage imgUrl={imgUrl} />
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>
        {children}
      </div>
    );
  };
  const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
        }}
        ref={targetRef}
        className="sticky z-0 overflow-hidden rounded-3xl"
      >
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity,
          }}
        />
      </motion.div>
    );
  };
  const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    );
  };

  const IMG_PADDING = 12;
  const ExampleContent = () => (
    <div className="mx-auto  mt-[-50px] md:mt-[100px]   px-4 pb-24 pt-12 flex flex-col ">
      <section className="section-embla my-[60px  md:my-0"></section>
      <section className="section_portfolio mx-auto max-w-[2000px] w-full flex flex-wrap justify-center items-center">
        {/* <a href="https://www.zensorrd.com">
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a>
      <a href="">
        {" "}
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a>
      <a href="">
        {" "}
        <Image
          src="/images/portfolio/portfolio-02.png"
          className=""
          placeholder="empty"
          alt="website_portfolio01"
          width={350}
          height={250}
        ></Image>
      </a> */}
      </section>
    </div>
  );
  //compare table
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("/public/Animation.json"),
    renderer: "canvas",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const webpage = {
    name: "商業攝影-讓您的網站看起來截然不同｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站、3D建模、網站改版、台中網頁設計 - 你的創意，我來實踐",
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
    <div className=" py-[100px] flex  p-0 m-0 justify-center  items-center">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          property="og:title"
          content="商業攝影-讓您的網站看起來截然不同｜極客網頁設計"
        />
        <meta property="og:description" content="" />
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
        title="商業攝影-讓您的網站看起來截然不同-產品攝影、商品去背、形象圖後製、精緻banner製作｜極客網頁設計"
        description=""
        openGraph={{
          title:
            "商業攝影-讓您的網站看起來截然不同-產品攝影、商品去背、形象圖後製、精緻banner製作｜極客網頁設計",
          description: "",
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
        <section>
          <div>
            <div className="mt-[50px]  bg-[#ffffff]">
              <TextParallaxContent
                imgUrl="/images/WebOptimization-Hero-Img.png"
                subheading="Best Web Experience"
                heading={
                  <span className="text-[32px] md:text-[40px] lg:text-[60px]">
                    提供您商業攝影<br></br>讓您的網站看起來截然不同
                  </span>
                }
              >
                <ExampleContent />
              </TextParallaxContent>
            </div>
          </div>
        </section>
        <div>
          <div className="w-layout-grid px-[0px] xl:px-[160px] about-content">
            <div
              id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
              className="about-grid-content"
            >
              <h2 className="heading is-medium-title">"商業/產品攝影"</h2>

              <p className=" text-[16px] leading-normal text-left ">
                <h3>為什麼產品攝影對於網頁設計很重要？</h3>
                在數位時代，產品攝影不僅僅是展示商品，更是吸引顧客的關鍵。想像一下，當你進入一個網頁，看到的第一眼就是高質感的產品圖片，這不僅能立即抓住你的注意力，還能提升你對品牌的信任感。好的產品攝影能清晰展示細節、顯示產品的實際效果，讓顧客感受到真實的購買體驗。這種視覺上的吸引力直接影響購買決策，讓你的產品在眾多競爭對手中脫穎而出。所以，投資高品質的產品攝影，是提升網頁設計效果的明智選擇！
              </p>
            </div>

            <div
              id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
              className="about-grid-image"
            >
              <div className="reveal-image-trigger">
                <img
                  loading="lazy"
                  alt="Portrait of the team"
                  src="/images/商業攝影_產品_banner-極客網頁設計.png"
                  sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                  className="cover-image"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
                <div
                  className="bg-for-animation"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
