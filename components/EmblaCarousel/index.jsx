import React, { useEffect } from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const images = [
  "/images/ECWP100-carousel-index.webp",
  "/images/ultraehp.webp",
  "/images/ECWP100-carousel-index.webp",
  "/images/ultraehp.webp",
  // 更多圖片路徑...
];
const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <>
    <Header />
    <EmblaCarousel slides={images} options={{ loop: true }} />

    {/* <Footer /> */}
  </>
);

export default App;
