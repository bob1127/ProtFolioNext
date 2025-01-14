import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const VerticalAccordion = ({ customImageUrls = [] }) => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow bg-black overflow-hidden">
        {items.map((item, index) => {
          // Pass the custom image URL if provided
          const imgSrc = customImageUrls[index] || item.imgSrc;

          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              title02={item.title02}
              imgSrc={imgSrc} // Pass the image source dynamically
              description={item.description}
              link={item.link} // Add link to the item
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  title02,
  imgSrc,
  description,
  link,
}) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center  gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>

        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence className="">
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full   group overflow-visible md:overflow-hidden relative bg-black flex items-end"
          >
            {/* Wrap the image and content in <a> for linking */}
            <a
              href={link}
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <motion.div
                variants={descriptionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="px-[50px] w-full  group-hover:py-3 md:group-hover:py-10 absolute bottom-0 duration-500 py-1 md:py-8 bg-black/40 backdrop-blur-sm text-white"
              >
                {/* Adding an <h3> tag for the description */}
                <h3 className="text-[16px] md:text-2xl font-semibold">
                  {title02}
                </h3>{" "}
                {/* Example of title within description */}
                <p className="hidden md:block">{description}</p>
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "WebsiteDesign",
    title02: "網頁設計｜結構優化｜ＳＥＯ",
    Icon: FiDollarSign,
    imgSrc: "/images/facebook.png",
    description:
      "我們專注於設計美觀且高效的網站，並進行結構優化，提升使用者體驗。透過專業的SEO服務，讓您的網站在搜尋引擎中脫穎而出，吸引更多潛在客戶，助您業務增長。讓我們幫助您提升網站價值！",
    link: "/WebOptimization", // Example link
  },
  {
    id: 2,
    title: "3D",
    title02: "3D產品建模",
    Icon: FiPlay,
    imgSrc: "/images/3d產品模型05-極客網頁設計|Blender3D.png.png",
    description: "我們提供3D建模服務，幫助您將產品概念轉化為真實視覺效果。",
    link: "/3dProduct", // Example link
  },
  {
    id: 3,
    title: "Photography",
    title02: "商業｜產品攝影",
    Icon: FiBell,
    imgSrc: "/images/商業攝影_產品_banner-極客網頁設計.png",
    description:
      "專業商業產品攝影，提升您的品牌形象。我們捕捉每個細節，呈現產品最佳狀態，無論是電商、廣告還是宣傳，讓您的產品在市場中脫穎而出，吸引更多目光。",
    link: "/Photography", // Example link
  },
  {
    id: 4,
    title: "GraphicDesign",
    title02: "平面｜DM｜包裝｜企業形象CIS設計",
    Icon: FiBarChart,
    imgSrc: "/images/網頁設計02_極客網頁設計_網頁設計建置.webp",
    description:
      "打造獨特品牌形象，從平面設計、DM宣傳到包裝設計，精心塑造每一個細節。專業的企業形象CIS設計，讓您的品牌視覺更具辨識度",
    link: "/GraphicDesign", // Example link
  },
];
