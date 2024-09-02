import { useEffect, useState } from "react";
import anime from "animejs";

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const [directionForward, setDirectionForward] = useState(true);

  useEffect(() => {
    const items = document.querySelectorAll(".card-slider .items .item");

    const getCard = (item) => item.querySelector(".card");
    const getTitle = (item) => item.querySelector(".title span");

    const setItems = () => {
      items.forEach((item, index) => {
        getTitle(item).innerHTML = getTitle(item).textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );

        if (index === current) return;

        anime.set(getCard(item), {
          translateX: "100vw",
        });

        anime.set(getTitle(item).querySelectorAll(".letter"), {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        });
      });

      anime.set(items[current], {
        translateX: 0,
        opacity: 1,
      });
    };

    const animate = {
      in(item) {
        const card = getCard(item);
        const title = getTitle(item);

        const tl = anime.timeline({
          duration: 1000,
          easing: "easeOutExpo",
        });

        tl.add({
          targets: card,
          translateX: directionForward ? ["100vw", 0] : ["-100vw", 0],
          rotate: [40, 0],
        }).add(
          {
            targets: title.querySelectorAll(".letter"),
            clipPath: [
              "polygon(0 0, 100% 0, 100% 0, 0 0)",
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ],
            translateY: directionForward ? ["1em", 0] : ["-1em", 0],
            delay: anime.stagger(40),
          },
          "-=1000"
        );

        return tl;
      },

      out(item) {
        const card = getCard(item);
        const title = getTitle(item);

        const tl = anime.timeline({
          duration: 1000,
          easing: "cubicBezier(0.86,0,0.07,1);",
        });

        tl.add({
          targets: card,
          translateX: directionForward ? [0, "-100vw"] : [0, "100vw"],
          rotate: [0, -40],
        }).add(
          {
            targets: title.querySelectorAll(".letter"),
            clipPath: [
              "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
              "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            ],
            translateY: directionForward ? [0, "-1em"] : [0, "1em"],
            delay: anime.stagger(40),
          },
          "-=1000"
        );

        return tl;
      },
    };

    const updateClasses = () => {
      items.forEach((item, index) => {
        if (index === current) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });
    };

    const next = () => {
      if (!directionForward) {
        setDirectionForward(true);
      }
      animate.out(items[current]);
      setCurrent((current + 1) % items.length);
      setTimeout(() => {
        animate.in(items[current]);
      }, 500);
      updateClasses();
    };

    const prev = () => {
      if (directionForward) {
        setDirectionForward(false);
      }
      animate.out(items[current]);
      setCurrent((current - 1 + items.length) % items.length);
      setTimeout(() => {
        animate.in(items[current]);
      }, 500);
      updateClasses();
    };

    document.querySelector(".next").addEventListener("click", next);
    document.querySelector(".prev").addEventListener("click", prev);

    setItems();
  }, [current, directionForward]);

  return (
    <div className="card-slider w-screen h-screen bg-gray-900 relative">
      <div className="nav">
        <div className="prev absolute h-8 w-8 stroke-white cursor-pointer z-10 transform scale-200 top-16 left-16">
          <svg viewBox="0 0 50 9">
            <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
          </svg>
        </div>
        <div className="next absolute h-8 w-8 stroke-white cursor-pointer z-10 transform scale-200 rotate-180 bottom-16 right-16">
          <svg viewBox="0 0 50 9">
            <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
          </svg>
        </div>
      </div>
      <div className="items relative">
        <div className="item absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
          <p className="title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-white text-8xl font-thin uppercase leading-tight z-10">
            <span>extra dry</span>
          </p>
          <div className="card h-[400px] w-[300px] relative">
            <img
              className="card-bg absolute top-0 left-0 w-full h-full transform scale-125 transition-transform duration-2000"
              src="./images/img-1.png"
              alt="extra dry"
            />
          </div>
        </div>
        <div className="item absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
          <p className="title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-white text-8xl font-thin uppercase leading-tight z-10">
            <span>filson rush</span>
          </p>
          <div className="card h-[400px] w-[300px] relative">
            <img
              className="card-bg absolute top-0 left-0 w-full h-full transform scale-125 transition-transform duration-2000"
              src="./images/img-2.png"
              alt="filson rush"
            />
          </div>
        </div>
        <div className="item absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
          <p className="title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-white text-8xl font-thin uppercase leading-tight z-10">
            <span>red sauce</span>
          </p>
          <div className="card h-[400px] w-[300px] relative">
            <img
              className="card-bg absolute top-0 left-0 w-full h-full transform scale-125 transition-transform duration-2000"
              src="./images/img-3.png"
              alt="red sauce"
            />
          </div>
        </div>
        <div className="item absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
          <p className="title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-white text-8xl font-thin uppercase leading-tight z-10">
            <span>extra loud</span>
          </p>
          <div className="card h-[400px] w-[300px] relative">
            <img
              className="card-bg absolute top-0 left-0 w-full h-full transform scale-125 transition-transform duration-2000"
              src="./images/img-4.png"
              alt="extra loud"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
