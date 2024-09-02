import React from "react";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <section className="hidden sm:block px-8 py-5 text-white">
      <FlipLink href="#">WEBSITE-DESIGN</FlipLink>

      <FlipLink href="#">Sir JEEEK</FlipLink>
      {/* <FlipLink href="#">PHOTOGRSPHY</FlipLink>
      <FlipLink href="#">MARKETING</FlipLink> */}
    </section>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden  text-[40px] md:text-[45px] lg:text-[60px] text-white xl:text-[80px] font-black text-center leading-normal xl:leading-[80px]"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
