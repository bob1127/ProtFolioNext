"use client";

import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import Head from "next/head";
import { Engine, Runner, World, Bodies, Body, Events } from "matter-js";
import gsap from "gsap";
// import Inner from "../components/Inner/index.jsx";
import Script from "next/script";
// import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
// import Navbar from "../components/sideTabs/index.jsx";
// import Footer from "../components/Footer/index.jsx";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import Link from "next/link";
// import Nav from "../components/Navbar/page.jsx";
import { useEffect } from "react";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [gravityEnabled, setGravityEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const bodiesRef = useRef([]);
  const initialPositionsRef = useRef([]);
  useEffect(() => {
    // Splitting text into spans
    const splitTextIntoSpans = (selector) => {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => {
            return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
          })
          .join("");
        element.innerHTML = splitText;
      });
    };

    splitTextIntoSpans("h1");

    const engine = Engine.create({
      gravity: { x: 0, y: 0 },
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    const items = document.querySelectorAll(".item");

    initialPositionsRef.current = Array.from(items).map((item) => ({
      x: item.offsetLeft,
      y: item.offsetTop,
      angle: 0,
    }));

    bodiesRef.current = Array.from(items).map((item, index) => {
      const body = Bodies.rectangle(
        initialPositionsRef.current[index].x + item.offsetWidth / 2,
        initialPositionsRef.current[index].y + item.offsetHeight / 2,
        item.offsetWidth,
        item.offsetHeight,
        {
          restitution: 0.75,
          friction: 0.5,
          frictionAir: 0.0175,
          isStatic: true,
        }
      );
      World.add(engine.world, body);
      return body;
    });

    const floor = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 5,
      window.innerWidth,
      20,
      { isStatic: true }
    );
    World.add(engine.world, floor);

    const toggleClipPath = () => {
      const overlay = document.querySelector(".overlay");
      const overlayProps = {
        clipPath: gravityEnabled
          ? "polygon(5% 60%, 95% 60%, 95% 100%, 5% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power3.inOut",
      };

      const buttonProps = {
        color: gravityEnabled ? "#fff" : "#000",
        delay: 0.5,
        duration: 1,
      };

      const textProps = {
        y: gravityEnabled ? 0 : 30,
        delay: gravityEnabled ? 0.75 : 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1 * (gravityEnabled ? 1 : -1),
      };

      const h1Props = {
        fontSize: gravityEnabled ? "20vw" : "10vw",
        duration: 1,
        ease: "power4.inOut",
        stagger: gravityEnabled ? -0.035 : 0.035,
      };

      const h1PosProps = {
        left: gravityEnabled ? "32.5%" : "0%",
        duration: 1,
        ease: "power4.inOut",
      };

      gsap.to(overlay, overlayProps);
      gsap.to("#toggle-btn", buttonProps);

      gsap.to(".overlay h1", h1PosProps);
      gsap.to(".overlay h1 span", h1Props);
      document.querySelectorAll(".col").forEach((col) => {
        gsap.to(col.querySelectorAll(".line p"), textProps);
      });
    };

    const handleToggle = () => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (!gravityEnabled) {
        engine.world.gravity.y = 1;
        bodiesRef.current.forEach((body) => {
          Body.setStatic(body, false);
          Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
        });
        setGravityEnabled(true);
      } else {
        engine.world.gravity.y = 0;
        bodiesRef.current.forEach((body, index) => {
          Body.setStatic(body, true);
          const startPos = { x: body.position.x, y: body.position.y };
          const startAngle = body.angle;
          const endPos = {
            x:
              initialPositionsRef.current[index].x +
              items[index].offsetWidth / 2,
            y:
              initialPositionsRef.current[index].y +
              items[index].offsetHeight / 2,
          };
          const endAngle = 0;
          const startTime = performance.now();

          const duration = 0.75;
          const easeOutQuad = (t) => t * (2 - t);

          const animateBack = (currentTime) => {
            const elapsedTime = (currentTime - startTime) / 1000;
            const t = Math.min(elapsedTime / duration, 1);
            const easedT = easeOutQuad(t);

            const x = startPos.x + easedT * (endPos.x - startPos.x);
            const y = startPos.y + easedT * (endPos.y - startPos.y);
            const angle = startAngle + easedT * (endAngle - startAngle);

            setTimeout(() => {
              Body.setPosition(body, { x, y });
              Body.setAngle(body, angle);
            }, 750);

            if (t < 1) {
              requestAnimationFrame(animateBack);
            }
          };

          requestAnimationFrame(animateBack);
        });
        setGravityEnabled(false);
      }

      toggleClipPath();

      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    };

    document
      .getElementById("toggle-btn")
      .addEventListener("click", handleToggle);

    Events.on(engine, "afterUpdate", () => {
      bodiesRef.current.forEach((body, index) => {
        const item = items[index];
        item.style.top = `${body.position.y - item.offsetHeight / 2}px`;
        item.style.left = `${body.position.x - item.offsetWidth / 2}px`;
        item.style.transform = `rotate(${body.angle}rad)`;
      });
    });
  }, [gravityEnabled]);

  useEffect(() => {
    // 延遲 300ms 來啟動動畫
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 清除計時器
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/css/wisdom-blog-template.webflow.7452c8b2a.css"
        />
        <link
          rel="stylesheet"
          href="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/css/wisdom-blog-template.webflow.7452c8b2a.css"
        />
      </Head>

      <nav
        className="nav"
        style={{
          transform:
            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
          opacity: 1,
        }}
      >
        <div
          id="w-node-_5f982de6-354e-887e-0847-31d84c7e05c2-4c7e05c1"
          className="nav-left-wrap"
          style={{ display: "none" }}
        >
          <a
            href="/"
            className="nav-link _3 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">Home</div>
          </a>
          <a
            href="/articles"
            className="nav-link _2 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">Articles</div>
          </a>
          <a
            href="/authors"
            className="nav-link _1 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">Authors</div>
          </a>
        </div>
        <div
          id="w-node-_5f982de6-354e-887e-0847-31d84c7e05cc-4c7e05c1"
          className="nav-trigger"
        >
          <div className="nav-icon-wrap">
            <div className="nav-burger-icon">
              <img
                src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a68994fa9a5f9b2322527b_icon-burger-menu.svg"
                loading="eager"
                alt=""
                className="img-cover"
              />
            </div>
            <div
              className="nav-close-icon"
              style={{
                transform:
                  "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="https://assets-global.website-files.com/65a118d82cee7eeed8c90be2/65a689948ece87037ef5391b_icon-burger-close.svg"
                loading="eager"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="nav-trigger-labels-wrap">
            <div className="nav-trigger-label-relative">
              <Link href="/blogs" className="nav-label">
                Go Back
              </Link>
            </div>
            <div
              className="nav-trigger-label-absolute"
              style={{
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="nav-label">close</div>
            </div>
          </div>
        </div>
        <div
          id="w-node-_5f982de6-354e-887e-0847-31d84c7e05d9-4c7e05c1"
          className="nav-right-wrap"
          style={{ display: "none" }}
        >
          <a
            href="/quotation"
            className="nav-link _1 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">About</div>
          </a>
          <a
            href="/categories"
            className="nav-link _2 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">categories</div>
          </a>
          <a
            href="/contact"
            className="nav-link _3 w-inline-block"
            style={{
              transform:
                "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <div className="nav-label">contact</div>
          </a>
        </div>
      </nav>
      <div className="page-wrap h-[150vh]">
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden"
        >
          <button
            id="toggle-btn"
            className="absolute top-8 right-8 bg-transparent border-none text-xs font-mono uppercase px-4 py-2 text-black mix-blend-difference z-20 cursor-pointer"
          >
            [ Drop / Raise ]
          </button>

          <div className="container absolute w-full h-full z-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={`item item-${
                  index + 1
                } absolute w-[90px] h-[60px] border-2 border-black`}
              >
                <img
                  src={`/assets/img${index + 1}.jpg`}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="overlay absolute top-0 left-0 w-full h-full p-4 bg-[#aaaaa0] z-0 clip-path-polygon">
            <h1 className="absolute bottom-0 left-0 p-4 font-mono uppercase leading-none">
              Codegrid
              <span className="text-[10vw]"></span>
            </h1>
          </div>

          <div className="content flex relative w-full">
            {["About Us", "Services", "Projects", "Resources"].map(
              (title, colIndex) => (
                <div key={colIndex} className="col flex-1 p-8 gap-8">
                  <div className="line mb-4 opacity-50">
                    <p>{title}</p>
                  </div>
                  {[
                    "Our Team",
                    "Web Development",
                    "E-commerce",
                    "Tutorials",
                  ].map((item, lineIndex) => (
                    <div key={lineIndex} className="line">
                      <p className="absolute text-xs uppercase transform translate-y-[30px] text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// reportWebVitals();
