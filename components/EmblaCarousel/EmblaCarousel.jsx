import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons"; // Ensure this path is correct
import { DotButton, useDotButton } from "./EmblaCarosuelDotButton";
import { gsap } from "gsap";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react"; // Import NextUI Modal components
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = () => {
  const slides = [
    {
      id: 1,
      src: "/images/portfolio-zensor.webp",
      title: "禪譜科技官網建置",
      description:
        "此專案為新創公司的官方網站建立，其中網頁結構使用了Jquery 和 Bootstrap ， 商品圖片使用到了Blender 3D 和 Photoshop 製作 商品圖片 Banner， 另外也拍攝了產品使用情境圖",
    },
    {
      id: 2,
      src: "/images/ultraehp.webp",
      title: "Ultra EHP",
      description:
        "此專案為公司官網建立，使用了next.js SSG 靜態網頁 來加快網頁的讀取速度 ， 另外使用next.js 可以優化圖片和 影片",
    },
  ]; // Define your slides here

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [isHovered, setIsHovered] = useState(false);
  const dragLabelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageSrc, setCurrentImageSrc] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

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
    gsap.to(dragLabelRef.current, {
      x: clientX,
      y: clientY - 20,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleImageClick = (imageSrc, title, description) => {
    setCurrentImageSrc(imageSrc);
    setCurrentTitle(title);
    setCurrentDescription(description);
    onOpen(); // Open the NextUI modal
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

  useEffect(() => {
    if (isOpen) {
      // Animate modal on open
      gsap.fromTo(
        ".modal-enter",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <div className="embla w-full">
      <div
        className="embla__viewport w-[100%] overflow-hidden cursor-none"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ position: "relative" }}
      >
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              className="embla__slide w-[600px] flex-none pl-4"
              key={slide.id}
            >
              <div className="embla__parallax border border-black h-full overflow-hidden">
                <div
                  className="embla__parallax__layer flex justify-center relative h-full w-[100%]"
                  onClick={() =>
                    handleImageClick(slide.src, slide.title, slide.description)
                  } // Update click handler
                >
                  <Image
                    className="embla__slide__img embla__parallax__img object-cover"
                    width={700}
                    height={400}
                    src={slide.src} // 使用正確的 slide 路徑
                    alt={slide.title} // Use title as alt text
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drag Label */}
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
            opacity: 0,
          }}
        >
          Drag
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      <div className="flex justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>

      {/* Modal Component */}
      <div className="bg-black">
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          className="border border-black relative bg-black  focus:border-black"
        >
          <div className="fixed top-0 left-0 backdrop-blur-md bg-black bg-opacity-60 w-[100vw] h-[100vh]"></div>

          <ModalContent className="modal-enter w-[100%] z-[9999] p-5 fixed mt-10 top-[100px] h-[100vh] rounded-[30px] bg-[#ffffff]">
            <ModalHeader></ModalHeader>

            <ModalBody className="">
              <h3 className="pl-5">{currentTitle}</h3>
              <div className=" flex-col flex md:flex-row">
                <div className="w-full md:w-[55%] p-3 md:p-5">
                  <a href="https://wwww.zensorrd.com">
                    <Image
                      src={currentImageSrc}
                      alt={currentTitle} // Use title as alt text
                      width={700}
                      height={400}
                      className="object-cover" // Add any additional styling if necessary
                    />
                  </a>
                </div>
                <div className="w-full md:w-[45%] p-4 md:p-10">
                  <p className="mt-4">{currentDescription}</p>{" "}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="light"
                style={{ backgroundColor: "white", border: "none" }}
                onPress={onClose}
              >
                <i className="fas fa-times" style={{ color: "red" }}></i>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default EmblaCarousel;
