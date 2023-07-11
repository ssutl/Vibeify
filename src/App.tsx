import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import PlaylistsPage from "./PlaylistsPage";
import "./Styling/App.scss";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import PrivacyPolicy from "./PrivacyPolicy";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  const [displayPolicy, setDisplayPolicy] = useState(false);

  const toggleModal = () => {
    setDisplayPolicy(!displayPolicy);
  };

  return (
    <div className="App">
      <ReactNotifications />
      <div className="header">
        <h1>VIBEIFY</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Playlists" element={<PlaylistsPage />} />
        </Routes>
      </Router>
      <div className="footer">
        <InstagramIcon
          id="igIcon"
          onClick={() =>
            window.open(`https://www.instagram.com/ss.utl/`, "_blank")
          }
        />
        <p
          onClick={() =>
            window.open(`https://www.instagram.com/ss.utl/`, "_blank")
          }
        >
          ss.utl humblest of all time, ever.
        </p>
        <p id="privacyPolicy" onClick={() => setDisplayPolicy(!displayPolicy)}>
          ℹ
        </p>
      </div>
      {displayPolicy ? <PrivacyPolicy toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default App;
