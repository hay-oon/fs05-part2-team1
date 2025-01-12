import React from "react";
import { Router, Route } from "react-router-dom";
import SygaHistory from "./SygaHistory";
import Syga from "./Syga";
import Military from "./Millitary";

function Sygamain() {
  return (
    <>
      <Router>
        <Route path="/" element={<Syga />} />
      </Router>
    </>
  );
}

export default Sygamain;
