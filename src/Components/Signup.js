import React, { Component } from "react";
import { Button, Link, TextField } from "@material-ui/core";

class SignUp extends Component {
  state = {
    userName: "",
    userPassword: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  createAccount = (e) => {
    console.log("is create account running?");
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };
    console.log(userObject + "this is the user object");
    e.preventDefault();
    this.props.setUser(userObject);
    if (this.props.user.userName !== "") {
    } else {
    }
  };
  render() {
    return (
      <div className="sign-up-auth-wrapper">
        <div className="sign-up-auth-inner">
          <form onSubmit={this.createAccount}>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>User Name</label>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.userName}
                name="userName"
                className="form-control"
                lable="Name"
                type="text"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.userPassword}
                type="password"
                className="form-control"
                name="userPassword"
                label="Password"
              />
            </div>
            <Link to="/login">
              <Button
                type="submit"
                className="btn btn-secondary btn-block"
                variant="contained"
              >
                Create Account
              </Button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
