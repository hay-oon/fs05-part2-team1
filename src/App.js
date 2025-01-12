import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/Sections/HeroSection";
import Seha from "koseha";
import Hayoon from "./hay-oon/page";
import Footer from "./components/Footer/Footer";
import Sygamain from "syyga/Sygamain";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/seha" element={<Seha />} />
            <Route path="/hay-oon" element={<Hayoon />} />
            <Route path="/syga" element={<Sygamain />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
