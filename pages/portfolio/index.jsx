import HeroSection from "../../components/PortFolio/HeroSection";
import Navbar from "../../components/PortFolio/Navbar";
import AboutSection from "../../components/PortFolio/AboutSection";
import ProjectsSection from "../../components/PortFolio/ProjectsSection";
import EmailSection from "../../components/PortFolio/EmailSection";
import Footer from "../../components/PortFolio/Footer";
import AchievementsSection from "../../components/PortFolio/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
