import { AnimatePresence, useAnimate, usePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiClock, FiPlus, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "套版網站",
      checked: false,
      time: "5 mins",
    },
    {
      id: 2,
      text: "客製化網站",
      checked: false,
      time: "10 mins",
    },
    {
      id: 3,
      text: "Have existential crisis",
      checked: true,
      time: "12 hrs",
    },
    {
      id: 4,
      text: "Get dog food",
      checked: false,
      time: "1 hrs",
    },
  ]);

  const handleCheck = (id) => {
    setTodos((pv) =>
      pv.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const removeElement = (id) => {
    setTodos((pv) => pv.filter((t) => t.id !== id));
  };

  return (
    <section className="min-h-screen relative py-24">
      <div className="mx-auto w-full max-w-xl px-4">
        <Header />
        <Todos
          removeElement={removeElement}
          todos={todos}
          handleCheck={handleCheck}
        />
      </div>
      <Form setTodos={setTodos} />
    </section>
  );
}

const Header = () => {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-medium text-white">Good morning! ☀️</h1>
      <p className="text-black">請選擇你的需求</p>
    </div>
  );
};

const Form = ({ setTodos }) => {
  const [visible, setVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(""); // 新增的限定選項
  const [time, setTime] = useState(15);
  const [unit, setUnit] = useState("mins");

  const taskOptions = [
    "頁面優化 - 價格:NT.4000",
    "套版網站 - 價格:NT.7000",
    "商品攝影 - 價格:NT.7000",
    "基本seo行銷 - 價格:NT.7000",
    "Banner設計- 價格:NT.7000",
  ]; // 限定的選項

  const handleSubmit = () => {
    if (!selectedTask.length) {
      return;
    }

    setTodos((pv) => [
      {
        id: Math.random(),
        text: selectedTask,
        checked: false,
        time: `${time} ${unit}`,
      },
      ...pv,
    ]);

    setSelectedTask(""); // 重置選項
    setTime(15);
    setUnit("mins");
  };

  return (
    <div className=" absolute bottom-4 border-white  w-full max-w-xl -translate-x-1/2 mx-auto  left-[50%]  px-4">
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
              className="mb-3 w-full rounded bg-zinc-900 p-3 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-0"
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
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  className="w-24 rounded bg-zinc-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
                  value={time}
                  onChange={(e) => setTime(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  onClick={() => setUnit("mins")}
                  className={`rounded px-1.5 py-1 text-xs ${
                    unit === "mins"
                      ? "bg-white text-zinc-950"
                      : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"
                  }`}
                >
                  mins
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("hrs")}
                  className={`rounded px-1.5 py-1 text-xs ${
                    unit === "hrs"
                      ? "bg-white text-zinc-950"
                      : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"
                  }`}
                >
                  hrs
                </button>
              </div>
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
        className="grid w-full place-content-center rounded-full border border-zinc-700 bg-zinc-900 py-3 text-lg text-white transition-colors hover:bg-zinc-800 active:bg-zinc-900"
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

const Todos = ({ todos, handleCheck, removeElement }) => {
  return (
    <div className="w-full space-y-3">
      <AnimatePresence>
        {todos.map((t) => (
          <Todo
            handleCheck={handleCheck}
            removeElement={removeElement}
            id={t.id}
            key={t.id}
            checked={t.checked}
            time={t.time}
          >
            {t.text}
          </Todo>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Todo = ({ removeElement, handleCheck, id, children, checked, time }) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        animate(
          "p",
          {
            color: checked ? "#6ee7b7" : "#fca5a5",
          },
          {
            ease: "easeIn",
            duration: 0.125,
          }
        );
        await animate(
          scope.current,
          {
            scale: 1.025,
          },
          {
            ease: "easeIn",
            duration: 0.125,
          }
        );

        await animate(
          scope.current,
          {
            opacity: 0,
            x: checked ? 24 : -24,
          },
          {
            delay: 0.75,
          }
        );
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <div>
      <motion.div
        ref={scope}
        layout
        className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleCheck(id)}
          className="size-4 accent-indigo-400"
        />

        <p
          className={`text-white transition-colors ${
            checked && "text-zinc-400"
          }`}
        >
          {children}
        </p>
        <div className="ml-auto flex gap-1.5">
          <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
            <FiClock />
            <span>{time}</span>
          </div>
          <button
            onClick={() => removeElement(id)}
            className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
          >
            <FiTrash2 />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
