import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import HandleLogin from "./HandleLogin";

class App extends Component {
  state = {
    userName: "",
    userPassword: "",
    redirectHome: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };
    console.log(userObject);

    this.props.loginUser(userObject);
  };

  // componentDidUpdate() {
  //   if (this.props.user.userName !== "") {
  //     document.cookie = "loggedIn=true;max-age=600*1000";
  //     this.setState({ redirect: true });
  //   } else {
  //   }
  // }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Container>
            <form className="login-from" onSubmit={this.login}>
              <h3>Welcome!</h3>

              <TextField
                variant="outlined"
                fullWidth="500px"
                required
                onChange={this.handleTextChange}
                value={this.state.userName}
                name="userName"
                label="Username"
                type="text"
              />

              <TextField
                variant="outlined"
                fullWidth="500px"
                required
                onChange={this.handleTextChange}
                value={this.state.userPassword}
                name="userPassword"
                label="Password"
                type="password"
              />

              <Button
                onCLick={this.HandleLogin}
                type="submit"
                className="btn btn-primary btn-block"
                variant="contained"
              >
                Login
              </Button>

              <Link to="/sign-up">
                <Button
                  className="btn btn-secondary btn-block"
                  variant="contained"
                >
                  New User?
                </Button>
              </Link>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
