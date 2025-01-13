import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Sections/HeroSection';
import Footer from './components/Footer/Footer';
import './App.css';
import { IntroduceHyuk } from 'hyuk-dev/pages/main/Main.jsx';
import { Select } from 'hyuk-dev/pages/Select/Select';
import { RecommendationsByRegion } from 'hyuk-dev/pages/RecommendationsByRegion/RecommendationsByRegion';
import { DataInfoDetails } from 'hyuk-dev/pages/DataInfoDetails/DataInfoDetails';
import { NearMyLocation } from 'hyuk-dev/pages/NearMyLocation.jsx/NearMyLocation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>

            <Route path="/" element={<HeroSection />} />
            <Route path="/hyuk" element={<IntroduceHyuk />} />
            <Route path="/hyuk/select" element={<Select />} />
            <Route path="/hyuk/recommendationsByRegion" element={<RecommendationsByRegion />} />
            <Route path="/hyuk/dataInfoDetails" element={<DataInfoDetails />} />
            <Route path="/hyuk/nearMyLocation" element={<NearMyLocation />} />
            
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
