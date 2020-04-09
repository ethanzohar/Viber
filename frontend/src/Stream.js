import React, { Component } from 'react';
import unknownAlbum from './images/unknown_album.jpg';
import './App.css';

const paramsKey = "spotify_auth_params";
const userInfoKey = "spotify_user_info";
const positionKey = 'window_position';

const params = JSON.parse(localStorage.getItem(paramsKey));
const userInfo = JSON.parse(localStorage.getItem(userInfoKey));
const position = JSON.parse(localStorage.getItem(positionKey));

class Stream extends Component {
  constructor(props) {
    super(props);

    this.albumImage = unknownAlbum;
    this.isPlaying = false;
  }

  update = (currentSong) => {
    this.albumImage = currentSong.item.album.images[0].url;
    this.isPlaying = currentSong.is_playing;
    this.forceUpdate();
    post(currentSong);
  }
  
  handleTimer = (s) => {
    setInterval(function() {
      getCurrentSong(params.access_token).then(s.update);
    }, 2000);
  }
  componentDidMount() {
    getCurrentSong(params.access_token).then(this.update);
    this.handleTimer(this);
  }

   next = async (s) => {
    fetch('https://api.spotify.com/v1/me/player/next', {
      Accepts: 'application/json',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + params.access_token
      }
    }).then(() => {
      setTimeout(function() {
        getCurrentSong(params.access_token).then(s.update);
      }, 150);
    });
  }
  
  previous = (s) => {
    fetch('https://api.spotify.com/v1/me/player/previous', {
      Accepts: 'application/json',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + params.access_token
      }
    }).then(() => {
      setTimeout(function() {
        getCurrentSong(params.access_token).then(s.update);
      }, 150);
    });
  }
  
  play = async (s) => {
    fetch('https://api.spotify.com/v1/me/player/play', {
      Accepts: 'application/json',
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + params.access_token
      }
    }).then(() => {
      setTimeout(function() {
        getCurrentSong(params.access_token).then(s.update);
      }, 150);
    });
  }
  
  pause = async (s) => {
    fetch('https://api.spotify.com/v1/me/player/pause', {
      Accepts: 'application/json',
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + params.access_token
      }
    }).then(() => {
      setTimeout(function() {
        getCurrentSong(params.access_token).then(s.update);
      }, 150);
    });
  }

  handleNext = () => {
    this.next(this);
  }

  handlePrevious = () => {
    this.previous(this);
  }

  handlePause = () => {
    this.pause(this);
  }

  handlePlay = () => {
    this.play(this);
  }

  render() {
    return (
      <div className="Stream">
        <div className="MainSongInformation">
          <div className="MainAlbum">
            <img id="main-album" className="album-cover" src={this.albumImage} width="500"></img>
          </div>
        </div>
  
        <div className="MusicNavigation">
          <button className="MusicNavigationButton" onClick={this.handlePrevious}><i className="fa fa-step-backward"></i></button>
          {!this.isPlaying && <button className="MusicNavigationButton" onClick={this.handlePlay}><i className="fa fa-play-circle"></i></button>}
          {this.isPlaying && <button className="MusicNavigationButton" onClick={this.handlePause}><i className="fa fa-pause-circle"></i></button>}
          <button className="MusicNavigationButton" onClick={this.handleNext}><i className="fa fa-step-forward"></i></button>
        </div>
      </div>
    );
  }
}

async function getPlayer(access_token) {
  const response = await fetch('https://api.spotify.com/v1/me/player', {
    Accepts: 'application/json',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  })
  
  try {
    return await response.json();
  } catch {
    return {};
  }
}

async function post(currentStreamingSong) {
  await fetch('http://localhost:8080/spotify/streamer/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: userInfo.id,
      username: userInfo.display_name,
      email: userInfo.email,
      premium: (userInfo.product === "premium"),
      latitude: position.latitude,
      longitude: position.longitude,
      currentSong: {
        id: currentStreamingSong.item.id,
        progress: currentStreamingSong.progress_ms,
        albumCover: currentStreamingSong.item.album.images[0].url,
        isPlaying: currentStreamingSong.is_playing,
        songName: currentStreamingSong.item.name,
        albumName: currentStreamingSong.item.album.name,
        songUrl: currentStreamingSong.item.external_urls.spotify,
        songUri: currentStreamingSong.item.uri,
        duration: currentStreamingSong.item.duration_ms,
        artists: [currentStreamingSong.item.artists[0].name]
      }
    })
  })
}

async function getCurrentSong(access_token) {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    Accepts: 'application/json',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  })
  
  try {
    return await response.json();
  } catch {
    return {};
  }
}

async function getRecentSongs(access_token) {
  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
    Accepts: 'application/json',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  })
  
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export default Stream;
