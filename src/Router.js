import React from "react";
import { Switch, Route } from "react-router";
// import cookie from "cookie";
// import SignUp from "./Components/SignUp";
import Login from "./Containers/Login";
import Home from "./Components/Home";
// import { Dashboard } from "@material-ui/icons";
// import Add from "./Components/Add";
// import About from "./Components/About";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/sign-in" component={Login} /> */}
      {/* <Route exact path="/sign-up" component={SignUp} /> */}
      {/* <Route exact path="/bizz/:id" component={Details} /> */}
      {/* <Route exact path="/add" component={Add} /> */}
      <Route path="/login" component={Login} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      {/* <Route exact path="/about" component={About} /> */}
    </Switch>
  );
};

export default Router;
