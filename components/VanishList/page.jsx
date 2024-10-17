import React, { useState } from "react";
import { FiClock, FiPlus, FiTrash2 } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import TodoList from "./Todo"; // 引入新的 TodoList 組件

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: "套版網站", checked: false, time: "5 mins", price: 7000 },
    { id: 2, text: "客製化網站", checked: false, time: "10 mins", price: 7000 },
    {
      id: 3,
      text: "Have existential crisis",
      checked: true,
      time: "12 hrs",
      price: 0,
    },
    { id: 4, text: "Get dog food", checked: false, time: "1 hrs", price: 0 },
  ]);

  const handleCheck = (id) => {
    setTodos((pv) =>
      pv.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const removeElement = (id) => {
    setTodos((pv) => pv.filter((t) => t.id !== id));
  };

  // Calculate the total price of all todos
  const totalPrice = todos.reduce((sum, todo) => sum + todo.price, 0);

  return (
    <section className="min-h-screen relative py-24">
      <div className="mx-auto w-full max-w-xl px-4">
        <Header />
        <TodoList
          removeElement={removeElement}
          todos={todos}
          handleCheck={handleCheck}
        />
        <div className="mt-6 rounded border border-zinc-700 bg-zinc-900 p-4 text-white">
          <h2 className="text-lg font-medium">總金額</h2>
          <p className="text-xl">NT.{totalPrice}</p>
        </div>
      </div>
      <Form setTodos={setTodos} />
    </section>
  );
}

const Header = () => (
  <div className="mb-6">
    <p className="text-black font-extrabold text-[30px]">"費用計算"</p>
  </div>
);

const Form = ({ setTodos }) => {
  const [visible, setVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(""); // 新增的限定選項
  const [time, setTime] = useState(15);
  const [unit, setUnit] = useState("mins");

  const taskOptions = [
    "方案一(基本方案) Basic- 價格:NT.40000",
    "方案二(進階方案) Plus- 價格:NT.75000",
    "方案三(客製化方案) Customized- 找我聊聊",

    "活動/促銷 LandingPage(基本板型和功能，含基本seo)- 價格:NT.40000",
    "商品攝影-去背(張) - 價格:NT.7000",
    "短影音(拍攝+剪輯) - 價格:NT.500",
    "企業形象影片(拍攝+剪輯) - 價格:NT.30000",
    "影像後製(基本去背 1張) - 價格:NT.700",
    "影像後製(複雜後製 1-5張) - 價格:NT.7000",
    "產品建模(簡易) - 價格:NT.4000",
    "產品建模(複雜) - 價格:NT.8000",
    "產品建模(簡易+交互功能或動畫) - 價格:NT.15000",
    "產品建模(複雜+交互功能或動畫) - 價格:NT.20000",
    "seo優化(網頁結構/meta標籤) - 價格:NT.7000",
    "額外需求",
    "Banner設計- 價格:NT.7000",
  ]; // 限定的選項

  const handleSubmit = () => {
    if (!selectedTask.length) {
      return;
    }

    const selectedPrice = parseInt(selectedTask.split("NT.")[1], 10);

    setTodos((pv) => [
      {
        id: Math.random(),
        text: selectedTask.split(" - 價格:")[0],
        checked: false,
        time: `${time} ${unit}`,
        price: selectedPrice,
      },
      ...pv,
    ]);

    setSelectedTask(""); // 重置選項
    setTime(15);
    setUnit("mins");
  };

  return (
    <div className="absolute bottom-4 border-white w-full max-w-xl -translate-x-1/2 mx-auto left-[50%] px-4">
      <AnimatePresence>
        {visible && (
          <motion.form
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="mb-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
          >
            <select
              value={selectedTask}
              onChange={(e) => setSelectedTask(e.target.value)}
              className="mb-3 w-full rounded bg-green-900 p-3 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-0"
            >
              <option value="" disabled>
                選擇所需方案
              </option>
              <p>算出大約 金額</p>
              {taskOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {/* <input
                  type="number"
                  className="w-24 rounded bg-zinc-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
                  value={time}
                  onChange={(e) => setTime(parseInt(e.target.value, 10))}
                /> */}
                {/* <button
                  type="button"
                  onClick={() => setUnit("mins")}
                  className={`rounded px-1.5 py-1 text-xs ${
                    unit === "mins"
                      ? "bg-white text-zinc-950"
                      : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"
                  }`}
                >
                  mins
                </button> */}
                {/* <button
                  type="button"
                  onClick={() => setUnit("hrs")}
                  className={`rounded px-1.5 py-1 text-xs ${
                    unit === "hrs"
                      ? "bg-white text-zinc-950"
                      : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"
                  }`}
                >
                  hrs
                </button> */}
              </div>
              <button
                type="submit"
                className="rounded  px-1.5 py-1 text-xs text-black w-full border-white border bg-blue-100 py-3 transition-colors hover:bg-blue-500"
              >
                添加
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <button
        onClick={() => setVisible((pv) => !pv)}
        className="grid w-full place-content-center rounded-full border border-zinc-700 bg-black py-3 text-lg text-white transition-colors hover:bg-zinc-800 active:bg-zinc-900"
      >
        <FiPlus
          className={`transition-transform ${
            visible ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};
