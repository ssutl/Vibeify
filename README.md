

# 🎶 Vibeify

Vibeify organizes your Spotify library by analyzing the vibe and sound of each track and adding them to curated playlists. Leveraging the Spotify API, it provides an intuitive way to keep your music library sorted and accessible.



https://github.com/user-attachments/assets/4b6287c2-1548-4dd6-afea-dd93e0d508f0



![image](https://user-images.githubusercontent.com/76885270/227809003-0fc6ed22-50fc-4e93-8b3d-b7e6222d4691.png))

## 🛠️ Technologies Used

### 🎨 Frontend
- React + TypeScript
- Spotify API

## 🌟 Key Features

1. **Audio Analysis** – Categorizes tracks by unique sound profiles.
2. **Spotify OAuth** – Secure login and permissions to access playlists.

## 🚀 How It Works

Upon logging in via Spotify, Vibeify temporarily gathers your playlists and retrieves audio features for each track. By mapping tracks to their respective sound profiles, the app then organizes them into custom "vibe" genres, creating dynamic playlists tailored to specific moods and sounds.

## 🛠️ Running the Application

### Setup

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and create a new app. Set the redirect URI to `http://localhost:3000/Playlists/`.
2. Access your Client ID and create an `.env.local` file:
   ```plaintext
   REACT_APP_SPOTIFY_CLIENT_ID=YourSpotifyAppKey
   REACT_APP_SPOTIFY_SCOPE=user-read-private user-read-email user-library-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-modify-playback-state user-read-currently-playing user-read-playback-state user-read-recently-played
   REACT_APP_SPOTIFY_REDIRECT=http://localhost:3000/Playlists/
   ```

### Frontend
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm run dev
   ```
