import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import BaseApp from "./BaseApp";
import Endpoints from "./Endpoints";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={BaseApp}></Route>
      <Route exact path="/endpoints" component={Endpoints}></Route>
    </BrowserRouter>
  );
}

export default App;
