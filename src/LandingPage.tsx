import React, { useState, useEffect } from "react";
import "./Styling/LandingPage.scss";

//interface LandingPageProps {}

const LandingPage = () => {
  var client_id = "f6ce070a889e49bc832932bf1d85712e";
  var redirect_uri = "http://localhost:3000/Playlists/";

  var scope =
    "user-read-private user-read-email playlist-read-collaborative playlist-read-private playlist-modify-public playlist-modify-private";

  var loginUrl = `https://accounts.spotify.com/authorize?&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token`;

  return (
    <div className="LandingPage">
      <div className="description">
        <h2>Create Vibe Specific Playlists Fast</h2>
      </div>
      <div className="albumCovers"></div>
      <div className="signIn">
        <div
          className="button"
          onClick={() => (window.location.href = loginUrl)}
        >
          <p>Sign in with spotify</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
