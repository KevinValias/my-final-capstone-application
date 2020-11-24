import React, { Component } from "react";
import { Link } from "react-router-dom";

createAccount = (e) => {
  const userObject = {
    userName: this.state.userName,
    userPassword: this.state.userPassword,
  };
  e.preventDefault();
  this.props.setUser(userObject);
  if (this.props.user.userName !== "") {
  } else {
  }
};

class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-auth-wrapper">
        <div className="sign-up-auth-inner">
          <form onSubmit={this.createAcount}>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
