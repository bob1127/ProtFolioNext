import React, { useEffect } from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const images = [
  "/images/portfolio-zensor.webp",
  "/images/ultraehp.webp",
  "/images/portfolio-zensor.webp",
  "/images/ultraehp.webp",
  // 更多圖片路徑...
];
const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <div className="relative">
    <Header />
    <EmblaCarousel slides={images} options={{ loop: true }} />

    {/* <Footer /> */}
  </div>
);

export default App;
