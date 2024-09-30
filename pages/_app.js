import dynamic from 'next/dynamic';
import Script from 'next/script';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from "@nextui-org/react";
import Footer from '../components/Footer/index.jsx';
import Marquee from 'react-fast-marquee';
import Head from 'next/head';
import AOS from 'aos';
import Nav from '../components/Navbar/page.jsx'
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import 'aos/dist/aos.css'; // AOS CSS file import
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../next-seo.config.js';

const PhysicsAnimationApp = dynamic(
  () => import("../components/PhysicsAnimation/app.jsx"),
  { ssr: false }
);

export default function MyApp({ Component, pageProps, router }) {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: 'ease-in-out', // Animation easing
      once: true, 
    });
  }, []);

  useEffect(() => {
    // Load Tawk.to script dynamically
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/66f7d854e5982d6c7bb5fba5/1i8s2a2np';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);
    
    return () => {
      // Cleanup the script on unmount
      document.body.removeChild(s1);
    };
  }, []);

  const noNavbarRoutes = ['/toys' , '/Lego','/toys02']; // Routes without Navbar
  const nophyRoutes = ['/toys' ,'toys02' , '/Lego']; // Routes without PhysicsAnimationApp

  return (
    <html lang="zh-TW" className='bg-white'>
      <Head>
        <link rel="icon" type="image/webp" href="/images/JeekLogo.webp" />
      </Head>
      <div>
        {!noNavbarRoutes.includes(router.pathname) && <Nav />}
      </div>
      <div className='main overflow-hidden'>
        <div className='max-w-[1920px] mx-auto'>
          <NextUIProvider>
            <AnimatePresence mode='wait'>
              <DefaultSeo {...defaultSEOConfig} />
              <Component key={router.route} {...pageProps} />
              <div className='border-t-2 border-black'>
                {!nophyRoutes.includes(router.pathname) && <PhysicsAnimationApp />}
              </div>
              <Marquee>
                <a href='/about'>
                  <div className='border-3 bg-blue-700 border-white'>
                    <p className='text-white font-normal w-full p-2'>
                      JEEK像您的好夥伴一樣，會與您一同探索、設計，打造出真正適合您的網站和品牌形象。不管您是 <span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>"餐飲業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>"美業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>"中小企業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>"服飾業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>"傳統產業"</span>，我們都在這裡，為您提供簡單、實用且有效的解決方案。
                    </p>
                  </div>
                </a>
              </Marquee>
              <div className="bg-[#181818] z-[99999] static">
                <div className="footer-layout z-[99999] static">
                  <div className="footer-wrapper">
                    <div className="main-container">
                      <div id="w-node-_38022ebf-47b1-b5c9-4fe1-6fc4778801c0-cdf922c7" data-w-id="38022ebf-47b1-b5c9-4fe1-6fc4778801c0" className="footre-contact-block">
                        <div className="footer-small-text">Get in touch</div>
                        <a href="#" className="footer-contact-link">bob112722761236tom@gmail.com</a>
                        <a href="#" className="footer-contact-link">0939767977</a>
                      </div>
                      <div id="w-node-b805c6a7-2e25-391b-5d30-1818cdf922cd-cdf922c7" className="footer-main-links">
                        <div data-w-id="6dc4d3f7-1feb-7d1d-eb75-644710288cff" className="footer-main-links-wrapper">
                          <a href="/" className="text-white footer-large-link">更多服務：<p className="text-[15px] text-white">如果你有更多想法，歡迎找我討論</p></a>
                          <a href="/" className="footer-large-link">個人工作室<p className="text-[15px] text-white">個人接案，溝通時間彈性</p></a>
                          <a href="/" className="footer-large-link">價格<p className="text-[15px] text-white">價格功能 詳細 皆可討論</p></a>
                        </div>
                        <div data-w-id="60710c24-c4e8-9d65-10d7-1ada286361b6" className="footre-page-links">
                          <a href="/" className="simple-link-blue">購物網站</a>
                          <a href="/about" className="simple-link-blue">形象網站</a>
                          <a href="/journal" className="simple-link-blue">RWD網站</a>
                          <a href="/store" className="simple-link-blue">Seo行銷</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-utility-section z-[99999] static">
                  <div className="main-container align-center">
                    <div id="w-node-_4f1c3f96-9351-ef46-d1ee-e61c42e6a5bd-cdf922c7" className="w-dyn-list">
                      <Marquee><div className='text-white'>JEEK Design</div></Marquee>
                    </div>
                    <div id="w-node-_4b3c50e8-fd47-cca7-b90c-0c893a2a7de9-cdf922c7" className="footer-utility-wrapper">
                      <div className='text-white flex'>
                        <p className='text-white mx-2'>DM</p>
                        <p className='text-white mx-2'>Banner</p>
                        <p className='text-white mx-2'>Website</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </NextUIProvider>
        </div>
      </div>
    </html>
  );
}
