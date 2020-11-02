import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import cookie from "cookie";

// import { Link } from "react-router-dom";

const Navigation = (props) => {
  const cookies = cookie.parse(document.cookie);
  console.log(props.user);
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand">CloudBodyHost</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button>
                <Link to={"/home"}>HOME</Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button>
                <Link to={"/about"}>ABOUT</Link>
              </Button>
            </li>
            <li className="nav-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button>
                    <Link to={"/dashboard"}>DASHBOARD</Link>
                  </Button>
                  <Button
                    onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/home");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
            <li className="nav-list-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button>
                    <Link to="/Add">ADD</Link>
                  </Button>
                  <Button
                    onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/login");
                    }}
                  ></Button>
                </div>
              )}
            </li>
            <li className="nav-list-item">
              {document.cookie !== "loggedIn=true" && (
                <Button
                  onClick={() => {
                    document.cookie = "loggedIn=";
                    window.location.replace("/login");
                  }}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
