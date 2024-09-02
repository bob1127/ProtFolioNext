import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Form = ({ setTodos }) => {
  const [visible, setVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");
  const [time, setTime] = useState(15);

  const taskOptions = [
    "頁面優化 - 價格:NT.4000",
    "套版網站 - 價格:NT.7000",
    "商品攝影 - 價格:NT.7000",
    "基本seo行銷 - 價格:NT.7000",
    "Banner設計- 價格:NT.7000",
  ];

  const handleSubmit = () => {
    if (!selectedTask.length) {
      return;
    }

    setTodos((pv) => [
      {
        id: Math.random(),
        text: selectedTask,
        checked: false,
        time: `${time} mins`, // Always in minutes
        price: parseInt(selectedTask.split("價格:NT.")[1]) || 0,
      },
      ...pv,
    ]);

    setSelectedTask("");
    setTime(15);
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
            className="mb-6 w-full rounded border border-zinc-700 bg-blue-100 p-3"
          >
            <select
              value={selectedTask}
              onChange={(e) => setSelectedTask(e.target.value)}
              className="mb-3 w-full rounded bg--900 p-3 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-0"
            >
              <option value="" disabled>
                Select a task
              </option>
              {taskOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="flex items-center justify-between">
              <input
                type="number"
                className="w-24 rounded bg-green-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
                value={time}
                onChange={(e) => setTime(parseInt(e.target.value))}
              />
              <button
                type="submit"
                className="rounded bg-indigo-600 px-1.5 py-1 text-xs text-indigo-50 transition-colors hover:bg-indigo-500"
              >
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <button
        onClick={() => setVisible((pv) => !pv)}
        className="grid w-full place-content-center rounded-full border border-zinc-700 bg-blue-100-900 py-3 text-lg text-white transition-colors hover:bg-zinc-800 active:bg-zinc-900"
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

export default Form;
