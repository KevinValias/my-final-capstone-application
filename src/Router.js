import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Login from "./Containers/Login";
import SignUp from "./Containers/SignUp";
import Home from "./Components/Home";
import Dashboard from "./Containers/Dashboard";
import Add from "./Containers/Add";
import Details from "./Containers/Details";
import About from "./Components/About";
import RegionOne from "./Containers/RegionOne";
import RegionTwo from "./Containers/RegionTwo";
import RegionThree from "./Containers/RegionThree";
import RegionFour from "./Containers/RegionFour";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path="/add" component={Add} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/bizz/:id" component={Details} />
      <Route exact path="/about" component={About} />
      <ProtectedRoute exact path="/region/1" component={RegionOne} />
      <ProtectedRoute exact path="/region/2" component={RegionTwo} />
      <ProtectedRoute exact path="/region/3" component={RegionThree} />
      <ProtectedRoute exact path="/region/4" component={RegionFour} />
    </Switch>
  );
};

export default Router;
