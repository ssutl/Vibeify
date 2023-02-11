import { resultTemplate } from "./VibeSeperator";
import SpotifyWebApi from "spotify-web-api-js";
import { PlaylistProps } from "../Playlist";

export const playlistCreator = ({ UserId, Playlist }: PlaylistProps) => {
  console.log("Playlist", Playlist.tracks);
  const spotify = new SpotifyWebApi();

  //Create the playlist
  spotify
    .createPlaylist(UserId, {
      name: `${Playlist.type}`,
      description: `${Playlist.desc}`,
      public: true,
    })
    .then((response) => {
      console.log("response", response);

      let bottomPointer = 0;
      let topPointer = 100;

      const stringArray = Playlist.tracks.map((eachTrack) => eachTrack.uri);

      while (bottomPointer < Playlist.tracks.length) {
        const chunk = stringArray.slice(bottomPointer, topPointer);
        spotify.addTracksToPlaylist(response.id, chunk);

        bottomPointer += 100;
        topPointer += 100;
        if (topPointer > Playlist.tracks.length) {
          topPointer = Playlist.tracks.length;
        }
      }

      //Add songs to playlist
    })
    .catch((error) => {
      console.log("error", error);
    });

  //Indicate playlist has been created
};
