import React, { Component } from 'react';
import './App.css';

const Spotify = () => {

  const stateKey = 'spotify_auth_state';
  const positionKey = 'window_position';
  const pageKey = 'spotify_page_key';

  const [disableButton, setDisableButton] = React.useState(true)

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      console.log("Geolocation is not supported by this browser.");
      window.location = window.location.origin + "/error";
    }
  }
  
  function showPosition(position) {
    var pos = {"latitude": position.coords.latitude, "longitude": position.coords.longitude};

    localStorage.setItem(positionKey, JSON.stringify(pos));
    setDisableButton(false);
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }

    window.location = window.location.origin + "/error";
  }

  function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  function login() {
    var client_id = '53a649e024504a91898d19070924df56'; // Your client id
      var redirect_uri = 'http://localhost:8081/spotify/login/redirect'; // Your redirect uri

      var state = generateRandomString(16);

      localStorage.setItem(stateKey, state);
      var scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control user-library-modify user-library-read user-read-playback-position user-read-recently-played';

      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);

      window.location = url;
  }

  const handleListenButtonPress = () => {
    localStorage.setItem(pageKey, "listen");
    login();
  }

  const handleStreamButtonPress = () => {
    localStorage.setItem(pageKey, "stream");
    login();
  }

  getLocation();

  return (
    <div className="Spotify">
      <div className="Stream-Button">
        <button id="stream-button" className="btn btn-primary spotify-button" onClick={handleStreamButtonPress} disabled={disableButton}>Stream</button>
      </div>
      <div className="Listen-Button">
      <button id="listen-button" className="btn btn-primary spotify-button" onClick={handleListenButtonPress} disabled={disableButton}>Listen</button>
      </div>
    </div>
  );
}

export default Spotify;
