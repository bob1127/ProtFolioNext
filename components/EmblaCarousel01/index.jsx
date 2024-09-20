import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const OPTIONS = { dragFree: true, loop: true };

// Define an array of slide objects with iframe content
const SLIDES = [
  {
    image: "/images/3dmodel01.webp", // Image for the first slide
    title: "First Slide",
    description: "Description for the first slide.",
  },
  {
    image: "/images/3dmodel02.webp",
    title: "Fourth Slide",
    description: "Description for the fourth slide.",
  },
  {
    image: "/images/3dmodel03.webp",
    title: "Fourth Slide",
    description: "Description for the fourth slide.",
  },
  {
    image: "/images/3dmodel02.webp",
    title: "Fourth Slide",
    description: "Description for the fourth slide.",
  },
  {
    image: "/images/3dmodel03.webp",
    title: "Fifth Slide",
    description: "Description for the fifth slide.",
  },
];

const App = () => (
  <>
    {/* Uncomment the lines below if you have header and footer components */}
    {/* <Header /> */}
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    {/* <Footer /> */}
  </>
);

export default App;
