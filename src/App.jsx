import { TestTube } from "lucide-react";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/footer/ScrollToTop";
import NavBar from "./components/header/NavBar"
import AboutSection from "./components/home/AboutSection";
import CallToActionSection from "./components/home/CallToActionSection";
import HeroSection from "./components/home/HeroSection";
import PropertyList from "./components/home/PropertyList";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import BlogSection from "./components/home/BlogSection";
import TeamSection from "./components/home/TeamSection";
import FAQSection from "./components/home/FAQSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PropertyList />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <BlogSection />
      <TeamSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App
