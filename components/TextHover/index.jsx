import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function Home() {
  return (
    <section className="grid place-content-center gap-2 bg-[#15a4fd] relative z-[9999999] text-white px-8 py-24 ">
      <FlipLink href="#">Website</FlipLink>
      <FlipLink href="#">design-Life</FlipLink>
      {/* <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink> */}
    </section>
  );
}

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative text-[#f5f5f5] block overflow-hidden whitespace-nowrap text-[45px] uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={`top-${i}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
