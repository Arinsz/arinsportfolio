// src/app/index.jsx

import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MyPortfolio from "../components/MyPortfolio"; // This is where your portfolio section will be
import MySkills from "../components/MySkills";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <div id="portfolio">
        {" "}
        {/* Add an ID for scrolling */}
        <MyPortfolio />
      </div>
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
