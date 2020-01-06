import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../src/Components/PrivateRoute";
import FarmDisplay from "./Components/FarmPage";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" />
          <PrivateRoute path="/farms" component={FarmDisplay} />
        </Switch>

        <FarmDisplay />

      </div>
    </Router>
  );
}

export default App;
