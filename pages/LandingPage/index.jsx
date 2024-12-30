"use client";

import Hero from "../../components/LandingPage/Hero/page";
import Grid from "../../components/LandingPage/Grid/page";
// import Footer from "@/components/Footer";
// import Clients from "../../components/LandingPage/Clients/page";
// import Approach from "@/components/Approach";
// import Experience from "../../components/LandingPage/Experience/page";
import RecentProjects from "../../components/LandingPage/RecentProjects/page";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients />
        <Experience /> */}
      </div>
    </main>
  );
};

export default Home;
