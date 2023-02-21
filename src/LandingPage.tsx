import React, { useState } from "react";
import "./Styling/LandingPage.scss";

//interface LandingPageProps {}

const LandingPage = () => {
  const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
  const { REACT_APP_SPOTIFY_SCOPE } = process.env;
  const { REACT_APP_SPOTIFY_REDIRECT } = process.env;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

  var loginUrl = `https://accounts.spotify.com/authorize?&client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT}&scope=${REACT_APP_SPOTIFY_SCOPE}&response_type=token`;

  const randomAlbum = (i: number) => {
    const recordSvgs = [
      "HumblySubtly",
      "SumnMellow",
      "CoastingInThePM",
      "SumnCognitive",
      // Add more files if needed
    ];

    return (
      <div className="album" key={i}>
        <img src={require(`./AlbumCoverPlaceHolders/${i}.png`)} />
        <img
          src={require(`./RecordSvg/${recordSvgs[i - 1]}.svg`)}
          className="record"
          alt="album cover"
        />
      </div>
    );
  };
  return (
    <div className="LandingPage">
      <div className="description">
        <h2>Create Vibe Specific Playlists Fast</h2>
        <p>
          Collate your saved, liked and local songs into seperate vibes within
          seconds. Providing a needed structure to your spotify playlists. This
          is just a kernel to expand upon, keep the headphones on, stay
          expanding.
        </p>
      </div>
      <div className="albumCoverRows">
        {[...Array(screenWidth < 1024 ? 1 : 4)].map((s, i) =>
          randomAlbum(i + 1)
        )}
      </div>
      <div className="signIn">
        <div
          className="button"
          onClick={() => (window.location.href = loginUrl)}
        >
          <p>Sign in with Spotify</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
