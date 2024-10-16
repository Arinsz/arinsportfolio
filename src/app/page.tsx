import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HeroSection from "./components/HeroSection";
import MyPortfolio from "./components/MyPortfolio";
import MySkills from "./components/MySkills";
import Testimonials from "./components/Testimonials";
import "./styles/styles.css"; // Importera globala CSS

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonials />
      <ContactMe />
    </>
  );
}
