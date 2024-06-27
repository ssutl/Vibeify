# Vibeify

This project was used to solve my disorganised spotify library. It reads through your current library and seperates the tracks by their vibe and sound, then adds the song to their respective playlist. The spotify API was leveraged to perform this.

![image](https://user-images.githubusercontent.com/76885270/227809003-0fc6ed22-50fc-4e93-8b3d-b7e6222d4691.png)

# Technologies Used

### Frontend

1. React + Typescript
2. Spotify API

# Features Implemented

1. Audio Analysis
2. Spotify OAUTH login workflow

# How it works

A user allows permission to certain features of the API by login in through spotify, these features are leveraged to collect the users information temporary, such as all their playlists. Once this is stored in state, we can begin to get audio features for each track and map it to the respective track. We can then go through these and create custom genres by categorising these audio features and even combining them for specfic sounds.

# How to run application<br/>

### Setup

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and create a new app, ensure the redirect URI is `http://localhost:3000/Playlists/`.
2. You can access your Client ID here.
3. Create an `.env.local` file in the root directory.
4. Add `REACT_APP_SPOTIFY_CLIENT_ID=Your spotify app key`
5. Add `REACT_APP_SPOTIFY_SCOPE =user-read-private user-read-email user-library-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-modify-playback-state user-read-currently-playing user-read-playback-state user-read-recently-played`
6. Add `REACT_APP_SPOTIFY_REDIRECT=http://localhost:3000/Playlists/`

### Frontend
1. `Run npm i` (to install needed dependencies)
2. `npm run dev`
