export interface resultTemplate {
  accousticness: SpotifyApi.TrackObjectFull[];
  long: SpotifyApi.TrackObjectFull[];
  energy: SpotifyApi.TrackObjectFull[];
  instrumentalness: SpotifyApi.TrackObjectFull[];
  // key: SpotifyApi.TrackObjectFull[];
  liveness: SpotifyApi.TrackObjectFull[];
  // loudness: SpotifyApi.TrackObjectFull[];
  // mode: SpotifyApi.TrackObjectFull[];
  speechiness: SpotifyApi.TrackObjectFull[];
  // tempo: SpotifyApi.TrackObjectFull[];
  // time_signature: SpotifyApi.TrackObjectFull[];
  // valence: SpotifyApi.TrackObjectFull[];
  danceability: SpotifyApi.TrackObjectFull[];
}

export default function vibeSeperator(
  completeArray: SpotifyApi.TrackObjectFull[]
) {
  const result: resultTemplate = {
    accousticness: [],
    long: [],
    energy: [],
    instrumentalness: [],
    // key: [],
    liveness: [],
    // loudness: [],
    // mode: [],
    speechiness: [],
    // tempo: [],
    // time_signature: [],
    // valence: [],
    danceability: [],
  };

  completeArray.forEach((track) => {
    const { audioFeatures } = track;

    if (audioFeatures !== undefined) {
      if (audioFeatures.acousticness >= 0.8) {
        result.accousticness.push(track);
      }
      if (audioFeatures.duration_ms >= 300000) {
        result.long.push(track);
      }
      if (audioFeatures.energy >= 0.9) {
        result.energy.push(track);
      }
      if (audioFeatures.danceability >= 0.9) {
        result.danceability.push(track);
      }

      if (audioFeatures.instrumentalness >= 0.7) {
        result.instrumentalness.push(track);
      }
      // if (audioFeatures.key >= 0.9) {
      //   result.key.push(track);
      // }
      if (audioFeatures.liveness >= 0.7) {
        result.liveness.push(track);
      }
      // if (audioFeatures.loudness >= 0.9) {
      //   result.loudness.push(track);
      // }
      // if (audioFeatures.mode >= 0.9) {
      //   result.mode.push(track);
      // }
      if (audioFeatures.speechiness >= 0.7) {
        result.speechiness.push(track);
      }
      // if (audioFeatures.tempo >= 0.8) {
      //   result.tempo.push(track);
      // }
      // if (audioFeatures.time_signature >= 3) {
      //   result.time_signature.push(track);
      // }
      // if (audioFeatures.valence >= 0.8) {
      //   result.valence.push(track);
      // }
    }
  });

  return result;
}
