import { resultTemplate } from "./VibeSeperator";
import SpotifyWebApi from "spotify-web-api-js";
import { PlaylistProps } from "../Playlist";

export const playlistCreator = ({ UserId, Playlist }: PlaylistProps) => {
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
      //Add songs to playlist
      spotify.addTracksToPlaylist(
        response.id,
        Playlist.tracks.map((eachTrack) => eachTrack.uri)
      );
    })
    .catch((error) => {
      console.log("error", error);
    });

  //Indicate playlist has been created
};
