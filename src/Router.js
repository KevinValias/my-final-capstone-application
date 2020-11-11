import React from "react";
import { Switch, Route } from "react-router";
// import cookie from "cookie";
// import SignUp from "./Components/SignUp";
import Login from "./Containers/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Dashboard from "./Containers/Dashboard";
import Add from "./Containers/Add";
import Details from "./Containers/Details";
import About from "./Components/About";
import RegionOne from "./Containers/RegionOne";
import RegionTwo from "./Containers/RegionTwo";
import RegionThree from "./Components/RegionThree";
import RegionFour from "./Components/RegionFour";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={Add} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/bizz/:id" component={Details} />
      <Route exact path="/about" component={About} />
      <Route exact path="/region/1" component={RegionOne} />
      <Route exact path="/region/2" component={RegionTwo} />
      <Route exact path="/region/3" component={RegionThree} />
      <Route exact path="/region/4" component={RegionFour} />
    </Switch>
  );
};

export default Router;
