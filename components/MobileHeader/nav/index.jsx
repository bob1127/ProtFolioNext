import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>

          <ul>
            <a href="/pages">
              <li className="border-spacing-3">精選專案</li>
            </a>
            <a href="/about">
              <li className="border-spacing-3">關於我們</li>
            </a>
            <a href="/about">
              <li className="border-spacing-3">關於我們</li>
            </a>
            <a href="/about">
              <li className="border-spacing-3">關於我們</li>
            </a>
          </ul>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
