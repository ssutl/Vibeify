import React, { useState, useEffect } from "react";
import "./Styling/PrivacyPolicy.scss";

interface PrivacyPolicyProps {
  toggleModal: () => void;
}

const PrivacyPolicy = ({ toggleModal }: PrivacyPolicyProps) => {
  return (
    <div className="modal_holder" onClick={() => toggleModal()}>
      <div className="modal">
        <h1>Privacy Policy</h1>
        <p>
          By choosing to use this app, you agree to the use of your Spotify
          account username and data in order to analyse each of your saved
          playlists. None of the data used by Vibeify is stored or collected
          anywhere, and it is NOT shared with any third parties. All information
          is used solely for creating tailored playlists. You can rest assured
          that your data is not being stored or used maliciously, however, if
          you would like to revoke Vibeify's permissions, you can visit your
          apps page and click "REMOVE ACCESS" on Vibeify.{" "}
          <a
            target="_blank"
            href="https://support.spotify.com/us/article/spotify-on-other-apps/"
          >
            Here
          </a>{" "}
          is a more detailed guide for doing so.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
