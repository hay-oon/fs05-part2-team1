import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SygaHistory from "./SygaHistory";
import Syga from "./Syga";
import Military from "./Millitary";

function Sygamain() {
  return (
    <Router>
      <Routes>
        <Route path="/syga" element={<Syga />} />
        <Route path="/intro" element={<SygaHistory />} />

        <Route path="/millitary" element={<Military />} />
      </Routes>
    </Router>
  );
}

export default Sygamain;
