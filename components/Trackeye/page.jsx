"use client";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { TweenMax } from "gsap";

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".text");

    elements.forEach((element) => {
      let innerText = element.innerText;
      element.innerHTML = "";

      let textContainer = document.createElement("div");
      textContainer.classList.add("block");

      for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("play");
      });
    });

    const svg = document.querySelector("#svg");
    const mouse = svg.createSVGPoint();

    const leftEye = createEye("#left-eye");
    const rightEye = createEye("#right-eye");

    let requestId = null;

    window.addEventListener("mousemove", onMouseMove);

    function onFrame() {
      let point = mouse.matrixTransform(svg.getScreenCTM().inverse());

      leftEye.rotateTo(point);
      rightEye.rotateTo(point);

      requestId = null;
    }

    function onMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      if (!requestId) {
        requestId = requestAnimationFrame(onFrame);
      }
    }

    function createEye(selector) {
      const element = document.querySelector(selector);

      TweenMax.set(element, {
        transformOrigin: "center",
      });

      let bbox = element.getBBox();
      let centerX = bbox.x + bbox.width / 2;
      let centerY = bbox.y + bbox.height / 2;

      function rotateTo(point) {
        let dx = point.x - centerX;
        let dy = point.y - centerY;

        let angle = Math.atan2(dy, dx);

        TweenMax.to(element, 0.3, {
          rotation: angle + "_rad_short",
        });
      }

      return {
        element,
        rotateTo,
      };
    }
  }, []);

  return (
    <section className="section_track h-[300px] md:h-[500px] lg:h-[700px] relative border-1 border-black">
      {/* <nav>
        <div className="logo">
          <a href="#">Cochi La</a>
        </div>
        <div className="links">
          <a href="#">Services</a>
          <a href="#">Our Work</a>
          <a href="#">About Us</a>
          <a href="#">Insights</a>
        </div>
        <div className="contact">
          <a href="#">Contact</a>
        </div>
      </nav>
      <footer>
        <div className="mail">
          <a href="#">hello@domain.com</a>
        </div>
        <div className="location">
          <a href="#">Vancouver, British Columbia</a>
        </div>
      </footer> */}
      <div className="wrapper bg-[#0184d5] static z-[-1]  mt-[-100px] md:mt-[-300px] lg:mt-[-400px]">
        <svg id="svg" viewBox="0 0 1000 1000">
          <g id="left-eye">
            <circle
              className="eye-outer"
              cx="400"
              cy="500"
              r="100"
              stroke="#0f0f0f"
              strokeWidth="2"
              fill="#fff"
            />
            <circle
              className="eye-inner"
              cx="480"
              cy="500"
              r="20"
              fill="#0f0f0f"
            />
          </g>
          <g id="right-eye">
            <circle
              className="eye-outer"
              cx="600"
              cy="500"
              r="100"
              stroke="#0f0f0f"
              strokeWidth="2"
              fill="#fff"
            />
            <circle
              className="eye-inner"
              cx="680"
              cy="500"
              r="20"
              fill="#0f0f0f"
            />
          </g>
        </svg>
        <div className="container hidden">
          <div>
            <a className="text-[90px] text " href="www.google.com.tw">
              Instagram
            </a>
          </div>
          <div>
            <a className="text-[90px] text " href="www.google.com">
              Behance
            </a>{" "}
            <a className="text-[90px] text " href="#">
              Facebook
            </a>
          </div>
          <div>
            <a className="text-[90px] text " href="#">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
