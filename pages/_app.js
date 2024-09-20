import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from '@nextui-org/react';
import { NextSeo, DefaultSeo } from 'next-seo';
import AOS from 'aos';
// import Nav from '../components/Navbar/page.jsx';
import '../styles/globals.css';
import 'aos/dist/aos.css'; 
import defaultSEOConfig from '../next-seo.config.js';
import Marquee from 'react-fast-marquee';
const PhysicsAnimationApp = dynamic(
  () => import('../components/PhysicsAnimation/app.jsx'),
  { ssr: false }
);

export default function MyApp({ Component, pageProps, router }) {
  const noNavbarRoutes = ['/toys', '/Lego', '/toys02'];
  const nophyRoutes = ['/toys', '/toys02', '/Lego'];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <html lang="zh-TW" className='bg-white'>
      <NextSeo
        title="極客網頁設計-提升搜尋排名，讓你的業務被發現"
        description="我們專注於設計優化的網站，確保您的業務在搜尋引擎中獲得更高曝光率。透過專業的SEO策略，讓您的網站在競爭中脫穎而出，吸引更多目標客戶。"
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Screenshot-2023-07-17-112049.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Screenshot-2023-07-17-112049.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Screenshot-2023-07-17-112049.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* <div className='hidden md:block'>
        {!noNavbarRoutes.includes(router.pathname) && <Nav />}
      </div> */}

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
                      JEEK像您的好夥伴一樣，會與您一同探索、設計，打造出真正適合您的網站和品牌形象。不管您是
                      <span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>
                        "餐飲業"
                      </span>
                      、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>
                        "美業"
                      </span>
                      、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>
                        "中小企業"
                      </span>
                      、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>
                        "服飾業"
                      </span>
                      、<span className='bg-black rounded-[30px] w-auto px-3 py-1 inline-block text-white font-bold'>
                        "傳統產業"
                      </span>
                      ，我們都在這裡，為您提供簡單、實用且有效的解決方案。
                    </p>
                  </div>
                </a>
              </Marquee>
            </AnimatePresence>
          </NextUIProvider>
        </div>
      </div>
    </html>
  );
}
