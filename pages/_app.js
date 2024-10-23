import dynamic from 'next/dynamic';
import Script from 'next/script';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from "@nextui-org/react";
import Navbar from '../components/sideTabs/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import Head from 'next/head';
import Image from 'next/image';
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
      if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'GTM-T2V5QVTS');
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66f7d854e5982d6c7bb5fba5/1i8s2a2np';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  if (isMaintenanceMode) {
    // 如果维护模式开启，返回维护提示页面
    return (
       
      <div style={{ textAlign: 'center', padding: '50px' }}>

        
          <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2V5QVTS');
          `,
        }}
      />



       <div className='flex flex-col xl:flex-row md:px-[100px] px-[20px] xl:px-[200px] pt-[50px]'>
         <div className=' w-full md:w-[60%] mx-auto xl:w-1/2'>
          <Image src='/images/Maintenance.png' width={700} height={700} loading='lazy'></Image>
        </div>
        <div className='w-full md:w-[60%] mx-auto xl:w-1/2 flex flex-col justify-center items-start pl-0 xl:pl-[50px]'>
         <h1 className='text-[90px] font-black'>Oops !!</h1>
           <p className='mt-[50px]  text-[30px]'>網站維護中</p>
        <p className='text-left'>我們正在進行網站升級，請稍後再試。感謝您的耐心等待！</p>
        </div>
       </div>
      </div>
   
    );
  }
    return (
       
      <div className='bg-[#f5f4f3]'>
        

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
<Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2V5QVTS');
          `,
        }}
      />
        <Nav />

        <div className='main overflow-hidden'>
          <div className='max-w-[1920px] mx-auto'>
            <NextUIProvider>
              <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />

                <div className='border-t-2 border-black'>
                  <PhysicsAnimationApp />
                </div>

                <div className=''>
                  {/* <PhysicsAnimationApp/> */}
                </div>

                <Marquee>
                  <a href='/about'>
                    <div className='border-3 bg-[#1f7beb] border-white'>
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
                          href="https://www.metrik.studio/webflow-templates"
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
