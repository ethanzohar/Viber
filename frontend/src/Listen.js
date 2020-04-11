import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import './App.css';
import { GOOGLE_API_KEY } from './keys';
import { render } from '@testing-library/react';

const paramsKey = "spotify_auth_params";
const userInfoKey = "spotify_user_info";
const positionKey = 'window_position';

const params = JSON.parse(localStorage.getItem(paramsKey));
const userInfo = JSON.parse(localStorage.getItem(userInfoKey));
const position = JSON.parse(localStorage.getItem(positionKey));

var allStreamers = {};
var me;

class Listen extends Component {
  constructor(props) {
    super(props);

    this.selectedStreamer = {};
    this.streamers = [];
  }

  update = (streamers) => {
    this.streamers = streamers;
    this.forceUpdate();
  }

  handleTimer = (s) => {
    setInterval(function() {
      get().then((result) => {
        s.update(result);

        if (s.selectedStreamer != {}) {
          me.selectedStreamer = allStreamers[me.selectedStreamer.id];
          putHandler(s.selectedStreamer);
        }
      });
    }, 5000);
  }

  componentDidMount() {
    get().then(this.update);
    this.handleTimer(this);
    me = this;
  }

  render() {
    return (
      <div className="Listen" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            center={{ lat: position.latitude, lng: position.longitude }}
            zoom={17}
            hoverDistance={20}>
              <div className="currentUserMarker" lat={ position.latitude } lng={ position.longitude }></div>
              { this.streamers }
          </GoogleMapReact>
      </div>
    );
  }
}

const putHandler = async (selectedStreamer) => {
  await fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + params.access_token
    },
    body: JSON.stringify({
      uris: [selectedStreamer.currentSong.songUri],
      position_ms: selectedStreamer.currentSong.progress
    })
  })
}

const handleClick = (e) => {
  me.selectedStreamer = allStreamers[e.target.getAttribute("streamerid")];
  putHandler(me.selectedStreamer);
}

async function get(s) {
  const response = await fetch('/api/spotify/listener/streamers?id=' + userInfo.id, {'Accepts': 'application/json'})
  if (response && response.ok && response.body) {
    var streamers = await response.json();

    for (var i = 0; i < streamers.length; ++i) {
      allStreamers[streamers[i].id] = streamers[i];
    }

    return streamers.map((streamer) => 
      <div className="otherUsersMarker" onClick={handleClick} lat={streamer.latitude} lng={streamer.longitude} streamerId={streamer.id}>{streamer.username}</div>
    );
  } else {
    console.log("DUMB");
  }
}

export default Listen;
