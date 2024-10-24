import React, { useEffect } from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <>
    <main>
      <h1 className="text-3xl font-bold text-center">WordPress Portfolio</h1>
      <EmblaCarousel options={{ loop: true }} />
    </main>
  </>
);

export default App;
