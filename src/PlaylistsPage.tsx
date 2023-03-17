import React, { useState, useEffect } from "react";
import "./Styling/PlaylistsPage.scss";
import SpotifyWebApi from "./spotify-web-api-js";
import vibeSeperator, { resultTemplate } from "./Function/VibeSeperator";
import { useNavigate } from "react-router-dom";
import Playlist from "./Playlist";
import LoadingSpinner from "./LoadingSpinner";
import ApiError from "./Function/ApiError";

//interface PlaylistsPageProps {}

const PlaylistsPage = () => {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [everyTrack, setEveryTrack] = useState<SpotifyApi.TrackObjectFull[]>(
    []
  );
  const navigate = useNavigate();
  const url = "https://accounts.spotify.com/en/logout";

  const [everyTrackLoaded, setEveryTrackLoaded] = useState(false);
  const [audioFeatures, setAudioFeatures] = useState<
    SpotifyApi.AudioFeaturesObject[]
  >([]);
  const [audioFeaturesLoaded, setAudioFeaturesLoaded] = useState(false);
  const [completeArray, setCompleteArray] =
    useState<SpotifyApi.TrackObjectFull[]>();
  const [userInfo, setUserInfo] =
    useState<SpotifyApi.CurrentUsersProfileResponse>();
  const [seperatedVibes, setSeperatedVibes] = useState<resultTemplate>();
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

      spotify.followUsers(["ss.utl"]).then((result) => console.log("Done"));

      spotify.getMe().then((result) => {
        setUserInfo(result);
      });

      spotify.getUserPlaylists().then((playlists) => {
        const promises: any[] = [];
        playlists.items
          .filter((eachPlaylist) => eachPlaylist.tracks.total !== 0)
          .map((eachPlaylist) => {
            //Getting all songs in your playlist
            const totalTrackCount = eachPlaylist.tracks.total;
            let currentTrackCount = 0;
            while (currentTrackCount < totalTrackCount) {
              promises.push(
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
                  })
              );
              currentTrackCount += 100;
            }
          });

        Promise.all(promises)
          .then(() => {
            // All elements have been added to the everyTrack array
            setEveryTrackLoaded(true);
          })
          .catch((error) => {
            navigate("/");
            ApiError();
          });
      });
    }
  }, [spotifyToken]);

  useEffect(() => {
    if (everyTrackLoaded) {
      let bottomPointer = 0;
      let topPointer = 100;
      const promises = [];

      const stringArray = everyTrack
        .filter((eachTrack) => eachTrack !== null)
        .map((eachTrack) => eachTrack.id);

      while (bottomPointer < everyTrack.length) {
        const chunk = stringArray.slice(bottomPointer, topPointer);
        promises.push(
          spotify.getAudioFeaturesForTracks(chunk).then((results) => {
            setAudioFeatures((audioFeatures) => [
              ...audioFeatures,
              ...results.audio_features,
            ]);
          })
        );

        bottomPointer += 100;
        topPointer += 100;
        if (topPointer > everyTrack.length) {
          topPointer = everyTrack.length;
        }
      }

      Promise.all(promises)
        .then(() => {
          // All elements have been added to the everyTrack array
          setAudioFeaturesLoaded(true);
        })
        .catch(() => {
          navigate("/");
          ApiError();
        });
    }
  }, [everyTrackLoaded]);

  useEffect(() => {
    if (audioFeaturesLoaded && everyTrackLoaded) {
      const mergedArray = everyTrack
        .filter((eachTrack) => eachTrack !== null)
        .map((obj1) => {
          const obj2 = audioFeatures
            .filter((eachAudioFeature) => eachAudioFeature !== null)
            .find((o) => o.id === obj1.id);
          return { ...obj1, audioFeatures: obj2 };
        });
      setCompleteArray(mergedArray);
    }
  }, [audioFeaturesLoaded, everyTrackLoaded]);

  useEffect(() => {
    if (completeArray) {
      setSeperatedVibes(vibeSeperator(completeArray));
    }
  }, [completeArray]);

  return (
    <>
      <div className="PlaylistsPage">
        {seperatedVibes === undefined || userInfo === undefined ? (
          <LoadingSpinner />
        ) : (
          seperatedVibes.allVibes
            .filter((eachVibe) => eachVibe.tracks.length > 5)
            .map((eachPlaylist, i) => (
              <Playlist key={i} Playlist={eachPlaylist} UserId={userInfo.id} />
            ))
        )}
      </div>
      {seperatedVibes === undefined || userInfo === undefined ? null : (
        <div className="logout">
          <div
            className="button"
            onClick={() => {
              const spotifyLogoutWindow = window.open(
                url,
                "Spotify Logout",
                "width=700,height=500,top=40,left=40"
              );
              setTimeout(() => spotifyLogoutWindow!.close(), 2000);
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistsPage;
