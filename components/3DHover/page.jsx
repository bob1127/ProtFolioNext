"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { floating1 } from "./data.js";

import { floating2 } from "./data.js";
export default function Home() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      <div ref={plane1} className={styles.plane}>
        <Image
          src={floating1}
          className="w-full hidden lg:block object-contain"
          alt="image"
          height={1080}
          width={2200}
        />
        <Image
          src={floating2}
          className="w-full block lg:hidden object-contain"
          alt="image"
          height={1080}
          width={2200}
        />
      </div>

      <div className={styles.title}>
        <h1 className="text-[2.5rem] 2xl:text-[4.5rem] leading-normal text-white">
          全方位思維的網站設計專家
        </h1>
        <p className="text-[16px] xl:text-[2.5rem] text-white"> 極客網頁設計</p>
      </div>
    </main>
  );
}
