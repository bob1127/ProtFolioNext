import { AnimatePresence, motion, usePresence } from "framer-motion";
import React, { useEffect } from "react";
import { FiClock, FiTrash2 } from "react-icons/fi";

const TodoList = ({ todos, handleCheck, removeElement }) => {
  return (
    <div className="w-full space-y-3">
      <AnimatePresence>
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            id={t.id}
            text={t.text}
            checked={t.checked}
            time={t.time}
            price={t.price}
            handleCheck={handleCheck}
            removeElement={removeElement}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const TodoItem = ({
  id,
  text,
  checked,
  time,
  price,
  handleCheck,
  removeElement,
}) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        await new Promise((resolve) => {
          const animation = document.querySelector(`[data-id="${id}"]`);
          animation.animate(
            [
              { opacity: 1, transform: `scale(${checked ? 1.025 : 1.025})` },
              {
                opacity: 0,
                transform: `scale(${checked ? 1.025 : 1.025})`,
              },
            ],
            {
              duration: 0.5,
              easing: "ease-in",
              fill: "forwards",
            }
          ).onfinish = resolve;
        });
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <motion.div
      data-id={id}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-green-400 p-3"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
        className="size-4 accent-indigo-400"
      />
      <p
        className={`text-black transition-colors ${checked && "text-zinc-400"}`}
      >
        {text}
      </p>
      <div className="ml-auto flex gap-1.5">
        {/* <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
          <FiClock />
          <span>{time}</span>
        </div> */}
        <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
          NT.{price}
        </div>
        <button
          onClick={() => removeElement(id)}
          className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

export default TodoList;
