import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/footer/ScrollToTop";
import NavBar from "./components/header/NavBar"
import AboutSection from "./components/home/AboutSection";
import CallToActionSection from "./components/home/CallToActionSection";
import HeroSection from "./components/home/HeroSection";
import PropertyList from "./components/home/PropertyList";
import ServicesSection from "./components/home/ServicesSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PropertyList />
      <AboutSection />
      <ServicesSection />
      <CallToActionSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App
