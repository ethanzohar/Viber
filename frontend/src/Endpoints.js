import React, { Component } from 'react';
import './App.css';

class Endpoints extends Component {
  render() {
    return (
      <div className="Endpoints">
        <header className="App-header">
          <button onClick={sendRequest}>
            Send the request
          </button>
        </header>
      </div>
    );
  }
}

async function sendRequest() {

  fetch('/endpoints')
  .then(response => response.body)
  .then(body => {
    const reader = body.getReader();
    reader.read().then(console.log);
  })
}

export default Endpoints;
