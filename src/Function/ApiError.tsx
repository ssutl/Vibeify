import { Store } from "react-notifications-component";

//interface ApiErrorProps {}

const ApiError = () => {
  const errorTitle = [
    "Welp",
    "Try again abeg",
    "IDEK WAGWAN",
    "Damn, you messing everything up huh?",
  ];
  const errorMessages = [
    "Your music taste so bad we getting errors? Crazy",
    "Ion even gonna bother sort whatever those playlists were",
    "Pfffff your taste is wack, but feel free to try again",
    "Ahhhhh this has only ever happened to you, try again tho",
    "If you see this message, sumn aint right. Minor tho, we bounce back as per",
    "If it errors again, it's defo you and ur wack playlists fault.",
    "Error: If you listen to taylor swift, this aint gonna work",
    "This aint my fault btw, the spotify server is getting spammed off, this ur fault",
    "Token expired or sum shi, idk lol, just login again and shush",
  ];
  Store.addNotification({
    title: errorTitle[Math.floor(Math.random() * errorTitle.length)],
    message: errorMessages[Math.floor(Math.random() * errorMessages.length)],
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5500,
      onScreen: true,
    },
  });
};

export default ApiError;
