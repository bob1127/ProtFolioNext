"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import EmblaCarouselIndex from "../../components/EmblaCarouselIndex/index";
import Carousel09 from "../../components/EmblaCarousel09/index";
import AOS from "aos"; // Import AOS
import CircleText from "../../components/CircleText.jsx";
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
    <>
      <motion.div
        style={{ scale, rotate, x, y }}
        className="sticky  xl:flex top-0 h-[700px]  text-[3.5vw] hidden flex-col mt-[-30vmin] mb-[-30vmin] items-center justify-center text-white pb-[10vh]"
      >
        <Image
          src="/images/seo-hero-img.png"
          placeholder="empty"
          loading="lazy"
          className=" "
          width={800}
          height={800}
        ></Image>
        <p>Scroll Down</p>
        <div className="flex gap-4">
          <p>More Info</p>
          <p>Detail</p>
        </div>
      </motion.div>
      <motion.div
        style={{ scale, rotate, x, y }}
        className="sticky top-0 h-screen  text-[3.5vw] flex flex-col xl:hidden items-center mt-[-400px] justify-center text-white pb-[10vh]"
      >
        <Image
          src="/images/seo-hero-img.png"
          placeholder="empty"
          loading="lazy"
          className="w-full object-contain"
          width={600}
          height={600}
        ></Image>
        <p>Scroll Down</p>
        <div className="flex gap-4">
          <p>More Info</p>
          <p>Detail</p>
        </div>
      </motion.div>
    </>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // Increase the upward float effect by adjusting the second value of the yOffset
  const yOffset = useTransform(scrollYProgress, [0.5, 1], [0, 0]); // Increased from -400 to -800

  return (
    <>
      <motion.div
        style={{ scale, rotate }}
        className="relative overflow-hidden md:h-[160vh] hidden xl:block z-[999999999] 2xl:h-[200vmin]  xl:h-[240vmin]  h-screen"
        transition={{
          duration: 6.8,
          ease: [0.1, 3.7, 3.0, 3.1], // Custom cubic-bezier timing function
        }}
      >
        <div className="circle-logo"></div>
        <div className=" overflow-visible md:overflow-hidden  xl:pt-[530px]  relative  z-[-1]  h-[100vh]  md:h-[350vh] 2xl:h-[220vh]   rounded-[45px]  md:rounded-[60px] xl:rounded-[120px] 2xl:rounded-[120px]">
          <div className="cloud absolute top-[30%] z-[-1] left-[0]">
            <Image
              src="/images/cloud-01.png"
              alt="cloud"
              className="xl:w-[800px] xl:h-[600px]"
              placeholder="empty"
              loading="lazy"
              width={500}
              height={500}
            ></Image>
          </div>

          <div className="cloud absolute top-[35%] z-[-1] right-[10%]">
            <Image
              src="/images/cloud-02.png"
              alt="cloud"
              className="xl:w-[900px] xl:h-[600px]"
              placeholder="empty"
              loading="lazy"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="cloud absolute top-[20%] z-[1] left-[5%]">
            <Image
              src="/images/cloud-02.png"
              alt="cloud"
              className="xl:w-[350px] xl:h-[350px]"
              placeholder="empty"
              loading="lazy"
              width={300}
              height={300}
            ></Image>
          </div>
          <div className="cloud absolute opacity-80 top-[18%] z-[1] right-[5%]">
            <Image
              src="/images/cloud-02.png"
              alt="cloud"
              className="xl:w-[350px] xl:h-[350px]"
              placeholder="empty"
              loading="lazy"
              width={300}
              height={300}
            ></Image>
          </div>
          <div className="cloud absolute top-[20%] z-[1] left-[5%]">
            <Image
              src="/images/cloud-01.png"
              alt="cloud"
              className="xl:w-[420px] xl:h-[420px]"
              placeholder="empty"
              loading="lazy"
              width={400}
              height={300}
            ></Image>
          </div>
          <div className="absolute   hidden md:block top-[10%] right-[14%]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white mb-5">scroll down</p>
              <Image
                src="/images/Lovepik_com-401018231-colored-cha-arrow.png"
                loading="lazy"
                width={130}
                height={130}
                className="rotate-[180deg]"
                alt="arrow-yellow"
                placeholder="empty"
              ></Image>
            </div>
          </div>
          <div className="txt xl:mt-[290px]  2xl:mt-[70vmin]  px-[25px] flex items-center flex-col justify-center py-4">
            <h2 className="text-[#fdb715] heading-title">提升網站品牌形象</h2>
            <p className="font-custom text-[16px] font-normal text-center w-full mt-4 md:w-1/2 mx-auto md:text-[22px] text-[#f5f5f5]">
              提升網站品牌形象，實現更高利潤。優化網站體驗與視覺風格，增強消費者信任感，從而提升品牌影響力和獲利能力。
            </p>
          </div>
          <div className=" max-w-[1920px] mx-auto  justify-between  px-[30px] flex"></div>
          <motion.div
            style={{ y: yOffset }}
            className="project-plan justify-center flex-col md:flex-row mx-auto  flex px-[30px] md:px-[10px] w-full lg:w-[95%]"
            transition={{
              duration: 2.8,
              ease: [0.1, 0.7, 1.0, 0.1], // Custom cubic-bezier timing function for the floating effect
            }}
          >
            <div className="block md:hidden">
              <Carousel09 />
            </div>
            <div className="hidden relative z-[99999999999999999]  2xl:px-[200px] md:flex  md:flex-row flex-col">
              <a
                href="/service"
                data-aos-delay="300"
                className="group flex justify-center items-center flex-col shadow-xl  mt-[10px]  h-full md:h-auto relative shadow-black duration-100 bg-white group hover:bg-[#11203f] rounded-xl w-full md:w-[380px] 2xl:w-1/3 group m-1 p-6"
              >
                <div className="right-[-15px] absolute top-[-40px] hidden group-hover:block">
                  <Image
                    width={100}
                    height={100}
                    loading="lazy"
                    placeholder="empty"
                    alt="popup-chatBox"
                    src="/images/spaceMan01.png"
                  />
                </div>
                <Image
                  src="/images/對現有網站不滿意.png"
                  alt="SEO優化行銷-極客網頁設計"
                  width={400}
                  height={400}
                  className="group-hover:scale-105 group-hover:rotate-12 duration-500"
                  placeholder="empty"
                  loading="lazy"
                />
                <div className="txt 2xl:w-[70%] mx-auto group p-5">
                  <h3 className="text-[#fdb715] font-custom  text-[24px] font-black">
                    對現有網站不滿意
                  </h3>
                  <p className="text-[#131313] duration-500 group-hover:text-[#fdb715] text-[14px] md:text-[16px]">
                    您的網站設計過時，技術已落後趨勢，缺乏維護，這可能正拖累您的
                    SEO 排名和企業盈利
                  </p>
                </div>
              </a>

              <a
                href="/service"
                data-aos-delay="300"
                className="group shadow-xl mt-[10px]  h-full md:h-auto flex justify-center items-center flex-col relative shadow-black duration-100 bg-white group hover:bg-[#11203f] rounded-xl w-full md:w-[380px] 2xl:w-1/3 group m-1 p-6"
              >
                <div className="right-[-15px] absolute top-[-40px] hidden group-hover:block">
                  <Image
                    width={100}
                    height={100}
                    loading="lazy"
                    placeholder="empty"
                    alt="popup-chatBox"
                    src="/images/spaceMan01.png"
                  />
                </div>
                <Image
                  src="/images/收集客戶資料再行銷.png"
                  alt="SEO優化行銷-極客網頁設計"
                  width={400}
                  height={400}
                  className="group-hover:scale-105 group-hover:rotate-12 duration-500"
                  placeholder="empty"
                  loading="lazy"
                />
                <div className="txt 2xl:w-[70%] mx-auto group p-5">
                  <h3 className="text-[#fdb715] font-custom text-[24px] font-black">
                    你想完整收集客戶資料，再行銷嗎？
                  </h3>
                  <p className="text-[#131313] duration-500 group-hover:text-[#fdb715] text-[14px] md:text-[16px]">
                    擁有獨立網站，完整掌握客戶數據，實現精準行銷、提升轉化率，建立長期品牌關係，持續創造價值。
                  </p>
                </div>
              </a>
              <a
                href="/service"
                data-aos-delay="300"
                className="group shadow-xl mt-[10px]  h-full md:h-auto flex justify-center items-center flex-col relative shadow-black duration-100 bg-white group hover:bg-[#11203f] rounded-xl w-full md:w-[380px] 2xl:w-1/3 group m-1 p-6"
              >
                <div className="right-[-15px] absolute top-[-40px] hidden group-hover:block">
                  <Image
                    width={100}
                    height={100}
                    loading="lazy"
                    placeholder="empty"
                    alt="popup-chatBox"
                    src="/images/spaceMan01.png"
                  />
                </div>
                <Image
                  src="/images/電商平台的高抽成01.png"
                  alt="SEO優化行銷-極客網頁設計"
                  width={400}
                  height={400}
                  className=" group-hover:scale-105 group-hover:rotate-12 duration-500"
                  placeholder="empty"
                  loading="lazy"
                />
                <div className="txt 2xl:w-[70%] mx-auto group p-5">
                  <h3 className="text-[#fdb715] font-custom text-[24px] font-black">
                    電商平台的高抽成
                  </h3>
                  <p className="text-[#131313] duration-500 group-hover:text-[#fdb715] text-[14px] md:text-[16px]">
                    電商平台手續費越抽越多？選擇我們的網頁設計服務，擺脫高額手續費的束縛！
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="relative block mt-0   md:mt-[200px] xl:hidden z-[999999999]  h-auto  sm:h-[100vmin] md:h-[100vmin]"
        transition={{
          duration: 6.8,
          ease: [0.1, 3.7, 3.0, 3.1], // Custom cubic-bezier timing function
        }}
      >
        <div className="circle-logo"></div>
        <div className="  xl:pt-[250px] pt-[100px]  h-auto  z-[-1]  static rounded-[0px] py-[50px] sm:mt-[140px]  mt-[140px] md:rounded-[60px] xl:rounded-[120px] 2xl:rounded-[120px]">
          <div className="txt  px-[25px] flex items-center flex-col justify-center py-4">
            <h2 className="text-[#fdb715] text-[30px] md:text-[50px] xl:text-[70px] font-custom font-bold">
              提升網站品牌形象
            </h2>
            <p className="text-[16px] font-normal text-center w-[80%]  mt-4 md:w-1/2 mx-auto md:text-[22px] text-white">
              提升網站品牌形象，實現更高利潤。優化網站體驗與視覺風格，增強消費者信任感，從而提升品牌影響力和獲利能力。
            </p>
          </div>
          <div className=" max-w-[1920px] mx-auto  justify-between  px-[30px] flex"></div>
          <motion.div className="project-plan justify-center flex-col md:flex-row mx-auto flex px-[30px] md:px-[10px] w-full lg:w-[95%]">
            <div className="block md:hidden">
              <Carousel09 />
            </div>
            <div className="hidden  md:flex  md:flex-row flex-col">
              <a
                href="/WebOptimization"
                className="bord h-full md:h-auto  hover:border-white rounded-xl w-full  md:w-1/3 m-1 border-black duration-100 group  p-6 bg-white"
              >
                <Image
                  src="/images/收集客戶資料再行銷.png"
                  alt="收集客戶資料再行銷-極客網頁設計"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 group-hover:rotate-12 duration-500"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
                <div className="txt p-5">
                  <h3 className="text-[#fdb715] text-[24px]font-black">
                    你想完整收集客戶資料，再行銷嗎？
                  </h3>

                  <p className="text-black text-[18px] md:text-[22px]">
                    網頁結構優化｜網頁速度優化｜使用者體驗優化｜網頁內容
                  </p>
                  {/* <div className="content mt-3 ">
                  不管您的企業商家需要建置新的網頁或者對於目前網頁不滿意，需要改版重構，我們提供最優惠的方案價格
                </div> */}
                </div>
              </a>

              <a
                href="/WebOptimization"
                data-aos-delay="150"
                className="border mt-[10px]  h-full md:h-auto  duration-100 hover:border-white border-black  rounded-xl w-full group md:w-1/3 m-1 p-6 bg-[#ffffff]"
              >
                <Image
                  src="/images/對現有網站不滿意.webp"
                  alt="對現有網站不滿意-極客網頁設計"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 group-hover:rotate-12 duration-500"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
                <div className="txt p-5">
                  <h3 className="text-[#fdb715] text-[24px] font-black">
                    對現有網站不滿意
                  </h3>

                  <p className="text-black  text-[18px] md:text-[22px]">
                    您的網站設計過時，技術已落後趨勢，缺乏維護，這可能正拖累您的
                    SEO 排名和企業盈利
                  </p>
                  {/* <div className="content text-gray-100 mt-3 ">
                  專業wordpress網頁設計，另有對於seo有優勢的無頭網站網頁建置(前後端分離)
                  方案
                </div> */}
                </div>
              </a>
              <a
                href="/3dProduct"
                data-aos-delay="300"
                className="border group mt-[10px]  h-full md:h-auto border-black  duration-100 hover:border-white rounded-xl w-full  md:w-1/3 group m-1 p-6 bg-[#ffffff]"
              >
                <Image
                  src="/images/電商平台的高抽成01.webp"
                  alt="電商平台的高抽成-極客網頁設計"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 group-hover:rotate-12 duration-500"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
                <div className="txt group p-5">
                  <h3 className="text-[#fdb715] text-[24px] font-black">
                    電商平台的高抽成
                  </h3>

                  <p className="text-black  text-[18px] md:text-[22px]">
                    電商平台手續費越抽越多？選擇我們的網頁設計服務，擺脫高額手續費的束縛！
                  </p>
                  {/* <div className="content mt-3 ">
                  提供電商平台圖片設計美化，或是產品攝影的需求。也提供3d建模商品，可以供網頁使用。
                </div> */}
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
