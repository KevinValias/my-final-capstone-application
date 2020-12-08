import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import cookie from "cookie";
import WbCloudyIcon from "@material-ui/icons/WbCloudy";

const Navigation = (props) => {
  const cookies = cookie.parse(document.cookie);
  // console.log(props.user);
  return (
    <div>
      <AppBar postion="relative">
        <Toolbar>
          <IconButton color="white">
            <WbCloudyIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            CloudBodyHost
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Button>
                <Link to={"/about"}>ABOUT</Link>
              </Button>
            </li>
            <li className="nav-list-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button>
                    <Link to={"/add"}>ADD</Link>
                  </Button>
                </div>
              )}
            </li>
            <li className="nav-list-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button>
                    <Link to={"/dashboard"}>DASHBOARD</Link>
                  </Button>
                  <Link to="/">
                    <Button
                      onClick={() => {
                        props.user.token = null;
                        document.cookie = "loggedIn=false";
                      }}
                    >
                      Logout
                    </Button>
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-list-item">
              {document.cookie !== "loggedIn=true" && (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      {/* <Typography color="text-primary">
        {cookies.loggedIn && (
          <span className="welcome-message">
            Welcome Back:{" "}
            <span
              style={{
                letterSpacing: "3px",
                fontWeight: "bold",
              }}
            >
              {props.user}
            </span>
            !
          </span>
        )}
      </Typography> */}
    </div>
  );
};

export default Navigation;
