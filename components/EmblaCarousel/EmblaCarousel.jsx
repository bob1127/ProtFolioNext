import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons"; // Ensure this path is correct
import { DotButton, useDotButton } from "./EmblaCarosuelDotButton";
import { gsap } from "gsap";

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isHovered, setIsHovered] = useState(false);
  const dragLabelRef = useRef(null);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    if (!emblaApi) return;
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    if (!emblaApi) return;
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `translateX(${translate}%)`;
        }
      });
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(dragLabelRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
    if (emblaRef.current) {
      emblaRef.current.style.cursor = "none"; // Hide default cursor
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(dragLabelRef.current, {
      autoAlpha: 0,
      scale: 0.5,
      duration: 0.5,
      ease: "power3.out",
    });
    if (emblaRef.current) {
      emblaRef.current.style.cursor = "auto"; // Restore default cursor
    }
  };

  const handleMouseMove = (event) => {
    if (!dragLabelRef.current || !isHovered) return;
    const { clientX, clientY } = event;
    // Update the position of dragLabelRef to be above the cursor
    gsap.to(dragLabelRef.current, {
      x: clientX,
      y: clientY - 20, // Adjust this value to position above the cursor
      duration: 0.1,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);

    return () => {
      if (emblaApi) {
        emblaApi.off("reInit", setTweenNodes);
        emblaApi.off("reInit", setTweenFactor);
        emblaApi.off("reInit", tweenParallax);
        emblaApi.off("scroll", tweenParallax);
        emblaApi.off("slideFocus", tweenParallax);
      }
    };
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla w-full py-8">
      <div
        className="embla__viewport w-[100%] border border-black overflow-hidden cursor-none" // Set default cursor to none
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ position: "relative" }}
      >
        <div className="embla__container flex">
          {slides.map((index) => (
            <div className="embla__slide flex-none pl-4" key={index}>
              <div className="embla__parallax rounded-lg h-full overflow-hidden">
                <div className="embla__parallax__layer flex justify-center relative h-full w-[100%]">
                  <img
                    className="embla__slide__img embla__parallax__img w-full h-full object-cover "
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt="Your alt text"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 添加 Drag 提示的 div */}
        <div
          ref={dragLabelRef}
          style={{
            position: "absolute",
            top: -110,
            left: 0,
            transform: "translate(-50%, -50%) scale(0.5)",
            backgroundColor: "black",
            color: "white",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
            pointerEvents: "none",
            opacity: 0, // 初始状态不可见
            zIndex: 10,
          }}
        >
          Drag
        </div>
      </div>

      {/* 控制按钮和导航点 */}
      <div className="embla__controls grid grid-cols-[auto_1fr] justify-between gap-3 mt-4">
        <div className="embla__buttons grid grid-cols-2 gap-1.5 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots flex flex-wrap justify-end items-center -mr-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
