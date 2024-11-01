"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image";
export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    AOS.init(); // Initialize AOS

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative  ">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-45, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [700, -350]);
  const y = useTransform(scrollYProgress, [0, 1], [1400, -500]);

  return (
    <motion.div
      style={{ scale, rotate, x, y }}
      className="sticky top-0 h-screen  text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <Image
        src="/images/3dmodel05.png"
        placeholder="empty"
        loading="lazy"
        className="w-full object-contain"
        width={800}
        height={800}
      ></Image>
      <p>Scroll Down</p>
      <div className="flex gap-4">
        <p>More Info</p>
        <p>Detail</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // Increase the upward float effect by adjusting the second value of the yOffset
  const yOffset = useTransform(scrollYProgress, [0.5, 1], [0, -650]); // Increased from -400 to -800

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative z-[99999999999999] h-screen"
      transition={{
        duration: 6.8,
        ease: [0.1, 3.7, 3.0, 3.1], // Custom cubic-bezier timing function
      }}
    >
      <div className="border py-[100px]  z-[-1] bg-black h-[350vh] md:h-[400vh] 2xl:h-[100vh] border-black  static rounded-[45px] xl:bg-[#333] md:rounded-[60px] xl:rounded-[120px] 2xl:rounded-[120px]">
        <div className="txt  px-[25px] flex items-center flex-col justify-center py-4">
          <h2 className="text-white text-[30px] md:text-[50px] xl:text-[70px] font-bold">
            提升網站品牌形象
          </h2>
          <h3 className="text-[16px] font-normal text-center w-full md:w-1/2 mx-auto md:text-[22px] text-white">
            提升網站品牌形象，實現更高利潤。優化網站體驗與視覺風格，增強消費者信任感，從而提升品牌影響力和獲利能力。
          </h3>
        </div>
        <div className=" max-w-[1920px] mx-auto  justify-between  px-[30px] flex"></div>
        <motion.div
          style={{ y: yOffset }}
          className="project-plan flex-col md:flex-row mx-auto mt-[160px] flex px-[30px] md:px-[10px] w-full lg:w-[80%]"
          transition={{
            duration: 2.8,
            ease: [0.1, 0.7, 1.0, 0.1], // Custom cubic-bezier timing function for the floating effect
          }}
        >
          <a
            href="/Service"
            className="border mt-[500px] h-full md:h-auto  hover:border-white rounded-xl w-full  md:w-1/3 m-1 border-black duration-100 group  p-6 bg-[#5082b8]"
          >
            <Image
              src="/images/SEO優化行銷-極客網頁設計.png"
              alt="SEO優化行銷-極客網頁設計"
              width={500}
              height={500}
              className="group-hover:scale-105 group-hover:rotate-12 duration-500"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <div className="txt p-5">
              <h2 className="text-white text-[35px] font-black">SEO行銷</h2>

              <p className="text-white  text-[18px] md:text-[22px]">
                網頁結構優化｜網頁速度優化｜使用者體驗優化｜網頁內容
              </p>
              <div className="content mt-3 ">
                不管您的企業商家需要建置新的網頁或者對於目前網頁不滿意，需要改版重構，我們提供最優惠的方案價格
              </div>
            </div>
          </a>

          <a
            href="/Service"
            data-aos-delay="150"
            className="border mt-[10px] md:mt-[500px] h-full md:h-auto  duration-100 hover:border-white border-black  rounded-xl w-full group md:w-1/3 m-1 p-6 bg-[#262626]"
          >
            <Image
              src="/images/網頁設計_我們的服務內容-極客網頁設計.png"
              alt="SEO優化行銷-極客網頁設計"
              width={500}
              height={500}
              className="group-hover:scale-105 group-hover:rotate-12 duration-500"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <div className="txt p-5">
              <h2 className="text-white text-[35px] font-black">網頁設計</h2>

              <p className="text-white  text-[18px] md:text-[22px]">
                網頁版型設計｜客製化網頁｜一頁式網頁｜購物網站
              </p>
              <div className="content text-gray-100 mt-3 ">
                專業wordpress網頁設計，另有對於seo有優勢的無頭網站網頁建置(前後端分離)
                方案
              </div>
            </div>
          </a>
          <a
            href="/about"
            data-aos-delay="300"
            className="border group mt-[10px] md:mt-[500px] h-full md:h-auto border-black  duration-100 hover:border-white rounded-xl w-full  md:w-1/3 group m-1 p-6 bg-[#e79a2e]"
          >
            <Image
              src="/images/商業產品攝影-極客網頁設計.png"
              alt="SEO優化行銷-極客網頁設計"
              width={500}
              height={500}
              className="group-hover:scale-105 group-hover:rotate-12 duration-500"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <div className="txt group p-5">
              <h2 className="text-white text-[35px] font-black">形象設計</h2>

              <p className="text-white  text-[18px] md:text-[22px]">
                3D商品建模｜形象攝影｜商品攝影
              </p>
              <div className="content mt-3 ">
                提供電商平台圖片設計美化，或是產品攝影的需求。也提供3d建模商品，可以供網頁使用。
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
