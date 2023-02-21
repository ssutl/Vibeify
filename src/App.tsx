import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PlaylistsPage from "./PlaylistsPage";
import "./Styling/App.scss";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";

function App() {
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
        <p
          onClick={() =>
            window.open(`https://www.instagram.com/ss.utl/`, "_blank")
          }
        >
          ss.utl humblest of all time, ever.
        </p>
      </div>
    </div>
  );
}

export default App;
