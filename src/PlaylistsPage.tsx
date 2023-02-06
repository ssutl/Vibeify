import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Styling/PlaylistsPage.scss";
import SpotifyWebApi from "spotify-web-api-js";

//interface PlaylistsPageProps {}

const PlaylistsPage = () => {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [everyTrack, setEveryTrack] = useState<SpotifyApi.TrackObjectFull[]>(
    []
  );
  const [audioFeatures, setAudioFeatures] = useState<
    SpotifyApi.AudioFeaturesObject[]
  >([]);

  console.log("audio", audioFeatures);
  const spotify = new SpotifyWebApi();

  const getTokenFromUrl = () => {
    const accessTokenIndex = window.location.href.indexOf("access_token=");
    const ampIndex = window.location.href.indexOf("&", accessTokenIndex);
    const accessToken = window.location.href.substring(
      accessTokenIndex + "access_token=".length,
      ampIndex
    );
    setSpotifyToken(accessToken);
  };

  useEffect(() => {
    getTokenFromUrl();
  }, []);

  useEffect(() => {
    if (spotifyToken) {
      spotify.setAccessToken(spotifyToken);

      spotify.getMe().then((user) => {
        console.log("user.id", user.id);
      });

      spotify.getUserPlaylists().then((playlists) => {
        playlists.items
          .filter((eachPlaylist) => eachPlaylist.tracks.total !== 0)
          .map((eachPlaylist) => {
            const totalTrackCount = eachPlaylist.tracks.total;
            let currentTrackCount = 0;

            while (currentTrackCount < totalTrackCount) {
              spotify
                .getPlaylistTracks(eachPlaylist.id, {
                  limit: 100,
                  offset: currentTrackCount,
                })
                .then((tracks) => {
                  tracks.items.map((eachTrack) => {
                    setEveryTrack((everyTrack: any) => [
                      ...everyTrack,
                      eachTrack.track,
                    ]);
                  });
                });
              currentTrackCount += 100;
            }
          });
      });
    }
  }, [spotifyToken]);

  return <div className="PlaylistsPage">PlaylistsPage</div>;
};

export default PlaylistsPage;
