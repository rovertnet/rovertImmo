import { TestTube } from "lucide-react";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/footer/ScrollToTop";
import NavBar from "./components/header/NavBar"
import HomePage from "../../rovert_resto/src/body/autres/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <h1>
              Page Not Found 404
              <br />
              <span className="text-red-500">Cette page n'existe pas</span>
              <br />
              <span className="text-blue-500">Veuillez vérifier l'URL</span>
            </h1>
          }
        />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App
