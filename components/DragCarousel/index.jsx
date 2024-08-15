"use client";

import { MouseEvent as ReactMouseEvent, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image.js";
import { cn } from "../../lib/utils.js";

const START_INDEX = 1;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 509;

const CURSOR_SIZE = 80;

const articles = [
  {
    title:
      "Building a fully customisable carousel slider with swipe gestures and navigation using Framer Motion",
    url: "https://www.zensor.com.tw/images/Products-Detail-Img/ACIP100/電化學分析儀-模擬器-交流阻抗版-開箱.webp",
  },
  {
    title:
      "Building a customisable Input component with NextJS, ReactHookForm, TailwindCSS and TypeScript",
    url: "https://www.zensor.com.tw/images//Products-Detail-Img/ECAS100/電化學分析儀-模擬器-防滑材質.webp",
  },
  {
    title: "Handling Forms in NextJS with busboy, ReactHookForm and TypeScript",
    url: "https://www.zensor.com.tw/images/Products-Detail-Img/GTE100/突破性的玻碳膜材質.webp",
  },
];

export default function SuggestedCarousel() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < articles.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const [isDragging, setIsDragging] = useState(false);

  function handleDragSnap(_, { offset: { x: dragOffset } }) {
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");
    animatedX.stop();
    const currentOffset = offsetX.get();

    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && dragOffset > offsetWidth + itemOffset && i > 1) ||
        (dragOffset < 0 &&
          dragOffset < offsetWidth + -itemOffset &&
          i < itemsRef.current.length - 2)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);

    setActiveSlide((prev) => prev - 1);
  }

  function scrollNext() {
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);

    setActiveSlide((prev) => prev + 1);
  }

  const [hoverType, setHoverType] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animatedHoverX = useSpring(mouseX, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });
  const animatedHoverY = useSpring(mouseY, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });

  function navButtonHover({ currentTarget, clientX, clientY }) {
    const parent = currentTarget.offsetParent;
    if (!parent) return;
    const { left: parentLeft, top: parentTop } = parent.getBoundingClientRect();

    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetFromCenterX = clientX - centerX;
    const offsetFromCenterY = clientY - centerY;

    mouseX.set(left - parentLeft + offsetFromCenterX / 4);
    mouseY.set(top - parentTop + offsetFromCenterY / 4);
  }

  function disableDragClick(e) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <>
      <div className="text-center px-[30px]">
        <div className="flex justify-center gap-4">
          <Link
            className="text-sm underline underline-offset-2 hover:text-lime-300"
            href="/about"
            rel="noopener noreferrer"
          >
            更多案例-網頁設計
          </Link>
          <Link
            className="text-sm underline underline-offset-2 hover:text-lime-300"
            href="/about-3"
            rel="noopener noreferrer"
          >
            跟我聯繫-了解更多
          </Link>
        </div>
        <h1 className="my-[20px] text-[40px] lg:text-6xl font-extrabold uppercase">
          網頁行銷案例
        </h1>
        <p className="text-sm mb-5 text-gray-400">
          一頁式網站｜SEO 行銷｜形象企業網站
        </p>
      </div>
      <div className="group container ">
        <motion.div
          className={cn(
            "pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            x: animatedHoverX,
            y: animatedHoverY,
          }}
        >
          <motion.div
            layout
            className={cn(
              "grid h-full place-items-center rounded-full bg-lime-300",
              hoverType === "click" && "absolute inset-7 h-auto"
            )}
          >
            <motion.span
              layout="position"
              className={cn(
                "w-full select-none text-center font-medium uppercase text-gray-900",
                (hoverType === "prev" || hoverType === "next") &&
                  "absolute inset-x-0 top-2",
                hoverType === "click" &&
                  "absolute top-full mt-0.5 w-auto text-sm font-bold text-lime-300"
              )}
            >
              {hoverType ?? "drag"}
            </motion.span>
          </motion.div>
        </motion.div>
        <div className="relative overflow-hidden">
          <motion.ul
            ref={containerRef}
            className="flex cursor-none items-start"
            style={{
              x: animatedX,
            }}
            drag="x"
            dragConstraints={{
              left: -(FALLBACK_WIDTH * (articles.length - 1)),
              right: FALLBACK_WIDTH,
            }}
            onMouseMove={({ currentTarget, clientX, clientY }) => {
              const parent = currentTarget.offsetParent;
              if (!parent) return;
              const { left, top } = parent.getBoundingClientRect();
              mouseX.set(clientX - left - CURSOR_SIZE / 2);
              mouseY.set(clientY - top - CURSOR_SIZE / 2);
            }}
            onDragStart={() => {
              containerRef.current?.setAttribute("data-dragging", "true");
              setIsDragging(true);
            }}
            onDragEnd={handleDragSnap}
          >
            {articles.map((article, index) => {
              const active = index === activeSlide;
              return (
                <motion.li
                  layout
                  key={article.title}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={cn(
                    "group relative shrink-0 select-none px-3 transition-opacity duration-300",
                    !active && "opacity-30"
                  )}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                  style={{
                    flexBasis: active ? "40%" : "30%",
                  }}
                >
                  <Link
                    href={article.url}
                    className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    onClick={disableDragClick}
                  >
                    <Image
                      loading="lazy"
                      width={500}
                      height={800}
                      placeholder="empty"
                      src={article.url}
                      alt={article.title}
                    />
                  </Link>
                  <div
                    className={cn(
                      "mt-4 flex justify-center",
                      !active && "hidden"
                    )}
                  ></div>
                </motion.li>
              );
            })}
          </motion.ul>
          <button
            type="button"
            className="group absolute left-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            onMouseEnter={() => setHoverType("prev")}
            onMouseMove={(e) => navButtonHover(e)}
            onMouseLeave={() => setHoverType(null)}
          >
            <span className="sr-only">Previous Guide</span>
            <MoveLeft className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50" />
          </button>
          <button
            type="button"
            className="group absolute right-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            onMouseEnter={() => setHoverType("next")}
            onMouseMove={(e) => navButtonHover(e)}
            onMouseLeave={() => setHoverType(null)}
          >
            <span className="sr-only">Next Guide</span>
            <MoveRight className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50" />
          </button>
        </div>
      </div>
    </>
  );
}
