// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";

// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );
export default function Home() {
  //   const plane = useRef(null);
  //   const maxRotate = 45;

  //   const manageMouseMove = (e) => {
  //     const x = e.clientX / window.innerWidth;
  //     const y = e.clientY / window.innerHeight;
  //     const perspective = window.innerWidth * 4;
  //     const rotateX = maxRotate * x - maxRotate / 2;
  //     const rotateY = (maxRotate * y - maxRotate / 2) * -1;
  //     plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  //   };

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col justify-center h-full items-center">
        <h1 className="text-[80px]  font-extrabold">聯絡我們</h1>
        <form className="w-[900px] border">
          <p className="text-[16px] font-bold">mailchimp </p>
          <input type="text" /> oki
          <textarea
            className="h-[80px] w-full border-2 border-black rounded-m"
            name=""
            id=""
          ></textarea>
          <button type="submit"> </button>
        </form>
      </div>
    </div>
  );
}

// reportWebVitals();
