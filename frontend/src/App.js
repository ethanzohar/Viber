import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Endpoints from "./Endpoints";
import SpotifyLogin from "./SpotifyLogin";
import Spotify from "./Spotify";
import Listen from "./Listen";
import Stream from "./Stream";
import Error from "./Error";
import SpotifyLoginRedirect from "./SpotifyLoginRedirect";

function App() {
  document.title = "Ethan Zohar"

  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/endpoints" component={Endpoints}></Route>
      <Route exact path="/spotify" component={Spotify}></Route>
      <Route exact path="/spotify/login" component={SpotifyLogin}></Route>
      <Route exact path="/spotify/login/redirect" component={SpotifyLoginRedirect}></Route>
      <Route exact path="/spotify/listen" component={Listen}></Route>
      <Route exact path="/spotify/stream" component={Stream}></Route>
      <Route exact path="/error" component={Error}></Route>
    </BrowserRouter>
  );
}

export default App;
