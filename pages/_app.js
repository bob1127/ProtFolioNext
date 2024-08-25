import dynamic from 'next/dynamic';

// import Inner from "../components/Inner/index.jsx";
import Script from 'next/script';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from "@nextui-org/react";
import Navbar from '../components/sideTabs/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import Nav from '../components/Navbar/page.jsx'
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import 'aos/dist/aos.css'; // 导入 AOS 的 CSS 文件
// Dynamically import the PhysicsAnimationApp component with ssr set to false
const PhysicsAnimationApp = dynamic(
  () => import("../components/PhysicsAnimation/app.jsx"),
  { ssr: false }
);

export default function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间（毫秒）
      easing: 'ease-in-out', // 动画缓动函数
    });
  }, []);
    return (

      <div className='bg-white'>
        <NextSeo
      title="極客網頁設計-提升搜尋排名，讓您的業務被發現"
      description="我們專注於設計優化的網站，確保您的業務在搜尋引擎中獲得更高曝光率。透過專業的SEO策略，讓您的網站在競爭中脫穎而出，吸引更多目標客戶"
      openGraph={{
        url: 'https://www.zensor.com.tw',
        title: 'Page Title',
        description: 'Page Description',
        images: [
          {
            url: 'https://www.zensor.com.tw/images',
            width: 800,
            height: 600,
            alt: 'Image Alt',
          },
        ],
        site_name: 'Example Site',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />

 <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=668bd563537f10fdc41abec9"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      />

      <Script
        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/js/webflow.765c1394c.js"
        type="text/javascript"
      />
       <Nav/>


        <div className='main overflow-hidden'>
            <div className='max-w-[1920px] mx-auto'>
                <NextUIProvider>
                    <AnimatePresence mode='wait'>
                        {/* <Navbar/> */}
                        <Component key={router.route} {...pageProps} />

                        <div className='border-t-2 border-black'>
                             <PhysicsAnimationApp />
                        </div>
                       
                        <div className=''>
                             {/* <PhysicsAnimationApp/> */}
             
            </div>
             <Marquee>
                <a href='/about' >
                  <div className='border-3 bg-green-500 border-white'>
                  <p className='text-black font-normal w-full p-2'>
                  JEEK像您的好夥伴一樣，會與您一同探索、設計，打造出真正適合您的網站和品牌形象。不管您是 <span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block  text-white font-bold'>"餐飲業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block  text-white font-bold'>"美業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block  text-white font-bold'>"中小企業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block  text-white font-bold'>"服飾業"</span>、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block  text-white font-bold'>"傳統產業"</span>，我們都在這裡，為您提供簡單、實用且有效的解決方案。
                  </p>
                </div>
                </a>
            
              </Marquee>
               
            <div className="footer  border-t-3 border-white">
                <div className="footer-layout">
                  <div className="footer-wrapper">
                    <div className="main-container">
                      <div
                        id="w-node-_38022ebf-47b1-b5c9-4fe1-6fc4778801c0-cdf922c7"
                        data-w-id="38022ebf-47b1-b5c9-4fe1-6fc4778801c0"
                        className="footre-contact-block"
                        style={{}}
                      >
                        <div className="footer-small-text">Get in touch</div>
                        <a href="#" className="footer-contact-link">
                          bob112722761236tom@gmail.com
                        </a>
                        <a href="#" className="footer-contact-link">
                          0939767977
                        </a>
                      </div>
                      <div
                        id="w-node-b805c6a7-2e25-391b-5d30-1818cdf922cd-cdf922c7"
                        className="footer-main-links"
                      >
                        <div
                          data-w-id="6dc4d3f7-1feb-7d1d-eb75-644710288cff"
                          className="footer-main-links-wrapper"
                          style={{}}
                        >
                          <a
                            data-w-id="224d6c80-9f0d-e6d1-431a-b5fa62444ed2"
                            href="/"
                            className="text-white footer-large-link"
                            
                          >
                            更多服務：
                            <p className="text-[15px] text-white">
                              如果你有更多想法，歡迎找我討論
                            </p>
                          </a>
                          <a
                            data-w-id="224d6c80-9f0d-e6d1-431a-b5fa62444ed2"
                            href="/"
                            className="footer-large-link"
                            
                          >
                             個人工作室
                            <p className="text-[15px] text-white">
                               個人接案，溝通時間彈性
                            </p>
                          </a>
                          <a
                            data-w-id="224d6c80-9f0d-e6d1-431a-b5fa62444ed2"
                            href="/"
                            className="footer-large-link"
                            
                          >
                            價格
                            <p className="text-[15px] text-white">
                              價格功能 詳細 皆可討論
                            </p>
                          </a>
                        </div>
                        <div
                          data-w-id="60710c24-c4e8-9d65-10d7-1ada286361b6"
                          className="footre-page-links"
                          style={{
                            transform:
                              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            opacity: 1,
                          }}
                        >
                          <a href="/" className="simple-link-blue">
                            購物網站
                          </a>
                          <a href="/about" className="simple-link-blue">
                            形象網站
                          </a>
                          <a href="/journal" className="simple-link-blue">
                            RWD網站
                          </a>
                          <a href="/store" className="simple-link-blue">
                            Seo行銷
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-utility-section">
                  <div className="main-container align-center">
                    <div
                      id="w-node-_4f1c3f96-9351-ef46-d1ee-e61c42e6a5bd-cdf922c7"
                      className="w-dyn-list"
                    >
                      <div
                        role="list"
                        className="footer-socials-list w-dyn-items"
                      >
                        <div role="listitem" className="w-dyn-item">
                          <a
                            aria-label="Social link"
                            href="#"
                            className="footer-social-link w-inline-block"
                          >
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3a8b2f927ce7f896c3a_youtube-logo-black.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-footer-social"
                            />
                          </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <a
                            aria-label="Social link"
                            href="#"
                            className="footer-social-link w-inline-block"
                          >
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3be86afee09c6670653_linkedin-logo-black.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-footer-social"
                            />
                          </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <a
                            aria-label="Social link"
                            href="#"
                            className="footer-social-link w-inline-block"
                          >
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c393feb96a6a38785fc6_facebook-logo-black.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-footer-social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_4b3c50e8-fd47-cca7-b90c-0c893a2a7de9-cdf922c7"
                      className="footer-utility-wrapper"
                    >
                      <div className="footer-utility-links">
                        <a
                          href="/utility-pages/instructions"
                          className="footer-utility-link"
                        >
                        Website
                        </a>
                        <a
                          href="/utility-pages/licenses"
                          className="footer-utility-link"
                        >
                          Banner
                        </a>
                        <a
                          href="http://www.webflow.com"
                          target="_blank"
                          className="footer-utility-link"
                        >
                           DM
                        </a>
                      </div>
                      <div className="footer-utility-links">
                        <a
                          href="  "
                          target="_blank"
                          className="footer-utility-link"
                        >
                          More Template
                        </a>
                        <a
                          href="https://webflow.com/templates/designers/metrik"
                          target="_blank"
                          className="footer-utility-link"
                        >
                          Logo.Deaign.io
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bg">
                  <div className="parallax-trigger">
                    <div
                      className="parallax-layout"
                      style={{
                        willChange: "transform",
                        transform:
                          "translate3d(0px, -0.5804%, 0px) scale3d(1.0279, 1.0279, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adb5cdd9676a6900347_stada-img-3.webp"
                        loading="lazy"
                        alt=""
                        className="cover-image"
                      />
                      <div className="bg-for-animation" />
                    </div>
                  </div>
                  <div className="footer-bg-gradient" />
                </div>
              </div>
                        {/* <Footer /> */}
                    </AnimatePresence>
                </NextUIProvider>
            
            </div>
        </div>
        </div>
    );
}
