import React, { useState, useEffect } from "react";
import "./Styling/LandingPage.scss";

//interface LandingPageProps {}

const LandingPage = () => {
  const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
  console.log("client_id", REACT_APP_SPOTIFY_CLIENT_ID);
  var redirect_uri = "http://localhost:3000/Playlists/";

  var scope =
    "user-read-private user-read-email playlist-read-collaborative playlist-read-private playlist-modify-public playlist-modify-private";

  var loginUrl = `https://accounts.spotify.com/authorize?&client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token`;

  return (
    <div className="LandingPage">
      <div className="description">
        <h2>Create Vibe Specific Playlists Fast</h2>
        <p>
          Collate your saved, liked and local songs into to seperate vibes
          within seconds. Providing a needed structure to your spotify
          playlists. This is just a kernel to expand upon, keep the headphones
          on, stay expanding.
        </p>
      </div>
      <div className="albumCoverRows"></div>
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
