import { resultTemplate } from "./VibeSeperator";
import SpotifyWebApi from "spotify-web-api-js";
import { PlaylistProps } from "../Playlist";
import { Store } from "react-notifications-component";

export const playlistCreator = ({ UserId, Playlist }: PlaylistProps) => {
  const spotify = new SpotifyWebApi();
  const successMessages = [
    "Playlist Created, Keep Going.",
    "Oooooo Good Choice, my playlist better tho.",
    "Ok Ok, DSINPYO",
    "Check spotify G",
    "Stay Inspired, Sumn Casual",
    "You gotta humble yourself and teach, it worked btw",
    "@ss.utl did this, that me, im him.",
    "Humility is the only antidote to shame",
    "Guru when your bredrin needs help, student when you do.",
    "If you don't do anything, look after yourself.",
    "This is not the answer, just a hint. You can't find the answer, the answer will find you, but only once you try to find it.",
  ];

  const titleMessages = [
    "Wooo!",
    "Stay Creating",
    "Wooof",
    "Stay on the move",
    "Headphones On!",
    "City Stroller",
    "Sumn Slight",
    "Good Job",
    "Tap in",
    "DSINPYO",
  ];

  //Create the playlist
  spotify
    .createPlaylist(UserId, {
      name: `${Playlist.type}`,
      description: `${Playlist.desc}`,
      public: true,
    })
    .then((response) => {
      let bottomPointer = 0;
      let topPointer = 100;
      const promises = [];

      const stringArray = Playlist.tracks.map((eachTrack) => eachTrack.uri);

      while (bottomPointer < Playlist.tracks.length) {
        const chunk = stringArray.slice(bottomPointer, topPointer);

        promises.push(spotify.addTracksToPlaylist(response.id, chunk));

        bottomPointer += 100;
        topPointer += 100;
        if (topPointer > Playlist.tracks.length) {
          topPointer = Playlist.tracks.length;
        }
      }

      Promise.all(promises).then(() => {
        // All elements have been added to the everyTrack array
        console.log("worked");
        Store.addNotification({
          title:
            titleMessages[Math.floor(Math.random() * titleMessages.length)],
          message:
            successMessages[Math.floor(Math.random() * successMessages.length)],
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });

      //Add songs to playlist
    })
    .catch((error) => {
      console.log("error", error);
    });

  //Indicate playlist has been created
};
