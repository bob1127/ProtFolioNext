import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton.jsx";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla max-w-[48rem] mx-auto">
      <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
        <div
          className="embla__container flex touch-pan-y touch-pinch-zoom -ml-[1rem]"
          style={{ marginLeft: "calc(-1rem)" }}
        >
          {slides.map((index) => (
            <div
              className="embla__slide flex-none min-w-0 pl-[1rem]"
              key={index}
              style={{ flexBasis: "100%" }}
            >
              <div className="embla__slide__number rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center h-[19rem] shadow-inner shadow-[rgba(0,0,0,0.2)] select-none">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs mt-[0.8rem]">
        <div
          className="embla-thumbs__viewport overflow-hidden"
          ref={emblaThumbsRef}
        >
          <div
            className="embla-thumbs__container flex -ml-[0.8rem]"
            style={{ marginLeft: "calc(-0.8rem)" }}
          >
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                className={`embla-thumbs__slide flex-none min-w-0 pl-[0.8rem] ${
                  index === selectedIndex
                    ? "text-body"
                    : "text-detail-high-contrast"
                }`}
              >
                <div className="embla-thumbs__slide__number rounded-[1.8rem] shadow-inner shadow-[rgba(0,0,0,0.2)] text-[1.8rem] font-semibold flex items-center justify-center h-[6rem] w-full">
                  {index + 1}
                </div>
              </Thumb>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
