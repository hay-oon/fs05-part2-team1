import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/Sections/HeroSection";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Syga from "syyga/Syga";
import SygaHistory from "syyga/SygaHistory";
import Military from "syyga/Millitary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />{" "}
            <Route path="/syga" element={<Syga />} />
            <Route path="/intro" element={<SygaHistory />} />
            <Route path="/millitary" element={<Military />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
