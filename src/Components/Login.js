import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    username: "",
    password: "",
    redirectHome: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";
    this.props.setUser(this.state.username);
    this.setState({ redirecthome: true });
  };

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
                value={this.state.username}
                name="username"
                label="Username"
                type="text"
              />

              <TextField
                variant="outlined"
                fullWidth="500px"
                required
                onChange={this.handleTextChange}
                value={this.state.password}
                name="password"
                label="Password"
                type="password"
              />

              <Button
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
