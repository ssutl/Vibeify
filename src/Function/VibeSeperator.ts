export type NameofVibes =
  | "Sumn Mellow"
  | "Sumn Uplifting"
  | "Keep Going"
  | "Sumn Cognitive"
  | "Humbly Subtly"
  | "Ever so, Ever So"
  | "Sumn Organic"
  | "Coasting in the PM";

export interface resultTemplate {
  allVibes: {
    type: NameofVibes;
    tracks: SpotifyApi.TrackObjectFull[];
    desc?: string;
  }[];
}

export default function vibeSeperator(
  completeArray: SpotifyApi.TrackObjectFull[]
) {
  const result: resultTemplate = {
    allVibes: [],
  };

  completeArray.forEach((track) => {
    const { audioFeatures } = track;

    if (audioFeatures !== undefined) {
      //Mellow Rap = tempo(slow) + Speechiness
      if (audioFeatures.tempo <= 90 && audioFeatures.speechiness > 0.5) {
        result.allVibes.find((each) => each.type === "Sumn Mellow")
          ? result.allVibes
              .find((each) => each.type === "Sumn Mellow")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Sumn Mellow", tracks: [track] });
      }

      //Uplifting = Valence(High) + Danceability
      if (audioFeatures.valence > 0.85 && audioFeatures.danceability > 0.8) {
        result.allVibes.find((each) => each.type === "Sumn Uplifting")
          ? result.allVibes
              .find((each) => each.type === "Sumn Uplifting")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Sumn Uplifting", tracks: [track] });
      }

      //Gym = Energy + Loudness + Tempo
      if (audioFeatures.energy > 0.9 && audioFeatures.tempo > 120) {
        result.allVibes.find((each) => each.type === "Keep Going")
          ? result.allVibes
              .find((each) => each.type === "Keep Going")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Keep Going", tracks: [track] });
      }

      //Conscious deep ones = Speechiness + Valence(low) + tempo(slow)
      if (
        audioFeatures.valence < 0.4 &&
        audioFeatures.tempo < 85 &&
        audioFeatures.danceability < 0.5
      ) {
        result.allVibes.find((each) => each.type === "Sumn Cognitive")
          ? result.allVibes
              .find((each) => each.type === "Sumn Cognitive")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Sumn Cognitive", tracks: [track] });
      }

      //Instrumental carries = Instrumentalness + Acousticness
      if (audioFeatures.instrumentalness > 0.5) {
        result.allVibes.find((each) => each.type === "Humbly Subtly")
          ? result.allVibes
              .find((each) => each.type === "Humbly Subtly")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Humbly Subtly", tracks: [track] });
      }

      //Long Ones
      if (audioFeatures.duration_ms > 300000) {
        result.allVibes.find((each) => each.type === "Ever so, Ever So")
          ? result.allVibes
              .find((each) => each.type === "Ever so, Ever So")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Ever so, Ever So", tracks: [track] });
      }

      //Live Songs = liveness + Acousticness
      if (audioFeatures.liveness > 0.65 && audioFeatures.acousticness > 0.3) {
        result.allVibes.find((each) => each.type === "Sumn Organic")
          ? result.allVibes
              .find((each) => each.type === "Sumn Organic")
              ?.tracks.push(track)
          : result.allVibes.push({ type: "Sumn Organic", tracks: [track] });
      }

      //Laid back coasting in the PM = valence(high-ish) + energy(mid-ish) + accousticness
      if (
        audioFeatures.valence < 0.7 &&
        audioFeatures.energy < 0.6 &&
        audioFeatures.acousticness > 0.4 &&
        audioFeatures.tempo < 90 &&
        audioFeatures.tempo > 80
      ) {
        result.allVibes.find((each) => each.type === "Coasting in the PM")
          ? result.allVibes
              .find((each) => each.type === "Coasting in the PM")
              ?.tracks.push(track)
          : result.allVibes.push({
              type: "Coasting in the PM",
              tracks: [track],
            });
      }

      //Shake a leg = Danceability
      //Heart break
      //Bars/Poetry = Speechiness
    }
  });

  //Adding Description
  result.allVibes.map((eachVibe) => {
    switch (eachVibe.type) {
      case "Coasting in the PM":
        eachVibe.desc =
          "For those late nights, gliding, laid back, coasting. Tune in y stay coasting.";
        break;
      case "Ever so, Ever So":
        eachVibe.desc =
          "For when the artist just keeps going, the interminable beats, the amorphous stories, when there's a lot to say but even more to take in.";
        break;
      case "Humbly Subtly":
        eachVibe.desc =
          "Sometimes the artist ain't even gotta say too much, the instrumental carries. It's all about those subtle samples, those humble melodies.";
        break;
      case "Keep Going":
        eachVibe.desc =
          "In the gym? On a mission? You gotta keep going. This one for the city runners, the bench pressers, move fast, stay low. This playlist will keep up.";
        break;
      case "Sumn Cognitive":
        eachVibe.desc =
          "Sumn deeper, sumn to think about, slower. Sometimes ion really wanna be talking to no one and just wanna deep stuff. That's fine fr.";
        break;
      case "Sumn Mellow":
        eachVibe.desc = "For the city strollers, with the headphones on.";
        break;
      case "Sumn Organic":
        eachVibe.desc =
          "This one is strictly organic, live perfomances, accousticness y the rawest of sounds. Yhhhhh sumn real real.";
        break;
      case "Sumn Uplifting":
        eachVibe.desc =
          "You gotta wake up and expose yourself to the sun, reset your circadian rhythm by supplying your suprachiasmatic nucleus with information. Sumn Uplifting man.";
        break;
    }
  });

  return result;
}
