import React, { useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import Image from "next/image";

const RWDSection = () => {
  const sliderRef = useRef(null);

  const handleBeforeChange = (currentSlide, nextSlide) => {
    // 在切換前使用 GSAP 動畫
    gsap.fromTo(
      ".txt h2",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    gsap.fromTo(
      ".txt h3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    gsap.fromTo(
      ".txt p",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    beforeChange: handleBeforeChange,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Prev</button>,
  };

  return (
    <section className="RWD border-t-2 border-b-2 border-l-2 border-black">
      <div className="w-full flex-col items-center justify-center lg:flex-row flex">
        <div className="w-full lg:w-1/2 border-r-2 border-black p-[25px] sm:p-[60px] lg:p-[70px] overflow-hidden">
          <Slider {...settings} ref={sliderRef}>
            {/* Slide 1 */}
            <div>
              <div className="txt">
                <h2>"網頁設計-Website Design"</h2>
                <h3>
                  打造快速響應的網頁結構，提升移動設備體驗，讓您的網站在搜尋引擎中脫穎而出。
                </h3>
                <p>
                  隨著Google對移動端優化要求提升，優化您的網站以迎合移動設備，確保在搜尋結果中保持領先地位
                </p>
              </div>
              <div className="img my-5">
                <figure>
                  <Image
                    src="/images/攝影-商業攝影.png"
                    loading="lazy"
                    alt="realistic-set-monitor"
                    width={500}
                    height={300}
                  />
                </figure>
              </div>
            </div>

            {/* Slide 2 */}
            <div>
              <div className="txt">
                <h2>"RWD 優化策略"</h2>
                <h3>採用響應式設計，增強網站移動端顯示效果，提升用戶體驗。</h3>
                <p>
                  針對手機與平板設備進行優化，確保網站無論在哪個裝置上都能快速、流暢加載，提升SEO排名。
                </p>
              </div>
              <div className="img my-5">
                <figure>
                  <Image
                    src="/images/攝影-商業攝影.png"
                    loading="lazy"
                    alt="responsive-design"
                    width={500}
                    height={300}
                  />
                </figure>
              </div>
            </div>

            {/* Slide 3 */}
            <div>
              <div className="txt">
                <h2>"提升網站速度與SEO"</h2>
                <h3>提高網站加載速度和SEO優化，增加網站曝光率。</h3>
                <p>
                  網站速度對SEO排名至關重要。RWD設計可加速加載時間，提高用戶滿意度及搜索引擎排名。
                </p>
              </div>
              <div className="img my-5">
                <figure>
                  <Image
                    src="/images/攝影-商業攝影.png"
                    loading="lazy"
                    alt="website-speed"
                    width={500}
                    height={300}
                  />
                </figure>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-full lg:w-1/2">
          <figure>
            <Image
              src="/images/移動設備對於seo重要性.webp"
              loading="lazy"
              alt="移動設備對於seo重要性"
              placeholder="empty"
              width={800}
              height={500}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default RWDSection;
