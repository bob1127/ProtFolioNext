// components/HorizontalScroll.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "tailwindcss/tailwind.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const imageLoader = ({ src, width, quality }) => {
  return `https://cdn.prod.website-files.com/61789b489343c8242282a0ae/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const HorizontalScroll = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true,
      },
    });

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });

    sections.forEach((section) => {
      let text = section.querySelectorAll(".anim");
      if (text.length === 0) return;
      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="wrapper overflow-x-hidden relative">
      <div className="container flex  w-[100vw] md:w-[600vw] xl:w-[1000vw]">
        <svg
          className="absolute top-48 left-10 w-1/2"
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#D9D9D9"
          />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="10"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect className="mask" y="-49" height="99" fill="black" />
          </g>
        </svg>
        {/* <h4 className="font-bold text-[40px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe
          delectus ut quibusdam dolorem neque tempora nihil, architecto iure
          eveniet iste quia autem cumque ipsum incidunt odit recusandae dolore
          tempore.
        </h4> */}
        <a href="Blog-02" className="w-[400px] duration-150 hover:scale-95">
          <section className="w-[40vw] xl:w-[24vw] bg-white mx-1 xl:mx-5 border border-black p-2">
            <Image
              src="64575947bc71a0cf995a7b34_JEubAaiocBrAyYwOH51Q-ctbfZTy_wnJ_BaDpn7swZc.jpeg"
              loader={imageLoader}
              width={600}
              height={600}
            />
            <div className="txt group  p-[10px] xl:p-[20px]">
              <b className=" text-[14px] xl:text-[20px] scale-100 group-hover:scale-105 font-bold">
                網頁設計會很花錢嗎？
              </b>
              <p>lorem</p>
              <p className="text-[10px] xl:text-[14px] leading-normal ">
                在當今數位化的時代，擁有一個能夠吸引流量並轉化為潛在客戶的網站已成為每個企業成功的關鍵。搜尋引擎優化（SEO）不僅是提升網站曝光度的工具，更是確保您的業務在競爭中脫穎而出的必要策略。本文將深入探討如何透過優化網站設計來增加搜尋引擎的曝光度和排名。
              </p>
            </div>
          </section>
        </a>
        <a href="Blog-02" className="w-[400px] duration-150 hhover:scale-95">
          <section className="w-[40vw] xl:w-[22vw] bg-white border xl:mx-5 mx-1 border-black p-2">
            <Image
              src="65d3c8696872c4511250050d_WjZwveiN5tkISPOXgh1QGs4btSQ2PftimmpMDBIsMx8.png"
              loader={imageLoader}
              width={600}
              height={600}
            />
            <div className="txt group  px-0 xl:p-[20px]">
              <b className=" text-[14px] xl:text-[20px] scale-100 group-hover:scale-105 font-bold">
                網頁設計會很花錢嗎？
              </b>
              <p className="text-[10px] xl:text-[14px] leading-normal ">
                在當今數位化的時代，擁有一個能夠吸引流量並轉化為潛在客戶的網站已成為每個企業成功的關鍵。搜尋引擎優化（SEO）不僅是提升網站曝光度的工具，更是確保您的業務在競爭中脫穎而出的必要策略。本文將深入探討如何透過優化網站設計來增加搜尋引擎的曝光度和排名。
              </p>
            </div>
          </section>
        </a>
        <a href="Blog-02" className="w-[400px] duration-150 hover:scale-95">
          <section className="w-[40vw] xl:w-[27vw] bg-white border xl:mx-5 mx-1 border-black p-2">
            <Image
              src="645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg"
              loader={imageLoader}
              width={600}
              height={600}
            />
            <div className="txt group  p-0 xl:p-[20px]">
              <b className=" text-[14px] xl:text-[20px] scale-100 group-hover:scale-105 font-bold">
                網頁設計會很花錢嗎？
              </b>
              <p className="text-[10px] xl:text-[14px] leading-normal ">
                在當今數位化的時代，擁有一個能夠吸引流量並轉化為潛在客戶的網站已成為每個企業成功的關鍵。搜尋引擎優化（SEO）不僅是提升網站曝光度的工具，更是確保您的業務在競爭中脫穎而出的必要策略。本文將深入探討如何透過優化網站設計來增加搜尋引擎的曝光度和排名。
              </p>
            </div>
          </section>
        </a>
      </div>
      <section></section>
    </div>
  );
};

export default HorizontalScroll;