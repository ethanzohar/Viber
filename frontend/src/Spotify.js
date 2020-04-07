import React, { Component } from 'react';
import './App.css';

const Spotify = () => {

  const positionKey = 'window_position';
  const pageKey = 'spotify_page_key';

  var disableButton = true;

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
    disableButton = false;
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

  const handleListenButtonPress = () => {
    localStorage.setItem(pageKey, "listen");
    window.location = window.location.origin + "/spotify/login";
  }

  const handleStreamButtonPress = () => {
    localStorage.setItem(pageKey, "stream");
    window.location = window.location.origin + "/spotify/login";
  }

  getLocation();

  return (
    <div className="Spotify">
      <div className="Stream-Button">
        {!disableButton && <button id="stream-button" className="btn btn-primary spotify-button" onClick={handleStreamButtonPress} disabled>Stream</button>}
        {disableButton && <button id="stream-button" className="btn btn-primary spotify-button" onClick={handleStreamButtonPress}>Stream</button>}
      </div>
      <div className="Listen-Button">
      {disableButton && <button id="listen-button" className="btn btn-primary spotify-button" onClick={handleListenButtonPress}>Listen</button>}
      {!disableButton && <button id="listen-button" className="btn btn-primary spotify-button" onClick={handleListenButtonPress} disabled>Listen</button>}
      </div>
    </div>
  );
}

export default Spotify;
