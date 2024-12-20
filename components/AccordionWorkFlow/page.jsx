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
      <Accordion>
        <AccordionItem className="w-full">
          <AccordionHeader className="w-full">
            <h3 className="Accordion_header">Step1.需求溝通與項目規劃</h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="py-[30px]">
              <p className="Accordion_body">
                設計師或網頁工程師將透過與您溝通，瞭解您的品牌定位、目標客群與網站功能需求，打造精準的網站架構與設計。
                <br></br>
                這一步不僅是奠定網站製作的基礎，更是降低未來修改成本的關鍵。
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className="Accordion_header">Step02.視覺設計與雙方達成確認</h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="py-[30px]">
              <p className="Accordion_body">
                設計師或網頁工程師會以您的品牌核心，製作出符合您公司品牌需求的網頁設計稿。
                <br />
                平面稿件完成後，我們會與您確認視覺方向，確保每個細節都達到預期效果。
                <br />
                如果校稿或修改內容較多，製作時間可能會相應調整。在這個步驟中，為了確保項目的順利推進並保護雙方的權益，我們會與您
                <strong>簽訂合約</strong>
                ，明確合作範圍、工作流程與時程規劃，讓雙方在合作的每一階段都有清晰的共識。
                <br />
                同時，<b>可能會視情況斟酌收取訂金</b>
                ，例如設計需求較為複雜、頁面數量較多或需要投入大量創意與資源時，這樣可以保障設計師的工作投入並提高效率。
                <br />
                尾款部分則會在網站完成或正式上線前支付，確保您對最終成果感到滿意，並為項目的圓滿結束提供保障。這樣的安排能讓整個合作過程更具透明性與專業性。
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className="Accordion_header">Step03. 前後端開發與整合</h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="py-[30px]">
              <div className="mt-5">
                <p className="Accordion_body">
                  這階段技術工程師會專注於網站功能、網頁美工設計與動畫效果實現，
                  <br></br>
                  並建立易於使用的後台系統，確保使用者能輕鬆操作與管理。
                </p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className="Accordion_header">Step04.內容整理與SEO設定</h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="py-[30px]">
              <div className="mt-5">
                <p className="Accordion_body">
                  如有串接資料需求會在這個步驟進行，SEO優化，網站結構優化。
                  <br></br>
                  同時，我們會教您如何操作後台，讓網站維護變得更加高效簡單。
                </p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <h3 className="Accordion_header">Step05.網站上線與後續支援</h3>
          </AccordionHeader>
          <AccordionPanel>
            <div className="mt-5">
              <p className="Accordion_body">
                最後，我們會協助您完成域名設定並將網站上線。<br></br>
                從此刻起，您的品牌有了全新數位形象，並可持續為企業創造更多價值。
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <br />
    </section>
  );
}
