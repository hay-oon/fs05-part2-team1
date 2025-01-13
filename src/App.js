import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Sections/HeroSection';
import Seha from 'koseha';
import Hayoon from './hay-oon/page';
import Footer from './components/Footer/Footer';
import './App.css';
import { IntroduceHyuk } from 'hyuk-dev/pages/main/Main.jsx';
import { Select } from 'hyuk-dev/pages/Select/Select';
import { RecommendationsByRegion } from 'hyuk-dev/pages/RecommendationsByRegion/RecommendationsByRegion';
import { DataInfoDetails } from 'hyuk-dev/pages/DataInfoDetails/DataInfoDetails';
import { NearMyLocation } from 'hyuk-dev/pages/NearMyLocation.jsx/NearMyLocation';
import { SearchByKeyword } from 'hyuk-dev/pages/SearchByKeyword/SearchByKeyword';

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
            <Route
              path="/hyuk/recommendationsByRegion"
              element={<RecommendationsByRegion />}
            />
            <Route path="/hyuk/dataInfoDetails" element={<DataInfoDetails />} />
            <Route path="/hyuk/nearMyLocation" element={<NearMyLocation />} />
            <Route path="/hyuk/searchByKeyword" element={<SearchByKeyword />} />

            <Route path="/seha" element={<Seha />} />
            <Route path="/hay-oon" element={<Hayoon />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
