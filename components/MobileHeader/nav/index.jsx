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
            <a href="/">
              <li className="border-spacing-3">首頁</li>
            </a>
            <a href="/pages">
              <li className="border-spacing-3">精選案例</li>
            </a>
            <a href="/blogs">
              <li className="border-spacing-3">Blog</li>
            </a>
            <a href="/quotation">
              <li className="border-spacing-3">專案報價</li>
            </a>
            <a href="/service">
              <li className="border-spacing-3">服務內容</li>
            </a>
            <a href="/technology">
              <li className="border-spacing-3">使用技術</li>
            </a>
          </ul>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
