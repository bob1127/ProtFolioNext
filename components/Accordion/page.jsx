import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

function Accordion({ children, multiple, defaultIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({ children }) {
  return (
    <div className="AccordionItem border border-[#ffc337] rounded-lg overflow-hidden mb-2">
      {children}
    </div>
  );
}

function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`AccordionHeader ${
        isActive ? "bg-[#ffc337]" : "bg-white"
      } p-0 cursor-pointer`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  );
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel p-4 bg-gray-50">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <section className="App">
      <p className="text-[30px] text-white">QA</p>
      <h2 className="text-white">QA</h2>
      <Accordion>
        <AccordionItem className="w-full">
          <AccordionHeader className="w-full">
            <h3 className="text-[16px] text-center md:text-[20px] p-0  font-bold lg:font-bold">
              做好一個網站要花費多少？
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <p className="text-md text-gray-500">
              網站設計費用依需求而異，簡單展示型網站較便宜，功能豐富的網站（如電子商務）則較貴。設計、功能需求和維護等因素會影響價格，通常從幾千元到數萬不等。
            </p>
            <div className="mt-5">
              <a
                href="/quotation"
                className="bg-[#ffc337] inline-block w-full md:w-auto text-center py-2 text-black rounded-[30px] px-4 "
              >
                參考極客的報價
              </a>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className=" text-center text-[16px] md:text-[20px] p-0 font-bold lg:font-bold">
              要怎麼提升我的網站曝光度？
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <p className="text-md text-gray-500">
              提升網站曝光度可通過優化SEO、提高網站速度、定期更新內容、使用社交媒體宣傳以及增加反向鏈接來達成。持續關注分析數據並調整策略，有助於提高搜尋引擎排名，吸引更多潛在客戶。
            </p>
            <div className="mt-5">
              <a
                href="/blog-01"
                className="bg-[#ffc337] inline-block w-full md:w-auto text-center py-2 text-black rounded-[30px] px-4 py-2"
              >
                幫您規劃網站seo
              </a>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className=" font-bold text-center text-[16px] md:text-[20px] p-0 lg:font-bold">
              是否擔心做好網站之後無人服務？
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="mt-5">
              <p className="text-md text-gray-500">
                選擇極客，極客提供完整網站維護服務，讓您的網站隨時保持高效能運作。
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className=" font-bold text-center text-[16px] md:text-[20px] p-0 lg:font-bold">
              網站做好後，接下來要做什麼？
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="mt-5">
              <p className="text-md text-gray-500">
                提升網站曝光度可通過優化SEO、提高網站速度、定期更新內容、使用社交媒體宣傳以及增加反向鏈接來達成。持續關注分析數據並調整策略，有助於提高搜尋引擎排名，吸引更多潛在客戶。
              </p>
              <a
                href="/blog-01"
                className="bg-[#ffc337] inline-block w-full md:w-auto text-center py-2 text-black rounded-[30px] px-4 py-2"
              >
                試試無頭客製化網站
              </a>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className=" font-bold text-center text-[16px] md:text-[20px] p-0 lg:font-bold">
              網站建設好之後需要什麼成本？
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="mt-5">
              <p className="text-md text-gray-500"> 網域費用：一年約1~2000</p>
              <p className="text-md text-gray-500"> 主機費用：一年約5000</p>
              <p className="text-md text-gray-500">
                維護費用：市面上維護費用一年約20000~50000不等，
              </p>
              <p className="text-md text-gray-500">
                極客推出一年{" "}
                <span className="text-[22px] font-bold text-[#f6b23b]">
                  12,000
                </span>
                高品質維護服務。
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <br />
    </section>
  );
}
