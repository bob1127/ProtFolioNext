import React, { useEffect, useState } from "react";
import { DotButton, useDotButton } from "./EmblaCarosuelDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import axios from "axios";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [slides, setSlides] = useState([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Fetch posts from WordPress REST API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://zensorrd.com/wp-json/wp/v2/portfolio" // WordPress API endpoint for portfolio
        );
        setSlides(response.data); // Set API data as slides
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__content">
                  <img
                    src={slide.featured_image_src}
                    alt={slide.title.rendered}
                  />
                  <h3>{slide.title.rendered}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              aria-label={`滑動到第 ${index + 1} 項目`}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
