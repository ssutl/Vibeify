# Vibeify

This project was used to solve my disorganised spotify library. It reads through your current library and seperates the tracks by their vibe and sound, then adds the song to their respective playlist. The spotify API was leveraged to perform this.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/76885270/227808948-494f5c6e-e0f4-4338-87f7-7769a22527be.png">

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

### Frontend

1. `npm start`
