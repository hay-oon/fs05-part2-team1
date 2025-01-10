import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/Sections/HeroSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <HeroSection />
        </main>
        <Footer />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
