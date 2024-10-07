import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const OPTIONS = { dragFree: true, loop: true };

// Define an array of slide objects with iframe content
const SLIDES = [
  {
    image: "/images/3d產品模型11-極客網頁設計|Blender3D.webp", // Image for the first slide
    title: "商品建模設計",
    description: "範例展示",
  },
  {
    image: "/images/3d產品模型04-極客網頁設計|Blender3D.webp",
    title: "商品建模設計",
    description: "範例展示",
  },
  {
    image: "/images/3d產品模型09-極客網頁設計|Blender3D.webp",
    title: "商品建模設計",
    description: "範例展示",
  },
  {
    image: "/images/3d產品模型07-極客網頁設計|Blender3D.webp",
    title: "商品建模設計",
    description: "範例展示",
  },
  {
    image: "/images/3d產品模型06-極客網頁設計|Blender3D.webp",
    title: "商品建模設計",
    description: "範例展示",
  },
  {
    image: "/images/3d產品模型03-極客網頁設計|Blender3D.webp",
    title: "商品建模設計",
    description: "範例展示",
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
