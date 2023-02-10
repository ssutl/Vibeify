import React, { useState, useEffect } from "react";
import { NameofVibes, resultTemplate } from "./Function/VibeSeperator";
import "./Styling/Playlist.scss";

interface PlaylistProps {
  Playlist: {
    type: NameofVibes;
    tracks: SpotifyApi.TrackObjectFull[];
    desc?: string;
  };
}

const imageBlock = (tracks: SpotifyApi.TrackObjectFull[], index: number) => {
  const randomURL =
    tracks[Math.floor(Math.random() * tracks.length)].album.images[0].url;

  return <img key={index} src={randomURL} className="imageBlock"></img>;
};

const Playlist = ({ Playlist }: PlaylistProps) => {
  console.log("Playlist", Playlist);
  return (
    <div className="playlistHolder">
      <div className="albumCover">
        {[...Array(4)].map((eachArray, i) => imageBlock(Playlist.tracks, i))}
        <div className="record">
          <div className="record__circle1">
            <div className="record__circle2">
              <div className="record__circle3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="albumDescription">
        <h2>{Playlist.type}</h2>
        <p>{Playlist.desc}</p>
        <div className="createButton"></div>
      </div>
    </div>
  );
};

export default Playlist;
