"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

import SwiperScroll from "../../components/SwiperScroll02/page";
import PortFolioCarousel from "../EmblaCarousel/index";
import Marquee from "react-fast-marquee";
import GsapText from "../../components/RevealText/index";
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
    <main
      ref={container}
      className="relative  mt-[-700px] md:mt-[-500px] 2xl:mt-[-800px]"
    >
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-45, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [1400, -500]);

  return (
    <motion.div
      style={{ scale, rotate, x, y }}
      className="sticky top-0 h-screen  text-[3.5vw] flex flex-col items-center justify-center pb-[10vh]"
    >
      <Image
        placeholder="empty"
        alt=""
        className="object-contain w-full lg:w-[60%]"
        width={1400}
        height={1400}
        src="/images/Hero-img-07.png"
      ></Image>
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
      className="hidden relative h-[105vh]"
      transition={{
        duration: 6.8,
        ease: [0.1, 3.7, 3.0, 3.1], // Custom cubic-bezier timing function
      }}
    >
      <div className="px-[20px] border-t-2 border-black border  py-[40px]  lg:py-[100px] bg-[#001e5a] rounded-[45px] md:rounded-[60px] h-auto md:h-[150vh] xl:h-[200vh] xl:rounded-[80px] 2xl:rounded-[120px] portrait:xl:h-[50vh]">
        <div className="txt flex items-center flex-col justify-center py-4">
          <h2 className="text-black text-[35px] md:text-[50px] xl:text-[70px] text-center font-bold">
            讓您的品牌擁有獨立網站！
          </h2>
          <p className="text-[16px] font-normal text-center w-full mt-4 md:w-1/2 mx-auto md:text-[22px] text-black">
            您是否為其困擾？？
          </p>
        </div>
        <div className="w-full justify-between  px-[30px] flex"></div>

        <motion.div
          style={{ y: yOffset }}
          className="project-plan flex-col sm:flex-row mx-auto mt-[160px] md:flex px-[30px] hidden 2xl:w-[80%] md:px-[10px] w-full"
          transition={{
            duration: 2.8,
            ease: [0.1, 0.7, 1.0, 0.1], // Custom cubic-bezier timing function for the floating effect
          }}
        >
          <a
            href="/quotation"
            className=" mt-[500px] h-full md:h-auto  hover:border-white rounded-xl w-full  md:w-1/3 m-1  duration-100 group  p-6 bg-[#1a84ef]"
          >
            <Image
              src="/images/SEO優化行銷-極客網頁設計.webp"
              alt="SEO優化行銷-極客網頁設計"
              width={500}
              height={500}
              className="group-hover:scale-105 group-hover:rotate-12 duration-500"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <div className="txt p-5">
              <h3 className="text-black text-[35px] font-black">
                電商平台的高抽成
              </h3>

              <p className="text-black">
                電商平台手續費越抽越多？選擇我們的網頁設計服務，擺脫高額手續費的束縛！
              </p>
            </div>
          </a>
          <a
            href="/quotation"
            data-aos-delay="150"
            className="border mt-[10px] md:mt-[500px] h-full md:h-auto  duration-100 hover:border-white border-black  rounded-xl w-full group md:w-1/3 m-1 p-6 bg-[#262626]"
          >
            <Image
              src="/images/網頁設計_我們的服務內容-極客網頁設計.webp"
              alt="SEO優化行銷-極客網頁設計"
              width={500}
              height={500}
              className="group-hover:scale-105 group-hover:rotate-12 duration-500"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <div className="txt p-5">
              <h3 className="text-white text-[35px] font-black">
                對現有網站不滿意
              </h3>

              <p className="text-white">
                您的網站設計過時，技術已落後趨勢，缺乏維護，這可能正拖累您的 SEO
                排名和企業盈利
              </p>
            </div>
          </a>
          <a
            href="/quotation"
            data-aos-delay="300"
            className=" mt-[10px] md:mt-[500px] h-full md:h-auto   duration-100 hover:border-white rounded-xl w-full  md:w-1/3 group m-1 p-6 bg-[#e79a2e]"
          >
            <Image
              src="/images/商業產品攝影-極客網頁設計.webp"
              alt="SEO優化行銷-極客網頁設計"
              width={500}
              height={500}
              className="group-hover:scale-105 group-hover:rotate-12 duration-500"
              placeholder="empty"
              loading="lazy"
            ></Image>
            <div className="txt p-5">
              <h3 className="text-white text-[35px] font-black leading-normal">
                你想完整收集客戶資料，再行銷嗎？
              </h3>

              <p className="text-white">
                擁有獨立網站，完整掌握客戶數據，實現精準行銷、提升轉化率，建立長期品牌關係，持續創造價值。
              </p>
            </div>
          </a>
        </motion.div>

        {/* <section className="section-embla my-[60px border-b-2 border-black md:my-0">
          <PortFolioCarousel />
        </section> */}
        {/* <div className="flex flex-col justify-center items-center">
          <h1
            className="header text-[#1e1e1e] xl:text-[100px]
    font-extrabold xl:leading-[90px] leading-normal text-center md:text-[62px] mt-[100px] text-[32px]"
          >
            <GsapText
              text=" 讓您的品牌脫穎而出"
              lineHeight="80px"
              id="text2"
              fontSize="70px"
            />
          </h1>
          <p className="text-[16px]">
            專注打造符合您品牌形象的網站，量身定制 ，細緻呈現品牌價值
          </p>
        </div> */}

        <div className="flex  flex-col justify-center items-center">
          {/* <h2
            className="header text-[#1e1e1e] xl:text-[100px]
    font-extrabold xl:leading-[90px] leading-normal text-center md:text-[62px] mt-[100px] text-[32px]"
          >
            <GsapText
              text="讓我們的專業幫助您"
              lineHeight="80px"
              id="text2"
              fontSize="70px"
            />
          </h2> */}
          {/* <h3>你是否打算自學網頁設計？</h3>
          <div className="relative border items-center flex-col  flex justify-center bg-white w-full">
            <div className="absolute bg-black text-white font-black left-0 border border-black w-[100vw] z-[1]">
              <Marquee>
                <div className="text-[100px]">WEBDESIGN</div>
              </Marquee>
            </div>
            <div className="absolute   left-0 border border-black top-0 w-[100vw] z-[1]">
              <Marquee>
                <div className="text-[100px]">SEO? </div>
              </Marquee>
            </div>
            <div className="absolute bottom-0 border border-black w-[100vw] z-[1]">
              <Marquee>
                <div className="text-[100px]">WEBDESIGN</div>
              </Marquee>
            </div>
            <div className="relative  z-[9999999999999]">
              {" "}
              <Image
                src="/images/fantastic_hare_410_student_cartoon_3d_style_0c7a0a33-6451-4e01-8d27-b81fcf41013b-2.png"
                alt=""
                loading="lazy"
                placeholder="empty"
                width={500}
                height={600}
              ></Image>
            </div>
          </div> */}

          {/* <p className="text-[20px]">
            自學網站確實可利用wordpress或者其他建站軟體快速搭建一個網頁，適合預算有限的創業者
          </p> */}
          {/* <h3 className="text-[40px] text-center leading-[50px] mt-[100px]">
            但你有想過自學網站建置<br></br>也有局限性嗎!!!
          </h3>
          <div>
            <ul className="border bg-blue-700 border-black p-10 w-full rounded-md">
              <li className="text-[30px] text-white font-extrabold list-item">
                網站性能與優化的挑戰
              </li>
              <li className="text-[30px] text-white font-extrabold list-item">
                品牌一致性與設計品質的欠缺
              </li>
              <li className="text-[30px] text-white font-extrabold list-item">
                擴展與專業需求的困難
              </li>
            </ul>
          </div>
          <h3 className="text-[40px] mt-[40px]">不如讓專業的我們幫助您</h3>

          <div className="flex flex-row">
            <div className="left w-1/2"></div>
            <div className="right w-1/2"></div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};
