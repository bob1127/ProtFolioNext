import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export default function SmoothScrollHero() {
  return (
    <div className="bg-zinc-950 overflow-hidden">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          syncTouch: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 300vh)` }}
      className="relative w-full flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[80px] text-white">禪譜科技股份有限公司</h1>
        <p className="text-[30px] mt-[50px] text-white">公司官網建置</p>
      </div>

      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  // The point at which the full scroll takes place within the sticky container.
  const scrollLimit = SECTION_HEIGHT + 100; // Customize based on the section height

  // Adjust the clip and opacity animations
  const clip1 = useTransform(scrollY, [0, scrollLimit], [25, 0]);
  const clip2 = useTransform(scrollY, [0, scrollLimit], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Adjust background size and opacity based on scroll
  const backgroundSize = useTransform(
    scrollY,
    [0, scrollLimit],
    ["100%", "100%"]
  );
  const opacity = useTransform(scrollY, [0, scrollLimit], [1, 0]);

  return (
    <motion.div
      className="sticky top-[50px] h-1/4 w-full"
      style={{
        clipPath,
        backgroundSize: "fit", // 確保背景圖片使用 cover
        opacity,
        backgroundImage: "url(/images/06.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 ">
      <ParallaxImg
        src="/images/The Smallest Wireless Potentiostat-Open Box.webp"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/images/black-company-zensor.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/images/The Smallest Wireless Potentiostat-Box.webp"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/images/portfolio02.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/images/The Smallest Wireless Potentiostat-FingerSize.webp"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="max-w-4xl mx-auto  py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Website Hero Banner
      </motion.h1>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: -60, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.75 }}
        className="mb-20 text-[20px] font-normal  text-zinc-50"
      >
        因該客戶公司產品為新創化學科技產品，所以產品圖片則以偏科技感，通透明亮為主
      </motion.h1>
      <motion.div
        initial={{ scale: 1, backdropFilter: "blur(10px)" }}
        whileInView={{ scale: 1.2, backdropFilter: "blur(0px)" }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="relative w-full "
      >
        {/* 黑色遮罩 */}
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          transition={{ ease: "easeInOut", duration: 1.5 }} // 增加持續時間
          className="absolute inset-0 bg-black z-10"
        />

        {/* 圖片本身 */}
        <img
          src="/images/ECWP100-carousel-index.webp"
          alt="An example of a space launch"
          className="w-full h-full object-cover rounded-xl"
          style={{ filter: "brightness(0.8)" }}
        />
      </motion.div>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl mt-[100px] font-black uppercase text-zinc-50"
      >
        Website Hero Banner
      </motion.h1>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: -60, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.75 }}
        className="mb-20 text-[20px] font-normal  text-zinc-50"
      >
        因該客戶公司產品為新創化學科技產品，所以產品圖片則以偏科技感，通透明亮為主
      </motion.h1>
      <motion.div
        initial={{ scale: 1, backdropFilter: "blur(10px)" }}
        whileInView={{ scale: 1.2, backdropFilter: "blur(0px)" }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="relative w-full "
      >
        {/* 黑色遮罩 */}
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          transition={{ ease: "easeInOut", duration: 1.5 }} // 增加持續時間
          className="absolute inset-0 bg-black z-10"
        />

        {/* 圖片本身 */}
        <div className="flex">
          <div className="w-1/3 p-5">
            <img
              src="/images/The Smallest Wireless Potentiostat-Open Box.webp"
              alt="An example of a space launch"
              className="w-full h-full object-cover rounded-[10px]"
              style={{ filter: "brightness(0.8)" }}
            />
          </div>
          <div className="w-1/3 p-5">
            <img
              src="/images/The Smallest Wireless Potentiostat-Open Box.webp"
              alt="An example of a space launch"
              className="w-full h-full object-cover rounded-[10px]"
              style={{ filter: "brightness(0.8)" }}
            />
          </div>
          <div className="w-1/3 p-5">
            <img
              src="/images/The Smallest Wireless Potentiostat-Open Box.webp"
              alt="An example of a space launch"
              className="w-full h-full object-cover rounded-[10px]"
              style={{ filter: "brightness(0.8)" }}
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-[160px]">
        <ScheduleItem
          title="Design"
          date="Dec 9th"
          location="Blender、Photoshop"
        />
        <ScheduleItem
          title="Website"
          date="使用技術"
          location="Jquery、Scss,Bootstrap,Js"
        />
        <a href="/PortFolio02">
          <ScheduleItem
            title="The Main Color "
            date="Blue,white"
            location={{
              src: "/images/截圖-2024-09-824-上午9.25.18.png",
            }}
          />
        </a>
        <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
        <p>LOROERO</p>
        <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
        <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
        <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
      </div>
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div className="flex justify-between w-full">
        <div>
          <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
          <p className="text-sm uppercase text-zinc-500">{date}</p>
        </div>
        {typeof location === "string" ? (
          <p>{location}</p> // 如果 location 是字串，則顯示字串
        ) : (
          <img
            src={location.src}
            alt={location.alt}
            className="location-image w-[200px] border border-white rounded-md "
          /> // 否則顯示圖片
        )}
      </div>
    </motion.div>
  );
};
