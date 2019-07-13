import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import Estimate from "../Routes/Estimate";
import LogIn from "../Routes/LogIn";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/estimate" exact component={Estimate} />
      <Route path="/login" exact component={LogIn} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
