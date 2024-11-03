import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { slide, opacity, perspective } from "./anim"; // Adjust this import if the anims are defined elsewhere

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const Inner = ({ children }) => {
  const router = useRouter();

  const navigate = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="inner">
      <motion.div className="slide" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="header hidden md:block z-[99999999]">
            <a
              href="/"
              className="Company-logo"
              onClick={(e) => navigate(e, "/")}
            >
              Home-LOGO
            </a>
            <a href="/quotation">關於我們</a>
            <a href="/quotation-2">SEO 行銷</a>
            <a href="/quotation-3">網頁行銷</a>
            <a href="/quotation" onClick={(e) => navigate(e, "/quotation")}>
              網站作品
            </a>
            <a href="/">合作案例</a>
            <a href="/">Home</a>
            <a href="/quotation">企業形象影片</a>
            <a href="/quotation">聯絡我們</a>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
