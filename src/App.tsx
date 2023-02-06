import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PlaylistsPage from "./PlaylistsPage";
import "./Styling/App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Splitify</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Playlists" element={<PlaylistsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
