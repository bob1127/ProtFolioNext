"use client";
import styles from "../../styles/TextMask.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = [" 讓你的網站更好", "極客為您服務"];

export default function Home() {
  return (
    <div>
      <MaskText />
    </div>
  );
}

export function MaskText() {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 2,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.175 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              className="text-[35px] md:text-[50px] xl:text-[80px] leading-normal"
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
