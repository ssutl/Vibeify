import React from "react";
import "./Styling/App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Splitify</h1>
      </div>
      <div className="description">
        <h2>Create Vibe Specific Playlists Fast</h2>
      </div>
      <div className="albumCovers"></div>
      <div className="signIn"></div>
    </div>
  );
}

export default App;
