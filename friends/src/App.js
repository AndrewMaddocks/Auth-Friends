import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Friends from "./components/Friends";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
          <Link to="/privateFriends">Friends Page</Link>
        </div>
        <Switch>
          <PrivateRoute path="/privateFriends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
