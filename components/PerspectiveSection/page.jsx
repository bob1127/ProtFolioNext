"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    AOS.init(); // Initialize AOS

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh] bg-[#ffd446]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-45, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [700, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [1400, 200]);

  return (
    <motion.div
      style={{ scale, rotate, x, y }}
      className="sticky top-0 h-screen bg-[#ffffff] border text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // Use scrollYProgress to create upward float effect
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -400]); // Adjust -400 to control floating distance

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen"
      transition={{
        duration: 6.8,
        ease: [0.1, 0.7, 1.0, 0.1], // Custom cubic-bezier timing function
      }}
    >
      <div className="border py-[100px] bg-black h-[400vh] border-black rounded-[120px]">
        <div className="txt flex justify-center py-4">
          <h2 className="text-white text-[90px] font-bold">精選方案價格</h2>
        </div>
        <div className="w-full justify-between  px-[30px] flex">
          <div className="left w-[300px] text-[40px] text-white font-bold">
            Upcoming <br></br>events
          </div>
          <div className="right text-white w-[400px] ">
            Get ready for a marketing revolution! Explore dynamic events packed
            with insights, networking, and innovation.
          </div>
        </div>
        <motion.div
          style={{ y: yOffset }}
          className="project-plan mx-auto mt-[100px] flex w-full"
          transition={{
            duration: 2.8,
            ease: [0.1, 0.7, 1.0, 0.1], // Custom cubic-bezier timing function for the floating effect
          }}
        >
          <div
            data-aos-duration="400"
            data-aos="fade-up"
            className="border mt-[450px]  border-white w-1/3 m-1 h-[500px]"
          >
            <img
              src="/images/fantastic_hare_36410_man_cartoon_3d_style_8abe7fee-0cf9-4c36-9032-bccc8ac151e6-2.png"
              className="w-full"
            ></img>
          </div>
          <div
            data-aos-duration="400"
            data-aos="fade-up"
            data-aos-delay="150"
            className="border mt-[450px]  border-white w-1/3 m-1 h-[500px]"
          >
            <img
              src="/images/fantastic_hare_36410_man_cartoon_3d_style_8abe7fee-0cf9-4c36-9032-bccc8ac151e6-2.png"
              className="w-full"
            ></img>
          </div>
          <div
            data-aos-duration="400"
            data-aos="fade-up"
            data-aos-delay="300"
            className="border mt-[450px]  border-white w-1/3 m-1 h-[500px]"
          >
            <img
              src="/images/fantastic_hare_36410_man_cartoon_3d_style_8abe7fee-0cf9-4c36-9032-bccc8ac151e6-2.png"
              className="w-full"
            ></img>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
